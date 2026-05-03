import { motion } from "framer-motion";
import { MapPin, Star, CheckCircle } from "lucide-react";

export default function CamberwellPainters() {
  const services = [
    "Interior Painting",
    "Exterior Painting",
    "Commercial Painting",
    "Kitchen Cabinet Resurfacing",
    "Roof Painting",
    "Fence Painting"
  ];

  const benefits = [
    "5-star Google rating",
    "13+ years experience",
    "Fully licensed & insured",
    "Free quotes",
    "24-hour response guarantee",
    "Professional team"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="w-5 h-5 text-[#00AACC]" />
              <span className="text-[#00AACC] font-bold">Camberwell, VIC</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Camberwell Painters: Expert Painting Services
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Jetblack Painting provides professional residential and commercial painting services in Camberwell. With 13+ years of expertise and a 5-star Google rating, we're your trusted local painters.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Painting Services in Camberwell</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <CheckCircle className="w-8 h-8 text-[#00AACC] mb-4" />
                <h3 className="text-xl font-bold mb-3">{service}</h3>
                <p className="text-gray-600">
                  Expert {service.toLowerCase()} services designed for your Camberwell home or business.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Jetblack Painting for Camberwell?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-start gap-4"
              >
                <Star className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">{benefit}</h3>
                  <p className="text-gray-600 text-sm">
                    We deliver exceptional results on every Camberwell painting project.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Get Your Free Camberwell Painting Quote</h2>
          <p className="text-xl mb-8 text-gray-300">
            No obligation. 24-hour response guarantee. Fully licensed & insured.
          </p>
          <a
            href="tel:0432077782"
            className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
          >
            Call 0432 077 782
          </a>
        </div>
      </section>
    </div>
  );
}
