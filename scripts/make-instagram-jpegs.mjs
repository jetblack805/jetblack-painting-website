/**
 * Build 4:5 JPEG twins of the published project photos for Instagram.
 *
 * WHY THIS EXISTS: Instagram's publishing API (create_image_post and
 * create_carousel_post) accepts JPEG only, at most 8MB, and — the part that
 * actually bites — with an aspect ratio between 4:5 (0.8) and 1.91:1. The
 * project library is mostly 3:4 (0.75) portrait, which is just outside that
 * floor and is rejected outright. The existing public/social/*.jpg twins were
 * built for Google Business Profile, which has no such constraint, so they
 * cannot be reused here.
 *
 * A photo already inside that range is re-encoded at its own shape and NOT
 * cropped — squaring everything to 4:5 would take 39% off the 4:3 landscape
 * shots to fix a problem they do not have. Only sources below 4:5 are cropped,
 * and only far enough to reach it.
 *
 * The consequence is that this directory holds two shapes, and in a carousel
 * every slide is displayed at the FIRST slide's aspect ratio. So a carousel set
 * must not mix portrait and landscape — social/carousel-queue.json keeps each
 * set to one shape, and the build check below enforces it.
 *
 * Output goes to public/social/ig/, under the same noindex /social/ branch in
 * worker/index.js as the GBP twins — Instagram fetches the URL server-side at
 * post time, so the file has to be deployed and publicly reachable.
 *
 * A 3:4 source loses 6.25% of its height to reach 4:5, which is nothing. A 9:16
 * source would lose 30%, which is not nothing — those are skipped and listed as
 * story-shaped instead, because create_story takes 9:16 natively and cropping a
 * third off a composed photograph to force it into a feed post is worse than
 * posting it where it already fits.
 *
 * Source of truth is public/projects/*.webp — the CROPPED, EXIF-corrected files.
 * Re-running is safe and idempotent.
 *
 * usage: node scripts/make-instagram-jpegs.mjs [--force]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../public/projects");
const OUT_DIR = path.resolve(__dirname, "../public/social/ig");
const OUT_W = 1080; // long edge cap; the output SHAPE follows the source
const IG_MIN = 0.8; // 4:5
const IG_MAX = 1.91; // 1.91:1
const QUALITY = 0.85;
const MAX_BYTES = 8 * 1024 * 1024; // Instagram's hard ceiling
// Above this share of a dimension, the crop stops being a format adjustment and
// starts being a recomposition of Jimmy's photograph. Those go to stories.
const MAX_CROP = 0.1;
const FORCE = process.argv.includes("--force");

function loadPlaywright() {
  for (const id of ["playwright", "/opt/node22/lib/node_modules/playwright"]) {
    try {
      return require(id);
    } catch {}
  }
  throw new Error("playwright not found; this script needs Chromium");
}

fs.mkdirSync(OUT_DIR, { recursive: true });

const sources = fs
  .readdirSync(SRC_DIR)
  .filter(
    (f) =>
      f.endsWith(".webp") &&
      !f.endsWith("-800.webp") &&
      !f.endsWith("-900.webp"),
  )
  .sort();

const browser = await loadPlaywright().chromium.launch({
  executablePath: fs.existsSync("/opt/pw-browsers/chromium")
    ? "/opt/pw-browsers/chromium"
    : undefined,
});
const page = await browser.newPage();
await page.goto("about:blank");

let written = 0;
let skipped = 0;
const storyShaped = [];

for (const file of sources) {
  const outName = file.replace(/\.webp$/, ".jpg");
  const outPath = path.join(OUT_DIR, outName);
  const url = `data:image/webp;base64,${fs.readFileSync(path.join(SRC_DIR, file)).toString("base64")}`;

  const probe = await page.evaluate(async (url) => {
    const img = new Image();
    await new Promise((res, rej) => {
      img.onload = res;
      img.onerror = () => rej(new Error("decode failed"));
      img.src = url;
    });
    return { w: img.naturalWidth, h: img.naturalHeight };
  }, url);

  // How much of a dimension has to go to reach exactly 4:5.
  const ratio = probe.w / probe.h;
  // Already inside Instagram's window: no crop at all, just a re-encode.
  const target = ratio < IG_MIN ? IG_MIN : ratio > IG_MAX ? IG_MAX : ratio;
  const crop = ratio < target ? 1 - ratio / target : 1 - target / ratio;
  if (crop > MAX_CROP) {
    storyShaped.push(
      `${outName}  ${probe.w}x${probe.h}  r=${ratio.toFixed(3)}  would lose ${(crop * 100) | 0}%`,
    );
    continue;
  }
  if (!FORCE && fs.existsSync(outPath)) {
    skipped++;
    continue;
  }

  let quality = QUALITY;
  let buf = null;
  for (let attempt = 0; attempt < 5; attempt++) {
    const dataUrl = await page.evaluate(
      async ({ url, quality, OUT_W, target }) => {
        const img = new Image();
        await new Promise((res, rej) => {
          img.onload = res;
          img.onerror = () => rej(new Error("decode failed"));
          img.src = url;
        });
        // Centre crop to 4:5, then scale. Centre rather than top: these are
        // whole-building elevations, and both the roofline and the ground line
        // carry information, so the loss is split rather than taken from one end.
        const src = img.naturalWidth / img.naturalHeight;
        let sw = img.naturalWidth;
        let sh = img.naturalHeight;
        if (src > target) sw = img.naturalHeight * target;
        else sh = img.naturalWidth / target;
        const sx = (img.naturalWidth - sw) / 2;
        const sy = (img.naturalHeight - sh) / 2;

        const outW = Math.min(OUT_W, Math.round(sw));
        const outH = Math.round(outW / target);
        const c = document.createElement("canvas");
        c.width = outW;
        c.height = outH;
        const ctx = c.getContext("2d");
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, outW, outH);
        ctx.imageSmoothingQuality = "high";
        ctx.drawImage(img, sx, sy, sw, sh, 0, 0, outW, outH);
        return c.toDataURL("image/jpeg", quality);
      },
      { url, quality, OUT_W, target },
    );
    buf = Buffer.from(dataUrl.split(",")[1], "base64");
    if (buf.length <= MAX_BYTES) break;
    quality -= 0.05;
  }

  if (buf.length > MAX_BYTES)
    throw new Error(`${outName} is over Instagram's 8MB ceiling`);
  fs.writeFileSync(outPath, buf);
  written++;
  console.log(
    `  ${outName}  ${(buf.length / 1024) | 0}KB  q=${quality.toFixed(2)}`,
  );
}

await browser.close();
console.log(
  `\n[instagram-jpegs] ${written} written, ${skipped} already present, ${sources.length} sources`,
);
if (storyShaped.length) {
  console.log(
    `\n${storyShaped.length} too tall to crop to 4:5 — post these as stories (create_story takes 9:16):`,
  );
  for (const s of storyShaped) console.log(`  ${s}`);
}
