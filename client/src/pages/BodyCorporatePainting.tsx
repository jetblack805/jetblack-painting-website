import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-commercial-dark-building.jpeg";

export default function BodyCorporatePainting() {
  const benefits = [
    "Common areas, hallways, stairwells, lobbies and external façades",
    "Scheduling around residents and tenants to minimise disruption",
    "Direct coordination with owners corporations and strata managers",
    "$10M public liability insurance with compliance documents on request",
    "Durable, low-maintenance coatings for high-traffic shared spaces",
    "5-year workmanship guarantee",
  ];

  const suburbs = [
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Box Hill", link: "/painter-box-hill" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Doncaster", link: "/painter-doncaster" },
    { name: "Ringwood", link: "/painter-ringwood" },
    { name: "Dandenong", link: "/painter-dandenong" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Glen Waverley", link: "/painter-glen-waverley" },
  ];

  const faqs = [
    {
      question: "Do you work with owners corporations and strata managers?",
      answer:
        "Yes. We regularly work directly with owners corporations, body corporate committees and strata managers across Melbourne — providing detailed quotes, scopes of work, insurance documentation and clear schedules so committees can approve and plan the works with confidence.",
    },
    {
      question: "What areas of an apartment or unit complex do you paint?",
      answer:
        "We paint all common property, including entry lobbies, hallways and corridors, stairwells, car parks, external façades and rendered walls, balconies, eaves and shared amenities. We can quote a full repaint or a staged maintenance program across multiple buildings.",
    },
    {
      question: "How do you minimise disruption to residents?",
      answer:
        "We plan the work around residents and tenants — keeping access ways safe and open, staging areas so entries and stairwells remain usable, using low-odour products in occupied buildings, and communicating the schedule clearly in advance so everyone knows what to expect.",
    },
    {
      question: "Are you insured for body corporate and strata work?",
      answer:
        "Absolutely. Jetblack Painting carries $10 million public liability insurance and follows proper site safety and access procedures. We're happy to provide insurance certificates, safe work documentation and detailed scopes for committees and building managers before work begins.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Body Corporate Painting Melbourne | Strata & Owners Corporation Painters | Jetblack Painting"
        description="Body corporate and strata painting in Melbourne. Common areas, façades and maintenance programs for owners corporations. Fully insured, minimal disruption. Free quotes."
        canonical="https://jetblackpainting.com/services/body-corporate-painting/"
        schema={serviceSchema({ serviceType: "Body Corporate Painting", name: "Body Corporate Painting Melbourne", description: "Body corporate and strata painting in Melbourne. Common areas, façades and maintenance programs for owners corporations. Fully insured, minimal disruption. Free quotes.", canonical: "https://jetblackpainting.com/services/body-corporate-painting/", faqs })}
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
              Body Corporate Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional painting for owners corporations and strata-managed properties across Melbourne. Jetblack Painting repaints common areas and façades with minimal disruption to residents — fully insured, on schedule, and built to last.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#007A99] hover:bg-[#006B85] text-white px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="container">
          <img
            src={imgService}
            alt="Body corporate façade repaint by Jetblack Painting on a Melbourne strata property"
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Melbourne's Body Corporate & Strata Painting Specialists
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting provides professional body corporate and strata painting for apartment blocks, unit complexes, townhouse developments and mixed-use buildings across Melbourne. We repaint and maintain common property — from lobbies, hallways and stairwells to external façades and shared amenities — protecting the building's value and keeping it presenting well for residents and owners.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              We know committees and managers need clarity and confidence. Every project comes with a detailed written scope, transparent pricing, insurance documentation and a clear schedule, so the works can be approved, planned and delivered with minimal disruption to residents and tenants.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Owners Corporations Choose Jetblack Painting</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What we paint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">What We Paint on Strata Properties</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Entry lobbies and foyers",
                "Hallways, corridors and stairwells",
                "External façades and rendered walls",
                "Balconies, balustrades and railings",
                "Car parks and basement areas",
                "Eaves, soffits and common ceilings",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-gray-700">
                  <span className="w-2 h-2 rounded-full bg-[#007A99] flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <MidPageCTA heading="Get your free Body Corporate Painting quote today" />

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-white p-8 rounded-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Body Corporate Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide body corporate and strata painting across all Melbourne suburbs including:</p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#F5F5F0] px-4 py-2 rounded-lg border border-gray-200 text-[#0D0D0D] hover:border-[#00AACC] hover:text-[#00AACC] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Body Corporate Painting FAQs</h2>
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
              <Link href="/services/commercial-painting" className="text-[#007A99] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/real-estate-painting" className="text-[#007A99] hover:underline font-medium">Real Estate Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#007A99] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#007A99] hover:underline font-medium">Painting Blog</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Body Corporate Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a detailed, no-obligation quote and scope for your owners corporation.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#007A99] hover:bg-[#006B85] text-white px-8 py-4 rounded font-bold text-lg transition-all"
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
