/*
 * Design: Bold Contrast — Gallery on dark background
 * Masonry-style grid showcasing real project photos
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const projects = [
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/YlVHtJeJnaAjwGUT.jpeg",
    alt: "Before and after house transformation",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/NfJeTGVkbdCmILwC.png",
    alt: "Modern grey home exterior repaint",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/aZGARrzupCzIyxjh.jpeg",
    alt: "Professional painter on ladder",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/mQxpXRxNSxlrzUtw.jpeg",
    alt: "Commercial epoxy floor painting",
    category: "Commercial",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/rEhHpLqiuktAVhOl.jpeg",
    alt: "Navy weatherboard house with white fence",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/wOgKqvGwAnSxzfWQ.jpeg",
    alt: "Victorian house roof painting",
    category: "Roof",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/GnDIeFAcerFsmqSJ.jpeg",
    alt: "Two-story house exterior painting",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/PjnbMqfamLZEUUyM.jpeg",
    alt: "Tudor-style house repaint",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/gRIEjScrUoPmeNVf.png",
    alt: "Dark commercial building painting",
    category: "Commercial",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/AGutyPeftuRokEnd.jpeg",
    alt: "Victorian house exterior painting",
    category: "Exterior",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/GRTEGDmhTFOjaXQZ.jpeg",
    alt: "Commercial scissor lift painting",
    category: "Commercial",
  },
  {
    src: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/kBOMcHSWYZOFHhIp.jpeg",
    alt: "White modern exterior repaint",
    category: "Exterior",
  },
];

const categories = ["All", "Exterior", "Commercial", "Roof"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-12"
        >
          <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Our Portfolio
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Our Work
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Browse our recent projects across Melbourne. Every job is completed with
            the same attention to detail and commitment to quality.
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-[#00AACC] text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, idx) => (
              <motion.div
                key={project.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-lg cursor-pointer ${
                  idx === 0 ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onClick={() => setLightbox(idx)}
              >
                <img
                  src={project.src}
                  alt={project.alt}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    idx === 0 ? "h-64 sm:h-full" : "h-52 sm:h-56"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[#00AACC] text-xs font-semibold uppercase tracking-wider">
                    {project.category}
                  </span>
                  <p className="text-white text-sm mt-1">{project.alt}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={filtered[lightbox]?.src}
              alt={filtered[lightbox]?.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
