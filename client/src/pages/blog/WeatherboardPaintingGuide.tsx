import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

const faqs = [
  {
    question: "How often should a weatherboard house be repainted in Melbourne?",
    answer:
      "Most Melbourne weatherboard homes need repainting every 7 to 10 years. Bayside and coastal homes exposed to salt air and full sun often sit at the shorter end of that range, while sheltered south-facing walls can last longer. Flaking, chalking, bare timber and gaps opening at the joints are the signs it is due.",
  },
  {
    question: "Do I need to prime bare timber on weatherboards?",
    answer:
      "Yes. Any bare or newly exposed timber must be spot-primed before topcoats, using an oil-based or alkyd primer that penetrates the grain. Skipping this is the most common cause of early peeling on weatherboard homes, because water gets behind the paint film through the unsealed timber.",
  },
  {
    question: "What paint is best for weatherboard houses in Melbourne?",
    answer:
      "A flexible, water-based acrylic exterior system such as Dulux Weathershield or Taubmans All Weather suits most Melbourne weatherboards. Flexibility matters because timber expands and contracts with temperature and moisture, and a brittle coating cracks at the board edges.",
  },
  {
    question: "Can weatherboards be painted in winter?",
    answer:
      "Exterior painting needs dry timber and moderate temperatures, so Melbourne winter work is weather-dependent. Most exterior acrylics need above roughly 10°C and a dry surface to cure properly. Jetblack Painting schedules exterior weatherboard work around the forecast rather than pushing on in unsuitable conditions.",
  },
  {
    question: "Should I paint over lead paint on an older weatherboard home?",
    answer:
      "Homes built before 1970 may have lead-based paint. It should not be dry-sanded or power-sanded, as that releases lead dust. Testing first and using safe preparation methods is essential — this is a job for an experienced painter rather than a DIY sander.",
  },
];

// Mirrors the six numbered steps shown in the article body below.
const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Paint a Weatherboard House",
  description:
    "How a Melbourne weatherboard house is prepared and painted so the finish lasts 7 to 10 years, from washing through to the second topcoat.",
  totalTime: "P5D",
  step: [
    {
      "@type": "HowToStep",
      name: "Wash the surface",
      text: "Pressure wash to remove dirt, chalking, salt deposits and mould. Bayside homes carry a film of salt that stops paint adhering. Use care — too much pressure drives water behind the boards and damages soft timber.",
    },
    {
      "@type": "HowToStep",
      name: "Scrape and sand back failing paint",
      text: "Remove all loose, flaking and blistered paint back to a sound edge and feather the edges so repairs don't telegraph through. On homes built before 1970, test for lead paint first and never dry-sand it.",
    },
    {
      "@type": "HowToStep",
      name: "Repair damaged timber",
      text: "Check bottom boards, sun-facing walls and areas near downpipes for rot. Soft or spongy timber must be cut out and replaced — filler over rotten weatherboard fails within a year or two.",
    },
    {
      "@type": "HowToStep",
      name: "Prime all bare timber",
      text: "Spot-prime every patch of exposed timber with an oil-based or alkyd primer that soaks into and seals the grain. Skipping this is the single biggest cause of premature peeling on weatherboard homes.",
    },
    {
      "@type": "HowToStep",
      name: "Fill and caulk",
      text: "Fill nail holes and splits, then caulk gaps at board joints, window and door frames and corner trims with a flexible exterior sealant that can stretch as the timber moves.",
    },
    {
      "@type": "HowToStep",
      name: "Apply two topcoats",
      text: "Apply two full topcoats of a quality flexible exterior acrylic over the primed surface. The second coat builds the film thickness that resists Melbourne's UV and rain.",
    },
  ],
};

export default function WeatherboardPaintingGuide() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="How to Paint a Weatherboard House | Jetblack Painting"
        description="Melbourne weatherboard painting guide — preparation, priming bare timber, caulking, the right exterior paints and how often to repaint. Call 0432 077 782."
        canonical="https://jetblackpainting.com/blog/how-to-paint-a-weatherboard-house-melbourne/"
        schema={articleSchema({
          headline: "How to Paint a Weatherboard House: A Melbourne Guide",
          description:
            "Melbourne weatherboard painting guide — preparation, priming bare timber, caulking, the right exterior paints and how often to repaint.",
          canonical: "https://jetblackpainting.com/blog/how-to-paint-a-weatherboard-house-melbourne/",
          datePublished: "2026-07-26",
          dateModified: "2026-07-26",
          articleSection: "Guide",
          faqs,
          extra: [howToSchema],
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
              How to Paint a Weatherboard House: A Melbourne Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> July 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 8 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Weatherboard is everywhere in Melbourne — from the beach cottages of{" "}
              <Link href="/painter-seaford" className="text-[#D0A050] hover:underline">Seaford</Link> and{" "}
              <Link href="/painter-mordialloc" className="text-[#D0A050] hover:underline">Mordialloc</Link> to the period
              homes of <Link href="/painter-brighton" className="text-[#D0A050] hover:underline">Brighton</Link> and{" "}
              <Link href="/painter-hampton" className="text-[#D0A050] hover:underline">Hampton</Link>. It also fails
              faster than any other exterior surface when it's painted badly. Here's how the job is done properly.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Why Weatherboard Is Different</h2>
            <p className="text-[#B4B4B8] mb-4">
              Timber moves. It swells when it's damp and shrinks when it's dry, and in Melbourne it does both in the
              same week. That movement is why weatherboard needs a <strong>flexible</strong> coating system and why
              rigid, cheap paint cracks along the board edges within a couple of seasons.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The second difference is water. Every board overlap, joint, nail hole and window reveal is a potential
              entry point. Once water gets behind the paint film, it lifts the coating from underneath — which is why
              weatherboard peels in sheets rather than fading evenly.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The Preparation Process</h2>
            <p className="text-[#B4B4B8] mb-4">
              On a weatherboard exterior, preparation is roughly 70% of the labour. This is the sequence we follow:
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 1: Wash the surface</h3>
            <p className="text-[#B4B4B8] mb-4">
              Pressure wash to remove dirt, chalking, salt deposits and mould. Bayside homes in particular carry a film
              of salt that stops paint adhering. Washing must be done carefully — too much pressure drives water behind
              the boards and damages soft timber.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 2: Scrape and sand back failing paint</h3>
            <p className="text-[#B4B4B8] mb-4">
              All loose, flaking and blistered paint has to come off back to a sound edge. On homes built before 1970,
              test for lead paint first and never dry-sand it. Feather the edges so the repair doesn't telegraph
              through the finished coats.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 3: Repair damaged timber</h3>
            <p className="text-[#B4B4B8] mb-4">
              Check the bottom boards, the sun-facing walls and anywhere near downpipes for rot. Soft, spongy timber
              needs cutting out and replacing — filler over rotten weatherboard is a short-term cover-up that fails
              within a year or two.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 4: Prime all bare timber</h3>
            <p className="text-[#B4B4B8] mb-4">
              Every patch of exposed timber gets an oil-based or alkyd primer that soaks into the grain and seals it.
              This is the step most often skipped, and it's the single biggest cause of premature peeling on
              weatherboard homes.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 5: Fill and caulk</h3>
            <p className="text-[#B4B4B8] mb-4">
              Fill nail holes and splits, then caulk the gaps at board joints, window and door frames, and corner
              trims with a flexible exterior sealant. Flexible is the key word — the caulk has to stretch as the timber
              moves, so a rigid filler will simply split open again.
            </p>

            <h3 className="text-xl font-bold text-[#EDEDEF] mt-8 mb-3">Step 6: Apply two topcoats</h3>
            <p className="text-[#B4B4B8] mb-4">
              Two full topcoats of a quality exterior acrylic over the primed surface. Cutting this to one coat is a
              false economy — the second coat is what builds the film thickness that actually resists Melbourne's UV
              and rain.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Choosing the Right Paint</h2>
            <p className="text-[#B4B4B8] mb-4">
              For most Melbourne weatherboards we use a flexible water-based acrylic exterior system — Dulux
              Weathershield or Taubmans All Weather — over the appropriate primer. Coastal homes benefit from the more
              heavily weather-resistant options in those ranges, because salt air and reflected UV are harsher than
              inland conditions.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              On colour: mid-tones and lighter shades hold up better on weatherboard than very dark colours, which
              absorb more heat, move the timber more and fade faster on north and west-facing walls.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">How Often to Repaint</h2>
            <p className="text-[#B4B4B8] mb-4">
              A properly prepared and painted weatherboard exterior in Melbourne typically lasts <strong>7–10 years</strong>.
              Bayside and coastal homes exposed to salt and full sun sit at the shorter end; sheltered walls last
              longer. Repaint when you see chalking, flaking, bare timber or gaps opening at the joints — not after
              the timber has started to rot, which turns a repaint into a repair job.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">When to Call a Professional</h2>
            <ul className="list-disc pl-6 text-[#B4B4B8] space-y-2 mb-6">
              <li>The home was built before 1970 and may contain lead paint</li>
              <li>There's visible rot, or boards need replacing</li>
              <li>The house is two storeys, or access needs scaffolding</li>
              <li>Previous paint is peeling in large sheets, which usually signals a moisture problem</li>
              <li>You want the finish to last a decade rather than a season</li>
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
              Jetblack Painting has painted weatherboard homes across Melbourne's bayside, southeast, inner east and
              the Mornington Peninsula for over 13 years. Every exterior job is quoted in writing with the preparation
              itemised, and backed by $10M public liability insurance and a 5-year written workmanship guarantee.
            </p>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Weatherboard Home Due for a Repaint?</h3>
              <p className="text-[#B4B4B8] mb-4">
                Call Jimmy on 0432 077 782 for a free, no-obligation assessment and written quote — with the
                preparation spelled out, not glossed over.
              </p>
              <a
                href="tel:0432077782"
                style={{ color: "#0A0A0B", WebkitTextFillColor: "#0A0A0B" }}
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
