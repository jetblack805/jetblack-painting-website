import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/why-exterior-paint-fails.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run `pnpm generate-blog`.

const faqs = [
    {
      "question": "Can I just paint over peeling exterior paint?",
      "answer": "No. New paint bonds to whatever it is applied over, so painting onto a layer that is already letting go simply adds weight to a failing film. The loose material has to come off and the edges feathered back before anything new goes on."
    },
    {
      "question": "How do I tell blistering from flaking?",
      "answer": "Blisters are rounded bubbles that lift off the surface and usually have moisture behind them. Flaking comes away in hard, curled plates and keeps spreading when you scrape it, which points at an adhesion failure from preparation rather than a water problem."
    },
    {
      "question": "What causes paint to fail on one wall but not the others?",
      "answer": "Orientation. North and west elevations take the most UV and driving rain in Melbourne and typically fail first, while south walls hold damp and grow mould. It is normal for one elevation to need attention years before the rest of the house does."
    },
    {
      "question": "Is chalking a sign of cheap paint?",
      "answer": "Not necessarily. All exterior coatings chalk eventually as UV breaks down the binder, and light chalking on an old coat is normal ageing. Heavy chalking after only a few years suggests either a low-grade product or an interior-rated paint used outside."
    },
    {
      "question": "Do I need to strip the whole house or just the bad areas?",
      "answer": "It depends on how far the sound paint extends. If a scraper stops finding loose material within a small area, spot repair and feathering is appropriate. If it keeps lifting across a whole elevation, that face needs stripping — patching it only moves the failure a few months down the track."
    },
    {
      "question": "Will fixing the gutters really change how long the paint lasts?",
      "answer": "Yes, more than the choice of paint will. Most exterior coating failures we see start with water getting somewhere it should not be. A downpipe discharging against a wall or a blocked gutter overflowing behind a fascia will undo a first-class paint job in a season or two."
    }
  ];

export default function WhyExteriorPaintFails() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="Why Exterior Paint Fails: Reading the Symptoms | Jetblack"
        description="Blistering, flaking, chalking and cracking each have a different cause. Diagnosing which one you have is what stops the repaint failing the same way."
        canonical="https://jetblackpainting.com/blog/why-exterior-paint-fails/"
        schema={articleSchema({
          headline: "Why Exterior Paint Fails: Reading the Symptoms",
          description: "Blistering, flaking, chalking and cracking each have a different cause. Diagnosing which one you have is what stops the repaint failing the same way.",
          canonical: "https://jetblackpainting.com/blog/why-exterior-paint-fails/",
          datePublished: "2026-09-04",
          dateModified: "2026-09-04",
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
              Why Exterior Paint Fails: Reading the Symptoms
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              When someone rings us about peeling weatherboards, the useful question is not what paint to use. It is why the last coat let go. Exterior paint rarely fails from age alone — it fails from moisture behind it, from a surface that was never sound, or from movement in the substrate underneath. Each of those leaves a different mark. Read the mark and you know what has to change; skip that step and the new coat fails the same way on the same wall, usually within a couple of Melbourne winters.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Blistering: moisture is behind the film, not on it</h2>
            <p className="text-[#B4B4B8] mb-4">
              Blisters are bubbles of paint lifted clean off the surface, often the size of a coin, sometimes much larger. Break one open and look underneath. If you can see bare timber or bare render, the paint lost its grip on the substrate. If you can see another layer of paint, the failure is between coats.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Both versions mean the same thing: something got behind the film. On a west-facing wall in summer that is often moisture in the timber being driven outward by afternoon sun — the wall heats, the trapped water turns to vapour, and the vapour pushes the coating off. On a south wall it is more likely persistent damp that never dries.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              This is why we chase the water source before we quote the paint. A blocked gutter, a downpipe discharging against a wall, a cracked sill letting rain into end grain, or ground level built up above the weatherboard line will all defeat a perfect paint job. Repainting over an unfixed leak buys you one season.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Flaking and peeling: adhesion was never there</h2>
            <p className="text-[#B4B4B8] mb-4">
              Flaking looks similar to blistering from a distance but behaves differently up close. The paint comes away in sheets or plates rather than bubbles, and the edges are hard and curled. Run a scraper along it and it keeps coming — you find yourself removing far more than the patch you started on.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              That is an adhesion failure, and it almost always traces back to preparation. Painting over a chalky surface, over a glossy old enamel that was never sanded, over dust, or over timber that was still wet gives the new coat nothing to key into. It can look perfect for a year, because the failure is at the bottom of the film where you cannot see it, and then let go all at once.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The honest fix is unglamorous: keep scraping until you reach paint that will not lift, then feather the edges back so the transition does not telegraph through, then prime the exposed substrate before anything else goes on. On a badly compromised elevation that can mean stripping the whole face. We would rather tell you that at quoting stage than discover it halfway through.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Chalking: the binder has gone, and it is not always a fault</h2>
            <p className="text-[#B4B4B8] mb-4">
              Rub a dry hand across the wall. If it comes away with a fine coloured powder, the surface is chalking. UV has broken down the binder holding the pigment together, and what is left is loose pigment sitting on the wall. Melbourne's UV load is high enough that this shows up on north and west elevations years before the south side looks tired.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              A light chalk on an old coating is normal ageing rather than a defect. Heavy chalk on a coating only a few years old points at either a low-grade product or an exterior paint used somewhere it was never rated for.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              What matters is that you cannot paint over it. New paint applied onto chalk bonds to the powder, and the powder is not bonded to anything. It has to be washed off properly and the surface checked again once dry — if a hand still comes away coloured, it gets a binding primer before topcoats.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Cracking and checking: the film has lost its flex</h2>
            <p className="text-[#B4B4B8] mb-4">
              Fine cracks in a grid pattern across the surface — often called checking or crazing — mean the coating has become brittle and can no longer move with the timber underneath. Every Melbourne summer the boards expand, every winter they contract, and a film that has lost its elasticity splits rather than stretches.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Deeper cracks that run in a straight line along a join are a different animal. That is movement at the joint itself, not paint failure, and filling the crack without addressing the movement guarantees it reopens. On weatherboards this usually shows at butt joins and around window reveals.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The distinction matters because the remedies differ. Crazing across a face means the old film has reached the end of its life and needs to come off. A single moving joint needs a flexible sealant designed to accommodate movement, not a rigid filler that will crack again on the first cold snap.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Mould and dirt: often mistaken for failure</h2>
            <p className="text-[#B4B4B8] mb-4">
              Black or green staining, particularly under eaves, on south-facing walls and anywhere shaded by a fence or a tree, is usually mould rather than paint breakdown. Eaves are the classic case — they are shaded, they never get washed by rain, and they collect dust that mould feeds on.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The tell is that it wipes or washes off, at least partly, and the film beneath is intact. Paint that has genuinely failed does not clean up.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Mould has to be killed rather than painted over, because the spores survive under a fresh coat and grow back through it. Treating the surface, letting it dry properly, and improving whatever caused the damp — trimming back the shrub against the wall, clearing the gutter above it — does more for the outcome than any upgrade in paint.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Reading a wall before you commit</h2>
            <p className="text-[#B4B4B8] mb-4">
              Walk each elevation separately and treat them as separate jobs, because they age at different rates. North and west take the UV and the driving weather; south holds damp and grows mould; east usually looks best and often needs the least work.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Look hardest at the low points and the horizontals — sills, the bottom rails of window frames, the lowest boards, the tops of fascias. Water sits on horizontal surfaces and soaks into end grain, so those areas fail years before the middle of a wall does.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              If more than one symptom is present on the same elevation, they are usually connected. Blistering above a chalked, mouldy band near the ground normally means water is getting in low and moving up. Fixing the paint is the last step in that sequence, not the first.
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
              <Link href="/services/exterior-painting/" className="text-[#D0A050] hover:underline">Exterior Painting</Link>
              <span className="text-[#8B8B90]"> · </span>
              <Link href="/services/roof-fence-painting/" className="text-[#D0A050] hover:underline">Roof & Fence Painting</Link>
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
