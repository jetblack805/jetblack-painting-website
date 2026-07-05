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
  const pattern = new RegExp(`${propName}=(?:"([\\s\\S]*?)"|\\\`([\\s\\S]*?)\\\`)`);
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

function extractNeighbours(source) {
  const block = source.match(/neighbouringSuburbs=\{\[(.*?)\]\}/s)?.[1] ?? "";
  const regex = /\{\s*name:\s*"([^"]+)"\s*,\s*link:\s*"([^"]+)"\s*\}/g;
  const neighbours = [];
  for (const match of block.matchAll(regex)) {
    neighbours.push({ name: match[1], link: match[2] });
  }
  return neighbours;
}

function pageHtml({ title, description, canonical, heroTitle, heroBody, sections, footerLinks, schema }) {
  const schemaScripts = (Array.isArray(schema) ? schema : [schema])
    .filter(Boolean)
    .map((item) => `  <script type="application/ld+json">${JSON.stringify(item)}</script>`)
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
    body{font-family:Arial,Helvetica,sans-serif;margin:0;color:#111;background:#fff;line-height:1.6}
    header,section,footer{max-width:980px;margin:auto;padding:28px 20px}
    .hero{background:#0d0d0d;color:#fff;padding:58px 20px}
    .hero h1{font-size:38px;line-height:1.15;margin:0 0 14px}
    .hero p{font-size:18px;max-width:760px}
    .btn{display:inline-block;background:#00AACC;color:#fff;padding:13px 22px;border-radius:8px;text-decoration:none;font-weight:700;margin-top:10px}
    .grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:18px}
    .card{border:1px solid #ddd;border-radius:12px;padding:18px;background:#fafafa}
    .link-list{display:flex;flex-wrap:wrap;gap:10px;margin-top:12px}
    .link-list a{background:#f0f0f0;padding:8px 14px;border-radius:6px;text-decoration:none;color:#111}
    h2{font-size:28px;margin-top:0}
    h3{font-size:20px;margin-bottom:8px}
    ul,ol{padding-left:20px}
    footer{font-size:14px;color:#555;border-top:1px solid #eee}
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
      heroTitle: title,
      heroBody: description,
      schema: [...suburbSchema({ suburb, title, description, canonical }), ...(faqs.length ? [faqSchema(faqs)] : [])],
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
  { route: "/painter-hawthorn", source: "HawthornPainters.tsx" },
  { route: "/painter-kew", source: "KewPainters.tsx" },
  { route: "/keysborough-painters", source: "KeysboroughPainters.tsx" },
  { route: "/painter-kingston", source: "KingstonPainters.tsx" },
  { route: "/painter-malvern", source: "MalvernPainters.tsx" },
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
  { route: "/painter-toorak", source: "ToorakPainters.tsx" },
  { route: "/painter-wheelers-hill", source: "WheelersHillPainters.tsx" },
];

for (const page of allSuburbPages) {
  generateSuburbPage(page.route, path.join(PAGE_DIR, page.source));
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
  },
  {
    route: "/blog/prepare-home-for-painting",
    title: "How to Prepare Your Home for a Painting Project | Jetblack Painting",
    description:
      "Prepare your Melbourne home for a smooth painting project with expert tips on access, furniture protection, colour decisions, and scheduling.",
    intro:
      "A little preparation before your painters arrive can make the job faster, safer, and easier for everyone in the home.",
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
  },
];

for (const article of articlePages) {
  const canonical = canonicalForRoute(article.route);
  writePage(
    article.route,
    pageHtml({
      title: article.title,
      description: article.description,
      canonical,
      heroTitle: article.title.replace(" | Jetblack Painting", ""),
      heroBody: article.intro,
      schema: {
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
      },
      sections: article.sections,
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
