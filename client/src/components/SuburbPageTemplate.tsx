import { motion } from "framer-motion";
import { Star, Phone, MapPin, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "./SEOHead";

interface SuburbPageProps {
  suburb: string;
  description: string;
  neighbouringSuburbs: { name: string; link: string }[];
  localExpertise: string;
  propertyTypes: string;
}

export default function SuburbPageTemplate({
  suburb,
  description,
  neighbouringSuburbs,
  localExpertise,
  propertyTypes,
}: SuburbPageProps) {
  const services = [
    "Interior house painting",
    "Exterior house painting",
    "Commercial painting",
    "Kitchen cabinet resurfacing",
    "Roof painting",
    "Pre-sale property painting",
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title={`House Painters ${suburb} | Interior & Exterior Painting`}
        description={`Premium house painters in ${suburb}. Interior, exterior & commercial painting with 5-star workmanship. Servicing all ${suburb} homes. Free quotes.`}
        canonical={`https://jetblackpainting.manus.space/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              House Painters {suburb}
            </h1>
            <p className="text-xl text-gray-300 mb-6">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0432077782"
                className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Serving {suburb} and surrounding suburbs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          {/* Interior Painting Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Interior Painting {suburb}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Transform your {suburb} home with professional interior painting by Jetblack Painting. We specialise in premium finishes for living rooms, bedrooms, kitchens, and bathrooms using top-quality Dulux and Taubmans paints. Our experienced team delivers flawless results with minimal disruption to your household.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Whether you need a full interior repaint, feature walls, or ceiling painting, our {suburb} painting team provides expert colour consultation and meticulous preparation for a long-lasting finish.
            </p>
            <Link
              href="/services/interior-painting"
              className="text-[#00AACC] font-semibold hover:underline"
            >
              Learn more about our interior painting services →
            </Link>
          </motion.div>

          {/* Exterior Painting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Exterior Painting {suburb}
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Protect and beautify your {suburb} property with expert exterior painting. We understand {propertyTypes} and use weather-resistant coatings designed for Melbourne's climate. Our team handles everything from weatherboard homes to rendered surfaces, brick, and timber.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every exterior project includes thorough surface preparation, power washing, priming, and premium topcoats to ensure your {suburb} home looks stunning and stays protected for years.
            </p>
            <Link
              href="/services/exterior-painting"
              className="text-[#00AACC] font-semibold hover:underline"
            >
              Learn more about our exterior painting services →
            </Link>
          </motion.div>

          {/* Why Suburb Chooses Jetblack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Why {suburb} Chooses Jetblack Painting
            </h2>
            <div className="space-y-4 mb-6">
              {[
                `13+ years experience serving ${suburb}`,
                `5-star Google rating from ${suburb} customers`,
                "Fully licensed and insured with $20M public liability",
                "Free, no-obligation quotes within 24 hours",
                "Professional team with attention to detail",
                "Premium Dulux and Taubmans paints",
                "5-year workmanship guarantee",
                "Minimal disruption to your home",
              ].map((reason, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <p className="text-gray-700">{localExpertise}</p>
            </div>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Painting Services in {suburb}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00AACC]"
                >
                  <p className="text-gray-700 text-lg font-semibold">{service}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Recent Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Recent Projects in {suburb}
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "Jetblack Painting transformed our {suburb} home. Professional,
                  punctual, and exceptional quality! Highly recommend."
                </p>
                <p className="font-bold text-[#0D0D0D]">Local {suburb} Customer</p>
              </div>
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  "The team was fantastic. They handled our exterior painting
                  perfectly and left everything spotless. Best painters in {suburb}!"
                </p>
                <p className="font-bold text-[#0D0D0D]">Verified {suburb} Review</p>
              </div>
            </div>
          </motion.div>

          {/* Neighbouring Suburbs - Internal Linking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#0D0D0D] mb-4">
              Also Serving Nearby Suburbs
            </h3>
            <div className="flex flex-wrap gap-3">
              {neighbouringSuburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-[#0D0D0D] hover:border-[#00AACC] hover:text-[#00AACC] transition-all font-medium"
                >
                  Painters {s.name}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/services/interior-painting"
                className="text-[#00AACC] hover:underline font-medium"
              >
                Interior Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/exterior-painting"
                className="text-[#00AACC] hover:underline font-medium"
              >
                Exterior Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/commercial-painting"
                className="text-[#00AACC] hover:underline font-medium"
              >
                Commercial Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/roof-painting"
                className="text-[#00AACC] hover:underline font-medium"
              >
                Roof Painting
              </Link>
            </div>
          </motion.div>

          {/* CTA - Get Your Free Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">
              Get Your Free Quote
            </h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your{" "}
              {suburb} painting project. Call now or request a quote online.
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
