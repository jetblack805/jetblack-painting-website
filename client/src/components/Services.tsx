/*
 * Design: Bold Contrast — Services section on light background
 * Card-based layout with real project photos and hover interactions
 */
import { Home, Building2, Paintbrush, Fence, Key, Building } from "lucide-react";
import { Link } from "wouter";
import { useInView } from "@/lib/useInView";
import imgInteriorPainting from "@/assets/images/service-interior-painting.webp";
import imgNavyWeatherboard from "@/assets/images/gallery-exterior-navy-weatherboard.webp";
import imgEpoxyFloor from "@/assets/images/gallery-commercial-comfortel-building.webp";
import imgRoofFencePainting from "@/assets/images/service-roof-fence-painting.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-staged-living.webp";
import imgCommercialBuilding from "@/assets/images/gallery-commercial-heritage-white.webp";

const services = [
  {
    icon: Home,
    title: "Interior House Painting Melbourne",
    description: "Our professional interior painting Melbourne services transform your living spaces with flawless finishes. From walls and ceilings to detailed trims and doors, our expert painters deliver fresh, clean looks throughout your home. We proudly serve Mordialloc, Bayside, and all Melbourne suburbs with premium quality paints and meticulous attention to detail.",
    image: imgInteriorPainting,
    link: "/services/interior-painting",
  },
  {
    icon: Paintbrush,
    title: "Exterior House Painting Melbourne",
    description: "Boost your property's curb appeal with our expert exterior painting Melbourne services. We specialise in high-quality repaints for weatherboards, render, fascias, and gutters, using durable paints built to withstand Melbourne's varied weather. Our exterior house painters ensure long-lasting protection and a beautiful finish for homes in Mordialloc and Bayside.",
    image: imgNavyWeatherboard,
    link: "/services/exterior-painting",
  },
  {
    icon: Building2,
    title: "Commercial Painting Melbourne",
    description: "Jetblack Painting provides professional commercial painting Melbourne services to keep your business premises looking their best. Our commercial painting contractors work with offices, retail shops, warehouses, and factories across Melbourne, ensuring high-quality results while minimising disruption to your daily operations.",
    image: imgEpoxyFloor,
    link: "/services/commercial-painting",
  },
  {
    icon: Fence,
    title: "Roof & Fence Painting Melbourne",
    description: "Complete your property's transformation with our specialised roof restoration and fence painting Melbourne services. We provide thorough preparation, high-quality priming, and expert finishing to ensure long-lasting protection and aesthetic appeal for homes in Mordialloc, Bayside, and throughout Melbourne.",
    image: imgRoofFencePainting,
    link: "/services/roof-fence-painting",
  },
  {
    icon: Key,
    title: "Real Estate Painting Melbourne",
    description: "Our real estate painting Melbourne services cover pre-sale repaints, rental and investment property refreshes, and property styling for agents, vendors, landlords and property managers. We deliver fast, sale-ready interior and exterior finishes with broad-appeal neutral colours, coordinating directly with agents and stylists so the property is ready for photography and open homes on schedule.",
    image: imgOpenPlanLiving,
    link: "/services/real-estate-painting",
  },
  {
    icon: Building,
    title: "Body Corporate Painting Melbourne",
    description: "Jetblack Painting provides professional body corporate and strata painting Melbourne services for owners corporations and strata managers. We repaint common areas, hallways, stairwells and external façades with minimal disruption to residents — fully insured, with detailed scopes and clear schedules for committee approval.",
    image: imgCommercialBuilding,
    link: "/services/body-corporate-painting",
  },
];

export default function Services() {
  const header = useInView("-100px");

  return (
    <section id="services" className="py-24 bg-[#0A0A0A]">
      <div className="container">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal up max-w-2xl mb-16 ${header.visible ? "visible" : ""}`}
        >
          <span className="lux-eyebrow">
            Professional Painting Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl text-[#EDE6D8] leading-tight mb-5"
          >
            Our Services
          </h2>
          <p className="text-[#B3ACA1] text-lg leading-relaxed">
            From residential repaints to large-scale commercial projects, Jetblack Painting
            delivers professional results across all aspects of painting in Melbourne.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard key={service.title} service={service} delay={idx * 0.1} />
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
        className={`reveal up group bg-[#1A1713] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full ${visible ? "visible" : ""}`}
        style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
      >
        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img loading="lazy" decoding="async"
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="w-10 h-10 rounded bg-[#C9A227] flex items-center justify-center">
              <service.icon className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3
            className="text-xl text-[#EDE6D8] mb-3 group-hover:text-[#C9A227] transition-colors"
          >
            {service.title}
          </h3>
          <p className="text-[#A39C90] text-sm leading-relaxed">
            {service.description}
          </p>
        </div>
      </div>
    </Link>
  );
}
