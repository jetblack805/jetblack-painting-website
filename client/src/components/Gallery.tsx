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
import imgBeforeAfterKeysborough from "@/assets/images/gallery-exterior-before-after-keysborough.webp";
import imgBeforeAfterKeysborough900 from "@/assets/images/gallery-exterior-before-after-keysborough-900.webp";
import imgGreyModernBayside from "@/assets/images/gallery-exterior-grey-modern-bayside.webp";
import imgGreyModernBayside900 from "@/assets/images/gallery-exterior-grey-modern-bayside-900.webp";
import imgPainterOnLadder from "@/assets/images/gallery-exterior-painter-on-ladder.webp";
import imgPainterOnLadder900 from "@/assets/images/gallery-exterior-painter-on-ladder-900.webp";
import imgEpoxyFloor from "@/assets/images/gallery-commercial-epoxy-floor.webp";
import imgEpoxyFloor900 from "@/assets/images/gallery-commercial-epoxy-floor-900.webp";
import imgNavyWeatherboard from "@/assets/images/gallery-exterior-navy-weatherboard.webp";
import imgNavyWeatherboard900 from "@/assets/images/gallery-exterior-navy-weatherboard-900.webp";
import imgVictorianRoof from "@/assets/images/gallery-roof-victorian-restoration.webp";
import imgVictorianRoof900 from "@/assets/images/gallery-roof-victorian-restoration-900.webp";
import imgTwoStoryMornington from "@/assets/images/gallery-exterior-two-story-mornington.webp";
import imgTwoStoryMornington900 from "@/assets/images/gallery-exterior-two-story-mornington-900.webp";
import imgTudorHeritage from "@/assets/images/gallery-exterior-tudor-heritage.webp";
import imgTudorHeritage900 from "@/assets/images/gallery-exterior-tudor-heritage-900.webp";
import imgDarkCommercialBuilding from "@/assets/images/gallery-commercial-dark-building.webp";
import imgDarkCommercialBuilding900 from "@/assets/images/gallery-commercial-dark-building-900.webp";
import imgVictorianTrim from "@/assets/images/gallery-exterior-victorian-trim.webp";
import imgVictorianTrim900 from "@/assets/images/gallery-exterior-victorian-trim-900.webp";
import imgScissorLift from "@/assets/images/gallery-commercial-scissor-lift.webp";
import imgScissorLift900 from "@/assets/images/gallery-commercial-scissor-lift-900.webp";
import imgWhiteModern from "@/assets/images/gallery-exterior-white-modern.webp";
import imgWhiteModern900 from "@/assets/images/gallery-exterior-white-modern-900.webp";

const projects = [
  {
    src: imgBeforeAfterKeysborough,
    srcSmall: imgBeforeAfterKeysborough900,
    alt: "Before and after exterior house painting transformation in Keysborough Melbourne",
    category: "Exterior",
  },
  {
    src: imgGreyModernBayside,
    srcSmall: imgGreyModernBayside900,
    alt: "Modern grey home exterior repaint by professional painters in Bayside Melbourne",
    category: "Exterior",
  },
  {
    src: imgPainterOnLadder,
    srcSmall: imgPainterOnLadder900,
    alt: "Professional house painter on ladder working on exterior residential project Melbourne",
    category: "Exterior",
  },
  {
    src: imgEpoxyFloor,
    srcSmall: imgEpoxyFloor900,
    alt: "Commercial epoxy floor painting for warehouse in Melbourne Victoria",
    category: "Commercial",
  },
  {
    src: imgNavyWeatherboard,
    srcSmall: imgNavyWeatherboard900,
    alt: "Navy weatherboard house with white fence - exterior painting specialists Melbourne",
    category: "Exterior",
  },
  {
    src: imgVictorianRoof,
    srcSmall: imgVictorianRoof900,
    alt: "Victorian house roof painting and restoration Melbourne",
    category: "Roof",
  },
  {
    src: imgTwoStoryMornington,
    srcSmall: imgTwoStoryMornington900,
    alt: "Two-story house exterior painting project in Mornington Peninsula",
    category: "Exterior",
  },
  {
    src: imgTudorHeritage,
    srcSmall: imgTudorHeritage900,
    alt: "Tudor-style house repaint - heritage home painting experts Melbourne",
    category: "Exterior",
  },
  {
    src: imgDarkCommercialBuilding,
    srcSmall: imgDarkCommercialBuilding900,
    alt: "Dark commercial building painting - professional commercial contractors Melbourne",
    category: "Commercial",
  },
  {
    src: imgVictorianTrim,
    srcSmall: imgVictorianTrim900,
    alt: "Victorian house exterior painting - detailed trim work Melbourne",
    category: "Exterior",
  },
  {
    src: imgScissorLift,
    srcSmall: imgScissorLift900,
    alt: "Commercial scissor lift painting for high-access building Melbourne",
    category: "Commercial",
  },
  {
    src: imgWhiteModern,
    srcSmall: imgWhiteModern900,
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
    <section id="gallery" className="py-24 lg:py-28 bg-[#060607]">
      <div className="container">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal up max-w-2xl mb-12 ${header.visible ? "visible" : ""}`}
        >
          <span className="lux-eyebrow">Featured Projects</span>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] text-[#FCFCFC] leading-[1.18] mb-5">
            Recent work, no filters needed
          </h2>
          <p className="text-[#EDEDEF]/60 text-base font-light leading-relaxed">
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
              className={`px-5 py-2.5 text-[10.5px] font-bold tracking-[0.18em] uppercase transition-all duration-200 ${
                filter === cat
                  ? "bg-[#D0A050] text-[#060607]"
                  : "border border-white/15 text-white/55 hover:border-[#D0A050]/60 hover:text-[#D0A050]"
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
                    className="group relative overflow-hidden cursor-pointer h-72 transition-opacity duration-300"
                    onClick={() => setLightbox(idx)}
                  >
                    <img loading="lazy" decoding="async"
                      src={project.src}
                      srcSet={`${project.srcSmall} 900w, ${project.src} 1400w`}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      width={900}
                      height={900}
                      alt={project.alt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <span className="text-[#D0A050] text-[9.5px] font-semibold uppercase tracking-[0.3em]">
                        {project.category}
                      </span>
                      <p className="text-white text-sm mt-1 line-clamp-2">{project.alt}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4 lg:-left-12 text-[#D0A050] border-[#D0A050]/40 bg-transparent hover:bg-[#D0A050] hover:text-[#060607] rounded-none" />
            <CarouselNext className="-right-4 lg:-right-12 text-[#D0A050] border-[#D0A050]/40 bg-transparent hover:bg-[#D0A050] hover:text-[#060607] rounded-none" />
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
          aria-label="Close"
          className="absolute top-6 right-6 text-white/70 hover:text-white z-50"
        >
          <X className="w-8 h-8" />
        </button>
        {lightbox !== null && (
          <img
            src={filtered[lightbox]?.src}
            alt={filtered[lightbox]?.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        )}
      </div>
    </section>
  );
}
