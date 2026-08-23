import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBadges from "@/components/TrustBadges";
import PremiumServices from "@/components/PremiumServices";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import ProcessSection from "@/components/ProcessSection";
import About from "@/components/About";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const QuoteForm = lazy(() => import("@/components/QuoteForm"));

const homeSchema = [
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://jetblackpainting.com/#business",
    "name": "Jetblack Painting",
    "image": "https://jetblackpainting.com/og-image.jpg",
    "telephone": "0432 077 782",
    "email": "jimmy@jetblackpainting.com",
    "url": "https://jetblackpainting.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mordialloc",
      "addressRegion": "VIC",
      "postalCode": "3195",
      "addressCountry": "AU"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -38.0131,
      "longitude": 145.0965
    },
    "areaServed": [
      { "@type": "City", "name": "Mordialloc" },
      { "@type": "City", "name": "Armadale" },
      { "@type": "City", "name": "Aspendale" },
      { "@type": "City", "name": "Bayside" },
      { "@type": "City", "name": "Beaumaris" },
      { "@type": "City", "name": "Bentleigh" },
      { "@type": "City", "name": "Berwick" },
      { "@type": "City", "name": "Black Rock" },
      { "@type": "City", "name": "Bonbeach" },
      { "@type": "City", "name": "Box Hill" },
      { "@type": "City", "name": "Brighton" },
      { "@type": "City", "name": "Brighton East" },
      { "@type": "City", "name": "Camberwell" },
      { "@type": "City", "name": "Carlton" },
      { "@type": "City", "name": "Carrum" },
      { "@type": "City", "name": "Caulfield" },
      { "@type": "City", "name": "Chadstone" },
      { "@type": "City", "name": "Chelsea" },
      { "@type": "City", "name": "Cheltenham" },
      { "@type": "City", "name": "Clarinda" },
      { "@type": "City", "name": "Croydon" },
      { "@type": "City", "name": "Dandenong" },
      { "@type": "City", "name": "Doncaster" },
      { "@type": "City", "name": "Donvale" },
      { "@type": "City", "name": "Edithvale" },
      { "@type": "City", "name": "Elsternwick" },
      { "@type": "City", "name": "Glen Waverley" },
      { "@type": "City", "name": "Greater Dandenong" },
      { "@type": "City", "name": "Hampton" },
      { "@type": "City", "name": "Hawthorn" },
      { "@type": "City", "name": "Heatherton" },
      { "@type": "City", "name": "Highett" },
      { "@type": "City", "name": "Keysborough" },
      { "@type": "City", "name": "Kew" },
      { "@type": "City", "name": "Kingston" },
      { "@type": "City", "name": "Malvern" },
      { "@type": "City", "name": "McKinnon" },
      { "@type": "City", "name": "Mentone" },
      { "@type": "City", "name": "Moorabbin" },
      { "@type": "City", "name": "Mornington Peninsula" },
      { "@type": "City", "name": "Murrumbeena" },
      { "@type": "City", "name": "Oakleigh" },
      { "@type": "City", "name": "Ormond" },
      { "@type": "City", "name": "Parkdale" },
      { "@type": "City", "name": "Ringwood" },
      { "@type": "City", "name": "Sandringham" },
      { "@type": "City", "name": "South Yarra" },
      { "@type": "City", "name": "Stonnington" },
      { "@type": "City", "name": "Templestowe" },
      { "@type": "City", "name": "Toorak" },
      { "@type": "City", "name": "Wheelers Hill" }
    ],
    "description": "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 90+ Melbourne suburbs.",
    // Deliberately omits aggregateRating. client/index.html already declares
    // this exact "#business" @id with a rating AND the six supporting Review
    // objects, and that block is NOT marked data-static-schema, so SEOHead's
    // cleanup selector never removes it. Both therefore survive in the rendered
    // DOM, and Google saw two aggregateRating values for one entity on "/" —
    // which is what kept GSC's "Review has multiple aggregate ratings"
    // validation failing on the homepage after the 2026-08-11 fix cleared the
    // 96 suburb pages. The static block is a strict superset (it also carries
    // sameAs, hasOfferCatalog, logo, founder and serviceArea), so the rating
    // stays there and this copy defers to it — the same rule SuburbPageTemplate
    // and serviceSchema already follow.
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "07:00",
      "closes": "18:00"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Jetblack Painting",
    "url": "https://jetblackpainting.com",
    "description": "Professional house painters in Melbourne. Interior, exterior, commercial and roof painting across 90+ suburbs."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Jetblack Painting | House & Commercial Painters Melbourne"
        description="Melbourne painters for interior, exterior, commercial and roof work. Servicing 90+ suburbs from Mordialloc. $10M insured, 5-year guarantee. Call 0432 077 782."
        canonical="https://jetblackpainting.com/"
        schema={homeSchema}
      />
      <Navbar />
      <main>
      <Hero />
      <section className="bg-[#060607] py-14 border-t border-white/[0.06]">
        <div className="container max-w-4xl text-center">
          {/* h2, not h1: Hero.tsx already renders the page's one H1
              ("Premium Painting. Exceptional Results.") above this section.
              PR #157 turned this from a <p> into a second <h1>, which is an
              on-page SEO fault — a page should carry exactly one H1. All
              classes are unchanged, so this is not a visual change. */}
          <h2 className="text-2xl md:text-3xl text-[#FCFCFC] mb-3" style={{ fontFamily: "Georgia, serif" }}>
            Melbourne's Best-Rated Local House Painters
          </h2>
          <p className="text-[#98989D] text-sm md:text-base font-light leading-relaxed">
            5-star rated, fully insured, and servicing 90+ suburbs across Melbourne — interior, exterior, roof, cabinet, and commercial painting.
            Based in Mordialloc, covering Bayside, Kingston, Greater Dandenong, Brighton, Toorak, Keysborough, Dandenong, and surrounding areas.
            Free quotes — call 0432 077 782.
          </p>
        </div>
      </section>
      <TrustBadges />
      <Services />
      <PremiumServices />
      <Gallery />
      <Reviews />
      <ProcessSection />
      <About />
      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <QuoteForm />
      </Suspense>
      <GoogleMap />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}