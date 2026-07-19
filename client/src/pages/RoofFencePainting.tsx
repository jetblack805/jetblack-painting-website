import { motion } from "framer-motion";
import { CheckCircle, Phone, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/service-roof-fence-painting.webp";

export default function RoofFencePainting() {
  const benefits = [
    "Extends roof life by 10-15 years with protective coating",
    "Professional surface preparation and priming",
    "Premium weather-resistant Dulux and Taubmans paints",
    "Handles all roof types: metal, tile, concrete, asphalt",
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
    <div className="min-h-screen bg-[#1A1713]">
      <SEOHead
        title="Roof & Fence Painting Melbourne | Professional Restoration | Jetblack Painting"
        description="Professional roof painting and fence painting Melbourne. Extends roof life 10-15 years, weather-resistant coatings, 5-star rated. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.com/services/roof-fence-painting/"
      schema={serviceSchema({ serviceType: "Roof & Fence Painting", name: "Roof & Fence Painting Melbourne", description: "Professional roof painting and fence painting Melbourne. Extends roof life 10-15 years, weather-resistant coatings, 5-star rated. Free quotes - Call 0432 077 782.", canonical: "https://jetblackpainting.com/services/roof-fence-painting/", faqs })}
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
              Roof & Fence Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional roof restoration and fence painting services. Extend your roof's life by 10-15 years with protective coatings and complete property transformation.
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
            alt="Roof and fence painting example by Jetblack Painting"
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
              Complete Roof & Fence Restoration Services
            </h2>
            <p className="text-lg text-[#B3ACA1] mb-4 leading-relaxed">
              Jetblack Painting provides professional roof painting and fence restoration services across Melbourne. Our specialised team handles all roof types and fence materials, delivering protective coatings that extend the life of your property's exterior features while enhancing curb appeal.
            </p>
            <p className="text-lg text-[#B3ACA1] mb-4 leading-relaxed">
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
            <div className="bg-[#12100C] p-6 rounded-lg">
              <Shield className="w-12 h-12 text-[#E3C878] mb-3" />
              <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">10-15</h3>
              <p className="text-[#B3ACA1]">Years of roof life extension</p>
            </div>
            <div className="bg-[#12100C] p-6 rounded-lg">
              <Zap className="w-12 h-12 text-[#E3C878] mb-3" />
              <h3 className="text-2xl font-bold text-[#EDE6D8] mb-2">All Types</h3>
              <p className="text-[#B3ACA1]">Metal, tile, concrete, asphalt</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Why Choose Our Roof & Fence Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E3C878] flex-shrink-0 mt-1" />
                  <span className="text-[#B3ACA1] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Roof Painting Section */}
          <MidPageCTA heading="Get your free Roof & Fence Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#12100C] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDE6D8] mb-4">Professional Roof Painting</h2>
            <p className="text-[#B3ACA1] mb-4">
              Our roof painting service includes thorough surface cleaning, rust removal, priming, and application of premium protective coatings. We work safely at heights and handle all roof types including:
            </p>
            <ul className="space-y-2 text-[#B3ACA1]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Metal roofing (Colorbond, Zincalume)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Ceramic and concrete tiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Asphalt and slate roofs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Flat roofs and membranes
              </li>
            </ul>
          </motion.div>

          {/* Fence Painting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#12100C] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDE6D8] mb-4">Professional Fence Painting & Staining</h2>
            <p className="text-[#B3ACA1] mb-4">
              We provide complete fence painting and staining services for all fence types. Our process includes surface preparation, priming, and application of durable finishes that protect against weathering and UV damage:
            </p>
            <ul className="space-y-2 text-[#B3ACA1]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Timber fence painting and staining
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Colorbond and metal fence painting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Composite fence finishing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C9A227]" />
                Deck and outdoor timber staining
              </li>
            </ul>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#1A1713] p-8 rounded-lg border border-[#2A261F]"
          >
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Roof & Fence Painting Service Areas</h2>
            <p className="text-[#B3ACA1] mb-4">We provide professional roof and fence painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#EDE6D8] mb-6">Roof & Fence Painting FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Roof & Fence Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your roof and fence painting project.
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
