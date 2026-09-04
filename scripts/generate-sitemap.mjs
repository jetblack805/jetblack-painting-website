import fs from "node:fs";
import path from "node:path";

const SITE_URL = "https://jetblackpainting.com";
const OUT_PATH = path.resolve("public/sitemap.xml");

const ROUTES = [
  { path: "/",                                                 priority: "1.0", changefreq: "weekly"  },
  { path: "/services/interior-painting/",                       priority: "0.8", changefreq: "monthly" },
  { path: "/services/exterior-painting/",                       priority: "0.8", changefreq: "monthly" },
  { path: "/services/roof-painting/",                           priority: "0.8", changefreq: "monthly" },
  { path: "/services/commercial-painting/",                     priority: "0.8", changefreq: "monthly" },
  { path: "/services/roof-fence-painting/",                     priority: "0.7", changefreq: "monthly" },
  { path: "/services/kitchen-cabinet-resurfacing/",             priority: "0.7", changefreq: "monthly" },
  { path: "/services/real-estate-painting/",                    priority: "0.8", changefreq: "monthly" },
  { path: "/services/body-corporate-painting/",                 priority: "0.8", changefreq: "monthly" },
  { path: "/services/epoxy-flooring/",                          priority: "0.8", changefreq: "monthly" },
  { path: "/services/bathroom-tile-resurfacing/",              priority: "0.8", changefreq: "monthly" },
  { path: "/services/property-maintenance/",                   priority: "0.8", changefreq: "monthly" },
  { path: "/keysborough-painters/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-toorak/",                                  priority: "0.9", changefreq: "monthly" },
  { path: "/painter-malvern/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-malvern-east/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-brighton/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-camberwell/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-hawthorn/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-bentleigh/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-caulfield/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-hampton/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-hampton-east/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mordialloc/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-kew/",                                     priority: "0.9", changefreq: "monthly" },
  { path: "/painter-sandringham/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-seaford/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mentone/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-carlton/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mornington-peninsula/",                    priority: "0.9", changefreq: "monthly" },
  { path: "/painter-bayside/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-kingston/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-armadale/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-donvale/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-dromana/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-moorabbin/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-stonnington/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-box-hill/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-croydon/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-doncaster/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-glen-waverley/",                           priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mckinnon/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-narre-warren/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-murrumbeena/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-ormond/",                                  priority: "0.9", changefreq: "monthly" },
  { path: "/painter-ringwood/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-rosebud/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-templestowe/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-thornbury/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-wheelers-hill/",                           priority: "0.9", changefreq: "monthly" },
  { path: "/painter-windsor/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-cheltenham/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-parkdale/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-patterson-lakes/",                         priority: "0.9", changefreq: "monthly" },
  { path: "/painter-aspendale/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-aspendale-gardens/",                       priority: "0.9", changefreq: "monthly" },
  { path: "/painter-chelsea/",                                 priority: "0.9", changefreq: "monthly" },
  { path: "/painter-chelsea-heights/",                         priority: "0.9", changefreq: "monthly" },
  { path: "/painter-south-yarra/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-elsternwick/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-beaumaris/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-black-rock/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-brighton-east/",                         priority: "0.9", changefreq: "monthly" },
  { path: "/painter-highett/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-heatherton/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-edithvale/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-bonbeach/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-carrum/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-oakleigh/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-clarinda/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-dingley-village/",                        priority: "0.9", changefreq: "monthly" },
  { path: "/painter-chadstone/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-frankston/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-frankston-south/",                        priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mornington/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mount-eliza/",                           priority: "0.9", changefreq: "monthly" },
  { path: "/painter-glen-iris/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-prahran/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-balwyn/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-mount-martha/",                          priority: "0.9", changefreq: "monthly" },
  { path: "/painter-elwood/",                                priority: "0.9", changefreq: "monthly" },
  { path: "/painter-st-kilda/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-port-melbourne/",                        priority: "0.9", changefreq: "monthly" },
  { path: "/painter-albert-park/",                           priority: "0.9", changefreq: "monthly" },
  { path: "/painter-fitzroy/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-collingwood/",                           priority: "0.9", changefreq: "monthly" },
  { path: "/painter-richmond/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-northcote/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-brunswick/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-south-melbourne/",                       priority: "0.9", changefreq: "monthly" },
  { path: "/painter-carnegie/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-hughesdale/",                            priority: "0.9", changefreq: "monthly" },
  { path: "/painter-braeside/",                              priority: "0.9", changefreq: "monthly" },
  { path: "/painter-waterways/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-safety-beach/",                          priority: "0.9", changefreq: "monthly" },
  { path: "/painter-rye/",                                   priority: "0.9", changefreq: "monthly" },
  { path: "/painter-sorrento/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/painter-somerville/",                             priority: "0.9", changefreq: "monthly" },
  { path: "/painter-hastings/",                               priority: "0.9", changefreq: "monthly" },
  { path: "/blog/",                                             priority: "0.6", changefreq: "weekly"  },
  { path: "/blog/best-paint-colours-melbourne-2025/",           priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/house-painting-cost-melbourne/",               priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/prepare-home-for-painting/",                   priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/kitchen-cabinet-resurfacing-vs-replacement/",  priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/mould-remediation-painting-melbourne/",         priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/how-to-choose-a-painter-melbourne/",            priority: "0.5", changefreq: "yearly"  },
  { path: "/blog/how-to-paint-a-weatherboard-house-melbourne/", priority: "0.5", changefreq: "yearly"  },
  // <generated-blog-routes>
  { path: "/blog/spray-vs-brush-painting-melbourne/", priority: "0.5", changefreq: "yearly" },
  { path: "/blog/painting-melbourne-winter/", priority: "0.5", changefreq: "yearly" },
  { path: "/blog/why-exterior-paint-fails/", priority: "0.5", changefreq: "yearly" },
  { path: "/blog/paint-sheen-levels-explained/", priority: "0.5", changefreq: "yearly" },
// </generated-blog-routes>
  { path: "/faq/",                                              priority: "0.5", changefreq: "monthly" },
  // /review-us/ is deliberately absent: it is noindex (a thin utility page),
  // and listing a noindex URL in the sitemap sends Google contradictory signals.
];

const today = new Date().toISOString().split("T")[0];

// lastmod is a freshness signal, so it must only move for pages that actually
// changed. This script used to stamp `today` onto all 114 URLs on every run,
// which told Google the entire site was rewritten whenever one suburb page was
// edited. Instead we carry forward each URL's existing lastmod and only bump
// the routes named on the command line:
//
//   node scripts/generate-sitemap.mjs /painter-sorrento/ /painter-rye/
//
// URLs new to ROUTES (no previous entry) get today's date automatically.
const existingLastmod = new Map();
if (fs.existsSync(OUT_PATH)) {
  const previous = fs.readFileSync(OUT_PATH, "utf-8");
  const entry = /<loc>([^<]+)<\/loc>\s*<lastmod>([^<]+)<\/lastmod>/g;
  let m;
  while ((m = entry.exec(previous)) !== null) {
    existingLastmod.set(m[1].replace(SITE_URL, ""), m[2]);
  }
}

const touched = new Set(process.argv.slice(2));
for (const route of touched) {
  if (!ROUTES.some(r => r.path === route)) {
    console.warn(`Warning: --touch route "${route}" is not in ROUTES and was ignored.`);
  }
}

const lastmodFor = (routePath) =>
  touched.has(routePath) ? today : existingLastmod.get(routePath) ?? today;

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.map(r => `  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${lastmodFor(r.path)}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;

fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
fs.writeFileSync(OUT_PATH, xml, "utf-8");
console.log(`Sitemap written to ${OUT_PATH} with ${ROUTES.length} URLs (${touched.size} lastmod bumped to ${today}).`);
