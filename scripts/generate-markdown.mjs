import fs from "node:fs";
import path from "node:path";

// Emits a Markdown twin (index.md) next to every pre-rendered index.html.
//
// The worker serves these when a client sends `Accept: text/markdown`, which is
// how AI agents ask for a token-cheap version of a page (Cloudflare sells the
// same behaviour as "Markdown for Agents" on paid plans; this is the same
// content negotiation done in our own worker, so it works on any plan).
//
// Converts the HTML we generated ourselves rather than re-deriving from the
// page data, so the Markdown can never claim something the shipped HTML does
// not. That means this must run AFTER generate-static-pages.mjs.
//
// The parser below is deliberately narrow: it only understands the small,
// regular tag vocabulary our own generator emits (h1-h4, p, ul, ol, li, a,
// strong, em, and the .card / .link-list wrappers). It is not a general-purpose
// HTML converter and should not be pointed at third-party markup.

const PUBLIC_DIR = path.resolve("public");
const HOME_SOURCE = path.resolve("client/index.html");
const SITE_URL = "https://jetblackpainting.com";

const ENTITIES = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#39;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&mdash;": "—",
  "&ndash;": "–",
};

function decodeEntities(value) {
  return value.replace(/&(?:amp|lt|gt|quot|#39|apos|nbsp|mdash|ndash);/g, (m) => ENTITIES[m] ?? m);
}

function stripTags(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, "")).replace(/\s+/g, " ").trim();
}

// Same as stripTags but keeps boundary whitespace, so text either side of an
// inline tag doesn't get welded together ("More:" + a link, or a <br> between a
// bolded question and its answer). Newlines are preserved because <br> is
// converted to one before this runs; only horizontal runs are collapsed.
function stripTagsLoose(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, "")).replace(/[ \t]+/g, " ");
}

// Markdown's structural characters, escaped so body copy can't accidentally
// turn into markup. Deliberately conservative: only leading-of-line markers and
// the inline emphasis/link characters, not every special character.
function escapeMd(value) {
  return value.replace(/([\\`*_[\]])/g, "\\$1");
}

function inlineToMd(html) {
  const withLinks = html
    // <br> carries real meaning in our markup: it separates a bolded FAQ
    // question from its answer inside a single <p>. Keep it as a line break.
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<a\s+[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => {
      const label = escapeMd(stripTags(text));
      return label ? `[${label}](${decodeEntities(href)})` : "";
    })
    .replace(/<strong[^>]*>([\s\S]*?)<\/strong>/gi, (_, t) => {
      const inner = escapeMd(stripTags(t));
      return inner ? `**${inner}**` : "";
    })
    .replace(/<em[^>]*>([\s\S]*?)<\/em>/gi, (_, t) => {
      const inner = escapeMd(stripTags(t));
      return inner ? `*${inner}*` : "";
    });

  // Anything left is plain text or a wrapper like <span>. Strip the tags, but
  // escape only the segments that were not already turned into Markdown above,
  // so generated [links](…) and **bold** survive intact.
  return withLinks
    .split(/(\[[^\]]*\]\([^)]*\)|\*\*[^*]*\*\*|\*[^*]*\*)/)
    .map((part, i) => (i % 2 === 1 ? part : escapeMd(stripTagsLoose(part))))
    .join("")
    .replace(/[ \t]*\n[ \t]*/g, "\n")
    .replace(/[ \t]+/g, " ")
    .trim();
}

function listToMd(inner, ordered) {
  const items = [...inner.matchAll(/<li[^>]*>([\s\S]*?)<\/li>/gi)]
    .map((m) => inlineToMd(m[1]))
    .filter(Boolean);
  if (items.length === 0) return "";
  return items.map((item, i) => (ordered ? `${i + 1}. ${item}` : `- ${item}`)).join("\n");
}

// GitHub-flavoured table, so the structure survives into the agent-facing twin
// instead of collapsing to a run of cell text. Header row plus separator, then
// one line per row; pipes inside a cell are escaped so they cannot break it.
function tableToMd(inner) {
  const cell = (c) => inlineToMd(c).replace(/\|/g, "\\|").replace(/\n/g, " ").trim();
  const rows = [...inner.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)].map((tr) =>
    [...tr[1].matchAll(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi)].map((c) => cell(c[2]))
  );
  if (rows.length === 0 || rows[0].length === 0) return "";
  const width = rows[0].length;
  const line = (r) => `| ${r.concat(Array(Math.max(0, width - r.length)).fill("")).slice(0, width).join(" | ")} |`;
  return [line(rows[0]), `| ${Array(width).fill("---").join(" | ")} |`, ...rows.slice(1).map(line)].join("\n");
}

function bodyToMd(html) {
  let body = html;

  // Drop everything that carries no reading content.
  body = body
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<head[\s\S]*?<\/head>/gi, "")
    .replace(/<svg[\s\S]*?<\/svg>/gi, "");

  // A .link-list is a bare row of <a> tags with no list markup around them;
  // rewrite it into a real list so the block walk below picks it up.
  body = body.replace(/<div class="link-list">([\s\S]*?)<\/div>/gi, (_, inner) => {
    const links = [...inner.matchAll(/<a\s+[^>]*href="[^"]*"[^>]*>[\s\S]*?<\/a>/gi)].map((m) => `<li>${m[0]}</li>`);
    return links.length ? `<ul>${links.join("")}</ul>` : "";
  });

  // The hero's call button is a bare anchor; promote it to a paragraph so the
  // phone number survives into the Markdown.
  body = body.replace(/<a class="btn"[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, text) => `<p><a href="${href}">${text}</a></p>`);

  // A <figure> carries two pieces of reading content and the twins were
  // publishing neither: the img alt and the figcaption. Sixteen pages have
  // project photographs, and their captions are the most specific, least
  // templated prose on the site — exactly what an assistant would quote — so
  // AI agents were being served a shorter page than browsers got.
  //
  // Which of the two to emit is decided by length rather than a magic
  // threshold. A caption SHORTER than its alt is a label ("Before", "After")
  // and is meaningless here because the twins carry no images, so it is
  // prefixed with the alt to give it a referent. A caption LONGER than its alt
  // is authored prose that already says everything the alt does, so it stands
  // alone and the alt is dropped rather than duplicated.
  //
  // A figure with no caption emits its alt text instead. There are 43 of
  // these and every alt is distinct, descriptive prose ("Heritage multi-storey
  // building repainted white for a Melbourne owners corporation") — the kind of
  // sentence an assistant needs in order to say what this business actually
  // does. Dropping them was leaving real capability evidence out of the twins.
  body = body.replace(/<figure\b[^>]*>([\s\S]*?)<\/figure>/gi, (whole, inner) => {
    const cap = (inner.match(/<figcaption\b[^>]*>([\s\S]*?)<\/figcaption>/i) || [])[1];
    const capText = cap ? stripTagsLoose(cap).trim() : "";
    const alt = (inner.match(/<img\b[^>]*\balt="([^"]*)"/i) || [])[1];
    const altText = alt ? decodeEntities(alt).trim() : "";
    if (!capText) return altText ? `<p>${altText}</p>` : whole;
    const text = altText && altText.length > capText.length ? `${capText} — ${altText}` : capText;
    return `<p>${text}</p>`;
  });

  const blocks = [];
  const blockRe = /<(h1|h2|h3|h4|p|ul|ol|table)\b[^>]*>([\s\S]*?)<\/\1>/gi;
  let match;
  while ((match = blockRe.exec(body)) !== null) {
    const tag = match[1].toLowerCase();
    const inner = match[2];

    if (tag === "ul" || tag === "ol") {
      const list = listToMd(inner, tag === "ol");
      if (list) blocks.push(list);
      continue;
    }

    if (tag === "table") {
      const table = tableToMd(inner);
      if (table) blocks.push(table);
      continue;
    }

    const text = inlineToMd(inner);
    if (!text) continue;

    if (tag === "p") {
      blocks.push(text);
    } else {
      const level = Number(tag.slice(1));
      blocks.push(`${"#".repeat(level)} ${text}`);
    }
  }

  return blocks.join("\n\n").replace(/\n{3,}/g, "\n\n").trim();
}

function metaFromHead(html) {
  const title = stripTags(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? "");
  const description = decodeEntities(
    html.match(/<meta\s+name="description"\s+content="([^"]*)"/i)?.[1] ?? ""
  ).trim();
  const canonical = html.match(/<link\s+rel="canonical"\s+href="([^"]*)"/i)?.[1] ?? "";
  return { title, description, canonical };
}

function toMarkdown(html, fallbackCanonical) {
  const { title, description, canonical } = metaFromHead(html);
  const body = bodyToMd(html);

  // A short provenance header so an agent quoting this page can attribute it
  // and link back to the canonical URL rather than the .md file.
  const header = [
    title ? `<!-- ${title} -->` : "",
    `<!-- Source: ${canonical || fallbackCanonical} -->`,
    description ? `<!-- ${description} -->` : "",
  ]
    .filter(Boolean)
    .join("\n");

  return `${header}\n\n${body}\n`;
}

function canonicalForDir(dir) {
  const rel = path.relative(PUBLIC_DIR, dir).split(path.sep).join("/");
  return rel ? `${SITE_URL}/${rel}/` : `${SITE_URL}/`;
}

let written = 0;

/*
 * Directories that are NOT public reading material and must never get a twin.
 * /ask/ is Jimmy's internal review-request tool: noindex, linked from nowhere,
 * and its twin would have served an AI agent the text of a form only he is
 * meant to see. The other noindex pages (privacy, terms, review-us) DO get
 * twins and should — they are real pages, just kept out of the index.
 */
const NO_TWIN = new Set(["ask"]);

function walk(dir) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!NO_TWIN.has(entry.name)) walk(full);
      continue;
    }
    if (entry.name !== "index.html") continue;

    const html = fs.readFileSync(full, "utf8");
    const md = toMarkdown(html, canonicalForDir(dir));
    fs.writeFileSync(path.join(dir, "index.md"), md, "utf8");
    written += 1;
  }
}

walk(PUBLIC_DIR);

// The homepage is the one route with no generated index.html — it is served
// from the Vite build of client/index.html — so its Markdown is built from that
// file's no-JS fallback content instead.
if (fs.existsSync(HOME_SOURCE)) {
  const html = fs.readFileSync(HOME_SOURCE, "utf8");
  const md = toMarkdown(html, `${SITE_URL}/`);
  fs.writeFileSync(path.join(PUBLIC_DIR, "index.md"), md, "utf8");
  written += 1;
}

console.log(`Markdown twins written: ${written}`);
