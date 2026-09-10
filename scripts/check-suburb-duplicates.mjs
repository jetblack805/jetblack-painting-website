/**
 * Near-duplicate check across the suburb landing pages.
 *
 * WHY THIS EXISTS: 99 suburb pages built from one template is the shape a
 * doorway-page penalty takes if the bodies converge. A gate has been quoted in
 * the audit brief for weeks — "25.5% avg, worst ~47%, gate 45%/55%" — but the
 * script that produced those figures was never committed, so no later run could
 * reproduce them. On 2026-09-09 a freshly written check returned 31.4% avg and
 * 55.3% worst, and there was no way to tell drift from a different
 * implementation. A gate that cannot be re-measured is not a gate. This file is
 * the implementation of record; its numbers are comparable to each other and to
 * nothing else, which is the point.
 *
 * METHOD: 6-word shingles over the crawler-visible text of each page, Jaccard
 * similarity against every other suburb page, reporting each page's worst twin.
 * Suburb names are neutralised first — otherwise two pages differing only by
 * name score as less similar than they are, which flatters the result.
 * <script> and <style> are stripped: JSON-LD is not visible text, and shared
 * schema across pages would inflate every pair equally.
 *
 * usage: node scripts/check-suburb-duplicates.mjs [--verbose]
 * exit 1 if the average worst-twin exceeds AVG_GATE or any pair exceeds ANY_GATE.
 */
import fs from "node:fs";
import path from "node:path";

const AVG_GATE = 0.45;
const ANY_GATE = 0.55;
const SHINGLE = 6;
const VERBOSE = process.argv.includes("--verbose");

// Keysborough is /keysborough-painters/, not /painter-keysborough/ — a historical
// exception that predates the naming convention. Missing it silently drops a page.
const isSuburb = (p) => /^public\/(painter-[^/]+|keysborough-painters)\/index\.html$/.test(p);

const pages = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (e.name === "index.html" && isSuburb(p)) pages.push(p);
  }
})("public");
pages.sort();

if (pages.length === 0) {
  console.error("[suburb-dup] found no suburb pages — run the generators first");
  process.exit(1);
}

const decode = (s) =>
  s
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCharCode(parseInt(n, 16)))
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&");

const slug = (p) => p.split("/")[1];
const names = pages.map((p) => slug(p).replace(/^painter-/, "").replace(/-painters$/, "").replace(/-/g, " "));

function shingles(file) {
  let t = fs.readFileSync(file, "utf8");
  t = t.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
  t = decode(t.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim().toLowerCase();
  for (const n of names) t = t.split(n).join(" _suburb_ ");
  const w = t.split(" ").filter(Boolean);
  const s = new Set();
  for (let i = 0; i + SHINGLE <= w.length; i++) s.add(w.slice(i, i + SHINGLE).join(" "));
  return s;
}

const sets = pages.map(shingles);
const worstOf = [];
for (let i = 0; i < sets.length; i++) {
  let best = 0;
  let twin = "";
  for (let k = 0; k < sets.length; k++) {
    if (i === k) continue;
    let inter = 0;
    for (const g of sets[i]) if (sets[k].has(g)) inter++;
    const j = inter / (sets[i].size + sets[k].size - inter);
    if (j > best) {
      best = j;
      twin = slug(pages[k]);
    }
  }
  worstOf.push({ page: slug(pages[i]), twin, score: best });
}

worstOf.sort((a, b) => b.score - a.score);
const avg = worstOf.reduce((a, b) => a + b.score, 0) / worstOf.length;
const over = worstOf.filter((w) => w.score > ANY_GATE);

const pct = (n) => `${(n * 100).toFixed(1)}%`;
if (VERBOSE) for (const w of worstOf) console.log(`  ${pct(w.score).padStart(6)}  ${w.page}  vs  ${w.twin}`);
else for (const w of worstOf.slice(0, 5)) console.log(`  ${pct(w.score).padStart(6)}  ${w.page}  vs  ${w.twin}`);

console.log(
  `\n[suburb-dup] ${pages.length} pages · avg worst-twin ${pct(avg)} (gate ${pct(AVG_GATE)}) · ` +
    `worst ${pct(worstOf[0].score)} (gate ${pct(ANY_GATE)}) · ${over.length} over`,
);

const failed = avg > AVG_GATE || over.length > 0;
console.log(failed ? "[suburb-dup] FAILED" : "[suburb-dup] clean");
process.exit(failed ? 1 : 0);
