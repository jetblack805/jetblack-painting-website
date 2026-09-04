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

// Jimmy's own job: a bathtub whose original coating had worn back to the pink
// undercoat, stripped and refinished. Same tub, same viewpoint, so the pair
// carries the argument on its own — this is the most persuasive thing on the
// page and it sits above the copy.
//
// These replaced a phone-composite JPEG with a marker-pen caption burnt into
// it. Both originals were 5712x4284 and ~3.5MB with EXIF orientation 6, and
// this environment has no image tooling, so they sat unusable until
// scripts/convert-photo.mjs started using headless Chromium as the pipeline.
// That script applies the EXIF rotation during decode — without it the pair
// would have shipped sideways.
import imgBathBefore from "@/assets/images/gallery-bathroom-bath-before.webp";
import imgBathBefore900 from "@/assets/images/gallery-bathroom-bath-before-900.webp";
import imgBathAfter from "@/assets/images/gallery-bathroom-bath-after.webp";
import imgBathAfter900 from "@/assets/images/gallery-bathroom-bath-after-900.webp";

const DESCRIPTION =
  "Bathroom vanity, tile and bathtub resurfacing across Melbourne. Durable 2-pack coatings that renew a dated bathroom without a full strip-out. Free quotes.";
const CANONICAL = "https://jetblackpainting.com/services/bathroom-tile-resurfacing/";

export default function BathroomTileResurfacing() {
  const faqs = [
    {
      question: "Can you really paint over bathroom tiles?",
      answer:
        "Yes, with the right system and honest preparation. Tile resurfacing uses a bonding primer designed to grip glazed surfaces, followed by a hard-wearing 2-pack topcoat. What decides the result is not the paint but the preparation: the tiles have to be stripped of soap residue and body oils, the glaze abraded so the primer has something to key into, and every trace of silicone removed. Skip any of that and it will peel at the edges within a year.",
    },
    {
      question: "How long does a resurfaced bathroom last?",
      answer:
        "A properly prepared vanity or tile resurface holds up for years in normal family use. The two things that shorten it are standing water sitting on a horizontal surface and abrasive cleaners. We hand over care instructions with the job, because how a resurfaced bathroom is cleaned matters more to its lifespan than anything else after we leave.",
    },
    {
      question: "Is resurfacing cheaper than a bathroom renovation?",
      answer:
        "Substantially, and it is faster. A full renovation means demolition, waterproofing, trades in sequence and weeks without a bathroom. Resurfacing changes the colour and finish of what is already there in a matter of days. It is the right choice when the layout works and the surfaces are sound but dated. It is the wrong choice when tiles are drummy, waterproofing has failed, or the layout itself is the problem — we will tell you if that is what we find.",
    },
    {
      question: "Can you resurface a bathtub?",
      answer:
        "Yes. Bath resurfacing suits enamel and acrylic tubs that are structurally sound but stained, chipped or an outdated colour. Chips are filled and faired before coating so the repair does not telegraph through the finish. A tub with a crack through it or flex in the base is not a resurfacing candidate.",
    },
    {
      question: "How long is the bathroom out of use?",
      answer:
        "Typically two to four days depending on the scope, and the room is genuinely unusable for that period — coatings need clean air and no moisture while they cure. Touch-dry is not cured. We give you the real return-to-service date with the quote rather than the best case, which matters if it is the only bathroom in the house.",
    },
    {
      question: "Do you resurface bathrooms in rental properties?",
      answer:
        "Regularly. It is a common between-tenancy choice for property managers because it lifts a tired bathroom inside a short vacancy window without the cost and programme of a renovation. Tell us the date the property has to be back on the market and we will scope the work backwards from it.",
    },
    {
      question: "Which Melbourne suburbs do you cover for bathroom resurfacing?",
      answer:
        "We work across Bayside, Kingston, Glen Eira, Stonnington, the southeast and the Mornington Peninsula from our base in Mordialloc — including Brighton, Bentleigh, Caulfield, Mentone, Sandringham, Cheltenham, Keysborough and surrounding suburbs.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0B]">
      <SEOHead
        title="Bathroom &amp; Tile Resurfacing Melbourne | Jetblack Painting"
        description={DESCRIPTION}
        canonical={CANONICAL}
        schema={serviceSchema({
          serviceType: "Bathroom and Tile Resurfacing",
          name: "Bathroom & Tile Resurfacing Melbourne",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bathroom &amp; Tile Resurfacing Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Renew a dated bathroom without the strip-out. Vanities, wall and floor tiles and
              bathtubs resurfaced in durable 2-pack coatings — days rather than weeks, and no
              demolition.
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
          <div className="grid gap-4 md:grid-cols-2">
            <figure className="m-0">
              <img
                src={imgBathBefore}
                srcSet={`${imgBathBefore900} 900w, ${imgBathBefore} 1400w`}
                sizes="(max-width: 768px) 100vw, 576px"
                width={1400}
                height={1867}
                loading="lazy"
                decoding="async"
                alt="A Melbourne bathtub before resurfacing, its original coating worn through to the pink undercoat across the base"
                className="w-full rounded-lg"
              />
              <figcaption className="text-[#8B8B90] text-sm mt-3">
                Before. The original coating has worn through to the pink undercoat across the
                base — the part that holds standing water always fails first.
              </figcaption>
            </figure>
            <figure className="m-0">
              <img
                src={imgBathAfter}
                srcSet={`${imgBathAfter900} 900w, ${imgBathAfter} 1400w`}
                sizes="(max-width: 768px) 100vw, 576px"
                width={1400}
                height={1867}
                loading="lazy"
                decoding="async"
                alt="The same bathtub after resurfacing by Jetblack Painting, refinished in white with the tiling and plumbing left in place"
                className="w-full rounded-lg"
              />
              <figcaption className="text-[#8B8B90] text-sm mt-3">
                After. Stripped, prepared and refinished. The tiling, the tapware and the plumbing
                are exactly where they were — nothing was removed.
              </figcaption>
            </figure>
          </div>
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
              What Bathroom Resurfacing Actually Is
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Resurfacing recoats the surfaces you already have rather than removing them. The
              vanity, the wall and floor tiles and the bath are cleaned back, abraded, primed with a
              bonding system made for non-porous surfaces, and finished in a hard 2-pack topcoat.
              The layout, the plumbing and the waterproofing are untouched.
            </p>
            <p className="text-[#B4B4B8] mb-4">
              That is the whole appeal. A bathroom that works but looks twenty years old can be
              changed in a few days, with no demolition, no waterproofing certificate and no
              sequence of trades waiting on each other.
            </p>
            <p className="text-[#B4B4B8]">
              It is also why preparation is the entire job. Bathrooms carry soap film, body oils and
              silicone residue on every surface, and a coating applied over any of that is bonded to
              the residue rather than the tile.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What We Resurface</h2>
            <ul className="space-y-3">
              {[
                "Vanity units, doors and drawer fronts in 2-pack polyurethane",
                "Wall tiles and splashbacks, including full-height shower surrounds",
                "Floor tiles, using a coating rated for foot traffic and moisture",
                "Bathtubs in enamel or acrylic, with chips filled and faired first",
                "Laundry cabinetry and tiling, which take the same system",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#D0A050] shrink-0 mt-1" aria-hidden="true" />
                  <span className="text-[#B4B4B8]">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <MidPageCTA heading="Get your free bathroom resurfacing quote" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              When Resurfacing Is the Wrong Answer
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              We would rather turn work down than coat a bathroom that should not be coated. Tiles
              that sound hollow when tapped have lost their bond to the substrate and will move
              regardless of what goes on top. Active water damage, failed waterproofing or
              persistent mould behind the tiling are structural problems, and a coating hides them
              rather than fixing them.
            </p>
            <p className="text-[#B4B4B8]">
              If that is what we find at the site visit, we will say so. Resurfacing is the right
              call when the bones are sound and the finish is dated — which, in most Melbourne
              bathrooms built from the nineties onward, it is.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              For Landlords, Agents and Body Corporates
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Bathrooms decide how a property shows. For a between-tenancy turnaround or a pre-sale
              refresh, resurfacing is often the highest-return work available, because it changes
              the room a buyer or tenant reacts to most strongly inside a window a renovation could
              never meet.
            </p>
            <p className="text-[#B4B4B8]">
              We quote with the scope itemised so managers and committees can compare like for like,
              and we work to the date that cannot move. See also{" "}
              <Link href="/services/real-estate-painting" className="text-[#D0A050] hover:underline">
                real estate and pre-sale painting
              </Link>{" "}
              and{" "}
              <Link
                href="/services/body-corporate-painting"
                className="text-[#D0A050] hover:underline"
              >
                body corporate painting
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
              Bathroom Resurfacing Service Areas
            </h2>
            <p className="text-[#B4B4B8] mb-4">
              Based in Mordialloc, we resurface bathrooms across Bayside, Kingston, Glen Eira,
              Stonnington, the southeast and the Mornington Peninsula.
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Bathroom &amp; Tile Resurfacing FAQs
            </h2>
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
                href="/services/kitchen-cabinet-resurfacing"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Kitchen Cabinet Resurfacing
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/interior-painting"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Interior Painting
              </Link>
              <span className="text-gray-300">|</span>
              <Link
                href="/services/property-maintenance"
                className="text-[#D0A050] hover:underline font-medium"
              >
                Property Maintenance
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Bathroom Resurfacing Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              A free, no-obligation site visit and a written quote with the preparation and the
              return-to-service date spelled out.
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
        <QuoteForm compact serviceType="Bathroom & Tile Resurfacing" />
      </Suspense>

      <Footer />
    </div>
  );
}
