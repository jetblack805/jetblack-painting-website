import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-commercial-comfortel-building.webp";
import imgBeforeAfter from "@/assets/images/gallery-commercial-before-after.webp";
import imgComfortelFront from "@/assets/images/gallery-commercial-comfortel-front.webp";
import imgIndustrialLift from "@/assets/images/gallery-commercial-industrial-lift.webp";

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

  const faqs = [
    {
      question: "Can you paint outside business hours to avoid disruption?",
      answer: "Yes. We regularly work after hours, overnight and on weekends for commercial clients so your business keeps running with minimal disruption. We plan the job around your operating hours, staging areas so staff and customers stay safe and productive throughout.",
    },
    {
      question: "What types of commercial premises do you paint?",
      answer: "We paint offices, retail and hospitality fit-outs, warehouses and industrial units, strata and body-corporate common areas, medical and childcare facilities, and owners-corporation buildings across Melbourne. Whatever the site, we tailor the coatings and access approach to suit.",
    },
    {
      question: "Are you licensed and insured for commercial work?",
      answer: "Absolutely. Jetblack Painting is fully licensed and carries $10 million public liability insurance, and we follow proper site safety and access procedures. We're happy to provide documentation for building managers and owners corporations before work begins.",
    },
  ];

  const suburbs = [
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Malvern", link: "/painter-malvern" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Hawthorn", link: "/painter-hawthorn" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Commercial Painting Melbourne | Jetblack Painting"
        description="Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes."
        canonical="https://jetblackpainting.com/services/commercial-painting/"
      schema={serviceSchema({ serviceType: "Commercial Painting", name: "Commercial Painting Melbourne", description: "Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes.", canonical: "https://jetblackpainting.com/services/commercial-painting/", faqs })}
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
              Commercial Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional commercial painting for offices, retail, warehouses, and strata properties. After-hours work available to minimise business disruption.
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
            alt="Commercial building exterior painted by Jetblack Painting in Melbourne"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgBeforeAfter}
              alt="Before and after of a commercial building repaint by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgComfortelFront}
              alt="Commercial office and warehouse frontage painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgIndustrialLift}
              alt="Industrial building painting in progress with access equipment by Jetblack Painting"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Melbourne's Trusted Commercial Painters</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <MidPageCTA heading="Get your free Commercial Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting Service Areas</h2>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting FAQs</h2>
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
              <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline font-medium">Exterior Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Commercial Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your commercial painting project.
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
