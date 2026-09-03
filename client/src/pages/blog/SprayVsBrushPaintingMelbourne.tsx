import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/spray-vs-brush-painting-melbourne.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run `pnpm generate-blog`.

const faqs = [
    {
      "question": "Is spray painting better than brushing?",
      "answer": "Neither is better in general. Spraying produces a smoother, mark-free film and is clearly superior on doors, cabinetry and detailed trim. Brushing and rolling is containable and lets a household keep using the property. The right choice depends on whether the space is empty and maskable."
    },
    {
      "question": "Can you spray while we are living in the house?",
      "answer": "Usually not, and we will normally recommend against it. Spraying requires sealing the area completely, which means the space is unusable while masking is up. In an occupied home we brush and roll in place, and take removable items such as cabinet doors away to be sprayed separately."
    },
    {
      "question": "Why do my cabinet doors look brushed even though I paid for good paint?",
      "answer": "Because the finish comes from the application method, not the product. A glass-smooth cabinet finish is achieved by spraying in a controlled, dust-free environment. No brush and no tin of paint will replicate it on a flat door face."
    },
    {
      "question": "Does spraying use more paint?",
      "answer": "Yes, generally. Some material is lost to overspray and to the masking itself. That is offset on suitable jobs by the speed of application and the quality of the result, but it is one reason spraying is not automatically the cheaper option."
    },
    {
      "question": "Is back-rolling after spraying necessary outside?",
      "answer": "On porous or textured exterior surfaces it helps. Spraying deposits the paint and back-rolling works it into the surface profile, which improves adhesion and evenness. On smooth, sound surfaces it is less critical."
    }
  ];

export default function SprayVsBrushPaintingMelbourne() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Spray or Brush? When Each Method Belongs | Jetblack"
        description="When spraying beats brushing and rolling on a Melbourne repaint — and when it doesn't. The trade-off is finish quality against disruption."
        canonical="https://jetblackpainting.com/blog/spray-vs-brush-painting-melbourne/"
        schema={articleSchema({
          headline: "Spray or Brush? When Each Method Belongs",
          description: "When spraying beats brushing and rolling on a Melbourne repaint — and when it doesn't. The trade-off is finish quality against disruption.",
          canonical: "https://jetblackpainting.com/blog/spray-vs-brush-painting-melbourne/",
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
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
              Spray or Brush? When Each Method Belongs
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Homeowners often ask whether we spray or brush, expecting one to be the professional answer and the other the shortcut. It isn't like that. Both are proper methods, and the choice is decided by whether anyone is living in the house. Here is the rule we work to, and what each method actually does to the finish.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The rule: spray an empty house, brush an occupied one</h2>
            <p className="text-[#B4B4B8] mb-4">
              If a property is vacant and we can mask it properly, we spray. If people are living in it, we brush and roll. That single distinction decides most jobs before we discuss anything else, because the constraint that matters is not the finish — it is whether the space can be sealed off and left alone.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Spraying puts atomised paint into the air. It settles on everything not covered, which is why masking is the bulk of the work rather than an afterthought. In an empty house that is straightforward. In a house with furniture, a kitchen in daily use and people walking through, the masking becomes more disruptive than the painting.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Brushing and rolling is slower per square metre but it is containable. We can finish one room, clean up and hand it back the same day, which is what makes a staged repaint possible while a family carries on living there.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">What spraying does that brushing cannot</h2>
            <p className="text-[#B4B4B8] mb-4">
              Spray lays down a continuous film with no applicator marks. On flat, detailed or profiled surfaces — cabinet doors, panelled doors, balustrades, decorative mouldings — the difference is obvious and permanent. A sprayed cabinet door reads as factory-finished; a brushed one always reads as brushed, no matter how good the tradesperson.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              That glass-smooth quality comes from the application method and dust control, not from a premium tin of paint. Buying better paint will not turn a brushed finish into a sprayed one. This is the single most common misunderstanding we correct on quotes.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Spray also gets into places a brush argues with: the gaps between balusters, the profile of an ornate architrave, the underside of a slatted screen. On those surfaces brushing leaves either thin coverage or heavy build-up in the recesses.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">What brushing and rolling does better</h2>
            <p className="text-[#B4B4B8] mb-4">
              It works around a life in progress. Rooms can be done one at a time, the house stays usable, and there is no day where everything is sealed in plastic. For most owner-occupiers that is worth more than a marginal gain in finish on a flat wall.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              On large flat wall areas the visible difference between a well-rolled surface and a sprayed one is small once the paint is dry and the room is furnished. The places where spraying clearly wins are the detailed elements, not the broad walls.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Brushing also gives more control at edges and cut-ins. Where a wall meets a ceiling in an older house, the line is rarely straight, and a brush follows an imperfect junction more forgivingly than masking tape does.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Where the two get combined</h2>
            <p className="text-[#B4B4B8] mb-4">
              Plenty of jobs use both. A common pattern on an occupied home is to brush and roll the walls and ceilings in place, then take the doors, cabinet fronts or shelving away to be sprayed and returned. The disruptive part happens off-site and the detailed elements still get the better finish.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              On an exterior, the reverse is often true: broad weatherboard or render can be sprayed and back-rolled to work the paint into the surface, while windows, gutters and trim are cut in by hand because masking them properly would cost more time than brushing them.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              If a quote does not say which method applies to which element, ask. It changes both the finish you get and how long you cannot use the room.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Questions worth asking before you book</h2>
            <p className="text-[#B4B4B8] mb-4">
              Ask what the plan is for the parts of the job you will look at closely — doors, cabinetry, trim — rather than the walls. That is where method shows.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Ask how long each space is out of use. Spraying compresses the painting but extends the period a room is unusable, because masking goes up before and comes down after.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              If you are living in the property, say so early. It is not a minor scheduling detail; it determines the method, the sequence and the realistic timeline for the whole job.
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
              <span className="text-[#8B8B90]"> · </span>
              <Link href="/services/kitchen-cabinet-resurfacing/" className="text-[#D0A050] hover:underline">Kitchen Cabinet Resurfacing</Link>
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
