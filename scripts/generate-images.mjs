import fs from 'node:fs';
import path from 'node:path';

// Safe, opt-in OG image generator.
// - Uses existing public/og-image.jpg as the base. Does nothing if that file is missing.
// - Writes per-route images into public/og/<slug>.(jpg|webp|avif).
// - Requires `sharp` as a devDependency (install locally: `pnpm add -D sharp`).
// - Run with: node scripts/generate-images.mjs

let sharp;
try {
  sharp = await import('sharp');
} catch (e) {
  console.error('sharp is not installed. Install with: pnpm add -D sharp');
  process.exit(0); // non-fatal: exit quietly so builds won't fail if not installed
}

const ROOT = path.resolve('.');
const KNOWN = path.join(ROOT, 'worker', 'known-paths.js');
const PUBLIC = path.join(ROOT, 'public');
const BASE_OG = path.join(PUBLIC, 'og-image.jpg');
const OUT_DIR = path.join(PUBLIC, 'og');

if (!fs.existsSync(BASE_OG)) {
  console.warn(`Base OG image not found at ${BASE_OG}. Skipping OG generation.`);
  process.exit(0);
}

fs.mkdirSync(OUT_DIR, { recursive: true });

let rawContent = '';
if (fs.existsSync(KNOWN)) rawContent = fs.readFileSync(KNOWN, 'utf8');

// Find routes that look like /painter-<slug>/ or /<slug>-painters/
const routeRegex = /"(\/painter[-\w\/]*)"/g;
const pluralRegex = /"(\/[-\w]+-painters)"/g;

const matches = new Set();
for (const m of rawContent.matchAll(routeRegex)) matches.add(m[1]);
for (const m of rawContent.matchAll(pluralRegex)) matches.add(m[1]);

// Always include root as default
if (matches.size === 0) matches.add('/');

function slugToSuburb(slug) {
  let s = slug.replace(/^\//, '').replace(/\/$/, '');
  s = s.replace(/^painter-/, '').replace(/-painters$/, '');
  s = s.replace(/-/g, ' ');
  if (!s) return '';
  return s.split(' ').map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
}

function escapeXml(s) {
  return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

async function makeOgForRoute(route) {
  const slug = route.replace(/^\//, '').replace(/\/$/, '') || 'default';
  const suburb = slugToSuburb(route) || 'Melbourne';
  const outBase = path.join(OUT_DIR, `${slug}`);
  const width = 1200;
  const height = 630;

  const title = suburb ? `Painters ${suburb}` : 'Jetblack Painting';
  const subtitle = 'Jetblack Painting — Melbourne';

  const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="rgba(0,0,0,0.18)" />
    <style>
      .title { fill: #FFFFFF; font-size: 56px; font-family: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; font-weight: 700; }
      .subtitle { fill: #F1C47E; font-size: 28px; font-family: system-ui, sans-serif; }
    </style>
    <text x="60" y="460" class="title">${escapeXml(title)}</text>
    <text x="60" y="520" class="subtitle">${escapeXml(subtitle)}</text>
  </svg>`;

  const svgBuffer = Buffer.from(svg);
  const img = sharp.default(BASE_OG).resize(width, height, { fit: 'cover' }).composite([{ input: svgBuffer, top: 0, left: 0 }]);

  await img.jpeg({ quality: 82 }).toFile(`${outBase}.jpg`);
  await img.webp({ quality: 80 }).toFile(`${outBase}.webp`);
  await img.avif({ quality: 50 }).toFile(`${outBase}.avif`);
  console.log(`Generated OG images for ${route} -> ${slug}.{jpg,webp,avif}`);
}

async function generate() {
  // default
  await makeOgForRoute('/');

  for (const route of matches) {
    if (route === '/') continue;
    try {
      await makeOgForRoute(route);
    } catch (e) {
      console.error('Failed to generate OG for', route, e);
    }
  }
}

generate().then(() => console.log('OG generation complete')).catch((e) => { console.error(e); process.exit(1); });
