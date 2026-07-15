/*
 * Design: Bold Contrast — Gallery on dark background
 * Masonry-style grid showcasing real project photos
 */
import { useState } from "react";
import { X } from "lucide-react";
import { useInView } from "@/lib/useInView";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import imgBeforeAfterKeysborough from "@/assets/images/gallery-exterior-before-after-keysborough.jpeg";
import imgGreyModernBayside from "@/assets/images/gallery-exterior-grey-modern-bayside.jpeg";
import imgPainterOnLadder from "@/assets/images/gallery-exterior-painter-on-ladder.jpeg";
import imgEpoxyFloor from "@/assets/images/gallery-commercial-epoxy-floor.jpeg";
import imgNavyWeatherboard from "@/assets/images/gallery-exterior-navy-weatherboard.jpeg";
import imgVictorianRoof from "@/assets/images/gallery-roof-victorian-restoration.jpeg";
import imgTwoStoryMornington from "@/assets/images/gallery-exterior-two-story-mornington.jpeg";
import imgTudorHeritage from "@/assets/images/gallery-exterior-tudor-heritage.jpeg";
import imgDarkCommercialBuilding from "@/assets/images/gallery-commercial-dark-building.jpeg";
import imgVictorianTrim from "@/assets/images/gallery-exterior-victorian-trim.jpeg";
import imgScissorLift from "@/assets/images/gallery-commercial-scissor-lift.jpeg";
import imgWhiteModern from "@/assets/images/gallery-exterior-white-modern.jpeg";

const projects = [
  {
    src: imgBeforeAfterKeysborough,
    alt: "Before and after exterior house painting transformation in Keysborough Melbourne",
    category: "Exterior",
  },
  {
    src: imgGreyModernBayside,
    alt: "Modern grey home exterior repaint by professional painters in Bayside Melbourne",
    category: "Exterior",
  },
  {
    src: imgPainterOnLadder,
    alt: "Professional house painter on ladder working on exterior residential project Melbourne",
    category: "Exterior",
  },
  {
    src: imgEpoxyFloor,
    alt: "Commercial epoxy floor painting for warehouse in Melbourne Victoria",
    category: "Commercial",
  },
  {
    src: imgNavyWeatherboard,
    alt: "Navy weatherboard house with white fence - exterior painting specialists Melbourne",
    category: "Exterior",
  },
  {
    src: imgVictorianRoof,
    alt: "Victorian house roof painting and restoration Melbourne",
    category: "Roof",
  },
  {
    src: imgTwoStoryMornington,
    alt: "Two-story house exterior painting project in Mornington Peninsula",
    category: "Exterior",
  },
  {
    src: imgTudorHeritage,
    alt: "Tudor-style house repaint - heritage home painting experts Melbourne",
    category: "Exterior",
  },
  {
    src: imgDarkCommercialBuilding,
    alt: "Dark commercial building painting - professional commercial contractors Melbourne",
    category: "Commercial",
  },
  {
    src: imgVictorianTrim,
    alt: "Victorian house exterior painting - detailed trim work Melbourne",
    category: "Exterior",
  },
  {
    src: imgScissorLift,
    alt: "Commercial scissor lift painting for high-access building Melbourne",
    category: "Commercial",
  },
  {
    src: imgWhiteModern,
    alt: "White modern exterior repaint - high-quality finish Melbourne",
    category: "Exterior",
  },
];

const categories = ["All", "Exterior", "Commercial", "Roof"];

export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);
  const header = useInView("-100px");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="gallery" className="py-24 bg-[#0D0D0D]">
      <div className="container">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal up max-w-2xl mb-12 ${header.visible ? "visible" : ""}`}
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
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded text-sm font-medium transition-all duration-200 ${
                filter === cat
                  ? "bg-[#007A99] text-white"
                  : "bg-white/10 text-white/60 hover:bg-white/15 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Carousel */}
        <div className="relative px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filtered.map((project, idx) => (
                <CarouselItem key={project.src} className="pl-4 sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <div
                    className="group relative overflow-hidden rounded-lg cursor-pointer h-64 transition-opacity duration-300"
                    onClick={() => setLightbox(idx)}
                  >
                    <img loading="lazy" decoding="async"
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[#00AACC] text-xs font-semibold uppercase tracking-wider">
                        {project.category}
                      </span>
                      <p className="text-white text-sm mt-1 line-clamp-2">{project.alt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 text-white border-white/20 bg-white/10 hover:bg-white/20" />
            <CarouselNext className="-right-4 lg:-right-12 text-white border-white/20 bg-white/10 hover:bg-white/20" />
          </Carousel>
        </div>
      </div>

      {/* Lightbox */}
      <div
        className={`fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 transition-opacity duration-300 ${
          lightbox !== null ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setLightbox(null)}
      >
        <button
          onClick={() => setLightbox(null)}
          className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
        >
          <X className="w-8 h-8" />
        </button>
        {lightbox !== null && (
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </section>
  );
}
