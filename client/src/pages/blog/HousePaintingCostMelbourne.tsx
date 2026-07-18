import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

export default function HousePaintingCostMelbourne() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="House Painting Cost Melbourne (2026 Price Guide) | Jetblack Painting"
        description="Learn how much house painting costs in Melbourne with Jetblack Painting’s 2026 pricing guide for interior, exterior and commercial projects."
        canonical="https://jetblackpainting.com/blog/house-painting-cost-melbourne/"
      />
      <Navbar />
      
      <article className="pt-32 pb-16 bg-[#1A1713]">
        <div className="container max-w-3xl">
          {/* Breadcrumb */}
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="inline-flex items-center text-[#C49826] hover:underline text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EDE6D8] mb-4 leading-tight">
              How Much Does House Painting Cost in Melbourne? (2026 Price Guide)
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B857A] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A39C90] mb-8">
              One of the most common questions we get asked as <strong>professional painters in Melbourne</strong> is 
              "How much will it cost to paint my house?" Here's our comprehensive 2026 price guide based on 
              real projects we've completed across Melbourne.
            </p>

            <h2 className="text-2xl font-bold text-[#EDE6D8] mt-10 mb-4">Interior Painting Costs in Melbourne</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[#2A261F] text-sm">
                <thead>
                  <tr className="bg-[#0D0D0D] text-white">
                    <th className="border border-[#332E26] p-3 text-left">Service</th>
                    <th className="border border-[#332E26] p-3 text-left">Price Range (per m²)</th>
                    <th className="border border-[#332E26] p-3 text-left">Typical Room Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#1A1713]">
                    <td className="border border-[#2A261F] p-3">Walls only (2 coats)</td>
                    <td className="border border-[#2A261F] p-3">$20 - $35</td>
                    <td className="border border-[#2A261F] p-3">$400 - $800</td>
                  </tr>
                  <tr className="bg-[#17140F]">
                    <td className="border border-[#2A261F] p-3">Walls + ceiling</td>
                    <td className="border border-[#2A261F] p-3">$25 - $45</td>
                    <td className="border border-[#2A261F] p-3">$600 - $1,200</td>
                  </tr>
                  <tr className="bg-[#1A1713]">
                    <td className="border border-[#2A261F] p-3">Full room (walls, ceiling, trim)</td>
                    <td className="border border-[#2A261F] p-3">$35 - $55</td>
                    <td className="border border-[#2A261F] p-3">$800 - $1,500</td>
                  </tr>
                  <tr className="bg-[#17140F]">
                    <td className="border border-[#2A261F] p-3">Whole house interior (3-bed)</td>
                    <td className="border border-[#2A261F] p-3">—</td>
                    <td className="border border-[#2A261F] p-3">$5,000 - $12,000</td>
                  </tr>
                  <tr className="bg-[#1A1713]">
                    <td className="border border-[#2A261F] p-3">Whole house interior (4-bed)</td>
                    <td className="border border-[#2A261F] p-3">—</td>
                    <td className="border border-[#2A261F] p-3">$8,000 - $18,000</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#B3ACA1] mb-4">
              Our <Link href="/services/interior-painting" className="text-[#C49826] hover:underline">interior painting services</Link> include 
              thorough preparation (filling holes, sanding, priming), premium Dulux or Taubmans paint, and a spotless cleanup.
            </p>

            <h2 className="text-2xl font-bold text-[#EDE6D8] mt-10 mb-4">Exterior Painting Costs in Melbourne</h2>
            
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[#2A261F] text-sm">
                <thead>
                  <tr className="bg-[#0D0D0D] text-white">
                    <th className="border border-[#332E26] p-3 text-left">Home Size</th>
                    <th className="border border-[#332E26] p-3 text-left">Price Range</th>
                    <th className="border border-[#332E26] p-3 text-left">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#1A1713]">
                    <td className="border border-[#2A261F] p-3">Small (single storey, &lt;150m²)</td>
                    <td className="border border-[#2A261F] p-3">$4,000 - $8,000</td>
                    <td className="border border-[#2A261F] p-3">Walls, fascia, gutters</td>
                  </tr>
                  <tr className="bg-[#17140F]">
                    <td className="border border-[#2A261F] p-3">Medium (double storey, 150-250m²)</td>
                    <td className="border border-[#2A261F] p-3">$8,000 - $15,000</td>
                    <td className="border border-[#2A261F] p-3">Walls, fascia, gutters, trim</td>
                  </tr>
                  <tr className="bg-[#1A1713]">
                    <td className="border border-[#2A261F] p-3">Large (250m²+)</td>
                    <td className="border border-[#2A261F] p-3">$15,000 - $30,000+</td>
                    <td className="border border-[#2A261F] p-3">Full exterior package</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-[#B3ACA1] mb-4">
              Our <Link href="/services/exterior-painting" className="text-[#C49826] hover:underline">exterior painting services</Link> use 
              weather-resistant coatings designed for Melbourne's harsh UV and variable climate. We also offer 
              <Link href="/services/roof-painting" className="text-[#C49826] hover:underline"> roof painting</Link> from $3,500.
            </p>

            <h2 className="text-2xl font-bold text-[#EDE6D8] mt-10 mb-4">Factors That Affect Painting Costs</h2>
            
            <ul className="list-disc pl-6 text-[#B3ACA1] space-y-2 mb-6">
              <li><strong>Surface condition</strong> — Peeling paint, cracks, or water damage require more preparation</li>
              <li><strong>Number of coats</strong> — Dark-to-light colour changes may need 3+ coats</li>
              <li><strong>Height & access</strong> — Multi-storey homes require scaffolding ($500-$2,000 extra)</li>
              <li><strong>Paint quality</strong> — Premium paints cost more but last 10-15 years vs. 5-7 for budget options</li>
              <li><strong>Trim & detail work</strong> — Heritage homes with ornate trim cost more due to detailed preparation</li>
              <li><strong>Location</strong> — Premium suburbs like <Link href="/painter-toorak" className="text-[#C49826] hover:underline">Toorak</Link> and <Link href="/painter-brighton" className="text-[#C49826] hover:underline">Brighton</Link> often have larger homes</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDE6D8] mt-10 mb-4">How to Get an Accurate Quote</h2>
            
            <p className="text-[#B3ACA1] mb-4">
              The best way to get an accurate painting quote is to have a professional painter visit your property. 
              At Jetblack Painting, we provide <strong>free, no-obligation quotes</strong> that include:
            </p>

            <ul className="list-disc pl-6 text-[#B3ACA1] space-y-2 mb-6">
              <li>Detailed written breakdown of all costs</li>
              <li>Colour consultation and recommendations</li>
              <li>Timeline estimate for completion</li>
              <li>Paint brand and product specifications</li>
              <li>Warranty information (5-year workmanship guarantee)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDE6D8] mt-10 mb-4">Why Choose Jetblack Painting?</h2>
            
            <p className="text-[#B3ACA1] mb-6">
              With <strong>5-star Google reviews</strong>, 13+ years of experience, and $10M public liability insurance,
              Jetblack Painting is Melbourne's most trusted painting company. We service all suburbs including 
              <Link href="/painter-malvern" className="text-[#C49826] hover:underline"> Malvern</Link>, 
              <Link href="/painter-camberwell" className="text-[#C49826] hover:underline"> Camberwell</Link>, 
              <Link href="/painter-hawthorn" className="text-[#C49826] hover:underline"> Hawthorn</Link>, and 
              <Link href="/keysborough-painters" className="text-[#C49826] hover:underline"> Keysborough</Link>.
            </p>

            <div className="bg-[#12100C] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDE6D8] mb-3">Get Your Free Quote Today</h3>
              <p className="text-[#B3ACA1] mb-4">
                Call us now for a free, no-obligation quote. We'll visit your property and provide a detailed 
                written estimate within 24 hours.
              </p>
              <a
                href="tel:0432077782"
                className="inline-flex items-center px-6 py-3 bg-[#C49826] text-[#0D0D0D] font-bold rounded-lg hover:bg-[#A67F1E] transition-colors"
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
