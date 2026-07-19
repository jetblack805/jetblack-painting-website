import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

export default function PrepareHomePainting() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="How to Prepare Your Home for Painting | Melbourne Guide | Jetblack Painting"
        description="Prepare your Melbourne home for professional painting with this practical checklist from Jetblack Painting for smoother, higher-quality results."
        canonical="https://jetblackpainting.com/blog/prepare-home-for-painting/"
      />
      <Navbar />
      
      <article className="pt-32 pb-16 bg-[#131316]">
        <div className="container max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="inline-flex items-center text-[#D0A050] hover:underline text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EDEDEF] mb-4 leading-tight">
              How to Prepare Your Melbourne Home for Professional Painting
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Getting your home ready for professional painters ensures the best results and helps the job run smoothly. 
              Here's our complete checklist from 13+ years of painting Melbourne homes.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Before the Painters Arrive</h2>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">1. Clear the Rooms</h3>
            <p className="text-[#B4B4B8] mb-4">
              Move furniture away from walls or into the centre of the room. Remove wall hangings, curtains, and light switch covers. 
              The more space our <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline">interior painting team</Link> has 
              to work, the faster and more efficient the job will be.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">2. Identify Problem Areas</h3>
            <p className="text-[#B4B4B8] mb-4">
              Walk through your home and note any areas with:
            </p>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-4">
              <li>Peeling or flaking paint</li>
              <li>Cracks in walls or ceilings</li>
              <li>Water stains or mould</li>
              <li>Nail holes or dents</li>
              <li>Areas where paint has yellowed</li>
            </ul>
            <p className="text-[#B4B4B8] mb-4">
              Point these out to your painter during the quote stage so they can factor in the preparation work needed.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">3. Exterior Preparation</h3>
            <p className="text-[#B4B4B8] mb-4">
              For <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline">exterior painting</Link>, ensure:
            </p>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-4">
              <li>Garden beds are trimmed back from walls (30cm clearance)</li>
              <li>Outdoor furniture and pot plants are moved away</li>
              <li>Cars are parked away from the house</li>
              <li>Gates are unlocked for access</li>
              <li>Pets are secured inside or in a separate area</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">What Professional Painters Handle</h2>
            
            <p className="text-[#B4B4B8] mb-4">
              At Jetblack Painting, our preparation process includes:
            </p>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li><strong>Surface washing</strong> — High-pressure cleaning for exteriors</li>
              <li><strong>Sanding</strong> — Smoothing rough surfaces for a flawless finish</li>
              <li><strong>Filling</strong> — Repairing cracks, holes, and imperfections</li>
              <li><strong>Priming</strong> — Applying primer to bare surfaces and stained areas</li>
              <li><strong>Masking</strong> — Protecting floors, fixtures, and surfaces not being painted</li>
              <li><strong>Drop sheets</strong> — Covering all furniture and flooring</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Best Time to Paint in Melbourne</h2>
            
            <p className="text-[#B4B4B8] mb-4">
              Melbourne's weather plays a big role in painting schedules:
            </p>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li><strong>Interior painting</strong> — Can be done year-round (we control the environment)</li>
              <li><strong>Exterior painting</strong> — Best between October and April when it's drier and warmer</li>
              <li><strong>Avoid</strong> — Days below 10°C or above 35°C, and high humidity days</li>
            </ul>

            <p className="text-[#B4B4B8] mb-6">
              We monitor weather forecasts closely and schedule exterior work on optimal days. This is especially important 
              for homes in coastal areas like <Link href="/painter-brighton" className="text-[#D0A050] hover:underline">Brighton</Link> and 
              <Link href="/painter-hampton" className="text-[#D0A050] hover:underline"> Hampton</Link> where salt air can affect drying times.
            </p>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Book Your Free Quote</h3>
              <p className="text-[#B4B4B8] mb-4">
                Ready to get your home painted? We'll handle all the preparation work for you. 
                Call now for a free, no-obligation quote.
              </p>
              <a
                href="tel:0432077782"
                className="inline-flex items-center px-6 py-3 bg-[#D0A050] text-[#0A0A0B] font-bold rounded-lg hover:bg-[#B0863C] transition-colors"
              >
                Call Now: 0432 077 782
              </a>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
