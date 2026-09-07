import { KNOWN_PATHS } from "./known-paths.js";
import { handleQuoteRequest } from "./quote.js";

// Redirect www.jetblackpainting.com → jetblackpainting.com, apply path
// redirects, then serve static assets.

const PATH_REDIRECTS = {
  // Consolidated service pages
  "/services/pre-sale-property-painting": "/services/real-estate-painting/",
  "/services/rental-property-painting":   "/services/real-estate-painting/",

  // Legacy short-form service URLs → canonical /services/ paths
  "/interior-painting":           "/services/interior-painting/",
  "/kitchen-cabinet-resurfacing": "/services/kitchen-cabinet-resurfacing/",

  // A country-code path from an older version of the site. It still carries the
  // only genuine editorial backlink pointing at this domain — an article on
  // transportation-industry.com links to www.jetblackpainting.com/au/ — and it
  // was landing on a hard 404, so that link passed nothing.
  "/au":  "/",
  "/au/": "/",

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
  "/painters-bentleigh-east":       "/painter-bentleigh/",
  "/painters-caulfield":            "/painter-caulfield/",
  "/painters-hampton":              "/painter-hampton/",
  "/painters-hampton-east":         "/painter-hampton-east/",
  "/painters-mordialloc":           "/painter-mordialloc/",
  "/painters-keysborough":          "/keysborough-painters/",
  "/painter-keysborough":           "/keysborough-painters/",

  // Merged suburb pages. The page is gone; the 301 keeps whatever
  // authority it had and lands the visitor on the suburb that now covers
  // it. Bentleigh East produced zero head-term impressions in two months
  // while sitting beside /painter-bentleigh/ (276) and competing with it
  // for the same searcher — merged 2026-08-29.
  "/painter-bentleigh-east":        "/painter-bentleigh/",
  "/painters-kew":                  "/painter-kew/",
  "/painters-sandringham":          "/painter-sandringham/",
  "/painters-seaford":              "/painter-seaford/",
  "/painters-mentone":              "/painter-mentone/",
  "/painters-carlton":              "/painter-carlton/",
  "/painters-mornington-peninsula": "/painter-mornington-peninsula/",
  "/painters-canterbury":           "/painter-canterbury/",
  "/painters-lyndhurst":            "/painter-lyndhurst/",
  "/painters-rowville":             "/painter-rowville/",
  "/painters-wantirna-south":       "/painter-wantirna-south/",
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
  "/painters-clyde":                "/painter-clyde/",
  "/painters-hastings":             "/painter-hastings/",

  // Legacy hash-anchor routes (rendered Home, treated as duplicate by Google)
  "/about":                         "/",
  "/contact":                       "/",
  "/our-work":                      "/",
};

// True when the client explicitly asked for Markdown. Matches `text/markdown`
// as a whole media type in the Accept list — a plain substring test would also
// fire on something like `text/markdown-foo`, and `text/*` is deliberately not
// treated as a request for Markdown since browsers send it alongside text/html.
function acceptsMarkdown(request) {
  return (request.headers.get("Accept") || "")
    .split(",")
    .some((part) => part.trim().split(";")[0].toLowerCase() === "text/markdown");
}

// Resolve a pathname to its canonical form on the apex host, or null if it is
// already canonical (or unknown, in which case the normal 404 path handles it).
//
// This exists so the www -> apex 301 can land on the FINAL URL in one hop.
// Previously www.jetblackpainting.com/painters-bentleigh took two: a 301 to the
// apex plural, then a second 301 to /painter-bentleigh/. Google follows chains
// but discounts them, and that exact URL was sitting in "Crawled - currently
// not indexed" in the 2026-09-07 drilldown.
//
// It deliberately mirrors — and must be kept in step with — the redirect order
// in fetch() below: explicit table, then guarded plural fallback, then
// trailing-slash canonicalisation. It does not replicate the colon guard, which
// answers 404 rather than redirecting; a www URL with a colon simply lands on
// the apex and is refused there.
function canonicalPathname(pathname) {
  const path = pathname.replace(/\/$/, "") || "/";

  const mapped = PATH_REDIRECTS[path];
  if (mapped) return mapped;

  if (path.startsWith("/painters-")) {
    const singular = path.replace("/painters-", "/painter-");
    if (KNOWN_PATHS.has(`${singular}/`) || KNOWN_PATHS.has(singular)) {
      return `${singular}/`;
    }
  }

  if (pathname.startsWith("/assets/") || KNOWN_PATHS.has(pathname)) return null;
  const slashed = pathname.endsWith("/") ? pathname : `${pathname}/`;
  if (KNOWN_PATHS.has(slashed) && !pathname.endsWith("/")) return slashed;

  return null;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      url.protocol = "https:";
      // Collapse the host change and any path canonicalisation into one 301
      // rather than handing the crawler a two-hop chain.
      const canonical = canonicalPathname(url.pathname);
      if (canonical) url.pathname = canonical;
      return Response.redirect(url.toString(), 301);
    }

    // Handled before any redirect or known-path logic: /api/quote is not a page
    // and must never be trailing-slash redirected or 404'd by the SPA rules
    // below. robots.txt already disallows /api/.
    if (url.pathname === "/api/quote") {
      return handleQuoteRequest(request, env);
    }

    const path = url.pathname.replace(/\/$/, "") || "/";
    const target = PATH_REDIRECTS[path];
    if (target) {
      return Response.redirect(`${url.origin}${target}`, 301);
    }

    // Fallback: canonicalise common plural suburb aliases. If a /painters-<slug>
    // path was not explicitly mapped above, redirect it to the singular
    // /painter-<slug>/ form so ranking signals consolidate onto the canonical.
    //
    // Guarded on KNOWN_PATHS. Unguarded, this rewrote *any* plural path and
    // 301'd it onto a page that does not exist — /painters-madeupsuburb became
    // a 301 to a 404. Google follows the redirect, lands on the 404 and books
    // the original as a redirect error, so the fallback was manufacturing the
    // exact bucket it was meant to clean up. /painter-lyndhurst/ in the
    // 2026-09-07 "Not found" drilldown is the live example: no Lyndhurst page
    // has ever existed in this repo, yet /painters-lyndhurst pointed at it.
    // A plural whose singular is not a real page now falls through to the
    // ordinary 404 below, which is the honest answer for a URL that never was.
    if (path.startsWith("/painters-")) {
      const singular = path.replace("/painters-", "/painter-");
      if (KNOWN_PATHS.has(`${singular}/`) || KNOWN_PATHS.has(singular)) {
        return Response.redirect(`${url.origin}${singular}/`, 301);
      }
    }

    // A path containing a colon never belongs to this site, and left alone the
    // assets binding answers it with a 307 to the percent-encoded form
    // (/assets/index-abc.js:2:77119 -> /assets/index-abc.js%3A2%3A77119), which
    // then 404s. Google reported the three it had found under Soft 404 in the
    // 2026-09-07 Coverage export: it follows the temporary redirect and judges
    // what it lands on. Same failure mode the trailing-slash 301 below exists to
    // pre-empt — answer it ourselves before the assets binding can 307.
    //
    // These URLs come from JS stack traces and source-map references
    // (bundle.js:line:column), so they are never legitimate and never will be.
    // Guarded on KNOWN_PATHS so a real path could never be caught by it —
    // verified that zero entries in known-paths.js contain a colon.
    if (url.pathname.includes(":") && !KNOWN_PATHS.has(url.pathname)) {
      return new Response("Not Found", {
        status: 404,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
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

    // Markdown content negotiation ("Markdown for Agents").
    //
    // AI agents that send `Accept: text/markdown` get the Markdown twin of the
    // page (generated at build time by scripts/generate-markdown.mjs), which is
    // the same content without the markup, styling and script tags — far fewer
    // tokens to read. Browsers never send that Accept value, so they are
    // unaffected and still get the HTML.
    //
    // Only real pages qualify: `slashed` is the directory form, so this can
    // never fire for build assets or for extensionless standalone files such as
    // the Search Console verification file.
    if (!isBuildAsset && KNOWN_PATHS.has(slashed) && acceptsMarkdown(request)) {
      const markdownUrl = new URL(url);
      markdownUrl.pathname = `${slashed}index.md`;
      const markdown = await env.ASSETS.fetch(new Request(markdownUrl, { method: "GET" }));

      // Falls through to the normal HTML response if the twin is missing, so a
      // page that somehow lacks one still serves rather than 404-ing.
      if (markdown.status === 200) {
        const markdownHeaders = new Headers();
        markdownHeaders.set("Content-Type", "text/markdown; charset=utf-8");
        markdownHeaders.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
        // Two representations live at one URL, so caches must key on Accept.
        markdownHeaders.set("Vary", "Accept");
        // Belt and braces on top of Vary: never let a Markdown response sit in
        // a shared cache where a browser could be handed it instead of HTML.
        markdownHeaders.set("Cache-Control", "no-store");
        // The .md twin duplicates page content. Nothing links to it and it is
        // not in the sitemap, but keep it out of the index regardless.
        markdownHeaders.set("X-Robots-Tag", "noindex");
        return new Response(markdown.body, { status: 200, headers: markdownHeaders });
      }
    }

    const response = await env.ASSETS.fetch(request);
    const headers = new Headers(response.headers);
    headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");

    // Long-lived cache for immutable hashed assets (JS/CSS bundles with content hash in filename)
    // and for stable public images (og-image.jpg, hero-poolhouse.webp etc.)
    //
    // ⚠️ The previous pattern here was /\.[a-f0-9]{8,}\.(js|css|woff2?)$/ and it
    // never matched anything, so every bundle was served with the default
    // `max-age=0, must-revalidate` and repeat visitors revalidated all ~141
    // chunks on every navigation. It assumed `name.hash.ext` with a lowercase
    // hex hash; Vite actually emits `name-hash.ext` with a base64url hash —
    // `index-BEiJaWzV.js`, `index-FvSxDLw8.css`, `vendor-animation-D3Hbm0mm.js`.
    // Both the separator and the alphabet were wrong, so the test could not
    // succeed for any real filename. The isStaticImage branch below did work,
    // which is why /og-image.jpg cached correctly and masked the problem.
    //
    // Scoped to /assets/ deliberately: that is the only place Vite writes build
    // output, and everything it writes there is content-hashed, so a change
    // always produces a new filename. Names themselves contain hyphens
    // ("vendor-animation-D3Hbm0mm.js"), so the pattern anchors on the LAST
    // hash-shaped segment before the extension.
    const pathname = url.pathname;
    const isHashedAsset = /^\/assets\/.+[.-][A-Za-z0-9_-]{8,}\.(js|css|woff2?)$/.test(pathname);
    const isStaticImage = /\.(jpg|jpeg|png|webp|avif|gif|ico|svg)$/.test(pathname);
    if (isHashedAsset) {
      headers.set("Cache-Control", "public, max-age=31536000, immutable");
    } else if (isStaticImage) {
      headers.set("Cache-Control", "public, max-age=2592000");
    }

    // The Markdown twins are also reachable at their literal /…/index.md path,
    // not just through Accept negotiation above. Nothing links to them and they
    // are not in the sitemap, but they duplicate page content, so make sure a
    // crawler that finds one anyway does not index it.
    if (pathname.endsWith(".md")) {
      headers.set("X-Robots-Tag", "noindex");
    }

    // /social/ holds JPEG twins of the project photos, built by
    // scripts/make-social-jpegs.mjs purely so Google Business Profile can fetch
    // a post image — GBP will not accept the webp originals. They are the same
    // photographs already published under /projects/, so letting them be indexed
    // separately would put a duplicate copy of every project image in Google
    // Images for no gain.
    //
    // noindex by header, NOT a robots.txt Disallow: Google fetches the post
    // image itself, and a Disallow risks blocking that fetch and failing the
    // post. A noindex header keeps the file fetchable while keeping it out of
    // the index, which is exactly the split we want.
    if (pathname.startsWith("/social/")) {
      headers.set("X-Robots-Tag", "noindex");
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

    // The /assets/ exemption above is necessary — hashed bundle names aren't
    // known until after `vite build`, so they can't be enumerated in
    // KNOWN_PATHS — but on its own it re-opens the soft 404 for that one
    // prefix: a missing /assets/anything.js falls through to the SPA fallback
    // and answers 200 with index.html, exactly the thing the block above
    // exists to stop.
    //
    // A real bundle under /assets/ is JS, CSS, a font or an image; nothing
    // there is ever legitimately HTML. So an HTML content-type under that
    // prefix means the file was not found and the fallback answered — which
    // is a 404, not a page. Keyed off the response rather than a filename
    // pattern so it stays correct whatever Vite names its chunks.
    if (
      KNOWN_PATHS.size > 0 &&
      response.status === 200 &&
      isBuildAsset &&
      (response.headers.get("content-type") || "").includes("text/html")
    ) {
      return new Response(response.body, { status: 404, statusText: "Not Found", headers });
    }

    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
