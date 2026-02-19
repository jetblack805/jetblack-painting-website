/*
 * Design: Bold Contrast — Services section on light background
 * Card-based layout with real project photos and hover interactions
 */
import { motion } from "framer-motion";
import { Home, Building2, PaintBucket, Paintbrush, Warehouse, Fence } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Interior House Painting Melbourne",
    description: "Professional interior painting Melbourne services. Transform your living spaces with flawless finishes. From walls and ceilings to trims and doors, we deliver fresh, clean looks throughout your home in Keysborough, Bayside, and all Melbourne suburbs.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/KYFGAGWwrHFpqGZW.jpeg",
  },
  {
    icon: Paintbrush,
    title: "Exterior House Painting Melbourne",
    description: "Expert exterior painting Melbourne services. Boost your curb appeal with professional repaints. We handle weatherboards, render, fascias, gutters, and more — built to withstand Melbourne's weather. Serving Keysborough, Bayside, and surrounding areas.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/rEhHpLqiuktAVhOl.jpeg",
  },
  {
    icon: Building2,
    title: "Commercial Painting Melbourne",
    description: "Professional commercial painting Melbourne services. Keep your commercial spaces looking professional. We work with offices, retail shops, warehouses, and factories — minimising disruption to your business across Melbourne.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/mQxpXRxNSxlrzUtw.jpeg",
  },
  {
    icon: PaintBucket,
    title: "Pre-Sale Property Painting",
    description: "Maximise your property's value before selling. A fresh coat of paint is one of the most cost-effective ways to increase buyer appeal and achieve a higher sale price. Available in Keysborough, Bayside, and all Melbourne suburbs.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/kBOMcHSWYZOFHhIp.jpeg",
  },
  {
    icon: Warehouse,
    title: "Rental Property Painting Melbourne",
    description: "Professional rental property painting Melbourne services. We work with landlords, property managers, and real estate agencies to keep properties in top condition. Fast turnaround guaranteed across Melbourne.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/PjnbMqfamLZEUUyM.jpeg",
  },
  {
    icon: Fence,
    title: "Roof & Fence Painting Melbourne",
    description: "Complete your property's transformation with roof restoration and fence painting Melbourne services. We handle preparation, priming, and finishing for long-lasting results in Keysborough, Bayside, and all Melbourne suburbs.",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/unIjWONLqcppDssG.jpeg",
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
          <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
            What We Do
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Our Services
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            From residential repaints to large-scale commercial projects, Jetblack Painting
            delivers professional results across all aspects of painting.
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
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 rounded bg-[#00AACC] flex items-center justify-center">
                    <service.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3
                  className="text-xl font-bold text-[#0D0D0D] mb-3 group-hover:text-[#00AACC] transition-colors"
                  style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-[#666] text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
