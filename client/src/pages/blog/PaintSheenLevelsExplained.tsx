import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/paint-sheen-levels-explained.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run `pnpm generate-blog`.

const faqs = [
    {
      "question": "What sheen should I use on interior walls?",
      "answer": "Low sheen suits most walls. It tolerates a wipe without burnishing and still hides a reasonable amount of surface imperfection. Matt looks better but marks more easily, which shows quickly in hallways and children's rooms."
    },
    {
      "question": "Is flat paint the same as a smooth finish?",
      "answer": "No. Flat is a sheen level describing how little light the surface reflects. Smoothness is about the surface underneath and how the paint was applied. A flat wall can be rough, and a glass-smooth cabinet door is usually finished in satin or semi-gloss."
    },
    {
      "question": "Why does my glossy trim show every bump?",
      "answer": "Because higher sheen reflects light directionally and picks out any deviation in the surface. Gloss and semi-gloss demand more filling and sanding beforehand than a matt wall does — the finish is less forgiving, not worse."
    },
    {
      "question": "Can I use matt in a bathroom?",
      "answer": "It is not the sensible choice. Bathrooms combine moisture with regular wiping, and matt handles neither well. Low sheen or satin on the walls with semi-gloss trim will last considerably longer."
    },
    {
      "question": "Do I have to use the same sheen throughout?",
      "answer": "No, and most houses should not. Matt ceilings, low sheen walls and satin trim is a common combination because each surface has a different job. Mixing sheen levels is normal practice rather than an inconsistency."
    }
  ];

export default function PaintSheenLevelsExplained() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Matt, Low Sheen, Satin, Gloss: Which Goes Where"
        description="Sheen is a durability decision as much as a look. Where each level belongs room by room, and the trade-off nobody explains at the counter."
        canonical="https://jetblackpainting.com/blog/paint-sheen-levels-explained/"
        schema={articleSchema({
          headline: "Matt, Low Sheen, Satin, Gloss: Which Goes Where",
          description: "Sheen is a durability decision as much as a look. Where each level belongs room by room, and the trade-off nobody explains at the counter.",
          canonical: "https://jetblackpainting.com/blog/paint-sheen-levels-explained/",
          datePublished: "2026-09-05",
          dateModified: "2026-09-05",
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
              Matt, Low Sheen, Satin, Gloss: Which Goes Where
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 6 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Colour gets all the deliberation and sheen gets picked in a second at the counter. That is backwards. Sheen determines how a surface handles light, how much scrubbing it survives, and how much of the wall's imperfection you will see for the next decade. Here is what each level is actually for.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The trade-off that governs everything</h2>
            <p className="text-[#B4B4B8] mb-4">
              There is one rule underneath all of this: the more sheen a paint has, the more washable and durable it is, and the more it shows every flaw in the surface underneath. Every choice below is a position on that single line.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Higher sheen reflects light directionally, so it picks out dents, patched areas, roller texture and wavy plaster. Lower sheen scatters light and hides those things, but its softer surface holds marks and cannot be scrubbed as hard.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              That is why the right answer changes room to room rather than house to house. A finish that is perfect on a bedroom ceiling is the wrong choice on a hallway at knee height.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Matt and flat</h2>
            <p className="text-[#B4B4B8] mb-4">
              Matt is the most forgiving finish available. It hides surface irregularity better than anything else, which makes it the sensible default for ceilings and for older walls that have been patched more than once.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The cost is cleanability. Traditional matt marks easily and can burnish — develop a shiny patch — if you scrub it. Modern washable matt products have narrowed that gap considerably and are worth asking about if you like the look but need the durability.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Worth clearing up a common confusion: flat is a sheen level, not a description of smoothness. A flat wall can still be rough, and a glass-smooth cabinet door can be finished in satin. The two words describe different things.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Low sheen: the honest default for walls</h2>
            <p className="text-[#B4B4B8] mb-4">
              Low sheen sits just above matt and is where most Melbourne living areas, bedrooms and hallways end up. It takes a wipe without burnishing, and it still hides a reasonable amount of imperfection.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              If you are repainting a whole house and do not want to make a decision per room, low sheen on walls and matt on ceilings is a defensible standard that very few people regret.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              In a house with children or pets, low sheen is the minimum worth considering on walls. Matt in a busy hallway looks excellent for about six months.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Satin, semi-gloss and gloss</h2>
            <p className="text-[#B4B4B8] mb-4">
              Satin is the usual choice for trim, architraves, skirtings and doors. It is properly washable, it stands up to being knocked, and it gives a visible but not hard distinction between trim and wall.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Semi-gloss and gloss go where moisture and wear are highest, or where you want the trim to read as a deliberate feature: bathrooms, laundries, kitchen trim, front doors and external timber. The higher the sheen, the more the preparation underneath has to be right, because gloss will advertise every ripple.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              This is the level where cutting preparation time stops being invisible. On a matt ceiling a slightly uneven patch disappears; under gloss on a door it is the first thing anyone sees.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">A room-by-room shorthand</h2>
            <p className="text-[#B4B4B8] mb-4">
              Ceilings: matt, almost always. Living areas and bedrooms: low sheen. Hallways and stairwells: low sheen, or a washable matt if the look matters more than the traffic.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Kitchens, bathrooms and laundries: low sheen or satin on walls, semi-gloss on trim. The moisture and the wiping both argue upward.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Trim, doors and skirtings: satin as standard, semi-gloss where you want more contrast or more durability. Exterior timber and front doors: semi-gloss or gloss, accepting that the preparation has to match.
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
              <Link href="/services/exterior-painting/" className="text-[#D0A050] hover:underline">Exterior Painting</Link>
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
