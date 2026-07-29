import { KNOWN_PATHS } from "./known-paths.js";

// Redirect www.jetblackpainting.com → jetblackpainting.com, apply path
// redirects, then serve static assets.

const PATH_REDIRECTS = {
  // Consolidated service pages
  "/services/pre-sale-property-painting": "/services/real-estate-painting/",
  "/services/rental-property-painting":   "/services/real-estate-painting/",

  // Legacy short-form service URLs → canonical /services/ paths
  "/interior-painting":           "/services/interior-painting/",
  "/kitchen-cabinet-resurfacing": "/services/kitchen-cabinet-resurfacing/",

  // Ghost blog routes (duplicate suburb/service content) → canonical pages
  "/blog/toorak-painting-guide":        "/painter-toorak/",
  "/blog/brighton-painters-guide":      "/painter-brighton/",
  "/blog/camberwell-painters-guide":    "/painter-camberwell/",
  "/blog/glen-waverley-painting-guide": "/painter-glen-waverley/",
  "/blog/hawthorn-painting-services":   "/painter-hawthorn/",
  "/blog/commercial-vs-residential":    "/services/commercial-painting/",
  "/blog/exterior-paint-protection":    "/services/exterior-painting/",
  "/blog/exterior-painting-preparation":"/blog/prepare-home-for-painting/",
  "/blog/how-to-choose-painter":        "/blog/prepare-home-for-painting/",
  "/blog/interior-painting-cost-guide": "/blog/house-painting-cost-melbourne/",
  "/blog/paint-color-trends-2024":      "/blog/best-paint-colours-melbourne-2025/",
  "/blog/seasonal-painting-guide":      "/blog/prepare-home-for-painting/",
  "/blog/best-paint-colors-melbourne":  "/blog/best-paint-colours-melbourne-2025/",

  // Plural suburb aliases → canonical singular URLs
  "/painters-toorak":               "/painter-toorak/",
  "/painters-malvern":              "/painter-malvern/",
  "/painters-malvern-east":         "/painter-malvern-east/",
  "/painters-brighton":             "/painter-brighton/",
  "/painters-camberwell":           "/painter-camberwell/",
  "/painters-hawthorn":             "/painter-hawthorn/",
  "/painters-bentleigh":            "/painter-bentleigh/",
  "/painters-bentleigh-east":       "/painter-bentleigh-east/",
  "/painters-caulfield":            "/painter-caulfield/",
  "/painters-hampton":              "/painter-hampton/",
  "/painters-hampton-east":         "/painter-hampton-east/",
  "/painters-mordialloc":           "/painter-mordialloc/",
  "/painters-keysborough":          "/keysborough-painters/",
  "/painter-keysborough":           "/keysborough-painters/",
  "/painters-kew":                  "/painter-kew/",
  "/painters-sandringham":          "/painter-sandringham/",
  "/painters-seaford":              "/painter-seaford/",
  "/painters-mentone":              "/painter-mentone/",
  "/painters-carlton":              "/painter-carlton/",
  "/painters-mornington-peninsula": "/painter-mornington-peninsula/",
  "/painters-bayside":              "/painter-bayside/",
  "/painters-kingston":             "/painter-kingston/",
  "/painters-greater-dandenong":    "/painter-greater-dandenong/",
  "/painters-armadale":             "/painter-armadale/",
  "/painters-berwick":              "/painter-berwick/",
  "/painters-dandenong":            "/painter-dandenong/",
  "/painters-donvale":              "/painter-donvale/",
  "/painters-dromana":              "/painter-dromana/",
  "/painters-moorabbin":            "/painter-moorabbin/",
  "/painters-stonnington":          "/painter-stonnington/",
  "/painters-box-hill":             "/painter-box-hill/",
  "/painters-cranbourne":           "/painter-cranbourne/",
  "/painters-croydon":              "/painter-croydon/",
  "/painters-doncaster":            "/painter-doncaster/",
  "/painters-glen-waverley":        "/painter-glen-waverley/",
  "/painters-mckinnon":             "/painter-mckinnon/",
  "/painters-narre-warren":         "/painter-narre-warren/",
  "/painters-murrumbeena":          "/painter-murrumbeena/",
  "/painters-ormond":               "/painter-ormond/",
  "/painters-ringwood":             "/painter-ringwood/",
  "/painters-rosebud":              "/painter-rosebud/",
  "/painters-templestowe":          "/painter-templestowe/",
  "/painters-thornbury":            "/painter-thornbury/",
  "/painters-wheelers-hill":        "/painter-wheelers-hill/",
  "/painters-windsor":              "/painter-windsor/",
  "/painters-cheltenham":           "/painter-cheltenham/",
  "/painters-parkdale":             "/painter-parkdale/",
  "/painters-patterson-lakes":      "/painter-patterson-lakes/",
  "/painters-aspendale":            "/painter-aspendale/",
  "/painters-aspendale-gardens":    "/painter-aspendale-gardens/",
  "/painters-chelsea":              "/painter-chelsea/",
  "/painters-chelsea-heights":      "/painter-chelsea-heights/",
  "/painters-south-yarra":          "/painter-south-yarra/",
  "/painters-elsternwick":          "/painter-elsternwick/",
  "/painters-beaumaris":            "/painter-beaumaris/",
  "/painters-black-rock":           "/painter-black-rock/",
  "/painters-brighton-east":        "/painter-brighton-east/",
  "/painters-highett":              "/painter-highett/",
  "/painters-heatherton":           "/painter-heatherton/",
  "/painters-edithvale":            "/painter-edithvale/",
  "/painters-bonbeach":             "/painter-bonbeach/",
  "/painters-carrum":               "/painter-carrum/",
  "/painters-oakleigh":             "/painter-oakleigh/",
  "/painters-clarinda":             "/painter-clarinda/",
  "/painters-dingley-village":      "/painter-dingley-village/",
  "/painters-chadstone":            "/painter-chadstone/",
  "/painters-frankston":            "/painter-frankston/",
  "/painters-frankston-south":      "/painter-frankston-south/",
  "/painters-mornington":           "/painter-mornington/",
  "/painters-mount-eliza":          "/painter-mount-eliza/",
  "/painters-glen-iris":            "/painter-glen-iris/",
  "/painters-prahran":              "/painter-prahran/",
  "/painters-balwyn":               "/painter-balwyn/",
  "/painters-mount-martha":         "/painter-mount-martha/",
  "/painters-elwood":               "/painter-elwood/",
  "/painters-st-kilda":             "/painter-st-kilda/",
  "/painters-port-melbourne":       "/painter-port-melbourne/",
  "/painters-albert-park":          "/painter-albert-park/",
  "/painters-fitzroy":              "/painter-fitzroy/",
  "/painters-clyde-north":          "/painter-clyde-north/",
  "/painters-collingwood":          "/painter-collingwood/",
  "/painters-richmond":             "/painter-richmond/",
  "/painters-northcote":            "/painter-northcote/",
  "/painters-brunswick":            "/painter-brunswick/",
  "/painters-south-melbourne":      "/painter-south-melbourne/",
  "/painters-carnegie":             "/painter-carnegie/",
  "/painters-hughesdale":           "/painter-hughesdale/",
  "/painters-braeside":             "/painter-braeside/",
  "/painters-waterways":            "/painter-waterways/",
  "/painters-safety-beach":         "/painter-safety-beach/",
  "/painters-rye":                  "/painter-rye/",
  "/painters-hampton-park":         "/painter-hampton-park/",
  "/painters-endeavour-hills":      "/painter-endeavour-hills/",
  "/painters-sorrento":             "/painter-sorrento/",
  "/painters-somerville":           "/painter-somerville/",

  // Legacy hash-anchor routes (rendered Home, treated as duplicate by Google)
  "/about":                         "/",
  "/contact":                       "/",
  "/our-work":                      "/",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.replace(/\/$/, "") || "/";
    const target = PATH_REDIRECTS[path];
    if (target) {
      return Response.redirect(`${url.origin}${target}`, 301);
    }

    // Canonical URLs on this site all end in a slash. Left to itself, the assets
    // binding normalises /painter-x to /painter-x/ with a 307 — a *temporary*
    // redirect, which tells Google not to consolidate ranking signals onto the
    // target and to keep re-checking the old URL. That is what fills the "Page
    // with redirect" and "Redirect error" buckets in Search Console. Issue the
    // 301 ourselves, before the assets binding gets a chance to 307.
    // Vite's hashed JS/CSS/font bundles live under /assets/ with a content
    // hash in the filename that isn't known until `vite build` runs — which
    // happens *after* generate-known-paths.mjs, so these can't be enumerated
    // ahead of time the way every other static file can. This is the only
    // path prefix exempted from the known-paths check below; every other
    // extensioned path (including ones that only look like real files, e.g.
    // /openapi.json, /.well-known/mcp.json) is checked like any other URL.
    const isBuildAsset = url.pathname.startsWith("/assets/");
    const slashed = url.pathname.endsWith("/") ? url.pathname : `${url.pathname}/`;
    // Exact match covers extensionless files such as the Search Console
    // verification file, which is served at /googlebc9e... with no trailing
    // slash. Those must never be redirected to a slash form.
    const isKnownExact = KNOWN_PATHS.has(url.pathname);
    const isKnownPage = isKnownExact || KNOWN_PATHS.has(slashed);

    if (!isBuildAsset && !isKnownExact && KNOWN_PATHS.has(slashed) && !url.pathname.endsWith("/")) {
      return Response.redirect(`${url.origin}${slashed}${url.search}${url.hash}`, 301);
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

    // Long-lived cache for immutable hashed assets (JS/CSS bundles with content hash in filename)
    // and for stable public images (hero-background.jpg, og-image.jpg etc.)
    const pathname = url.pathname;
    const isHashedAsset = /\.[a-f0-9]{8,}\.(js|css|woff2?)$/.test(pathname);
    const isStaticImage = /\.(jpg|jpeg|png|webp|avif|gif|ico|svg)$/.test(pathname);
    if (isHashedAsset) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (isStaticImage) {
      headers.set("Cache-Control", "public, max-age=2592000");
    }

    // RFC 8288 Link headers on real HTML pages, pointing agents at resources
    // that actually exist: the canonical URL (same value as the in-page meta
    // tag, exposed here too for agents that read headers without parsing
    // HTML), llms.txt (the AI-guidance document this site publishes), and the
    // FAQ page (registered "help" relation). Deliberately does not advertise
    // an api-catalog, service-desc, or similar RFC 9727 relation — this site
    // has no public API for those to describe.
    if (response.status === 200 && (response.headers.get("content-type") || "").includes("text/html")) {
      const canonicalUrl = `${url.origin}${slashed}`;
      headers.set(
        "Link",
        `<${canonicalUrl}>; rel="canonical", <${url.origin}/llms.txt>; rel="describedby", <${url.origin}/faq/>; rel="help"`,
      );
    }

    // Cloudflare's SPA fallback answers *every* unmatched path with index.html
    // and HTTP 200. That turns any bad URL pointing at this domain — old Manus
    // paths, /au/, typos, scraper noise — into something Google treats as a real
    // page, then files under "Soft 404" in Search Console while it burns crawl
    // budget re-checking them.
    //
    // Real pages keep their 200. Unknown paths still render the app (so a human
    // who mistypes a URL gets the site, not a bare error) but carry a 404 status,
    // which is what tells Google the URL does not exist.
    //
    // Deliberately fails open: if KNOWN_PATHS is ever empty — a broken or skipped
    // generator run — every path stays 200 rather than 404-ing the whole site.
    if (KNOWN_PATHS.size > 0 && response.status === 200 && !isBuildAsset && !isKnownPage) {
      return new Response(response.body, { status: 404, statusText: "Not Found", headers });
    }

    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
