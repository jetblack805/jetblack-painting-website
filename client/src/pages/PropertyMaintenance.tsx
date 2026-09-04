import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import { lazy, Suspense } from "react";

const QuoteForm = lazy(() => import("@/components/QuoteForm"));

// Jimmy's own team on site. This page is aimed at managers and committees who
// are buying reliability rather than a finish, so the honest image is the crew
// working, not a styled interior.
import imgTeamAtWork from "@/assets/images/about-team-at-work.webp";

const DESCRIPTION =
  "Painting and property maintenance for Melbourne landlords, agents and body corporates. Repairs, touch-ups, repaints and scheduled upkeep. Free quotes.";
const CANONICAL = "https://jetblackpainting.com/services/property-maintenance/";

export default function PropertyMaintenance() {
  const faqs = [
    {
      question: "What does property maintenance painting cover?",
      answer:
        "Everything that keeps a building presentable and weathertight between full repaints: touch-ups and make-goods between tenancies, plaster and cornice repairs, water damage and stain blocking, exterior washing, timber and window frame repair, fence and gate recoating, and concrete sealing. It is planned upkeep rather than one large job.",
    },
    {
      question: "Do you take on ongoing maintenance for a portfolio?",
      answer:
        "Yes. For agencies and owners' corporations with several properties we work to a standing scope so each job does not need requoting from scratch. You get consistent pricing, one point of contact and a tradesperson who already knows the buildings, which is usually worth more than a marginally cheaper one-off quote.",
    },
    {
      question: "How quickly can you attend a maintenance job?",
      answer:
        "Enquiries are answered within 24 to 48 hours and written quotes follow in the same window. For a between-tenancy make-good with a fixed re-letting date, tell us the date at the outset and we scope the work backwards from it rather than quoting a duration and hoping it fits.",
    },
    {
      question: "Can you work in occupied buildings?",
      answer:
        "Routinely. Occupied work is brushed and rolled rather than sprayed, staged so residents keep access to their own entrances, and cleaned down at the end of each day. In apartment buildings we sequence common areas and stairwells so no one is cut off from their front door at any point.",
    },
    {
      question: "Do you handle insurance and water damage repairs?",
      answer:
        "Yes. Water-damaged ceilings and walls need the cause resolved first, then the substrate dried, the damage made good and the stain blocked with a sealing primer before any topcoat. Painting over a water stain with standard paint simply lets it bleed back through, which is the most common reason a repair reappears weeks later.",
    },
    {
      question: "Is maintenance work covered by the same guarantee?",
      answer:
        "Yes. Every job carries the same 5-year written workmanship guarantee and the same $10 million public liability cover, regardless of size. A half-day make-good is guaranteed on the same terms as a full exterior repaint.",
    },
    {
      question: "Which Melbourne suburbs do you cover for property maintenance?",
      answer:
        "We work across Bayside, Kingston, Glen Eira, Stonnington, the southeast and the Mornington Peninsula from our base in Mordialloc — including Brighton, Bentleigh, Caulfield, Mentone, Sandringham, Cheltenham, Keysborough and surrounding suburbs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <SEOHead
        title="Property Maintenance Melbourne | Jetblack Painting"
        description={DESCRIPTION}
        canonical={CANONICAL}
        schema={serviceSchema({
          serviceType: "Property Maintenance",
          name: "Property Maintenance Melbourne",
          description: DESCRIPTION,
          canonical: CANONICAL,
          faqs,
        })}
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Property Maintenance Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6">
              Painting and upkeep for landlords, property managers and body corporates — make-goods,
              repairs, touch-ups and scheduled maintenance across Bayside and Melbourne's southeast.
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
          <figure className="m-0 max-w-3xl">
            <img
              src={imgTeamAtWork}
              width={1400}
              height={1050}
              loading="lazy"
              decoding="async"
              alt="The Jetblack Painting team working on site in branded workwear on a Melbourne property"
              className="w-full rounded-lg"
            />
            <figcaption className="text-[#8B8B90] text-sm mt-3">
              The same crew every visit. For managed properties that consistency is the service —
              you are not briefing a different contractor each time something needs attention.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Upkeep, Not Just Repaints
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Most painting businesses are set up for the big job — the full interior, the whole
              exterior. A managed property rarely needs that. It needs the hallway made good before
              the next tenant, the ceiling stain that came back after the roof was fixed, the fence
              that has gone grey on the street side, the render patched where a downpipe was
              leaking.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              Those jobs are small individually and constant in aggregate, and the cost of getting
              them done badly is that they come back. Jetblack Painting takes them on as ongoing
              work rather than treating them as filler between larger projects.
            </p>
            <p className="text-[#B4B4B8]">
              Eighteen years working this side of Melbourne means knowing what the local building
              stock does — salt air and hard UV on the exposed Bayside elevations, period trim
              through Glen Eira and Stonnington, render and newer estate builds further southeast.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What We Maintain</h2>
            <ul className="space-y-3">
              {[
                "Between-tenancy make-goods and touch-ups on a fixed re-letting date",
                "Plaster, cornice and nail-pop repairs before repainting",
                "Water damage repair with stain-blocking primer so it does not bleed back",
                "Exterior washing, mould treatment and spot recoating on weathered elevations",
                "Timber window frames, sills and doors — the first parts of a building to fail",
                "Fence, gate and metalwork recoating, including rust treatment",
                "Concrete sealing for driveways, paths and garage floors",
                "Common areas, stairwells and facades for owners' corporations",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D0A050] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[#B4B4B8]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <MidPageCTA heading="Talk to us about ongoing maintenance" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              For Property Managers and Agencies
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              The brief on a managed property is different from an owner-occupier repaint.
              Turnaround and durability beat colour ambition: a washable low sheen outlives a
              fashionable matt, and a finish that survives the next tenancy is worth more than one
              that photographs well and marks in a month.
            </p>
            <p className="text-[#B4B4B8]">
              We quote with the scope itemised, work to the date that cannot move, and report back
              when something we find on site changes the picture — before doing the extra work
              rather than after. See also{" "}
              <Link href="/services/real-estate-painting" className="text-[#D0A050] hover:underline">
                real estate and pre-sale painting
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              For Body Corporates and Owners' Corporations
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Committees are buying predictability. Scope agreement up front, access arrangements
              that respect occupied units, and staged scheduling are what determine whether a
              building programme finishes on time — the painting itself is the straightforward part.
            </p>
            <p className="text-[#B4B4B8]">
              Quotes are itemised so a committee can compare like for like, and we can work to a
              maintenance schedule across a year rather than a single annual shutdown. See also{" "}
              <Link
                href="/services/body-corporate-painting"
                className="text-[#D0A050] hover:underline"
              >
                body corporate and strata painting
              </Link>
              .
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Property Maintenance Service Areas
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Based in Mordialloc, covering Bayside, Kingston, Glen Eira, Stonnington, the southeast
              and the Mornington Peninsula.
            </p>
            <div className="flex flex-wrap gap-x-4 gap-y-2">
              {[
                ["Brighton", "/painter-brighton"],
                ["Bentleigh", "/painter-bentleigh"],
                ["Caulfield", "/painter-caulfield"],
                ["Mordialloc", "/painter-mordialloc"],
                ["Mentone", "/painter-mentone"],
                ["Sandringham", "/painter-sandringham"],
                ["Cheltenham", "/painter-cheltenham"],
                ["Keysborough", "/keysborough-painters"],
              ].map(([name, href]) => (
                <Link key={href} href={href} className="text-[#D0A050] hover:underline">
                  {name}
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Property Maintenance FAQs</h2>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-[#222227] pb-4">
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{faq.question}</h3>
                  <p className="text-[#B4B4B8]">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#101013] p-8 rounded-lg"
          >
            <h3 className="text-xl font-bold text-[#EDEDEF] mb-4">Our Other Services</h3>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/services/real-estate-painting"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Real Estate &amp; Pre-Sale Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/body-corporate-painting"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Body Corporate Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/bathroom-tile-resurfacing"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Bathroom &amp; Tile Resurfacing
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/blog" className="text-[#D0A050] hover:underline font-medium">
                Painting Blog
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Free Maintenance Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              One property or a portfolio — a free site visit and a written scope, answered within
              24 to 48 hours.
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
        <QuoteForm compact serviceType="Property Maintenance" />
      </Suspense>

      <Footer />
    </div>
  );
}
