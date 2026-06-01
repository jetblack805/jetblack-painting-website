import { motion } from "framer-motion";
import { CheckCircle, Phone, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";

export default function RoofFencePainting() {
  const benefits = [
    "Extends roof life by 10-15 years with protective coating",
    "Professional surface preparation and priming",
    "Premium weather-resistant Dulux and Taubmans paints",
    "Handles all roof types: metal, tile, concrete, asphalt",
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
      question: "How long does roof painting take?",
      answer: "Most roof painting projects take 2-5 days depending on roof size and complexity. We work efficiently while maintaining safety standards and quality finishes."
    },
    {
      question: "What types of roofs can you paint?",
      answer: "We paint all roof types including metal roofing, ceramic tiles, concrete tiles, asphalt shingles, and flat roofs. Our team has experience with heritage roofs and modern materials."
    },
    {
      question: "How long will roof paint last?",
      answer: "Quality roof paint typically lasts 10-15 years depending on weather exposure and maintenance. Our premium coatings provide excellent UV protection and weather resistance."
    },
    {
      question: "Do you paint fences too?",
      answer: "Yes! We provide complete fence painting and staining services. We can paint timber, colorbond, and composite fences with durable finishes that withstand Melbourne's weather."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Roof & Fence Painting Melbourne | Professional Restoration | Jetblack Painting"
        description="Professional roof painting and fence painting Melbourne. Extends roof life 10-15 years, weather-resistant coatings, 5-star rated. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.manus.space/services/roof-fence-painting"
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
              Roof & Fence Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional roof restoration and fence painting services. Extend your roof's life by 10-15 years with protective coatings and complete property transformation.
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
              Complete Roof & Fence Restoration Services
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting provides professional roof painting and fence restoration services across Melbourne. Our specialised team handles all roof types and fence materials, delivering protective coatings that extend the life of your property's exterior features while enhancing curb appeal.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Roof painting is an investment in your home's longevity. Our premium coatings protect against UV damage, moisture penetration, and weather degradation, extending your roof's life by 10-15 years. Combined with professional fence painting, your property receives complete exterior protection and aesthetic enhancement.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <Shield className="w-12 h-12 text-[#00AACC] mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">10-15</h3>
              <p className="text-gray-700">Years of roof life extension</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <Zap className="w-12 h-12 text-[#00AACC] mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">All Types</h3>
              <p className="text-gray-700">Metal, tile, concrete, asphalt</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Choose Our Roof & Fence Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Roof Painting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4">Professional Roof Painting</h2>
            <p className="text-gray-700 mb-4">
              Our roof painting service includes thorough surface cleaning, rust removal, priming, and application of premium protective coatings. We work safely at heights and handle all roof types including:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Metal roofing (Colorbond, Zincalume)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Ceramic and concrete tiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Asphalt and slate roofs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Flat roofs and membranes
              </li>
            </ul>
          </motion.div>

          {/* Fence Painting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4">Professional Fence Painting & Staining</h2>
            <p className="text-gray-700 mb-4">
              We provide complete fence painting and staining services for all fence types. Our process includes surface preparation, priming, and application of durable finishes that protect against weathering and UV damage:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Timber fence painting and staining
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Colorbond and metal fence painting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Composite fence finishing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00AACC]" />
                Deck and outdoor timber staining
              </li>
            </ul>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-white p-8 rounded-lg border border-gray-200"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Roof & Fence Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide professional roof and fence painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Roof & Fence Painting FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Roof & Fence Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your roof and fence painting project.
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
