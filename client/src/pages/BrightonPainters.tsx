import { motion } from "framer-motion";
import { Star, Phone, MapPin, CheckCircle } from "lucide-react";

export default function BrightonPainters() {
  const services = [
    "Interior house painting",
    "Exterior house painting",
    "Commercial painting",
    "Kitchen cabinet resurfacing",
    "Roof painting",
    "Pre-sale property painting"
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      suburb: "Brighton",
      text: "Jetblack Painting transformed our Brighton home. Professional, punctual, and exceptional quality!"
    },
    {
      name: "James L.",
      suburb: "Brighton",
      text: "The team was fantastic. They handled our exterior painting perfectly and left everything spotless."
    }
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              House Painters Brighton Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional residential and commercial painting services in Brighton. 5-star rated, fully licensed, free quotes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0432077782"
                className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Serving Brighton and surrounding suburbs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Brighton's Trusted Painting Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting has been serving the Brighton community for over 13 years. We're proud to be Brighton's most trusted painting specialists, delivering exceptional results for residential and commercial properties throughout the suburb.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Whether you're looking to refresh your Brighton home's interior, protect your exterior with a professional paint job, or prepare your property for sale, our experienced team has the expertise to deliver outstanding results.
            </p>
          </motion.div>

          {/* Why Brighton Homeowners Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Why Brighton Homeowners Choose Jetblack Painting</h3>
            <div className="space-y-4">
              {[
                "13+ years experience serving Brighton",
                "5-star Google rating from Brighton customers",
                "Fully licensed and insured",
                "Free, no-obligation quotes",
                "Professional team with attention to detail",
                "Minimal disruption to your home"
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Painting Services in Brighton</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00AACC]">
                  <p className="text-gray-700 text-lg font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Testimonials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">What Brighton Customers Say</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, i) => (
                <div key={i} className="bg-[#F5F5F0] p-6 rounded-lg">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-[#0D0D0D]">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.suburb}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Local Expertise */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Local Brighton Expertise</h3>
            <p className="text-gray-700 mb-4">
              We understand Brighton's unique properties, from Victorian heritage homes to modern beachside residences. Our team knows the local climate challenges and can recommend the best paint finishes and colors for Brighton homes.
            </p>
            <p className="text-gray-700">
              We're based locally in Keysborough, just minutes away from Brighton, ensuring quick response times and personalized service for all your painting needs.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Get Your Free Brighton Painting Quote Today</h3>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your Brighton painting project.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
