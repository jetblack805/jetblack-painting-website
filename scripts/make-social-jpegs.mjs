/**
 * Build JPEG twins of the published project photos for Google Business Profile.
 *
 * WHY THIS EXISTS: GBP's create_local_post accepts a publicly reachable JPG or
 * PNG only — it will not take webp, which is what the entire project photo
 * library is. Google fetches the image from our own origin at post time, so the
 * file has to actually be deployed and reachable, not just present in the repo.
 *
 * Output goes to public/social/, which is deliberately kept OUT of the sitemap
 * and marked noindex by the worker (see the /social/ branch in worker/index.js).
 * These are byte-for-byte the same photographs already published under
 * /projects/ — a second indexable copy of every image would be duplicate image
 * content for no gain. noindex via header rather than robots.txt Disallow is
 * deliberate: a Disallow could block Google's own fetch of the post image.
 *
 * Source of truth is public/projects/*.webp — the CROPPED, EXIF-corrected files,
 * not the phone originals. Re-running is safe and idempotent.
 *
 * usage: node scripts/make-social-jpegs.mjs [--force]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC_DIR = path.resolve(__dirname, "../public/projects");
const OUT_DIR = path.resolve(__dirname, "../public/social");
const QUALITY = 0.85;
// The repo's 250KB speed baseline deliberately does NOT apply here. That ceiling
// exists because every byte of a project photo is on the critical path of a
// suburb page load. Nothing on the site ever requests these files: they are
// fetched once, server-side, by Google when a post is created. Squeezing them
// to 250KB pushed several down to quality 0.54 — visibly degrading Jimmy's work
// in the Maps panel to protect a page-load budget they are not part of.
// 900KB is a sanity cap against a runaway file, not a performance target.
const MAX_BYTES = 900 * 1024;
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

// Full-size files only: the -800 variants are responsive srcset entries and
// would just be smaller duplicates here.
const sources = fs
  .readdirSync(SRC_DIR)
  .filter((f) => f.endsWith(".webp") && !f.endsWith("-800.webp"))
  .sort();

// public/social/ also holds cover-*.jpg — 16:9 crops built by hand for the
// Business Profile's COVER slot, which rejects the 4:3 project photos outright
// with a bare "invalid argument". They have no .webp source under
// public/projects, so this script neither writes nor prunes them; deleting one
// would silently break the profile's cover image.

const browser = await loadPlaywright().chromium.launch({
  executablePath: fs.existsSync("/opt/pw-browsers/chromium")
    ? "/opt/pw-browsers/chromium"
    : undefined,
});
const page = await browser.newPage();
await page.goto("about:blank");

let written = 0;
let skipped = 0;
for (const file of sources) {
  const outName = file.replace(/\.webp$/, ".jpg");
  const outPath = path.join(OUT_DIR, outName);
  if (!FORCE && fs.existsSync(outPath)) {
    skipped++;
    continue;
  }
  // Handed to the browser as a data: URL — about:blank cannot read file://.
  const url = `data:image/webp;base64,${fs.readFileSync(path.join(SRC_DIR, file)).toString("base64")}`;

  let quality = QUALITY;
  let buf = null;
  for (let attempt = 0; attempt < 5; attempt++) {
    const dataUrl = await page.evaluate(
      async ({ url, quality }) => {
        const img = new Image();
        await new Promise((res, rej) => {
          img.onload = res;
          img.onerror = () => rej(new Error("decode failed"));
          img.src = url;
        });
        const c = document.createElement("canvas");
        c.width = img.naturalWidth;
        c.height = img.naturalHeight;
        const ctx = c.getContext("2d");
        // JPEG has no alpha. Any transparency would composite to black without
        // this, so lay down white first.
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, c.width, c.height);
        ctx.drawImage(img, 0, 0);
        return c.toDataURL("image/jpeg", quality);
      },
      { url, quality },
    );
    buf = Buffer.from(dataUrl.split(",")[1], "base64");
    if (buf.length <= MAX_BYTES) break;
    quality -= 0.05;
  }

  if (buf.length > MAX_BYTES) {
    throw new Error(`${outName} is ${(buf.length / 1024) | 0}KB, over the 900KB sanity cap`);
  }
  // GBP rejects anything under 10KB. Nothing in this library comes close to
  // that, but a silent under-size file would fail at post time, not build time.
  if (buf.length < 10 * 1024) {
    throw new Error(`${outName} is only ${(buf.length / 1024).toFixed(1)}KB, under GBP's 10KB floor`);
  }
  fs.writeFileSync(outPath, buf);
  written++;
  console.log(`  ${outName}  ${(buf.length / 1024) | 0}KB  q=${quality.toFixed(2)}`);
}

await browser.close();
console.log(
  `\n[social-jpegs] ${written} written, ${skipped} already present, ${sources.length} sources` +
    (skipped && !FORCE ? " — pass --force to rebuild existing" : ""),
);
