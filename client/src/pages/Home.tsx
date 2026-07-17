import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBadges from "@/components/TrustBadges";
import PremiumServices from "@/components/PremiumServices";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
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
      { "@type": "City", "name": "Brighton" },
      { "@type": "City", "name": "Toorak" },
      { "@type": "City", "name": "Camberwell" },
      { "@type": "City", "name": "Hawthorn" },
      { "@type": "City", "name": "Hampton" },
      { "@type": "City", "name": "Sandringham" },
      { "@type": "City", "name": "Cheltenham" },
      { "@type": "City", "name": "Keysborough" },
      { "@type": "City", "name": "Dandenong" },
      { "@type": "City", "name": "Glen Waverley" },
      { "@type": "City", "name": "Bentleigh" }
    ],
    "description": "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 30+ Melbourne suburbs.",
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
    "description": "Professional house painters in Melbourne. Interior, exterior, commercial and roof painting across 30+ suburbs."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Best Painters Melbourne | Local Painters Near Me | Free Quotes | Jetblack Painting"
        description="Best painters Melbourne — 5-star rated, fully insured, local painters near me. Interior, exterior, commercial, roof & cabinet painting across 30+ Melbourne suburbs. Servicing Brighton, Toorak, Keysborough, Mordialloc, Dandenong & more. Free quotes: 0432 077 782."
        canonical="https://jetblackpainting.com/"
        schema={homeSchema}
      />
      <Navbar />
      <main>
      <section className="bg-[#F5F5F0] pt-28 pb-6 lg:pt-32">
        <div className="container max-w-4xl text-center">
          <p className="text-2xl md:text-3xl font-bold text-[#0D0D0D] mb-2">
            Melbourne's Best-Rated Local House Painters
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            5-star rated, fully insured, and servicing 30+ suburbs across Melbourne — interior, exterior, roof, cabinet, and commercial painting.
            Based in Mordialloc, covering Bayside, Kingston, Greater Dandenong, Brighton, Toorak, Keysborough, Dandenong, and surrounding areas.
            Free quotes — call 0432 077 782.
          </p>
        </div>
      </section>
      <Hero />
      <TrustBadges />
      <Services />
      <PremiumServices />
      <Gallery />
      <Reviews />
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
