// Metadata audit across BOTH rendering layers.
//
//   node scripts/check-metadata.mjs
//
// WHY THIS EXISTS
// Two lessons, both learned the hard way, are encoded here.
//
// 1. THE HOMEPAGE WAS NEVER BEING CHECKED.
//    The daily audit globbed `public/**/index.html`, which does not match
//    `client/index.html` — and the homepage is the ONE page that does not go
//    through generate-static-pages.mjs. So the single most important page on
//    the site sat outside the metadata baseline indefinitely. Found on
//    2026-09-06 only because a third-party tool audited the homepage directly.
//
// 2. MEASURE DECODED TEXT, NOT SOURCE.
//    That same tool reported the homepage title as 61 characters and told Jimmy
//    to shorten it. It was counting `&amp;` as five characters. Rendered, the
//    title is 57. Google measures what it renders. A checker that measures the
//    source will invent work that makes the title WORSE.
//
// Exits non-zero if anything fails, so it can gate a run.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");

const TITLE_MAX = 60;
const DESC_MAX = 158;
// Long-standing accepted exception. Do not "fix" without a reason.
const TITLE_EXCEPTIONS = new Set(["/painter-hastings/"]);

function decode(s) {
  return s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&nbsp;/g, " ");
}

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else if (e.name === "index.html") out.push(p);
  }
  return out;
}

const pages = walk(path.join(ROOT, "public")).map((f) => ({
  route: "/" + path.relative(path.join(ROOT, "public"), path.dirname(f)).replace(/\\/g, "/") + "/",
  file: f,
}));
// The homepage. This is the line the old check was missing.
pages.push({ route: "/", file: path.join(ROOT, "client/index.html") });

const titles = new Map();
const descs = new Map();
const canons = new Map();
const h1s = new Map();
const problems = [];

for (const { route, file } of pages) {
  const s = fs.readFileSync(file, "utf8");
  const tm = s.match(/<title>([\s\S]*?)<\/title>/);
  const dm = s.match(/name="description"\s+content="([\s\S]*?)"/);
  const cm = s.match(/rel="canonical"\s+href="([\s\S]*?)"/);
  const hm = [...s.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];

  const title = tm ? decode(tm[1]).trim() : "";
  const desc = dm ? decode(dm[1]).trim() : "";
  const canon = cm ? cm[1].trim() : "";
  const h1 = hm.map((m) => decode(m[1].replace(/<[^>]+>/g, "")).trim());

  if (!title) problems.push(`${route} missing title`);
  if (!desc) problems.push(`${route} missing description`);
  if (title.length > TITLE_MAX && !TITLE_EXCEPTIONS.has(route))
    problems.push(`${route} title ${title.length} > ${TITLE_MAX} (decoded)`);
  if (desc.length > DESC_MAX) problems.push(`${route} description ${desc.length} > ${DESC_MAX}`);
  if (h1.length !== 1) problems.push(`${route} has ${h1.length} H1 tags, expected 1`);
  if (/name="keywords"/.test(s)) problems.push(`${route} carries a keywords meta tag`);

  for (const [map, val] of [
    [titles, title],
    [descs, desc],
    [canons, canon],
    [h1s, h1[0]],
  ]) {
    if (val) map.set(val, [...(map.get(val) || []), route]);
  }
}

for (const [label, map] of [
  ["title", titles],
  ["description", descs],
  ["canonical", canons],
  ["H1", h1s],
]) {
  for (const [val, routes] of map) {
    if (routes.length > 1)
      problems.push(`duplicate ${label} across ${routes.length}: ${routes.slice(0, 3).join(", ")} — ${JSON.stringify(val.slice(0, 60))}`);
  }
}

const home = pages.find((p) => p.route === "/");
console.log(`[metadata] ${pages.length} pages checked (public/** + ${path.relative(ROOT, home.file)})`);
console.log(`[metadata] measured on DECODED text — "&amp;" counts as one character, as Google renders it`);
if (problems.length) {
  console.error(`[metadata] ${problems.length} problem(s):`);
  for (const p of problems) console.error("  - " + p);
  process.exit(1);
}
console.log("[metadata] clean");
