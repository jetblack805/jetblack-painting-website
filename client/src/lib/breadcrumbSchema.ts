// Builds a Schema.org BreadcrumbList.
//
// SEOHead removes the pre-rendered JSON-LD once React mounts, so every page that
// ships a breadcrumb in its static HTML (scripts/generate-static-pages.mjs) must
// also ship one here — otherwise Google's rendered pass sees fewer items than
// the raw HTML pass.
//
// `url` may be an absolute URL or a site-relative path.
const SITE_URL = "https://jetblackpainting.com";

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.url.startsWith("http") ? entry.url : `${SITE_URL}${entry.url}`,
    })),
  };
}
