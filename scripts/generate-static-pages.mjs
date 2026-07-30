import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://jetblackpainting.com";
const PHONE_DISPLAY = "0432 077 782";
const PHONE_HREF = "0432077782";
const EMAIL = "jimmy@jetblackpainting.com";
const GOOGLE_REVIEW_LINK = "https://g.page/r/CS0L-iKiqJlHEBM/review";
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "14",
      "bestRating": "5",
      "worstRating": "1"
    },
    "sameAs": [
      "https://www.instagram.com/jetblack_painting",
      "https://www.facebook.com/jetblackpainting",
      "https://www.youtube.com/@jetblackpaint",
      "https://www.tiktok.com/@jetblack_painting",
      "https://www.patreon.com/jetblack_painting",
      "https://pin.it/7f3uTghY1",
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
function suburbDirectoryHtml(currentCanonical) {
  const links = suburbDirectory
    .filter((entry) => canonicalForRoute(entry.route) !== currentCanonical)
    .map((entry) => `<a href="${entry.route}/">Painters ${escapeHtml(entry.name)}</a>`)
    .join(" | ");
  return links ? `    <p class="suburb-directory">Suburbs we service: ${links}</p>\n` : "";
}

function pageHtml({ title, description, canonical, heroTitle, heroBody, sections, footerLinks, schema }) {
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
  <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
  <link rel="icon" type="image/png" sizes="512x512" href="/favicon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
  <link rel="canonical" href="${escapeHtml(canonical)}">
  <meta property="og:type" content="website">
  <meta property="og:title" content="${escapeHtml(title)}">
  <meta property="og:description" content="${escapeHtml(description)}">
  <meta property="og:url" content="${escapeHtml(canonical)}">
  <meta property="og:image" content="${SITE_URL}/og-image.jpg">
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${escapeHtml(title)}">
  <meta name="twitter:description" content="${escapeHtml(description)}">
  <meta name="twitter:url" content="${escapeHtml(canonical)}">
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
  coastal: /coastal|bayside|salt air|beach|seaside|foreshore|waterfront/i,
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
  const canonical = canonicalForRoute(route);

  writePage(
    route,
    pageHtml({
      title,
      description,
      canonical,
      heroTitle: `House Painters ${suburb}`,
      heroBody: `${description} Searching for painters near you in ${suburb}? Jetblack Painting are your trusted local ${suburb} painters, servicing ${suburb} and the surrounding suburbs.`,
      schema: [
        localBusinessSchema(),
        breadcrumbSchema({ suburb, canonical }),
        ...suburbSchema({ suburb, title, description, canonical }),
        ...(faqs.length ? [faqSchema(faqs)] : []),
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
        {
          type: "cards",
          heading: `What we paint in ${suburb}`,
          items: suburbServiceCards({ suburb, localExpertise, propertyTypes }),
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

const popularSuburbLinks = [
  { label: "Painters Toorak", href: "/painter-toorak/" },
  { label: "Painters Brighton", href: "/painter-brighton/" },
  { label: "Painters Camberwell", href: "/painter-camberwell/" },
  { label: "Painters Hawthorn", href: "/painter-hawthorn/" },
  { label: "Painters Bentleigh", href: "/painter-bentleigh/" },
  { label: "Painters Mordialloc", href: "/painter-mordialloc/" },
  { label: "Painters Keysborough", href: "/keysborough-painters/" },
  { label: "Painters Glen Waverley", href: "/painter-glen-waverley/" },
];

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
          { title: "Cutting-in and trim work", body: "Edges, corners, cornices and trims are cut in by hand before rolling the broad areas — this is what separates a sharp finish from a messy one, and it's where an experienced painter earns their keep." },
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
    faqs: [
      { question: "How long does a professional roof painting last?", answer: "A properly prepared and coated roof typically lasts 10 to 15 years before it needs redoing. The key is preparation — cleaning, rust treatment, repairs and the right primer — followed by quality membrane or roof coatings applied at the correct thickness. We include all of that in every roof painting quote." },
      { question: "What roof types can you paint?", answer: "We paint and restore all common Melbourne roof types, including Colorbond and Zincalume metal roofing, concrete and terracotta tiles, and cement sheet. Each surface needs a specific preparation and coating system, and we match the right one to your roof so the finish bonds properly and lasts." },
      { question: "Can roof painting help keep my home cooler?", answer: "Yes. Lighter colours and modern heat-reflective roof coatings can reduce how much heat your roof absorbs, helping keep the home more comfortable in Melbourne summers and easing the load on cooling. We're happy to recommend suitable heat-reflective options during your quote." },
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
    faqs: [
      { question: "Can you do the roof and fences in one project?", answer: "Yes. We regularly quote roof and fence painting together as a combined exterior refresh." },
      { question: "Do you stain fences as well as paint them?", answer: "Yes. Depending on the timber and the look you want, we can apply paint systems or exterior stains." },
      { question: "How long does fence painting last?", answer: "With proper preparation and exterior-grade products, fence coatings typically last 5–10 years depending on exposure." },
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
    faqs: [
      { question: "How much cheaper is resurfacing than a new kitchen?", answer: "Cabinet resurfacing typically costs a fraction of a full kitchen renovation because the layout, carcasses, and benchtops stay in place." },
      { question: "How long does cabinet resurfacing take?", answer: "Most kitchens are completed within about a week, including preparation, priming, and 2-pack topcoats." },
      { question: "Is a 2-pack finish durable in a kitchen?", answer: "Yes. 2-pack polyurethane is a hard-wearing, wipeable finish designed for high-use surfaces like kitchen cabinetry." },
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
    faqs: [
      { question: "Do you work directly with real estate agents and vendors?", answer: "Yes. We regularly coordinate directly with real estate agents, vendors and property stylists across Melbourne — handling quotes, access, scheduling and invoicing so the repaint is finished on time for photography, styling and the first open home." },
      { question: "How quickly can you paint a property before it goes on the market?", answer: "Most pre-sale and pre-lease repaints are completed within a few days to a week, depending on the size and scope. We build the schedule around your campaign dates and settlement deadlines so the property is ready when it needs to be." },
      { question: "What colours work best for selling or leasing a property?", answer: "Warm whites and soft, broad-appeal neutrals photograph well and help the widest range of buyers and tenants picture themselves in the home. We provide colour consultation to choose a scheme that suits the property and maximises presentation." },
      { question: "Is painting worth it before selling a property?", answer: "In most cases yes. A professional repaint is one of the highest-return improvements before a sale — it addresses scuffs, dated colours and tired façades that buyers otherwise price against you, and lifts the quality of listing photography and inspections." },
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
    faqs: [
      { question: "Do you work with owners corporations and strata managers?", answer: "Yes. We regularly work directly with owners corporations, body corporate committees and strata managers across Melbourne — providing detailed quotes, scopes of work, insurance documentation and clear schedules so committees can approve and plan the works with confidence." },
      { question: "What areas of an apartment or unit complex do you paint?", answer: "We paint all common property, including entry lobbies, hallways and corridors, stairwells, car parks, external façades and rendered walls, balconies, eaves and shared amenities. We can quote a full repaint or a staged maintenance program across multiple buildings." },
      { question: "How do you minimise disruption to residents?", answer: "We plan the work around residents and tenants — keeping access ways safe and open, staging areas so entries and stairwells remain usable, using low-odour products in occupied buildings, and communicating the schedule clearly in advance so everyone knows what to expect." },
      { question: "Are you insured for body corporate and strata work?", answer: "Absolutely. Jetblack Painting carries $10 million public liability insurance and follows proper site safety and access procedures. We're happy to provide insurance certificates, safe work documentation and detailed scopes for committees and building managers before work begins." },
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
          body: "We provide this service across Melbourne, including these popular areas.",
          items: popularSuburbLinks,
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
        blogPost: blogIndexArticles.map((article) => ({
          "@type": "BlogPosting",
          headline: article.title,
          description: article.body,
          url: `${SITE_URL}${article.href}`,
        })),
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
      "Painting prices in Melbourne vary according to size, access, paint system, and — most importantly — how much preparation is required before the first coat goes on.",
    sections: [
      {
        heading: "What drives the cost of a painting project",
        paragraphs: [
          "The biggest pricing factors are surface condition, the amount of repair or sanding needed, the number of colours, and how accessible the work is for ladders, scaffolding, and setup.",
          "Interior work is often priced differently to exterior work because weather exposure, washing, filling, and coating systems can add significant labour to outside surfaces.",
        ],
      },
      {
        heading: "Why preparation matters to value",
        paragraphs: [
          "Cheaper painting quotes often reduce the time spent on preparation. That can lead to poor adhesion, flashing, visible repairs, or early failure.",
          "A better value quote explains the included preparation, the paint brand and system, and the scope for trims, doors, ceilings, walls, fences, roofs, or specialty finishes.",
        ],
      },
      {
        heading: "How to compare painting quotes properly",
        paragraphs: [
          "When comparing quotes, check whether materials are included, whether surface repairs are allowed for, and how many coats are specified for the finish.",
          "Ask for a written scope so you can compare the real level of workmanship — not just the headline price.",
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
      "A little preparation before your painters arrive can make the job faster, safer, and easier for everyone in the home.",
    howTo: {
      name: "How to Prepare Your Home for a Painting Project",
      totalTime: "PT1H",
      steps: [
        { name: "Get the space ready before work starts", text: "Clear smaller décor items, fragile pieces, and loose furniture wherever possible so the team can protect and access surfaces efficiently. Confirm room access, entry times, body corporate rules, or alarm instructions before the project begins." },
        { name: "Make key decisions early", text: "Confirm colours, sheen levels, and any accent walls before work starts to prevent delays. If repairs, timber rot, water damage, or additional surfaces are discovered, agree on the updated scope before the painter proceeds." },
        { name: "Plan around the project timeline", text: "Interior painting often requires some rooms to be unusable for short periods, while exterior projects can affect vehicle access, outdoor furniture, and drying times." },
      ],
    },
    sections: [
      {
        heading: "Get the space ready before work starts",
        paragraphs: [
          "Clear smaller décor items, fragile pieces, and loose furniture wherever possible so the team can protect and access surfaces efficiently.",
          "If there are specific rooms, entry times, body corporate rules, or alarm instructions to consider, confirm those details before the project begins.",
        ],
      },
      {
        heading: "Make key decisions early",
        paragraphs: [
          "Confirm colours, sheen levels, and any accent walls before work starts to prevent delays once the project is underway.",
          "If repairs, timber rot, water damage, or additional surfaces are discovered, agree on the updated scope before the painter proceeds.",
        ],
      },
      {
        heading: "Plan around the project timeline",
        paragraphs: [
          "Interior painting often requires some rooms to be unusable for short periods, while exterior projects can affect vehicle access, outdoor furniture, and drying times.",
          "Good planning helps the painter keep momentum and helps you avoid unnecessary disruption during the project.",
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
      "If your kitchen layout still works, resurfacing cabinet doors and panels can often deliver the visual impact of a renovation without the cost and downtime of full replacement.",
    sections: [
      {
        heading: "When resurfacing makes sense",
        paragraphs: [
          "Resurfacing is ideal when cabinet boxes are structurally sound and the goal is to modernise the finish, colour, or overall presentation of the kitchen.",
          "It is typically faster, less disruptive, and more cost-effective than a full replacement, especially for rental refreshes or value-focused home improvements.",
        ],
      },
      {
        heading: "When replacement is the better option",
        paragraphs: [
          "Replacement may be necessary if the cabinetry has water damage, poor layout, failing hinges or hardware throughout, or the storage design no longer suits how the kitchen is used.",
          "A full replacement also makes more sense when major plumbing, electrical, or benchtop changes are already planned.",
        ],
      },
      {
        heading: "Balancing finish quality, budget, and downtime",
        paragraphs: [
          "High-quality resurfacing can deliver a premium finish when the prep and coating system are done properly, especially with 2-pack or hard-wearing cabinet coatings.",
          "The best choice comes down to the condition of the existing kitchen, the renovation budget, and how quickly you need the space back in service.",
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

// Publication metadata for the blog articles. Dates track when each guide was
// first published and last substantively revised — keep `modified` in step when
// an article's content is rewritten. Categories match the labels shown on /blog/.
const articleMeta = {
  "/blog/best-paint-colours-melbourne-2025": { published: "2026-06-23", modified: "2026-07-26", section: "Design Tips" },
  "/blog/house-painting-cost-melbourne": { published: "2026-06-23", modified: "2026-07-26", section: "Price Guide" },
  "/blog/prepare-home-for-painting": { published: "2026-06-23", modified: "2026-07-26", section: "Guide" },
  "/blog/kitchen-cabinet-resurfacing-vs-replacement": { published: "2026-06-23", modified: "2026-07-26", section: "Kitchen" },
  "/blog/mould-remediation-painting-melbourne": { published: "2026-07-17", modified: "2026-07-26", section: "Guide" },
  "/blog/how-to-choose-a-painter-melbourne": { published: "2026-07-21", modified: "2026-07-26", section: "Guide" },
  "/blog/how-to-paint-a-weatherboard-house-melbourne": { published: "2026-07-26", modified: "2026-07-26", section: "Guide" },
};

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
        { label: "Interior Painting", href: "/services/interior-painting/" },
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
        answer: "Absolutely. We're happy to provide references from previous customers, and Jetblack Painting holds a 5.0-star rating from 14 Google reviews.",
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
