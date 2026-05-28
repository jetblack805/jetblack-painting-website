import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function CommercialPainting() {
  const services = [
    "Office painting and repainting",
    "Retail store fit-outs",
    "Warehouse and factory painting",
    "Strata and body corporate painting",
    "Restaurant and hospitality venues",
    "Medical and healthcare facilities",
    "School and educational buildings",
    "After-hours and weekend work available"
  ];

  const suburbs = [
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Malvern", link: "/painter-malvern" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Hawthorn", link: "/painter-hawthorn" },
    { name: "Keysborough", link: "/keysborough-painters" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Commercial Painting Melbourne | Office & Retail Painters | Jetblack Painting"
        description="Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes."
        canonical="https://jetblackpainting.manus.space/services/commercial-painting"
      />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Commercial Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional commercial painting for offices, retail, warehouses, and strata properties. After-hours work available to minimise business disruption.
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Melbourne's Trusted Commercial Painters</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting delivers large-scale commercial painting projects across Melbourne. With 13+ years of experience and full insurance coverage, we handle everything from small office repaints to major warehouse and factory projects. Our team works efficiently to minimise disruption to your business operations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Commercial Painting Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Commercial Painting Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-[#0D0D0D] hover:border-[#00AACC] hover:text-[#00AACC] transition-all font-medium"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">Our Other Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/interior-painting" className="text-[#00AACC] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#00AACC] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#00AACC] hover:underline font-medium">Roof Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#00AACC] hover:underline font-medium">Painting Blog</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Commercial Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your commercial painting project.
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
