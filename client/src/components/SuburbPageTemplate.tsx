import { Star, Phone, MapPin, CheckCircle } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "./SEOHead";
import Navbar from "./Navbar";
import Footer from "./Footer";
import MidPageCTA from "./MidPageCTA";
import { getSuburbData, getEmbedMapSrc } from "../suburbsData";
import imgExteriorWork from "@/assets/images/gallery-exterior-navy-weatherboard.webp";
import imgCommercialWork from "@/assets/images/gallery-commercial-epoxy-floor.webp";
import imgRoofWork from "@/assets/images/gallery-roof-victorian-restoration.webp";

interface SuburbPageProps {
  title: string;
  suburb: string;
  description: string;
  neighbouringSuburbs: { name: string; link: string }[];
  localExpertise: string;
  propertyTypes: string;
  faqs?: { question: string; answer: string }[];
  schema?: object | object[];
  localContent?: { heading: string; body: string | string[] }[];
}

const coreServices = [
  { name: "Interior house painting", link: "/services/interior-painting" },
  { name: "Exterior house painting", link: "/services/exterior-painting" },
  { name: "Commercial painting", link: "/services/commercial-painting" },
  { name: "Kitchen cabinet resurfacing", link: "/services/kitchen-cabinet-resurfacing" },
  { name: "Roof painting", link: "/services/roof-painting" },
  { name: "Real estate painting", link: "/services/real-estate-painting" },
];

const KNOWN_LANDING_PATHS = new Set([
  "/keysborough-painters",
  "/painter-armadale",
  "/painter-bayside",
  "/painter-bentleigh",
  "/painter-bentleigh-east",
  "/painter-berwick",
  "/painter-brighton",
  "/painter-camberwell",
  "/painter-carlton",
  "/painter-caulfield",
  "/painter-dandenong",
  "/painter-donvale",
  "/painter-dromana",
  "/painter-greater-dandenong",
  "/painter-hampton",
  "/painter-hampton-east",
  "/painter-hawthorn",
  "/painter-kingston",
  "/painter-kew",
  "/painter-malvern",
  "/painter-malvern-east",
  "/painter-mentone",
  "/painter-moorabbin",
  "/painter-mordialloc",
  "/painter-mornington-peninsula",
  "/painter-sandringham",
  "/painter-seaford",
  "/painter-stonnington",
  "/painter-toorak",
  // Additional suburbs
  "/painter-box-hill",
  "/painter-cranbourne",
  "/painter-croydon",
  "/painter-doncaster",
  "/painter-glen-waverley",
  "/painter-mckinnon",
  "/painter-narre-warren",
  "/painter-murrumbeena",
  "/painter-ormond",
  "/painter-ringwood",
  "/painter-rosebud",
  "/painter-templestowe",
  "/painter-thornbury",
  "/painter-wheelers-hill",
  "/painter-windsor",
  "/painter-cheltenham",
  "/painter-parkdale",
  "/painter-patterson-lakes",
  "/painter-aspendale",
  "/painter-aspendale-gardens",
  "/painter-chelsea",
  "/painter-chelsea-heights",
  "/painter-south-yarra",
  "/painter-elsternwick",
  "/painter-beaumaris",
  "/painter-black-rock",
  "/painter-brighton-east",
  "/painter-highett",
  "/painter-heatherton",
  "/painter-edithvale",
  "/painter-bonbeach",
  "/painter-carrum",
  "/painter-oakleigh",
  "/painter-clarinda",
  "/painter-dingley-village",
  "/painter-chadstone",
  "/painter-frankston",
  "/painter-frankston-south",
  "/painter-mornington",
  "/painter-mount-eliza",
  "/painter-glen-iris",
  "/painter-prahran",
  "/painter-balwyn",
  "/painter-mount-martha",
  "/painter-elwood",
  "/painter-st-kilda",
  "/painter-port-melbourne",
  "/painter-albert-park",
  "/painter-fitzroy",
  "/painter-clyde-north",
  "/painter-collingwood",
  "/painter-richmond",
  "/painter-northcote",
  "/painter-brunswick",
  "/painter-south-melbourne",
  "/painter-carnegie",
  "/painter-hughesdale",
  "/painter-braeside",
  "/painter-waterways",
  "/painter-safety-beach",
  "/painter-rye",
  "/painter-hampton-park",
  "/painter-endeavour-hills",
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
  localContent = [],
}: SuburbPageProps) {
  const canonical = `https://jetblackpainting.com${primarySuburbPath(suburb)}/`;
  const validNeighbouringSuburbs = neighbouringSuburbs.filter((s) => KNOWN_LANDING_PATHS.has(s.link));
  const extraSchemas = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
  const breadcrumbId = `${canonical}#breadcrumb`;

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": "https://jetblackpainting.com/#business",
    name: "Jetblack Painting",
    alternateName: ["Jet Black Painting", "Jetblack Painting Melbourne"],
    url: "https://jetblackpainting.com",
    image: "https://jetblackpainting.com/og-image.jpg",
    telephone: "+61432077782",
    email: "jimmy@jetblackpainting.com",
    priceRange: "$$",
    aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "14", bestRating: "5" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mordialloc",
      addressRegion: "VIC",
      postalCode: "3195",
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
      "https://www.facebook.com/jetblackpainting",
      "https://www.youtube.com/@jetblackpaint",
      "https://www.tiktok.com/@jetblack_painting",
      "https://www.patreon.com/jetblack_painting",
      "https://pin.it/7f3uTghY1",
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
      "@id": "https://jetblackpainting.com/#website",
      name: "Jetblack Painting",
      url: "https://jetblackpainting.com",
    },
    breadcrumb: {
      "@id": breadcrumbId,
    },
    about: { "@id": "https://jetblackpainting.com/#business" },
    primaryImageOfPage: "https://jetblackpainting.com/og-image.jpg",
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
      "@id": "https://jetblackpainting.com/#business",
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
        item: "https://jetblackpainting.com/",
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
      url: `https://jetblackpainting.com${item.link}`,
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
    <div className="min-h-screen bg-[#131316]">
      <SEOHead title={title} description={description} canonical={canonical} schema={pageSchema} />
      <Navbar />

      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white pt-32 pb-16">
        <div className="container">
          <div>
            <p className="text-[#E9BE6C] font-semibold uppercase tracking-wide mb-3">
              Local {suburb} Painting Contractor
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">House Painters {suburb}</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-3xl">{description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:0432077782"
                style={{ color: "#0A0A0B", WebkitTextFillColor: "#0A0A0B" }}
                className="inline-flex items-center justify-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-3 rounded font-bold transition-colors"
              >
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <a
                href="#quote"
                className="inline-flex items-center justify-center gap-2 border border-white/30 hover:border-[#E9BE6C] text-white px-8 py-3 rounded font-bold transition-all"
              >
                Get a Free Quote
              </a>
              <div className="flex items-center gap-2 text-gray-300">
                <MapPin className="w-5 h-5" />
                <span>Local painters near you — serving {suburb} and nearby Melbourne suburbs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-[#0C0C0E] border-b border-[#1B1B1F]">
        <div className="container max-w-5xl">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#131316] p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#EDEDEF] mb-2">Need painters in {suburb}?</h2>
              <p className="text-[#B4B4B8]">
                Jetblack Painting provides free written quotes, premium preparation and clean, reliable workmanship across {suburb}.
              </p>
            </div>
            <div className="bg-[#131316] p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#EDEDEF] mb-2">Local services</h2>
              <p className="text-[#B4B4B8]">
                Interior painting, exterior painting, commercial repaints, roof painting and kitchen cabinet resurfacing.
              </p>
            </div>
            <div className="bg-[#131316] p-6 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold text-[#EDEDEF] mb-2">Trusted local painters</h2>
              <p className="text-[#B4B4B8]">
                Melbourne-based and fully insured, with a 5-star Google rating and a 5-year workmanship guarantee on every {suburb} project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          {localContent.length > 0 && (
            <div className="mb-12">
              {localContent.map((block) => (
                <div key={block.heading} className="mb-10">
                  <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">{block.heading}</h2>
                  {/* `body` is written as a single template-literal string on most suburb
                      pages and as a string[] on others — normalise so either shape renders
                      instead of throwing ("<string>.map is not a function") during hydration. */}
                  {(Array.isArray(block.body) ? block.body : [block.body]).map((para, i) => (
                    <p key={i} className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          )}

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Interior Painting {suburb}</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Transform your {suburb} home with professional interior painting by Jetblack Painting. We specialise in premium finishes for living rooms, bedrooms, kitchens, bathrooms, ceilings, trims and doors using proven paint systems from leading Australian brands.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Whether you need a full interior repaint, a rental refresh, a pre-sale makeover or a feature wall, our {suburb} painting team focuses on preparation, sharp cutting-in and a durable finish that helps your property present properly.
            </p>
            <Link href="/services/interior-painting" className="text-[#D0A050] font-semibold hover:underline">
              Learn more about our interior painting services →
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Exterior Painting {suburb}</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Protect and lift your {suburb} property with exterior painting built around proper washing, sanding, filling, priming and weather-resistant topcoats. We understand {propertyTypes}
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Every exterior project is quoted with the prep included, not hidden later. That means cleaner lines, stronger adhesion and a finish that suits Melbourne weather conditions.
            </p>
            <Link href="/services/exterior-painting" className="text-[#D0A050] font-semibold hover:underline">
              Learn more about our exterior painting services →
            </Link>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why {suburb} Chooses Jetblack Painting</h2>
            <div className="space-y-4 mb-6">
              {[
                `Local painting quotes for ${suburb} homes and businesses`,
                "Interior, exterior, roof, commercial and cabinet painting options",
                "Fully insured with professional site protection",
                "Clear written quotes with scope, prep and coatings included",
                "Premium finish standards for owner-occupied homes, rentals and pre-sale work",
                "Fast response by phone on 0432 077 782",
                "Local knowledge of homes and paint conditions in your area",
                "Clean work areas and minimal disruption to your home",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{reason}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0C0C0E] p-6 rounded-lg">
              <p className="text-[#B4B4B8]">{localExpertise}</p>
            </div>
          </div>

          <MidPageCTA heading={`Get your free ${suburb} painting quote today`} />

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Painting Services in {suburb}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {coreServices.map((service) => (
                <Link key={service.name} href={service.link} className="bg-[#101013] p-6 rounded-lg border-l-4 border-[#E9BE6C] hover:bg-[#131316] hover:shadow-md transition-all">
                  <p className="text-[#EDEDEF] text-lg font-semibold">{service.name} {suburb}</p>
                  <p className="text-[#A3A3A8] mt-2 text-sm">View service details and request a quote.</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Our Painting Work</h2>
            <p className="text-[#B4B4B8] mb-6">
              A selection of recent interior, exterior and commercial painting projects completed by Jetblack Painting across Melbourne.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <img
                src={imgExteriorWork}
                alt={`Exterior house painting example by Jetblack Painting, servicing ${suburb}`}
                className="rounded-lg shadow-sm w-full h-56 object-cover"
                loading="lazy"
              />
              <img
                src={imgCommercialWork}
                alt={`Commercial painting example by Jetblack Painting, servicing ${suburb}`}
                className="rounded-lg shadow-sm w-full h-56 object-cover"
                loading="lazy"
              />
              <img
                src={imgRoofWork}
                alt={`Roof painting example by Jetblack Painting, servicing ${suburb}`}
                className="rounded-lg shadow-sm w-full h-56 object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Rated 5 Stars by Melbourne Customers</h2>
            <div className="bg-[#0C0C0E] p-6 rounded-lg flex flex-col sm:flex-row items-center gap-4 justify-between">
              <div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-[#B4B4B8]">
                  Jetblack Painting holds a 5.0-star Google rating from verified customer reviews across Melbourne.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/place/Jetblack+Painting"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0A0A0B", WebkitTextFillColor: "#0A0A0B" }}
                className="shrink-0 inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-6 py-3 rounded font-bold transition-colors"
              >
                Read our Google reviews
              </a>
            </div>
          </div>

          {faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Find Us on Google Maps - {suburb} Painters</h2>
              <p className="text-[#B4B4B8] mb-6 leading-relaxed">
                Based in Mordialloc, Melbourne, Jetblack Painting services {suburb} and all surrounding suburbs. Find us on Google Maps or call for immediate assistance.
              </p>
              {getSuburbData(suburb) && (
                <div className="rounded-xl overflow-hidden shadow-lg mb-8">
                  <iframe
                    src={getEmbedMapSrc(getSuburbData(suburb)!.coordinates, suburb)}
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Jetblack Painting - House Painters in ${suburb}, Melbourne`}
                  ></iframe>
                </div>
              )}
              <div className="bg-[#0C0C0E] p-6 rounded-lg">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-[#EDEDEF] mb-2 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-[#E9BE6C]" />
                      Main Office
                    </h3>
                    <p className="text-[#B4B4B8]">Mordialloc VIC 3195</p>
                    <p className="text-[#B4B4B8] mt-2 font-semibold">Australia</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#EDEDEF] mb-2 flex items-center gap-2">
                      <Phone className="w-5 h-5 text-[#E9BE6C]" />
                      Contact Us
                    </h3>
                    <p className="text-[#B4B4B8]">
                      <a href="tel:0432077782" className="text-[#D0A050] hover:underline font-bold">
                        0432 077 782
                      </a>
                    </p>
                    <p className="text-[#B4B4B8]">
                      <a href="mailto:jimmy@jetblackpainting.com" className="text-[#D0A050] hover:underline">
                        jimmy@jetblackpainting.com
                      </a>
                    </p>
                    <p className="text-[#A3A3A8] text-sm mt-3">Mon-Fri: 7am-5pm | Sat-Sun: 9am-5pm</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {faqs.length > 0 && (
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Frequently Asked Questions about Painting in {suburb}</h2>
              <div className="space-y-6">
                {faqs.map((faq) => (
                  <div key={faq.question} className="bg-[#101013] p-6 rounded-lg border border-[#1B1B1F]">
                    <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">{faq.question}</h3>
                    <p className="text-[#B4B4B8] leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {validNeighbouringSuburbs.length > 0 && (
            <div className="mb-12 bg-[#101013] p-8 rounded-lg">
              <h2 className="text-2xl font-bold text-[#EDEDEF] mb-4">Painters Near {suburb}</h2>
              <p className="text-[#B4B4B8] mb-5">
                We also service these nearby suburbs — if you're close to {suburb}, we've got you covered too.
              </p>
              <div className="flex flex-wrap gap-3">
                {validNeighbouringSuburbs.map((s) => (
                  <Link key={s.name} href={s.link} className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium">
                    Painters {s.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div id="quote" className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Get Your Free {suburb} Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your {suburb} painting project. Call now and speak directly with Jimmy.
            </p>
            <a href="tel:0432077782" style={{ color: "#0A0A0B", WebkitTextFillColor: "#0A0A0B" }} className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-4 rounded font-bold text-lg transition-colors">
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
