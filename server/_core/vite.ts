import express, { type Express } from "express";
import fs from "fs";
import { type Server } from "http";
import { nanoid } from "nanoid";
import path from "path";
import { createServer as createViteServer } from "vite";
import viteConfig from "../../vite.config";

// ─── Dev mode (unchanged) ─────────────────────────────────────────────────────

export async function setupVite(app: Express, server: Server) {
  const serverOptions = {
    middlewareMode: true,
    hmr: { server },
    allowedHosts: true as const,
  };

  const vite = await createViteServer({
    ...viteConfig,
    configFile: false,
    server: serverOptions,
    appType: "custom",
  });

  app.use(vite.middlewares);
  app.use("*", async (req, res, next) => {
    const url = req.originalUrl;
    try {
      const clientTemplate = path.resolve(
        import.meta.dirname,
        "../..",
        "client",
        "index.html"
      );
      let template = await fs.promises.readFile(clientTemplate, "utf-8");
      template = template.replace(
        `src="/src/main.tsx"`,
        `src="/src/main.tsx?v=${nanoid()}"`
      );
      const page = await vite.transformIndexHtml(url, template);
      res.status(200).set({ "Content-Type": "text/html" }).end(page);
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const BASE_URL = "https://jetblackpainting.manus.space";

function escapeAttr(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

interface Meta {
  title: string;
  description: string;
  canonical: string;
}

function sm(suburb: string, slug: string, customTitle?: string, customDesc?: string): Meta {
  return {
    title:
      customTitle ??
      `${suburb} Painters | Professional House Painting | Jetblack Painting`,
    description: customDesc ?? `Jetblack Painting provides professional interior, exterior and commercial painting in ${suburb}, Melbourne. Fully insured, 5-star rated. Free written quotes — call 0432 077 782.`,
    canonical: `${BASE_URL}${slug}/`,
  };
}

// ─── Per-route meta table ─────────────────────────────────────────────────────

const META: Record<string, Meta> = {
  "/": {
    title: "Jetblack Painting | Melbourne's #1 Rated House Painters",
    description:
      "Jetblack Painting — Melbourne's top-rated house painters for interior, exterior, roof and commercial painting. Servicing Bayside, SE Melbourne and Mornington Peninsula. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/`,
  },
  // Suburb pages
  "/painter-toorak":              sm("Toorak",              "/painter-toorak",              "Toorak Painters | Luxury House Painting Specialists | Jetblack Painting"),
  "/painter-brighton":            sm("Brighton",            "/painter-brighton",            "Brighton Painters | Premium House Painting Services | Jetblack Painting"),
  "/painter-malvern":             sm("Malvern",             "/painter-malvern",             "Malvern Painters | Expert House Painting Services | Jetblack Painting"),
  "/painter-camberwell":          sm("Camberwell",          "/painter-camberwell"),
  "/painter-hawthorn":            sm("Hawthorn",            "/painter-hawthorn"),
  "/painter-bentleigh":           sm("Bentleigh",           "/painter-bentleigh"),
  "/painter-caulfield":           sm("Caulfield",           "/painter-caulfield"),
  "/painter-hampton":             sm("Hampton",             "/painter-hampton"),
  "/painter-mordialloc":          sm("Mordialloc",          "/painter-mordialloc",          "Mordialloc Painters | Local Painting Experts Based in Mordialloc | Jetblack Painting", "Jetblack Painting is based in Mordialloc and provides expert interior, exterior, roof and commercial painting across Mordialloc and surrounds. 5-star rated, fully insured. Free quotes — call 0432 077 782."),
  "/keysborough-painters":        sm("Keysborough",         "/keysborough-painters",        "Keysborough Painters | Local House Painting Specialists | Jetblack Painting"),
  "/painter-kew":                 sm("Kew",                 "/painter-kew"),
  "/painter-sandringham":         sm("Sandringham",         "/painter-sandringham"),
  "/painter-mentone":             sm("Mentone",             "/painter-mentone"),
  "/painter-carlton":             sm("Carlton",             "/painter-carlton"),
  "/painter-mornington-peninsula":sm("Mornington Peninsula","/painter-mornington-peninsula","Mornington Peninsula Painters | House Painting Specialists | Jetblack Painting"),
  "/painter-bayside":             sm("Bayside",             "/painter-bayside",             "Bayside Painters | Professional House Painting | Jetblack Painting"),
  "/painter-kingston":            sm("Kingston",            "/painter-kingston"),
  "/painter-greater-dandenong":   sm("Greater Dandenong",   "/painter-greater-dandenong"),
  "/painter-armadale":            sm("Armadale",            "/painter-armadale"),
  "/painter-berwick":             sm("Berwick",             "/painter-berwick"),
  "/painter-dandenong":           sm("Dandenong",           "/painter-dandenong"),
  "/painter-donvale":             sm("Donvale",             "/painter-donvale"),
  "/painter-moorabbin":           sm("Moorabbin",           "/painter-moorabbin"),
  "/painter-stonnington":         sm("Stonnington",         "/painter-stonnington"),
  "/painter-box-hill":            sm("Box Hill",            "/painter-box-hill"),
  "/painter-croydon":             sm("Croydon",             "/painter-croydon"),
  "/painter-doncaster":           sm("Doncaster",           "/painter-doncaster"),
  "/painter-glen-waverley":       sm("Glen Waverley",       "/painter-glen-waverley"),
  "/painter-mckinnon":            sm("McKinnon",            "/painter-mckinnon"),
  "/painter-murrumbeena":         sm("Murrumbeena",         "/painter-murrumbeena"),
  "/painter-ormond":              sm("Ormond",              "/painter-ormond"),
  "/painter-ringwood":            sm("Ringwood",            "/painter-ringwood"),
  "/painter-templestowe":         sm("Templestowe",         "/painter-templestowe"),
  "/painter-wheelers-hill":       sm("Wheelers Hill",       "/painter-wheelers-hill"),
  // Service pages
  "/services/interior-painting": {
    title: "Interior Painting Melbourne | Expert House Painters | Jetblack Painting",
    description: "Professional interior painting for Melbourne homes and businesses. Living rooms, bedrooms, kitchens, ceilings and trims. Premium finish, clean workmanship. Free quotes — call 0432 077 782.",
    canonical: `${BASE_URL}/services/interior-painting`,
  },
  "/services/exterior-painting": {
    title: "Exterior Painting Melbourne | Weather-Resistant House Painting | Jetblack Painting",
    description: "Protect and refresh your Melbourne home with expert exterior painting. Full prep included — washing, filling, priming, and topcoat. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/exterior-painting`,
  },
  "/services/roof-painting": {
    title: "Roof Painting Melbourne | Roof Restoration Specialists | Jetblack Painting",
    description: "Expert roof painting and restoration for Melbourne homes. We clean, repair, prime and apply quality roof coatings. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/roof-painting`,
  },
  "/services/commercial-painting": {
    title: "Commercial Painting Melbourne | Business & Office Painters | Jetblack Painting",
    description: "Commercial painting services across Melbourne. Offices, retail, strata and industrial. Minimal disruption, professional finish. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/commercial-painting`,
  },
  "/services/pre-sale-property-painting": {
    title: "Pre-Sale Property Painting Melbourne | Increase Sale Price | Jetblack Painting",
    description: "Maximise your Melbourne property sale price with professional pre-sale painting. Fast turnaround, premium finish. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/pre-sale-property-painting`,
  },
  "/services/rental-property-painting": {
    title: "Rental Property Painting Melbourne | Landlords & Property Managers | Jetblack Painting",
    description: "Affordable rental property painting for Melbourne landlords and property managers. Fast turnaround, quality finish. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/rental-property-painting`,
  },
  "/services/roof-fence-painting": {
    title: "Roof & Fence Painting Melbourne | Jetblack Painting",
    description: "Professional roof and fence painting across Melbourne. Restore and protect your property with quality coatings. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/roof-fence-painting`,
  },
  "/services/kitchen-cabinet-resurfacing": {
    title: "Kitchen Cabinet Resurfacing Melbourne | Affordable Kitchen Refresh | Jetblack Painting",
    description: "Transform your Melbourne kitchen without a full renovation. Professional cabinet resurfacing — new colour, new look, fraction of the price. Free quotes. Call 0432 077 782.",
    canonical: `${BASE_URL}/services/kitchen-cabinet-resurfacing`,
  },
  // Blog pages
  "/blog": {
    title: "Painting Tips & Guides | Melbourne House Painting Blog | Jetblack Painting",
    description: "Expert painting tips, colour guides and how-to articles from Jetblack Painting — Melbourne's top-rated house painters.",
    canonical: `${BASE_URL}/blog`,
  },
  "/blog/best-paint-colours-melbourne-2025": {
    title: "Best Paint Colours for Melbourne Homes 2025 | Jetblack Painting",
    description: "Discover the best interior and exterior paint colours for Melbourne homes in 2025. Expert colour recommendations from Jetblack Painting.",
    canonical: `${BASE_URL}/blog/best-paint-colours-melbourne-2025`,
  },
  "/blog/house-painting-cost-melbourne": {
    title: "House Painting Cost Melbourne 2025 | Price Guide | Jetblack Painting",
    description: "How much does house painting cost in Melbourne? Full price guide covering interior, exterior and commercial painting from Jetblack Painting.",
    canonical: `${BASE_URL}/blog/house-painting-cost-melbourne`,
  },
  "/blog/prepare-home-for-painting": {
    title: "How to Prepare Your Home for Painting | Jetblack Painting",
    description: "Everything you need to know about preparing your Melbourne home for interior or exterior painting. Expert tips from Jetblack Painting.",
    canonical: `${BASE_URL}/blog/prepare-home-for-painting`,
  },
  "/blog/kitchen-cabinet-resurfacing-vs-replacement": {
    title: "Kitchen Cabinet Resurfacing vs Replacement | Jetblack Painting",
    description: "Resurfacing or full replacement — which is right for your Melbourne kitchen? Jetblack Painting breaks down the costs, benefits and process.",
    canonical: `${BASE_URL}/blog/kitchen-cabinet-resurfacing-vs-replacement`,
  },
  // Other pages
  "/faq": {
    title: "Painting FAQs | Common Questions Answered | Jetblack Painting",
    description: "Answers to the most common house painting questions — costs, timelines, paint brands, prep and more. From Jetblack Painting, Melbourne.",
    canonical: `${BASE_URL}/faq`,
  },
  "/review-us": {
    title: "Review Jetblack Painting | Leave a Google Review",
    description: "Happy with our work? Leave Jetblack Painting a Google review and help other Melbourne homeowners find quality house painters.",
    canonical: `${BASE_URL}/review-us`,
  },
};

// Auto-generate plural aliases (/painters-x → /painter-x)
const PLURAL_ALIAS: Record<string, string> = {};
for (const key of Object.keys(META)) {
  if (key.startsWith("/painter-")) {
    PLURAL_ALIAS[key.replace("/painter-", "/painters-")] = key;
  }
}

// ─── 301 Redirect map ─────────────────────────────────────────────────────────
// FROM path → TO canonical URL
// Consolidates link equity and removes duplicate-content routes from Google's index.

const REDIRECTS_301: Record<string, string> = {
  // Plural → singular canonical (all suburb pages)
  "/painters-toorak":              `${BASE_URL}/painter-toorak/`,
  "/painters-malvern":             `${BASE_URL}/painter-malvern/`,
  "/painters-brighton":            `${BASE_URL}/painter-brighton/`,
  "/painters-camberwell":          `${BASE_URL}/painter-camberwell/`,
  "/painters-hawthorn":            `${BASE_URL}/painter-hawthorn/`,
  "/painters-bentleigh":           `${BASE_URL}/painter-bentleigh/`,
  "/painters-caulfield":           `${BASE_URL}/painter-caulfield/`,
  "/painters-hampton":             `${BASE_URL}/painter-hampton/`,
  "/painters-mordialloc":          `${BASE_URL}/painter-mordialloc/`,
  "/painters-keysborough":         `${BASE_URL}/keysborough-painters/`,
  "/painter-keysborough":          `${BASE_URL}/keysborough-painters/`,
  "/painters-kew":                 `${BASE_URL}/painter-kew/`,
  "/painters-sandringham":         `${BASE_URL}/painter-sandringham/`,
  "/painters-mentone":             `${BASE_URL}/painter-mentone/`,
  "/painters-carlton":             `${BASE_URL}/painter-carlton/`,
  "/painters-mornington-peninsula":`${BASE_URL}/painter-mornington-peninsula/`,
  "/painters-bayside":             `${BASE_URL}/painter-bayside/`,
  "/painters-kingston":            `${BASE_URL}/painter-kingston/`,
  "/painters-greater-dandenong":   `${BASE_URL}/painter-greater-dandenong/`,
  "/painters-armadale":            `${BASE_URL}/painter-armadale/`,
  "/painters-berwick":             `${BASE_URL}/painter-berwick/`,
  "/painters-dandenong":           `${BASE_URL}/painter-dandenong/`,
  "/painters-donvale":             `${BASE_URL}/painter-donvale/`,
  "/painters-moorabbin":           `${BASE_URL}/painter-moorabbin/`,
  "/painters-stonnington":         `${BASE_URL}/painter-stonnington/`,
  "/painters-box-hill":            `${BASE_URL}/painter-box-hill/`,
  "/painters-croydon":             `${BASE_URL}/painter-croydon/`,
  "/painters-doncaster":           `${BASE_URL}/painter-doncaster/`,
  "/painters-glen-waverley":       `${BASE_URL}/painter-glen-waverley/`,
  "/painters-mckinnon":            `${BASE_URL}/painter-mckinnon/`,
  "/painters-murrumbeena":         `${BASE_URL}/painter-murrumbeena/`,
  "/painters-ormond":              `${BASE_URL}/painter-ormond/`,
  "/painters-ringwood":            `${BASE_URL}/painter-ringwood/`,
  "/painters-templestowe":         `${BASE_URL}/painter-templestowe/`,
  "/painters-wheelers-hill":       `${BASE_URL}/painter-wheelers-hill/`,
  // Legacy/duplicate service routes → canonical service paths
  "/interior-painting":            `${BASE_URL}/services/interior-painting`,
  "/kitchen-cabinet-resurfacing":  `${BASE_URL}/services/kitchen-cabinet-resurfacing`,
};

// ─── Noindex paths ────────────────────────────────────────────────────────────
// These routes exist for navigation/UX but are duplicate content.
// X-Robots-Tag: noindex prevents Google indexing them without breaking the page.

const NOINDEX_PATHS = new Set([
  // Home aliases (render the same Home component)
  "/about",
  "/contact",
  "/our-work",
  // Blog routes that render suburb/service components (duplicate content)
  "/blog/toorak-painting-guide",
  "/blog/brighton-painters-guide",
  "/blog/camberwell-painters-guide",
  "/blog/glen-waverley-painting-guide",
  "/blog/hawthorn-painting-services",
  "/blog/commercial-vs-residential",
  "/blog/exterior-paint-protection",
  "/blog/exterior-painting-preparation",
  "/blog/how-to-choose-painter",
  "/blog/interior-painting-cost-guide",
  "/blog/paint-color-trends-2024",
  "/blog/seasonal-painting-guide",
  "/blog/best-paint-colors-melbourne",
]);

// ─── AggregateRating schema ───────────────────────────────────────────────────
// Injected server-side so it appears in the static HTML for crawlers.
// ⚠️  UPDATE reviewCount with your actual Google review count from GBP dashboard.

const AGGREGATE_RATING_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${BASE_URL}/#business`,
  name: "Jetblack Painting",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "127", // ← UPDATE THIS with your actual Google review count
  },
});

// ─── Per-route extra schemas ──────────────────────────────────────────────────
// Injected server-side so AI crawlers (Perplexity, ChatGPT, Claude) see them
// in raw HTML without needing to execute JavaScript.

function breadcrumb(crumbs: { name: string; item: string }[]) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: c.item,
    })),
  });
}

function blogPosting(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  image: string;
}) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${opts.url}#article`,
    headline: opts.headline,
    description: opts.description,
    image: opts.image,
    url: opts.url,
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    author: {
      "@type": "Person",
      name: "Jimmy Demirci",
      url: `${BASE_URL}/`,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${BASE_URL}/#business`,
      name: "Jetblack Painting",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/og-image.jpg` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
  });
}

function suburbService(suburb: string, slug: string) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${BASE_URL}${slug}/#service`,
    name: `Painters ${suburb} Melbourne`,
    serviceType: "House Painting",
    description: `Professional house painting services in ${suburb}, Melbourne. Interior, exterior, roof and commercial painting by Jetblack Painting — 5-star rated, fully insured. Free quotes — call 0432 077 782.`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": `${BASE_URL}/#business`,
      name: "Jetblack Painting",
      telephone: "+61432077782",
      url: BASE_URL,
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
      containedInPlace: { "@type": "State", name: "Victoria" },
    },
    url: `${BASE_URL}${slug}/`,
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AUD",
        description: "Free written quote — call 0432 077 782",
      },
    },
  });
}

const FAQ_SCHEMA = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${BASE_URL}/faq#faqpage`,
  mainEntity: [
    { "@type": "Question", name: "Do you offer free quotes?", acceptedAnswer: { "@type": "Answer", text: "Yes! We provide completely free, no-obligation quotes. We'll visit your property, assess your needs, and provide a competitive price estimate. Call Jimmy on 0432 077 782 or use the online form." } },
    { "@type": "Question", name: "Are you licensed and insured?", acceptedAnswer: { "@type": "Answer", text: "Yes, Jetblack Painting is fully licensed and carries $20 million public liability insurance. All work is backed by a 5-year workmanship guarantee." } },
    { "@type": "Question", name: "How long have you been in business?", acceptedAnswer: { "@type": "Answer", text: "Jetblack Painting has been serving Melbourne for over 13 years, building a reputation for quality workmanship and customer satisfaction across 30+ suburbs." } },
    { "@type": "Question", name: "Do you provide references?", acceptedAnswer: { "@type": "Answer", text: "Absolutely! We're happy to provide references from previous customers. We also have a 5-star Google rating with 127+ satisfied clients." } },
    { "@type": "Question", name: "What areas do you serve?", acceptedAnswer: { "@type": "Answer", text: "We serve all Melbourne suburbs including Mordialloc, Mentone, Sandringham, Brighton, Hampton, Bentleigh, Keysborough, Toorak, Hawthorn, Camberwell, Caulfield, Kew, Carlton, Bayside, Mornington Peninsula, and 30+ more suburbs across Melbourne's south-east, inner east, and eastern suburbs." } },
    { "@type": "Question", name: "Do you travel outside Melbourne?", acceptedAnswer: { "@type": "Answer", text: "We primarily serve the Melbourne metropolitan area including the Mornington Peninsula. For projects outside our usual service area, please contact us to discuss availability." } },
    { "@type": "Question", name: "Is there a minimum project size?", acceptedAnswer: { "@type": "Answer", text: "No, we welcome projects of all sizes, from small room touch-ups to large commercial painting projects." } },
    { "@type": "Question", name: "Do you offer painting services for coastal homes in Mordialloc and Bayside?", acceptedAnswer: { "@type": "Answer", text: "Yes, we specialise in painting coastal homes across Mordialloc, Sandringham, Hampton, and Bayside. We use premium weather-resistant paints and techniques to protect against salt air, humidity, and UV rays." } },
    { "@type": "Question", name: "How long does interior painting take?", acceptedAnswer: { "@type": "Answer", text: "Most interior painting projects take 3–7 days depending on the size and complexity. A standard 3-bedroom interior repaint typically takes 3–5 days. We'll provide a detailed timeline during your free quote." } },
    { "@type": "Question", name: "Do you move furniture before painting?", acceptedAnswer: { "@type": "Answer", text: "Yes, we move and protect your furniture as part of our service. We use drop cloths and plastic sheeting to protect floors and belongings." } },
    { "@type": "Question", name: "Can you help with colour selection?", acceptedAnswer: { "@type": "Answer", text: "Absolutely! Our team has extensive experience with colour trends and can help you choose colours that complement your Melbourne home's style and architecture." } },
    { "@type": "Question", name: "What paint brands do you use?", acceptedAnswer: { "@type": "Answer", text: "We use premium quality paints from leading Australian brands including Dulux and Taubmans. We can recommend the best products for your specific surfaces and conditions." } },
    { "@type": "Question", name: "How often should I repaint my home exterior?", acceptedAnswer: { "@type": "Answer", text: "Most exterior paint jobs last 5–10 years depending on weather conditions, paint quality, and surface type. In Melbourne's coastal suburbs, salt air can accelerate weathering. We can assess your home and recommend a timeline during your free quote." } },
    { "@type": "Question", name: "Can you paint in all weather conditions?", acceptedAnswer: { "@type": "Answer", text: "We can paint in most conditions, but avoid extreme heat, cold, or rain. We'll schedule your project during optimal weather windows to ensure the best possible finish." } },
    { "@type": "Question", name: "Do you prepare surfaces before painting?", acceptedAnswer: { "@type": "Answer", text: "Yes, proper preparation is essential to a long-lasting result. We clean, sand, fill, and prime surfaces before applying any paint coats." } },
    { "@type": "Question", name: "What's included in an exterior painting service?", acceptedAnswer: { "@type": "Answer", text: "Our exterior service includes full surface preparation (wash, sand, fill, prime), painting of walls, fascias, gutters, trim, and cleanup. All prep is included in every quote." } },
    { "@type": "Question", name: "Can you handle large commercial painting projects?", acceptedAnswer: { "@type": "Answer", text: "Yes! We have experience with commercial painting projects of all sizes, from small offices to large retail spaces, strata buildings, and industrial facilities." } },
    { "@type": "Question", name: "Can you work after hours for commercial projects?", acceptedAnswer: { "@type": "Answer", text: "Yes, we can arrange after-hours or weekend work to minimise disruption to your business operations." } },
    { "@type": "Question", name: "How much does house painting cost in Melbourne?", acceptedAnswer: { "@type": "Answer", text: "Pricing depends on project size, surface condition, paint quality, and location. Interior painting typically starts from $1,500 for a standard room. Full exterior repaints for an average Melbourne home range from $4,000–$10,000. We provide free detailed quotes with no hidden costs." } },
    { "@type": "Question", name: "Do you offer kitchen cabinet resurfacing?", acceptedAnswer: { "@type": "Answer", text: "Yes! We specialise in luxury kitchen cabinet resurfacing using 2-pack spray finishes. It's a fraction of the cost of replacement and leaves your kitchen looking brand new. Free quotes available." } },
    { "@type": "Question", name: "Do you provide roof painting services?", acceptedAnswer: { "@type": "Answer", text: "Yes, we provide professional roof painting and restoration services including cleaning, crack repair, priming, and quality roof coatings to protect and refresh your roof." } },
    { "@type": "Question", name: "Do you do pre-sale property painting?", acceptedAnswer: { "@type": "Answer", text: "Absolutely! We specialise in pre-sale painting to maximise your Melbourne property's buyer appeal and sale price. Fast turnaround available for vendor campaigns." } },
  ],
});

const SCHEMAS_BY_ROUTE: Record<string, string[]> = {
  "/faq": [
    FAQ_SCHEMA,
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting FAQs Melbourne", item: `${BASE_URL}/faq` },
    ]),
  ],
  "/blog": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Blog & Guides", item: `${BASE_URL}/blog` },
    ]),
  ],
  "/blog/best-paint-colours-melbourne-2025": [
    blogPosting({
      headline: "Best Paint Colours for Melbourne Homes in 2025",
      description: "Discover the best interior and exterior paint colours for Melbourne homes in 2025. Expert colour recommendations from Jetblack Painting — Melbourne's top-rated house painters.",
      url: `${BASE_URL}/blog/best-paint-colours-melbourne-2025`,
      datePublished: "2025-05-01",
      dateModified: "2026-07-02",
      image: `${BASE_URL}/og-image.jpg`,
    }),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "Best Paint Colours 2025", item: `${BASE_URL}/blog/best-paint-colours-melbourne-2025` },
    ]),
  ],
  "/blog/house-painting-cost-melbourne": [
    blogPosting({
      headline: "How Much Does House Painting Cost in Melbourne? (2025 Price Guide)",
      description: "How much does house painting cost in Melbourne? Full price guide covering interior, exterior and commercial painting costs from Jetblack Painting.",
      url: `${BASE_URL}/blog/house-painting-cost-melbourne`,
      datePublished: "2025-05-01",
      dateModified: "2026-07-02",
      image: `${BASE_URL}/og-image.jpg`,
    }),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "House Painting Cost Melbourne", item: `${BASE_URL}/blog/house-painting-cost-melbourne` },
    ]),
  ],
  "/blog/prepare-home-for-painting": [
    blogPosting({
      headline: "How to Prepare Your Home for Painting",
      description: "Everything you need to know about preparing your Melbourne home for interior or exterior painting. Expert tips from Jetblack Painting.",
      url: `${BASE_URL}/blog/prepare-home-for-painting`,
      datePublished: "2025-05-01",
      dateModified: "2026-07-02",
      image: `${BASE_URL}/og-image.jpg`,
    }),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "How to Prepare Your Home for Painting", item: `${BASE_URL}/blog/prepare-home-for-painting` },
    ]),
  ],
  "/blog/kitchen-cabinet-resurfacing-vs-replacement": [
    blogPosting({
      headline: "Kitchen Cabinet Resurfacing vs Replacement: What Melbourne Homeowners Need to Know",
      description: "Resurfacing or full replacement — which is right for your Melbourne kitchen? Jetblack Painting breaks down the costs, benefits and process.",
      url: `${BASE_URL}/blog/kitchen-cabinet-resurfacing-vs-replacement`,
      datePublished: "2025-05-01",
      dateModified: "2026-07-02",
      image: `${BASE_URL}/og-image.jpg`,
    }),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Blog", item: `${BASE_URL}/blog` },
      { name: "Kitchen Cabinet Resurfacing vs Replacement", item: `${BASE_URL}/blog/kitchen-cabinet-resurfacing-vs-replacement` },
    ]),
  ],
  "/services/interior-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/interior-painting` },
      { name: "Interior Painting Melbourne", item: `${BASE_URL}/services/interior-painting` },
    ]),
  ],
  "/services/exterior-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/exterior-painting` },
      { name: "Exterior Painting Melbourne", item: `${BASE_URL}/services/exterior-painting` },
    ]),
  ],
  "/services/roof-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/roof-painting` },
      { name: "Roof Painting Melbourne", item: `${BASE_URL}/services/roof-painting` },
    ]),
  ],
  "/services/commercial-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/commercial-painting` },
      { name: "Commercial Painting Melbourne", item: `${BASE_URL}/services/commercial-painting` },
    ]),
  ],
  "/services/pre-sale-property-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/pre-sale-property-painting` },
      { name: "Pre-Sale Property Painting Melbourne", item: `${BASE_URL}/services/pre-sale-property-painting` },
    ]),
  ],
  "/services/rental-property-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/rental-property-painting` },
      { name: "Rental Property Painting Melbourne", item: `${BASE_URL}/services/rental-property-painting` },
    ]),
  ],
  "/services/roof-fence-painting": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/roof-fence-painting` },
      { name: "Roof & Fence Painting Melbourne", item: `${BASE_URL}/services/roof-fence-painting` },
    ]),
  ],
  "/services/kitchen-cabinet-resurfacing": [
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painting Services", item: `${BASE_URL}/services/kitchen-cabinet-resurfacing` },
      { name: "Kitchen Cabinet Resurfacing Melbourne", item: `${BASE_URL}/services/kitchen-cabinet-resurfacing` },
    ]),
  ],
  // ─── Suburb pages ────────────────────────────────────────────────────────
  "/painter-toorak": [
    suburbService("Toorak", "/painter-toorak"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Toorak", item: `${BASE_URL}/painter-toorak/` },
    ]),
  ],
  "/painter-brighton": [
    suburbService("Brighton", "/painter-brighton"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Brighton", item: `${BASE_URL}/painter-brighton/` },
    ]),
  ],
  "/painter-malvern": [
    suburbService("Malvern", "/painter-malvern"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Malvern", item: `${BASE_URL}/painter-malvern/` },
    ]),
  ],
  "/painter-camberwell": [
    suburbService("Camberwell", "/painter-camberwell"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Camberwell", item: `${BASE_URL}/painter-camberwell/` },
    ]),
  ],
  "/painter-hawthorn": [
    suburbService("Hawthorn", "/painter-hawthorn"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Hawthorn", item: `${BASE_URL}/painter-hawthorn/` },
    ]),
  ],
  "/painter-bentleigh": [
    suburbService("Bentleigh", "/painter-bentleigh"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Bentleigh", item: `${BASE_URL}/painter-bentleigh/` },
    ]),
  ],
  "/painter-caulfield": [
    suburbService("Caulfield", "/painter-caulfield"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Caulfield", item: `${BASE_URL}/painter-caulfield/` },
    ]),
  ],
  "/painter-hampton": [
    suburbService("Hampton", "/painter-hampton"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Hampton", item: `${BASE_URL}/painter-hampton/` },
    ]),
  ],
  "/painter-mordialloc": [
    suburbService("Mordialloc", "/painter-mordialloc"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Mordialloc", item: `${BASE_URL}/painter-mordialloc/` },
    ]),
  ],
  "/keysborough-painters": [
    suburbService("Keysborough", "/keysborough-painters"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Keysborough", item: `${BASE_URL}/keysborough-painters/` },
    ]),
  ],
  "/painter-kew": [
    suburbService("Kew", "/painter-kew"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Kew", item: `${BASE_URL}/painter-kew/` },
    ]),
  ],
  "/painter-sandringham": [
    suburbService("Sandringham", "/painter-sandringham"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Sandringham", item: `${BASE_URL}/painter-sandringham/` },
    ]),
  ],
  "/painter-mentone": [
    suburbService("Mentone", "/painter-mentone"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Mentone", item: `${BASE_URL}/painter-mentone/` },
    ]),
  ],
  "/painter-carlton": [
    suburbService("Carlton", "/painter-carlton"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Carlton", item: `${BASE_URL}/painter-carlton/` },
    ]),
  ],
  "/painter-mornington-peninsula": [
    suburbService("Mornington Peninsula", "/painter-mornington-peninsula"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Mornington Peninsula", item: `${BASE_URL}/painter-mornington-peninsula/` },
    ]),
  ],
  "/painter-bayside": [
    suburbService("Bayside", "/painter-bayside"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Bayside", item: `${BASE_URL}/painter-bayside/` },
    ]),
  ],
  "/painter-kingston": [
    suburbService("Kingston", "/painter-kingston"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Kingston", item: `${BASE_URL}/painter-kingston/` },
    ]),
  ],
  "/painter-greater-dandenong": [
    suburbService("Greater Dandenong", "/painter-greater-dandenong"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Greater Dandenong", item: `${BASE_URL}/painter-greater-dandenong/` },
    ]),
  ],
  "/painter-armadale": [
    suburbService("Armadale", "/painter-armadale"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Armadale", item: `${BASE_URL}/painter-armadale/` },
    ]),
  ],
  "/painter-berwick": [
    suburbService("Berwick", "/painter-berwick"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Berwick", item: `${BASE_URL}/painter-berwick/` },
    ]),
  ],
  "/painter-dandenong": [
    suburbService("Dandenong", "/painter-dandenong"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Dandenong", item: `${BASE_URL}/painter-dandenong/` },
    ]),
  ],
  "/painter-donvale": [
    suburbService("Donvale", "/painter-donvale"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Donvale", item: `${BASE_URL}/painter-donvale/` },
    ]),
  ],
  "/painter-moorabbin": [
    suburbService("Moorabbin", "/painter-moorabbin"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Moorabbin", item: `${BASE_URL}/painter-moorabbin/` },
    ]),
  ],
  "/painter-stonnington": [
    suburbService("Stonnington", "/painter-stonnington"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Stonnington", item: `${BASE_URL}/painter-stonnington/` },
    ]),
  ],
  "/painter-box-hill": [
    suburbService("Box Hill", "/painter-box-hill"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Box Hill", item: `${BASE_URL}/painter-box-hill/` },
    ]),
  ],
  "/painter-croydon": [
    suburbService("Croydon", "/painter-croydon"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Croydon", item: `${BASE_URL}/painter-croydon/` },
    ]),
  ],
  "/painter-doncaster": [
    suburbService("Doncaster", "/painter-doncaster"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Doncaster", item: `${BASE_URL}/painter-doncaster/` },
    ]),
  ],
  "/painter-glen-waverley": [
    suburbService("Glen Waverley", "/painter-glen-waverley"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Glen Waverley", item: `${BASE_URL}/painter-glen-waverley/` },
    ]),
  ],
  "/painter-mckinnon": [
    suburbService("McKinnon", "/painter-mckinnon"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters McKinnon", item: `${BASE_URL}/painter-mckinnon/` },
    ]),
  ],
  "/painter-murrumbeena": [
    suburbService("Murrumbeena", "/painter-murrumbeena"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Murrumbeena", item: `${BASE_URL}/painter-murrumbeena/` },
    ]),
  ],
  "/painter-ormond": [
    suburbService("Ormond", "/painter-ormond"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Ormond", item: `${BASE_URL}/painter-ormond/` },
    ]),
  ],
  "/painter-ringwood": [
    suburbService("Ringwood", "/painter-ringwood"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Ringwood", item: `${BASE_URL}/painter-ringwood/` },
    ]),
  ],
  "/painter-templestowe": [
    suburbService("Templestowe", "/painter-templestowe"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Templestowe", item: `${BASE_URL}/painter-templestowe/` },
    ]),
  ],
  "/painter-wheelers-hill": [
    suburbService("Wheelers Hill", "/painter-wheelers-hill"),
    breadcrumb([
      { name: "Home", item: `${BASE_URL}/` },
      { name: "Painters Wheelers Hill", item: `${BASE_URL}/painter-wheelers-hill/` },
    ]),
  ],
};

// ─── serveStatic ─────────────────────────────────────────────────────────────

export function serveStatic(app: Express) {
  const distPath =
    process.env.NODE_ENV === "development"
      ? path.resolve(import.meta.dirname, "../..", "dist", "public")
      : path.resolve(import.meta.dirname, "public");

  if (!fs.existsSync(distPath)) {
    console.error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`
    );
  }

  // ── 1. Register 301 redirects before static handler ────────────────────────
  for (const [fromPath, toUrl] of Object.entries(REDIRECTS_301)) {
    app.get(fromPath, (_req, res) => res.redirect(301, toUrl));
  }

  // ── 2. Serve static assets (JS, CSS, images, fonts, etc.) ─────────────────
  app.use(express.static(distPath));

  // ── 3. Cache base HTML (refreshed on server restart = every deploy) ────────
  let _baseHtml: string | null = null;
  function getBaseHtml(): string {
    if (!_baseHtml) {
      _baseHtml = fs.readFileSync(path.resolve(distPath, "index.html"), "utf-8");
    }
    return _baseHtml;
  }

  // ── 4. Catch-all: inject per-route meta + noindex + aggregateRating ────────
  app.use("*", (_req, res) => {
    try {
      // Normalise path
      const reqPath =
        _req.path !== "/" && _req.path.endsWith("/")
          ? _req.path.slice(0, -1)
          : _req.path;

      // Noindex for duplicate routes
      if (NOINDEX_PATHS.has(reqPath)) {
        res.set("X-Robots-Tag", "noindex, nofollow");
      }

      // Resolve plural alias → canonical meta key
      const metaKey = PLURAL_ALIAS[reqPath] ?? reqPath;
      const meta: Meta = META[metaKey] ?? {
        title: "Jetblack Painting | Melbourne House Painters",
        description:
          "Jetblack Painting — professional house painters across Melbourne. Interior, exterior and commercial painting. Free quotes. Call 0432 077 782.",
        canonical: `${BASE_URL}${reqPath}`,
      };

      let html = getBaseHtml();

      // Inject aggregateRating + any route-specific schemas before </head>
      const extraSchemas = SCHEMAS_BY_ROUTE[metaKey] ?? SCHEMAS_BY_ROUTE[reqPath] ?? [];
      const allSchemas = [AGGREGATE_RATING_SCHEMA, ...extraSchemas];
      const schemaHtml = allSchemas
        .map((s) => `<script type="application/ld+json">${s}</script>`)
        .join("\n  ");
      html = html.replace("</head>", `\n  ${schemaHtml}\n</head>`);

      // Replace <title>
      html = html.replace(
        /<title>[^<]*<\/title>/i,
        `<title>${escapeAttr(meta.title)}</title>`
      );

      // Replace <meta name="description">
      html = html.replace(
        /<meta\s+name="description"[^>]*>/i,
        `<meta name="description" content="${escapeAttr(meta.description)}" />`
      );

      // Replace <link rel="canonical"> — KEY FIX for the homepage canonical
      // appearing on every suburb page
      html = html.replace(
        /<link\s+rel="canonical"[^>]*>/i,
        `<link rel="canonical" href="${meta.canonical}" />`
      );

      // Replace Open Graph tags
      html = html
        .replace(
          /<meta\s+property="og:title"[^>]*>/i,
          `<meta property="og:title" content="${escapeAttr(meta.title)}" />`
        )
        .replace(
          /<meta\s+property="og:description"[^>]*>/i,
          `<meta property="og:description" content="${escapeAttr(meta.description)}" />`
        )
        .replace(
          /<meta\s+property="og:url"[^>]*>/i,
          `<meta property="og:url" content="${meta.canonical}" />`
        );

      res.status(200).set({ "Content-Type": "text/html" }).send(html);
    } catch (err) {
      console.error("Meta injection error:", err);
      res.sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
