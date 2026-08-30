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
import imgService from "@/assets/images/gallery-commercial-heritage-white.webp";
import imgService900 from "@/assets/images/gallery-commercial-heritage-white-900.webp";
import imgBeforeAfter from "@/assets/images/gallery-commercial-before-after.webp";
import imgBeforeAfter900 from "@/assets/images/gallery-commercial-before-after-900.webp";
import imgComfortelBuilding from "@/assets/images/gallery-commercial-comfortel-building.webp";
import imgComfortelFront from "@/assets/images/gallery-commercial-comfortel-front.webp";

export default function BodyCorporatePainting() {
  const benefits = [
    "Common areas, hallways, stairwells, lobbies and external façades",
    "Scheduling around residents and tenants to minimise disruption",
    "Direct coordination with owners corporations and strata managers",
    "$10M public liability insurance with compliance documents on request",
    "Durable, low-maintenance coatings for high-traffic shared spaces",
    "5-year workmanship guarantee",
  ];

  const suburbs = [
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Collingwood", link: "/painter-collingwood" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Clyde North", link: "/painter-clyde-north" },
    { name: "Box Hill", link: "/painter-box-hill" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Highett", link: "/painter-highett" },
  ];

  /* First sentence of every answer is the answer, so it survives being
     quoted in isolation by an AI assistant or Google's FAQ treatment.
     Feeds both the visible list and the FAQPage schema; mirrored in
     scripts/generate-static-pages.mjs — edit both or the layers drift. */
  const faqs = [
    {
      question: "Do you work with owners corporations and strata managers?",
      answer:
        "Yes. We regularly work directly with owners corporations, body corporate committees and strata managers across Melbourne — providing detailed quotes, scopes of work, insurance documentation and clear schedules so committees can approve and plan the works with confidence.",
    },
    {
      question: "What areas of an apartment or unit complex do you paint?",
      answer:
        "We paint all common property, including entry lobbies, hallways and corridors, stairwells, car parks, external façades and rendered walls, balconies, eaves and shared amenities. We can quote a full repaint or a staged maintenance program across multiple buildings.",
    },
    {
      question: "How do you minimise disruption to residents?",
      answer:
        "We plan the work around residents and tenants — keeping access ways safe and open, staging areas so entries and stairwells remain usable, using low-odour products in occupied buildings, and communicating the schedule clearly in advance so everyone knows what to expect.",
    },
    {
      question: "Are you insured for body corporate and strata work?",
      answer:
        "Absolutely. Jetblack Painting carries $10 million public liability insurance and follows proper site safety and access procedures. We're happy to provide insurance certificates, safe work documentation and detailed scopes for committees and building managers before work begins.",
    },
    {
      question: "What does a committee actually need to approve the work?",
      answer:
        "A detailed written scope broken down by area, a clear price, and our insurance documentation — that's what lets a committee move from discussion to a decision without a second round of questions. We prepare the quote so it can go straight into an AGM or committee meeting agenda, itemised enough that owners can see exactly what's included before they vote on it.",
    },
    {
      question: "Can the work be staged across a large building or multiple buildings?",
      answer:
        "Yes. Staging is standard on occupied strata property, not an exception — we typically work wing by wing or level by level so entries, stairwells and car park access stay usable throughout, rather than closing the whole building down for the length of the project. For multi-building complexes, we can quote the works as a single staged program or building by building, whichever suits the committee's budget and timing.",
    },
    {
      question: "What access equipment do you use for multi-storey buildings?",
      answer:
        "The access equipment depends on the building's height and site constraints — scaffolding, elevated work platforms or scissor lifts, chosen for what the specific façade and access conditions actually need rather than a default option. We factor site access, boom reach and any strata bylaws around common property access into the quote up front, so there's no surprise equipment cost once work starts.",
    },
    {
      question: "How do you communicate with residents during the project?",
      answer:
        "Through the committee or strata manager, with a schedule they can circulate to owners and tenants ahead of time — which areas are affected and when, so residents aren't caught off guard by scaffolding or a closed stairwell. Low-odour products are used as standard in occupied common areas, and access ways are kept safe and usable throughout rather than closed off entirely.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Body Corporate Painting Melbourne | Jetblack Painting"
        description="Body corporate and strata painting in Melbourne. Common areas, facades and maintenance programs. Fully insured. Free quotes — 0432 077 782."
        canonical="https://jetblackpainting.com/services/body-corporate-painting/"
        schema={serviceSchema({ serviceType: "Body Corporate Painting", name: "Body Corporate Painting Melbourne", description: "Body corporate and strata painting in Melbourne. Common areas, façades and maintenance programs for owners corporations. Fully insured, minimal disruption. Free quotes.", canonical: "https://jetblackpainting.com/services/body-corporate-painting/", faqs })}
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
              Body Corporate Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional painting for owners corporations and strata-managed properties across Melbourne. Jetblack Painting repaints common areas and façades with minimal disruption to residents — fully insured, on schedule, and built to last.
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
            srcSet={`${imgService900} 900w, ${imgService} 1400w`}
            sizes="(max-width: 1024px) 100vw, 1152px"
            width={1400}
            height={1050}
            alt="Heritage multi-storey building repainted white by Jetblack Painting for a Melbourne owners corporation"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgBeforeAfter}
              srcSet={`${imgBeforeAfter900} 900w, ${imgBeforeAfter} 1400w`}
              sizes="(max-width: 1024px) 100vw, 1152px"
              width={1400}
              height={1400}
              alt="Before and after of a strata building façade repaint by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgComfortelBuilding}
              width={1400}
              height={1050}
              alt="Commercial and strata building exterior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgComfortelFront}
              width={1050}
              height={1400}
              alt="Multi-tenancy building frontage painted by Jetblack Painting"
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
              Melbourne's Body Corporate & Strata Painting Specialists
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting provides professional body corporate and strata painting for apartment blocks, unit complexes, townhouse developments and mixed-use buildings across Melbourne. We repaint and maintain common property — from lobbies, hallways and stairwells to external façades and shared amenities — protecting the building's value and keeping it presenting well for residents and owners.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              We know committees and managers need clarity and confidence. Every project comes with a detailed written scope, transparent pricing, insurance documentation and a clear schedule, so the works can be approved, planned and delivered with minimal disruption to residents and tenants.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Owners Corporations Choose Jetblack Painting</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* What we paint */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What We Paint on Strata Properties</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Entry lobbies and foyers",
                "Hallways, corridors and stairwells",
                "External façades and rendered walls",
                "Balconies, balustrades and railings",
                "Car parks and basement areas",
                "Eaves, soffits and common ceilings",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-[#B4B4B8]">
                  <span className="w-2 h-2 rounded-full bg-[#D0A050] flex-shrink-0" />
                  {item}
                </div>
              ))}
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">How the Committee Approval Process Actually Works</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A body corporate can't approve a painting job the way a homeowner approves one. A committee needs something they can put in front of owners and defend — a scope specific enough that nobody can reasonably ask "but what does that actually cover," a price that doesn't move once the vote is cast, and proof of insurance that satisfies whatever the owners corporation's rules require. We write the quote for that meeting, not just for the job.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              That means breaking the scope down by area rather than quoting the building as one lump figure — lobby, stairwells, façade, car park — so a committee weighing priorities against a budget can see where the cost actually sits, and can stage the work or split it across financial years if that's how the money needs to work. It also means the insurance documentation is ready to go before it's asked for, not chased down after the meeting once someone raises the question.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Staging Work Around an Occupied Building</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Closing a whole building down for the length of a repaint isn't realistic when people live and work in it, so staging is the default approach on strata property, not a special request. Most projects run wing by wing or level by level, which keeps at least one entry, one stairwell and the car park accessible at any given time rather than forcing every resident through a single remaining exit.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              For complexes with more than one building, that same logic extends across the site — the works can be quoted and run as one continuous staged program, or split building by building against separate budget approvals, whichever suits how the committee wants to fund it. Either way, the schedule is set out clearly enough in advance that the committee can circulate it to owners and tenants before scaffolding or access equipment shows up, not after.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Access Equipment for Multi-Storey and Façade Work</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Common property access equipment gets chosen for the building, not defaulted to whatever's easiest to book. A three-storey walk-up with a narrow driveway rules out a lot of what would work on an open site with clear boom reach, and scaffolding that makes sense on a low-rise façade isn't practical — or affordable — run up a high-rise tower. Scaffolding, elevated work platforms and scissor lifts each suit different heights, façade shapes and site access, and the right one is worked out at the quote stage, not improvised on the day.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              That assessment happens before the price is finalised, because access equipment is one of the biggest cost variables in a multi-storey repaint — getting it wrong either blows the budget or means turning up on site to find the booked equipment can't actually reach the work. We also account for anything the owners corporation's own bylaws specify about common property access, so there's no last-minute conflict between the equipment plan and what the strata rules actually allow.
            </p>
          </motion.div>

          <MidPageCTA heading="Get your free Body Corporate Painting quote today" />

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#131316] p-8 rounded-lg border border-[#222227]"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Body Corporate Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide body corporate and strata painting across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Body Corporate Painting FAQs</h2>
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
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/real-estate-painting" className="text-[#D0A050] hover:underline font-medium">Real Estate Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline font-medium">Exterior Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Body Corporate Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a detailed, no-obligation quote and scope for your owners corporation.
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
        <QuoteForm compact serviceType="Body Corporate Painting" />
      </Suspense>

      <Footer />
    </div>
  );
}
