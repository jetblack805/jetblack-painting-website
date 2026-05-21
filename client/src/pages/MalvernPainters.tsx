import { motion } from "framer-motion";
import { Star, Phone, MapPin, CheckCircle } from "lucide-react";

export default function MalvernPainters() {
  const services = [
    "Interior house painting",
    "Exterior house painting",
    "Commercial painting",
    "Kitchen cabinet resurfacing",
    "Roof painting",
    "Pre-sale property painting"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">House Painters Malvern Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">Professional residential and commercial painting services in Malvern. 5-star rated, fully licensed, free quotes.</p>
            <a href="tel:0432077782" className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold">
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Malvern's Trusted Painting Specialists</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting has been serving the Malvern community for over 13 years. We're proud to be Malvern's most trusted painting specialists, delivering exceptional results for residential and commercial properties.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Why Malvern Homeowners Choose Jetblack Painting</h3>
            <div className="space-y-4">
              {["13+ years experience serving Malvern", "5-star Google rating from Malvern customers", "Fully licensed and insured", "Free, no-obligation quotes", "Professional team with attention to detail", "Minimal disruption to your home"].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Painting Services in Malvern</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00AACC]">
                  <p className="text-gray-700 text-lg font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Malvern Painting Quote Today</h3>
            <p className="text-xl mb-6 text-gray-300">Contact Jetblack Painting for a free, no-obligation quote on your Malvern painting project.</p>
            <a href="tel:0432077782" className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg">
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
