// Near-duplicate gate for generated blog posts.
//
//   node scripts/check-blog-duplicates.mjs          # check all
//   node scripts/check-blog-duplicates.mjs <slug>   # check one (pre-publish)
//
// Exits non-zero if any post breaches the gate, so a publishing run fails
// closed rather than shipping near-duplicate content.
//
// WHY THIS IS THE IMPORTANT FILE
// Publishing ~30 posts a month about one trade in one city converges fast:
// every article wants to say prep matters, Melbourne weather is hard on paint,
// and get three quotes. Past ~50 posts the marginal article is mostly a
// recombination of earlier ones. This gate is what keeps that honest — it
// measures each new post against every existing blog post AND against the
// service pages, and refuses the ones that are just a reshuffle.
//
// METHOD NOTE, learned the hard way on 2026-09-02
// The suburb-page duplicate check produced a FALSE FAILURE (57.8% against a 55%
// gate) because it neutralised only each page's OWN suburb name, leaving
// neighbouring suburb names in the text — and adjacent suburbs cross-link, so
// the shared tokens inflated the score. Neutralise EVERY place name across
// EVERY document, or the number is wrong. Same rule applies here.
//
// POSITIVE CONTROL, run 2026-09-03
// A gate that never fires is worse than no gate. This one was verified by
// feeding it a deliberate near-duplicate (the body of an existing article
// re-wrapped as a new post): it scored 54.8% and failed, while a genuinely new
// article scored 0.0%. Re-run that control if you change the metric — an
// original post scoring 0.0% is CORRECT, not a broken comparison.

import fs from "node:fs";
import path from "node:path";
import { loadPosts, route, REPO_ROOT } from "./blog-posts.mjs";

// Gate. Deliberately stricter than the 45%/55% suburb gate: suburb pages are
// intentionally near-identical templates differing by locality, whereas two
// blog posts scoring 40% against each other are genuinely saying the same
// thing twice and only one of them deserves to exist.
const MAX_ANY = 0.28; // well clear of the 17.7% human-written ceiling
const WARN_AT = 0.22;

// Stopwords are deliberately KEPT. An earlier version stripped them, which made
// 4-word shingles span so much text that exact matches never occurred and the
// gate scored 0.0% against a 17-document corpus — a gate that cannot fire.
// Calibrated 2026-09-03 against the 16 hand-written articles and service pages
// already on the site: genuinely distinct human-written pages score mean 10.6%,
// max 17.7% once shared boilerplate is discounted.

/** Every Melbourne place name we publish about, so locality never inflates a score. */
function placeTokens() {
  const t = new Set();
  for (const d of fs.readdirSync(path.join(REPO_ROOT, "public"))) {
    const m = d.match(/^painter-(.+)$/) || d.match(/^(.+)-painters$/);
    if (m) m[1].split("-").forEach((w) => t.add(w));
  }
  ["melbourne", "victoria", "vic", "australia", "australian", "mordialloc", "bayside", "peninsula"].forEach((w) =>
    t.add(w),
  );
  return t;
}
const PLACES = placeTokens();

function shingles(text, n = 6) {
  const words = text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w && !PLACES.has(w));
  const out = new Set();
  for (let i = 0; i + n <= words.length; i++) out.add(words.slice(i, i + n).join(" "));
  return out;
}

const jaccard = (a, b) => {
  if (!a.size || !b.size) return 0;
  let inter = 0;
  for (const s of a) if (b.has(s)) inter++;
  return inter / (a.size + b.size - inter);
};

/** Prose of a generated post, from the JSON (not the rendered page). */
function postProse(p) {
  return [
    p.intro,
    ...p.sections.flatMap((s) => [s.heading, ...s.paragraphs]),
    ...p.faqs.flatMap((f) => [f.question, f.answer]),
  ].join(" ");
}

/** Prose of any already-published page, from its generated static HTML. */
function pageProse(file) {
  let h = fs.readFileSync(file, "utf8");
  h = h
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "");
  return h
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/gi, " ")
    .replace(/\s+/g, " ");
}

const posts = loadPosts();
const only = process.argv[2];

// Corpus: existing hand-written blog posts + service pages. These are what a new
// post must not merely restate.
const corpus = [];
const pub = path.join(REPO_ROOT, "public");
for (const dir of ["blog", "services"]) {
  const base = path.join(pub, dir);
  if (!fs.existsSync(base)) continue;
  for (const d of fs.readdirSync(base)) {
    const f = path.join(base, d, "index.html");
    if (fs.existsSync(f)) corpus.push({ id: `/${dir}/${d}`, sh: shingles(pageProse(f)) });
  }
}
// plus the generated posts themselves, so post 30 is checked against post 29
for (const p of posts) corpus.push({ id: route(p), sh: shingles(postProse(p)), generated: true });

// Boilerplate discount. Nav, footer and the shared call-to-action appear on every
// page; without this they inflate every comparison by roughly ten points and the
// threshold would be measuring the template rather than the writing.
{
  const df = new Map();
  const all = [...corpus.map((c) => c.sh), ...posts.map((p) => shingles(postProse(p)))];
  for (const sh of all) for (const g of sh) df.set(g, (df.get(g) || 0) + 1);
  const cutoff = Math.max(2, Math.floor(all.length * 0.5));
  const common = new Set([...df].filter(([, n]) => n > cutoff).map(([g]) => g));
  for (const c of corpus) for (const g of common) c.sh.delete(g);
  globalThis.__common = common;
  console.log(`[dup] boilerplate discount: ${common.size} shingles seen in >${cutoff}/${all.length} docs`);
}

let failed = 0;
let warned = 0;
const targets = only ? posts.filter((p) => p.slug === only) : posts;
if (only && !targets.length) {
  console.error(`[dup] no generated post with slug "${only}"`);
  process.exit(2);
}

for (const p of targets) {
  const me = route(p);
  const sh = shingles(postProse(p));
  for (const g of globalThis.__common) sh.delete(g);
  let worst = { id: "—", j: 0 };
  for (const c of corpus) {
    if (c.id === me) continue;
    const j = jaccard(sh, c.sh);
    if (j > worst.j) worst = { id: c.id, j };
  }
  const pct = (worst.j * 100).toFixed(1);
  if (worst.j >= MAX_ANY) {
    console.error(`FAIL  ${me}  ${pct}% vs ${worst.id}  (gate ${(MAX_ANY * 100).toFixed(0)}%)`);
    failed++;
  } else if (worst.j >= WARN_AT) {
    console.warn(`warn  ${me}  ${pct}% vs ${worst.id}`);
    warned++;
  } else {
    console.log(`ok    ${me}  ${pct}% vs ${worst.id}`);
  }
}

console.log(
  `\n[dup] ${targets.length} checked · ${failed} failed · ${warned} warned · ` +
    `corpus ${corpus.length} documents · gate ${(MAX_ANY * 100).toFixed(0)}% any pair`,
);
process.exit(failed ? 1 : 0);
