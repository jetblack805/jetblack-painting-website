import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";

export default function ExteriorPainting() {
  const benefits = [
    "Professional surface preparation and power washing",
    "Premium weather-resistant paint products",
    "Expert color consultation for curb appeal",
    "Protection against Melbourne's harsh weather",
    "Fully licensed and insured",
    "Satisfaction guaranteed"
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
              Professional Exterior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Protect and enhance your home's exterior with expert painting. Weather-resistant finishes for Melbourne's climate.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
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
              Expert Exterior Painting for Melbourne Homes
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Your home's exterior is its first line of defense against Melbourne's unpredictable weather. Jetblack Painting specializes in professional exterior painting that not only enhances your home's curb appeal but also provides long-lasting protection.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With over 13 years of experience, we understand the unique challenges of exterior painting in Melbourne. From weatherboard homes to brick facades, we deliver exceptional results that stand the test of time.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Our Exterior Painting Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "House Exterior Painting", desc: "Complete exterior repaints for residential properties" },
                { title: "Weatherboard Painting", desc: "Specialized weatherboard painting and preparation" },
                { title: "Brick & Render Painting", desc: "Expert painting for brick and render facades" },
                { title: "Roof Painting", desc: "Professional roof painting and restoration" },
                { title: "Fence Painting", desc: "Quality fence and gate painting services" },
                { title: "Trim & Fascia", desc: "Professional painting of gutters, fascia, and trim" }
              ].map((service, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0D0D0D] mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Why Choose Jetblack Painting for Exterior Painting?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Melbourne Weather */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Exterior Painting Built for Melbourne Weather</h3>
            <p className="text-gray-700 mb-4">
              Melbourne's climate presents unique challenges for exterior painting. Our team understands the impact of UV exposure, moisture, and temperature fluctuations on exterior finishes.
            </p>
            <p className="text-gray-700">
              We recommend premium weather-resistant paints that provide superior protection and longevity. Our expertise ensures your exterior paint job will look great and perform well for years to come.
            </p>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Exterior Painting Across Melbourne</h3>
            <p className="text-gray-700 mb-6">
              We provide professional exterior painting throughout Melbourne, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Keysborough", "Brighton", "Toorak", "Mordialloc", "Hawthorn", "Mentone", "Sandringham", "Camberwell", "Bentleigh", "Mornington Peninsula"].map((suburb) => (
                <div key={suburb} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00AACC]" />
                  <span className="text-gray-700">{suburb}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Protect Your Home's Exterior</h3>
            <p className="text-xl mb-6 text-gray-300">
              Get a free quote from Melbourne's trusted exterior painting specialists.
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
