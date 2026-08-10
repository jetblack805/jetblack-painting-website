/*
 * Design: Luxury Black & Gold — architect-studio aesthetic
 * Hero: Full-viewport photographic hero (static <picture> in index.html owns
 * the LCP image), serif headline, gold rule, dual CTAs, trust badges.
 */
import { Phone, ChevronRight, ArrowDown } from "lucide-react";
import siteConfig from "@/site-config.json";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex items-center overflow-hidden" style={{ minHeight: "clamp(620px, 92vh, 860px)" }}>
      {/* No background here — the fixed <picture> in index.html (#hero-static) provides
          the background image and gradients. Keeping this div absent means Chrome never
          covers the static <img> and it remains the LCP element (preloaded). */}

      {/* Content */}
      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div className="hero-fade-in flex items-center gap-4 mb-7" style={{ animationDelay: "0.1s" }}>
            <span className="block w-8 h-px bg-[#D0A050]" />
            <span className="text-[#D0A050] text-[10px] font-semibold tracking-[0.32em] uppercase">
              {/* Kept short on purpose: at this letter-spacing anything longer
                  wraps onto a second row on a phone. Toorak stands in for the
                  higher-value end of the work; both it and Bayside have real
                  suburb pages and are listed as GBP service areas. Mornington
                  Peninsula work is still covered by its own suburb pages —
                  it just no longer leads the homepage. */}
              Melbourne · Bayside &amp; Toorak
            </span>
          </div>

          {/* Headline — serif, flyer treatment */}
          <h1
            className="hero-fade-in text-4xl sm:text-5xl lg:text-[4.2rem] text-[#FCFCFC] leading-[1.14] mb-7"
            style={{ animationDelay: "0.25s" }}
          >
            Premium Painting.{" "}
            <span className="text-[#D0A050] block">Exceptional Results.</span>
          </h1>

          <div className="hero-fade-in w-11 h-px bg-[#D0A050] mb-6" style={{ animationDelay: "0.3s" }} />

          {/* Brand slogan */}
          <p
            className="hero-fade-in text-[#D0A050] text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase mb-8"
            style={{ animationDelay: "0.35s" }}
          >
            Quality. Precision. Integrity.
          </p>

          {/* Subtext */}
          <p
            className="hero-fade-in text-[#EDEDEF]/70 text-base sm:text-lg font-light leading-relaxed mb-10 max-w-xl"
            style={{ animationDelay: "0.4s" }}
          >
            Transforming Melbourne homes with flawless finishes. Interior, exterior &amp; commercial painting specialists serving Brighton, Toorak, Bayside, the Mornington Peninsula and all Melbourne suburbs. 5-star rated. Fully licensed &amp; insured.
          </p>

          {/* CTAs */}
          <div className="hero-fade-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.55s" }}>
            <a
              href={`tel:${siteConfig.phoneHref}`}
              style={{ color: "#060607", WebkitTextFillColor: "#060607" }}
              className="inline-flex items-center justify-center gap-3 bg-[#D0A050] hover:bg-[#E9BE6C] text-[#060607] px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-colors duration-200"
            >
              <Phone className="w-4 h-4" />
              Request a Free Quote
            </a>
            <button
              onClick={() => scrollToSection("#gallery")}
              className="inline-flex items-center justify-center gap-2 border border-[#D0A050]/60 hover:bg-[#D0A050] hover:text-[#060607] text-[#D0A050] px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-200"
            >
              View Our Work
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust badges */}
          <div className="hero-fade-in flex flex-wrap gap-x-7 gap-y-3 mt-14 pt-8 border-t border-white/10" style={{ animationDelay: "0.7s" }}>
            {[
              "Fully qualified & insured",
              "5-year written guarantee",
              "5.0 Google rating",
            ].map((badge) => (
              <span key={badge} className="flex items-center gap-2.5 text-[10.5px] tracking-[0.18em] uppercase text-[#EDEDEF]/60">
                <span className="text-[#D0A050] text-[13px]">✓</span>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 z-10" style={{ animationDelay: "1s" }}>
        <button
          onClick={() => scrollToSection("#services")}
          className="text-white/60 hover:text-[#D0A050] transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
