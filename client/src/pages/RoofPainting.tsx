import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-roof-charcoal-tiles.webp";
import imgMetalRoof from "@/assets/images/gallery-roof-metal-colorbond.webp";
import imgRoofCleaning from "@/assets/images/gallery-roof-cleaning.webp";
import imgVictorianRoof from "@/assets/images/gallery-roof-victorian-restoration.webp";

export default function RoofPainting() {
  const benefits = [
    "Extends roof life by 10-15 years",
    "All roof types: tile, metal, Colorbond",
    "Professional pressure cleaning included",
    "Premium roof coatings and sealants",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  const faqs = [
    {
      question: "How long does a professional roof painting last?",
      answer: "A properly prepared and coated roof typically lasts 10 to 15 years before it needs redoing. The key is preparation — cleaning, rust treatment, repairs and the right primer — followed by quality membrane or roof coatings applied at the correct thickness. We include all of that in every roof painting quote.",
    },
    {
      question: "What roof types can you paint?",
      answer: "We paint and restore all common Melbourne roof types, including Colorbond and Zincalume metal roofing, concrete and terracotta tiles, and cement sheet. Each surface needs a specific preparation and coating system, and we match the right one to your roof so the finish bonds properly and lasts.",
    },
    {
      question: "Can roof painting help keep my home cooler?",
      answer: "Yes. Lighter colours and modern heat-reflective roof coatings can reduce how much heat your roof absorbs, helping keep the home more comfortable in Melbourne summers and easing the load on cooling. We're happy to recommend suitable heat-reflective options during your quote.",
    },
  ];

  const suburbs = [
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Malvern", link: "/painter-malvern" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Hawthorn", link: "/painter-hawthorn" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
  ];

  return (
    <div className="min-h-screen bg-[#1A1713]">
      <SEOHead
        title="Roof Painting Melbourne | Roof Restoration & Coating | Jetblack Painting"
        description="Professional roof painting and restoration in Melbourne. Extends roof life 10-15 years. All roof types serviced. 5-star rated, fully insured. Free quotes."
        canonical="https://jetblackpainting.com/services/roof-painting/"
      schema={serviceSchema({ serviceType: "Roof Painting", name: "Roof Painting Melbourne", description: "Professional roof painting and restoration in Melbourne. Extends roof life 10-15 years. All roof types serviced. 5-star rated, fully insured. Free quotes.", canonical: "https://jetblackpainting.com/services/roof-painting/", faqs })}
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
              Roof Painting & Restoration Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional roof painting that extends your roof's life by 10-15 years. All roof types serviced including tile, metal, and Colorbond.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#C49826] hover:bg-[#A67F1E] text-[#0D0D0D] px-8 py-3 rounded font-bold transition-all"
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
            alt="Charcoal grey tiled roof freshly painted by Jetblack Painting"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgMetalRoof}
              alt="Colorbond metal roof painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgRoofCleaning}
              alt="High-pressure roof cleaning and preparation by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgVictorianRoof}
              alt="Restored Victorian tile roof by Jetblack Painting"
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
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Melbourne's Roof Painting Specialists</h2>
            <p className="text-lg text-[#B3ACA1] mb-4 leading-relaxed">
              Jetblack Painting provides professional roof painting and restoration services across Melbourne. A quality roof paint job not only transforms the look of your home but also protects against UV damage, moisture, and extends the life of your roof by 10-15 years.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Why Choose Our Roof Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#D4AB3A] flex-shrink-0 mt-1" />
                  <span className="text-[#B3ACA1] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <MidPageCTA heading="Get your free Roof Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#12100C] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Roof Painting Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#1A1713] px-4 py-2 rounded-lg border border-[#2A261F] text-[#EDE6D8] hover:border-[#D4AB3A] hover:text-[#D4AB3A] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Roof Painting FAQs</h2>
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
              <Link href="/services/interior-painting" className="text-[#C49826] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#C49826] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#C49826] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#C49826] hover:underline font-medium">Painting Blog</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Roof Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your roof painting project.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#C49826] hover:bg-[#A67F1E] text-[#0D0D0D] px-8 py-4 rounded font-bold text-lg transition-all"
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
