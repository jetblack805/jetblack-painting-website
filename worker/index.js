// Redirect www.jetblackpainting.com → jetblackpainting.com, apply path
// redirects, then serve static assets.

// Consolidated pages: pre-sale and rental property painting are now covered
// by the single Real Estate Painting service. 301 the old URLs so their SEO
// value flows to the new page and no visitor hits a 404.
const PATH_REDIRECTS = {
  "/services/pre-sale-property-painting": "/services/real-estate-painting/",
  "/services/rental-property-painting": "/services/real-estate-painting/",
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
