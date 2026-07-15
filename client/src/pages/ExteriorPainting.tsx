import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-exterior-navy-weatherboard.webp";

export default function ExteriorPainting() {
  const benefits = [
    "Professional surface preparation and power washing",
    "Premium weather-resistant Dulux and Taubmans paints",
    "Expert colour consultation for maximum curb appeal",
    "Protection against Melbourne's harsh weather conditions",
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
      question: "How often should I repaint my home's exterior in Melbourne?",
      answer: "Most Melbourne homes need an exterior repaint every 7 to 10 years, though coastal and heavily sun-exposed properties can need it sooner. Weatherboard and timber usually need attention before rendered or brick surfaces. During your free quote we'll assess the current condition and give you an honest recommendation.",
    },
    {
      question: "What preparation is included in your exterior painting?",
      answer: "Proper preparation is where a lasting exterior finish is won or lost, so it's always included in our quote — never added later. That means pressure washing, scraping and sanding back flaking paint, filling and repairing surfaces, spot-priming bare timber and metal, and caulking gaps before any topcoats go on.",
    },
    {
      question: "What time of year is best for exterior painting in Melbourne?",
      answer: "Spring and autumn are ideal, but with Melbourne's variable weather we paint year-round by working to the conditions — applying coatings in suitable temperatures and humidity and allowing proper drying between coats. We simply schedule around wet spells so your finish cures correctly.",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Exterior Painting Melbourne | Weather-Resistant House Painters | Jetblack Painting"
        description="Expert exterior house painting in Melbourne. Weather-resistant coatings, professional preparation, 5-star rated. Servicing all Melbourne suburbs. Free quotes."
        canonical="https://jetblackpainting.com/services/exterior-painting/"
      schema={serviceSchema({ serviceType: "Exterior Painting", name: "Exterior Painting Melbourne", description: "Expert exterior house painting in Melbourne. Weather-resistant coatings, professional preparation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.", canonical: "https://jetblackpainting.com/services/exterior-painting/", faqs })}
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
              Professional Exterior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Protect and enhance your home's exterior with expert painting. Weather-resistant finishes designed for Melbourne's climate using premium Dulux products.
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
            alt="Exterior painting example by Jetblack Painting"
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
              Melbourne's Expert Exterior House Painters
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting provides premium exterior painting services across Melbourne. We specialise in protecting and beautifying homes with weather-resistant coatings that withstand Melbourne's harsh UV, rain, and coastal conditions. Our 13+ years of experience means we understand exactly what your home needs.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every exterior project includes thorough surface preparation including power washing, scraping, sanding, and priming. We handle all surface types including weatherboard, rendered walls, brick, timber, metal roofing, and concrete.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Choose Our Exterior Painting Service</h2>
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
          <MidPageCTA heading="Get your free Exterior Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Exterior Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide professional exterior painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Exterior Painting FAQs</h2>
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
              <Link href="/services/interior-painting" className="text-[#007A99] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#007A99] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#007A99] hover:underline font-medium">Roof Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Exterior Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your exterior painting project.
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
