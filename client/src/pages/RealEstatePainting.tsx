import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import { lazy, Suspense } from "react";
// Lazy, as on the homepage and suburb pages: react-hook-form and zod stay
// out of the initial payload and the form loads below the fold.
const QuoteForm = lazy(() => import("@/components/QuoteForm"));
import imgService from "@/assets/images/gallery-interior-staged-living.webp";
import imgBoucleLiving from "@/assets/images/gallery-interior-boucle-living.webp";
import imgOpenLiving from "@/assets/images/gallery-interior-open-living.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-open-plan-living.webp";

export default function RealEstatePainting() {
  const benefits = [
    "Fast turnaround scheduled around your sale campaign or settlement",
    "Broad-appeal neutral colour consultation that photographs well",
    "Direct coordination with agents, vendors and property stylists",
    "Sharp, presentation-ready interior and exterior finishes",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee",
  ];

  const suburbs = [
    { name: "Murrumbeena", link: "/painter-murrumbeena" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Highett", link: "/painter-highett" },
    { name: "McKinnon", link: "/painter-mckinnon" },
    { name: "Collingwood", link: "/painter-collingwood" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Aspendale", link: "/painter-aspendale" },
  ];

  /* First sentence of every answer is the answer, so it survives being
     quoted in isolation by an AI assistant or Google's FAQ treatment.
     Feeds both the visible list and the FAQPage schema; mirrored in
     scripts/generate-static-pages.mjs — edit both or the layers drift. */
  const faqs = [
    {
      question: "Do you work directly with real estate agents and vendors?",
      answer:
        "Yes. We regularly coordinate directly with real estate agents, vendors and property stylists across Melbourne — handling quotes, access, scheduling and invoicing so the repaint is finished on time for photography, styling and the first open home.",
    },
    {
      question: "How quickly can you paint a property before it goes on the market?",
      answer:
        "Most pre-sale and pre-lease repaints are completed within a few days to a week, depending on the size and scope. We build the schedule around your campaign dates and settlement deadlines so the property is ready when it needs to be.",
    },
    {
      question: "What colours work best for selling or leasing a property?",
      answer:
        "Warm whites and soft, broad-appeal neutrals photograph well and help the widest range of buyers and tenants picture themselves in the home. We provide colour consultation to choose a scheme that suits the property and maximises presentation.",
    },
    {
      question: "Is painting worth it before selling a property?",
      answer:
        "In most cases yes. A professional repaint is one of the highest-return improvements before a sale — it addresses scuffs, dated colours and tired façades that buyers otherwise price against you, and lifts the quality of listing photography and inspections.",
    },
    {
      question: "When in the campaign should painting happen?",
      answer:
        "Before styling and before photography — painting is always the first trade on site, not the last. We work backwards from your photography date so paint is finished, dry and ventilated with time to spare for the stylist to move furniture in, rather than painting around styled rooms or rushing the final coat the night before a shoot.",
    },
    {
      question: "Should I paint a feature wall or keep it neutral for a sale?",
      answer:
        "Keep it neutral for a sale. A bold feature wall reads as a personal choice a buyer has to mentally undo before they can picture their own furniture in the room, which narrows your buyer pool rather than widening it. Neutral, broad-appeal palettes photograph more evenly under listing lighting too, which is a separate reason they're the default for a sale campaign.",
    },
    {
      question: "Can you paint between a tenant moving out and a new lease starting?",
      answer:
        "Yes, and vacancy turnarounds are a regular part of our rental and investment work. We coordinate directly with property managers on the exact window between the outgoing and incoming tenant, and use durable, washable finishes suited to rental wear rather than a presentation-only finish, since the property needs to hold up through the next tenancy, not just the next inspection.",
    },
    {
      question: "Does a patchy DIY touch-up look better or worse than not painting at all?",
      answer:
        "Often worse. A touch-up in slightly the wrong colour or sheen shows up under listing photography and open-home lighting as clearly as an unpainted mark does, and can read to a buyer as a sign of deferred maintenance rather than care. A full, even repaint of the affected walls or room is usually the safer call before a campaign starts.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Real Estate Painting Melbourne | Jetblack Painting"
        description="Pre-sale and pre-lease painting in Melbourne for agents, vendors and investors. Fast turnarounds, neutral colours. Free quotes — 0432 077 782."
        canonical="https://jetblackpainting.com/services/real-estate-painting/"
        schema={serviceSchema({ serviceType: "Real Estate Painting", name: "Real Estate Painting Melbourne", description: "Real estate painting in Melbourne for agents, vendors and investors. Fast pre-sale and pre-lease repaints, neutral colours, agent coordination. 5-star rated. Free quotes.", canonical: "https://jetblackpainting.com/services/real-estate-painting/", faqs })}
      />
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Real Estate Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Presentation-ready repaints for agents, vendors and investors. Jetblack Painting delivers fast, sale-ready interior and exterior painting that lifts value and buyer appeal across Melbourne.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-[#131316]">
        <div className="container">
          <img
            src={imgService}
            width={1206}
            height={804}
            alt="Sale-ready living room repainted by Jetblack Painting for a Melbourne real estate campaign"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgOpenLiving}
              width={1170}
              height={782}
              alt="Freshly painted open living room presented for sale by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgBoucleLiving}
              width={1050}
              height={1400}
              alt="Styled living and dining room repainted by Jetblack Painting for sale presentation"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgOpenPlanLiving}
              width={823}
              height={561}
              alt="Open plan living and kitchen repainted by Jetblack Painting for a property sale"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Melbourne's Real Estate Painting Specialists
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting helps Melbourne real estate agents, vendors and investors present properties at their absolute best. Whether you're preparing a home for sale, refreshing an investment between tenants, or getting a listing photography-ready, we deliver fast, sharp, broad-appeal finishes that maximise value and shorten time on market.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              We understand real estate timelines. Campaigns move quickly, and a repaint has to be finished before photography, styling and the first open home — not after. We quote fast, coordinate directly with agents and stylists, and work to your deadline so nothing holds up the sale.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Agents and Vendors Choose Jetblack Painting</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related property services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Painting for Every Stage of a Property</h2>
            <p className="text-[#B4B4B8] mb-4">
              Our real estate painting service covers the full property lifecycle in one place — whether you're selling, leasing or refreshing an investment:
            </p>
            <div className="space-y-4 mb-6">
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Pre-sale property painting</h3>
                <p className="text-[#B4B4B8]">Fast, broad-appeal repaints that lift presentation and photography before your sale campaign, timed around your styling and open-home dates.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Rental &amp; investment property painting</h3>
                <p className="text-[#B4B4B8]">Durable, washable finishes for landlords and property managers, with quick turnarounds scheduled around vacancy periods and tenancy changeovers.</p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#EDEDEF] mb-1">Property styling &amp; agent coordination</h3>
                <p className="text-[#B4B4B8]">Neutral colour consultation and direct coordination with agents and stylists so the property presents at its best on listing day.</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/interior-painting" className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium">Interior Painting</Link>
              <Link href="/services/exterior-painting" className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium">Exterior Painting</Link>
            </div>
          </motion.div>

          {/* Pillar-depth sections. Every paragraph is duplicated verbatim into
              the `extraSections` for this route in
              scripts/generate-static-pages.mjs — crawlers that don't run JS
              read that copy, so both must be edited together or the layers
              drift. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">How a Repaint Fits Into the Campaign Timeline</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Painting is always the first trade on site before a campaign, not the last. We work backwards from the photography date: the property needs to be fully painted, dry and properly ventilated with days to spare, so the stylist can move furniture in without working around wet paint or a lingering smell, and so the final coat isn't rushed the night before a shoot to hit a deadline it was never going to comfortably meet.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              That sequencing matters more than people expect. A property painted after styling means working around furniture, rugs and staged decor — slower, riskier for the stylist's pieces, and harder to get a clean, even finish into corners and skirting that are now partly obstructed. Painting first keeps every trade that follows moving on schedule instead of waiting on a coat of paint that should have been finished a week earlier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Paint Condition Affects What Buyers Offer</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Scuffed walls, dated colours and a tired façade don't just look worse in photos — they get priced against you at the negotiation table. Buyers read visible wear as a proxy for how well the rest of the property has been maintained, whether or not that's actually true, and a flat, even repaint removes that signal before it can work against the sale price.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              A patchy DIY touch-up can do more damage than no touch-up at all. A slightly-off colour match or a different sheen catches the eye under listing photography and open-home lighting just as clearly as the original mark did, and reads to a buyer as a sign of corners cut rather than care taken. Where a wall or room has visible marks going into a campaign, a full, even repaint of the affected area is almost always the safer call.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Choosing Colours That Sell, Not Just Colours You'd Live With</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A bold feature wall is a personal choice, and every personal choice a buyer has to mentally undo is one more reason they picture someone else's home instead of their own. Warm whites and soft, broad-appeal neutrals let the widest range of buyers imagine their own furniture in the room, which is the entire job of a listing photo and an open home — removing friction between the buyer and the sale, not adding character for its own sake.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Neutral palettes also photograph more evenly. Strong or dark colours shift under different light sources and camera settings in a way flat whites and soft neutrals don't, which is part of why they're the default for listing photography specifically, separate from the buyer-appeal argument. We choose the scheme to suit the property's own light and finishes, not a single stock colour applied to every listing regardless of the home.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Rental Turnarounds Between Tenants</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              The window between an outgoing tenant leaving and a new lease starting is usually tight, and every day it runs into is a day of vacant rent. We coordinate directly with property managers on the exact dates so the repaint fits the vacancy period rather than extending it, and we prioritise durable, washable finishes over a presentation-only one, because a rental property has to hold up through the next tenancy, not just look good for the next inspection.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Repainting on a regular cycle rather than only when damage becomes visible protects the asset and reduces disputes at the end of a tenancy — it's easier to assess fair wear and tear against a recent, known paint job than one nobody can date. For landlords managing several properties, we can coordinate turnarounds across a portfolio rather than treating each one as a one-off job.
            </p>
          </motion.div>

          <MidPageCTA heading="Get your free Real Estate Painting quote today" />

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#131316] p-8 rounded-lg border border-[#222227]"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Real Estate Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide real estate painting for agents, vendors and investors across all Melbourne suburbs including:</p>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#0C0C0E] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium"
                >
                  {s.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Real Estate Painting FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#222227] pb-4">
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Related Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#101013] p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#EDEDEF] mb-4">Our Other Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link href="/services/body-corporate-painting" className="text-[#D0A050] hover:underline font-medium">Body Corporate Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#D0A050] hover:underline font-medium">Painting Blog</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Real Estate Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a fast, no-obligation quote on your pre-sale or investment repaint.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] px-8 py-4 rounded font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>

      <Suspense fallback={<div style={{ minHeight: "400px" }} />}>
        <QuoteForm compact serviceType="Real Estate Painting" />
      </Suspense>

      <Footer />
    </div>
  );
}
