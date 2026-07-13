/*
 * Design: Bold Contrast — Services section on light background
 * Card-based layout with real project photos and hover interactions
 */
import { motion } from "framer-motion";
import { Home, Building2, PaintBucket, Paintbrush, Warehouse, Fence, Key, Building } from "lucide-react";
import { Link } from "wouter";
import imgInteriorPainting from "@/assets/images/service-interior-painting.jpeg";
import imgNavyWeatherboard from "@/assets/images/gallery-exterior-navy-weatherboard.jpeg";
import imgEpoxyFloor from "@/assets/images/gallery-commercial-comfortel-building.jpeg";
import imgWhiteModern from "@/assets/images/gallery-exterior-white-modern.jpeg";
import imgTudorHeritage from "@/assets/images/gallery-exterior-tudor-heritage.jpeg";
import imgRoofFencePainting from "@/assets/images/service-roof-fence-painting.jpeg";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-staged-living.jpeg";
import imgCommercialBuilding from "@/assets/images/gallery-commercial-heritage-white.jpeg";

const services = [
  {
    icon: Home,
    title: "Interior House Painting Melbourne",
    description: "Our professional interior painting Melbourne services transform your living spaces with flawless finishes. From walls and ceilings to detailed trims and doors, our expert painters deliver fresh, clean looks throughout your home. We proudly serve Keysborough, Bayside, and all Melbourne suburbs with premium quality paints and meticulous attention to detail.",
    image: imgInteriorPainting,
    link: "/services/interior-painting",
  },
  {
    icon: Paintbrush,
    title: "Exterior House Painting Melbourne",
    description: "Boost your property's curb appeal with our expert exterior painting Melbourne services. We specialise in high-quality repaints for weatherboards, render, fascias, and gutters, using durable paints built to withstand Melbourne's varied weather. Our exterior house painters ensure long-lasting protection and a beautiful finish for homes in Keysborough and Bayside.",
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
    icon: PaintBucket,
    title: "Pre-Sale Property Painting Melbourne",
    description: "Maximise your property's market value with our pre-sale property painting Melbourne services. A fresh, modern coat of paint is one of the most cost-effective ways to increase buyer appeal and achieve a higher sale price. Our painters help homeowners in Keysborough and Bayside prepare their properties for a successful sale.",
    image: imgWhiteModern,
    link: "/services/pre-sale-property-painting",
  },
  {
    icon: Warehouse,
    title: "Rental Property Painting Melbourne",
    description: "We provide efficient rental property painting Melbourne services for landlords, property managers, and real estate agencies. Our team ensures a fast turnaround between tenancies, keeping your investment properties in top condition with durable, high-quality finishes across all Melbourne suburbs.",
    image: imgTudorHeritage,
    link: "/services/rental-property-painting",
  },
  {
    icon: Fence,
    title: "Roof & Fence Painting Melbourne",
    description: "Complete your property's transformation with our specialised roof restoration and fence painting Melbourne services. We provide thorough preparation, high-quality priming, and expert finishing to ensure long-lasting protection and aesthetic appeal for homes in Keysborough, Bayside, and throughout Melbourne.",
    image: imgRoofFencePainting,
    link: "/services/roof-fence-painting",
  },
  {
    icon: Key,
    title: "Real Estate Painting Melbourne",
    description: "Our real estate painting Melbourne services help agents, vendors and investors present properties at their best. We deliver fast, sale-ready interior and exterior repaints with broad-appeal neutral colours, coordinating directly with agents and stylists so the property is ready for photography and open homes on schedule.",
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#F5F5F0]">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[#007A99] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Professional Painting Services
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Our Services
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            From residential repaints to large-scale commercial projects, Jetblack Painting
            delivers professional results across all aspects of painting in Melbourne.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <Link key={service.title} href={service.link}>
              <motion.div
                variants={cardVariants}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer h-full"
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
                    <div className="w-10 h-10 rounded bg-[#007A99] flex items-center justify-center">
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3
                    className="text-xl font-bold text-[#0D0D0D] mb-3 group-hover:text-[#007A99] transition-colors"
                    style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-[#666] text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
