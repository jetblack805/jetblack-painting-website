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

    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  },
};
