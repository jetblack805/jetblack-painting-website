import { motion } from "framer-motion";
import { Star, Phone, MapPin, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "./SEOHead";

interface SuburbPageProps {
  title: string;
  suburb: string;
  description: string;
  neighbouringSuburbs: { name: string; link: string }[];
  localExpertise: string;
  propertyTypes: string;
  faqs?: { question: string; answer: string }[];
  schema?: object | object[];
}

const coreServices = [
  { name: "Interior house painting", link: "/services/interior-painting" },
  { name: "Exterior house painting", link: "/services/exterior-painting" },
  { name: "Commercial painting", link: "/services/commercial-painting" },
  { name: "Kitchen cabinet resurfacing", link: "/services/kitchen-cabinet-resurfacing" },
  { name: "Roof painting", link: "/services/roof-painting" },
  { name: "Pre-sale property painting", link: "/services/pre-sale-property-painting" },
];

const KNOWN_LANDING_PATHS = new Set([
  "/keysborough-painters",
  "/painter-armadale",
  "/painter-bayside",
  "/painter-bentleigh",
  "/painter-berwick",
  "/painter-brighton",
  "/painter-camberwell",
  "/painter-carlton",
  "/painter-caulfield",
  "/painter-dandenong",
  "/painter-donvale",
  "/painter-greater-dandenong",
  "/painter-hampton",
  "/painter-hawthorn",
  "/painter-kingston",
  "/painter-kew",
  "/painter-malvern",
  "/painter-mentone",
  "/painter-moorabbin",
  "/painter-mordialloc",
  "/painter-mornington-peninsula",
  "/painter-sandringham",
  "/painter-stonnington",
  "/painter-toorak",
]);

function suburbSlug(suburb: string) {
  return suburb.toLowerCase().replace(/&/g, "and").replace(/\s+/g, "-");
}

function primarySuburbPath(suburb: string) {
  return suburb.toLowerCase() === "keysborough" ? "/keysborough-painters" : `/painter-${suburbSlug(suburb)}`;
}

export default function SuburbPageTemplate({
  title,
  suburb,
  description,
  neighbouringSuburbs,
  localExpertise,
  propertyTypes,
  faqs = [],
  schema,
}: SuburbPageProps) {
  const canonical = `https://jetblackpainting.manus.space${primarySuburbPath(suburb)}`;
  const validNeighbouringSuburbs = neighbouringSuburbs.filter((s) => KNOWN_LANDING_PATHS.has(s.link));
  const extraSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const breadcrumbId = `${canonical}#breadcrumb`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://jetblackpainting.manus.space/#business",
    name: "Jetblack Painting",
    alternateName: ["Jet Black Painting", "Jetblack Painting Melbourne"],
    url: "https://jetblackpainting.manus.space",
    image: "https://jetblackpainting.manus.space/og-image.jpg",
    telephone: "+61432077782",
    email: "jimmy@jetblackpainting.com",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Keysborough",
      addressRegion: "VIC",
      postalCode: "3173",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: suburb,
      containedInPlace: {
        "@type": "State",
        name: "Victoria",
      },
    },
    sameAs: [
      "https://www.instagram.com/jetblack_painting",
      "https://www.google.com/maps/place/Jetblack+Painting",
    ],
  };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: title,
    description,
    isPartOf: {
      "@type": "WebSite",
      "@id": "https://jetblackpainting.manus.space/#website",
      name: "Jetblack Painting",
      url: "https://jetblackpainting.manus.space",
    },
    breadcrumb: {
      "@id": breadcrumbId,
    },
    about: localBusinessSchema,
    primaryImageOfPage: "https://jetblackpainting.manus.space/og-image.jpg",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${canonical}#painting-service`,
    name: `House Painters ${suburb}`,
    serviceType: [
      "Interior painting",
      "Exterior painting",
      "Commercial painting",
      "Roof painting",
      "Kitchen cabinet resurfacing",
    ],
    provider: {
      "@id": "https://jetblackpainting.manus.space/#business",
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    url: canonical,
    description,
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "AUD",
      url: canonical,
      description: `Free painting quotes in ${suburb} for interior, exterior and commercial painting projects.`,
    },
  };

  const faqSchema = faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://jetblackpainting.manus.space/",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `Painters ${suburb}`,
        item: canonical,
      },
    ],
  };

  const internalLinksSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `Related painting links for ${suburb}`,
    itemListElement: [...coreServices, ...validNeighbouringSuburbs].map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `https://jetblackpainting.manus.space${item.link}`,
      name: `${item.name}`,
    })),
  };

  const pageSchema = [
    localBusinessSchema,
    webPageSchema,
    serviceSchema,
    breadcrumbSchema,
    internalLinksSchema,
    ...(faqSchema ? [faqSchema] : []),
    ...extraSchemas,
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead title={title} description={description} canonical={canonical} schema={pageSchema} />

      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="text-[#00AACC] font-semibold uppercase tracking-wide mb-3">
              Local {suburb} Painting Contractor
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">House Painters {suburb}</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0432077782"
                className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#00AACC] text-white px-8 py-3 rounded font-bold transition-all"
              >
                Get a Free Quote
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Serving {suburb} and nearby Melbourne suburbs</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-10 bg-[#F5F5F0] border-b border-gray-100">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0D0D0D] mb-2">Need painters in {suburb}?</h2>
              <p className="text-gray-700">
                Jetblack Painting provides free written quotes, premium preparation and clean, reliable workmanship across {suburb}.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0D0D0D] mb-2">Local services</h2>
              <p className="text-gray-700">
                Interior painting, exterior painting, commercial repaints, roof painting and kitchen cabinet resurfacing.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#0D0D0D] mb-2">Map trust signals</h2>
              <p className="text-gray-700">
                Melbourne-based, insured, review-focused and servicing {suburb} with suburb-specific landing pages and clear NAP signals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Interior Painting {suburb}</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Transform your {suburb} home with professional interior painting by Jetblack Painting. We specialise in premium finishes for living rooms, bedrooms, kitchens, bathrooms, ceilings, trims and doors using proven paint systems from leading Australian brands.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Whether you need a full interior repaint, a rental refresh, a pre-sale makeover or a feature wall, our {suburb} painting team focuses on preparation, sharp cutting-in and a durable finish that helps your property present properly.
            </p>
            <Link href="/services/interior-painting" className="text-[#00AACC] font-semibold hover:underline">
              Learn more about our interior painting services →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Exterior Painting {suburb}</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Protect and lift your {suburb} property with exterior painting built around proper washing, sanding, filling, priming and weather-resistant topcoats. We understand {propertyTypes}
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Every exterior project is quoted with the prep included, not hidden later. That means cleaner lines, stronger adhesion and a finish that suits Melbourne weather conditions.
            </p>
            <Link href="/services/exterior-painting" className="text-[#00AACC] font-semibold hover:underline">
              Learn more about our exterior painting services →
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Why {suburb} Chooses Jetblack Painting</h2>
            <div className="space-y-4 mb-6">
              {[
                `Local painting quotes for ${suburb} homes and businesses`,
                "Interior, exterior, roof, commercial and cabinet painting options",
                "Fully insured with professional site protection",
                "Clear written quotes with scope, prep and coatings included",
                "Premium finish standards for owner-occupied homes, rentals and pre-sale work",
                "Fast response by phone on 0432 077 782",
                "Suburb-specific service pages for better local search relevance",
                "Clean work areas and minimal disruption to your home",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{reason}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#F5F5F0] p-6 rounded-lg">
              <p className="text-gray-700">{localExpertise}</p>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Painting Services in {suburb}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service) => (
                <Link key={service.name} href={service.link} className="bg-gray-50 p-6 rounded-lg border-l-4 border-[#00AACC] hover:bg-white hover:shadow-md transition-all">
                  <p className="text-gray-900 text-lg font-semibold">{service.name} {suburb}</p>
                  <p className="text-gray-600 mt-2 text-sm">View service details and request a quote.</p>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Recent Projects in {suburb}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  “Jetblack Painting transformed our {suburb} home. Professional, punctual and a clean finish.”
                </p>
                <p className="font-bold text-[#0D0D0D]">Local {suburb} Customer</p>
              </div>
              <div className="bg-[#F5F5F0] p-6 rounded-lg">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">
                  “The team handled the prep properly, communicated clearly and left everything spotless.”
                </p>
                <p className="font-bold text-[#0D0D0D]">Verified {suburb} Review</p>
              </div>
            </div>
          </motion.div>

          {faqs.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
              <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Frequently Asked Questions about Painting in {suburb}</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {validNeighbouringSuburbs.length > 0 && (
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 bg-gray-50 p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#0D0D0D] mb-4">Painters Near {suburb}</h2>
              <p className="text-gray-700 mb-5">
                We also service nearby suburbs, so Google and customers can clearly understand the local painting service area around {suburb}.
              </p>
              <div className="flex flex-wrap gap-3">
                {validNeighbouringSuburbs.map((s) => (
                  <Link key={s.name} href={s.link} className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-[#0D0D0D] hover:border-[#00AACC] hover:text-[#00AACC] transition-all font-medium">
                    Painters {s.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}

          <motion.div id="quote" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free {suburb} Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your {suburb} painting project. Call now and speak directly with Jimmy.
            </p>
            <a href="tel:0432077782" className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all">
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
