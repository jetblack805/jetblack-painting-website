// Redirect www.jetblackpainting.com → jetblackpainting.com, apply path
// redirects, then serve static assets.

const PATH_REDIRECTS = {
  // Consolidated service pages
  "/services/pre-sale-property-painting": "/services/real-estate-painting/",
  "/services/rental-property-painting": "/services/real-estate-painting/",

  // Plural suburb aliases → canonical singular URLs
  "/painters-toorak":               "/painter-toorak/",
  "/painters-malvern":              "/painter-malvern/",
  "/painters-brighton":             "/painter-brighton/",
  "/painters-camberwell":           "/painter-camberwell/",
  "/painters-hawthorn":             "/painter-hawthorn/",
  "/painters-bentleigh":            "/painter-bentleigh/",
  "/painters-caulfield":            "/painter-caulfield/",
  "/painters-hampton":              "/painter-hampton/",
  "/painters-mordialloc":           "/painter-mordialloc/",
  "/painters-keysborough":          "/keysborough-painters/",
  "/painters-kew":                  "/painter-kew/",
  "/painters-sandringham":          "/painter-sandringham/",
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
  "/painters-moorabbin":            "/painter-moorabbin/",
  "/painters-stonnington":          "/painter-stonnington/",
  "/painters-box-hill":             "/painter-box-hill/",
  "/painters-croydon":              "/painter-croydon/",
  "/painters-doncaster":            "/painter-doncaster/",
  "/painters-glen-waverley":        "/painter-glen-waverley/",
  "/painters-mckinnon":             "/painter-mckinnon/",
  "/painters-murrumbeena":          "/painter-murrumbeena/",
  "/painters-ormond":               "/painter-ormond/",
  "/painters-ringwood":             "/painter-ringwood/",
  "/painters-templestowe":          "/painter-templestowe/",
  "/painters-wheelers-hill":        "/painter-wheelers-hill/",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.hostname.startsWith("www.")) {
      url.hostname = url.hostname.slice(4);
      return Response.redirect(url.toString(), 301);
    }

    const path = url.pathname.replace(/\/$/, "") || "/";
    const target = PATH_REDIRECTS[path];
    if (target) {
      return Response.redirect(`${url.origin}${target}`, 301);
    }

    return env.ASSETS.fetch(request);
  },
};
