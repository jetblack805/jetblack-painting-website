import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const faqs = [
  {
    question: "Can I just paint over mould instead of treating it?",
    answer:
      "No. Painting over mould without killing it first guarantees it comes back — usually within 3 to 12 months — turning a fresh paint job into a blotchy, failed surface. The mould spores are still there under the paint even if you can't see them.",
  },
  {
    question: "How long does anti-mould paint last?",
    answer:
      "Properly treated and painted surfaces, where the moisture source has been fixed, typically stay mould-free for 5 to 10 years. High-moisture environments like poorly ventilated bathrooms may need retreatment sooner, around 3 to 5 years.",
  },
  {
    question: "When should I call a professional instead of treating mould myself?",
    answer:
      "Call a professional when mould covers more than 1 square metre, it's on external render or masonry, it has returned after previous DIY treatment, there's visible substrate damage like soft plaster or rotted timber, or the moisture source is unclear.",
  },
  {
    question: "What primer actually stops mould coming back?",
    answer:
      "Standard primers won't prevent regrowth. A dedicated anti-mould primer — we use Zinsser BIN Shellac Primer or Dulux Mouldshield Primer most often — seals the surface and includes fungicides that inhibit mould, which is essential on bathroom ceilings and external render with a history of mould.",
  },
];

export default function MouldRemediationPainting() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Mould Remediation & Painting Guide Melbourne | Jetblack"
        description="How to identify, treat and paint over mould in Melbourne homes — bathroom mould, render mould, prep steps and anti-mould paints."
        canonical="https://jetblackpainting.com/blog/mould-remediation-painting-melbourne/"
        schema={articleSchema({
          headline: "Mould Remediation & Painting Guide for Melbourne Homes",
          description:
            "How to identify, treat and paint over mould in Melbourne homes — bathroom mould, render mould, prep steps and anti-mould paints.",
          canonical: "https://jetblackpainting.com/blog/mould-remediation-painting-melbourne/",
          datePublished: "2026-07-17",
          dateModified: "2026-07-26",
          articleSection: "Guide",
          faqs,
        })}
      />
      <Navbar />

      <article className="pt-32 pb-16 bg-[#131316]">
        <div className="container max-w-3xl">
          <nav className="mb-6" aria-label="Breadcrumb">
            <Link href="/blog" className="inline-flex items-center text-[#D0A050] hover:underline text-sm">
              <ArrowLeft className="w-4 h-4 mr-1" /> Back to Blog
            </Link>
          </nav>

          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-[#EDEDEF] mb-4 leading-tight">
              Mould Remediation & Painting Guide for Melbourne Homes
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Mould is one of the most common problems we encounter on Melbourne painting jobs — and one of the most mishandled.
              Painting over mould without proper treatment guarantees it comes back within months. Here's how to do it right,
              from a team that's dealt with it on hundreds of Melbourne homes.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Why Mould Appears on Melbourne Homes</h2>

            <p className="text-[#B4B4B8] mb-4">
              Melbourne's climate creates ideal conditions for mould — cool, damp winters with limited ventilation, followed by
              humid summers. The suburbs most affected are those with older housing stock: poorly ventilated weatherboards in
              <Link href="/painter-mentone" className="text-[#D0A050] hover:underline"> Mentone</Link>,
              <Link href="/painter-sandringham" className="text-[#D0A050] hover:underline"> Sandringham</Link> and
              <Link href="/painter-mordialloc" className="text-[#D0A050] hover:underline"> Mordialloc</Link> where salt air
              compounds moisture retention, and period homes in
              <Link href="/painter-hawthorn" className="text-[#D0A050] hover:underline"> Hawthorn</Link>,
              <Link href="/painter-malvern" className="text-[#D0A050] hover:underline"> Malvern</Link> and
              <Link href="/painter-armadale" className="text-[#D0A050] hover:underline"> Armadale</Link> with cold masonry walls
              that attract condensation.
            </p>

            <p className="text-[#B4B4B8] mb-4">
              Common locations for mould growth on Melbourne homes:
            </p>

            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li><strong>Bathroom and laundry ceilings</strong> — steam and condensation with insufficient ventilation</li>
              <li><strong>External render</strong> — especially south-facing walls that stay damp and don't get afternoon sun</li>
              <li><strong>Under eaves and fascias</strong> — pooling water from blocked gutters</li>
              <li><strong>Bedroom corners and window reveals</strong> — cold bridging on uninsulated walls</li>
              <li><strong>Weatherboard cladding</strong> — moisture trapped under failing paint</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The Right Way to Treat Mould Before Painting</h2>

            <p className="text-[#B4B4B8] mb-4">
              The single biggest mistake homeowners make is painting over mould without killing it first. Even if you can't see
              the mould spores after painting, they're there — and they'll push through within 3–12 months, turning a fresh
              paint job into a blotchy, failed surface.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 1: Identify the moisture source</h3>
            <p className="text-[#B4B4B8] mb-4">
              Mould is a symptom, not the problem. Before any treatment, find out why the area is damp: a leaking roof,
              inadequate bathroom ventilation, rising damp, blocked gutters or condensation from a cold wall. If you don't
              fix the moisture source, the mould will return no matter how well you treat and paint it.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 2: Kill the mould</h3>
            <p className="text-[#B4B4B8] mb-4">
              For surface mould (not deep into the substrate), a solution of one part bleach to four parts water, applied
              with a brush and left to dwell for 10–15 minutes before scrubbing and rinsing, kills the spores effectively.
              Commercial mould killers like Zinsser Mold Killing Primer's pre-treatment or Dulux Mouldshield work similarly
              and are easier to apply on larger areas.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              For heavy mould on render, plaster or timber — where it has penetrated the substrate — the affected material
              usually needs to be cut out and replaced. Painting over deeply embedded mould, even with anti-mould primer,
              is not a permanent fix.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 3: Allow complete drying</h3>
            <p className="text-[#B4B4B8] mb-4">
              After cleaning, the surface must dry completely before priming — typically 24–48 hours in Melbourne's conditions.
              Rushing this step traps moisture under the coating, which promotes mould recurrence and causes the paint to blister.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 4: Prime with an anti-mould primer</h3>
            <p className="text-[#B4B4B8] mb-4">
              Standard primers won't prevent mould from returning. Use a dedicated anti-mould primer — Zinsser BIN Shellac
              Primer or Dulux Mouldshield Primer are the products we use most. These seal the surface and include fungicides
              that inhibit regrowth. This step is non-negotiable on bathroom ceilings and external render with a history of mould.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Which Paint to Use on Mould-Prone Surfaces</h2>

            <p className="text-[#B4B4B8] mb-4">
              Not all paint is equal for mould-prone environments. Here's what we specify by area:
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[#222227] text-sm">
                <thead>
                  <tr className="bg-[#0A0A0B] text-white">
                    <th className="border border-[#2A2A30] p-3 text-left">Area</th>
                    <th className="border border-[#2A2A30] p-3 text-left">Recommended Product</th>
                    <th className="border border-[#2A2A30] p-3 text-left">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-[#131316]">
                    <td className="border border-[#222227] p-3">Bathroom ceiling</td>
                    <td className="border border-[#222227] p-3">Dulux Mouldshield or Taubmans Bathroom & Kitchen</td>
                    <td className="border border-[#222227] p-3">Steam-rated, mould-inhibiting, washable</td>
                  </tr>
                  <tr className="bg-[#101013]">
                    <td className="border border-[#222227] p-3">External render (south-facing)</td>
                    <td className="border border-[#222227] p-3">Dulux Weathershield Maximum</td>
                    <td className="border border-[#222227] p-3">Flexible, breathable, mould-resistant topcoat</td>
                  </tr>
                  <tr className="bg-[#131316]">
                    <td className="border border-[#222227] p-3">Weatherboard exterior</td>
                    <td className="border border-[#222227] p-3">Dulux Weathershield or Taubmans All Weather</td>
                    <td className="border border-[#222227] p-3">Breathable, flexible, UV and moisture resistant</td>
                  </tr>
                  <tr className="bg-[#101013]">
                    <td className="border border-[#222227] p-3">Bedroom wall (condensation)</td>
                    <td className="border border-[#222227] p-3">Dulux Mouldshield Interior</td>
                    <td className="border border-[#222227] p-3">Washable, mould-inhibiting, low sheen</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">How Long Does Anti-Mould Paint Last?</h2>

            <p className="text-[#B4B4B8] mb-4">
              Properly treated and painted surfaces — where the moisture source has been fixed — typically remain mould-free
              for 5–10 years. In high-moisture environments like bathrooms with poor ventilation, expect 3–5 years before
              retreatment is needed. Adding an exhaust fan rated for the room size makes the most difference to long-term
              bathroom mould control.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">When to Call a Professional</h2>

            <p className="text-[#B4B4B8] mb-4">
              DIY mould treatment is manageable for surface mould in a single bathroom or a small external patch.
              Call a professional painter when:
            </p>

            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li>Mould covers more than 1 square metre of surface</li>
              <li>The affected area is on external render or masonry</li>
              <li>Mould has returned after previous DIY treatment</li>
              <li>There is visible substrate damage (soft plaster, rotted timber)</li>
              <li>The source of moisture is unclear or may involve structural issues</li>
            </ul>

            <p className="text-[#B4B4B8] mb-6">
              Jetblack Painting handles mould remediation and repainting across Melbourne's southeast, Bayside, inner east
              and Mornington Peninsula. We assess the moisture source, carry out the correct treatment, apply anti-mould
              primer, and finish with the appropriate product for the surface and environment. Every job is backed by our
              5-year written workmanship guarantee.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Common Questions</h2>
            <div className="space-y-6 mb-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Mould on Your Walls or Ceilings? Get a Free Quote.</h3>
              <p className="text-[#B4B4B8] mb-4">
                Call Jimmy on 0432 077 782 for a free, no-obligation assessment and written quote.
                We'll tell you exactly what's needed — no upselling, no surprises.
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
