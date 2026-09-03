// Generates the service-area coverage map for the homepage.
//
//   node scripts/generate-coverage-map.mjs
//
// Emits ONE piece of markup consumed by BOTH layers:
//   client/src/components/coverageMapData.ts   (React reads this)
//   client/index.html                          (crawlers read this, between markers)
//
// WHY IT IS BUILT THIS WAY
//
// 1. INLINE SVG, NOT THE GOOGLE MAPS JS API.
//    The Maps JavaScript SDK is not loaded anywhere on this site — the existing
//    GoogleMap component is a plain iframe embed with no SDK and no API key. A
//    component calling `new google.maps.Map()` therefore renders nothing at all.
//    That is exactly what the previous ServiceAreaMap did: it checked
//    `typeof google === "undefined"`, logged an error and bailed, leaving an
//    empty section on the homepage. Inline SVG needs no key, no script, no
//    network request, and works with JavaScript disabled.
//
// 2. IT MUST EXIST IN THE STATIC LAYER OR IT IS WORTHLESS FOR RANKING.
//    A JS-rendered map contributes nothing to local ranking, because the value
//    is not the picture — it is the crawlable, linked list of served suburbs and
//    the areaServed structured data. client/index.html is the ONLY page that
//    does not go through generate-static-pages.mjs, so the homepage's crawler
//    copy has to be maintained here.
//
// 3. suburbsData.ts IS THE SINGLE SOURCE OF TRUTH.
//    The previous component hardcoded its own 90-entry coordinate list beside
//    the existing 81-entry one. Two lists drift. This reads the real one.
//
// 4. SUBURBS JIMMY HAS TAKEN OFF THE HOMEPAGE ARE EXCLUDED.
//    Toorak is organically unreachable from Mordialloc and Jimmy moved it to
//    off-page channels on 2026-08-17, then asked twice for it off the homepage.
//    The first version of this map put it back AND gave it a printed label.
//    HOMEPAGE_EXCLUDED below is the list; the /painter-toorak/ page itself stays
//    live, it is simply not featured from the homepage.
//
// 5. NOINDEXED SUBURBS ARE EXCLUDED.
//    The eight Casey-corridor pages are deliberately noindex and absent from the
//    sitemap. Linking them prominently from the homepage contradicts that.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

// ── read the real suburb data ────────────────────────────────────────────────
const src = fs.readFileSync(path.join(ROOT, "client/src/suburbsData.ts"), "utf8");
const entries = [];
const re =
  /(\w[\w-]*):\s*\{\s*name:\s*"([^"]+)",\s*coordinates:\s*\{\s*lat:\s*(-?[\d.]+),\s*lng:\s*(-?[\d.]+)\s*\}/g;
let m;
while ((m = re.exec(src))) {
  entries.push({ key: m[1], name: m[2], lat: Number(m[3]), lng: Number(m[4]) });
}
if (!entries.length) throw new Error("[coverage-map] parsed 0 suburbs from suburbsData.ts");

// ── resolve each to a live, indexable page ───────────────────────────────────
const pub = path.join(ROOT, "public");
// Slug candidates. The keys in suburbsData.ts are camelCase ("malvernEast")
// while the directories are kebab-case ("painter-malvern-east"), and a few keys
// are run-together lowercase ("southyarra") where only the display name
// kebab-cases correctly. Trying key-derived AND name-derived slugs recovered 24
// suburbs that a key-only lookup silently dropped.
const kebab = (s) =>
  s
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

function pageFor(key, name) {
  const slugs = [...new Set([kebab(key), kebab(name)])];
  const candidates = slugs.flatMap((s) => [`painter-${s}`, `${s}-painters`]);
  for (const candidate of candidates) {
    const f = path.join(pub, candidate, "index.html");
    if (fs.existsSync(f)) {
      const html = fs.readFileSync(f, "utf8");
      return { href: `/${candidate}/`, noindex: /noindex/i.test(html) };
    }
  }
  return null;
}

// Suburbs deliberately not featured on the homepage. Their pages stay live.
const HOMEPAGE_EXCLUDED = new Set(["Toorak"]);

const served = [];
const skipped = { nopage: [], noindex: [], excluded: [] };
for (const e of entries) {
  if (HOMEPAGE_EXCLUDED.has(e.name)) {
    skipped.excluded.push(e.name);
    continue;
  }
  const p = pageFor(e.key, e.name);
  if (!p) {
    skipped.nopage.push(e.name);
    continue;
  }
  if (p.noindex) {
    skipped.noindex.push(e.name);
    continue;
  }
  served.push({ ...e, href: p.href });
}
served.sort((a, b) => a.name.localeCompare(b.name));

// ── projection ───────────────────────────────────────────────────────────────
// Equirectangular, corrected for longitude convergence at Melbourne's latitude.
// Accurate enough for a schematic coverage diagram at this scale.
const HQ = { name: "Mordialloc", lat: -38.0131, lng: 145.0965 };
const PAD = 54;

const lats = served.map((s) => s.lat).concat(HQ.lat);
const lngs = served.map((s) => s.lng).concat(HQ.lng);
const minLat = Math.min(...lats),
  maxLat = Math.max(...lats);
const minLng = Math.min(...lngs),
  maxLng = Math.max(...lngs);
const kx = Math.cos((HQ.lat * Math.PI) / 180); // lng degrees are narrower this far south

const spanX = (maxLng - minLng) * kx;
const spanY = maxLat - minLat;

// The canvas is derived from the data's own aspect ratio. A fixed wide canvas
// left roughly a third of the image empty on each side, because this service
// area is markedly taller than it is wide — the Mornington Peninsula runs a long
// way south while the east-west spread is comparatively narrow. Extra width
// reserved on the right for the labels, which all extend rightward from a dot.
const LABEL_ROOM = 132;
const H = 640;
const scale = (H - PAD * 2) / spanY;
const W = Math.round(spanX * scale + PAD * 2 + LABEL_ROOM);
const offX = PAD;
const offY = PAD;

const px = (lng) => offX + (lng - minLng) * kx * scale;
const py = (lat) => offY + (maxLat - lat) * scale; // SVG y grows downward

// One degree of latitude ≈ 110.574 km — used to size the radius ring in real km.
const kmToPx = (km) => (km / 110.574) * scale;

const hqx = px(HQ.lng).toFixed(1);
const hqy = py(HQ.lat).toFixed(1);

// Label a readable subset: labelling 80 points produces an unreadable mess.
// Mordialloc is deliberately absent: the HQ marker already labels it, and
// including it here printed the name twice, overlapping itself.
const LABELLED = new Set([
  "Brighton", "Sorrento", "Box Hill", "Mentone",
  "Collingwood", "Bentleigh", "Camberwell", "Mornington", "Sandringham", "Frankston",
]);

const rings = [15, 30, 45]
  .map(
    (km) =>
      `<circle cx="${hqx}" cy="${hqy}" r="${kmToPx(km).toFixed(1)}" fill="none" ` +
      `stroke="#D0A050" stroke-opacity="0.16" stroke-width="1" stroke-dasharray="3 5"/>`,
  )
  .join("\n    ");

const dots = served
  .map((s) => {
    const x = px(s.lng).toFixed(1);
    const y = py(s.lat).toFixed(1);
    const label = LABELLED.has(s.name)
      ? `\n    <text x="${(Number(x) + 7).toFixed(1)}" y="${(Number(y) + 3.5).toFixed(1)}" ` +
        `fill="#8B8B90" font-size="10.5" font-family="system-ui,-apple-system,sans-serif">${s.name}</text>`
      : "";
    return (
      `<circle cx="${x}" cy="${y}" r="3.1" fill="#D0A050" fill-opacity="0.72"><title>${s.name}</title></circle>` +
      label
    );
  })
  .join("\n    ");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" role="img" aria-label="Map of the Melbourne suburbs Jetblack Painting services, centred on Mordialloc" style="width:100%;height:auto;display:block;background:#0C0C0E;border-radius:12px;">
    <title>Jetblack Painting service area across Melbourne</title>
    <desc>Schematic coverage map showing ${served.length} serviced Melbourne suburbs, centred on Mordialloc, with 15, 30 and 45 kilometre range rings.</desc>
    ${rings}
    ${dots}
    <circle cx="${hqx}" cy="${hqy}" r="7.5" fill="none" stroke="#D0A050" stroke-width="1.5" stroke-opacity="0.95"/>
    <circle cx="${hqx}" cy="${hqy}" r="3.6" fill="#D0A050"/>
    <text x="${hqx}" y="${(Number(hqy) + 22).toFixed(1)}" text-anchor="middle" fill="#EDEDEF" font-size="12" font-weight="600" font-family="system-ui,-apple-system,sans-serif">Mordialloc — base</text>
  </svg>`;

// ── outputs ──────────────────────────────────────────────────────────────────
const dataTs = `// GENERATED by scripts/generate-coverage-map.mjs — do not edit by hand.
// Source of truth: client/src/suburbsData.ts. Re-run \`pnpm generate-coverage-map\`.
//
// The same markup is injected into client/index.html so the static (crawler)
// layer and the React layer show the identical map and the identical suburb
// list. That parity is the whole point: a map only React can see does nothing
// for local ranking.

export const COVERAGE_SUBURB_COUNT = ${served.length};

export const COVERAGE_SUBURBS: { name: string; href: string }[] = ${JSON.stringify(
  served.map((s) => ({ name: s.name, href: s.href })),
  null,
  2,
)};

export const COVERAGE_MAP_SVG = ${JSON.stringify(svg)};
`;

const dataPath = path.join(ROOT, "client/src/components/coverageMapData.ts");
const prevData = fs.existsSync(dataPath) ? fs.readFileSync(dataPath, "utf8") : "";
if (prevData !== dataTs) fs.writeFileSync(dataPath, dataTs);

// static layer: inject between markers in client/index.html
const listHtml = served
  .map((s) => `<li><a href="${s.href}" style="color:#D0A050;">${s.name}</a></li>`)
  .join("\n          ");

const staticBlock = `      <h2 style="font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:1.4rem;color:#FCFCFC;margin:1.5rem 0 0.5rem;">Service Area Coverage Map</h2>
      <p style="line-height:1.6;margin-bottom:0.75rem;">
        Jetblack Painting is based in Mordialloc VIC 3195 and services ${served.length} Melbourne suburbs across
        Bayside, Kingston, Glen Eira, Stonnington, the inner east, the southeast and the Mornington Peninsula.
        The map below shows every suburb we cover, with 15, 30 and 45 kilometre rings measured from our Mordialloc base.
      </p>
      ${svg}
      <h3 style="font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:1.15rem;color:#FCFCFC;margin:1.5rem 0 0.5rem;">Every suburb we service</h3>
      <ul style="list-style:none;padding:0;margin:0 0 1.5rem;line-height:1.9;column-count:2;">
          ${listHtml}
      </ul>`;

const idxPath = path.join(ROOT, "client/index.html");
let idx = fs.readFileSync(idxPath, "utf8");
const A = "<!-- <coverage-map> -->";
const Z = "<!-- </coverage-map> -->";
const i = idx.indexOf(A);
const j = idx.indexOf(Z);
if (i === -1 || j === -1) {
  throw new Error(`[coverage-map] markers ${A} / ${Z} not found in client/index.html`);
}
const next = idx.slice(0, i + A.length) + "\n" + staticBlock + "\n      " + idx.slice(j);
const changed = next !== idx;
if (changed) fs.writeFileSync(idxPath, next);

console.log(
  `[coverage-map] ${served.length} suburbs plotted · ` +
    `skipped ${skipped.noindex.length} noindexed · ` +
    `${skipped.excluded.length} excluded from homepage (${skipped.excluded.join(", ") || "none"}) · ` +
    `${skipped.nopage.length} without a page · ` +
    `index.html ${changed ? "updated" : "unchanged"}`,
);
