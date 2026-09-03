// Single source of truth for programmatically published blog posts.
//
// WHY THIS EXISTS
// A blog post on this site historically had to be hand-written into EIGHT
// places, with its full body duplicated between the React page and the static
// generator:
//   1. client/src/pages/blog/<Name>.tsx          (full body)
//   2. client/src/App.tsx                         lazy import + route
//   3. scripts/generate-static-pages.mjs          articlePages        (full body)
//   4. scripts/generate-static-pages.mjs          articleMeta
//   5. scripts/generate-static-pages.mjs          articleServiceLinks
//   6. scripts/generate-static-pages.mjs          blogIndexArticles
//   7. client/src/pages/Blog.tsx                  posts[] + articleMeta
//   8. scripts/generate-sitemap.mjs               ROUTES
// That is fine for seven posts written by hand over a year. It is not viable at
// one post per day, and duplicated bodies drift silently — the exact failure the
// service pages already suffer from.
//
// Everything below is derived from ONE JSON file per post in content/blog/.
// Add a JSON file, run `pnpm generate-blog`, and all eight land in step.
//
// The hand-written posts that predate this system are deliberately NOT migrated.
// They are live, indexed and correct; rewriting them through a generator would
// churn seven working URLs for no gain. New posts flow through here.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
export const REPO_ROOT = path.resolve(__dirname, "..");
export const POSTS_DIR = path.join(REPO_ROOT, "content", "blog");

/** Convert a slug like "how-to-x" into a PascalCase component name. */
export function componentName(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
}

function assert(cond, msg) {
  if (!cond) throw new Error(`[blog-posts] ${msg}`);
}

/**
 * Validate one post. These checks are the publishing gate for content quality
 * and for the constraints this repo already enforces elsewhere:
 *  - descriptions over 158 chars get truncated in SERPs (Step 3 baseline is
 *    "0 descriptions over 158")
 *  - titles over 60 are flagged; one is accepted repo-wide, we don't add more
 *  - every FAQ question AND answer must be visible text, so they must exist
 *  - prices are banned from llms.txt; we keep them out of generated posts too
 *    rather than risk a figure nobody verified being published daily
 */
export function validatePost(p, file) {
  const where = path.basename(file);
  assert(p.slug && /^[a-z0-9-]+$/.test(p.slug), `${where}: slug must be kebab-case`);
  assert(p.title, `${where}: missing title`);
  assert(p.title.length <= 60, `${where}: title ${p.title.length} chars, max 60`);
  assert(p.description, `${where}: missing description`);
  assert(
    p.description.length <= 158,
    `${where}: description ${p.description.length} chars, max 158`,
  );
  assert(p.headline, `${where}: missing headline`);
  assert(p.excerpt, `${where}: missing excerpt (used on the blog index)`);
  assert(p.published && /^\d{4}-\d{2}-\d{2}$/.test(p.published), `${where}: bad published date`);
  assert(p.modified && /^\d{4}-\d{2}-\d{2}$/.test(p.modified), `${where}: bad modified date`);
  assert(p.section, `${where}: missing section`);
  assert(p.readTime, `${where}: missing readTime`);
  assert(p.intro, `${where}: missing intro`);
  assert(Array.isArray(p.sections) && p.sections.length >= 3, `${where}: need >= 3 sections`);
  for (const s of p.sections) {
    assert(s.heading, `${where}: section missing heading`);
    assert(
      Array.isArray(s.paragraphs) && s.paragraphs.length >= 1,
      `${where}: section "${s.heading}" has no paragraphs`,
    );
  }
  assert(Array.isArray(p.faqs) && p.faqs.length >= 3, `${where}: need >= 3 FAQs`);
  for (const f of p.faqs) {
    assert(f.question && f.answer, `${where}: FAQ missing question or answer`);
  }
  assert(
    Array.isArray(p.serviceLinks) && p.serviceLinks.length >= 1,
    `${where}: need >= 1 serviceLink`,
  );

  // No prices. The standing rule is that llms.txt must never carry price
  // figures; a daily generator inventing dollar amounts would be worse, because
  // nobody reviews each one. $10 million public liability is the one legitimate
  // figure and it does not belong in article bodies either.
  const body = [p.intro, ...p.sections.flatMap((s) => s.paragraphs), ...p.faqs.map((f) => f.answer)]
    .join(" ");
  const money = body.match(/\$\s?[\d,]+/g);
  assert(!money, `${where}: price figure(s) in body: ${money && money.join(", ")}`);

  return p;
}

/** Load every post, oldest first. */
export function loadPosts() {
  if (!fs.existsSync(POSTS_DIR)) return [];
  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .sort()
    .map((f) => {
      const full = path.join(POSTS_DIR, f);
      const p = JSON.parse(fs.readFileSync(full, "utf8"));
      return validatePost(p, full);
    })
    .sort((a, b) => (a.published < b.published ? -1 : a.published > b.published ? 1 : 0));
}

export const route = (p) => `/blog/${p.slug}`;

/** Shapes consumed by scripts/generate-static-pages.mjs. */
export function toArticlePages(posts) {
  return posts.map((p) => ({
    route: route(p),
    title: p.title,
    description: p.description,
    intro: p.intro,
    sections: p.sections,
    faqs: p.faqs,
  }));
}

export function toArticleMeta(posts) {
  return Object.fromEntries(
    posts.map((p) => [route(p), { published: p.published, modified: p.modified, section: p.section }]),
  );
}

export function toArticleServiceLinks(posts) {
  return Object.fromEntries(posts.map((p) => [route(p), p.serviceLinks]));
}

export function toBlogIndexArticles(posts) {
  return posts.map((p) => ({
    title: p.headline,
    href: `${route(p)}/`,
    body: p.excerpt,
  }));
}
