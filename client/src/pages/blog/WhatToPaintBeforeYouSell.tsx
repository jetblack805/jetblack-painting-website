import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import { articleSchema } from "@/lib/articleSchema";
import { Link } from "wouter";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";

// Generated from content/blog/what-to-paint-before-you-sell.json by scripts/generate-blog.mjs.
// Do not edit by hand — edit the JSON and re-run `pnpm generate-blog`.

const faqs = [
    {
      "question": "Should I paint before or after the property is styled?",
      "answer": "Before, without exception. Painting is the first trade on site before a campaign. Once furniture, rugs and staged decor are in, the work is slower, the finish into corners and skirting is harder to keep clean, and the stylist's pieces are at risk. Work backwards from the photography date so the property is painted, dry and ventilated with days to spare."
    },
    {
      "question": "Is it worth repainting the exterior before selling?",
      "answer": "It depends entirely on the condition of the existing coating. If the film is intact with no chalking, flaking or exposed timber, a wash will usually present it honestly and the money is better spent on the entry and main living areas. If there is bare substrate or failing paint, it is worth doing, because buyers read that as deferred maintenance on the whole property rather than as a tired finish."
    },
    {
      "question": "Can I just touch up the marks instead of repainting?",
      "answer": "Usually not, and a bad touch-up does more damage than the original mark. Paint on a wall ages, so leftover paint from an old tin will not match the surface around it, and a sheen difference catches the light from across the room. Under listing photography it reads as corners cut. Repainting the full wall is the safer call on any surface a buyer will stand in front of."
    },
    {
      "question": "What colours should I use if I am selling?",
      "answer": "Warm whites and soft, broad-appeal neutrals. The job of a listing photo and an open home is to remove friction between the buyer and the sale, not to add character. A bold feature wall is a personal choice, and every personal choice a buyer has to mentally undo is one more reason they picture someone else's home instead of their own."
    },
    {
      "question": "Which rooms are not worth painting before a sale?",
      "answer": "Inside built-in wardrobes, the garage interior, the laundry behind the machines and the linen cupboard. Buyers open them, glance and move on, and none of it reaches a photo. Secondary bedrooms in sound condition with neutral walls are usually not worth it either. The common mistake is doing the cheap rooms because they are cheap, instead of the entry and main living areas where buyers actually form a view."
    },
    {
      "question": "How much of the house needs to be painted for it to look even?",
      "answer": "Whatever a buyer sees in one continuous view. Repainting one wall of an open-plan living area and leaving the adjoining one is more obvious than leaving both. Work in whole surfaces and whole sightlines rather than patches, and carry the same treatment through any space the camera or a buyer takes in at once."
    }
  ];

export default function WhatToPaintBeforeYouSell() {
  return (
    <div className="min-h-screen">
      <SEOHead
        title="What to Paint Before You Sell, and What to Skip"
        description="A seller's guide to where paint changes a buyer's mind before a campaign, which surfaces earn their keep, and which are effort you will never see back."
        canonical="https://jetblackpainting.com/blog/what-to-paint-before-you-sell/"
        schema={articleSchema({
          headline: "What to Paint Before You Sell, and What to Skip",
          description: "A seller's guide to where paint changes a buyer's mind before a campaign, which surfaces earn their keep, and which are effort you will never see back.",
          canonical: "https://jetblackpainting.com/blog/what-to-paint-before-you-sell/",
          datePublished: "2026-09-15",
          dateModified: "2026-09-15",
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
              What to Paint Before You Sell, and What to Skip
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-[#8B8B90] text-sm">
              <span className="flex items-center gap-1"><User className="w-4 h-4" /> Jimmy Demirci</span>
              <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> September 2026</span>
              <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 7 min read</span>
            </div>
          </header>

          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-[#A3A3A8] mb-8">
              Every seller gets the same advice: freshen it up before you list. Almost nobody gets told which parts. So vendors either repaint the whole house, including rooms no buyer will linger in, or they skip it entirely and hope the photos are forgiving. Both cost money. This is the narrower question worth asking: which surfaces are doing work on a buyer, and which are invisible once the furniture is in and the camera is up.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Follow the buyer, not the floor plan</h2>
            <p className="text-[#B4B4B8] mb-4">
              A buyer walks a fixed path. Kerb, front door, entry, main living, kitchen, then the bedrooms in whatever order the hallway offers them. By the time they reach the fourth bedroom they have already formed a view and are looking for confirmation of it. Paint spent early in that path is worth more than the same paint spent late.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The listing photos compress this further. A buyer sees the façade, the main living space and the kitchen before they ever stand in the house, and those images decide whether they turn up at all. Surfaces that appear in the first four photos are the ones to get right.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              This is also why a spotless back bedroom rarely rescues a tired entry. The order is not negotiable and the first impression is doing most of the work.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">The surfaces that almost always earn their keep</h2>
            <p className="text-[#B4B4B8] mb-4">
              The front door and entry. It is the one surface every single buyer touches, at the moment they are deciding what kind of property this is. A door with weathered, chalky paint sets an expectation the rest of the house then has to argue against.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Walls in the main living areas and the hallway. These carry the most visible wear in any occupied home, and they are the backdrop to most of the photography. An even coat across the whole space beats a good result in one room and obvious wear in the next.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Ceilings with water marks or smoke staining. Buyers read a stained ceiling as an unresolved problem, not a cosmetic one, and that reading follows them into the negotiation whether or not the cause was fixed years ago.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Trim, skirting and architraves in high-traffic areas. Scuffed white trim against freshly painted walls is more noticeable after the walls are done than it was before, which is how people end up disappointed by a job that was technically completed.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">What you can usually leave alone</h2>
            <p className="text-[#B4B4B8] mb-4">
              Inside built-in wardrobes, the garage interior, the laundry behind the machines, and the inside of the linen cupboard. Buyers open these, glance, and close them. None of it reaches a photo.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              An exterior that is genuinely sound. Exterior repainting is the largest line item in a pre-sale scope, and if the existing coating is intact with no chalking, flaking or exposed substrate, a wash will often present it honestly enough. The decision changes the moment there is bare timber or failing film, because that reads to a buyer as deferred maintenance rather than age.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Secondary bedrooms in reasonable condition. If the walls are sound and the colour is neutral, the return on repainting a third bedroom is close to nothing.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              The trap here is doing the cheap rooms because they are cheap. A budget spent on the spare room instead of the entry is a budget spent where nobody is looking.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Where a DIY touch-up costs you at the negotiation</h2>
            <p className="text-[#B4B4B8] mb-4">
              Touching up with leftover paint is the most common pre-sale mistake, and it is worse than doing nothing. Paint on a wall has aged, and a patch of the same colour from an old tin will not match the surface around it. Under listing photography and open-home lighting, that patch reads as clearly as the mark it was meant to hide.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Sheen is the other giveaway. A low sheen touch-up on a matt wall catches light at a different angle to everything around it, so the repair announces itself from across the room. To a buyer it does not read as a small repair. It reads as corners cut.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Where a wall has visible marks going into a campaign, repainting the full wall, corner to corner, is almost always the safer call. Partial work on a surface a buyer is standing in front of is where the saving disappears.
            </p>

            <h2 className="text-2xl font-bold text-[#EDEDEF] mt-10 mb-4">Briefing a painter for a campaign, not a renovation</h2>
            <p className="text-[#B4B4B8] mb-4">
              Work backwards from the photography date, not forwards from today. The property needs to be painted, dry and properly ventilated with days to spare, so the stylist can move furniture in without working around wet paint or a lingering smell.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Painting is the first trade on site before a campaign, not the last. Painting after styling means working around furniture, rugs and staged pieces. It is slower, riskier for the stylist's stock, and harder to get a clean finish into corners and skirting that are now half obstructed.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Settle colours before the quote rather than during the job. Warm whites and broad-appeal neutrals let the widest range of buyers picture their own furniture in the room, which is the entire job of a listing photo. Every personal choice a buyer has to mentally undo is one more reason they picture someone else's home instead of their own.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Be explicit that this is a pre-sale scope. A painter pricing a campaign should be prioritising the surfaces above and telling you where your money stops working, not quoting the whole house by default.
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
              <Link href="/services/real-estate-painting/" className="text-[#D0A050] hover:underline">Real Estate Painting</Link>
              <span className="text-[#8B8B90]"> · </span>
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
