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

export default function Home() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Best Painters Melbourne | Local Painters Near Me | Free Quotes | Jetblack Painting"
        description="Best painters Melbourne — 5-star rated, fully insured, local painters near me. Interior, exterior, commercial, roof & cabinet painting across 30+ Melbourne suburbs. Servicing Brighton, Toorak, Keysborough, Mordialloc, Dandenong & more. Free quotes: 0432 077 782."
        canonical="https://jetblackpainting.com/"
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
      <QuoteForm />
      <GoogleMap />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
