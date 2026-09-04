// Resize and convert a photo for the site, using headless Chromium as the
// image pipeline.
//
//   node scripts/convert-photo.mjs <input> <output-basename> [maxWidth]
//   e.g. node scripts/convert-photo.mjs ~/photo.jpg exterior-safety-beach-after
//
// WHY THIS EXISTS
// Jimmy sends photos straight off his phone — typically 4032x3024 and 3-5MB.
// They cannot go on the site at that size: the pages are tuned for LCP and a
// few of these would undo that. But this environment has NO image tooling at
// all — no ImageMagick, PIL, vips, cwebp or sharp, and both PyPI and npm are
// blocked — so for a while photos simply could not be used.
//
// Chromium is installed for Playwright, and a <canvas> can resize and encode
// WebP. That is the whole trick here.
//
// EXIF ORIENTATION IS THE THING THAT BITES.
// Phone photos are usually stored landscape with an orientation flag telling
// the viewer to rotate. Jimmy's Safety Beach pair had orientation 6 on the
// BEFORE and 1 on the AFTER — so a naive resize would have produced one
// sideways image and one upright, and the pair would not have matched.
// Loading through an <img> element makes Chromium apply the flag during
// decode, and naturalWidth/naturalHeight then report the CORRECTED dimensions,
// so what we draw is already the right way up. The output carries no EXIF,
// which is fine precisely because the rotation is now baked into the pixels.
//
// Emits <basename>.webp at maxWidth and <basename>-900.webp, matching the
// srcSet convention every other gallery image uses.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Two conventions live in this repo and they differ. Service/gallery images are
// imported from client/src/assets/images with a "-900" small variant; suburb
// project photos are served from public/projects and referenced by URL with an
// "-800" variant. Pick with OUT=projects|assets.
const OUT = process.env.OUT === "projects" ? "projects" : "assets";
const OUT_DIR =
  OUT === "projects"
    ? path.resolve(__dirname, "../public/projects")
    : path.resolve(__dirname, "../client/src/assets/images");
const SMALL = OUT === "projects" ? 800 : 900;

function loadPlaywright() {
  for (const id of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(id);
    } catch {}
  }
  throw new Error(
    "playwright not found. This script needs Chromium; install playwright or run where it is available.",
  );
}

const [input, basename, maxWidthArg] = process.argv.slice(2);
if (!input || !basename) {
  console.error("usage: node scripts/convert-photo.mjs <input> <output-basename> [maxWidth]");
  process.exit(1);
}
const MAX_WIDTH = Number(maxWidthArg) || 1400;
// The repo rule is that no image in public/ exceeds 250KB (speed baseline in
// SEO-LOG.md). Detailed scenes — foliage, textured render, cloud — blow past
// that at the default quality even at sensible dimensions, so allow it to be
// tuned per photo rather than dropping the whole library's quality.
const QUALITY = Number(process.env.QUALITY) || 0.82;
if (!fs.existsSync(input)) throw new Error(`input not found: ${input}`);

const pw = loadPlaywright();
const browser = await pw.chromium.launch({
  executablePath: fs.existsSync("/opt/pw-browsers/chromium") ? "/opt/pw-browsers/chromium" : undefined,
});
const page = await browser.newPage();

// The page sits on about:blank, which cannot read file:// URLs, so the bytes
// are handed to the browser as a data: URL instead of a path.
const mime = /\.png$/i.test(input) ? "image/png" : /\.webp$/i.test(input) ? "image/webp" : "image/jpeg";
const url = `data:${mime};base64,${fs.readFileSync(path.resolve(input)).toString("base64")}`;

async function render(width) {
  return page.evaluate(
    async ({ url, width, quality, cropLetterbox }) => {
      const img = new Image();
      img.decoding = "sync";
      await new Promise((res, rej) => {
        img.onload = res;
        img.onerror = () => rej(new Error("image failed to decode"));
        img.src = url;
      });
      // naturalWidth/Height are post-EXIF-rotation in Chromium.
      let sx = 0,
        sy = 0,
        sw = img.naturalWidth,
        sh = img.naturalHeight;

      // Optional letterbox trim. Screen grabs of video arrive with black bars
      // top and bottom; shipping those would put black stripes across the page.
      // Scan inward for the first row that is not near-black. Opt-in, because a
      // genuinely dark photograph would otherwise lose real content.
      if (cropLetterbox) {
        const probe = document.createElement("canvas");
        probe.width = sw;
        probe.height = sh;
        const pctx = probe.getContext("2d", { willReadFrequently: true });
        pctx.drawImage(img, 0, 0);
        const rowIsDark = (y) => {
          const d = pctx.getImageData(0, y, sw, 1).data;
          for (let i = 0; i < d.length; i += 4 * 16) {
            if (d[i] > 24 || d[i + 1] > 24 || d[i + 2] > 24) return false;
          }
          return true;
        };
        let top = 0;
        while (top < sh / 3 && rowIsDark(top)) top++;
        let bottom = sh - 1;
        while (bottom > (sh * 2) / 3 && rowIsDark(bottom)) bottom--;
        if (top > 0 || bottom < sh - 1) {
          sy = top;
          sh = bottom - top + 1;
        }
      }

      const scale = Math.min(1, width / sw);
      const w = Math.round(sw * scale);
      const h = Math.round(sh * scale);
      const c = document.createElement("canvas");
      c.width = w;
      c.height = h;
      const ctx = c.getContext("2d");
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = "high";
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, w, h);
      return { data: c.toDataURL("image/webp", quality), w, h, sw, sh, sy };
    },
    { url, width, quality: QUALITY, cropLetterbox: process.env.CROP === "letterbox" },
  );
}

const results = [];
for (const [suffix, width] of [
  ["", MAX_WIDTH],
  [`-${SMALL}`, SMALL],
]) {
  const r = await render(width);
  const buf = Buffer.from(r.data.split(",")[1], "base64");
  const out = path.join(OUT_DIR, `${basename}${suffix}.webp`);
  fs.writeFileSync(out, buf);
  results.push({ out, ...r, bytes: buf.length });
}
await browser.close();

const first = results[0];
console.log(`source ${first.sw}x${first.sh} (after EXIF rotation${first.sy ? `, letterbox trimmed ${first.sy}px` : ""})`);
for (const r of results) {
  console.log(`  ${path.basename(r.out)}  ${r.w}x${r.h}  ${(r.bytes / 1024).toFixed(0)} KB`);
}
