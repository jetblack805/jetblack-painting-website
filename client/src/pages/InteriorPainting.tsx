import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function InteriorPainting() {
  const benefits = [
    "Professional surface preparation and priming",
    "Premium quality Dulux and Taubmans paint products",
    "Expert colour consultation included",
    "Minimal disruption to your home",
    "Fully licensed and insured with $20M public liability",
    "5-year workmanship guarantee"
  ];

  const suburbs = [
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Malvern", link: "/painter-malvern" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Hawthorn", link: "/painter-hawthorn" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Hampton", link: "/painter-hampton" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Keysborough", link: "/keysborough-painters" },
  ];

  const faqs = [
    {
      question: "How long does interior painting take?",
      answer: "Most interior painting projects take 3-7 days depending on the size and complexity. We'll provide a detailed timeline during your free quote."
    },
    {
      question: "Do you move furniture?",
      answer: "Yes, we move and protect your furniture as part of our service. We use drop cloths and plastic sheeting to protect floors and belongings."
    },
    {
      question: "What paint do you use?",
      answer: "We use premium quality paints from Dulux and Taubmans. We can recommend the best products for your specific needs and budget."
    },
    {
      question: "Can you help with colour selection?",
      answer: "Absolutely! Our team has extensive experience with colour trends and can help you choose colours that complement your home's style."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Interior Painting Melbourne | Professional House Painters | Jetblack Painting"
        description="Professional interior painting services in Melbourne. Premium Dulux paints, expert colour consultation, 5-star rated. Servicing all Melbourne suburbs. Free quotes."
        canonical="https://jetblackpainting.manus.space/services/interior-painting"
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
              Professional Interior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your home with expert interior painting services. From feature walls to complete room makeovers, Jetblack Painting delivers flawless finishes with premium Dulux and Taubmans paints.
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
              Melbourne's Trusted Interior Painting Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting delivers premium interior painting services across Melbourne. With 13+ years of experience and a 5-star Google rating, we transform homes with expert craftsmanship and premium materials. Our professional team handles everything from single rooms to complete home repaints.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We specialise in residential interior painting including living rooms, bedrooms, kitchens, bathrooms, hallways, and ceilings. Every project includes thorough surface preparation, premium primers, and top-quality topcoats for a flawless, long-lasting finish.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Choose Our Interior Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Interior Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide professional interior painting services across all Melbourne suburbs including:</p>
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

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Interior Painting FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-gray-200 pb-4">
                  <h3 className="text-lg font-bold text-[#0D0D0D] mb-2">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
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
              <Link href="/services/exterior-painting" className="text-[#00AACC] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#00AACC] hover:underline font-medium">Commercial Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Interior Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your interior painting project.
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
