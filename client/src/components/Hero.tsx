/*
 * Design: Bold Contrast — High-Impact Modern Trade
 * Hero: Full-viewport dark section with generated hero background,
 * bold headline, subtext, and dual CTAs.
 */
import { Phone, ChevronRight, ArrowDown } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* No background here — the fixed <picture> in index.html (#hero-static) provides
          the background image and gradients. Keeping this div absent means Chrome never
          covers the static <img> and it remains the LCP element (preloaded, ~29KB). */}

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="hero-fade-in inline-flex items-center gap-2 border border-[#D4AB3A]/40 rounded-full px-4 py-1.5 mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="w-2 h-2 rounded-full bg-[#C49826] animate-pulse" />
            <span className="text-[#D4AB3A] text-sm font-medium tracking-wide">
              Melbourne's Trusted Painting Specialists
            </span>
          </div>

          {/* Headline — fade-in is fine now; the static <img> owns LCP, not this h1 */}
          <h1
            className="hero-fade-in text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif", animationDelay: "0.25s" }}
          >
            Professional House Painting in Melbourne{" "}
            <span className="text-[#D4AB3A]">Done Right</span>
          </h1>

          {/* Subtext */}
          <p
            className="hero-fade-in text-white/70 text-base sm:text-lg md:text-xl leading-relaxed mb-10 max-w-xl"
            style={{ animationDelay: "0.4s" }}
          >
            Melbourne's #1 rated house painters. Interior, exterior & commercial painting specialists. Serving Keysborough, Bayside, Mornington Peninsula & all Melbourne suburbs. 5-star rated. Fully licensed & insured.
          </p>

          {/* CTAs */}
          <div className="hero-fade-in flex flex-col sm:flex-row gap-4" style={{ animationDelay: "0.55s" }}>
            <a
              href="tel:0432077782"
              className="flex items-center justify-center gap-2 bg-[#C49826] hover:bg-[#A67F1E] text-[#0D0D0D] px-8 py-4 rounded font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AB3A]/30 hover:-translate-y-0.5"
            >
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
            <button
              onClick={() => scrollToSection("#gallery")}
              className="flex items-center justify-center gap-2 border border-white/25 hover:border-white/50 text-white px-8 py-4 rounded font-semibold text-base transition-all duration-200 hover:bg-white/5"
            >
              View Our Work
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Stats */}
          <div className="hero-fade-in flex gap-8 sm:gap-12 mt-14 pt-8 border-t border-white/10" style={{ animationDelay: "0.7s" }}>
            {[
              { value: "13+", label: "Years Experience" },
              { value: "5.0★", label: "Google Rating" },
              { value: "All", label: "Melbourne Suburbs" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-[#D4AB3A]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-fade-in absolute bottom-8 left-1/2 -translate-x-1/2 z-10" style={{ animationDelay: "1s" }}>
        <button
          onClick={() => scrollToSection("#services")}
          className="text-white/40 hover:text-[#D4AB3A] transition-colors"
          aria-label="Scroll down"
        >
          <ArrowDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
