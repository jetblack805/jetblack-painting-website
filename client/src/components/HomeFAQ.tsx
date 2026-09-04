import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "@/homeFaqs";
import siteConfig from "@/site-config.json";

/**
 * Homepage FAQ.
 *
 * Content comes from client/src/homeFaqs.ts, which is the same source
 * scripts/generate-home-faq.mjs uses to write the crawlable copy and the
 * FAQPage schema into client/index.html. Do not hardcode questions here.
 *
 * Answers are rendered into the DOM whether or not the panel is open — only
 * height is animated — so the text is present for crawlers and for find-in-page
 * even while collapsed. Collapsing the text out of the DOM entirely would
 * recreate the exact defect this component was built to fix.
 */
export default function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-[#131316] border-t border-white/[0.06]"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <div className="max-w-2xl mb-12">
          <span className="text-[#D0A050] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Questions &amp; Answers
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDEF] leading-tight mb-5"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            The things people ask before they book
          </h2>
          <p className="text-[#B4B4B8] text-lg leading-relaxed">
            Straight answers on cost, timing, living through a repaint, and how we work with
            agents, property managers and body corporates.
          </p>
        </div>

        <div className="max-w-3xl divide-y divide-white/[0.06] border-y border-white/[0.06]">
          {HOME_FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={faq.question}>
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="w-full flex items-start justify-between gap-6 text-left py-5 group"
                  >
                    <span className="text-[#EDEDEF] text-lg font-semibold leading-snug group-hover:text-[#D0A050] transition-colors">
                      {faq.question}
                    </span>
                    <ChevronDown
                      aria-hidden="true"
                      className={`w-5 h-5 shrink-0 mt-1 text-[#D0A050] transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-[grid-template-rows] duration-200 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#B4B4B8] leading-relaxed pb-6 pr-10">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-3xl mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[#B4B4B8]">Still not sure? Ask Jimmy directly — no obligation.</p>
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 bg-[#D0A050] text-[#0A0A0B] px-7 py-3 rounded font-bold hover:bg-[#DDB264] transition-colors"
          >
            Call {siteConfig.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
