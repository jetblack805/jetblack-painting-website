// Writes the homepage FAQ into client/index.html from ONE source:
// client/src/homeFaqs.ts.
//
//   node scripts/generate-home-faq.mjs
//
// WHY
// The homepage is the only page that does not go through
// generate-static-pages.mjs, so its crawlable HTML is hand-maintained. On
// 2026-09-04 an audit found FIVE FAQPage questions in the homepage JSON-LD
// while only two of them matched visible text — the other three were
// paraphrased in the prose or absent entirely. Google requires FAQ content to
// be visible on the page, so that was a live structured-data violation.
//
// This script writes BOTH halves from the same array in the same run:
//   1. the visible Q&A block, between <!-- <home-faq> --> markers
//   2. the FAQPage node's mainEntity inside the JSON-LD @graph
// so the two cannot drift apart again.
//
// The schema lives inside a JSON-LD @graph, where an HTML comment would break
// JSON parsing. So instead of markers the FAQPage object is located by its
// "@type": "FAQPage" key and its extent found by brace matching, and only that
// object's text is replaced. Everything else in the file stays byte-identical.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const idxPath = path.join(ROOT, "client/index.html");
const faqPath = path.join(ROOT, "client/src/homeFaqs.ts");

/** Pull the HOME_FAQS array out of the TypeScript source. */
function loadFaqs() {
  const src = fs.readFileSync(faqPath, "utf8");
  const key = "export const HOME_FAQS: HomeFaq[] = ";
  const i = src.indexOf(key);
  if (i === -1) throw new Error("[home-faq] HOME_FAQS declaration not found");
  // Search past the declaration itself — "HomeFaq[]" contains a "[" that is not
  // the array literal, and matching it silently yields an empty parse.
  const start = src.indexOf("[", i + key.length);
  // Brace/bracket match to the end of the array literal, skipping string bodies.
  let depth = 0,
    end = -1,
    quote = null;
  for (let k = start; k < src.length; k++) {
    const c = src[k];
    if (quote) {
      if (c === "\\") k++;
      else if (c === quote) quote = null;
      continue;
    }
    if (c === '"' || c === "'" || c === "`") quote = c;
    else if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        end = k + 1;
        break;
      }
    }
  }
  if (end === -1) throw new Error("[home-faq] could not find end of HOME_FAQS array");
  // The literal is plain data (string values only), so evaluating it is safe and
  // far more robust than regex against copy containing apostrophes, $ and dashes.
  const faqs = new Function(`return ${src.slice(start, end)};`)();
  if (!Array.isArray(faqs) || faqs.length < 3)
    throw new Error("[home-faq] expected at least 3 FAQs");
  for (const f of faqs) {
    if (!f.question || !f.answer) throw new Error("[home-faq] FAQ missing question or answer");
  }
  return faqs;
}

const esc = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const faqs = loadFaqs();
let idx = fs.readFileSync(idxPath, "utf8");
const before = idx;

// ---- 1. visible block -------------------------------------------------------
const A = "<!-- <home-faq> -->";
const Z = "<!-- </home-faq> -->";
const a = idx.indexOf(A);
const z = idx.indexOf(Z);
if (a === -1 || z === -1 || z < a)
  throw new Error(`[home-faq] markers ${A} / ${Z} not found in client/index.html`);

const H2 =
  `<h2 style="font-family:Georgia,'Times New Roman',serif;font-weight:400;` +
  `font-size:1.4rem;color:#FCFCFC;margin-bottom:0.5rem;">Common Questions</h2>`;

const visible = [
  `      ${H2}`,
  ...faqs.map(
    (f, i) =>
      `      <p style="line-height:1.6;margin-bottom:${i === faqs.length - 1 ? "1.5rem" : "0.5rem"};">` +
      `<strong style="color:#FCFCFC;">${esc(f.question)}</strong><br>${esc(f.answer)}</p>`,
  ),
].join("\n");

idx = idx.slice(0, a) + A + "\n" + visible + "\n      " + idx.slice(z);

// ---- 2. FAQPage schema ------------------------------------------------------
const marker = '"@type": "FAQPage"';
const m = idx.indexOf(marker);
if (m === -1) throw new Error("[home-faq] FAQPage node not found in the JSON-LD graph");

// Walk back to the "{" that opens this object, then forward to its match.
let objStart = idx.lastIndexOf("{", m);
let depth = 0,
  objEnd = -1,
  quote = null;
for (let k = objStart; k < idx.length; k++) {
  const c = idx[k];
  if (quote) {
    if (c === "\\") k++;
    else if (c === quote) quote = null;
    continue;
  }
  if (c === '"') quote = '"';
  else if (c === "{") depth++;
  else if (c === "}") {
    depth--;
    if (depth === 0) {
      objEnd = k + 1;
      break;
    }
  }
}
if (objEnd === -1) throw new Error("[home-faq] could not brace-match the FAQPage object");

const node = {
  "@type": "FAQPage",
  "@id": "https://jetblackpainting.com/#faq",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};
// Match the file's existing indentation for this node (6 spaces at its opening brace).
const serialised = JSON.stringify(node, null, 2)
  .split("\n")
  .map((line, i) => (i === 0 ? line : "      " + line))
  .join("\n");

idx = idx.slice(0, objStart) + serialised + idx.slice(objEnd);

// ---- verify before writing --------------------------------------------------
const scripts = [...idx.matchAll(/<script[^>]*ld\+json[^>]*>([\s\S]*?)<\/script>/g)];
let found = 0;
for (const s of scripts) {
  let parsed;
  try {
    parsed = JSON.parse(s[1]);
  } catch (e) {
    throw new Error(`[home-faq] produced invalid JSON-LD: ${e.message}`);
  }
  const walk = (x) => {
    if (Array.isArray(x)) x.forEach(walk);
    else if (x && typeof x === "object") {
      if (x["@type"] === "FAQPage") found = (x.mainEntity || []).length;
      Object.values(x).forEach(walk);
    }
  };
  walk(parsed);
}
if (found !== faqs.length)
  throw new Error(`[home-faq] schema has ${found} questions, source has ${faqs.length}`);

// Every question AND answer must be present as visible text, not just in schema.
const text = idx
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<[^>]+>/g, " ")
  .replace(/&amp;/g, "&")
  .replace(/&quot;/g, '"')
  .replace(/&lt;/g, "<")
  .replace(/&gt;/g, ">")
  .replace(/\s+/g, " ");
const missing = [];
for (const f of faqs) {
  if (!text.includes(f.question.replace(/\s+/g, " "))) missing.push(`Q: ${f.question}`);
  if (!text.includes(f.answer.replace(/\s+/g, " "))) missing.push(`A: ${f.question}`);
}
if (missing.length)
  throw new Error(
    `[home-faq] these are in the schema but NOT visible on the page:\n  ` + missing.join("\n  "),
  );

const changed = idx !== before;
if (changed) fs.writeFileSync(idxPath, idx);
console.log(
  `[home-faq] ${faqs.length} questions · schema and visible copy in sync · ` +
    (changed ? "client/index.html updated" : "no change"),
);
