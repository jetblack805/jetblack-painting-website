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
        title="House Painters Melbourne | Interior & Exterior Painting Experts | Jetblack Painting"
        description="Premium house painters in Melbourne. 5-star rated, fully insured, interior & exterior painting specialists. Servicing all Melbourne suburbs. Free quotes - Call 0432 077 782."
        canonical="https://jetblackpainting.manus.space"
      />
      <Navbar />
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
      <Footer />
    </div>
  );
}
