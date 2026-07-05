import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import TrustBadges from "@/components/TrustBadges";
import PremiumServices from "@/components/PremiumServices";
import Gallery from "@/components/Gallery";
import Reviews from "@/components/Reviews";
import About from "@/components/About";
import QuoteForm from "@/components/QuoteForm";
import GoogleMap from "@/components/GoogleMap";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";

const suburbLandingPages = [
  { name: "Keysborough", link: "/keysborough-painters" },
  { name: "Armadale", link: "/painter-armadale" },
  { name: "Bayside", link: "/painter-bayside" },
  { name: "Bentleigh", link: "/painter-bentleigh" },
  { name: "Berwick", link: "/painter-berwick" },
  { name: "Brighton", link: "/painter-brighton" },
  { name: "Camberwell", link: "/painter-camberwell" },
  { name: "Carlton", link: "/painter-carlton" },
  { name: "Caulfield", link: "/painter-caulfield" },
  { name: "Dandenong", link: "/painter-dandenong" },
  { name: "Donvale", link: "/painter-donvale" },
  { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
  { name: "Hampton", link: "/painter-hampton" },
  { name: "Hawthorn", link: "/painter-hawthorn" },
  { name: "Kingston", link: "/painter-kingston" },
  { name: "Kew", link: "/painter-kew" },
  { name: "Malvern", link: "/painter-malvern" },
  { name: "Mentone", link: "/painter-mentone" },
  { name: "Moorabbin", link: "/painter-moorabbin" },
  { name: "Mordialloc", link: "/painter-mordialloc" },
  { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
  { name: "Sandringham", link: "/painter-sandringham" },
  { name: "Stonnington", link: "/painter-stonnington" },
  { name: "Toorak", link: "/painter-toorak" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Best Painters Melbourne | Local Painters Near Me | Free Quotes | Jetblack Painting"
        description="Best painters Melbourne — 5-star rated, fully insured, local painters near me. Interior, exterior, commercial, roof & cabinet painting across 30+ Melbourne suburbs. Servicing Brighton, Toorak, Keysborough, Mordialloc, Dandenong & more. Free quotes: 0432 077 782."
        canonical="https://jetblackpainting.com/"
      />
      <Navbar />
      <section className="bg-white border-b border-gray-100 py-8 pt-32">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D0D0D] mb-3">
            Best Painters Melbourne | Local Painters Near Me | Jetblack Painting
          </h1>
          <p className="text-gray-700 max-w-4xl">
            Jetblack Painting is Melbourne's top-rated local painting company — 5-star rated, fully insured, and servicing 30+ suburbs.
            We provide interior, exterior, roof, cabinet, and commercial painting for homeowners, landlords, and businesses.
            Based in Mordialloc, we cover Bayside, Kingston, Greater Dandenong, Brighton, Toorak, Keysborough, Dandenong, and all surrounding Melbourne areas.
            Free painting quotes — call 0432 077 782.
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
      <QuoteForm />
      <GoogleMap />
      <section className="py-14 bg-[#F5F5F0]">
        <div className="container">
          <h2 className="text-3xl font-bold text-[#0D0D0D] mb-4">Melbourne Suburb Painting Pages</h2>
          <p className="text-gray-700 mb-6">
            Explore suburb-specific painting pages for local service details, project focus, and quote options.
          </p>
          <div className="flex flex-wrap gap-3">
            {suburbLandingPages.map((suburb) => (
              <Link
                key={suburb.link}
                href={suburb.link}
                className="bg-white px-4 py-2 rounded-lg border border-gray-200 text-[#0D0D0D] hover:border-[#00AACC] hover:text-[#00AACC] transition-all font-medium"
              >
                Painters {suburb.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}
