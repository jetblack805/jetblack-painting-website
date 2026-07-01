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

function sm(suburb: string, slug: string, customTitle?: string): Meta {
  return {
    title:
      customTitle ??
      `${suburb} Painters | Professional House Painting | Jetblack Painting`,
    description: `Jetblack Painting provides professional interior, exterior and commercial painting in ${suburb}, Melbourne. Fully insured, 5-star rated. Free written quotes — call 0432 077 782.`,
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
  "/painter-mordialloc":          sm("Mordialloc",          "/painter-mordialloc"),
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

      // Inject aggregateRating schema before </head>
      html = html.replace(
        "</head>",
        `<script type="application/ld+json">${AGGREGATE_RATING_SCHEMA}</script></head>`
      );

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
