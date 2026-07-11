import { motion } from "framer-motion";
import { CheckCircle, Phone, Clock, DollarSign, Users } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-exterior-tudor-heritage.jpeg";

export default function RentalPropertyPainting() {
  const benefits = [
    "Fast turnaround between tenancies",
    "Durable finishes that withstand tenant wear",
    "Professional property management coordination",
    "Premium quality Dulux and Taubmans paints",
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
    { name: "Keysborough", link: "/keysborough-painters" },
  ];

  const faqs = [
    {
      question: "How quickly can you complete rental property painting?",
      answer: "We understand the importance of minimising vacancy periods. Most rental properties can be painted within 3-7 days depending on size and scope. We coordinate with property managers to work around inspection schedules."
    },
    {
      question: "What colours are best for rental properties?",
      answer: "Neutral, durable colours like soft whites, light greys, and warm beiges are ideal for rental properties. They appeal to a wide range of tenants and hide wear better than darker colours. We recommend semi-gloss or satin finishes for durability."
    },
    {
      question: "Do you work with property managers?",
      answer: "Yes! We regularly work with property managers, real estate agencies, and landlords. We can coordinate painting schedules, provide quotes directly to your management company, and ensure minimal disruption to your tenants."
    },
    {
      question: "Can you paint between tenancies?",
      answer: "Absolutely. We specialise in quick turnarounds between tenants. We can schedule painting to fit your vacancy windows and ensure the property is ready for new tenants quickly."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Rental Property Painting Melbourne | Property Manager Painters | Jetblack Painting"
        description="Professional rental property painting Melbourne for landlords and property managers. Fast turnaround, durable finishes, 5-star rated. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.com/services/rental-property-painting"
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
              Rental Property Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional painting services for landlords and property managers. Fast turnaround, durable finishes, and minimal disruption to your investment properties.
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
            alt="Rental property painting example by Jetblack Painting"
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
              Keep Your Rental Properties Looking Fresh and Attractive
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting provides efficient rental property painting services for landlords, property managers, and real estate agencies across Melbourne. We understand the unique demands of maintaining rental properties—quick turnarounds, durable finishes, and professional coordination with your management team.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Our rental property painting service includes interior and exterior painting with durable, easy-to-maintain finishes. We work with neutral colour palettes that appeal to a wide range of tenants and coordinate painting schedules to minimise vacancy periods and lost rental income.
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
              <Clock className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">3-7</h3>
              <p className="text-gray-700">Days to complete</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg text-center">
              <Users className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">100+</h3>
              <p className="text-gray-700">Properties managed</p>
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 text-[#00AACC] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#0D0D0D] mb-2">5yr</h3>
              <p className="text-gray-700">Workmanship guarantee</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why Choose Our Rental Property Painting Service</h2>
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
          <MidPageCTA heading="Get your free Rental Property Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Rental Painting Service Areas</h2>
            <p className="text-gray-700 mb-4">We provide professional rental property painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Rental Property Painting FAQs</h2>
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
              <Link href="/services/exterior-painting" className="text-[#007A99] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#007A99] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#007A99] hover:underline font-medium">Roof Painting</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Rental Property Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your rental property painting project.
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
