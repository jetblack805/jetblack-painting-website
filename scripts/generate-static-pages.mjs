import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://jetblackpainting.com";
const PHONE_DISPLAY = "0432 077 782";
const PHONE_HREF = "0432077782";
const EMAIL = "jimmy@jetblackpainting.com";
const GOOGLE_REVIEW_LINK = "https://g.page/r/jetblackpainting/review";
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
      { "@type": "City", "name": "Croydon" },
      { "@type": "City", "name": "Dandenong" },
      { "@type": "City", "name": "Doncaster" },
      { "@type": "City", "name": "Donvale" },
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
      { "@type": "City", "name": "Oakleigh" },
      { "@type": "City", "name": "Ormond" },
      { "@type": "City", "name": "Parkdale" },
      { "@type": "City", "name": "Patterson Lakes" },
      { "@type": "City", "name": "Ringwood" },
      { "@type": "City", "name": "Sandringham" },
      { "@type": "City", "name": "South Yarra" },
      { "@type": "City", "name": "Stonnington" },
      { "@type": "City", "name": "Templestowe" },
      { "@type": "City", "name": "Thornbury" },
      { "@type": "City", "name": "Toorak" },
      { "@type": "City", "name": "Wheelers Hill" },
      { "@type": "City", "name": "Frankston" },
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
      { "@type": "City", "name": "Collingwood" },
      { "@type": "City", "name": "Richmond" },
      { "@type": "City", "name": "Northcote" },
      { "@type": "City", "name": "Brunswick" },
      { "@type": "City", "name": "South Melbourne" }
    ],
    "description": "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 50+ Melbourne suburbs.",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  };
}

function breadcrumbSchema({ suburb, canonical }) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_URL + "/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Service Areas",
        "item": SITE_URL + "/#services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `Painters ${suburb}`,
        "item": canonical
      }
    ]
  };
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
  </footer>
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
          items: [
            {
              title: "Interior painting",
              body: `Walls, ceilings, trims, doors, and full home repaints completed with clean protection and durable finishes in ${suburb}.`,
            },
            {
              title: "Exterior painting",
              body: `Weatherboards, render, brick, fences, eaves, and fascias prepared properly for a longer-lasting exterior finish.`,
            },
            {
              title: "Commercial painting",
              body: `Flexible repainting support for shops, offices, strata, and maintenance projects across ${suburb}.`,
            },
            {
              title: "Pre-sale and rental refreshes",
              body: `Fast-turnaround repainting to improve presentation, protect assets, and get properties market-ready.`,
            },
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
  { route: "/painter-berwick", source: "BerwickPainters.tsx" },
  { route: "/painter-box-hill", source: "BoxHillPainters.tsx" },
  { route: "/painter-brighton", source: "BrightonPainters.tsx" },
  { route: "/painter-camberwell", source: "CamberwellPainters.tsx" },
  { route: "/painter-carlton", source: "CarltonPainters.tsx" },
  { route: "/painter-caulfield", source: "CaulfieldPainters.tsx" },
  { route: "/painter-croydon", source: "CroydonPainters.tsx" },
  { route: "/painter-dandenong", source: "DandenongPainters.tsx" },
  { route: "/painter-doncaster", source: "DoncasterPainters.tsx" },
  { route: "/painter-donvale", source: "DonvalePainters.tsx" },
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
  { route: "/painter-ormond", source: "OrmondPainters.tsx" },
  { route: "/painter-ringwood", source: "RingwoodPainters.tsx" },
  { route: "/painter-sandringham", source: "SandringhamPainters.tsx" },
  { route: "/painter-stonnington", source: "StonningtonPainters.tsx" },
  { route: "/painter-templestowe", source: "TemplestowePainters.tsx" },
  { route: "/painter-thornbury", source: "ThornburyPainters.tsx" },
  { route: "/painter-toorak", source: "ToorakPainters.tsx" },
  { route: "/painter-wheelers-hill", source: "WheelersHillPainters.tsx" },
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
  { route: "/painter-collingwood", source: "CollingwoodPainters.tsx" },
  { route: "/painter-richmond", source: "RichmondPainters.tsx" },
  { route: "/painter-northcote", source: "NorthcotePainters.tsx" },
  { route: "/painter-brunswick", source: "BrunswickPainters.tsx" },
  { route: "/painter-south-melbourne", source: "SouthMelbournePainters.tsx" },
];

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
    title: "Interior Painting Melbourne | Professional House Painters | Jetblack Painting",
    description:
      "Professional interior painting services in Melbourne. Premium Dulux paints, expert colour consultation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.",
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
    faqs: [
      { question: "How long does interior painting take?", answer: "Most interior painting projects take a few days to a week depending on the size of the home, access, and the preparation required." },
      { question: "Do I need to move out during interior painting?", answer: "No. We stage the work room by room, use low-odour premium paints, and keep living areas usable throughout the project." },
      { question: "Which paint brands do you use for interiors?", answer: "We use premium Australian brands including Dulux and Taubmans, matched to each surface and traffic level." },
    ],
  },
  {
    route: "/services/exterior-painting",
    name: "Exterior Painting",
    title: "Exterior Painting Melbourne | Weather-Resistant House Painters | Jetblack Painting",
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
    faqs: [
      { question: "What time of year is best for exterior painting in Melbourne?", answer: "Exterior painting is possible most of the year in Melbourne. We schedule around weather and use coatings suited to the season's temperature and humidity." },
      { question: "How long does an exterior repaint last?", answer: "With proper preparation and premium coatings, a Melbourne exterior repaint typically lasts 10 years or more." },
      { question: "Do you paint two-storey homes?", answer: "Yes. We paint single and multi-storey homes using ladders, scaffolding, or elevated work platforms as required." },
    ],
  },
  {
    route: "/services/roof-painting",
    name: "Roof Painting",
    title: "Roof Painting Melbourne | Roof Restoration & Coating | Jetblack Painting",
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
      { question: "How much longer will my roof last after painting?", answer: "A properly prepared and coated roof typically gains 10–15 years of life compared with an untreated roof." },
      { question: "Can you change my roof colour?", answer: "Yes. Roof painting is an opportunity to update the roof colour, including modern heat-reflective options." },
      { question: "Do you paint both tile and metal roofs?", answer: "Yes. We restore and paint concrete tile, terracotta (where suitable), metal, and Colorbond roofs across Melbourne." },
    ],
  },
  {
    route: "/services/commercial-painting",
    name: "Commercial Painting",
    title: "Commercial Painting Melbourne | Office & Retail Painters | Jetblack Painting",
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
    faqs: [
      { question: "Can you paint outside business hours?", answer: "Yes. We regularly complete commercial painting after hours and on weekends so trading isn't disrupted." },
      { question: "Do you provide insurance and compliance documents?", answer: "Yes. We carry $10 million public liability insurance and can provide documentation for building and site inductions." },
      { question: "What size commercial projects do you take on?", answer: "From single office suites and shopfronts to warehouses and multi-site strata repaint programs." },
    ],
  },
  {
    route: "/services/roof-fence-painting",
    name: "Roof & Fence Painting",
    title: "Roof & Fence Painting Melbourne | Professional Restoration | Jetblack Painting",
    description:
      "Professional roof painting and fence painting Melbourne. Extends roof life 10-15 years, weather-resistant coatings, 5-star rated. Free quotes - Call 0432 077 782.",
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
    title: "Kitchen Cabinet Resurfacing Melbourne | 2-Pack Finishes | Jetblack Painting",
    description:
      "Professional kitchen cabinet resurfacing Melbourne. Premium 2-pack finishes, fraction of renovation cost, 5-star rated. Transform your kitchen. Free quotes - Call 0432 077 782.",
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
    title: "Real Estate Painting Melbourne | Pre-Sale & Agent Painters | Jetblack Painting",
    description:
      "Real estate painting in Melbourne for agents, vendors and investors. Fast pre-sale and pre-lease repaints, neutral colours, agent coordination. 5-star rated. Free quotes.",
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
      { question: "Do you work directly with real estate agents and vendors?", answer: "Yes. We coordinate directly with agents, vendors and stylists on quotes, access, scheduling and invoicing so the repaint is finished on time for photography and the first open home." },
      { question: "How quickly can you paint a property before it goes on the market?", answer: "Most pre-sale and pre-lease repaints are completed within a few days to a week, scheduled around your campaign dates and settlement deadlines." },
      { question: "What colours work best for selling or leasing a property?", answer: "Warm whites and soft, broad-appeal neutrals photograph well and help the widest range of buyers and tenants. We provide colour consultation to suit the property." },
    ],
  },
  {
    route: "/services/body-corporate-painting",
    name: "Body Corporate Painting",
    title: "Body Corporate Painting Melbourne | Strata & Owners Corporation Painters | Jetblack Painting",
    description:
      "Body corporate and strata painting in Melbourne. Common areas, façades and maintenance programs for owners corporations. Fully insured, minimal disruption. Free quotes.",
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
      { question: "Do you work with owners corporations and strata managers?", answer: "Yes. We work directly with owners corporations, body corporate committees and strata managers, providing detailed quotes, scopes, insurance documentation and clear schedules." },
      { question: "What areas of a unit complex do you paint?", answer: "All common property — entry lobbies, hallways, stairwells, car parks, external façades, balconies, eaves and shared amenities — as a full repaint or a staged maintenance program." },
      { question: "How do you minimise disruption to residents?", answer: "We plan works around residents, keep access ways safe and open, use low-odour products in occupied buildings, and communicate the schedule clearly in advance." },
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

const blogIndexArticles = [
  {
    title: "Best Paint Colours for Melbourne Homes in 2025",
    href: "/blog/best-paint-colours-melbourne-2025/",
    body: "A practical guide to warm whites, eucalyptus greens, charcoals, and exterior colours that suit Melbourne light and architecture.",
  },
  {
    title: "How Much Does House Painting Cost in Melbourne?",
    href: "/blog/house-painting-cost-melbourne/",
    body: "A breakdown of interior, exterior, and repaint cost factors so homeowners can budget for a quality painting project.",
  },
  {
    title: "How to Prepare Your Home for a Painting Project",
    href: "/blog/prepare-home-for-painting/",
    body: "Preparation tips to make your painting project smoother, faster, and less disruptive for your household or tenants.",
  },
  {
    title: "Kitchen Cabinet Resurfacing vs Replacement",
    href: "/blog/kitchen-cabinet-resurfacing-vs-replacement/",
    body: "When resurfacing is the smart option, when replacement makes sense, and how to compare cost, downtime, and finish quality.",
  },
  {
    title: "Mould Remediation & Painting Guide for Melbourne Homes",
    href: "/blog/mould-remediation-painting-melbourne/",
    body: "How to identify, treat and paint over mould in Melbourne homes, including bathroom mould, render mould, preparation steps and the right anti-mould paints.",
  },
  {
    title: "How to Choose a Painter in Melbourne: A Homeowner's Guide",
    href: "/blog/how-to-choose-a-painter-melbourne/",
    body: "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees, reviews and red flags to avoid.",
  },
];

writePage(
  "/blog",
  pageHtml({
    title: "Painting Blog Melbourne | Jetblack Painting",
    description: "Helpful painting articles from Jetblack Painting covering colour selection, project preparation, budgeting, and cabinet resurfacing across Melbourne.",
    canonical: canonicalForRoute("/blog"),
    heroTitle: "Jetblack Painting Blog",
    heroBody: "Read practical painting advice for Melbourne homeowners, landlords, and businesses — from colour ideas and cost guides to preparation tips and cabinet resurfacing insights.",
    schema: {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "Jetblack Painting Blog",
      url: canonicalForRoute("/blog"),
      description:
        "Helpful painting articles from Jetblack Painting covering colour selection, project preparation, budgeting, and cabinet resurfacing across Melbourne.",
    },
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
    title: "Best Paint Colours for Melbourne Homes in 2025 | Jetblack Painting",
    description:
      "Discover the best paint colours for Melbourne homes in 2025, with expert advice from Jetblack Painting on interior and exterior colour selection.",
    intro:
      "Choosing paint colours for a Melbourne home means balancing natural light, neighbourhood character, resale appeal, and the durability you need for changing weather conditions.",
    sections: [
      {
        heading: "Interior colours that continue to work well",
        paragraphs: [
          "Warm whites and soft off-whites remain reliable choices for open-plan homes because they reflect light well and pair easily with timber floors, stone, and contemporary joinery.",
          "Muted greens, eucalyptus tones, and sophisticated charcoals are also popular when homeowners want more personality without overwhelming bedrooms, studies, or living areas.",
        ],
      },
      {
        heading: "Exterior colours suited to Melbourne conditions",
        paragraphs: [
          "Greige, warm grey, and light neutral schemes stay popular for exteriors because they handle changing daylight well and look balanced on weatherboard, brick, and rendered homes.",
          "Darker feature trims and contrasting front doors can add definition, but they work best when paired with proper preparation and premium coating systems that resist UV and moisture.",
        ],
      },
      {
        heading: "How to choose colours with confidence",
        paragraphs: [
          "Always test sample pots on multiple elevations or walls before committing. Light changes dramatically through the day and between seasons.",
          "If your property sits in a heritage or higher-value pocket, choose colours that complement the fixed elements of the home and streetscape rather than chasing short-lived trends.",
        ],
      },
    ],
    faqs: [
      {
        question: "What are the best interior paint colours for Melbourne homes?",
        answer: "Warm whites and soft off-whites remain reliable choices for open-plan homes because they reflect light well and pair easily with timber floors, stone and contemporary joinery. Muted greens, eucalyptus tones and sophisticated charcoals add personality without overwhelming bedrooms, studies or living areas.",
      },
      {
        question: "What exterior paint colours suit Melbourne conditions?",
        answer: "Greige, warm grey and light neutral schemes stay popular because they handle Melbourne's changing daylight well and look balanced on weatherboard, brick and rendered homes. Darker feature trims and contrasting front doors add definition when paired with proper preparation and premium UV- and moisture-resistant coatings.",
      },
      {
        question: "How do I choose a paint colour with confidence?",
        answer: "Always test sample pots on multiple walls or elevations before committing, because light changes dramatically through the day and between seasons. For heritage or higher-value pockets, choose colours that complement the home's fixed elements and streetscape rather than chasing short-lived trends.",
      },
    ],
  },
  {
    route: "/blog/house-painting-cost-melbourne",
    title: "How Much Does House Painting Cost in Melbourne? | Jetblack Painting",
    description:
      "Learn what affects house painting costs in Melbourne, including surface prep, property size, access, paint systems, and project scope.",
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
        question: "How much does house painting cost in Melbourne?",
        answer: "Painting prices in Melbourne vary with the size of the job, access, the paint system and — most importantly — how much preparation is needed before the first coat. The biggest pricing factors are surface condition, the amount of repair or sanding required, the number of colours, and how accessible the work is for ladders, scaffolding and setup.",
      },
      {
        question: "Why does preparation affect the value of a painting quote?",
        answer: "Cheaper quotes often cut preparation time, which can lead to poor adhesion, flashing, visible repairs or early failure. A better-value quote spells out the included preparation, the paint brand and system, and the full scope for trims, doors, ceilings, walls, fences, roofs or specialty finishes.",
      },
      {
        question: "How do I compare painting quotes properly?",
        answer: "Check whether materials are included, whether surface repairs are allowed for, and how many coats are specified for the finish. Ask for a written scope so you can compare the real level of workmanship rather than just the headline price.",
      },
    ],
  },
  {
    route: "/blog/prepare-home-for-painting",
    title: "How to Prepare Your Home for a Painting Project | Jetblack Painting",
    description:
      "Prepare your Melbourne home for a smooth painting project with expert tips on access, furniture protection, colour decisions, and scheduling.",
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
        question: "How should I prepare my home before the painters arrive?",
        answer: "Clear smaller décor items, fragile pieces and loose furniture wherever possible so the team can protect and access surfaces efficiently, and confirm room access, entry times, body corporate rules or alarm instructions before the project begins.",
      },
      {
        question: "What decisions should I make before painting starts?",
        answer: "Confirm colours, sheen levels and any accent walls before work starts to prevent delays. If repairs, timber rot, water damage or additional surfaces are discovered, agree on the updated scope before the painter proceeds.",
      },
      {
        question: "How will a painting project affect daily life at home?",
        answer: "Interior painting often makes some rooms unusable for short periods, while exterior projects can affect vehicle access, outdoor furniture and drying times. Good planning helps the painter keep momentum and helps you avoid unnecessary disruption.",
      },
    ],
  },
  {
    route: "/blog/kitchen-cabinet-resurfacing-vs-replacement",
    title: "Kitchen Cabinet Resurfacing vs Replacement | Jetblack Painting",
    description:
      "Compare kitchen cabinet resurfacing and replacement to understand cost, turnaround, finish quality, and which option suits your Melbourne renovation.",
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
        question: "When does kitchen cabinet resurfacing make sense?",
        answer: "Resurfacing is ideal when the cabinet boxes are structurally sound and the goal is to modernise the finish, colour or overall presentation. It is typically faster, less disruptive and more cost-effective than a full replacement, especially for rental refreshes or value-focused improvements.",
      },
      {
        question: "When is replacing kitchen cabinets the better option?",
        answer: "Replacement may be necessary if the cabinetry has water damage, a poor layout, failing hinges or hardware throughout, or a storage design that no longer suits how the kitchen is used. It also makes more sense when major plumbing, electrical or benchtop changes are already planned.",
      },
      {
        question: "Does resurfacing give a durable, high-quality finish?",
        answer: "Yes. High-quality resurfacing delivers a premium, hard-wearing finish when the preparation and coating system are done properly, especially with 2-pack or hard-wearing cabinet coatings.",
      },
    ],
  },
  {
    route: "/blog/mould-remediation-painting-melbourne",
    title: "Mould Remediation & Painting Guide for Melbourne Homes | Jetblack Painting",
    description:
      "How to identify, treat and paint over mould in Melbourne homes. Expert guide covering bathroom mould, render mould, preparation steps and the right anti-mould paints.",
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
        question: "Can you just paint over mould?",
        answer: "No. Painting over mould without killing it first guarantees it returns within months and pushes through the new coating. You need to fix the moisture source, kill the mould, let the surface dry completely, and prime with an anti-mould primer before painting.",
      },
      {
        question: "How long does anti-mould paint last?",
        answer: "Properly treated and painted surfaces typically resist mould for 5 to 10 years. High-moisture areas such as poorly ventilated bathrooms usually need attention again after 3 to 5 years because of how much moisture the space handles daily.",
      },
      {
        question: "When should I call a professional for mould?",
        answer: "Call a professional when mould covers a large area, keeps returning after cleaning, causes staining that bleeds through fresh paint, or where there may be a hidden leak or structural moisture problem.",
      },
    ],
  },
  {
    route: "/blog/how-to-choose-a-painter-melbourne",
    title: "How to Choose a Painter in Melbourne: A Homeowner's Guide | Jetblack Painting",
    description:
      "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees, reviews and red flags to avoid. A practical checklist from a local painting business.",
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
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title.replace(" | Jetblack Painting", ""),
    description: article.description,
    author: {
      "@type": "Organization",
      name: "Jetblack Painting",
    },
    publisher: {
      "@type": "Organization",
      name: "Jetblack Painting",
    },
    mainEntityOfPage: canonical,
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
  const schemaList = [articleSchema, howToSchema, articleFaqSchema].filter(Boolean);
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
      heroTitle: article.title.replace(" | Jetblack Painting", ""),
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

const faqItems = [
  {
    question: "Do you offer free painting quotes?",
    answer: "Yes. Jetblack Painting provides free, no-obligation painting quotes across Melbourne.",
  },
  {
    question: "Are you licensed and insured?",
    answer: "Yes. Jetblack Painting is fully licensed and insured for residential and commercial painting work.",
  },
  {
    question: "What Melbourne areas do you service?",
    answer: "We service Melbourne suburbs including Mordialloc, Brighton, Toorak, Bentleigh, Mentone, Kingston, Bayside, Greater Dandenong, and surrounding areas.",
  },
  {
    question: "How long does interior painting usually take?",
    answer: "Most interior painting projects take a few days to a week depending on the size, access, and preparation required.",
  },
  {
    question: "Do you handle exterior and commercial painting too?",
    answer: "Yes. We complete interior, exterior, roof, cabinet, pre-sale, rental, and commercial painting projects.",
  },
  {
    question: "Can you help with colour selection?",
    answer: "Yes. We can help narrow down colour and sheen choices that suit the property, light, and desired finish.",
  },
];

writePage(
  "/faq",
  pageHtml({
    title: "Painting FAQs Melbourne | Jetblack Painting",
    description:
      "Frequently asked questions about Jetblack Painting services in Melbourne, including quotes, service areas, interior, exterior and commercial painting.",
    canonical: canonicalForRoute("/faq"),
    heroTitle: "Frequently Asked Questions",
    heroBody: "Get answers to the common questions Melbourne homeowners, landlords, and businesses ask before booking a painting project.",
    schema: faqSchema(faqItems),
    sections: [
      {
        heading: "What clients ask us most often",
        paragraphs: [
          "These answers cover quoting, timelines, service areas, preparation, and the painting services Jetblack Painting provides across Melbourne.",
          "If your project has unique requirements, contact us directly and we can talk through the best scope, timeline, and coating system for the property.",
        ],
      },
      {
        type: "faqs",
        heading: "Jetblack Painting FAQs",
        items: faqItems,
      },
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
    schema: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: "Leave a Review | Jetblack Painting Melbourne",
      description:
        "Leave a Google review for Jetblack Painting. Your feedback helps Melbourne homeowners find trusted interior, exterior and commercial painters.",
      url: canonicalForRoute("/review-us"),
    },
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
