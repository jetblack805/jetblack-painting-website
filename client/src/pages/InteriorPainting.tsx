import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgHallway from "@/assets/images/service-interior-painting.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-open-plan-living.webp";
import imgKitchenTimber from "@/assets/images/gallery-interior-kitchen-timber.webp";
import imgLounge from "@/assets/images/gallery-interior-lounge.webp";
import imgStaircase from "@/assets/images/gallery-interior-staircase.webp";
import imgStagedLiving from "@/assets/images/gallery-interior-staged-living.webp";
import imgOpenLiving from "@/assets/images/gallery-interior-open-living.webp";
import imgBoucleLiving from "@/assets/images/gallery-interior-boucle-living.webp";

export default function InteriorPainting() {
  const benefits = [
    "Professional surface preparation and priming",
    "Premium quality Dulux and Taubmans paint products",
    "Expert colour consultation included",
    "Minimal disruption to your home",
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
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Interior Painting Melbourne | Professional House Painters | Jetblack Painting"
        description="Professional interior painting services in Melbourne. Premium Dulux paints, expert colour consultation, 5-star rated. Servicing all Melbourne suburbs. Free quotes."
        canonical="https://jetblackpainting.com/services/interior-painting/"
      schema={serviceSchema({ serviceType: "Interior Painting", name: "Interior Painting Melbourne", description: "Professional interior painting services in Melbourne. Premium Dulux paints, expert colour consultation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.", canonical: "https://jetblackpainting.com/services/interior-painting/", faqs })}
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
              Professional Interior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your home with expert interior painting services. From feature walls to complete room makeovers, Jetblack Painting delivers flawless finishes with premium Dulux and Taubmans paints.
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
            src={imgHallway}
            alt="Elegant painted hallway with ornate cornices and parquet flooring by Jetblack Painting"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <img
              src={imgOpenPlanLiving}
              alt="Open plan living room and kitchen interior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgKitchenTimber}
              alt="Modern kitchen with timber panelling painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgLounge}
              alt="Freshly painted lounge room by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgStaircase}
              alt="Staircase balustrade and walls painted white by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgStagedLiving}
              alt="Freshly painted staged living room by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgOpenLiving}
              alt="Bright open living room interior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgBoucleLiving}
              alt="Styled living and dining room interior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
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
              Melbourne's Trusted Interior Painting Specialists
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting delivers premium interior painting services across Melbourne. With 13+ years of experience and a 5-star Google rating, we transform homes with expert craftsmanship and premium materials. Our professional team handles everything from single rooms to complete home repaints.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Interior Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <MidPageCTA heading="Get your free Interior Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Interior Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide professional interior painting services across all Melbourne suburbs including:</p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Interior Painting FAQs</h2>
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
              <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#D0A050] hover:underline font-medium">Roof Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Interior Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your interior painting project.
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
