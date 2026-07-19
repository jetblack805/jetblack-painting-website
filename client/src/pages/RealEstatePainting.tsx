import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-interior-staged-living.webp";
import imgBoucleLiving from "@/assets/images/gallery-interior-boucle-living.webp";
import imgOpenLiving from "@/assets/images/gallery-interior-open-living.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-open-plan-living.webp";

export default function RealEstatePainting() {
  const benefits = [
    "Fast turnaround scheduled around your sale campaign or settlement",
    "Broad-appeal neutral colour consultation that photographs well",
    "Direct coordination with agents, vendors and property stylists",
    "Sharp, presentation-ready interior and exterior finishes",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee",
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
      question: "Do you work directly with real estate agents and vendors?",
      answer:
        "Yes. We regularly coordinate directly with real estate agents, vendors and property stylists across Melbourne — handling quotes, access, scheduling and invoicing so the repaint is finished on time for photography, styling and the first open home.",
    },
    {
      question: "How quickly can you paint a property before it goes on the market?",
      answer:
        "Most pre-sale and pre-lease repaints are completed within a few days to a week, depending on the size and scope. We build the schedule around your campaign dates and settlement deadlines so the property is ready when it needs to be.",
    },
    {
      question: "What colours work best for selling or leasing a property?",
      answer:
        "Warm whites and soft, broad-appeal neutrals photograph well and help the widest range of buyers and tenants picture themselves in the home. We provide colour consultation to choose a scheme that suits the property and maximises presentation.",
    },
    {
      question: "Is painting worth it before selling a property?",
      answer:
        "In most cases yes. A professional repaint is one of the highest-return improvements before a sale — it addresses scuffs, dated colours and tired façades that buyers otherwise price against you, and lifts the quality of listing photography and inspections.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Real Estate Painting Melbourne | Pre-Sale & Agent Painters | Jetblack Painting"
        description="Real estate painting in Melbourne for agents, vendors and investors. Fast pre-sale and pre-lease repaints, neutral colours, agent coordination. 5-star rated. Free quotes."
        canonical="https://jetblackpainting.com/services/real-estate-painting/"
        schema={serviceSchema({ serviceType: "Real Estate Painting", name: "Real Estate Painting Melbourne", description: "Real estate painting in Melbourne for agents, vendors and investors. Fast pre-sale and pre-lease repaints, neutral colours, agent coordination. 5-star rated. Free quotes.", canonical: "https://jetblackpainting.com/services/real-estate-painting/", faqs })}
      />
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Presentation-ready repaints for agents, vendors and investors. Jetblack Painting delivers fast, sale-ready interior and exterior painting that lifts value and buyer appeal across Melbourne.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#131316]">
        <div className="container">
          <img
            src={imgService}
            alt="Sale-ready living room repainted by Jetblack Painting for a Melbourne real estate campaign"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgOpenLiving}
              alt="Freshly painted open living room presented for sale by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgBoucleLiving}
              alt="Styled living and dining room repainted by Jetblack Painting for sale presentation"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgOpenPlanLiving}
              alt="Open plan living and kitchen repainted by Jetblack Painting for a property sale"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Melbourne's Real Estate Painting Specialists
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting helps Melbourne real estate agents, vendors and investors present properties at their absolute best. Whether you're preparing a home for sale, refreshing an investment between tenants, or getting a listing photography-ready, we deliver fast, sharp, broad-appeal finishes that maximise value and shorten time on market.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              We understand real estate timelines. Campaigns move quickly, and a repaint has to be finished before photography, styling and the first open home — not after. We quote fast, coordinate directly with agents and stylists, and work to your deadline so nothing holds up the sale.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Agents and Vendors Choose Jetblack Painting</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related property services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Painting for Every Stage of a Property</h2>
            <p className="text-[#B4B4B8] mb-4">
              Our real estate painting service covers the full property lifecycle in one place — whether you're selling, leasing or refreshing an investment:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Pre-sale property painting</h3>
                <p className="text-[#B4B4B8]">Fast, broad-appeal repaints that lift presentation and photography before your sale campaign, timed around your styling and open-home dates.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Rental &amp; investment property painting</h3>
                <p className="text-[#B4B4B8]">Durable, washable finishes for landlords and property managers, with quick turnarounds scheduled around vacancy periods and tenancy changeovers.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Property styling &amp; agent coordination</h3>
                <p className="text-[#B4B4B8]">Neutral colour consultation and direct coordination with agents and stylists so the property presents at its best on listing day.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/interior-painting" className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium">Interior Painting</Link>
              <Link href="/services/exterior-painting" className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium">Exterior Painting</Link>
            </div>
          </motion.div>

          <MidPageCTA heading="Get your free Real Estate Painting quote today" />

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#131316] p-8 rounded-lg border border-[#222227]"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Real Estate Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide real estate painting for agents, vendors and investors across all Melbourne suburbs including:</p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#0C0C0E] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Real Estate Painting FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#222227] pb-4">
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#101013] p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#EDEDEF] mb-4">Our Other Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/body-corporate-painting" className="text-[#D0A050] hover:underline font-medium">Body Corporate Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#D0A050] hover:underline font-medium">Painting Blog</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Real Estate Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a fast, no-obligation quote on your pre-sale or investment repaint.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-4 rounded font-bold text-lg transition-all"
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
