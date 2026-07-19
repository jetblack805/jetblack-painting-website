import { motion } from "framer-motion";
import { CheckCircle, Phone, DollarSign, Zap, Home } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/about-team-at-work.webp";

export default function KitchenCabinetResurfacing() {
  const benefits = [
    "Premium 2-pack kitchen cabinet finishes",
    "Fraction of full kitchen renovation cost",
    "Professional colour consultation included",
    "Durable, long-lasting finish resistant to wear",
    "Fully licensed and insured with $10M public liability",
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
  ];

  const faqs = [
    {
      question: "How much does kitchen cabinet resurfacing cost?",
      answer: "Kitchen cabinet resurfacing typically costs 30-50% less than a full kitchen renovation. The exact price depends on cabinet size, current condition, and finish type. We provide free quotes with no obligation."
    },
    {
      question: "How long does kitchen cabinet resurfacing take?",
      answer: "Most kitchen cabinet resurfacing projects take 5-10 days depending on the number of cabinets and complexity. We work efficiently to minimise disruption to your kitchen use."
    },
    {
      question: "What is 2-pack finish?",
      answer: "2-pack finish (or two-pack paint) is a premium coating system consisting of a base coat and hardener that creates an extremely durable, high-gloss finish. It's more durable than standard paint and resistant to scratches, moisture, and daily wear."
    },
    {
      question: "Can you change cabinet hardware?",
      answer: "Yes! We can replace cabinet handles and hinges as part of the resurfacing project. New hardware can dramatically transform your kitchen's appearance at a minimal additional cost."
    },
    {
      question: "What colours are available?",
      answer: "We can match virtually any colour you desire. Popular choices include classic whites, soft greys, deep blacks, and natural wood tones. Our colour consultants will help you choose the perfect finish for your kitchen style."
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1713]">
      <SEOHead
        title="Kitchen Cabinet Resurfacing Melbourne | 2-Pack Finishes | Jetblack Painting"
        description="Professional kitchen cabinet resurfacing Melbourne. Premium 2-pack finishes, fraction of renovation cost, 5-star rated. Transform your kitchen. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.com/services/kitchen-cabinet-resurfacing/"
      schema={serviceSchema({ serviceType: "Kitchen Cabinet Resurfacing", name: "Kitchen Cabinet Resurfacing Melbourne", description: "Professional kitchen cabinet resurfacing Melbourne. Premium 2-pack finishes, fraction of renovation cost, 5-star rated. Transform your kitchen. Free quotes - Call 0432 077 782.", canonical: "https://jetblackpainting.com/services/kitchen-cabinet-resurfacing/", faqs })}
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
              Kitchen Cabinet Resurfacing Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your kitchen with premium 2-pack cabinet resurfacing. Get a brand new kitchen look for a fraction of full renovation cost.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#B8933D] text-[#0D0D0D] px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#1A1713]">
        <div className="container">
          <img
            src={imgService}
            alt="Jetblack Painting team completing a premium finish project"
            className="rounded-lg shadow-md w-full max-h-[420px] object-cover"
            loading="lazy"
          />
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
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">
              Transform Your Kitchen Without Breaking the Bank
            </h2>
            <p className="text-lg text-[#B3ACA1] mb-4 leading-relaxed">
              Kitchen cabinet resurfacing is one of the most cost-effective ways to transform your kitchen. Instead of a full renovation costing $15,000-$30,000+, cabinet resurfacing delivers a brand new look for a fraction of the price. Jetblack Painting specialises in premium 2-pack kitchen cabinet finishes that rival custom cabinetry.
            </p>
            <p className="text-lg text-[#B3ACA1] mb-4 leading-relaxed">
              Our professional team handles the complete process: careful disassembly, thorough surface preparation, priming, and application of premium 2-pack finish. The result is a durable, high-gloss kitchen cabinet finish that looks and feels like new cabinetry, with the added benefit of a 5-year workmanship guarantee.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-[#12100C] p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 text-[#E3C878] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">30-50%</h3>
              <p className="text-[#B3ACA1]">Less than full renovation</p>
            </div>
            <div className="bg-[#12100C] p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-[#E3C878] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">5-10</h3>
              <p className="text-[#B3ACA1]">Days to complete</p>
            </div>
            <div className="bg-[#12100C] p-6 rounded-lg text-center">
              <Home className="w-12 h-12 text-[#E3C878] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">100+</h3>
              <p className="text-[#B3ACA1]">Kitchens transformed</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Why Choose Our Kitchen Cabinet Resurfacing Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E3C878] flex-shrink-0 mt-1" />
                  <span className="text-[#B3ACA1] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <MidPageCTA heading="Get your free Kitchen Cabinet Resurfacing quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#12100C] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDE6D8] mb-6">Our Kitchen Cabinet Resurfacing Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A227] text-[#0D0D0D] flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-[#EDE6D8] mb-1">Consultation & Colour Selection</h3>
                  <p className="text-[#B3ACA1]">We discuss your vision and help you choose the perfect colour and finish for your kitchen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A227] text-[#0D0D0D] flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-[#EDE6D8] mb-1">Cabinet Removal & Preparation</h3>
                  <p className="text-[#B3ACA1]">We carefully remove cabinet doors and hardware, then thoroughly clean and sand all surfaces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A227] text-[#0D0D0D] flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-[#EDE6D8] mb-1">Priming & Base Coat</h3>
                  <p className="text-[#B3ACA1]">We apply professional primer and base coat to ensure excellent adhesion and coverage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A227] text-[#0D0D0D] flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-[#EDE6D8] mb-1">2-Pack Finish Application</h3>
                  <p className="text-[#B3ACA1]">We apply premium 2-pack finish in multiple coats for a durable, high-gloss result.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#C9A227] text-[#0D0D0D] flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-[#EDE6D8] mb-1">Reassembly & Final Inspection</h3>
                  <p className="text-[#B3ACA1]">We reinstall doors, hardware, and handles, then perform a final quality inspection.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#1A1713] p-8 rounded-lg border border-[#2A261F]"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Kitchen Cabinet Resurfacing Service Areas</h2>
            <p className="text-[#B3ACA1] mb-4">We provide professional kitchen cabinet resurfacing services across all Melbourne suburbs including:</p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#12100C] px-4 py-2 rounded-lg border border-[#2A261F] text-[#EDE6D8] hover:border-[#E3C878] hover:text-[#E3C878] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Kitchen Cabinet Resurfacing FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#2A261F] pb-4">
                  <h3 className="text-lg font-bold text-[#EDE6D8] mb-2">{faq.question}</h3>
                  <p className="text-[#B3ACA1]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#17140F] p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#EDE6D8] mb-4">Our Other Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/interior-painting" className="text-[#C9A227] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#C9A227] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#C9A227] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#C9A227] hover:underline font-medium">Roof Painting</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Kitchen Today</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your kitchen cabinet resurfacing project.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#C9A227] hover:bg-[#B8933D] text-[#0D0D0D] px-8 py-4 rounded font-bold text-lg transition-all"
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
