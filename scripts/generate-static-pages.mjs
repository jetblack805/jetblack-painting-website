import fs from "node:fs";
import path from "node:path";

// Load site-wide constants from client/src/site-config.json so the same
// values can be used by both the static generator and the client app.
const CONFIG_PATH = path.resolve("client/src/site-config.json");
let SITE_URL = "https://jetblackpainting.com";
let PHONE_DISPLAY = "0432 077 782";
let PHONE_HREF = "0432077782";
let EMAIL = "jimmy@jetblackpainting.com";
let GOOGLE_REVIEW_LINK = "https://g.page/r/CS0L-iKiqJlHEBM/review";
let AGGREGATE_RATING = { ratingValue: "5.0", reviewCount: "17" };
let REVIEWS = null;
try {
  const cfg = JSON.parse(fs.readFileSync(CONFIG_PATH, "utf8"));
  SITE_URL = cfg.siteUrl || SITE_URL;
  PHONE_DISPLAY = cfg.phoneDisplay || PHONE_DISPLAY;
  PHONE_HREF = cfg.phoneHref || PHONE_HREF;
  EMAIL = cfg.email || EMAIL;
  GOOGLE_REVIEW_LINK = cfg.googleReviewLink || GOOGLE_REVIEW_LINK;
  // Optional aggregate rating from config
  if (cfg.aggregateRating) {
    AGGREGATE_RATING = cfg.aggregateRating;
  }
  if (cfg.reviews) {
    REVIEWS = cfg.reviews;
  }
} catch (e) {
  // If the JSON file is missing or invalid, fall back to hardcoded defaults.
}
const PUBLIC_DIR = path.resolve("public");
const PAGE_DIR = path.resolve("client/src/pages");

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function titleCaseFromSlug(slug) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function canonicalForRoute(route) {
  return route === "/" ? `${SITE_URL}/` : `${SITE_URL}${route}/`;
}

function writePage(route, html) {
  const destination =
    route === "/" ? path.join(PUBLIC_DIR, "index.html") : path.join(PUBLIC_DIR, route.replace(/^\//, ""), "index.html");
  fs.mkdirSync(path.dirname(destination), { recursive: true });
  fs.writeFileSync(destination, html, "utf8");
}

function extractProp(source, propName) {
  // Props may be written as name="...", name=`...`, or name={`...`}
  const pattern = new RegExp(`${propName}=\\{?(?:"([\\s\\S]*?)"|\\\`([\\s\\S]*?)\\\`)\\}?`);
  const match = source.match(pattern);
  return match ? (match[1] ?? match[2] ?? "").trim() : "";
}

function extractQuotedValue(source, variableName) {
  const pattern = new RegExp(`const\\s+${variableName}\\s*=\\s*"([^"]+)"`);
  return source.match(pattern)?.[1] ?? "";
}

function normalizeTemplate(value, replacements) {
  return value
    .replace(/\$\{suburb\}/g, replacements.suburb ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractFaqs(source, suburb) {
  const block = source.match(/const faqs = \[(.*?)\];/s)?.[1] ?? "";
  const regex = /question:\s*(?:"([^"]*)"|`([^`]*)`)\s*,\s*answer:\s*(?:"([^"]*)"|`([^`]*)`)/gs;
  const faqs = [];
  for (const match of block.matchAll(regex)) {
    const question = normalizeTemplate(match[1] ?? match[2] ?? "", { suburb });
    const answer = normalizeTemplate(match[3] ?? match[4] ?? "", { suburb });
    if (question && answer) {
      faqs.push({ question, answer });
    }
  }
  return faqs;
}

// Suburb pages carry a `localContent` prop — the genuinely suburb-specific
// paragraphs (real streets, heritage overlays, housing stock) that make each
// of the 96 pages distinct. generateSuburbPage previously never read this
// prop at all, so it rendered fine client-side via React but was completely
// absent from the pre-rendered HTML: invisible to any crawler that doesn't
// execute JS, which includes several of the AI crawlers this site's own
// robots.txt explicitly welcomes. Found 2026-08-11 while starting suburb
// content work, and treated as the day's fix rather than proceeding to write
// more content on top of a pipe that wasn't delivering the content already
// there. `body` is authored inconsistently across pages — sometimes a single
// string/template literal, sometimes an array of paragraphs, sometimes with
// quoted JSON-style keys — so all three forms are handled.
function extractLocalContent(source, suburb) {
  const startMarker = "localContent={[";
  const start = source.indexOf(startMarker);
  if (start === -1) return [];
  let depth = 0;
  let end = -1;
  for (let i = start + startMarker.length - 1; i < source.length; i++) {
    if (source[i] === "[") depth++;
    else if (source[i] === "]") {
      depth--;
      if (depth === 0) {
        end = i;
        break;
      }
    }
  }
  if (end === -1) return [];
  const block = source.slice(start + startMarker.length - 1, end + 1);

  const blocks = [];
  const objRegex =
    /"?heading"?:\s*(?:"([^"]*)"|`([^`]*)`)\s*,\s*"?body"?:\s*(\[[\s\S]*?\]|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*`)\s*,?\s*\}/g;
  for (const match of block.matchAll(objRegex)) {
    const heading = normalizeTemplate(match[1] ?? match[2] ?? "", { suburb });
    const bodyRaw = match[3];
    const paragraphs = [];
    if (bodyRaw.startsWith("[")) {
      const strRegex = /(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)\s*,?/g;
      for (const strMatch of bodyRaw.matchAll(strRegex)) {
        const text = normalizeTemplate(
          (strMatch[1] ?? strMatch[2] ?? "").replace(/\\"/g, '"').replace(/\\`/g, "`"),
          { suburb },
        );
        if (text) paragraphs.push(text);
      }
    } else {
      const strMatch = bodyRaw.match(/^(?:"((?:[^"\\]|\\.)*)"|`((?:[^`\\]|\\.)*)`)$/);
      if (strMatch) {
        const text = normalizeTemplate(
          (strMatch[1] ?? strMatch[2] ?? "").replace(/\\"/g, '"').replace(/\\`/g, "`"),
          { suburb },
        );
        if (text) paragraphs.push(text);
      }
    }
    if (heading && paragraphs.length) blocks.push({ heading, paragraphs });
  }
  return blocks;
}

// Deliberately omits aggregateRating. This function backs the LocalBusiness
// block on all 96 suburb pages, every one sharing the same "#business" @id as
// the homepage's LocalBusiness entity. Repeating the rating on every one of
// those pages is what triggered GSC's "Review has multiple aggregate
// ratings" critical structured-data error (2026-08-11) — Google reads dozens
// of pages independently asserting a rating for the same entity as duplicate,
// conflicting signals, not confirmation. The rating is declared exactly once,
// on the homepage (client/src/pages/Home.tsx), which is the canonical page
// for this @id.
function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#business`,
    "name": "Jetblack Painting",
    "image": `${SITE_URL}/og-image.jpg`,
    "logo": `${SITE_URL}/logo.jpg`,
    "telephone": PHONE_DISPLAY,
    "email": EMAIL,
    "url": SITE_URL,
    "priceRange": "$$",
    "sameAs": [
      "https://www.instagram.com/jetblack_painting",
      "https://www.facebook.com/jetblackpainting",
      "https://www.youtube.com/@jetblackpaint",
      "https://www.tiktok.com/@jetblack_painting",
      "https://www.patreon.com/jetblack_painting",
      "https://au.pinterest.com/jetblackpainting/",
      "https://www.google.com/maps/place/Jetblack+Painting"
    ],
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mordialloc",
      "addressRegion": "VIC",
      "postalCode": "3195",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -38.0131,
      "longitude": 145.0965
    },
    "areaServed": [
      { "@type": "City", "name": "Mordialloc" },
      { "@type": "City", "name": "Armadale" },
      { "@type": "City", "name": "Aspendale" },
      { "@type": "City", "name": "Aspendale Gardens" },
      { "@type": "City", "name": "Bayside" },
      { "@type": "City", "name": "Beaumaris" },
      { "@type": "City", "name": "Bentleigh" },
      { "@type": "City", "name": "Bentleigh East" },
      { "@type": "City", "name": "Berwick" },
      { "@type": "City", "name": "Black Rock" },
      { "@type": "City", "name": "Bonbeach" },
      { "@type": "City", "name": "Box Hill" },
      { "@type": "City", "name": "Brighton" },
      { "@type": "City", "name": "Brighton East" },
      { "@type": "City", "name": "Camberwell" },
      { "@type": "City", "name": "Carlton" },
      { "@type": "City", "name": "Carrum" },
      { "@type": "City", "name": "Caulfield" },
      { "@type": "City", "name": "Chadstone" },
      { "@type": "City", "name": "Chelsea" },
      { "@type": "City", "name": "Chelsea Heights" },
      { "@type": "City", "name": "Cheltenham" },
      { "@type": "City", "name": "Clarinda" },
      { "@type": "City", "name": "Dingley Village" },
      { "@type": "City", "name": "Cranbourne" },
      { "@type": "City", "name": "Croydon" },
      { "@type": "City", "name": "Dandenong" },
      { "@type": "City", "name": "Doncaster" },
      { "@type": "City", "name": "Donvale" },
      { "@type": "City", "name": "Dromana" },
      { "@type": "City", "name": "Edithvale" },
      { "@type": "City", "name": "Elsternwick" },
      { "@type": "City", "name": "Glen Waverley" },
      { "@type": "City", "name": "Greater Dandenong" },
      { "@type": "City", "name": "Hampton" },
      { "@type": "City", "name": "Hampton East" },
      { "@type": "City", "name": "Hawthorn" },
      { "@type": "City", "name": "Heatherton" },
      { "@type": "City", "name": "Highett" },
      { "@type": "City", "name": "Keysborough" },
      { "@type": "City", "name": "Kew" },
      { "@type": "City", "name": "Kingston" },
      { "@type": "City", "name": "Malvern" },
      { "@type": "City", "name": "Malvern East" },
      { "@type": "City", "name": "McKinnon" },
      { "@type": "City", "name": "Mentone" },
      { "@type": "City", "name": "Moorabbin" },
      { "@type": "City", "name": "Mornington Peninsula" },
      { "@type": "City", "name": "Murrumbeena" },
      { "@type": "City", "name": "Narre Warren" },
      { "@type": "City", "name": "Oakleigh" },
      { "@type": "City", "name": "Ormond" },
      { "@type": "City", "name": "Parkdale" },
      { "@type": "City", "name": "Patterson Lakes" },
      { "@type": "City", "name": "Ringwood" },
      { "@type": "City", "name": "Rosebud" },
      { "@type": "City", "name": "Sandringham" },
      { "@type": "City", "name": "Seaford" },
      { "@type": "City", "name": "South Yarra" },
      { "@type": "City", "name": "Stonnington" },
      { "@type": "City", "name": "Templestowe" },
      { "@type": "City", "name": "Thornbury" },
      { "@type": "City", "name": "Toorak" },
      { "@type": "City", "name": "Wheelers Hill" },
      { "@type": "City", "name": "Windsor" },
      { "@type": "City", "name": "Frankston" },
      { "@type": "City", "name": "Frankston South" },
      { "@type": "City", "name": "Mornington" },
      { "@type": "City", "name": "Mount Eliza" },
      { "@type": "City", "name": "Glen Iris" },
      { "@type": "City", "name": "Prahran" },
      { "@type": "City", "name": "Balwyn" },
      { "@type": "City", "name": "Mount Martha" },
      { "@type": "City", "name": "Elwood" },
      { "@type": "City", "name": "St Kilda" },
      { "@type": "City", "name": "Port Melbourne" },
      { "@type": "City", "name": "Albert Park" },
      { "@type": "City", "name": "Fitzroy" },
      { "@type": "City", "name": "Clyde North" },
      { "@type": "City", "name": "Collingwood" },
      { "@type": "City", "name": "Richmond" },
      { "@type": "City", "name": "Northcote" },
      { "@type": "City", "name": "Brunswick" },
      { "@type": "City", "name": "South Melbourne" },
      { "@type": "City", "name": "Carnegie" },
      { "@type": "City", "name": "Hughesdale" },
      { "@type": "City", "name": "Braeside" },
      { "@type": "City", "name": "Waterways" },
      { "@type": "City", "name": "Safety Beach" },
      { "@type": "City", "name": "Rye" },
      { "@type": "City", "name": "Hampton Park" },
      { "@type": "City", "name": "Endeavour Hills" },
      { "@type": "City", "name": "Sorrento" },
      { "@type": "City", "name": "Somerville" },
      { "@type": "City", "name": "Clyde" },
      { "@type": "City", "name": "Hastings" }
    ],
    "description": "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 90+ Melbourne suburbs.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  };
}

// Generic BreadcrumbList builder. `item` may be an absolute URL or a
// site-relative path. Every crawler-facing page gets one so Google and the AI
// crawlers can place the page inside the site hierarchy.
function breadcrumbTrail(trail) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": trail.map((entry, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": entry.name,
      "item": entry.item.startsWith("http") ? entry.item : SITE_URL + entry.item,
    })),
  };
}

function breadcrumbSchema({ suburb, canonical }) {
  return breadcrumbTrail([
    { name: "Home", item: "/" },
    { name: "Service Areas", item: "/#services" },
    { name: `Painters ${suburb}`, item: canonical },
  ]);
}

function extractNeighbours(source) {
  const block = source.match(/neighbouringSuburbs=\{\[(.*?)\]\}/s)?.[1] ?? "";
  const regex = /\{\s*name:\s*"([^"]+)"\s*,\s*link:\s*"([^"]+)"\s*\}/g;
  const neighbours = [];
  for (const match of block.matchAll(regex)) {
    neighbours.push({ name: match[1], link: match[2] });
  }
  return neighbours;
}

function speakableSchema(canonical) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage-speakable`,
    "url": canonical,
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero p"]
    }
  };
}

// Every crawler-facing page ends with the full suburb directory. The React app
// replaces #root on mount, so this is seen only by crawlers — and it matters
// most for the AI crawlers, which don't execute JS and so never reach the
// React footer's suburb list. Without it each suburb page is reachable from
// only its handful of neighbour links.
//
// A <nav><ul>, not a pipe-joined <p>: as one paragraph this block was ~315
// words on every page — far and away the longest on the site, and enough to
// trip Semrush's "paragraphs are too long" content check site-wide. It is a
// list of links, so list markup is both what it means and what raises the
// semantic-HTML ratio the AI-search checks measure. generate-markdown.mjs
// walks <ul> already, so the Markdown twins pick this up as a real list too.
function suburbDirectoryHtml(currentCanonical) {
  const items = suburbDirectory
    .filter((entry) => canonicalForRoute(entry.route) !== currentCanonical)
    .map((entry) => `      <li><a href="${entry.route}/">Painters ${escapeHtml(entry.name)}</a></li>`)
    .join("\n");
  if (!items) return "";
  return (
    `    <nav class="suburb-directory" aria-label="Suburbs we service">\n` +
    `      <h2>Suburbs we service</h2>\n` +
    `      <ul>\n${items}\n      </ul>\n` +
    `    </nav>\n`
  );
}

function pageHtml({ title, description, canonical, heroTitle, heroBody, sections, footerLinks, schema, ogImage, robots }) {
  // Utility pages pass robots: "noindex, follow". A thin page left indexable
  // reads to Google as a soft 404; "follow" keeps link equity flowing.
  const robotsContent =
    robots || "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
  const schemaScripts = (Array.isArray(schema) ? [...schema, speakableSchema(canonical)] : [schema, speakableSchema(canonical)])
    .filter(Boolean)
    .map((item) => `  <script type="application/ld+json" data-static-schema>${JSON.stringify(item)}</script>`)
    .join("\n");

  const sectionHtml = sections
    .map((section) => {
      if (section.type === "cards") {
        return `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
    <div class="grid">
${section.items
  .map(
    (item) => `      <div class="card"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></div>`
  )
  .join("\n")}
    </div>
  </section>`;
      }

      if (section.type === "links") {
        return `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
    ${section.body ? `<p>${escapeHtml(section.body)}</p>` : ""}
    <div class="link-list">
${section.items
  .map((item) => `      <a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`)
  .join("\n")}
    </div>
  </section>`;
      }

      if (section.type === "faqs") {
        return `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
${section.items
  .map(
    (item) => `    <h3>${escapeHtml(item.question)}</h3>\n    <p>${escapeHtml(item.answer)}</p>`
  )
  .join("\n")}
  </section>`;
      }

      if (section.type === "steps") {
        return `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
    <ol>
${section.items.map((item) => `      <li><strong>${escapeHtml(item.title)}</strong> — ${escapeHtml(item.body)}</li>`).join("\n")}
    </ol>
  </section>`;
      }

      return `  <section>
    <h2>${escapeHtml(section.heading)}</h2>
${section.paragraphs.map((paragraph) => `    <p>${escapeHtml(paragraph)}</p>`).join("\n")}
  </section>`;
    })
    .join("\n\n");

  return `<!doctype html>
<html lang="en-AU">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}">
  <meta name="robots" content="${robotsContent}">
  <meta name="googlebot" content="${robotsContent}">
  <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${escapeHtml(ogImage || SITE_URL + "/og-image.jpg")}">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:url" content="${escapeHtml(canonical)}">
  <meta name="twitter:image" content="${escapeHtml(ogImage || SITE_URL + "/og-image.jpg")}">
  <!-- Ahrefs Web Analytics. Mirrored from client/index.html, which only
       covers "/" -- these generated pages carry their own head. -->
  <script src="https://analytics.ahrefs.com/analytics.js" data-key="9ssEuDuvkUrK+tFjvsjy4A" async></script>
${schemaScripts}
  <style>
    body{font-family:Arial,Helvetica,sans-serif;margin:0;color:#EDEDEF;background:#060607;line-height:1.6}
    header,section,footer{max-width:980px;margin:auto;padding:28px 20px}
    .hero{background:#060607;color:#FCFCFC;padding:58px 20px;border-bottom:1px solid rgba(201,162,39,0.3)}
    .hero h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:38px;line-height:1.15;margin:0 0 14px}
    .hero p{font-size:18px;max-width:760px;color:rgba(237,233,224,0.75)}
    .btn{display:inline-block;background:#D0A050;color:#060607;padding:13px 22px;text-decoration:none;font-weight:700;margin-top:10px;letter-spacing:0.08em;text-transform:uppercase;font-size:14px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}
    .card{border:1px solid rgba(255,255,255,0.12);padding:18px;background:#101012}
    .link-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
    .link-list a{border:1px solid rgba(255,255,255,0.15);padding:8px 14px;text-decoration:none;color:#EDEDEF}
    h2{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:28px;margin-top:0;color:#FCFCFC}
    h3{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:20px;margin-bottom:8px;color:#FCFCFC}
    a{color:#D0A050}
    ul,ol{padding-left:20px}
    footer{font-size:14px;color:#98989D;border-top:1px solid rgba(255,255,255,0.1)}
  </style>
</head>
<body>
  <div id="root">
  <header class="hero">
    <h1>${escapeHtml(heroTitle)}</h1>
    <p>${escapeHtml(heroBody)}</p>
    <a class="btn" href="tel:${PHONE_HREF}">Call Jimmy — ${PHONE_DISPLAY}</a>
  </header>

${sectionHtml}

  <footer>
    <p><strong>Jetblack Painting</strong> — ${escapeHtml(heroTitle)} | Phone: <a href="tel:${PHONE_HREF}">${PHONE_DISPLAY}</a> | Email: <a href="mailto:${EMAIL}">${EMAIL}</a></p>
    <p>${footerLinks.map((item) => `<a href="${escapeHtml(item.href)}">${escapeHtml(item.label)}</a>`).join(" | ")}</p>
${suburbDirectoryHtml(canonical)}  </footer>
  </div>
</body>
</html>
`;
}

function suburbSchema({ suburb, title, description, canonical }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Painters ${suburb}`,
      serviceType: ["Interior painting", "Exterior painting", "Commercial painting", "Roof painting"],
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Jetblack Painting",
        telephone: PHONE_DISPLAY,
        email: EMAIL,
        url: SITE_URL,
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mordialloc",
          addressRegion: "VIC",
          postalCode: "3195",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "City",
        name: suburb,
      },
      description,
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical,
    },
  ];
}

function faqSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function reviewSchema(reviews) {
  // Expects reviews as [{ author: string, datePublished: 'YYYY-MM-DD', reviewBody: string, rating: number }]
  if (!reviews || !reviews.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewBody: reviews[0].reviewBody || "",
    author: { "@type": "Person", name: reviews[0].author || "" },
    datePublished: reviews[0].datePublished || undefined,
    reviewRating: {
      "@type": "Rating",
      ratingValue: String(reviews[0].rating || (AGGREGATE_RATING.ratingValue || "5")),
      bestRating: "5",
    },
  };
}

// The four "What we paint in X" cards used to be one hardcoded block repeated
// verbatim on every suburb page — two of the four did not even mention the
// suburb. Across 96 pages that made ~40% of all suburb-page sentences
// duplicates of each other, which is the shape Google treats as doorway pages.
//
// The copy below is instead assembled from housing-stock traits detected in the
// page's OWN localExpertise/propertyTypes text. That matters: every trait
// referenced here is already asserted in the visible copy of that same page, so
// this varies the wording without inventing a single new claim about a suburb.
const SUBURB_TRAITS = {
  // "bayside" is deliberately NOT here. It is a council name, not a geographic
  // fact: the City of Bayside also covers Highett, Hampton East, Brighton East
  // and Cheltenham, none of which front the water. Matching it made the
  // generator assert "coastal exposure attacks coatings early" on an inland
  // suburb purely because the page mentioned its council. Every genuinely
  // coastal page also states coastal/salt air/beach/foreshore in its own copy
  // and still matches on those — verified across all 96 suburb pages, where
  // dropping this token changed exactly one page.
  coastal: /coastal|salt air|beach|seaside|foreshore|waterfront/i,
  heritage: /heritage|period home|victorian|edwardian|federation|californian bungalow|art deco/i,
  weatherboard: /weatherboard/i,
  modern: /contemporary|modern home|new build|newly built|new estate|new-build/i,
  strata: /apartment|unit block|townhouse|strata|body corporate/i,
  render: /render|brick veneer|masonry/i,
};

function suburbServiceCards({ suburb, localExpertise, propertyTypes }) {
  const text = `${localExpertise} ${propertyTypes}`;
  const has = Object.fromEntries(
    Object.entries(SUBURB_TRAITS).map(([trait, pattern]) => [trait, pattern.test(text)])
  );

  let interior;
  if (has.heritage) {
    interior = `Walls, ceilings, trims and doors in ${suburb}, including the ornate cornices, ceiling roses and deep skirtings period homes here tend to have. Detailed cutting-in by hand, surfaces patched and sanded, premium low-sheen and enamel finishes.`;
  } else if (has.strata) {
    interior = `Walls, ceilings, trims and doors across ${suburb} houses, apartments and townhouses. Furniture protected and the work staged room by room, with low-odour products so the home stays liveable throughout.`;
  } else if (has.modern) {
    interior = `Walls, ceilings, trims and doors in ${suburb}, including open-plan living areas where a consistent finish across one large space is what gives it away. Surfaces patched and sanded, premium low-sheen and enamel throughout.`;
  } else {
    interior = `Walls, ceilings, trims, doors and full home repaints in ${suburb}. Furniture protected, surfaces filled and sanded, and premium low-sheen and enamel finishes applied over proper preparation.`;
  }

  let exterior;
  if (has.coastal && has.weatherboard) {
    exterior = `Salt air and full sun are hard on ${suburb} weatherboards. Boards are washed down, scraped and sanded back to a sound edge, and bare timber spot-primed before exterior-grade topcoats go on.`;
  } else if (has.coastal) {
    exterior = `Coastal exposure in ${suburb} attacks coatings early, so exteriors are pressure washed, chalking and flaking paint taken back, and surfaces primed before weather-resistant topcoats are applied.`;
  } else if (has.weatherboard) {
    exterior = `Weatherboard exteriors in ${suburb} are scraped back, damaged boards repaired and bare timber spot-primed, so the new coating holds at the board edges instead of lifting there first.`;
  } else if (has.render) {
    exterior = `Rendered, brick and masonry exteriors in ${suburb} are washed of chalking, cracks filled and the surface sealed before exterior-grade topcoats — including eaves, fascias and fences.`;
  } else {
    exterior = `Weatherboards, render, brick, fences, eaves and fascias in ${suburb}, prepared properly so the finish lasts through Melbourne's weather rather than failing at the edges.`;
  }

  const commercial = has.strata
    ? `Strata and owners-corporation work across ${suburb} — common areas, stairwells, entries and facades — alongside shops and offices, staged around residents and trading hours.`
    : `Shops, offices, and maintenance repainting across ${suburb}, scheduled around your trading hours with after-hours and weekend work available.`;

  const presale = has.heritage
    ? `Fast-turnaround repainting for ${suburb} sales and rentals, in neutral colours that let period features present well to buyers without overwhelming them.`
    : `Fast-turnaround repainting to get ${suburb} properties market-ready — durable, easy-clean neutral finishes that photograph well and suit the widest range of buyers and tenants.`;

  return [
    { title: "Interior painting", body: interior },
    { title: "Exterior painting", body: exterior },
    { title: "Commercial painting", body: commercial },
    { title: "Pre-sale and rental refreshes", body: presale },
  ];
}

function generateSuburbPage(route, sourceFile) {
  const source = fs.readFileSync(sourceFile, "utf8");
  const suburb = extractQuotedValue(source, "suburb") || titleCaseFromSlug(route.replace("/painter-", ""));
  const title = normalizeTemplate(extractProp(source, "title"), { suburb });
  const description = normalizeTemplate(extractProp(source, "description"), { suburb });
  const localExpertise = normalizeTemplate(extractProp(source, "localExpertise"), { suburb });
  const propertyTypes = normalizeTemplate(extractProp(source, "propertyTypes"), { suburb });
  const neighbours = extractNeighbours(source).map((item) => ({ label: item.name, href: `${item.link}/` }));
  const faqs = extractFaqs(source, suburb);
  const localContent = extractLocalContent(source, suburb);
  const canonical = canonicalForRoute(route);
  // Only advertise a per-route OG image when the file actually exists. The
  // generator that produces these (scripts/generate-images.mjs) is opt-in and
  // needs sharp, so on any build where it hasn't run this would otherwise point
  // every suburb page at a 404 and break its social preview. Undefined falls
  // back to the site-wide og-image.jpg in pageHtml().
  const ogImageFile = path.join(PUBLIC_DIR, "og", `${route.replace(/^\//, "")}.jpg`);
  const ogImage = fs.existsSync(ogImageFile) ? `${SITE_URL}/og${route}.jpg` : undefined;
 
  writePage(
    route,
    pageHtml({
      title,
      description,
      canonical,
      ogImage,
      heroTitle: `House Painters ${suburb}`,
      heroBody: `${description} Searching for painters near you in ${suburb}? Jetblack Painting are your trusted local ${suburb} painters, servicing ${suburb} and the surrounding suburbs.`,
      schema: [
        localBusinessSchema(),
        breadcrumbSchema({ suburb, canonical }),
        ...suburbSchema({ suburb, title, description, canonical }),
        ...(faqs.length ? [faqSchema(faqs)] : []),
        ...(REVIEWS ? [reviewSchema(REVIEWS)] : []),
      ],
      sections: [
        {
          heading: `Local painting services in ${suburb}`,
          paragraphs: [
            localExpertise,
            propertyTypes,
            `Jetblack Painting helps homeowners, landlords, and commercial clients in ${suburb} with detailed preparation, premium coatings, and clear project communication from quote through completion.`,
          ],
        },
        // The suburb-specific narrative — real streets, heritage overlays,
        // housing stock — is the most distinctive content on the page and
        // the reason two suburb pages don't read as near-duplicates of each
        // other. Placed right after the generic intro and ahead of the
        // templated cards/FAQ sections below.
        ...localContent.map((block) => ({ heading: block.heading, paragraphs: block.paragraphs })),
        {
          type: "cards",
          heading: `What we paint in ${suburb}`,
          items: suburbServiceCards({ suburb, localExpertise, propertyTypes }),
        },
        // Mirrors the `coreServices` grid the React template renders as
        // "Painting Services in {suburb}". The static layer used to ship only
        // the two footer links (interior + exterior), so crawlers saw 2 service
        // links per suburb page where users saw 6 — commercial, kitchen cabinet
        // resurfacing, roof and real estate painting were absent from the
        // crawlable layer on all 96 suburb pages. Keep this list in step with
        // `coreServices` in client/src/components/SuburbPageTemplate.tsx.
        {
          type: "links",
          heading: `Painting Services in ${suburb}`,
          body: `Every service below is available in ${suburb}. Follow a link for service details and to request a quote.`,
          items: [
            { label: `Interior house painting ${suburb}`, href: "/services/interior-painting/" },
            { label: `Exterior house painting ${suburb}`, href: "/services/exterior-painting/" },
            { label: `Commercial painting ${suburb}`, href: "/services/commercial-painting/" },
            { label: `Kitchen cabinet resurfacing ${suburb}`, href: "/services/kitchen-cabinet-resurfacing/" },
            { label: `Roof painting ${suburb}`, href: "/services/roof-painting/" },
            { label: `Real estate painting ${suburb}`, href: "/services/real-estate-painting/" },
            { label: `Body corporate painting ${suburb}`, href: "/services/body-corporate-painting/" },
            { label: `Epoxy flooring ${suburb}`, href: "/services/epoxy-flooring/" },
          ],
        },
        {
          type: "links",
          heading: `Nearby suburbs we also service`,
          body: `Explore nearby suburb pages for neighbouring areas around ${suburb}.`,
          items: neighbours.length ? neighbours : [{ label: "Melbourne painting services", href: "/services/interior-painting/" }],
        },
        {
          type: "faqs",
          heading: `Frequently asked questions about painters in ${suburb}`,
          items: faqs.length
            ? faqs
            : [
                {
                  question: `Do you provide free painting quotes in ${suburb}?`,
                  answer: `Yes. Jetblack Painting provides free written painting quotes for homes and businesses in ${suburb}.`,
                },
                {
                  question: `What types of painting do you handle in ${suburb}?`,
                  answer: `We handle interior, exterior, roof, commercial, pre-sale, and rental repainting projects in ${suburb}.`,
                },
              ],
        },
      ],
      footerLinks: [
        { label: "Home", href: "/" },
        { label: "Interior Painting", href: "/services/interior-painting/" },
        { label: "Exterior Painting", href: "/services/exterior-painting/" },
      ],
    })
  );
}

const allSuburbPages = [
  { route: "/painter-armadale", source: "ArmadalePainters.tsx" },
  { route: "/painter-bayside", source: "BaysidePainters.tsx" },
  { route: "/painter-bentleigh", source: "BentleighPainters.tsx" },
  { route: "/painter-bentleigh-east", source: "BentleighEastPainters.tsx" },
  { route: "/painter-berwick", source: "BerwickPainters.tsx" },
  { route: "/painter-box-hill", source: "BoxHillPainters.tsx" },
  { route: "/painter-brighton", source: "BrightonPainters.tsx" },
  { route: "/painter-camberwell", source: "CamberwellPainters.tsx" },
  { route: "/painter-carlton", source: "CarltonPainters.tsx" },
  { route: "/painter-caulfield", source: "CaulfieldPainters.tsx" },
  { route: "/painter-cranbourne", source: "CranbournePainters.tsx" },
  { route: "/painter-croydon", source: "CroydonPainters.tsx" },
  { route: "/painter-dandenong", source: "DandenongPainters.tsx" },
  { route: "/painter-doncaster", source: "DoncasterPainters.tsx" },
  { route: "/painter-donvale", source: "DonvalePainters.tsx" },
  { route: "/painter-dromana", source: "DromanaPainters.tsx" },
  { route: "/painter-glen-waverley", source: "GlenWaverleyPainters.tsx" },
  { route: "/painter-greater-dandenong", source: "GreaterDandenongPainters.tsx" },
  { route: "/painter-hampton", source: "HamptonPainters.tsx" },
  { route: "/painter-hampton-east", source: "HamptonEastPainters.tsx" },
  { route: "/painter-hawthorn", source: "HawthornPainters.tsx" },
  { route: "/painter-kew", source: "KewPainters.tsx" },
  { route: "/keysborough-painters", source: "KeysboroughPainters.tsx" },
  { route: "/painter-kingston", source: "KingstonPainters.tsx" },
  { route: "/painter-malvern", source: "MalvernPainters.tsx" },
  { route: "/painter-malvern-east", source: "MalvernEastPainters.tsx" },
  { route: "/painter-mckinnon", source: "McKinnonPainters.tsx" },
  { route: "/painter-mentone", source: "MentonePainters.tsx" },
  { route: "/painter-moorabbin", source: "MoorabbinPainters.tsx" },
  { route: "/painter-mordialloc", source: "MordiallocPainters.tsx" },
  { route: "/painter-mornington-peninsula", source: "MorningtonPeninsulaPainters.tsx" },
  { route: "/painter-murrumbeena", source: "MurrumbeenaPainters.tsx" },
  { route: "/painter-narre-warren", source: "NarreWarrenPainters.tsx" },
  { route: "/painter-ormond", source: "OrmondPainters.tsx" },
  { route: "/painter-ringwood", source: "RingwoodPainters.tsx" },
  { route: "/painter-rosebud", source: "RosebudPainters.tsx" },
  { route: "/painter-sandringham", source: "SandringhamPainters.tsx" },
  { route: "/painter-seaford", source: "SeafordPainters.tsx" },
  { route: "/painter-stonnington", source: "StonningtonPainters.tsx" },
  { route: "/painter-templestowe", source: "TemplestowePainters.tsx" },
  { route: "/painter-thornbury", source: "ThornburyPainters.tsx" },
  { route: "/painter-toorak", source: "ToorakPainters.tsx" },
  { route: "/painter-wheelers-hill", source: "WheelersHillPainters.tsx" },
  { route: "/painter-windsor", source: "WindsorPainters.tsx" },
  { route: "/painter-cheltenham", source: "CheltenhamPainters.tsx" },
  { route: "/painter-parkdale", source: "ParkdalePainters.tsx" },
  { route: "/painter-patterson-lakes", source: "PattersonLakesPainters.tsx" },
  { route: "/painter-aspendale", source: "AspendalePainters.tsx" },
  { route: "/painter-aspendale-gardens", source: "AspendaleGardensPainters.tsx" },
  { route: "/painter-chelsea", source: "ChelseaPainters.tsx" },
  { route: "/painter-chelsea-heights", source: "ChelseaHeightsPainters.tsx" },
  { route: "/painter-south-yarra", source: "SouthYarraPainters.tsx" },
  { route: "/painter-elsternwick", source: "ElsternwickPainters.tsx" },
  { route: "/painter-beaumaris", source: "BeaumarisPainters.tsx" },
  { route: "/painter-black-rock", source: "BlackRockPainters.tsx" },
  { route: "/painter-brighton-east", source: "BrightonEastPainters.tsx" },
  { route: "/painter-highett", source: "HighettPainters.tsx" },
  { route: "/painter-heatherton", source: "HeathertonPainters.tsx" },
  { route: "/painter-edithvale", source: "EdithvalePainters.tsx" },
  { route: "/painter-bonbeach", source: "BonbeachPainters.tsx" },
  { route: "/painter-carrum", source: "CarrumPainters.tsx" },
  { route: "/painter-oakleigh", source: "OakleighPainters.tsx" },
  { route: "/painter-clarinda", source: "ClarindaPainters.tsx" },
  { route: "/painter-dingley-village", source: "DingleyVillagePainters.tsx" },
  { route: "/painter-chadstone", source: "ChadstonePainters.tsx" },
  { route: "/painter-frankston", source: "FrankstonPainters.tsx" },
  { route: "/painter-frankston-south", source: "FrankstonSouthPainters.tsx" },
  { route: "/painter-mornington", source: "MorningtonPainters.tsx" },
  { route: "/painter-mount-eliza", source: "MountElizaPainters.tsx" },
  { route: "/painter-glen-iris", source: "GlenIrisPainters.tsx" },
  { route: "/painter-prahran", source: "PrahranPainters.tsx" },
  { route: "/painter-balwyn", source: "BalwynPainters.tsx" },
  { route: "/painter-mount-martha", source: "MountMarthaPainters.tsx" },
  { route: "/painter-elwood", source: "ElwoodPainters.tsx" },
  { route: "/painter-st-kilda", source: "StKildaPainters.tsx" },
  { route: "/painter-port-melbourne", source: "PortMelbournePainters.tsx" },
  { route: "/painter-albert-park", source: "AlbertParkPainters.tsx" },
  { route: "/painter-fitzroy", source: "FitzroyPainters.tsx" },
  { route: "/painter-clyde-north", source: "ClydeNorthPainters.tsx" },
  { route: "/painter-collingwood", source: "CollingwoodPainters.tsx" },
  { route: "/painter-richmond", source: "RichmondPainters.tsx" },
  { route: "/painter-northcote", source: "NorthcotePainters.tsx" },
  { route: "/painter-brunswick", source: "BrunswickPainters.tsx" },
  { route: "/painter-south-melbourne", source: "SouthMelbournePainters.tsx" },
  { route: "/painter-carnegie", source: "CarnegiePainters.tsx" },
  { route: "/painter-hughesdale", source: "HughesdalePainters.tsx" },
  { route: "/painter-braeside", source: "BraesidePainters.tsx" },
  { route: "/painter-waterways", source: "WaterwaysPainters.tsx" },
  { route: "/painter-safety-beach", source: "SafetyBeachPainters.tsx" },
  { route: "/painter-rye", source: "RyePainters.tsx" },
  { route: "/painter-hampton-park", source: "HamptonParkPainters.tsx" },
  { route: "/painter-endeavour-hills", source: "EndeavourHillsPainters.tsx" },
  { route: "/painter-sorrento", source: "SorrentoPainters.tsx" },
  { route: "/painter-somerville", source: "SomervillePainters.tsx" },
  { route: "/painter-clyde", source: "ClydePainters.tsx" },
  { route: "/painter-hastings", source: "HastingsPainters.tsx" },
];

// Built before any page is written, because every page's footer links to the
// whole set. Names come from each page component's `const suburb = "..."`.
const suburbDirectory = allSuburbPages
  .map((page) => ({
    route: page.route,
    name:
      extractQuotedValue(fs.readFileSync(path.join(PAGE_DIR, page.source), "utf8"), "suburb") ||
      titleCaseFromSlug(page.route.replace("/painter-", "").replace("-painters", "")),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

for (const page of allSuburbPages) {
  generateSuburbPage(page.route, path.join(PAGE_DIR, page.source));
}

// Service pages. Titles and descriptions must stay in sync with the SEOHead
// props in the matching client/src/pages/<Service>.tsx component.
function serviceSchema({ name, title, description, canonical }) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name,
      serviceType: name,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Jetblack Painting",
        telephone: PHONE_DISPLAY,
        email: EMAIL,
        url: SITE_URL,
        image: `${SITE_URL}/og-image.jpg`,
        priceRange: "$$",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mordialloc",
          addressRegion: "VIC",
          postalCode: "3195",
          addressCountry: "AU",
        },
      },
      areaServed: { "@type": "City", name: "Melbourne" },
      description,
      url: canonical,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url: canonical,
    },
  ];
}

// Fallback only. Kept so a service without an entry in serviceSuburbLinks below
// still renders a list rather than nothing.
const popularSuburbLinks = [
  { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
  { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
  { label: "Painters Highett", href: "/painter-highett/" },
  { label: "Painters McKinnon", href: "/painter-mckinnon/" },
  { label: "Painters Mentone", href: "/painter-mentone/" },
  { label: "Painters Caulfield", href: "/painter-caulfield/" },
  { label: "Painters Keysborough", href: "/keysborough-painters/" },
  { label: "Painters Hampton", href: "/painter-hampton/" },
];

// Suburb links per service, replacing the single shared list that pointed all
// eight service pages at the SAME eight suburbs. Two problems with that:
//
//  1. It was the "repeated keyword-heavy link block" pattern — an identical
//     list on every page with no contextual reason for any given suburb to be
//     there. None of these suburbs is named anywhere in the service prose.
//  2. Five of the eight (Toorak, Brighton, Camberwell, Hawthorn, Glen Waverley)
//     sit at GSC positions 79-90 and were moved to off-page channels on
//     2026-08-17. Every service page — the strongest internal hubs on the site
//     — was pushing authority into pages that cannot rank, while the winnable
//     set (McKinnon 11.3, Aspendale 14.0, Sorrento 14.5, Patterson Lakes 16.5,
//     Murrumbeena 17.2, Collingwood 17.3, Mentone/Highett 17.5, Donvale 18.3,
//     Dromana 19.4) received no service-page links at all.
//
// Each list below is chosen for genuine relevance to that specific service, not
// just swapped for a different uniform block:
//   commercial / body corporate → Mount Eliza and Clyde North actually rank
//     15-18 on commercial queries ("commercial facade painting", "commercial
//     repainting"); Moorabbin and Box Hill are real commercial/apartment areas.
//   roof and roof/fence → weather-exposed bayside and Peninsula suburbs;
//     "roof painting dromana" is already a ranking query.
//   exterior → the coastal strip, where salt exposure genuinely changes the job.
//   real estate → Murrumbeena and Mordialloc, where rental turnover and
//     pre-sale work is a real part of the local mix.
const serviceSuburbLinks = {
  "/services/interior-painting": [
    { label: "Painters McKinnon", href: "/painter-mckinnon/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters Murrumbeena", href: "/painter-murrumbeena/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Caulfield", href: "/painter-caulfield/" },
    { label: "Painters Hampton", href: "/painter-hampton/" },
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
  ],
  "/services/exterior-painting": [
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Aspendale", href: "/painter-aspendale/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters Sorrento", href: "/painter-sorrento/" },
    { label: "Painters Dromana", href: "/painter-dromana/" },
    { label: "Painters Patterson Lakes", href: "/painter-patterson-lakes/" },
    { label: "Painters Hampton", href: "/painter-hampton/" },
  ],
  "/services/roof-painting": [
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Dromana", href: "/painter-dromana/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Aspendale", href: "/painter-aspendale/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters Sorrento", href: "/painter-sorrento/" },
    { label: "Painters Patterson Lakes", href: "/painter-patterson-lakes/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
  ],
  "/services/roof-fence-painting": [
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Aspendale", href: "/painter-aspendale/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters Dromana", href: "/painter-dromana/" },
    { label: "Painters Patterson Lakes", href: "/painter-patterson-lakes/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Hampton", href: "/painter-hampton/" },
  ],
  "/services/commercial-painting": [
    { label: "Painters Clyde North", href: "/painter-clyde-north/" },
    { label: "Painters Mount Eliza", href: "/painter-mount-eliza/" },
    { label: "Painters Moorabbin", href: "/painter-moorabbin/" },
    { label: "Painters Collingwood", href: "/painter-collingwood/" },
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Caulfield", href: "/painter-caulfield/" },
    { label: "Painters Highett", href: "/painter-highett/" },
  ],
  "/services/body-corporate-painting": [
    { label: "Painters Caulfield", href: "/painter-caulfield/" },
    { label: "Painters Collingwood", href: "/painter-collingwood/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Clyde North", href: "/painter-clyde-north/" },
    { label: "Painters Box Hill", href: "/painter-box-hill/" },
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Highett", href: "/painter-highett/" },
  ],
  "/services/kitchen-cabinet-resurfacing": [
    { label: "Painters McKinnon", href: "/painter-mckinnon/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters Murrumbeena", href: "/painter-murrumbeena/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Aspendale", href: "/painter-aspendale/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Caulfield", href: "/painter-caulfield/" },
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
  ],
  "/services/real-estate-painting": [
    { label: "Painters Murrumbeena", href: "/painter-murrumbeena/" },
    { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
    { label: "Painters Mentone", href: "/painter-mentone/" },
    { label: "Painters Highett", href: "/painter-highett/" },
    { label: "Painters McKinnon", href: "/painter-mckinnon/" },
    { label: "Painters Collingwood", href: "/painter-collingwood/" },
    { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
    { label: "Painters Aspendale", href: "/painter-aspendale/" },
  ],
};

const servicePages = [
  {
    route: "/services/interior-painting",
    name: "Interior Painting",
    title:
      "Interior Painting Melbourne | Jetblack Painting",
    description:
      "Professional interior painting in Melbourne. Premium Dulux paints, expert colour advice, 5-star rated. All Melbourne suburbs. Free quotes.",
    heroTitle: "Interior Painting Melbourne",
    heroBody:
      "Professional interior house painting across Melbourne — walls, ceilings, trims, doors, and full home repaints finished with premium Dulux and Taubmans systems and meticulous preparation.",
    cards: [
      { title: "Walls and ceilings", body: "Smooth, even finishes with proper surface preparation, patching, and premium low-sheen and matt systems." },
      { title: "Trims, doors and skirting", body: "Crisp enamel finishes on architraves, skirting boards, doors, and window frames." },
      { title: "Feature walls and colour consulting", body: "Help choosing colours and sheens that suit the room's light, furniture, and style." },
      { title: "Full home repaints", body: "Whole-house interior repaints staged room by room to minimise disruption for your household." },
    ],
    paragraphs: [
      "Every interior project starts with thorough preparation: furniture protection, filling and sanding, gap sealing, and priming where needed, so the final coats look sharp and last longer.",
      "Jetblack Painting is a 5-star rated Melbourne painting business with 13+ years of experience, $10 million public liability insurance, and a 5-year workmanship guarantee on every interior project.",
    ],
    extraSections: [
      {
        type: "steps",
        heading: "How an interior painting project runs",
        items: [
          { title: "Quote and colour consultation", body: "We walk through the home with you, note the condition of every wall and ceiling, and talk through colours, sheens and any feature walls. The written quote itemises rooms, surfaces, prep and the specific products, so there's no guessing later." },
          { title: "Furniture protection and setup", body: "Furniture is moved to the centre of the room or covered in place, floors and fixtures are protected with drop sheets, and the work area is sealed off from the rest of the house to control dust." },
          { title: "Patching, sanding and priming", body: "Nail holes, cracks, water stains and old repairs are filled and sanded back smooth. Bare plaster, water-stained patches and any repaired sections are spot-primed so they don't flash through the topcoats." },
          { title: "Edges, trims and doors — sprayed or cut in by hand", body: "How the detail work goes on depends on the room. Where a space can be properly masked and sealed off — empty rooms, and doors, trims and built-in joinery in particular — we spray, which lays the finish down dead flat with no brush marks and no roller texture on surfaces where every stroke would otherwise show. Where spraying isn't practical, because you're living in the room or an adjacent finish can't be masked cleanly, edges, corners and cornices are cut in by hand before the broad areas are rolled. Either way this is the step that separates a sharp finish from a messy one, and it's where an experienced painter earns their keep." },
          { title: "Topcoats", body: "Two full coats go on to the specified sheen — low-sheen or matt for most walls, semi-gloss or gloss enamel for trims and doors — with proper drying time between coats rather than rushing to finish early." },
          { title: "Walkthrough and handover", body: "We walk the finished rooms with you, touch up anything that needs it, remove all protection and clean up thoroughly. The 5-year written workmanship guarantee applies from this point." },
        ],
      },
      {
        heading: "What drives the cost of interior painting in Melbourne",
        paragraphs: [
          "Room count and size are the obvious factors, but wall and ceiling condition usually matters more. A recently painted, sound surface is quick to prepare; a home with cracked cornices, water stains, old wallpaper or years of nail holes and patch repairs needs significant preparation before a topcoat goes anywhere near it — and that preparation is what makes the difference between a repaint that looks factory-fresh and one that shows every flaw underneath.",
          "Colour change matters more than most homeowners expect. Going from a dark feature wall to a light colour, or covering a strong existing colour, often needs an extra coat or a tinted primer to get even coverage — that's more product and more labour than repainting a similar colour over itself.",
          "Ceiling height and access change the job too: standard 2.4m ceilings are straightforward, while raked ceilings, stairwells and double-height living areas need scaffolding or specialised access equipment. Paint quality and finish level are the fourth factor — a washable low-sheen in a high-traffic hallway costs more to supply than a basic flat finish, and two-pack enamel on kitchen cabinetry or trims costs more again, but both last considerably longer.",
          "We quote after seeing the property rather than publishing a rate per square metre, because none of this shows up in a number quoted sight-unseen. The site visit and written quote are free — call Jimmy on 0432 077 782.",
        ],
      },
    ],
    faqs: [
      { question: "How long does interior painting take?", answer: "Most interior painting projects take a few days to a week depending on the size of the home, access, and the preparation required. A single room is usually a day or two; a full home repaint is staged across a working week or more." },
      { question: "Do I need to move out during interior painting?", answer: "No. We stage the work room by room, use low-odour premium paints, and keep living areas usable throughout the project. Most households stay in the home for the full job." },
      { question: "Which paint brands do you use for interiors?", answer: "We use premium Australian brands including Dulux and Taubmans, matched to each surface and traffic level — washable low-sheen for living areas, durable enamels for trims and doors." },
      { question: "How much does interior painting cost in Melbourne?", answer: "It depends on the number of rooms, the condition of the walls and ceilings, whether you're changing colour significantly, and the finish level you choose. Those factors move the price more than room size alone, so we quote after a site visit rather than a rate sight-unseen. Quotes are free — call 0432 077 782." },
      { question: "Do you paint ceilings as well as walls?", answer: "Yes. Ceiling painting is included where specified — flat or low-sheen finishes are standard, and we address any cracking, water staining or previous patch repairs as part of the preparation." },
      { question: "Can you match or change to a completely different colour?", answer: "Yes. Significant colour changes — especially dark to light — sometimes need a tinted primer or an extra coat for even coverage. We account for this in the quote so there are no surprises once the job starts." },
      { question: "Do you paint rental properties between tenants?", answer: "Yes. We regularly repaint rental properties for landlords and property managers between tenancies, working to a fixed turnaround with durable, easy-clean finishes in neutral colours that suit the widest range of tenants." },
      { question: "Can you help if I don't know what colours to choose?", answer: "Yes. Colour consultation is included with every quote — we look at the room's natural light, existing furniture and finishes, and talk through options rather than leaving you to guess from a paint chart." },
    ],
  },
  {
    route: "/services/exterior-painting",
    name: "Exterior Painting",
    title:
      "Exterior Painting Melbourne | Jetblack Painting",
    description:
      "Expert exterior house painting in Melbourne. Weather-resistant coatings, professional preparation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.",
    heroTitle: "Exterior Painting Melbourne",
    heroBody:
      "Weather-resistant exterior house painting across Melbourne — weatherboards, render, brick, eaves, fascias, and fences prepared properly so the finish lasts through Melbourne's changing conditions.",
    cards: [
      { title: "Weatherboard homes", body: "Sanding, priming, gap sealing, and durable topcoats that protect timber weatherboards from moisture and UV." },
      { title: "Render and brick", body: "Membrane and acrylic systems for rendered and masonry exteriors, matched to the substrate." },
      { title: "Eaves, fascias and gutters", body: "Detail work on trims and high areas completed safely with the right access equipment." },
      { title: "Fences and outdoor structures", body: "Fence painting and staining that finishes the property's street appeal." },
    ],
    paragraphs: [
      "Melbourne exteriors need real preparation: pressure washing, scraping and sanding back failing coatings, priming bare timber, and sealing gaps before any topcoat is applied.",
      "We use exterior-grade Dulux and Taubmans systems selected for the substrate and exposure, backed by a 5-year workmanship guarantee and $10 million public liability insurance.",
    ],
    extraSections: [
      {
        type: "steps",
        heading: "How an exterior painting project runs",
        items: [
          { title: "Quote and assessment", body: "We walk the exterior with you, checking the condition of weatherboard, render, brick and trim, noting access and height requirements, and talking through colour options. The written quote itemises the surfaces, preparation and specific products before any work begins." },
          { title: "Pressure washing", body: "Every surface is pressure washed to remove dirt, mould, chalking paint and loose debris — a critical first step, since a new coat applied over a dirty or chalky surface never bonds properly no matter how good the paint is." },
          { title: "Scraping, sanding and repairs", body: "Failing paint is scraped and sanded back to a sound edge so the new coating doesn't telegraph old cracks. Damaged weatherboards are repaired or replaced, and cracks in render are filled before anything else happens." },
          { title: "Priming and caulking", body: "Bare timber, repaired sections and any previously unpainted metal are spot-primed, and gaps and joints are caulked to keep water out. This step is what stops a repaint failing early at the edges and joins." },
          { title: "Topcoats", body: "Two full coats of exterior-grade Dulux or Taubmans product go on to the specified sheen, with proper drying time between coats and around Melbourne's weather rather than rushing to finish early." },
          { title: "Walkthrough and handover", body: "We walk the finished exterior with you, touch up anything that needs it, and clean up the site completely. The 5-year written workmanship guarantee applies from this point." },
        ],
      },
      {
        heading: "What drives the cost of exterior painting in Melbourne",
        paragraphs: [
          "Substrate condition is usually the biggest factor. A weatherboard home with sound, well-adhered paint is quick to prepare; one with flaking coatings, rotten or damaged boards, and years of moisture damage needs significant repair and priming before a single topcoat goes on. Rendered and brick homes are generally more stable but can need crack repair, chalk removal, or a sealer if they've never been painted before.",
          "Height and access are the second driver. A single-storey home with clear ground access is straightforward; a two-storey house, steep gables, or a home on a slope needs scaffolding or elevated access equipment, and that adds real cost and time.",
          "Colour change and the number of coats needed matter too — going from a dark colour to a light one, or covering chalky, faded paint, sometimes needs an extra coat for even coverage. Coastal and heavily sun-exposed properties also benefit from a higher-grade weather-resistant system, which costs more to supply but holds up considerably longer against Melbourne's UV and salt exposure.",
          "We don't publish a rate per square metre, because a number quoted without seeing the substrate is a number that changes later. The site visit and written quote are free — call Jimmy on 0432 077 782.",
        ],
      },
    ],
    faqs: [
      { question: "How often should I repaint my home's exterior in Melbourne?", answer: "Most Melbourne homes need an exterior repaint every 7 to 10 years, though coastal and heavily sun-exposed properties can need it sooner. Weatherboard and timber usually need attention before rendered or brick surfaces. During your free quote we'll assess the current condition and give you an honest recommendation." },
      { question: "What preparation is included in your exterior painting?", answer: "Proper preparation is where a lasting exterior finish is won or lost, so it's always included in our quote — never added later. That means pressure washing, scraping and sanding back flaking paint, filling and repairing surfaces, spot-priming bare timber and metal, and caulking gaps before any topcoats go on." },
      { question: "What time of year is best for exterior painting in Melbourne?", answer: "Spring and autumn are ideal, but with Melbourne's variable weather we paint year-round by working to the conditions — applying coatings in suitable temperatures and humidity and allowing proper drying between coats. We simply schedule around wet spells so your finish cures correctly." },
      { question: "How much does exterior painting cost in Melbourne?", answer: "The size of the house is only part of it — substrate condition, the number of storeys, and how much timber repair or colour change is needed all move the price more than square metreage alone. A single-storey weatherboard in good condition costs far less to repaint than a two-storey render job with cracked and flaking paint. We quote after a free site visit rather than a rate sight-unseen — call 0432 077 782." },
      { question: "What paint brands do you use for exterior painting?", answer: "Premium exterior-grade Dulux and Taubmans systems, matched to the substrate and its exposure — weatherproof acrylics for weatherboard and render, and appropriate primers for bare timber, previously unpainted brick, and metal fascias and gutters. The specific products are named in your written quote." },
      { question: "Do you paint weatherboard homes differently to rendered or brick homes?", answer: "Yes. Weatherboard needs more preparation — sanding back flaking coatings, replacing or filling damaged boards, and priming bare timber — because timber moves with moisture and needs a flexible, well-adhered system. Render and brick are usually more stable but can chalk or crack over time, and previously unpainted masonry needs a specific sealer. We assess the actual substrate during the quote rather than treating every exterior the same." },
    ],
  },
  {
    route: "/services/roof-painting",
    name: "Roof Painting",
    title:
      "Roof Painting Melbourne | Jetblack Painting",
    description:
      "Professional roof painting and restoration in Melbourne. Extends roof life 10-15 years. All roof types serviced. 5-star rated, fully insured. Free quotes.",
    heroTitle: "Roof Painting Melbourne",
    heroBody:
      "Professional roof painting and restoration across Melbourne — cleaning, repairs, priming, and membrane coatings that extend the life of tile and metal roofs by 10–15 years.",
    cards: [
      { title: "Tile roof restoration", body: "High-pressure cleaning, rebedding and repointing where needed, then primer and flexible membrane topcoats." },
      { title: "Metal and Colorbond roofs", body: "Rust treatment, priming, and roof-grade coatings that restore colour and protection." },
      { title: "Heat-reflective coatings", body: "Lighter, heat-reflective roof colours that can reduce summer heat load." },
      { title: "Roof inspections and quotes", body: "Honest assessments of whether painting, restoration, or repairs are the right call for your roof." },
    ],
    paragraphs: [
      "Roof painting is as much about preparation as paint: thorough cleaning, repairs, and the correct primer are what make the coating system last.",
      "All roof work is completed safely and is covered by our 5-year workmanship guarantee and $10 million public liability insurance.",
    ],
    extraSections: [
      {
        heading: "Tile, metal and cement sheet need different systems",
        paragraphs: [
          "Concrete and terracotta tile is porous. As the original surface treatment wears off, the tile itself starts absorbing water — that's why an unsealed roof gets heavier, dries slower after rain, and grows moss faster with every year that passes. Restoring a tile roof means dealing with that porosity directly: a penetrating sealer goes on before the colour coats, so the topcoat sits on a stable surface instead of soaking straight into bare tile.",
          "Colorbond and Zincalume behave the opposite way — the sheet itself is stable, and failure starts at specific points: screw fixings, cut edges, and valleys where water and leaf litter sit longest. That's where rust treatment is targeted, followed by an etch primer made for galvanised steel before the topcoats go on. A metal roof coated without that step looks fine for a year, then bleeds rust through the new paint at every screw head.",
          "Cement sheet is a third case again — fibre-cement roofing common on older extensions and outbuildings, which chalks and becomes porous with age similarly to tile, but is more prone to hairline cracking and needs a flexible, crack-bridging primer rather than a rigid one that will telegraph every existing crack straight through the new coating.",
        ],
      },
      {
        heading: "What roof cleaning and repair actually involves",
        paragraphs: [
          "Every job starts with high-pressure cleaning, and it matters more than people expect — moss, lichen and years of built-up grime sit between the coating and the roof surface, and a coating applied over any of that peels away within a season, taking the moss and the paint with it. Cleaning also does the job of revealing what's actually wrong with the roof, which brush-applying paint over a dirty surface would otherwise hide.",
          "On tile roofs, cleaning usually turns up cracked or slipped tiles and ridge capping where the mortar bedding has failed — both get fixed before priming starts, because a coating is not a structural repair and won't stop a slipped tile from leaking. On metal roofs, cleaning is followed by a fixing-by-fixing rust check: every screw, cut edge and valley gets inspected individually rather than assessed as one surface, because that is genuinely where a metal roof fails first.",
          "This is also the stage where we make the call on whether painting is the right job at all. Extensively cracked tiles, failed capping across large sections, or sheeting rusted through rather than just surface-affected are repair problems, not paint problems — coating over them seals the fault in where it can no longer be seen, which is worse than leaving it exposed. We say so at the quote stage, before any work is booked.",
        ],
      },
      {
        heading: "Membrane coatings and heat-reflective systems",
        paragraphs: [
          "A roof membrane is a different product from a standard exterior paint, not just a heavier-duty version of one. It's a flexible, waterproof coating that moves with the roof as Melbourne's temperature swings expand and contract the surface underneath, rather than cracking the way a rigid film would. It also bridges small surface imperfections — hairline cracks, fine pitting — that a thin topcoat would simply sit on top of and eventually crack along.",
          "What actually determines how long a membrane system lasts is the applied thickness, not the number of coats on its own — two thin coats and three thin coats can both fall short of the specification a genuine 10 to 15 year result needs. We apply to the coating manufacturer's specified thickness rather than a fixed number of passes, which is the difference between a roof coating that's still performing at year twelve and one that's chalking out by year six.",
          "Heat-reflective coatings work by reflecting more solar radiation than a standard dark roof colour absorbs, which measurably reduces how much heat transfers into the roof cavity below. Lighter colours and purpose-made reflective coatings are worth considering on any north or west-facing roof, and particularly on a roof that's already due for restoration — the reflective benefit comes at no extra preparation cost since the roof needs cleaning and coating either way.",
        ],
      },
    ],
    faqs: [
      { question: "How long does a professional roof painting last?", answer: "A properly prepared and coated roof typically lasts 10 to 15 years before it needs redoing. The key is preparation — cleaning, rust treatment, repairs and the right primer — followed by quality membrane or roof coatings applied at the correct thickness. We include all of that in every roof painting quote." },
      { question: "What roof types can you paint?", answer: "We paint and restore all common Melbourne roof types, including Colorbond and Zincalume metal roofing, concrete and terracotta tiles, and cement sheet. Each surface needs a specific preparation and coating system, and we match the right one to your roof so the finish bonds properly and lasts." },
      { question: "Can roof painting help keep my home cooler?", answer: "Yes. Lighter colours and modern heat-reflective roof coatings can reduce how much heat your roof absorbs, helping keep the home more comfortable in Melbourne summers and easing the load on cooling. We're happy to recommend suitable heat-reflective options during your quote." },
      { question: "Do you repair a roof or just paint over problems?", answer: "We assess and repair first. Cracked or slipped tiles, failed ridge capping, rusted-through sheeting and blocked valleys are structural problems, not paint problems, and coating over them just seals the fault in where you can't see it happening. If a roof needs repair work, we say so at the quote rather than after the job has started." },
      { question: "How is a tile roof different from a metal roof to paint?", answer: "Tile is porous and metal isn't, so they fail differently and need different systems. Tiles absorb water as their surface wears, which is why they need a sealer under the topcoat; metal roofing is stable across its face and vulnerable specifically at fixings, cut edges and valleys, which is why rust treatment is targeted at those points rather than the whole sheet." },
      { question: "What does the roof cleaning and preparation actually involve?", answer: "High-pressure cleaning removes moss, lichen and built-up grime first, because a coating applied over any of that peels within a season. On tile roofs this often reveals cracked or slipped tiles and failed ridge capping that need fixing before anything else happens. On metal roofs it's followed by a rust check at every fixing point, cut edge and valley, since that's where corrosion actually starts." },
      { question: "How does a roof membrane coating work?", answer: "A roof membrane is a flexible, waterproof coating rather than a standard paint film — it moves with the roof through Melbourne's temperature swings instead of cracking, and it bridges small surface imperfections that a thin topcoat would just sit on top of. It's applied in multiple coats at a specified thickness, which is what actually determines how many years it lasts, not just how many coats go on." },
    ],
  },
  {
    route: "/services/commercial-painting",
    name: "Commercial Painting",
    title:
      "Commercial Painting Melbourne | Jetblack Painting",
    description:
      "Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes.",
    heroTitle: "Commercial Painting Melbourne",
    heroBody:
      "Commercial painting for Melbourne offices, retail fit-outs, warehouses, and strata properties — scheduled around your trading hours with after-hours and weekend availability.",
    cards: [
      { title: "Offices and retail", body: "Clean, low-disruption repaints for offices, shops, and hospitality venues, including after-hours work." },
      { title: "Warehouses and industrial", body: "Large-area wall and ceiling painting plus epoxy floor coatings for industrial spaces." },
      { title: "Strata and body corporate", body: "Common areas, external facades, and scheduled maintenance painting for strata managers." },
      { title: "Maintenance programs", body: "Ongoing repaint and touch-up programs that keep commercial premises presentable." },
    ],
    paragraphs: [
      "Commercial projects run on clear scope, fixed schedules, and tidy sites. We coordinate with managers and tenants so painting never gets in the way of business.",
      "Jetblack Painting carries $10 million public liability insurance and provides compliance documentation on request, with a 5-year workmanship guarantee on completed work.",
    ],
    extraSections: [
      {
        type: "steps",
        heading: "How a commercial painting project runs",
        items: [
          { title: "Site walk-through and scope", body: "We walk the site with you, measure the areas, check the condition of every substrate and note the practical constraints — access, height, trading hours, tenant impact. That's what the written quote is built from, rather than a rate applied blind to a floor plan." },
          { title: "Written scope and product specification", body: "You get an itemised quote listing the surfaces included, the preparation, the number of coats and the specific products. Naming the product matters commercially: a washable low-sheen in a corridor and a two-pack on a handrail are very different costs and very different service lives." },
          { title: "Scheduling around your trading hours", body: "We agree the staging up front — which areas are painted when, what stays open, and whether the work runs after hours or over a weekend. Multi-area sites are split into zones so only one part of the premises is affected at a time." },
          { title: "Site setup and preparation", body: "Floors, fittings and stock are protected before anything is opened. Preparation is where a commercial repaint is won or lost: washing down, filling and sanding, spot-priming bare or patched substrate, and masking to a clean line." },
          { title: "Application", body: "Coats go on to the specified film build, with drying and recoat times respected rather than compressed to finish early. Areas are returned to use progressively as they're completed and cured enough to take normal traffic." },
          { title: "Walk-through and sign-off", body: "We walk the finished work with you, list and complete any touch-ups, remove all protection and rubbish, and hand back a clean site. The 5-year written workmanship guarantee applies from completion." },
        ],
      },
      {
        heading: "What drives the cost of a commercial repaint in Melbourne",
        paragraphs: [
          "Area is the obvious factor, but it's rarely the one that moves a commercial quote most. Substrate condition matters more: sound painted plasterboard is quick, while flaking render, water-damaged ceilings, rusted steel or previously unsealed block all add preparation hours before a single topcoat goes on.",
          "Access is the second driver. Ground-floor office suites are straightforward; warehouse walls and ceilings at height, atriums, stairwells and external facades need scaffold, boom lifts or rope access, and that equipment is a real line in the quote rather than an afterthought.",
          "The third is downtime. Painting a premises that stays open — staged zones, after-hours shifts, overnight work, faster-drying low-odour systems — costs more per square metre than an empty tenancy handed over for a week, but it's usually far cheaper than closing. Product specification is the fourth: a hard-wearing washable system in a high-traffic corridor costs more to supply than a builder's-grade wall paint and lasts several times longer, which is the calculation worth making on a building you'll still own in ten years.",
          "We don't publish a rate per square metre for commercial work, because a number quoted without seeing the substrate is a number that changes later. The site walk-through and written quote are free — call Jimmy on 0432 077 782.",
        ],
      },
    ],
    faqs: [
      { question: "Can you paint outside business hours to avoid disruption?", answer: "Yes. We regularly complete commercial painting after hours, overnight and on weekends so trading isn't disrupted. The staging is agreed before we start, so you know which areas are affected and when they're back in use." },
      { question: "What types of commercial premises do you paint?", answer: "Offices, retail and hospitality fit-outs, warehouses and industrial units, and strata and body-corporate common areas across Melbourne. Coatings and access are matched to the building rather than applied from a standard template." },
      { question: "Are you licensed and insured for commercial work?", answer: "Yes. Jetblack Painting is fully licensed and carries $10 million public liability insurance, and we can provide documentation for building managers, owners corporations and site inductions before work begins." },
      { question: "How much does commercial painting cost in Melbourne?", answer: "It depends on the area, the condition of the substrate, the access required and whether the premises stays open during the work. Those variables move a commercial quote far more than floor area alone, so we walk the site and give you an itemised written quote rather than a rate applied sight-unseen. Quotes are free — call 0432 077 782." },
      { question: "How long will a commercial repaint take?", answer: "A single office suite or shopfront is usually a few days; a warehouse or a staged multi-area repaint runs longer, and after-hours work spreads the same hours across more calendar days. You get a schedule with the quote, including which zones are affected on which days." },
      { question: "Can you paint while staff and customers are still on site?", answer: "Yes, and much of our commercial work is done in occupied premises. We zone the work so only one area is affected at a time, keep access ways safe and clear, use low-odour water-based products where the specification allows, and leave each area clean at the end of every shift." },
      { question: "What paint do you use on commercial buildings?", answer: "Premium Dulux and Taubmans commercial systems, specified to the surface and the traffic it takes — washable low-sheen for corridors and offices, hard-wearing enamels or two-pack on doors, frames and handrails, and appropriate primers for steel, block and previously unsealed substrates. The products are named in your written quote." },
      { question: "Do you work with owners corporations and strata managers?", answer: "Yes. We provide detailed scopes, transparent pricing, insurance documentation and clear schedules for owners corporations, body corporate committees and strata managers, and can run repaints as a staged maintenance program across a building or portfolio." },
    ],
  },
  {
    route: "/services/roof-fence-painting",
    name: "Roof & Fence Painting",
    title:
      "Roof & Fence Painting Melbourne | Jetblack Painting",
    description:
      "Roof and fence painting in Melbourne. Extends roof life 10-15 years with weather-resistant coatings. Free quotes — call 0432 077 782.",
    heroTitle: "Roof & Fence Painting Melbourne",
    heroBody:
      "Roof restoration and fence painting across Melbourne — weather-resistant coating systems that protect the biggest exposed surfaces on your property and lift its street appeal.",
    cards: [
      { title: "Roof restoration", body: "Cleaning, repairs, priming, and membrane coatings for tile and metal roofs." },
      { title: "Timber fence painting", body: "Preparation, priming, and exterior finishes or stains for timber paling and picket fences." },
      { title: "Metal and Colorbond fences", body: "Rust treatment and durable coatings that bring metal fencing back to life." },
      { title: "Combined packages", body: "Roof and fence work quoted together for a complete exterior refresh." },
    ],
    paragraphs: [
      "Roofs and fences take the most weather of any surface on a property. The right preparation and exterior-grade coatings protect them for years and transform how the property presents from the street.",
      "All work is completed by insured professionals and covered by our 5-year workmanship guarantee.",
    ],
    extraSections: [
      {
        heading: "Timber and Colorbond are different jobs",
        paragraphs: [
          "A timber paling fence and a Colorbond fence look like the same job from the driveway and behave nothing alike once you start. Timber moves. It swells in winter, shrinks in summer, greys off under UV and eventually cups if only one face is sealed. That movement is what breaks a coating, which is why preparation on timber is mostly about giving the surface something stable to hold onto before anything is applied.",
          "Colorbond doesn't fail that way. The factory finish is durable and long-lived, and when it finally goes it chalks — the surface turns dusty and the colour flattens rather than flaking. That chalk is the whole problem: paint applied straight over it sticks to loose powder instead of steel, and peels off in sheets within a year. Colorbond needs a proper wash to strip the chalk back, a scuff to key the surface, and a primer formulated for metal. Done that way it holds colour for years and lets you change a dated green or cream fence to something current without replacing a single panel.",
          "Hardwoods sit in a third category. Merbau, spotted gum and similar dense timbers are naturally oily, and paint struggles to bond to them at all. They're better oiled — the finish soaks in rather than sitting on top, keeps the grain visible, and weathers back gradually instead of peeling. It needs recoating more often than paint does, but it never reaches the point of having to be stripped.",
        ],
      },
      {
        heading: "What preparation actually involves",
        paragraphs: [
          "Fences collect everything the weather throws at them, plus what grows on them. Mould, lichen and algae on the shaded southern side all have to come off, and washing alone doesn't kill the spores — left underneath a fresh coat they keep growing and push it away from the timber. Dirt, cobwebs and old flaking coating come off in the same pass.",
          "Then the repairs. Loose palings get refixed, popped nails punched and filled, and anything rotted through gets replaced before a brush is opened — a coating doesn't hold a failing fence together, it just hides the failure for a season. The bottom of a timber fence is always the first thing we look at, because ground moisture wicks straight up into the exposed end grain of each paling and rots it from underneath while the top three-quarters still looks fine.",
          "Access is the last thing to sort out, and it's the one that catches people. A boundary fence has two sides and one of them belongs to next door. Coating only your side leaves the other face raw, which weathers unevenly and encourages the palings to cup toward the wet side. It's worth asking your neighbour before the quote rather than discovering on the day that half the fence is off limits.",
        ],
      },
      {
        heading: "Roof coatings depend on what the roof is made of",
        paragraphs: [
          "Concrete tiles are porous. As the original surface treatment wears away they start absorbing water, which makes them heavier, slower to dry and a comfortable home for moss. Restoring them means cleaning the growth off, replacing anything cracked or slipped, repointing the ridge capping where the mortar has failed, then sealing the tile before the colour coats go on. Skip the sealer and the tile drinks the topcoat straight in.",
          "Metal roofs fail somewhere else entirely. Colorbond and Zincalume sheeting is stable across its face and vulnerable at the edges — around fixings, at cut ends, in valleys where water sits and leaves collect. Rust gets treated at those points specifically before an etch primer and topcoats go on, because a beautifully coated sheet with untreated rust under a screw head will bloom through within a year.",
          "The judgement that matters most is whether a roof should be coated at all. Cracked or slipped tiles, failed capping, rusted-through sheeting and blocked valleys are repairs, not paint problems — coat over a leak and you've sealed the fault in where nobody can see it. We assess that at the quote and say plainly if repair work needs to happen first. Where the roof is sound, a proper coating system extends its life by 10–15 years and stops the slow moisture damage that ages a roof faster than sun ever does.",
        ],
      },
      {
        heading: "Why we quote roof and fence together",
        paragraphs: [
          "These two get bundled for practical reasons, not as an upsell. Both need the same run of dry weather, both need the site set up once, and roof work needs height access that is already paid for whether the fence is done in the same visit or three months later. Splitting them means paying to mobilise twice.",
          "There's a presentation argument too. A restored roof above a grey, splitting fence draws the eye straight to the fence — the improvement makes the untouched part look worse than it did before. Done together, with colours chosen to work against each other rather than in isolation, the whole exterior lifts at once. That matters most before a sale or a rental listing, where the first impression is a photograph taken from the kerb.",
        ],
      },
    ],
    faqs: [
      { question: "Can you do the roof and fences in one project?", answer: "Yes, and it's usually the cheaper way to do it. The access equipment, the site setup and the weather window are shared across both, so quoting them together costs less than booking two separate jobs — and the exterior reads as one finished thing from the street rather than a new roof above a tired fence." },
      { question: "Should timber be painted, stained or oiled?", answer: "It depends on the timber and how much upkeep you want. Paint gives the longest protection and full colour control, but once timber is painted it stays painted — stripping it back later is a big job. Stain lets the grain show and weathers back gradually rather than peeling. Hardwoods like merbau are usually oiled instead, because paint struggles to hold on their dense, oily surface." },
      { question: "Can Colorbond fences and roofs be painted?", answer: "Yes. Colorbond and Zincalume take a new colour well, but they need different preparation from timber — a thorough wash to remove chalked factory coating, a scuff to give the surface a key, and a primer made for metal. Skipping any of that is why repainted Colorbond sometimes peels in sheets a year later." },
      { question: "Does my fence need repairs before painting?", answer: "Often, yes. Loose or rotted palings, popped nails and posts that have shifted all get dealt with before any coating goes on — paint doesn't hold a failing fence together. The bottom of a timber fence fails first because ground moisture wicks up into the end grain, so that's the first place we check at the quote." },
      { question: "Do you paint both sides of the fence?", answer: "Where we can get access, yes — and it's worth doing, because a fence coated on one side only weathers unevenly and can cup. A boundary fence needs your neighbour's agreement for us to work on their side, so it's worth asking them before the quote rather than after we're booked in." },
      { question: "How long does fence painting last?", answer: "With proper preparation and exterior-grade products, fence coatings typically last 5–10 years depending on exposure. A north or west-facing fence takes far more UV than a shaded one and will always be first to need attention." },
      { question: "When does a roof need repairs rather than painting?", answer: "When the problem is structural rather than cosmetic. Cracked or slipped tiles, failed ridge capping, rusted-through sheeting and blocked valleys all need fixing before a coating goes near them — paint over a leak and you've sealed the problem in. We assess this at the quote and tell you plainly if the roof needs repair work first." },
      { question: "What does roof painting actually protect against?", answer: "UV, moisture absorption and moss regrowth. Concrete tiles are porous and soak up water as they age, which makes them heavier and slower to dry; a sealed, coated roof sheds water instead. On metal roofs the coating protects the fixings and cut edges where rust starts. Done properly it extends roof life by 10–15 years." },
    ],
  },
  {
    route: "/services/kitchen-cabinet-resurfacing",
    name: "Kitchen Cabinet Resurfacing",
    title:
      "Kitchen Cabinet Resurfacing Melbourne | Jetblack Painting",
    description:
      "Kitchen cabinet resurfacing in Melbourne. Premium 2-pack finishes at a fraction of renovation cost. Free quotes — call 0432 077 782.",
    heroTitle: "Kitchen Cabinet Resurfacing Melbourne",
    heroBody:
      "Transform your kitchen for a fraction of renovation cost — premium 2-pack finishes applied to existing cabinetry for a factory-quality result without demolition.",
    cards: [
      { title: "2-pack polyurethane finishes", body: "Durable, factory-style 2-pack coatings sprayed for a smooth, hard-wearing finish." },
      { title: "Doors, panels and drawers", body: "Complete resurfacing of cabinet doors, drawer fronts, and end panels in your chosen colour." },
      { title: "Colour transformation", body: "Update dated timber or coloured cabinetry to modern whites, neutrals, or bold feature tones." },
      { title: "Laundry and built-in cabinetry", body: "The same resurfacing process applied to laundries, wardrobes, and built-in units." },
    ],
    paragraphs: [
      "Resurfacing keeps your existing kitchen layout and cabinetry carcasses and renews the visible surfaces — typically at a fraction of the cost and downtime of a full renovation.",
      "Surfaces are degreased, sanded, primed, and finished in premium 2-pack systems for a durable, wipeable finish, backed by our 5-year workmanship guarantee.",
    ],
    extraSections: [
      {
        heading: "Which kitchen cabinets can be resurfaced",
        paragraphs: [
          "Most Melbourne kitchens built in the last thirty years can be resurfaced. Laminate and melamine doors, vinyl-wrapped MDF, timber and timber-veneer, and existing 2-pack polyurethane all take a new 2-pack finish once they have been properly prepared — the substrate matters far less than its condition. Vinyl-wrapped doors are the most common candidate we see: the wrap lifts and bubbles around the oven and the dishwasher long before anything structural fails, and resurfacing deals with that permanently instead of replacing doors that are otherwise sound.",
          "What can't be saved is board that has taken water. If the MDF under the sink or beside the dishwasher has swollen, gone soft or crumbled at the edges, no coating will hide it — that door or panel needs replacing before the rest of the kitchen is finished, and we'll tell you that at the quote rather than after the job has started. The same applies to doors that have delaminated badly or carcasses that have dropped out of square. Resurfacing renews surfaces; it doesn't repair failed board or fix a layout that never worked.",
        ],
      },
      {
        heading: "Why 2-pack, and why it's sprayed",
        paragraphs: [
          "Kitchen cabinetry is the hardest-worked painted surface in a house. Doors get grabbed with wet hands, wiped down with detergent, knocked with pans and steamed every day. A standard brush-applied enamel doesn't hold up to that for long — it stays comparatively soft, marks under a fingernail, and shows every brush stroke across a flat door face.",
          "2-pack polyurethane cures chemically rather than simply drying out, which is why it ends up hard, non-porous and genuinely wipeable. It's the same class of finish used on factory-made cabinetry, and sprayed properly it lays down without a single brush mark.",
          "How it goes on matters as much as what goes on. Doors, drawer fronts and end panels come off and are sprayed in our booth, where dust and airflow are controlled and every face can be laid flat. The carcasses and face frames that stay in your kitchen are masked and sprayed on site. Preparation is where the job is won or lost: every surface is degreased first, because years of cooking residue is the single most common reason cabinet paint fails to stick, then sanded to a key and primed with an adhesion primer matched to the substrate underneath.",
        ],
      },
      {
        heading: "Choosing colour, sheen and hardware",
        paragraphs: [
          "Colour is the easy part; sheen is where people get caught out. High gloss looks spectacular in a showroom and shows every fingerprint in a real kitchen, particularly in dark colours. Satin and low-sheen hide daily handling far better while still wiping clean, which is why they suit most family kitchens. If you do want gloss, it works best on the upper doors, where hands go least often.",
          "Two-tone kitchens remain the most reliable way to modernise a dated layout — lighter uppers to keep the room feeling open, a deeper colour on the lower cabinets and the island where marks show least. Warm whites and greiges photograph well and date slowly. Strong colours are best kept to an island or a pantry door, where they can be changed later without redoing the whole kitchen.",
          "Handles change the look more than most people expect, and swapping them is far easier while the doors are already off and in the booth. If you're planning new hardware, mention it at quoting stage — the hole spacing on new handles rarely matches the old, and it is a much cleaner job to sort that out before the finish goes on than to drill through it afterwards. Colour consultation is included with every quote.",
        ],
      },
      {
        heading: "What to expect during and after the job",
        paragraphs: [
          "You keep your kitchen. The carcasses, benchtops and appliances all stay where they are, so the sink, oven and fridge remain usable while the work is going on — it's the doors and drawer fronts that leave. Expect open shelving through the middle stretch of the job, and to have the benches clear on the days the frames are being sprayed.",
          "Most kitchens run 5–10 days from first preparation to refitting. When the doors go back on, the finish will feel dry and look finished, but 2-pack keeps hardening for some weeks after that. It's worth being gentle in that window — wipe with a soft cloth and warm water rather than scouring pads or solvent cleaners, and avoid leaving anything pressed hard against a door face. After that it behaves like any other kitchen surface. The workmanship is covered by our 5-year written guarantee.",
        ],
      },
    ],
    faqs: [
      { question: "How much cheaper is resurfacing than a new kitchen?", answer: "Resurfacing typically costs 30–50% less than a full kitchen renovation, because the layout, carcasses and benchtops all stay in place. You're paying for preparation, materials and spraying rather than demolition, new cabinetry and multiple trades. The saving is largest in kitchens where the existing layout still works and only the surfaces look dated." },
      { question: "Can laminate or vinyl-wrapped cabinets be painted?", answer: "Yes. Laminate, melamine and vinyl-wrapped MDF all take a 2-pack finish once they have been degreased, sanded to a key and primed with the right adhesion primer. Vinyl-wrapped doors that have started lifting around the oven or dishwasher are among the most common kitchens we resurface — the wrap fails long before the door underneath does." },
      { question: "Are the doors sprayed in my kitchen or taken away?", answer: "Doors, drawer fronts and end panels come off and are sprayed in our booth, where dust and airflow are controlled and every face can be laid flat. The carcasses and face frames that can't be removed are masked and sprayed in place. That combination is what gives the finish its factory-flat look instead of the texture you get from brushing everything on site." },
      { question: "How long does cabinet resurfacing take?", answer: "Most kitchens take 5–10 days from first preparation to refitting the doors, depending on the number of doors and the coats specified. Preparation and priming take up more of that time than the topcoats do." },
      { question: "Can I use my kitchen while the cabinets are being resurfaced?", answer: "Yes. The carcasses, benchtops and appliances stay where they are, so the sink, oven and fridge remain usable throughout. You'll have open shelving while the doors are off, and the benches need to be clear on the days the frames are being sprayed." },
      { question: "Is a 2-pack finish durable in a kitchen?", answer: "Yes. 2-pack polyurethane cures chemically rather than simply drying, which leaves it hard, non-porous and genuinely wipeable — the same class of finish used on factory-made cabinetry. It stands up to daily wiping, hand contact and cooking steam far better than a brush-applied enamel." },
      { question: "Which sheen is best for kitchen cabinets?", answer: "Satin or low-sheen suits most kitchens. High gloss looks striking but shows fingerprints and wipe marks constantly, especially in darker colours. Satin handles daily contact far better and still wipes clean. If you want gloss, it works best on upper doors, which get touched least." },
      { question: "What can't cabinet resurfacing fix?", answer: "Water damage and structural problems. If the board under the sink or beside the dishwasher has swollen or gone soft, or a carcass has dropped out of square, a coating won't hide it — that section needs replacing first. Resurfacing renews the visible surfaces; it doesn't repair failed board or change the kitchen's layout." },
    ],
  },
  {
    route: "/services/real-estate-painting",
    name: "Real Estate Painting",
    title:
      "Real Estate Painting Melbourne | Jetblack Painting",
    description:
      "Pre-sale and pre-lease painting in Melbourne for agents, vendors and investors. Fast turnarounds, neutral colours. Free quotes — 0432 077 782.",
    heroTitle: "Real Estate Painting Melbourne",
    heroBody:
      "Presentation-ready repaints for agents, vendors and investors — fast, sale-ready interior and exterior painting that lifts value and buyer appeal, scheduled around your campaign.",
    cards: [
      { title: "Pre-sale repaints", body: "Fast interior and exterior refreshes that deal with scuffs, dated colours and tired façades before photography and open homes." },
      { title: "Neutral colour consultation", body: "Broad-appeal, photograph-friendly colour schemes that help the widest range of buyers and tenants picture themselves in the home." },
      { title: "Agent and stylist coordination", body: "Direct coordination with real estate agents, vendors and property stylists on quotes, access and timing." },
      { title: "Investment and pre-lease refreshes", body: "Durable, presentation-ready repaints for investors preparing a property to lease or re-list." },
    ],
    paragraphs: [
      "A professional repaint is one of the highest-return improvements before a sale or lease — it lifts listing photography, inspection appeal and buyer perception, often returning far more than it costs.",
      "We understand real estate timelines and work to your campaign and settlement dates, coordinating with agents and stylists so the property is ready for photography and the first open home — backed by a 5-year workmanship guarantee and $10 million public liability insurance.",
    ],
    extraSections: [
      {
        heading: "How a repaint fits into the campaign timeline",
        paragraphs: [
          "Painting is always the first trade on site before a campaign, not the last. We work backwards from the photography date: the property needs to be fully painted, dry and properly ventilated with days to spare, so the stylist can move furniture in without working around wet paint or a lingering smell, and so the final coat isn't rushed the night before a shoot to hit a deadline it was never going to comfortably meet.",
          "That sequencing matters more than people expect. A property painted after styling means working around furniture, rugs and staged decor — slower, riskier for the stylist's pieces, and harder to get a clean, even finish into corners and skirting that are now partly obstructed. Painting first keeps every trade that follows moving on schedule instead of waiting on a coat of paint that should have been finished a week earlier.",
        ],
      },
      {
        heading: "Why paint condition affects what buyers offer",
        paragraphs: [
          "Scuffed walls, dated colours and a tired façade don't just look worse in photos — they get priced against you at the negotiation table. Buyers read visible wear as a proxy for how well the rest of the property has been maintained, whether or not that's actually true, and a flat, even repaint removes that signal before it can work against the sale price.",
          "A patchy DIY touch-up can do more damage than no touch-up at all. A slightly-off colour match or a different sheen catches the eye under listing photography and open-home lighting just as clearly as the original mark did, and reads to a buyer as a sign of corners cut rather than care taken. Where a wall or room has visible marks going into a campaign, a full, even repaint of the affected area is almost always the safer call.",
        ],
      },
      {
        heading: "Choosing colours that sell, not just colours you'd live with",
        paragraphs: [
          "A bold feature wall is a personal choice, and every personal choice a buyer has to mentally undo is one more reason they picture someone else's home instead of their own. Warm whites and soft, broad-appeal neutrals let the widest range of buyers imagine their own furniture in the room, which is the entire job of a listing photo and an open home — removing friction between the buyer and the sale, not adding character for its own sake.",
          "Neutral palettes also photograph more evenly. Strong or dark colours shift under different light sources and camera settings in a way flat whites and soft neutrals don't, which is part of why they're the default for listing photography specifically, separate from the buyer-appeal argument. We choose the scheme to suit the property's own light and finishes, not a single stock colour applied to every listing regardless of the home.",
        ],
      },
      {
        heading: "Rental turnarounds between tenants",
        paragraphs: [
          "The window between an outgoing tenant leaving and a new lease starting is usually tight, and every day it runs into is a day of vacant rent. We coordinate directly with property managers on the exact dates so the repaint fits the vacancy period rather than extending it, and we prioritise durable, washable finishes over a presentation-only one, because a rental property has to hold up through the next tenancy, not just look good for the next inspection.",
          "Repainting on a regular cycle rather than only when damage becomes visible protects the asset and reduces disputes at the end of a tenancy — it's easier to assess fair wear and tear against a recent, known paint job than one nobody can date. For landlords managing several properties, we can coordinate turnarounds across a portfolio rather than treating each one as a one-off job.",
        ],
      },
    ],
    faqs: [
      { question: "Do you work directly with real estate agents and vendors?", answer: "Yes. We regularly coordinate directly with real estate agents, vendors and property stylists across Melbourne — handling quotes, access, scheduling and invoicing so the repaint is finished on time for photography, styling and the first open home." },
      { question: "How quickly can you paint a property before it goes on the market?", answer: "Most pre-sale and pre-lease repaints are completed within a few days to a week, depending on the size and scope. We build the schedule around your campaign dates and settlement deadlines so the property is ready when it needs to be." },
      { question: "What colours work best for selling or leasing a property?", answer: "Warm whites and soft, broad-appeal neutrals photograph well and help the widest range of buyers and tenants picture themselves in the home. We provide colour consultation to choose a scheme that suits the property and maximises presentation." },
      { question: "Is painting worth it before selling a property?", answer: "In most cases yes. A professional repaint is one of the highest-return improvements before a sale — it addresses scuffs, dated colours and tired façades that buyers otherwise price against you, and lifts the quality of listing photography and inspections." },
      { question: "When in the campaign should painting happen?", answer: "Before styling and before photography — painting is always the first trade on site, not the last. We work backwards from your photography date so paint is finished, dry and ventilated with time to spare for the stylist to move furniture in, rather than painting around styled rooms or rushing the final coat the night before a shoot." },
      { question: "Should I paint a feature wall or keep it neutral for a sale?", answer: "Keep it neutral for a sale. A bold feature wall reads as a personal choice a buyer has to mentally undo before they can picture their own furniture in the room, which narrows your buyer pool rather than widening it. Neutral, broad-appeal palettes photograph more evenly under listing lighting too, which is a separate reason they're the default for a sale campaign." },
      { question: "Can you paint between a tenant moving out and a new lease starting?", answer: "Yes, and vacancy turnarounds are a regular part of our rental and investment work. We coordinate directly with property managers on the exact window between the outgoing and incoming tenant, and use durable, washable finishes suited to rental wear rather than a presentation-only finish, since the property needs to hold up through the next tenancy, not just the next inspection." },
      { question: "Does a patchy DIY touch-up look better or worse than not painting at all?", answer: "Often worse. A touch-up in slightly the wrong colour or sheen shows up under listing photography and open-home lighting as clearly as an unpainted mark does, and can read to a buyer as a sign of deferred maintenance rather than care. A full, even repaint of the affected walls or room is usually the safer call before a campaign starts." },
    ],
  },
  {
    route: "/services/body-corporate-painting",
    name: "Body Corporate Painting",
    title:
      "Body Corporate Painting Melbourne | Jetblack Painting",
    description:
      "Body corporate and strata painting in Melbourne. Common areas, facades and maintenance programs. Fully insured. Free quotes — 0432 077 782.",
    heroTitle: "Body Corporate Painting Melbourne",
    heroBody:
      "Professional painting for owners corporations and strata-managed properties — common areas and façades repainted with minimal disruption to residents, fully insured and on schedule.",
    cards: [
      { title: "Common areas", body: "Entry lobbies, hallways, corridors, stairwells and shared amenities repainted with durable, low-maintenance finishes." },
      { title: "External façades", body: "Rendered walls, eaves, balconies and building exteriors prepared and coated to protect the structure and its value." },
      { title: "Owners corporation coordination", body: "Detailed scopes, transparent pricing and insurance documentation so committees and strata managers can approve works with confidence." },
      { title: "Maintenance programs", body: "Scheduled repaint and maintenance programs across single or multiple buildings, staged around residents." },
    ],
    paragraphs: [
      "Body corporate painting keeps apartment blocks, unit complexes and townhouse developments presenting well and protects shared property against wear and weather. We repaint common areas and façades with hard-wearing systems built for high-traffic spaces.",
      "Committees and managers need clarity and confidence, so every project comes with a detailed written scope, transparent pricing, $10 million public liability insurance and a clear schedule — delivered with minimal disruption to residents and backed by a 5-year workmanship guarantee.",
    ],
    extraSections: [
      {
        heading: "How the committee approval process actually works",
        paragraphs: [
          "A body corporate can't approve a painting job the way a homeowner approves one. A committee needs something they can put in front of owners and defend — a scope specific enough that nobody can reasonably ask \"but what does that actually cover,\" a price that doesn't move once the vote is cast, and proof of insurance that satisfies whatever the owners corporation's rules require. We write the quote for that meeting, not just for the job.",
          "That means breaking the scope down by area rather than quoting the building as one lump figure — lobby, stairwells, façade, car park — so a committee weighing priorities against a budget can see where the cost actually sits, and can stage the work or split it across financial years if that's how the money needs to work. It also means the insurance documentation is ready to go before it's asked for, not chased down after the meeting once someone raises the question.",
        ],
      },
      {
        heading: "Staging work around an occupied building",
        paragraphs: [
          "Closing a whole building down for the length of a repaint isn't realistic when people live and work in it, so staging is the default approach on strata property, not a special request. Most projects run wing by wing or level by level, which keeps at least one entry, one stairwell and the car park accessible at any given time rather than forcing every resident through a single remaining exit.",
          "For complexes with more than one building, that same logic extends across the site — the works can be quoted and run as one continuous staged program, or split building by building against separate budget approvals, whichever suits how the committee wants to fund it. Either way, the schedule is set out clearly enough in advance that the committee can circulate it to owners and tenants before scaffolding or access equipment shows up, not after.",
        ],
      },
      {
        heading: "Access equipment for multi-storey and façade work",
        paragraphs: [
          "Common property access equipment gets chosen for the building, not defaulted to whatever's easiest to book. A three-storey walk-up with a narrow driveway rules out a lot of what would work on an open site with clear boom reach, and scaffolding that makes sense on a low-rise façade isn't practical — or affordable — run up a high-rise tower. Scaffolding, elevated work platforms and scissor lifts each suit different heights, façade shapes and site access, and the right one is worked out at the quote stage, not improvised on the day.",
          "That assessment happens before the price is finalised, because access equipment is one of the biggest cost variables in a multi-storey repaint — getting it wrong either blows the budget or means turning up on site to find the booked equipment can't actually reach the work. We also account for anything the owners corporation's own bylaws specify about common property access, so there's no last-minute conflict between the equipment plan and what the strata rules actually allow.",
        ],
      },
    ],
    faqs: [
      { question: "Do you work with owners corporations and strata managers?", answer: "Yes. We regularly work directly with owners corporations, body corporate committees and strata managers across Melbourne — providing detailed quotes, scopes of work, insurance documentation and clear schedules so committees can approve and plan the works with confidence." },
      { question: "What areas of an apartment or unit complex do you paint?", answer: "We paint all common property, including entry lobbies, hallways and corridors, stairwells, car parks, external façades and rendered walls, balconies, eaves and shared amenities. We can quote a full repaint or a staged maintenance program across multiple buildings." },
      { question: "How do you minimise disruption to residents?", answer: "We plan the work around residents and tenants — keeping access ways safe and open, staging areas so entries and stairwells remain usable, using low-odour products in occupied buildings, and communicating the schedule clearly in advance so everyone knows what to expect." },
      { question: "Are you insured for body corporate and strata work?", answer: "Absolutely. Jetblack Painting carries $10 million public liability insurance and follows proper site safety and access procedures. We're happy to provide insurance certificates, safe work documentation and detailed scopes for committees and building managers before work begins." },
      { question: "What does a committee actually need to approve the work?", answer: "A detailed written scope broken down by area, a clear price, and our insurance documentation — that's what lets a committee move from discussion to a decision without a second round of questions. We prepare the quote so it can go straight into an AGM or committee meeting agenda, itemised enough that owners can see exactly what's included before they vote on it." },
      { question: "Can the work be staged across a large building or multiple buildings?", answer: "Yes. Staging is standard on occupied strata property, not an exception — we typically work wing by wing or level by level so entries, stairwells and car park access stay usable throughout, rather than closing the whole building down for the length of the project. For multi-building complexes, we can quote the works as a single staged program or building by building, whichever suits the committee's budget and timing." },
      { question: "What access equipment do you use for multi-storey buildings?", answer: "It depends on the building's height and site constraints — scaffolding, elevated work platforms or scissor lifts, chosen for what the specific façade and access conditions actually need rather than a default option. We factor site access, boom reach and any strata bylaws around common property access into the quote up front, so there's no surprise equipment cost once work starts." },
      { question: "How do you communicate with residents during the project?", answer: "Through the committee or strata manager, with a schedule they can circulate to owners and tenants ahead of time — which areas are affected and when, so residents aren't caught off guard by scaffolding or a closed stairwell. Low-odour products are used as standard in occupied common areas, and access ways are kept safe and usable throughout rather than closed off entirely." },
    ],
  },
  {
    route: "/services/epoxy-flooring",
    name: "Epoxy Flooring",
    title:
      "Epoxy Flooring Melbourne | Jetblack Painting",
    description:
      "Epoxy flake flooring, garage floor coatings and concrete resurfacing across Melbourne. Warehouses, workshops and garages. Fully insured. Free quotes.",
    heroTitle: "Epoxy Flooring & Concrete Resurfacing Melbourne",
    heroBody:
      "Decorative epoxy flake floors, garage floor coatings and concrete resurfacing for warehouses, workshops and homes across Melbourne — ground back properly, then built up in layers.",
    cards: [
      { title: "Decorative epoxy flake", body: "Vinyl flake broadcast into the base coat and sealed under a clear topcoat, from subtle grey blends to high-contrast black and white." },
      { title: "Garage floor coatings", body: "Stained, dusty domestic slabs turned into a finished floor that stops shedding concrete dust onto everything stored on it." },
      { title: "Warehouse and commercial floors", body: "Staged around a business that keeps operating, section by section, with cure times protected from traffic." },
      { title: "Concrete resurfacing", body: "Spalled, pitted or repeatedly patched surfaces made good first, so the new finish doesn't just follow the damage underneath." },
    ],
    paragraphs: [
      "Jetblack Painting coats and resurfaces concrete floors across Melbourne — decorative flake finishes, solid colour coatings and clear-sealed concrete, in everything from single domestic garages to full warehouse floors. It's the same trade discipline as the rest of our work: the finish people see is the last few hours of the job, and the preparation underneath it is the part that decides how long it lasts.",
      "Jetblack Painting is a 5-star rated Melbourne business with 13+ years of experience, $10 million public liability insurance, and a 5-year workmanship guarantee on every project.",
    ],
    extraSections: [
      {
        heading: "Preparation Is the Whole Job",
        paragraphs: [
          "Almost every failed garage floor you've seen — the coating lifting in sheets, peeling away where the tyres sit — failed for the same reason. It was rolled onto smooth concrete that was never opened up first. Bare slabs have a dense, closed surface layer, and a coating applied straight onto it is holding on by very little. Heat, moisture and a turning tyre are enough to break that bond.",
          "Mechanical preparation solves it by removing that layer entirely, along with old paint, sealers, glue residue and surface staining, and leaving a profile the first coat can key into. This is also the stage that exposes what the floor is actually like underneath. Cracks that were hidden under dirt, patches of previous repair, soft or crumbling areas and old oil that has soaked into the slab all surface here, and all of them need dealing with before a coating goes anywhere near the floor.",
          "Moisture is the one that catches people out. Concrete sitting on ground without an effective vapour barrier can push moisture up through the slab, and that pressure will lift a coating from below no matter how well the surface was prepared. It's checked before quoting, because it changes which system is appropriate — and occasionally it's the reason we say a floor isn't a good candidate at all, which is better said before the job than discovered after it.",
        ],
      },
      {
        heading: "Flake, Solid Colour and Sealed Concrete",
        paragraphs: [
          "A decorative flake floor is built in layers. A base coat goes down, vinyl flakes are broadcast into it while it's still wet, and once cured the excess is scraped back and the floor is sealed under a clear topcoat. The flake is doing more than decoration — it hides the everyday marking that shows up mercilessly on a plain floor, and it builds texture into the surface so the result isn't a sheet of gloss. Flake blends run from subtle grey-on-grey through to high-contrast black and white.",
          "Solid colour coatings suit spaces where the floor should read as one clean surface rather than a decorative feature — plant rooms, storage areas, back-of-house commercial spaces, and line-marked areas where the marking needs to stand out against a plain background. They're also the easier finish to touch in locally later, which matters in a working space that takes knocks.",
          "Clear-sealed concrete is the lightest-touch option: the slab is ground, any repairs made good, and a clear sealer applied so the concrete itself stays visible. It suits polished-look interiors and spaces where the raw concrete is genuinely part of the design, and it's the option that shows the slab's own history most honestly — which is either exactly what you want or exactly what you don't, depending on the floor.",
        ],
      },
      {
        heading: "Garages, Warehouses and Commercial Floors",
        paragraphs: [
          "A domestic garage is usually the most straightforward version of this work, and the one where the visual difference is starkest — a stained, dusty slab becomes a floor that reads as a finished room rather than a leftover space. Concrete dust is the underrated part: an uncoated slab sheds fine dust continuously onto everything stored on it, and sealing the surface stops that at the source.",
          "Warehouse and workshop floors are a different problem, and it's rarely the coating itself. It's staging. The floor has to come out of service in sections that let the business keep operating, stock and racking have to be moved and moved back, and each section needs its cure time protected from foot and vehicle traffic before the next one starts. That planning is the part worth getting right at the quote, because a schedule that ignores it costs the business more than the floor does.",
          "Retail and showroom floors add appearance to the same equation. The finish is on display rather than just underfoot, joins between sections need to fall where they won't be noticed, and the work usually has to happen outside trading hours. We agree the staging and the access arrangements in writing before starting, so nobody discovers on the morning that the shop can't open.",
        ],
      },
    ],
    faqs: [
      { question: "What is epoxy flake flooring?", answer: "Epoxy flake flooring is a layered floor coating with decorative vinyl flakes broadcast into it, then sealed under a clear topcoat. The flake does two jobs at once — it gives the floor its speckled, terrazzo-like appearance, and it builds texture into the surface so the finished floor isn't a flat sheet of gloss. It's the finish most people picture when they think of a modern garage or showroom floor." },
      { question: "Can you coat an existing concrete slab, or does it need replacing?", answer: "Most existing slabs can be coated. Age, stains and old paint are usually not the problem people expect — grinding removes the surface layer along with them. What does need assessing first is structural cracking, moisture coming up through the slab, and whether the concrete was previously sealed, because those change the preparation and sometimes the coating system. We check all three before quoting rather than after starting." },
      { question: "Why does the floor have to be ground before coating?", answer: "Grinding is what makes the coating bond to the slab instead of sitting on it. Bare concrete has a smooth, dense surface layer, and any coating rolled straight onto it is relying on grip it doesn't have — which is why cheap garage floor jobs peel up in sheets under a hot tyre. Mechanical preparation opens that surface up so the first coat keys into the concrete itself." },
      { question: "Is an epoxy floor slippery when wet?", answer: "A flake floor has texture built into it from the flake itself, which gives it more grip than a smooth gloss coating. Where a floor needs more than that — a workshop that gets wet, a commercial entry, a ramp — an anti-slip additive can be worked into the topcoat. Tell us how the space actually gets used and we'll match the finish to it." },
      { question: "How long before I can walk on it and park on it?", answer: "Foot traffic and vehicle traffic return at different times, and both depend on the coating system and the temperature while it cures. Vehicle traffic always waits considerably longer than foot traffic, because a tyre puts far more stress on a coating that hasn't fully hardened than a shoe does. We give you the exact timings for your floor and the conditions on the day as part of the quote, rather than a general figure that may not apply." },
      { question: "What's the difference between epoxy coating and concrete resurfacing?", answer: "Coating puts a new wearing surface on top of a sound slab, while resurfacing rebuilds the surface of a slab that's damaged. If the concrete is structurally fine but stained, dusty or tired, a coating is the right answer. If the surface itself is spalling, pitted or has been patched repeatedly, it needs making good before any coating goes on — otherwise the new finish just follows the shape of the damage underneath." },
      { question: "Do you do warehouse and commercial floors as well as domestic garages?", answer: "Yes, both. The difference is mostly scale, access and downtime rather than the finish itself — a warehouse floor has to be staged around the business still operating, and a retail or showroom floor usually has to be done outside trading hours. We work to a schedule agreed up front so you know exactly when the space is out of use." },
      { question: "Will the coating hide cracks in my concrete?", answer: "It will hide fine surface cracking, but it will not fix a moving crack. A crack that's still moving will telegraph straight back through a new coating, sometimes within months, so it has to be cut out and filled properly first rather than coated over. We'd rather point that out at the quote than have it reappear through a finished floor." },
    ],
  },
];

for (const service of servicePages) {
  const canonical = canonicalForRoute(service.route);
  writePage(
    service.route,
    pageHtml({
      title: service.title,
      description: service.description,
      canonical,
      heroTitle: service.heroTitle,
      heroBody: service.heroBody,
      schema: [
        ...serviceSchema({ name: service.name, title: service.title, description: service.description, canonical }),
        faqSchema(service.faqs),
        breadcrumbTrail([
          { name: "Home", item: "/" },
          { name: "Services", item: "/#services" },
          { name: service.name, item: canonical },
        ]),
      ],
      sections: [
        {
          type: "cards",
          heading: `What's included in our ${service.name.toLowerCase()} service`,
          items: service.cards,
        },
        {
          heading: `Why Melbourne chooses Jetblack Painting for ${service.name.toLowerCase()}`,
          paragraphs: service.paragraphs,
        },
        // Optional pillar-depth sections for the head-term service pages.
        ...(service.extraSections ?? []),
        {
          type: "faqs",
          heading: `${service.name} FAQs`,
          items: service.faqs,
        },
        {
          type: "links",
          heading: "Suburbs we service",
          body: "We provide this service across Melbourne, including these areas.",
          items: serviceSuburbLinks[service.route] || popularSuburbLinks,
        },
        {
          type: "links",
          heading: "Related painting services",
          body: "Explore our other painting services across Melbourne.",
          items: servicePages
            .filter((other) => other.route !== service.route)
            .slice(0, 4)
            .map((other) => ({ label: other.name, href: `${other.route}/` })),
        },
      ],
      footerLinks: [
        { label: "Home", href: "/" },
        { label: "FAQ", href: "/faq/" },
        { label: "Blog", href: "/blog/" },
      ],
    })
  );
}

// Publication metadata for the blog articles. Dates track when each guide was
// first published and last substantively revised — keep `modified` in step when
// an article's content is rewritten. Categories match the labels shown on /blog/.
//
// Declared above `blogIndexArticles` because the /blog/ index writes its
// `blogPost` entries from this map at module-execution time; a `const` declared
// further down would still be in the temporal dead zone and throw.
const articleMeta = {
  "/blog/best-paint-colours-melbourne-2025": { published: "2026-06-23", modified: "2026-07-26", section: "Design Tips" },
  "/blog/house-painting-cost-melbourne": { published: "2026-06-23", modified: "2026-08-13", section: "Price Guide" },
  "/blog/prepare-home-for-painting": { published: "2026-06-23", modified: "2026-08-13", section: "Guide" },
  "/blog/kitchen-cabinet-resurfacing-vs-replacement": { published: "2026-06-23", modified: "2026-08-13", section: "Kitchen" },
  "/blog/mould-remediation-painting-melbourne": { published: "2026-07-17", modified: "2026-07-26", section: "Guide" },
  "/blog/how-to-choose-a-painter-melbourne": { published: "2026-07-21", modified: "2026-07-26", section: "Guide" },
  "/blog/how-to-paint-a-weatherboard-house-melbourne": { published: "2026-07-26", modified: "2026-08-13", section: "Guide" },
};

// The service page(s) each article should point at. Previously every article
// carried the same single "Interior Painting" footer link regardless of subject,
// so the weatherboard guide, the mould guide and the kitchen cabinet cost
// comparison all pushed readers to interior painting — the cabinet article in
// particular linked past the very service it is about. Each article now links
// to the services it actually concerns.
const articleServiceLinks = {
  "/blog/best-paint-colours-melbourne-2025": [
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
  ],
  "/blog/house-painting-cost-melbourne": [
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
  ],
  "/blog/prepare-home-for-painting": [
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
  ],
  "/blog/kitchen-cabinet-resurfacing-vs-replacement": [
    { label: "Kitchen Cabinet Resurfacing", href: "/services/kitchen-cabinet-resurfacing/" },
    { label: "Interior Painting", href: "/services/interior-painting/" },
  ],
  "/blog/mould-remediation-painting-melbourne": [
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
  ],
  "/blog/how-to-choose-a-painter-melbourne": [
    { label: "Interior Painting", href: "/services/interior-painting/" },
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
  ],
  "/blog/how-to-paint-a-weatherboard-house-melbourne": [
    { label: "Exterior Painting", href: "/services/exterior-painting/" },
    { label: "Roof & Fence Painting", href: "/services/roof-fence-painting/" },
  ],
};

// Titles and bodies must match the `posts` array in client/src/pages/Blog.tsx
// verbatim. The static index is what crawlers read and the React index is what
// Google's rendered pass reads; when they drift, the two passes disagree about
// the same URL — and the headlines here also feed the Blog page's `blogPost`
// structured data.
const blogIndexArticles = [
  {
    title: "Best Paint Colours for Melbourne Homes in 2026",
    href: "/blog/best-paint-colours-melbourne-2025/",
    body: "Discover the trending paint colours that are transforming Melbourne homes. From warm neutrals to bold statement colours, find the perfect palette for your property.",
  },
  {
    title: "How Much Does House Painting Cost in Melbourne? (2026 Price Guide)",
    href: "/blog/house-painting-cost-melbourne/",
    body: "Get a comprehensive breakdown of painting costs across Melbourne. Interior, exterior, and commercial pricing with real examples from our recent projects.",
  },
  {
    title: "How to Prepare Your Melbourne Home for Professional Painting",
    href: "/blog/prepare-home-for-painting/",
    body: "Proper preparation is key to a successful painting project. Learn our expert tips for preparing your home to ensure the best results.",
  },
  {
    title: "Kitchen Cabinet Resurfacing vs Replacement: What Melbourne Homeowners Need to Know",
    href: "/blog/kitchen-cabinet-resurfacing-vs-replacement/",
    body: "Transform your kitchen for a fraction of the cost of a full renovation. Learn about 2-pack cabinet resurfacing and when it's the right choice.",
  },
  {
    title: "Mould Remediation & Painting Guide for Melbourne Homes",
    href: "/blog/mould-remediation-painting-melbourne/",
    body: "How to correctly identify, treat and paint over mould in Melbourne homes. Covers bathroom mould, external render, anti-mould primers and which paints to use by surface type.",
  },
  {
    title: "How to Choose a Painter in Melbourne: A Homeowner's Guide",
    href: "/blog/how-to-choose-a-painter-melbourne/",
    body: "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees, reviews and red flags to avoid.",
  },
  {
    title: "How to Paint a Weatherboard House: A Melbourne Guide",
    href: "/blog/how-to-paint-a-weatherboard-house-melbourne/",
    body: "Preparation, priming bare timber, caulking and the right exterior paints — how weatherboard is painted so it lasts 7-10 years, not one season.",
  },
];

writePage(
  "/blog",
  pageHtml({
    title: "Painting Tips & Guides Melbourne | Jetblack Painting Blog",
    description: "Painting advice, colour guides and cost tips from Jetblack Painting. Read Melbourne-focused blog articles on interior, exterior and cabinet painting.",
    canonical: canonicalForRoute("/blog"),
    heroTitle: "Jetblack Painting Blog",
    heroBody: "Read practical painting advice for Melbourne homeowners, landlords, and businesses — from colour ideas and cost guides to preparation tips and cabinet resurfacing insights.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Jetblack Painting Blog",
        url: canonicalForRoute("/blog"),
        inLanguage: "en-AU",
        description:
          "Painting advice, colour guides and cost tips from Jetblack Painting. Read Melbourne-focused blog articles on interior, exterior and cabinet painting.",
        publisher: {
          "@type": "Organization",
          name: "Jetblack Painting",
          url: SITE_URL,
        },
        // Enumerating the posts lets AI assistants see the full guide list from
        // the index page alone, without crawling each article first.
        //
        // Dates, image and author are carried here as well as on each article's
        // own page: Search Console evaluates these nested BlogPosting entities
        // in its own right, and reported them as Articles warnings (missing
        // datePublished / image) while only headline+description+url were set.
        // Values come from `articleMeta` so the index and the article pages
        // cannot drift apart.
        blogPost: blogIndexArticles.map((article) => {
          const meta = articleMeta[article.href.replace(/\/$/, "")];
          return {
            "@type": "BlogPosting",
            headline: article.title,
            description: article.body,
            url: `${SITE_URL}${article.href}`,
            inLanguage: "en-AU",
            ...(meta
              ? { datePublished: meta.published, dateModified: meta.modified, articleSection: meta.section }
              : {}),
            image: `${SITE_URL}/og-image.jpg`,
            author: {
              "@type": "Organization",
              name: "Jetblack Painting",
              url: SITE_URL,
            },
          };
        }),
      },
      breadcrumbTrail([
        { name: "Home", item: "/" },
        { name: "Blog", item: canonicalForRoute("/blog") },
      ]),
    ],
    sections: [
      {
        heading: "What you'll find in our painting blog",
        paragraphs: [
          "Our blog focuses on the questions Melbourne property owners ask before booking a painter: what colours suit different suburbs, how much repainting costs, how to prepare rooms and exteriors, and when resurfacing is better than replacing cabinetry.",
          "Every article is written to help you plan your project with realistic expectations around finish quality, preparation, timing, and long-term value.",
        ],
      },
      {
        type: "cards",
        heading: "Recent painting guides",
        items: blogIndexArticles.map((article) => ({ title: article.title, body: article.body })),
      },
      {
        type: "links",
        heading: "Read the full articles",
        body: "Open any article below for the full guide.",
        items: blogIndexArticles.map((article) => ({ label: article.title, href: article.href })),
      },
    ],
    footerLinks: [
      { label: "Home", href: "/" },
      { label: "Interior Painting", href: "/services/interior-painting/" },
      { label: "Quote Request", href: "/faq/" },
    ],
  })
);

const articlePages = [
  {
    route: "/blog/best-paint-colours-melbourne-2025",
    title: "Best Paint Colours for Melbourne Homes 2026 | Jetblack",
    description:
      "Discover trending paint colours for Melbourne homes in 2026. Interior & exterior colour trends, expert tips, and colour consultation from Jetblack Painting.",
    intro:
      "Melbourne homeowners are moving beyond neutrals in 2026 and embracing bolder, more expressive palettes — while exteriors still have to survive scorching summers, cold wet winters and constant UV. Here are the interior and exterior colours we're actually painting across Melbourne this year, and how to choose between them.",
    sections: [
      {
        heading: "Interior paint colours trending in Melbourne in 2026",
        paragraphs: [
          "Warm terracotta and burnt orange are back. These earthy tones create comfort and sophistication on feature walls in living and dining rooms, and shades such as Dulux Autumn Blaze work well with Melbourne's natural light.",
          "Deep forest greens and moody botanicals suit bedrooms, studies and feature walls, and are popular in heritage homes across Hawthorn, Armadale and Camberwell. Soft blush and warm mauve tones are the sophisticated alternative to stark white, giving bedrooms a calm, elegant feel.",
          "At the bolder end, charcoal black and moody greys such as Colorbond Monument or Dulux Cavern Black make dramatic statement walls in modern homes. For main living areas, creamy whites and natural off-whites like Dulux Lexicon Quarter and Natural White remain the timeless foundation.",
        ],
      },
      {
        heading: "Exterior paint colours for Melbourne's climate in 2026",
        paragraphs: [
          "Charcoal and dark grey exteriors continue to dominate, with Colorbond Monument, Graphite and Dulux Charcoal Black giving contemporary homes a modern, premium look that pairs well with white or cream trim.",
          "Warm terracotta and earthy reds are being used on heritage homes across Toorak and Brighton, honouring period architecture while still feeling current. Greige and warm grey-beige — Colorbond Surfmist, Dulux Limed White and similar — remain the safe, timeless choice on both brick and rendered homes.",
          "Cool whites with contrasting trim are also trending: a white exterior with bold charcoal doors and window frames, such as Dulux Pure White with Colorbond Monument trim, is a common combination on contemporary Melbourne homes.",
        ],
      },
      {
        heading: "2026 colour trends by Melbourne suburb",
        paragraphs: [
          "Prestige inner east (Toorak, Malvern, Armadale): heritage homes favour warm terracottas, deep forest greens and sophisticated greys, with exteriors respecting period aesthetics while interiors take the bolder feature walls.",
          "Bayside (Brighton, Sandringham, Hampton): coastal weatherboards trend toward cool whites, soft creams and bold charcoal exteriors, with light, airy interiors and the occasional moody feature wall.",
          "Modern and contemporary homes (Toorak, South Yarra): bold blacks, deep charcoals and striking colour blocking outside, with dramatic statement walls inside.",
        ],
      },
      {
        heading: "How to choose 2026 colours with confidence",
        paragraphs: [
          "Test with large sample patches rather than small chips — colour looks dramatically different under Melbourne's natural light compared with artificial light, and changes again between seasons as the angle of the sun shifts.",
          "Let the architecture guide you: heritage homes suit warm, earthy tones, while modern homes carry bold, dramatic colours well. If the property sits in a heritage precinct, check any overlay requirements before committing to an exterior scheme.",
          "Jetblack Painting offers a free colour consultation with every painting quote, drawing on 13+ years of Melbourne experience to match colours to your home's architecture, natural light and style.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the best interior paint colours for Melbourne homes in 2026?",
        answer: "Warm terracotta and burnt orange, deep forest green, soft blush and warm mauve, and charcoal black are the standout 2026 interior trends, while creamy whites and natural off-whites remain the timeless choice for main living areas.",
      },
      {
        question: "What exterior paint colours suit Melbourne conditions in 2026?",
        answer: "Charcoal and dark greys, warm terracotta and earthy reds on heritage homes, greige and warm grey-beige, and cool whites with contrasting dark trim all perform well. Melbourne exteriors face strong UV, moisture and temperature swings, so the coating system matters as much as the colour.",
      },
      {
        question: "How do I choose a paint colour with confidence?",
        answer: "Test large sample patches on more than one wall or elevation and look at them at different times of day, because Melbourne light changes dramatically through the day and between seasons. Let the home's architecture guide the palette, and check heritage overlay requirements before committing to an exterior scheme.",
      },
      {
        question: "Does Jetblack Painting help with colour selection?",
        answer: "Yes. Jetblack Painting offers a free colour consultation with every painting quote, using 13+ years of Melbourne experience to recommend colours that suit the home's architecture, natural light and the owner's style. Call 0432 077 782.",
      },
    ],
  },
  {
    route: "/blog/house-painting-cost-melbourne",
    title:
      "House Painting Cost Melbourne 2026 | Jetblack Painting",
    description:
      "Learn how much house painting costs in Melbourne with Jetblack Painting’s 2026 pricing guide for interior, exterior and commercial projects.",
    intro:
      "One of the most common questions we get asked as professional painters in Melbourne is \"How much will it cost to paint my house?\" Here's our comprehensive 2026 price guide based on real projects we've completed across Melbourne.",
    sections: [
      {
        heading: "Interior Painting Costs in Melbourne",
        paragraphs: [
          "Interior painting is typically priced per square metre or as a whole-room cost. Walls only (2 coats) run $20 to $35 per m², or $400 to $800 for a typical room. Walls plus ceiling run $25 to $45 per m², or $600 to $1,200 per room. A full room including walls, ceiling and trim runs $35 to $55 per m², or $800 to $1,500. A whole-house interior repaint typically costs $5,000 to $12,000 for a 3-bedroom home, or $8,000 to $18,000 for a 4-bedroom home.",
          "Our interior painting services include thorough preparation — filling holes, sanding, priming — premium Dulux or Taubmans paint, and a spotless cleanup.",
        ],
      },
      {
        heading: "Exterior Painting Costs in Melbourne",
        paragraphs: [
          "A small single-storey home under 150m² typically costs $4,000 to $8,000 for walls, fascia and gutters. A medium double-storey home between 150 and 250m² typically costs $8,000 to $15,000, including trim. A large home over 250m² typically costs $15,000 to $30,000+ for a full exterior package.",
          "Our exterior painting services use weather-resistant coatings designed for Melbourne's harsh UV and variable climate. We also offer roof painting from $3,500.",
        ],
      },
      {
        heading: "Factors That Affect Painting Costs",
        type: "steps",
        items: [
          { title: "Surface condition", body: "Peeling paint, cracks, or water damage require more preparation." },
          { title: "Number of coats", body: "Dark-to-light colour changes may need 3+ coats." },
          { title: "Height & access", body: "Multi-storey homes require scaffolding ($500-$2,000 extra)." },
          { title: "Paint quality", body: "Premium paints cost more but last 10-15 years vs. 5-7 for budget options." },
          { title: "Trim & detail work", body: "Heritage homes with ornate trim cost more due to detailed preparation." },
          { title: "Location", body: "Premium suburbs like Toorak and Brighton often have larger homes." },
        ],
      },
      {
        heading: "How to Get an Accurate Quote",
        paragraphs: [
          "The best way to get an accurate painting quote is to have a professional painter visit your property. At Jetblack Painting, we provide free, no-obligation quotes that include a detailed written breakdown of all costs, colour consultation and recommendations, a timeline estimate for completion, paint brand and product specifications, and warranty information (5-year workmanship guarantee).",
        ],
      },
      {
        heading: "Why Choose Jetblack Painting?",
        paragraphs: [
          "With 5-star Google reviews, 13+ years of experience, and $10M public liability insurance, Jetblack Painting is Melbourne's most trusted painting company. We service all suburbs including Malvern, Camberwell, Hawthorn, and Keysborough.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much does it cost to paint an average 3-bedroom house in Melbourne?",
        answer: "A whole-house interior repaint for a 3-bedroom home typically runs $5,000 to $12,000, depending on wall and ceiling condition, trim work, and the finish level chosen. That's for interior only — exterior painting is quoted separately based on the home's size and access.",
      },
      {
        question: "Why do quotes vary so much between painters?",
        answer: "Surface condition, the number of coats needed, height and access requirements, and paint quality all move the price more than floor area alone. A quote that looks cheap often has less preparation built in, which is where paint failure usually starts.",
      },
      {
        question: "Is a written, itemised quote necessary?",
        answer: "Yes. A proper quote should include a detailed written breakdown of costs, the paint brand and product specifications, a timeline, and warranty information. A one-line price with no scope makes it hard to compare against other quotes fairly.",
      },
      {
        question: "Do you charge extra for scaffolding on multi-storey homes?",
        answer: "Yes, multi-storey homes that need scaffolding for safe access typically add $500 to $2,000 to the job, depending on the height and complexity of the property. This is itemised in your written quote rather than hidden in the total.",
      },
    ],
  },
  {
    route: "/blog/prepare-home-for-painting",
    title:
      "How to Prepare Your Home for Painting | Jetblack Painting",
    description:
      "Prepare your Melbourne home for professional painting with this practical checklist from Jetblack Painting for smoother, higher-quality results.",
    intro:
      "Getting your home ready for professional painters ensures the best results and helps the job run smoothly. Here's our complete checklist from 13+ years of painting Melbourne homes.",
    howTo: {
      name: "How to Prepare Your Melbourne Home for Professional Painting",
      totalTime: "PT1H",
      steps: [
        { name: "Clear the Rooms", text: "Move furniture away from walls or into the centre of the room. Remove wall hangings, curtains, and light switch covers so painters have full access to work efficiently." },
        { name: "Identify Problem Areas", text: "Walk through your home and note any peeling or flaking paint, cracks in walls or ceilings, water stains or mould, nail holes or dents, and areas where paint has yellowed. Point these out to your painter at the quote stage." },
        { name: "Exterior Preparation", text: "Trim garden beds back 30cm from walls, move outdoor furniture and pot plants away, park cars away from the house, unlock gates for access, and secure pets inside or in a separate area." },
      ],
    },
    sections: [
      {
        heading: "Clear the Rooms",
        paragraphs: [
          "Move furniture away from walls or into the centre of the room. Remove wall hangings, curtains, and light switch covers. The more space our interior painting team has to work, the faster and more efficient the job will be.",
        ],
      },
      {
        heading: "Identify Problem Areas",
        paragraphs: [
          "Walk through your home and note any areas with peeling or flaking paint, cracks in walls or ceilings, water stains or mould, nail holes or dents, and areas where paint has yellowed.",
          "Point these out to your painter during the quote stage so they can factor in the preparation work needed.",
        ],
      },
      {
        heading: "Exterior Preparation",
        paragraphs: [
          "For exterior painting, ensure garden beds are trimmed back from walls (30cm clearance), outdoor furniture and pot plants are moved away, cars are parked away from the house, gates are unlocked for access, and pets are secured inside or in a separate area.",
        ],
      },
      {
        heading: "What Professional Painters Handle",
        type: "steps",
        items: [
          { title: "Surface washing", body: "High-pressure cleaning for exteriors." },
          { title: "Sanding", body: "Smoothing rough surfaces for a flawless finish." },
          { title: "Filling", body: "Repairing cracks, holes, and imperfections." },
          { title: "Priming", body: "Applying primer to bare surfaces and stained areas." },
          { title: "Masking", body: "Protecting floors, fixtures, and surfaces not being painted." },
          { title: "Drop sheets", body: "Covering all furniture and flooring." },
        ],
      },
      {
        heading: "Best Time to Paint in Melbourne",
        paragraphs: [
          "Melbourne's weather plays a big role in painting schedules. Interior painting can be done year-round because we control the environment. Exterior painting is best between October and April when it's drier and warmer. We avoid days below 10°C or above 35°C, and high-humidity days.",
          "We monitor weather forecasts closely and schedule exterior work on optimal days. This is especially important for homes in coastal areas like Brighton and Hampton, where salt air can affect drying times.",
        ],
      },
    ],
    faqs: [
      {
        question: "What's the best time of year to paint the exterior of a home in Melbourne?",
        answer: "Exterior painting is best done between October and April when conditions are drier and warmer. We avoid days below 10°C or above 35°C, and high-humidity days, since they affect how the paint cures.",
      },
      {
        question: "Do I need to move all my furniture out before painting?",
        answer: "No. Furniture just needs to be moved away from walls or into the centre of the room — we cover it with drop sheets along with the flooring. Most households stay in the home throughout an interior repaint.",
      },
      {
        question: "How far back should garden beds be trimmed before exterior painting?",
        answer: "About 30cm clearance from the walls gives our painters safe, unobstructed access to weatherboards, render or brick. It's worth doing this along with moving outdoor furniture and pot plants before we arrive.",
      },
      {
        question: "What should I point out to the painter during the quote?",
        answer: "Any peeling or flaking paint, cracks in walls or ceilings, water stains or mould, nail holes or dents, and areas where paint has yellowed. Flagging these at the quote stage means the preparation work is accounted for in the price from the start.",
      },
    ],
  },
  {
    route: "/blog/kitchen-cabinet-resurfacing-vs-replacement",
    title:
      "Kitchen Cabinet Resurfacing vs Replacement | Jetblack",
    description:
      "Compare kitchen cabinet resurfacing vs replacement costs and outcomes for Melbourne homes with advice from Jetblack Painting.",
    intro:
      "Your kitchen cabinets are looking tired, but does that mean you need a $30,000+ kitchen renovation? Not necessarily. Kitchen cabinet resurfacing can transform your kitchen for a fraction of the cost — and Jetblack Painting specialises in premium 2-pack finishes that look brand new.",
    sections: [
      {
        heading: "What Is Kitchen Cabinet Resurfacing?",
        paragraphs: [
          "Cabinet resurfacing (also called refinishing or respraying) involves stripping the existing finish from your cabinet doors and frames, then applying a new professional-grade coating. At Jetblack Painting, we use 2-pack polyurethane — the same finish used on luxury new kitchens — to deliver a factory-quality result.",
        ],
      },
      {
        heading: "Cost Comparison",
        paragraphs: [
          "Cabinet resurfacing typically costs $3,500 to $8,000 and takes 3 to 5 days, with minimal disruption to your household. A full kitchen renovation typically costs $25,000 to $60,000+ and takes 4 to 8 weeks, with major disruption.",
          "That's a saving of up to 85% compared to a full renovation, with results that look just as good.",
        ],
      },
      {
        heading: "When to Resurface vs Replace",
        paragraphs: [
          "Choose resurfacing when your cabinet boxes (frames) are structurally sound, you're happy with your kitchen layout, you want to change the colour or finish, your cabinets are solid timber or quality MDF, and you want a quick turnaround with minimal disruption.",
          "Choose replacement when cabinet boxes are water-damaged or warped, you want to completely change the layout, your cabinets are made from cheap particleboard that's deteriorating, or you need different sized cabinets for new appliances.",
        ],
      },
      {
        heading: "Our 2-Pack Cabinet Resurfacing Process",
        type: "steps",
        items: [
          { title: "Consultation & colour selection", body: "We visit your home and help you choose the perfect colour and finish." },
          { title: "Door removal", body: "All doors and drawer fronts are carefully removed and labelled." },
          { title: "Surface preparation", body: "Thorough sanding, cleaning, and priming of all surfaces." },
          { title: "2-pack application", body: "Professional spray application of 2-pack polyurethane in our controlled environment." },
          { title: "Reinstallation", body: "Doors are rehung with new hardware if requested." },
          { title: "Final inspection", body: "We ensure every surface is perfect before sign-off." },
        ],
      },
      {
        heading: "Popular Cabinet Colours in Melbourne",
        paragraphs: [
          "The most requested cabinet colours across our projects in Toorak, Brighton, and Malvern are white or bright white — timeless, clean, and makes kitchens feel larger; charcoal or dark grey — modern and sophisticated, especially for island benches; navy blue — a bold statement colour for feature cabinetry; sage green — on-trend and pairs beautifully with timber benchtops; and two-tone schemes — light uppers with dark lowers for visual interest.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much can I save by resurfacing instead of replacing my kitchen?",
        answer: "Cabinet resurfacing typically costs $3,500 to $8,000 compared to $25,000 to $60,000+ for a full kitchen renovation — a saving of up to 85% — because your cabinet boxes, layout and benchtops stay in place.",
      },
      {
        question: "Can any kitchen cabinets be resurfaced?",
        answer: "Resurfacing works well when the cabinet boxes are structurally sound, you're happy with the layout, and the cabinets are solid timber or quality MDF. If the boxes are water-damaged, warped, or made from deteriorating particleboard, replacement is the better option.",
      },
      {
        question: "How long does cabinet resurfacing take?",
        answer: "Most kitchen cabinet resurfacing projects take 3 to 5 days, compared to 4 to 8 weeks for a full renovation, with far less disruption to your household in the meantime.",
      },
      {
        question: "What finish do you use for cabinet resurfacing?",
        answer: "We use 2-pack polyurethane, the same professional-grade finish used on luxury new kitchens, sprayed on in a controlled environment after thorough sanding, cleaning and priming for a factory-quality result.",
      },
    ],
  },
  {
    route: "/blog/mould-remediation-painting-melbourne",
    title:
      "Mould Remediation & Painting Guide Melbourne | Jetblack",
    description:
      "How to identify, treat and paint over mould in Melbourne homes — bathroom mould, render mould, prep steps and anti-mould paints.",
    intro:
      "Mould is one of the most common problems we encounter on Melbourne painting jobs — and one of the most mishandled. Painting over mould without proper treatment guarantees it comes back within months. Here's how to do it right, from a team that's dealt with it on hundreds of Melbourne homes.",
    howTo: {
      name: "How to Treat Mould Before Painting",
      totalTime: "PT2D",
      steps: [
        { name: "Identify the moisture source", text: "Mould only grows where there is a persistent moisture source, so find and fix the cause — poor ventilation, a leak, or rising damp — before treating the surface, or the mould will return." },
        { name: "Kill the mould", text: "Treat the affected surface with a bleach solution diluted 1:4 with water, or a purpose-made product such as Zinsser Mold Killing Primer or Dulux Mouldshield. Heavy or deeply embedded mould may require substrate replacement rather than surface treatment." },
        { name: "Allow complete drying", text: "Let the treated surface dry completely for 24-48 hours before priming or painting. Painting over a damp surface will trap moisture and cause the mould to return underneath the new coating." },
        { name: "Prime with an anti-mould primer", text: "Seal the surface with an anti-mould primer such as Zinsser BIN Shellac Primer or Dulux Mouldshield Primer before applying the topcoat, to stop staining bleeding through and inhibit future mould growth." },
      ],
    },
    sections: [
      {
        heading: "Why Mould Appears on Melbourne Homes",
        paragraphs: [
          "Melbourne's mix of coastal salt air and older housing stock creates ideal conditions for mould. In bayside suburbs like Mentone, Sandringham, and Mordialloc, salt-laden air combines with weatherboard cladding to trap moisture. In leafier, older pockets like Hawthorn, Malvern, and Armadale, period homes with cold masonry walls and limited ventilation are especially prone to condensation-driven mould.",
          "The most common places we find mould are bathroom and laundry ceilings, external render on shaded or south-facing walls, eaves and fascias, bedroom corners with poor airflow, and weatherboard cladding exposed to persistent damp.",
        ],
      },
      {
        heading: "The Right Way to Treat Mould Before Painting",
        paragraphs: [
          "Skipping proper treatment is the single biggest reason mould returns after a repaint. The process below is what we follow on every mould-affected job, from a single bathroom ceiling to a full exterior repaint.",
          "Step 1: Identify the moisture source — mould only grows where there is a persistent moisture source, so find and fix the cause before treating the surface.",
          "Step 2: Kill the mould — treat with a bleach solution diluted 1:4 with water, or a purpose-made product such as Zinsser Mold Killing Primer or Dulux Mouldshield. Heavy mould may need substrate replacement.",
          "Step 3: Allow complete drying — 24-48 hours before priming or painting, so moisture isn't trapped under the new coating.",
          "Step 4: Prime with an anti-mould primer — Zinsser BIN Shellac Primer or Dulux Mouldshield Primer seals staining and inhibits future growth before the topcoat goes on.",
        ],
      },
      {
        heading: "Which Paint to Use on Mould-Prone Surfaces",
        paragraphs: [
          "The right topcoat depends on the surface and its exposure. Bathroom ceilings do best with Dulux Mouldshield or Taubmans Bathroom & Kitchen. South-facing external render should use Dulux Weathershield Maximum. Weatherboard exteriors hold up well with Dulux Weathershield or Taubmans All Weather. Bedroom walls prone to condensation are best treated with Dulux Mouldshield Interior.",
        ],
      },
      {
        heading: "How Long Does Anti-Mould Paint Last?",
        paragraphs: [
          "Properly treated and painted surfaces typically resist mould for 5-10 years. High-moisture areas like bathrooms with poor ventilation tend to need attention again after 3-5 years, even with the right products, simply because of how much moisture the space handles daily.",
        ],
      },
      {
        heading: "When to Call a Professional",
        paragraphs: [
          "Mould covering a large area, mould that returns quickly after cleaning, staining that keeps bleeding through fresh paint, or any suspicion of a hidden leak or structural moisture problem are all signs it's time to bring in a professional rather than treat it yourself.",
          "Jetblack Painting services Melbourne's southeast, Bayside, inner east, and Mornington Peninsula, and every job comes with a 5-year written workmanship guarantee.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I just paint over mould instead of treating it?",
        answer: "No. Painting over mould without killing it first guarantees it comes back — usually within 3 to 12 months — turning a fresh paint job into a blotchy, failed surface. The mould spores are still there under the paint even if you can't see them.",
      },
      {
        question: "How long does anti-mould paint last?",
        answer: "Properly treated and painted surfaces, where the moisture source has been fixed, typically stay mould-free for 5 to 10 years. High-moisture environments like poorly ventilated bathrooms may need retreatment sooner, around 3 to 5 years.",
      },
      {
        question: "When should I call a professional instead of treating mould myself?",
        answer: "Call a professional when mould covers more than 1 square metre, it's on external render or masonry, it has returned after previous DIY treatment, there's visible substrate damage like soft plaster or rotted timber, or the moisture source is unclear.",
      },
      {
        question: "What primer actually stops mould coming back?",
        answer: "Standard primers won't prevent regrowth. A dedicated anti-mould primer — we use Zinsser BIN Shellac Primer or Dulux Mouldshield Primer most often — seals the surface and includes fungicides that inhibit mould, which is essential on bathroom ceilings and external render with a history of mould.",
      },
    ],
  },
  {
    route: "/blog/how-to-paint-a-weatherboard-house-melbourne",
    title: "How to Paint a Weatherboard House | Jetblack Painting",
    description:
      "Melbourne weatherboard painting guide — preparation, priming bare timber, caulking, the right exterior paints and how often to repaint. Call 0432 077 782.",
    intro:
      "Weatherboard is everywhere in Melbourne, from bayside beach cottages to inner-suburb period homes — and it fails faster than any other exterior surface when it's painted badly. Here's how the job is done properly, and why preparation is roughly 70% of the work.",
    howTo: {
      name: "How to Paint a Weatherboard House",
      totalTime: "P5D",
      steps: [
        { name: "Wash the surface", text: "Pressure wash to remove dirt, chalking, salt deposits and mould. Bayside homes carry a film of salt that stops paint adhering. Use care — too much pressure drives water behind the boards and damages soft timber." },
        { name: "Scrape and sand back failing paint", text: "Remove all loose, flaking and blistered paint back to a sound edge and feather the edges so repairs don't telegraph through. On homes built before 1970, test for lead paint first and never dry-sand it." },
        { name: "Repair damaged timber", text: "Check bottom boards, sun-facing walls and areas near downpipes for rot. Soft or spongy timber must be cut out and replaced — filler over rotten weatherboard fails within a year or two." },
        { name: "Prime all bare timber", text: "Spot-prime every patch of exposed timber with an oil-based or alkyd primer that soaks into and seals the grain. Skipping this is the single biggest cause of premature peeling on weatherboard homes." },
        { name: "Fill and caulk", text: "Fill nail holes and splits, then caulk gaps at board joints, window and door frames and corner trims with a flexible exterior sealant that can stretch as the timber moves." },
        { name: "Apply two topcoats", text: "Apply two full topcoats of a quality flexible exterior acrylic over the primed surface. The second coat builds the film thickness that resists Melbourne's UV and rain." },
      ],
    },
    sections: [
      {
        heading: "Why weatherboard is different",
        paragraphs: [
          "Timber moves — it swells when damp and shrinks when dry, and in Melbourne it often does both in the same week. That movement is why weatherboard needs a flexible coating system, and why rigid, cheap paint cracks along the board edges within a couple of seasons.",
          "Water is the second difference. Every board overlap, joint, nail hole and window reveal is a potential entry point, and once water gets behind the paint film it lifts the coating from underneath. That is why weatherboard peels in sheets rather than fading evenly.",
        ],
      },
      {
        heading: "The Preparation Process",
        type: "steps",
        items: [
          { title: "Wash the surface", body: "Pressure wash to remove dirt, chalking, salt deposits and mould. Bayside homes carry a film of salt that stops paint adhering. Use care — too much pressure drives water behind the boards and damages soft timber." },
          { title: "Scrape and sand back failing paint", body: "Remove all loose, flaking and blistered paint back to a sound edge and feather the edges so repairs don't telegraph through. On homes built before 1970, test for lead paint first and never dry-sand it." },
          { title: "Repair damaged timber", body: "Check bottom boards, sun-facing walls and areas near downpipes for rot. Soft or spongy timber must be cut out and replaced — filler over rotten weatherboard fails within a year or two." },
          { title: "Prime all bare timber", body: "Spot-prime every patch of exposed timber with an oil-based or alkyd primer that soaks into and seals the grain. Skipping this is the single biggest cause of premature peeling on weatherboard homes." },
          { title: "Fill and caulk", body: "Fill nail holes and splits, then caulk gaps at board joints, window and door frames and corner trims with a flexible exterior sealant that can stretch as the timber moves." },
          { title: "Apply two topcoats", body: "Apply two full topcoats of a quality flexible exterior acrylic over the primed surface. The second coat builds the film thickness that resists Melbourne's UV and rain." },
        ],
      },
      {
        heading: "Choosing the right paint for Melbourne weatherboards",
        paragraphs: [
          "For most Melbourne weatherboards a flexible water-based acrylic exterior system — such as Dulux Weathershield or Taubmans All Weather — over the appropriate primer is the right choice. Coastal homes benefit from the more heavily weather-resistant options in those ranges, because salt air and reflected UV are harsher than inland conditions.",
          "On colour, mid-tones and lighter shades hold up better on weatherboard than very dark colours, which absorb more heat, move the timber more and fade faster on north and west-facing walls.",
        ],
      },
      {
        heading: "How often to repaint weatherboard in Melbourne",
        paragraphs: [
          "A properly prepared and painted weatherboard exterior in Melbourne typically lasts 7 to 10 years. Bayside and coastal homes exposed to salt and full sun sit at the shorter end of that range, while sheltered walls last longer.",
          "Repaint when you see chalking, flaking, bare timber or gaps opening at the joints — not after the timber has started to rot, which turns a straightforward repaint into a repair job.",
        ],
      },
      {
        heading: "When to call a professional",
        paragraphs: [
          "Call a professional when the home was built before 1970 and may contain lead paint, when there is visible rot or boards need replacing, when the house is two storeys or needs scaffolding, or when previous paint is peeling in large sheets — which usually signals an underlying moisture problem.",
          "Jetblack Painting has painted weatherboard homes across Melbourne's bayside, southeast, inner east and the Mornington Peninsula for over 13 years. Every exterior job is quoted in writing with the preparation itemised, and backed by $10M public liability insurance and a 5-year written workmanship guarantee.",
        ],
      },
    ],
    faqs: [
      {
        question: "How often should a weatherboard house be repainted in Melbourne?",
        answer: "Most Melbourne weatherboard homes need repainting every 7 to 10 years. Bayside and coastal homes exposed to salt air and full sun often sit at the shorter end of that range, while sheltered south-facing walls can last longer. Flaking, chalking, bare timber and gaps opening at the joints are the signs it is due.",
      },
      {
        question: "Do I need to prime bare timber on weatherboards?",
        answer: "Yes. Any bare or newly exposed timber must be spot-primed before topcoats, using an oil-based or alkyd primer that penetrates the grain. Skipping this is the most common cause of early peeling on weatherboard homes, because water gets behind the paint film through the unsealed timber.",
      },
      {
        question: "What paint is best for weatherboard houses in Melbourne?",
        answer: "A flexible, water-based acrylic exterior system such as Dulux Weathershield or Taubmans All Weather suits most Melbourne weatherboards. Flexibility matters because timber expands and contracts with temperature and moisture, and a brittle coating cracks at the board edges.",
      },
      {
        question: "Can weatherboards be painted in winter?",
        answer: "Exterior painting needs dry timber and moderate temperatures, so Melbourne winter work is weather-dependent. Most exterior acrylics need above roughly 10 degrees Celsius and a dry surface to cure properly. Jetblack Painting schedules exterior weatherboard work around the forecast rather than pushing on in unsuitable conditions.",
      },
      {
        question: "Should I paint over lead paint on an older weatherboard home?",
        answer: "Homes built before 1970 may have lead-based paint. It should not be dry-sanded or power-sanded, as that releases lead dust. Testing first and using safe preparation methods is essential — this is a job for an experienced painter rather than a DIY sander.",
      },
    ],
  },
  {
    route: "/blog/how-to-choose-a-painter-melbourne",
    title:
      "How to Choose a Painter in Melbourne | Jetblack Painting",
    description:
      "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees and red flags to avoid. A practical checklist.",
    intro:
      "Melbourne has thousands of people offering painting work, and the gap between the best and worst of them is enormous — in preparation quality, in what happens if something goes wrong, and in whether the job is still holding up in five years. Here's what actually matters when you're comparing painters.",
    sections: [
      {
        heading: "Check Insurance and Business Registration First",
        paragraphs: [
          "Victoria doesn't issue a specific trade licence for painting, so the checks that matter are a registered ABN and public liability insurance that actually covers the value of your property. Ask to see proof of insurance before work starts — a legitimate painting business will have this ready to send. Jetblack Painting carries $10M public liability insurance and provides certificates on request.",
        ],
      },
      {
        heading: "Get a Written, Itemised Quote",
        paragraphs: [
          "A trustworthy quote spells out the preparation work included (sanding, filling, priming), the number of coats, the specific paint brand and product line, and what's explicitly excluded. A single lump-sum figure with no scope is where most disputes start.",
          "Get at least two or three quotes so you have something to compare scope against, not just price.",
        ],
      },
      {
        heading: "Ask About the Guarantee",
        paragraphs: [
          "A painter confident in their preparation and materials will back the job with a written guarantee. Jetblack Painting backs every job with a 5-year written workmanship guarantee — ask any painter you're considering what theirs covers, and get it in writing rather than a verbal promise.",
        ],
      },
      {
        heading: "Look Past the Star Rating",
        paragraphs: [
          "A 5.0 rating with 3 reviews tells you less than a 4.8 with 100. Read a handful of the actual review text, not just the score, and look for detail — mentions of tidiness, communication, and whether the painter returned for touch-ups if needed.",
        ],
      },
      {
        heading: "Red Flags to Watch For",
        paragraphs: [
          "Asking for full payment upfront before any work starts, no fixed address or ABN listed anywhere, reluctance to put the quote or guarantee in writing, a quote significantly below every other one with no explanation, and no examples of previous work or contactable references.",
        ],
      },
      {
        heading: "Questions to Ask Before You Book",
        paragraphs: [
          "What preparation is included, specifically, for my surfaces? Which paint brand and product line will you use, and why? How many coats are included in the price? What does your guarantee cover, and for how long? Can I see proof of public liability insurance?",
        ],
      },
    ],
    faqs: [
      {
        question: "Do painters in Melbourne need a licence?",
        answer:
          "Victoria doesn't require a separate trade licence for painting the way it does for plumbing or electrical work, so anyone can call themselves a painter. That makes insurance, a registered ABN, and a track record of finished jobs far more important checks than a licence number.",
      },
      {
        question: "How much should I pay upfront?",
        answer:
          "Be cautious of any painter asking for full payment before work starts. A reasonable deposit to secure materials and a start date is normal; the balance should be tied to progress or completion, not paid entirely in advance.",
      },
      {
        question: "What's a fair amount of detail in a quote?",
        answer:
          "A proper quote itemises surface preparation, the number of coats, the specific paint brand and product line, and what's excluded. A one-line price with no scope is the most common source of disputes later.",
      },
      {
        question: "Should I choose the cheapest quote?",
        answer:
          "Not automatically. The cheapest quotes often cut preparation time — sanding, filling, priming — which is where paint failure starts. Compare scope first, then price.",
      },
    ],
  },
];

for (const article of articlePages) {
  const canonical = canonicalForRoute(article.route);
  const meta = articleMeta[article.route];
  const headline = article.title.replace(/\s*\|\s*Jetblack(?: Painting)?$/, "");
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline,
    description: article.description,
    inLanguage: "en-AU",
    ...(meta ? { datePublished: meta.published, dateModified: meta.modified, articleSection: meta.section } : {}),
    image: `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: "Jetblack Painting",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Jetblack Painting",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
  };
  const howToSchema = article.howTo
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.howTo.name,
        description: article.intro,
        totalTime: article.howTo.totalTime,
        step: article.howTo.steps.map((s) => ({
          "@type": "HowToStep",
          name: s.name,
          text: s.text,
        })),
      }
    : null;
  const articleFaqSchema = article.faqs ? faqSchema(article.faqs) : null;
  const articleBreadcrumb = breadcrumbTrail([
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog/" },
    { name: headline, item: canonical },
  ]);
  const schemaList = [articleSchema, howToSchema, articleFaqSchema, articleBreadcrumb].filter(Boolean);
  // Render FAQs as a visible section too, so the FAQPage schema has matching
  // on-page content (Google requires FAQ Q&A to be visible on the source page).
  const articleSections = article.faqs
    ? [
        ...article.sections,
        {
          type: "faqs",
          heading: "Frequently Asked Questions",
          items: article.faqs,
        },
      ]
    : article.sections;
  writePage(
    article.route,
    pageHtml({
      title: article.title,
      description: article.description,
      canonical,
      heroTitle: headline,
      heroBody: article.intro,
      schema: schemaList.length > 1 ? schemaList : schemaList[0],
      sections: articleSections,
      footerLinks: [
        { label: "Blog", href: "/blog/" },
        ...(articleServiceLinks[article.route] || [
          { label: "Interior Painting", href: "/services/interior-painting/" },
        ]),
        { label: "Contact", href: "/review-us/" },
      ],
    })
  );
}

// Mirrors the `faqs` array in client/src/pages/FAQ.tsx. The /faq/ page is the
// page AI assistants are most likely to quote, and they don't execute JS — so
// every answer visible in the React page has to exist in the pre-rendered HTML
// and in the FAQPage schema. These two lists must be kept in step.
const faqCategories = [
  {
    category: "General Questions",
    items: [
      {
        question: "Do you offer free quotes?",
        answer: "Yes. We provide completely free, no-obligation quotes. We'll visit your property, assess your needs, and provide a competitive written price estimate. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. Jetblack Painting is fully licensed and carries $10 million public liability insurance, and every job is backed by a 5-year written workmanship guarantee. We're happy to provide documentation before work begins.",
      },
      {
        question: "How long have you been in business?",
        answer: "We've been serving Melbourne for over 13 years, building a reputation for quality workmanship and customer satisfaction.",
      },
      {
        question: "Do you provide references?",
        answer: "Absolutely. We're happy to provide references from previous customers, and Jetblack Painting holds a 5.0-star rating from 17 Google reviews.",
      },
    ],
  },
  {
    category: "Service Areas",
    items: [
      {
        question: "What areas do you serve?",
        answer: "We serve all Melbourne suburbs including Keysborough, Brighton, Toorak, Mordialloc, Hawthorn, Mentone, Sandringham, Camberwell, Bentleigh, and the Mornington Peninsula.",
      },
      {
        question: "Do you travel outside Melbourne?",
        answer: "We primarily serve the Melbourne metropolitan area. For projects outside our usual service area, please contact us to discuss availability.",
      },
      {
        question: "Is there a minimum project size?",
        answer: "No, we welcome projects of all sizes, from small room touch-ups to large commercial projects.",
      },
      {
        question: "Do you offer painting services specifically for Mordialloc's coastal homes?",
        answer: "Yes, we specialise in painting homes in coastal areas like Mordialloc. We use premium weather-resistant paints and techniques to protect against salt air, humidity, and harsh UV rays, ensuring a durable and beautiful finish for your bayside property.",
      },
      {
        question: "What types of homes do you paint in Mordialloc?",
        answer: "In Mordialloc, we paint a variety of homes, including classic weatherboard houses, modern residences, and period homes. Our team is experienced with the diverse architectural styles found in the area, providing tailored painting solutions for each.",
      },
      {
        question: "How do you protect homes from coastal conditions in Mordialloc?",
        answer: "We protect Mordialloc homes from coastal conditions through meticulous surface preparation, high-quality flexible and breathable paints, and specialised techniques. Our approach prevents cracking, peeling, and fading caused by salt spray, strong winds, and sun exposure.",
      },
    ],
  },
  {
    category: "Interior Painting",
    items: [
      {
        question: "How long does interior painting take?",
        answer: "Most interior painting projects take 3-7 days depending on the size and complexity. We'll provide a detailed timeline during your free quote.",
      },
      {
        question: "Do you move furniture?",
        answer: "Yes, we move and protect your furniture as part of our service. We use drop cloths and plastic sheeting to protect floors and belongings.",
      },
      {
        question: "Can you help with colour selection?",
        answer: "Absolutely! Our team has extensive experience with colour trends and can help you choose colours that complement your home's style.",
      },
      {
        question: "What paint do you use?",
        answer: "We use premium quality paints from leading brands like Dulux and Taubmans. We can recommend the best products for your specific needs.",
      },
    ],
  },
  {
    category: "Exterior Painting",
    items: [
      {
        question: "How often should I repaint my exterior?",
        answer: "Most exterior paint jobs last 5-10 years depending on weather conditions and paint quality. We can assess your home and recommend a timeline.",
      },
      {
        question: "Can you paint in all weather conditions?",
        answer: "We can paint in most conditions, but avoid extreme heat, cold, or rain. We'll schedule your project during optimal weather windows.",
      },
      {
        question: "Do you prepare surfaces before painting?",
        answer: "Yes, proper preparation is essential. We clean, sand, and prime surfaces to ensure long-lasting, professional results.",
      },
      {
        question: "What's included in exterior painting?",
        answer: "Our exterior service includes surface preparation, priming, painting, and cleanup. We can also paint gutters, fascia, and trim.",
      },
    ],
  },
  {
    category: "Commercial Painting",
    items: [
      {
        question: "Can you handle large commercial projects?",
        answer: "Yes! We have experience with commercial painting projects of all sizes, from small offices to large retail spaces.",
      },
      {
        question: "Can you work after hours?",
        answer: "We can arrange after-hours or weekend work to minimise disruption to your business operations.",
      },
      {
        question: "Do you provide project management?",
        answer: "Yes, we handle all aspects of your commercial painting project, including scheduling, coordination, and quality control.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        question: "How much does painting cost?",
        answer: "Pricing depends on project size, surface condition, paint quality, and location. We provide free quotes with no hidden costs.",
      },
      {
        question: "Do you offer payment plans?",
        answer: "We accept various payment methods. For large projects, we can discuss payment arrangements during your quote.",
      },
      {
        question: "What if I need additional work?",
        answer: "We'll discuss any additional work and provide updated pricing before proceeding. No surprises!",
      },
    ],
  },
  {
    category: "Special Services",
    items: [
      {
        question: "Do you offer kitchen cabinet resurfacing?",
        answer: "Yes! We specialise in luxury kitchen cabinet resurfacing with 2-pack finishes that look brand new.",
      },
      {
        question: "Can you paint roofs?",
        answer: "Yes, we provide professional roof painting and restoration services to protect and enhance your home.",
      },
      {
        question: "Do you do pre-sale property painting?",
        answer: "Absolutely! We specialise in pre-sale painting to maximise your property's appeal and value.",
      },
    ],
  },
];

const faqItems = faqCategories.flatMap((group) => group.items);

writePage(
  "/faq",
  pageHtml({
    title: "Painting FAQs Melbourne | Jetblack Painting",
    description:
      "Frequently asked questions about Jetblack Painting services in Melbourne, including quotes, service areas, interior, exterior and commercial painting.",
    canonical: canonicalForRoute("/faq"),
    heroTitle: "Frequently Asked Questions",
    heroBody: "Get answers to the common questions Melbourne homeowners, landlords, and businesses ask before booking a painting project.",
    schema: [
      faqSchema(faqItems),
      breadcrumbTrail([
        { name: "Home", item: "/" },
        { name: "FAQ", item: canonicalForRoute("/faq") },
      ]),
    ],
    sections: [
      {
        heading: "What clients ask us most often",
        paragraphs: [
          "These answers cover quoting, timelines, service areas, preparation, and the painting services Jetblack Painting provides across Melbourne.",
          "If your project has unique requirements, contact us directly and we can talk through the best scope, timeline, and coating system for the property.",
        ],
      },
      // One section per category, matching the React page's grouping. Grouped
      // headings give an assistant a topic to anchor each answer to instead of
      // one undifferentiated list.
      ...faqCategories.map((group) => ({
        type: "faqs",
        heading: group.category,
        items: group.items,
      })),
    ],
    footerLinks: [
      { label: "Home", href: "/" },
      { label: "Blog", href: "/blog/" },
      { label: "Review Us", href: "/review-us/" },
    ],
  })
);

writePage(
  "/review-us",
  pageHtml({
    title: "Leave a Review | Jetblack Painting Melbourne",
    description:
      "Leave a Google review for Jetblack Painting. Your feedback helps Melbourne homeowners find trusted interior, exterior and commercial painters.",
    canonical: canonicalForRoute("/review-us"),
    robots: "noindex, follow",
    heroTitle: "Leave a Review for Jetblack Painting",
    heroBody: "Your feedback helps other Melbourne homeowners and businesses find a painter they can trust for quality preparation, clear communication, and durable finishes.",
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Leave a Review | Jetblack Painting Melbourne",
        description:
          "Leave a Google review for Jetblack Painting. Your feedback helps Melbourne homeowners find trusted interior, exterior and commercial painters.",
        url: canonicalForRoute("/review-us"),
      },
      breadcrumbTrail([
        { name: "Home", item: "/" },
        { name: "Leave a Review", item: canonicalForRoute("/review-us") },
      ]),
    ],
    sections: [
      {
        heading: "Why reviews matter",
        paragraphs: [
          "Google reviews help local homeowners compare painters with confidence. They also help small Melbourne businesses like Jetblack Painting continue to grow through word of mouth.",
          "If we've completed interior, exterior, roof, cabinet, or commercial painting for you, a short review about the service and finish quality is greatly appreciated.",
        ],
      },
      {
        type: "steps",
        heading: "How to leave a Google review",
        items: [
          { title: "Open our review link", body: `Visit ${GOOGLE_REVIEW_LINK} on your phone or computer.` },
          { title: "Choose your star rating", body: "Select the star rating that matches your experience working with Jetblack Painting." },
          { title: "Add a short comment", body: "Mention the type of painting service, your suburb, and what stood out about the job." },
          { title: "Submit the review", body: "Post the review so other Melbourne property owners can read your feedback." },
        ],
      },
    ],
    footerLinks: [
      { label: "Home", href: "/" },
      { label: "FAQ", href: "/faq/" },
      { label: "Blog", href: "/blog/" },
    ],
  })
);

console.log("Static pages generated for missing canonical routes.");
