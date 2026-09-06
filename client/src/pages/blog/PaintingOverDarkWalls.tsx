import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/painting-over-dark-walls.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run `pnpm generate-blog`.

const faqs = [
    {
      "question": "Why won't two coats of white paint cover my dark wall?",
      "answer": "Standard topcoats are formulated for opacity and colour over a similar-toned or primed surface, not for hiding a saturated dark colour underneath. Over a true dark base, two coats of ordinary topcoat usually still let the old colour show through as a grey shadow, particularly in direct light."
    },
    {
      "question": "What is a tinted undercoat?",
      "answer": "It's a stain-blocking primer tinted toward the new colour — often a mid-grey base when the target is a light colour — applied as its own coat before the finish paint. It neutralises the old colour in one pass, which is why it covers a dark wall more effectively than another coat of the actual topcoat would."
    },
    {
      "question": "Can I just add a third or fourth coat of topcoat instead?",
      "answer": "You can, and it sometimes gets there, but it's the more expensive and less reliable route. A correctly tinted undercoat coat typically achieves in one pass what two extra coats of finish paint won't fully guarantee."
    },
    {
      "question": "Does this only matter for feature walls, or whole rooms too?",
      "answer": "Both. It's most commonly a single feature wall being converted back to a lighter colour, but a whole room previously painted a dark colour needs exactly the same tinted undercoat step, just over more wall area."
    },
    {
      "question": "Is a tinted undercoat sprayed or rolled on?",
      "answer": "It depends on whether the property is vacant. Vacant and maskable rooms get it sprayed, which lays a fuller, more even film. Occupied rooms get it brushed into edges and corners, then rolled — the same tinted undercoat either way, just a different application method."
    }
  ];

export default function PaintingOverDarkWalls() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Painting Over Dark Walls Without the Extra Coats | Jetblack"
        description="Covering a dark wall isn't a paint-quality problem. A tinted undercoat does in one coat what three coats of topcoat won't, and it's the step most quotes skip."
        canonical="https://jetblackpainting.com/blog/painting-over-dark-walls/"
        schema={articleSchema({
          headline: "Painting Over Dark Walls Without the Extra Coats",
          description: "Covering a dark wall isn't a paint-quality problem. A tinted undercoat does in one coat what three coats of topcoat won't, and it's the step most quotes skip.",
          canonical: "https://jetblackpainting.com/blog/painting-over-dark-walls/",
          datePublished: "2026-09-06",
          dateModified: "2026-09-06",
          articleSection: "Method",
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
              Painting Over Dark Walls Without the Extra Coats
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Every painter has had this conversation: a client wants a dark feature wall painted back to white or a soft neutral, expects two coats, and by the second coat the old colour is still ghosting through. The instinct is to blame the paint — buy a better brand, add a third coat, add a fourth. That is the wrong lever. Coverage over a strong dark colour is a primer decision, made before the topcoat goes anywhere near the wall, and getting it right the first time is cheaper than fixing it after the fact.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Why a dark wall seems to swallow paint</h2>
            <p className="text-[#B4B4B8] mb-4">
              A standard white or light-coloured topcoat is formulated for opacity over a similar-toned surface, not for hiding a saturated navy, charcoal or forest green underneath it. The pigment load that makes a light paint look bright is the same property that makes it thin and translucent when it's fighting a strong colour rather than covering plain plaster.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Two coats of topcoat over a mid-tone wall is normal and looks finished. Two coats of the same topcoat over a genuinely dark wall will usually still show the old colour as a grey shadow, especially in raking light near a window. That is not a flaw in the paint — it is what happens when you ask a finish coat to do a primer's job.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              This is also why the problem is worse the darker and more saturated the original colour is. A muted grey-blue converts easily. A true black or a deep red is the case where skipping the right undercoat turns a two-coat job into four.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The fix is the undercoat, not another topcoat</h2>
            <p className="text-[#B4B4B8] mb-4">
              The reliable way to cover a dark colour is a stain-blocking undercoat tinted toward the new colour — usually a mid-grey base rather than white when the target is a light colour, because grey neutralises the old hue in one pass instead of fighting it. That single tinted coat does more of the coverage work than two or three coats of the actual finish paint would.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Once that undercoat is down and it reads as an even, neutral base with no shadowing through it, the finish coats go on exactly as they would over any freshly prepared wall — normally two coats for full, even colour and sheen. The total coat count ends up similar to a difficult repaint done the slow way; the difference is that it's planned and priced upfront rather than discovered halfway through.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Skipping this step to save a coat is the false economy. An extra coat of ordinary topcoat is expensive and still may not fully hide a dark base, while one correctly tinted undercoat coat usually settles it.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">How this actually gets applied</h2>
            <p className="text-[#B4B4B8] mb-4">
              In a vacant property with the room clear and maskable, we spray the tinted undercoat — it lays down a more even, fuller film than a roller in the same time, which matters most exactly when full opacity is the goal. In an occupied home we brush and roll it, working the same tinted undercoat into corners and edges by hand before rolling the field.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Either way, the undercoat needs to be properly cured before the topcoats go on, not just touch-dry. Rushing that step is one of the more common ways a same-day job ends up with adhesion problems later, particularly on a wall that was heavily handled or wiped down while still curing.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">What it means for your quote</h2>
            <p className="text-[#B4B4B8] mb-4">
              If a wall or room is currently a strong dark colour and the brief is to go noticeably lighter, say so when you're getting quoted. It changes the coat count and the sequencing, and a quote that hasn't accounted for it either underestimates the job or ends up needing an extra visit.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              It's a common request on a single feature wall that's run its course, and just as common across a whole room where a previous owner went darker than the current owner wants. Either way, the tinted undercoat step is the same regardless of how much wall area it's covering.
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

            <p className="text-[#B4B4B8] mb-6">
              Related services:
              <Link href="/services/interior-painting/" className="text-[#D0A050] hover:underline">Interior Painting</Link>
            </p>

            <div className="bg-[#0C0C0E] rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-[#EDEDEF] mb-3">Want it done properly?</h3>
              <p className="text-[#B4B4B8] mb-4">
                Jetblack Painting is based in Mordialloc and services Melbourne. Call Jimmy on 0432 077 782 or email
                jimmy@jetblackpainting.com for a free, written, itemised quote — no obligation.
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
