/*
 * Design: Bold Contrast — Services section on light background
 * Card-based layout with real project photos and hover interactions
 */
import { Link } from "wouter";
import { useInView } from "@/lib/useInView";
import imgInteriorPainting from "@/assets/images/service-interior-painting.webp";
import imgNavyWeatherboard from "@/assets/images/gallery-exterior-navy-weatherboard.webp";
import imgNavyWeatherboard900 from "@/assets/images/gallery-exterior-navy-weatherboard-900.webp";
import imgEpoxyFloor from "@/assets/images/gallery-commercial-comfortel-building.webp";
import imgEpoxyFloor900 from "@/assets/images/gallery-commercial-comfortel-building-900.webp";
// Was service-roof-fence-painting.webp, a byte-identical duplicate of this file.
import imgRoofFencePainting from "@/assets/images/gallery-roof-charcoal-tiles.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-staged-living.webp";
import imgCommercialBuilding from "@/assets/images/gallery-commercial-heritage-white.webp";
import imgCommercialBuilding900 from "@/assets/images/gallery-commercial-heritage-white-900.webp";
import imgEpoxyFlakeFloor from "@/assets/images/gallery-commercial-epoxy-floor.webp";
import imgEpoxyFlakeFloor900 from "@/assets/images/gallery-commercial-epoxy-floor-900.webp";

type Service = {
  /* Short, confident label — the visible card heading. Deliberately not
     "Interior House Painting Melbourne": keyword-stuffed card labels read as a
     trade directory, and the ranking work is done by the page <title>, the H1
     and the crawler-facing service list in client/index.html, not by a grid
     label a human reads. */
  label: string;
  /* One line. The old copy ran 5-6 lines per card and repeated "painting
     Melbourne services" in nearly every one. */
  lede: string;
  /* Describes the photograph, not the service — better for screen readers and
     for image search than reusing the heading. */
  alt: string;
  image: string;
  /* Present only where a 900px variant exists; images already under ~90KB do
     not get one, since a second file would add a request without saving bytes. */
  imageSmall?: string;
  imageWidth?: number;
  /* Intrinsic pixel dimensions of `image`, passed through as the <img>
     width/height attributes so the browser can reserve the right aspect
     ratio before load (fixes Lighthouse's "explicit width and height"
     diagnostic). The card itself is a fixed h-52 with object-cover, so
     these have no effect on the rendered layout. */
  imgW: number;
  imgH: number;
  link: string;
};

const services: Service[] = [
  {
    label: "Interior Painting",
    lede: "Walls, ceilings, trim and doors — cut in sharp, finished clean.",
    alt: "Freshly painted interior hallway with white walls and timber flooring",
    image: imgInteriorPainting,
    imgW: 1050,
    imgH: 1400,
    link: "/services/interior-painting",
  },
  {
    label: "Exterior Painting",
    lede: "Weatherboard, render, fascia and gutters, prepared for Melbourne weather.",
    alt: "Navy weatherboard home with white picket fence, repainted exterior",
    image: imgNavyWeatherboard,
    imageSmall: imgNavyWeatherboard900,
    imageWidth: 1050,
    imgW: 1050,
    imgH: 1400,
    link: "/services/exterior-painting",
  },
  {
    label: "Commercial",
    lede: "Offices, retail and industrial — staged around your trading hours.",
    alt: "Repainted commercial building exterior in charcoal and white",
    image: imgEpoxyFloor,
    imageSmall: imgEpoxyFloor900,
    imageWidth: 1400,
    imgW: 1400,
    imgH: 1050,
    link: "/services/commercial-painting",
  },
  {
    label: "Roof & Fence",
    lede: "Roof restoration and fencing, coated for UV and salt exposure.",
    alt: "Charcoal tiled roof after restoration and recoating",
    image: imgRoofFencePainting,
    imgW: 640,
    imgH: 480,
    link: "/services/roof-fence-painting",
  },
  {
    label: "Real Estate & Pre-Sale",
    lede: "Sale-ready finishes, timed to photography and the first open.",
    alt: "Styled open-plan living room repainted in neutral tones before sale",
    image: imgOpenPlanLiving,
    imgW: 1206,
    imgH: 804,
    link: "/services/real-estate-painting",
  },
  {
    label: "Body Corporate & Strata",
    lede: "Common property and façades, scoped and scheduled for committee sign-off.",
    alt: "Heritage white apartment façade repainted along a Melbourne street",
    image: imgCommercialBuilding,
    imageSmall: imgCommercialBuilding900,
    imageWidth: 1400,
    imgW: 1400,
    imgH: 1050,
    link: "/services/body-corporate-painting",
  },
  {
    label: "Epoxy & Concrete Floors",
    lede: "Slabs ground back, then built up in flake, solid colour or clear seal.",
    alt: "Decorative epoxy flake floor in a finished warehouse space",
    image: imgEpoxyFlakeFloor,
    imageSmall: imgEpoxyFlakeFloor900,
    imageWidth: 1120,
    imgW: 1120,
    imgH: 1400,
    link: "/services/epoxy-flooring",
  },
];

export default function Services() {
  const header = useInView("-100px");

  return (
    <section id="services" className="py-24 bg-[#060607]">
      <div className="container">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal up max-w-2xl mb-16 ${header.visible ? "visible" : ""}`}
        >
          <span className="lux-eyebrow">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#EDEDEF] leading-tight mb-5"
          >
            Every surface, one standard
          </h2>
          <p className="text-[#B4B4B8] text-lg leading-relaxed">
            Interiors, exteriors, commercial sites and floors. The same preparation, the
            same materials and the same person signing the job off &mdash; whether it is a
            single room in Mordialloc or a strata façade in Brighton.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.label} service={service} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  delay,
}: {
  service: (typeof services)[number];
  delay: number;
}) {
  const { ref, visible } = useInView("-50px");
  return (
    <Link href={service.link}>
      <div
        ref={ref}
        className={`reveal up group bg-[#131316] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full ${visible ? "visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img loading="lazy" decoding="async"
            src={service.image}
            width={service.imgW}
            height={service.imgH}
            {...("imageSmall" in service
              ? {
                  srcSet: `${service.imageSmall} 900w, ${service.image} ${service.imageWidth}w`,
                  sizes: "(max-width: 768px) 100vw, 33vw",
                }
              : {})}
            alt={service.alt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0B]/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-xl text-[#EDEDEF] mb-2 group-hover:text-[#D0A050] transition-colors"
          >
            {service.label}
          </h3>
          <p className="text-[#A3A3A8] text-sm leading-relaxed">{service.lede}</p>
        </div>
      </div>
    </Link>
  );
}
