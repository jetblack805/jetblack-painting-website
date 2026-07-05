import { motion } from "framer-motion";
import { CheckCircle, Phone, TrendingUp, Home, Zap } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PreSalePropertyPainting() {
  const benefits = [
    "Maximise property value before sale",
    "Professional colour consultation for buyer appeal",
    "Fast turnaround to meet sale timelines",
    "Premium quality Dulux and Taubmans paints",
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
      question: "How much value does painting add to my property?",
      answer: "A fresh coat of paint can increase your property's perceived value by 2-5%, often recovering 50-80% of the painting investment at sale. Combined with professional presentation, it significantly improves buyer appeal and sale price."
    },
    {
      question: "How long does pre-sale painting take?",
      answer: "Most pre-sale painting projects take 3-10 days depending on property size and scope. We work efficiently to meet your sale timeline while maintaining our high-quality standards."
    },
    {
      question: "What colours should I choose for selling?",
      answer: "Neutral, contemporary colours like soft greys, warm whites, and muted earth tones appeal to the widest buyer demographic. Our colour consultants will recommend colours that enhance your property's features and maximise buyer appeal."
    },
    {
      question: "Do you paint before open homes?",
      answer: "Absolutely! We can schedule painting to be completed before your first open home. Fresh paint creates an immediate positive impression on potential buyers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Pre-Sale Property Painting Melbourne | Increase Home Value | Jetblack Painting"
        description="Pre-sale property painting Melbourne to maximise your home's value. Professional painters, neutral colour consultation, fast turnaround. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.com/services/pre-sale-property-painting"
      />
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Pre-Sale Property Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Maximise your property's sale price with professional pre-sale painting. Fresh, neutral finishes that appeal to buyers and showcase your home's best features.
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
              Sell Your Home Faster with Professional Pre-Sale Painting
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              First impressions matter when selling your home. Professional pre-sale painting transforms your property's appearance, making it more attractive to potential buyers and justifying a higher asking price. Jetblack Painting specialises in pre-sale property painting across Melbourne, helping homeowners achieve faster sales at better prices.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our pre-sale painting service includes expert colour consultation to select neutral, contemporary colours that appeal to the broadest buyer demographic. We handle interior and exterior painting with meticulous attention to detail, ensuring your home presents perfectly for open homes and inspections.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-[#F5F5F0] p-6 rounded-lg text-center">
              <TrendingUp className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">2-5%</h3>
              <p className="text-gray-700">Increase in property value</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">50-80%</h3>
              <p className="text-gray-700">ROI on painting investment</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg text-center">
              <Home className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">3-10</h3>
              <p className="text-gray-700">Days to complete</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Choose Our Pre-Sale Painting Service</h2>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Pre-Sale Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide professional pre-sale property painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Pre-Sale Painting FAQs</h2>
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
              <Link href="/services/interior-painting" className="text-[#00AACC] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#00AACC] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#00AACC] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#00AACC] hover:underline font-medium">Roof Painting</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Sell? Get Your Pre-Sale Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your pre-sale property painting project.
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
      <Footer />
    </div>
  );
}
