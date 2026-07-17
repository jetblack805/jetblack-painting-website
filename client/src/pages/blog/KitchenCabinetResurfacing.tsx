import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

export default function KitchenCabinetResurfacing() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Kitchen Cabinet Resurfacing vs Replacement | Melbourne Guide | Jetblack Painting"
        description="Compare kitchen cabinet resurfacing vs replacement costs and outcomes for Melbourne homes with advice from Jetblack Painting."
        canonical="https://jetblackpainting.com/blog/kitchen-cabinet-resurfacing-vs-replacement/"
      />
      <Navbar />
      
      <article className="pt-32 pb-16 bg-white">
        <div className="container max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="inline-flex items-center text-[#007A99] hover:underline text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D0D0D] mb-4 leading-tight">
              Kitchen Cabinet Resurfacing vs Replacement: What Melbourne Homeowners Need to Know
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-gray-500 text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 mb-8">
              Your kitchen cabinets are looking tired, but does that mean you need a $30,000+ kitchen renovation? 
              Not necessarily. <strong>Kitchen cabinet resurfacing</strong> can transform your kitchen for a fraction 
              of the cost — and Jetblack Painting specialises in premium 2-pack finishes that look brand new.
            </p>

            <h2 className="text-2xl font-bold text-[#0D0D0D] mt-10 mb-4">What is Kitchen Cabinet Resurfacing?</h2>
            
            <p className="text-gray-700 mb-4">
              Cabinet resurfacing (also called refinishing or respraying) involves stripping the existing finish from your 
              cabinet doors and frames, then applying a new professional-grade coating. At Jetblack Painting, we use 
              <strong>2-pack polyurethane</strong> — the same finish used on luxury new kitchens — to deliver a factory-quality result.
            </p>

            <h2 className="text-2xl font-bold text-[#0D0D0D] mt-10 mb-4">Cost Comparison</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-[#0D0D0D] text-white">
                    <th className="border border-gray-300 p-3 text-left">Option</th>
                    <th className="border border-gray-300 p-3 text-left">Average Cost</th>
                    <th className="border border-gray-300 p-3 text-left">Timeframe</th>
                    <th className="border border-gray-300 p-3 text-left">Disruption</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-gray-200 p-3 font-semibold">Cabinet Resurfacing</td>
                    <td className="border border-gray-200 p-3">$3,500 - $8,000</td>
                    <td className="border border-gray-200 p-3">3-5 days</td>
                    <td className="border border-gray-200 p-3">Minimal</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-200 p-3 font-semibold">Full Kitchen Renovation</td>
                    <td className="border border-gray-200 p-3">$25,000 - $60,000+</td>
                    <td className="border border-gray-200 p-3">4-8 weeks</td>
                    <td className="border border-gray-200 p-3">Major</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-gray-700 mb-4">
              That's a saving of <strong>up to 85%</strong> compared to a full renovation, with results that look just as good.
            </p>

            <h2 className="text-2xl font-bold text-[#0D0D0D] mt-10 mb-4">When to Resurface vs Replace</h2>
            
            <h3 className="text-xl font-bold text-[#0D0D0D] mt-8 mb-3">Choose Resurfacing When:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Your cabinet boxes (frames) are structurally sound</li>
              <li>You're happy with your kitchen layout</li>
              <li>You want to change the colour or finish</li>
              <li>Your cabinets are solid timber or quality MDF</li>
              <li>You want a quick turnaround with minimal disruption</li>
            </ul>

            <h3 className="text-xl font-bold text-[#0D0D0D] mt-8 mb-3">Choose Replacement When:</h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
              <li>Cabinet boxes are water-damaged or warped</li>
              <li>You want to completely change the layout</li>
              <li>Cabinets are made from cheap particleboard that's deteriorating</li>
              <li>You need different sized cabinets for new appliances</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#0D0D0D] mt-10 mb-4">Our 2-Pack Cabinet Resurfacing Process</h2>
            
            <ol className="list-decimal pl-6 text-gray-700 space-y-3 mb-6">
              <li><strong>Consultation & colour selection</strong> — We visit your home and help you choose the perfect colour and finish</li>
              <li><strong>Door removal</strong> — All doors and drawer fronts are carefully removed and labelled</li>
              <li><strong>Surface preparation</strong> — Thorough sanding, cleaning, and priming of all surfaces</li>
              <li><strong>2-pack application</strong> — Professional spray application of 2-pack polyurethane in our controlled environment</li>
              <li><strong>Reinstallation</strong> — Doors are rehung with new hardware if requested</li>
              <li><strong>Final inspection</strong> — We ensure every surface is perfect before sign-off</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#0D0D0D] mt-10 mb-4">Popular Cabinet Colours in Melbourne</h2>
            
            <p className="text-gray-700 mb-4">
              The most requested cabinet colours across our projects in 
              <Link href="/painter-toorak" className="text-[#007A99] hover:underline"> Toorak</Link>, 
              <Link href="/painter-brighton" className="text-[#007A99] hover:underline"> Brighton</Link>, and 
              <Link href="/painter-malvern" className="text-[#007A99] hover:underline"> Malvern</Link> are:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
              <li><strong>White / Bright White</strong> — Timeless, clean, and makes kitchens feel larger</li>
              <li><strong>Charcoal / Dark Grey</strong> — Modern and sophisticated, especially for island benches</li>
              <li><strong>Navy Blue</strong> — A bold statement colour for feature cabinetry</li>
              <li><strong>Sage Green</strong> — On-trend and pairs beautifully with timber benchtops</li>
              <li><strong>Two-tone</strong> — Light uppers with dark lowers for visual interest</li>
            </ul>

            <div className="bg-[#F5F5F0] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">Transform Your Kitchen Today</h3>
              <p className="text-gray-700 mb-4">
                Get a free quote for professional kitchen cabinet resurfacing. We'll visit your home, assess your cabinets, 
                and provide a detailed quote within 24 hours.
              </p>
              <a
                href="tel:0432077782"
                className="inline-flex items-center px-6 py-3 bg-[#007A99] text-white font-bold rounded-lg hover:bg-[#006B85] transition-colors"
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
