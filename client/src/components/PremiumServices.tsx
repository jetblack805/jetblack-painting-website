import { motion } from "framer-motion";
import { Paintbrush, Home, Wrench, Zap } from "lucide-react";

const services = [
  {
    title: "Interior & Exterior House Painting",
    icon: Home,
    description: "Professional residential painting with premium finishes"
  },
  {
    title: "Luxury Kitchen Resurfacing",
    icon: Paintbrush,
    description: "2-pack finishes for high-end kitchen cabinets"
  },
  {
    title: "Cabinet Painting & Refinishing",
    icon: Wrench,
    description: "Expert cabinet restoration and refinishing services"
  },
  {
    title: "Concrete & Epoxy Flooring",
    icon: Zap,
    description: "Polished flake & epoxy flooring systems"
  },
];

const allServices = [
  "Interior & exterior house painting",
  "Luxury kitchen resurfacing (2-pack finishes)",
  "Cabinet painting & refinishing",
  "Concrete painting & grinding",
  "Polished flake & epoxy flooring systems",
  "Roof painting & restoration",
  "Drywall & surface preparation",
  "Pressure washing",
  "Real estate pre-sale painting & touch-ups",
  "Commercial painting services",
];

const premiumSuburbs = [
  "Brighton",
  "Toorak",
  "Kew",
  "Camberwell",
  "Malvern",
  "Sandringham",
  "Mentone",
  "Mordialloc",
  "Caulfield",
  "Bentleigh",
  "Carlton",
  "Keysborough",
];

export default function PremiumServices() {
  return (
    <section id="premium-services" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0D0D0D] mb-4">
            Premium Painters in Melbourne's Bayside & Inner Suburbs
          </h2>
          <p className="text-xl text-[#666] mb-2">
            Interior, Exterior & High-End Finishes for Luxury Homes
          </p>
          <p className="text-lg text-[#999]">
            Jet Black Painting delivers high-quality residential and commercial painting services across Melbourne's most sought-after suburbs.
          </p>
        </motion.div>

        {/* Suburbs List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#F5F5F0] rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Serving Melbourne's Premium Suburbs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {premiumSuburbs.map((suburb) => (
              <div key={suburb} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#00AACC]" />
                <span className="text-[#0D0D0D] font-medium">{suburb}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Melbourne Homeowners Choose Us</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg text-[#666] leading-relaxed mb-4">
                We work with homeowners, builders, and real estate professionals who expect a premium result. Our attention to detail, clean finishes, and reliability make us a trusted choice in Melbourne's high-end property market.
              </p>
            </div>
            <div>
              <p className="text-lg text-[#666] leading-relaxed">
                We specialise in premium finishes, detailed preparation, and long-lasting results tailored for high-value homes and real estate presentation. Whether you're refreshing a home in <strong>Brighton</strong>, preparing a property for sale in <strong>Camberwell</strong>, or upgrading interiors in <strong>Toorak</strong>, Jet Black Painting ensures a flawless finish every time.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-[#0D0D0D] mb-10">Our Painting & Finishing Services</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-[#F5F5F0] rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-[#00AACC] rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-lg font-bold text-[#0D0D0D] mb-2">{service.title}</h4>
                <p className="text-[#666] text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Complete Services List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-[#0D0D0D] rounded-xl p-12 text-white"
        >
          <h3 className="text-2xl font-bold mb-8">Complete Range of Professional Services</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {allServices.map((service) => (
              <div key={service} className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-[#00AACC] mt-2 flex-shrink-0" />
                <span className="text-white/90">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
