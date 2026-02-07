/*
 * Design: Bold Contrast — High-Impact Modern Trade
 * Hero: Full-viewport dark section with generated hero background,
 * bold headline, subtext, and dual CTAs.
 */
import { motion } from "framer-motion";
import { ArrowDown, Phone, ChevronRight } from "lucide-react";

const HERO_BG = "https://private-us-east-1.manuscdn.com/sessionFile/quv5t936LnGr5RkCM2qg9C/sandbox/KUjptAuQEUUICu4dv5y25x-img-1_1770474108000_na1fn_aGVyby1iZw.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvcXV2NXQ5MzZMbkdyNVJrQ00ycWc5Qy9zYW5kYm94L0tVanB0QXVRRVVVSUN1NGR2NXkyNXgtaW1nLTFfMTc3MDQ3NDEwODAwMF9uYTFmbl9hR1Z5YnkxaVp3LmpwZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=wCeA6qUcgrY77~3yEongFN3vDDSKzM4MVfe9YrrgU-NHYlnR6BBchYI7jHSv8JVbccdklthXTRu3SOfcNuX1dS2dYEhOvBOurvCUbsjnxBWi5OKYbpFCRQ6zaRdFj5PBmDiuRKRVy7Lftwpxg10e0Uk7cs67T~NvzZvWVnytjerX~Z9Ryq0p0mA-SZ4YEvuo8H6zA6TKwWS4fHqUlBfWu4FW~9Zk~gzI7ZPupARiUplLbQ~cNmB4zFfaHr6pC4zPLhworaKIhK329FmridVO1TA0dlLqa6QUXXbqOhBbg0ZZtiNbgfRuvsYuqtc4YLALv~2Nu0Nc7tfhV8EKqL2J7g__";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Professional house painter at work"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/95 via-[#0a0a0a]/80 to-[#0a0a0a]/40" />
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 pt-28 pb-20">
        <div className="max-w-2xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-[#00AACC]/10 border border-[#00AACC]/25 rounded-full px-4 py-1.5 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-[#00AACC] animate-pulse" />
            <span className="text-[#00AACC] text-sm font-medium tracking-wide">
              Melbourne's Trusted Painting Specialists
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.05] tracking-tight mb-6"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Quality Painting,{" "}
            <span className="text-[#00AACC]">Flawless</span>{" "}
            Results
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-white/70 text-lg sm:text-xl leading-relaxed mb-10 max-w-xl"
          >
            Commercial and residential repaint specialists delivering superior
            finishes across all Melbourne suburbs. Fully licensed and insured.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a
              href="tel:0432077782"
              className="flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-base transition-all duration-200 hover:shadow-lg hover:shadow-[#00AACC]/30 hover:-translate-y-0.5"
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
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            className="flex gap-8 sm:gap-12 mt-14 pt-8 border-t border-white/10"
          >
            {[
              { value: "13+", label: "Years Experience" },
              { value: "5.0★", label: "Google Rating" },
              { value: "All", label: "Melbourne Suburbs" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl sm:text-3xl font-bold text-[#00AACC]" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                  {stat.value}
                </div>
                <div className="text-white/50 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollToSection("#services")}
          className="text-white/40 hover:text-[#00AACC] transition-colors"
          aria-label="Scroll down"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
