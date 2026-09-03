// Emits everything a generated blog post needs, from content/blog/*.json.
//
//   node scripts/generate-blog.mjs
//
// Writes  client/src/pages/blog/<Pascal>.tsx
// Patches client/src/App.tsx          (lazy imports + routes)
//         client/src/pages/Blog.tsx   (index cards + articleMeta)
//         scripts/generate-sitemap.mjs (ROUTES)
//
// All patches happen between marker comments and are fully rewritten each run,
// so this is idempotent: running it twice changes nothing the second time.
// scripts/generate-static-pages.mjs reads the same JSON directly, so the static
// and React layers cannot drift — which is the failure mode the service pages
// still have, where the same copy is maintained by hand in two files.

import fs from "node:fs";
import path from "node:path";
import { loadPosts, componentName, route, REPO_ROOT } from "./blog-posts.mjs";

const posts = loadPosts();

const M = {
  appImports: ["// <generated-blog-imports>", "// </generated-blog-imports>"],
  appRoutes: ["{/* <generated-blog-routes> */}", "{/* </generated-blog-routes> */}"],
  blogMeta: ["// <generated-blog-meta>", "// </generated-blog-meta>"],
  blogCards: ["// <generated-blog-cards>", "// </generated-blog-cards>"],
  sitemap: ["// <generated-blog-routes>", "// </generated-blog-routes>"],
};

/** Escape text for use as JSX character data. */
function jsx(t) {
  return t.replace(/[{}<>]/g, (c) => `{"${c}"}`);
}

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
function monthYear(iso) {
  const [y, m] = iso.split("-");
  return `${MONTHS[Number(m) - 1]} ${y}`;
}

/** Replace the block between two markers, inserting it if absent is an error. */
function patchBetween(file, open, close, body) {
  const src = fs.readFileSync(file, "utf8");
  const i = src.indexOf(open);
  const j = src.indexOf(close);
  if (i === -1 || j === -1 || j < i) {
    throw new Error(`[generate-blog] markers not found in ${file} — add ${open} / ${close}`);
  }
  const next = src.slice(0, i + open.length) + "\n" + body + (body ? "\n" : "") + src.slice(j);
  if (next !== src) {
    fs.writeFileSync(file, next);
    return true;
  }
  return false;
}

// ── 1. the article page ──────────────────────────────────────────────────────
function pageSource(p) {
  const name = componentName(p.slug);
  const canonical = `https://jetblackpainting.com${route(p)}/`;
  const faqs = JSON.stringify(p.faqs, null, 2)
    .split("\n")
    .map((l, k) => (k === 0 ? l : "  " + l))
    .join("\n");

  const body = p.sections
    .map(
      (s) =>
        `            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">${jsx(s.heading)}</h2>\n` +
        s.paragraphs
          .map((t) => `            <p className="text-[#B4B4B8] mb-4">\n              ${jsx(t)}\n            </p>`)
          .join("\n"),
    )
    .join("\n\n");

  const links = p.serviceLinks
    .map(
      (l) =>
        `              <Link href="${l.href}" className="text-[#D0A050] hover:underline">${jsx(l.label)}</Link>`,
    )
    .join("\n              <span className=\"text-[#8B8B90]\"> · </span>\n");

  return `import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/${p.slug}.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run \`pnpm generate-blog\`.

const faqs = ${faqs};

export default function ${name}() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title=${JSON.stringify(p.title)}
        description=${JSON.stringify(p.description)}
        canonical="${canonical}"
        schema={articleSchema({
          headline: ${JSON.stringify(p.headline)},
          description: ${JSON.stringify(p.description)},
          canonical: "${canonical}",
          datePublished: "${p.published}",
          dateModified: "${p.modified}",
          articleSection: ${JSON.stringify(p.section)},
          faqs,
        })}
      />
      <Navbar />

      <article className="pt-32 pb-16 bg-[#131316]">
        <div className="container max-w-3xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="inline-flex items-center text-[#D0A050] hover:underline text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EDEDEF] mb-4 leading-tight">
              ${jsx(p.headline)}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> ${monthYear(p.published)}</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> ${jsx(p.readTime)}</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              ${jsx(p.intro)}
            </p>

${body}

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Common Questions</h2>
            <div className="space-y-6 mb-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <p className="text-[#B4B4B8] mb-6">
              Related services:
${links}
            </p>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Want it done properly?</h3>
              <p className="text-[#B4B4B8] mb-4">
                Jetblack Painting is based in Mordialloc and services Melbourne. Call Jimmy on 0432 077 782 or email
                jimmy@jetblackpainting.com for a free, written, itemised quote — no obligation.
              </p>
              <a
                href="tel:0432077782"
                className="inline-flex items-center px-6 py-3 bg-[#D0A050] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#B0863C] transition-colors"
              >
                Call Now: 0432 077 782
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
`;
}

let wrote = 0;
const pagesDir = path.join(REPO_ROOT, "client", "src", "pages", "blog");
for (const p of posts) {
  const file = path.join(pagesDir, `${componentName(p.slug)}.tsx`);
  const next = pageSource(p);
  if (!fs.existsSync(file) || fs.readFileSync(file, "utf8") !== next) {
    fs.writeFileSync(file, next);
    wrote++;
  }
}

// ── 2. App.tsx: lazy imports + routes ────────────────────────────────────────
const appFile = path.join(REPO_ROOT, "client", "src", "App.tsx");
const imports = posts
  .map((p) => {
    const n = componentName(p.slug);
    return `const ${n} = lazy(() => import("./pages/blog/${n}"));`;
  })
  .join("\n");
const routes = posts
  .map((p) => `      <Route path={"${route(p)}"} component={${componentName(p.slug)}} />`)
  .join("\n");
const appImports = patchBetween(appFile, ...M.appImports, imports);
const appRoutes = patchBetween(appFile, ...M.appRoutes, routes);

// ── 3. Blog.tsx: index cards + articleMeta ───────────────────────────────────
const blogFile = path.join(REPO_ROOT, "client", "src", "pages", "Blog.tsx");
const cards = posts
  .slice()
  .reverse() // newest first on the index
  .map(
    (p, i) => `    {
      id: ${1000 + i},
      title: ${JSON.stringify(p.headline)},
      excerpt: ${JSON.stringify(p.excerpt)},
      date: ${JSON.stringify(monthYear(p.published))},
      category: ${JSON.stringify(p.section)},
      readTime: ${JSON.stringify(p.readTime)},
      slug: ${JSON.stringify(route(p))}
    },`,
  )
  .join("\n");
const metaLines = posts
  .map(
    (p) =>
      `  ${JSON.stringify(route(p))}: { published: ${JSON.stringify(p.published)}, modified: ${JSON.stringify(p.modified)}, section: ${JSON.stringify(p.section)} },`,
  )
  .join("\n");
const blogCards = patchBetween(blogFile, ...M.blogCards, cards);
const blogMeta = patchBetween(blogFile, ...M.blogMeta, metaLines);

// ── 4. sitemap ROUTES ────────────────────────────────────────────────────────
const sitemapFile = path.join(REPO_ROOT, "scripts", "generate-sitemap.mjs");
const sitemapRows = posts
  .map((p) => `  { path: "${route(p)}/", priority: "0.5", changefreq: "yearly" },`)
  .join("\n");
const sitemapPatched = patchBetween(sitemapFile, ...M.sitemap, sitemapRows);

console.log(
  `[generate-blog] ${posts.length} generated post(s) · pages written ${wrote} · ` +
    `App.tsx ${appImports || appRoutes ? "updated" : "unchanged"} · ` +
    `Blog.tsx ${blogCards || blogMeta ? "updated" : "unchanged"} · ` +
    `sitemap ${sitemapPatched ? "updated" : "unchanged"}`,
);
