/*
 * Design: Luxury Black & Gold — cream trust section
 * "The difference is in the details" — hairline-ruled columns, serif accents.
 * All credential copy is real and crawlable (SEO/AEO).
 */

import siteConfig from "@/site-config.json";

export default function TrustBadges() {
  const badges = [
    {
      mark: "13+",
      title: "Years Experience",
      description: "Over a decade delivering high-quality finishes across Melbourne, trusted since 2011.",
    },
    {
      mark: "✦",
      title: "$10M Public Liability",
      description: "Fully licensed and insured — a VIC registered painting contractor.",
    },
    {
      mark: "✦",
      title: "5-Year Written Guarantee",
      description: "Every project backed by our written workmanship guarantee.",
    },
    {
      mark: "✦",
      title: "Premium Products",
      description: "We use trusted Dulux and Taubmans products for beautiful, long-lasting results.",
    },
    {
      mark: "✦",
      title: "5-Star Google Rating",
      description: "2,500+ residential and commercial projects completed, 5.0-rated on Google.",
    },
  ];

  return (
    <section className="py-24 lg:py-28 bg-[#F5F1E8]" aria-label="Trust and credentials">
      <div className="container max-w-6xl">
        {/* #85622A, not the site's usual #B0863C gold: on this section's
            #F5F1E8 cream background #B0863C only hits ~2.95:1 contrast,
            failing WCAG AA (needs 3:1 minimum). #85622A is the same bronze
            hue darkened to ~4.93:1. Everywhere else #B0863C sits on dark
            backgrounds where it already passes, so it's untouched there. */}
        <span className="lux-eyebrow text-[#85622A]">Why Jetblack</span>
        <h2 className="text-3xl lg:text-4xl text-[#1A1A1A]">
          The difference is in the details
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-10 gap-y-10 mt-14">
          {badges.map((badge) => (
            <div key={badge.title} className="border-t border-[#1A1A1A]/[0.12] pt-6">
              <div className="text-[#85622A] text-xl mb-4" style={{ fontFamily: "Georgia, serif" }}>{badge.mark}</div>
              <h3 className="text-[11px] font-bold tracking-[0.14em] uppercase text-[#1A1A1A] mb-2.5 leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
                {badge.title}
              </h3>
              <p className="text-[13px] text-[#5C5C60] leading-relaxed">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Trust Statement — crawlable credential copy */}
        <div className="mt-16 border-t border-[#1A1A1A]/[0.12] pt-10">
          <p className="text-[#5C5C60] max-w-3xl leading-relaxed">
            Jetblack Painting is a <strong className="text-[#1A1A1A] font-semibold">fully licensed and insured</strong> painting company
            based in Mordialloc, Melbourne. All work is backed by a <strong className="text-[#1A1A1A] font-semibold">5-year written workmanship guarantee</strong> and
            covered by <strong className="text-[#1A1A1A] font-semibold">$10M public liability insurance</strong>.
            We use only <strong className="text-[#1A1A1A] font-semibold">premium Dulux and Taubmans paints</strong> and comply with all Australian Standards for painting and decorating.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
                          href={`tel:${siteConfig.phoneHref}`}
              className="inline-flex items-center px-7 py-3.5 bg-[#D0A050] text-[#060607] text-[11px] font-bold tracking-[0.18em] uppercase hover:bg-[#E9BE6C] transition-colors"
            >
                          Call {siteConfig.phoneDisplay}
            </a>
            <a
                          href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center px-7 py-3.5 border border-[#1A1A1A]/35 text-[#1A1A1A] text-[11px] font-bold tracking-[0.18em] uppercase hover:border-[#1A1A1A] transition-colors"
            >
              Email for a Free Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
