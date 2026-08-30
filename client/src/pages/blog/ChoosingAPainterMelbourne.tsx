import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const faqs = [
  {
    question: "Do painters in Melbourne need a licence?",
    answer:
      "Victoria doesn't require a separate trade licence for painting the way it does for plumbing or electrical work, so anyone can call themselves a painter. That makes insurance, a registered ABN, and a track record of finished jobs far more important checks than a licence number.",
  },
  {
    question: "How much should I pay upfront?",
    answer:
      "Be cautious of any painter asking for full payment before work starts. A reasonable deposit to secure materials and a start date is normal; the balance should be tied to progress or completion, not paid entirely in advance.",
  },
  {
    question: "What's a fair amount of detail in a quote?",
    answer:
      "A proper quote itemises surface preparation, the number of coats, the specific paint brand and product line, and what's excluded. A one-line price with no scope is the most common source of disputes later.",
  },
  {
    question: "Should I choose the cheapest quote?",
    answer:
      "Not automatically. The cheapest quotes often cut preparation time — sanding, filling, priming — which is where paint failure starts. Compare scope first, then price.",
  },
];

export default function ChoosingAPainterMelbourne() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="How to Choose a Painter in Melbourne | Jetblack Painting"
        description="What to check before hiring a Melbourne painter — insurance, written quotes, guarantees and red flags to avoid. A practical checklist."
        canonical="https://jetblackpainting.com/blog/how-to-choose-a-painter-melbourne/"
        schema={articleSchema({
          headline: "How to Choose a Painter in Melbourne: A Homeowner's Guide",
          description:
            "What to check before hiring a Melbourne painter — insurance, written quotes, guarantees and red flags to avoid. A practical checklist.",
          canonical: "https://jetblackpainting.com/blog/how-to-choose-a-painter-melbourne/",
          datePublished: "2026-07-21",
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
              How to Choose a Painter in Melbourne: A Homeowner's Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Melbourne has thousands of people offering painting work, and the gap between the best and worst of them
              is enormous — in preparation quality, in what happens if something goes wrong, and in whether the job
              is still holding up in five years. Here's what actually matters when you're comparing painters.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Check Insurance and Business Registration First</h2>
            <p className="text-[#B4B4B8] mb-4">
              Victoria doesn't issue a specific trade licence for painting, so the checks that matter are: a registered
              ABN, and public liability insurance that actually covers the value of your property. Ask to see proof of
              insurance before work starts — a legitimate painting business will have this ready to send. Jetblack
              Painting carries $10M public liability insurance and is happy to provide certificates on request.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Get a Written, Itemised Quote</h2>
            <p className="text-[#B4B4B8] mb-4">
              A trustworthy quote spells out the preparation work included (sanding, filling, priming), the number of
              coats, the specific paint brand and product line, and what's explicitly excluded. A single lump-sum
              figure with no scope is where most disputes start — you have no way to check whether corners were cut.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Get at least two or three quotes so you have something to compare scope against, not just price.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Ask About the Guarantee</h2>
            <p className="text-[#B4B4B8] mb-4">
              What happens if the paint fails early, or a colour looks wrong once it's dry? A painter confident in
              their preparation and materials will back the job with a written guarantee. Jetblack Painting backs
              every job with a 5-year written workmanship guarantee — ask any painter you're considering what theirs
              covers, and get it in writing rather than a verbal promise.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Look Past the Star Rating</h2>
            <p className="text-[#B4B4B8] mb-4">
              A 5.0 rating with 3 reviews tells you less than a 4.8 with 100. Read a handful of the actual review
              text, not just the score, and look for detail — mentions of tidiness, communication, and whether the
              painter returned for touch-ups if needed. Photos of finished work help too, since preparation quality
              is often visible in close-up shots of trims and edges.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Red Flags to Watch For</h2>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li>Asking for full payment upfront, before any work has started</li>
              <li>No fixed address or ABN listed anywhere</li>
              <li>Reluctance to put the quote or guarantee in writing</li>
              <li>A quote significantly below every other one you've received, with no explanation of what's different</li>
              <li>No examples of previous work or contactable references</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Questions to Ask Before You Book</h2>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li>What preparation is included, specifically, for my surfaces?</li>
              <li>Which paint brand and product line will you use, and why?</li>
              <li>How many coats are included in the price?</li>
              <li>What does your guarantee cover, and for how long?</li>
              <li>Can I see proof of public liability insurance?</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Common Questions</h2>
            <div className="space-y-6 mb-6">
              {faqs.map((faq) => (
                <div key={faq.question}>
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>

            <p className="text-[#B4B4B8] mb-6">
              Jetblack Painting is based in Mordialloc and services Melbourne's southeast, Bayside, inner east and
              the Mornington Peninsula, with 18+ years of experience and a 5.0 Google rating across 17 reviews.
              We're always glad to answer these questions directly before you book.
            </p>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Comparing Quotes? Get Ours for Free.</h3>
              <p className="text-[#B4B4B8] mb-4">
                Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com for a free, written, itemised quote —
                no obligation, no pressure.
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
