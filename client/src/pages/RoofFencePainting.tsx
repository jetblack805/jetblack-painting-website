import { motion } from "framer-motion";
import { CheckCircle, Phone, Shield, Zap } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
// service-roof-fence-painting.webp was a byte-identical copy of this file under a
// second name, so the same photo shipped twice. Points at the canonical one.
// No -900 variant: the source is only 640x480, so a "900" file would be the same
// pixels under a misleading name.
import imgRoof from "@/assets/images/gallery-roof-charcoal-tiles.webp";
import imgFenceBefore from "@/assets/images/gallery-fence-picket-before.webp";
import imgFenceBefore900 from "@/assets/images/gallery-fence-picket-before-900.webp";
import imgFenceAfter from "@/assets/images/gallery-fence-picket-after.webp";
import imgFenceAfter900 from "@/assets/images/gallery-fence-picket-after-900.webp";
import imgFenceBlackDeck from "@/assets/images/gallery-fence-black-deck.webp";
import imgFenceBlackDeck900 from "@/assets/images/gallery-fence-black-deck-900.webp";
import imgFenceMerbau from "@/assets/images/gallery-fence-merbau-oiled.webp";
import imgFenceMerbau900 from "@/assets/images/gallery-fence-merbau-oiled-900.webp";

export default function RoofFencePainting() {
  const benefits = [
    "Extends roof life by 10-15 years with protective coating",
    "Professional surface preparation and priming",
    "Premium weather-resistant Dulux and Taubmans paints",
    "Handles all roof types: metal, tile, concrete, asphalt",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  const suburbs = [
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Aspendale", link: "/painter-aspendale" },
    { name: "Highett", link: "/painter-highett" },
    { name: "Dromana", link: "/painter-dromana" },
    { name: "Patterson Lakes", link: "/painter-patterson-lakes" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Hampton", link: "/painter-hampton" },
  ];

  /* First sentence of every answer is the answer. These are what get lifted
     into AI assistant replies and Google's FAQ treatment, and a hedged opening
     gets the whole entry skipped. Drives both the visible list and the FAQPage
     schema; mirrored in scripts/generate-static-pages.mjs. */
  const faqs = [
    {
      question: "Can you do the roof and fences in one project?",
      answer: "Yes, and it's usually the cheaper way to do it. The access equipment, the site setup and the weather window are shared across both, so quoting them together costs less than booking two separate jobs — and the exterior reads as one finished thing from the street rather than a new roof above a tired fence."
    },
    {
      question: "Should timber be painted, stained or oiled?",
      answer: "It depends on the timber and how much upkeep you want. Paint gives the longest protection and full colour control, but once timber is painted it stays painted — stripping it back later is a big job. Stain lets the grain show and weathers back gradually rather than peeling. Hardwoods like merbau are usually oiled instead, because paint struggles to hold on their dense, oily surface."
    },
    {
      question: "Can Colorbond fences and roofs be painted?",
      answer: "Yes. Colorbond and Zincalume take a new colour well, but they need different preparation from timber — a thorough wash to remove chalked factory coating, a scuff to give the surface a key, and a primer made for metal. Skipping any of that is why repainted Colorbond sometimes peels in sheets a year later."
    },
    {
      question: "Does my fence need repairs before painting?",
      answer: "Often, yes. Loose or rotted palings, popped nails and posts that have shifted all get dealt with before any coating goes on — paint doesn't hold a failing fence together. The bottom of a timber fence fails first because ground moisture wicks up into the end grain, so that's the first place we check at the quote."
    },
    {
      question: "Do you paint both sides of the fence?",
      answer: "Where we can get access, yes — and it's worth doing, because a fence coated on one side only weathers unevenly and can cup. A boundary fence needs your neighbour's agreement for us to work on their side, so it's worth asking them before the quote rather than after we're booked in."
    },
    {
      question: "How long does fence painting last?",
      answer: "With proper preparation and exterior-grade products, fence coatings typically last 5–10 years depending on exposure. A north or west-facing fence takes far more UV than a shaded one and will always be first to need attention."
    },
    {
      question: "When does a roof need repairs rather than painting?",
      answer: "When the problem is structural rather than cosmetic. Cracked or slipped tiles, failed ridge capping, rusted-through sheeting and blocked valleys all need fixing before a coating goes near them — paint over a leak and you've sealed the problem in. We assess this at the quote and tell you plainly if the roof needs repair work first."
    },
    {
      question: "What does roof painting actually protect against?",
      answer: "UV, moisture absorption and moss regrowth. Concrete tiles are porous and soak up water as they age, which makes them heavier and slower to dry; a sealed, coated roof sheds water instead. On metal roofs the coating protects the fixings and cut edges where rust starts. Done properly it extends roof life by 10–15 years."
    }
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Roof & Fence Painting Melbourne | Jetblack Painting"
        description="Roof and fence painting in Melbourne. Extends roof life 10-15 years with weather-resistant coatings. Free quotes — call 0432 077 782."
        canonical="https://jetblackpainting.com/services/roof-fence-painting/"
      schema={serviceSchema({ serviceType: "Roof & Fence Painting", name: "Roof & Fence Painting Melbourne", description: "Professional roof painting and fence painting Melbourne. Extends roof life 10-15 years, weather-resistant coatings, 5-star rated. Free quotes - Call 0432 077 782.", canonical: "https://jetblackpainting.com/services/roof-fence-painting/", faqs })}
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
              Roof & Fence Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional roof restoration and fence painting services. Extend your roof's life by 10-15 years with protective coatings and complete property transformation.
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
            src={imgRoof}
            width={640}
            height={480}
            alt="Charcoal tiled roof resprayed by Jetblack Painting in Melbourne"
            className="rounded-lg shadow-md w-full max-h-[420px] object-cover"
            loading="lazy"
            decoding="async"
          />

          {/* Both frames are the same fence on the same job — the masked-off
              rectangle in the "before" is the letterbox that reads 27 in the
              "after". Labelled explicitly, because an unlabelled pair of fence
              photos just looks like two fences. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <figure className="relative m-0">
              <img
                src={imgFenceBefore}
                srcSet={`${imgFenceBefore900} 900w, ${imgFenceBefore} 1200w`}
                sizes="(max-width: 640px) 100vw, 50vw"
                width={1200}
                height={900}
                alt="Bare timber picket fence masked up and prepared before painting by Jetblack Painting"
                className="rounded-lg shadow-md w-full h-72 sm:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute top-3 left-3 rounded bg-black/70 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.3em] text-[#D0A050]">
                Before
              </figcaption>
            </figure>
            <figure className="relative m-0">
              <img
                src={imgFenceAfter}
                srcSet={`${imgFenceAfter900} 675w, ${imgFenceAfter} 1125w`}
                sizes="(max-width: 640px) 100vw, 50vw"
                width={1125}
                height={1500}
                alt="The same picket fence finished in white by Jetblack Painting"
                className="rounded-lg shadow-md w-full h-72 sm:h-96 object-cover"
                loading="lazy"
                decoding="async"
              />
              <figcaption className="absolute top-3 left-3 rounded bg-black/70 px-3 py-1.5 text-[9.5px] font-semibold uppercase tracking-[0.3em] text-[#D0A050]">
                After
              </figcaption>
            </figure>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <img
              src={imgFenceBlackDeck}
              srcSet={`${imgFenceBlackDeck900} 900w, ${imgFenceBlackDeck} 1206w`}
              sizes="(max-width: 640px) 100vw, 50vw"
              width={1206}
              height={1056}
              alt="Paling fence painted charcoal black beside a freshly oiled timber deck"
              className="rounded-lg shadow-md w-full h-72 sm:h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={imgFenceMerbau}
              srcSet={`${imgFenceMerbau900} 900w, ${imgFenceMerbau} 1206w`}
              sizes="(max-width: 640px) 100vw, 50vw"
              width={1206}
              height={505}
              alt="Merbau front fence finished with oil, bringing out the grain in the timber"
              className="rounded-lg shadow-md w-full h-72 sm:h-96 object-cover"
              loading="lazy"
              decoding="async"
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
              Complete Roof & Fence Restoration Services
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting provides professional roof painting and fence restoration services across Melbourne. Our specialised team handles all roof types and fence materials, delivering protective coatings that extend the life of your property's exterior features while enhancing curb appeal.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Roof painting is an investment in your home's longevity. Our premium coatings protect against UV damage, moisture penetration, and weather degradation, extending your roof's life by 10-15 years. Combined with professional fence painting, your property receives complete exterior protection and aesthetic enhancement.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <div className="bg-[#0C0C0E] p-6 rounded-lg">
              <Shield className="w-12 h-12 text-[#E9BE6C] mb-3" />
              <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">10-15</h3>
              <p className="text-[#B4B4B8]">Years of roof life extension</p>
            </div>
            <div className="bg-[#0C0C0E] p-6 rounded-lg">
              <Zap className="w-12 h-12 text-[#E9BE6C] mb-3" />
              <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">All Types</h3>
              <p className="text-[#B4B4B8]">Metal, tile, concrete, asphalt</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Roof & Fence Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Roof Painting Section */}
          <MidPageCTA heading="Get your free Roof & Fence Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDEDEF] mb-4">Professional Roof Painting</h2>
            <p className="text-[#B4B4B8] mb-4">
              Our roof painting service includes thorough surface cleaning, rust removal, priming, and application of premium protective coatings. We work safely at heights and handle all roof types including:
            </p>
            <ul className="space-y-2 text-[#B4B4B8]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Metal roofing (Colorbond, Zincalume)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Ceramic and concrete tiles
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Asphalt and slate roofs
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Flat roofs and membranes
              </li>
            </ul>
          </motion.div>

          {/* Fence Painting Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDEDEF] mb-4">Professional Fence Painting & Staining</h2>
            <p className="text-[#B4B4B8] mb-4">
              We provide complete fence painting and staining services for all fence types. Our process includes surface preparation, priming, and application of durable finishes that protect against weathering and UV damage:
            </p>
            <ul className="space-y-2 text-[#B4B4B8]">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Timber fence painting and staining
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Colorbond and metal fence painting
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Composite fence finishing
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D0A050]" />
                Deck and outdoor timber staining
              </li>
            </ul>
          </motion.div>

          {/* Pillar-depth sections. Every paragraph is duplicated verbatim into
              the `extraSections` for this route in
              scripts/generate-static-pages.mjs — crawlers that don't run JS read
              that copy, so both must be edited together or the layers drift. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Timber and Colorbond Are Different Jobs</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A timber paling fence and a Colorbond fence look like the same job from the driveway and behave nothing alike once you start. Timber moves. It swells in winter, shrinks in summer, greys off under UV and eventually cups if only one face is sealed. That movement is what breaks a coating, which is why preparation on timber is mostly about giving the surface something stable to hold onto before anything is applied.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Colorbond doesn't fail that way. The factory finish is durable and long-lived, and when it finally goes it chalks — the surface turns dusty and the colour flattens rather than flaking. That chalk is the whole problem: paint applied straight over it sticks to loose powder instead of steel, and peels off in sheets within a year. Colorbond needs a proper wash to strip the chalk back, a scuff to key the surface, and a primer formulated for metal. Done that way it holds colour for years and lets you change a dated green or cream fence to something current without replacing a single panel.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Hardwoods sit in a third category. Merbau, spotted gum and similar dense timbers are naturally oily, and paint struggles to bond to them at all. They're better oiled — the finish soaks in rather than sitting on top, keeps the grain visible, and weathers back gradually instead of peeling. It needs recoating more often than paint does, but it never reaches the point of having to be stripped.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What Preparation Actually Involves</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Fences collect everything the weather throws at them, plus what grows on them. Mould, lichen and algae on the shaded southern side all have to come off, and washing alone doesn't kill the spores — left underneath a fresh coat they keep growing and push it away from the timber. Dirt, cobwebs and old flaking coating come off in the same pass.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Then the repairs. Loose palings get refixed, popped nails punched and filled, and anything rotted through gets replaced before a brush is opened — a coating doesn't hold a failing fence together, it just hides the failure for a season. The bottom of a timber fence is always the first thing we look at, because ground moisture wicks straight up into the exposed end grain of each paling and rots it from underneath while the top three-quarters still looks fine.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Access is the last thing to sort out, and it's the one that catches people. A boundary fence has two sides and one of them belongs to next door. Coating only your side leaves the other face raw, which weathers unevenly and encourages the palings to cup toward the wet side. It's worth asking your neighbour before the quote rather than discovering on the day that half the fence is off limits.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Roof Coatings Depend on What the Roof Is Made Of</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Concrete tiles are porous. As the original surface treatment wears away they start absorbing water, which makes them heavier, slower to dry and a comfortable home for moss. Restoring them means cleaning the growth off, replacing anything cracked or slipped, repointing the ridge capping where the mortar has failed, then sealing the tile before the colour coats go on. Skip the sealer and the tile drinks the topcoat straight in.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Metal roofs fail somewhere else entirely. Colorbond and Zincalume sheeting is stable across its face and vulnerable at the edges — around fixings, at cut ends, in valleys where water sits and leaves collect. Rust gets treated at those points specifically before an etch primer and topcoats go on, because a beautifully coated sheet with untreated rust under a screw head will bloom through within a year.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              The judgement that matters most is whether a roof should be coated at all. Cracked or slipped tiles, failed capping, rusted-through sheeting and blocked valleys are repairs, not paint problems — coat over a leak and you've sealed the fault in where nobody can see it. We assess that at the quote and say plainly if repair work needs to happen first. Where the roof is sound, a proper coating system extends its life by 10–15 years and stops the slow moisture damage that ages a roof faster than sun ever does.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why We Quote Roof and Fence Together</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              These two get bundled for practical reasons, not as an upsell. Both need the same run of dry weather, both need the site set up once, and roof work needs height access that is already paid for whether the fence is done in the same visit or three months later. Splitting them means paying to mobilise twice.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              There's a presentation argument too. A restored roof above a grey, splitting fence draws the eye straight to the fence — the improvement makes the untouched part look worse than it did before. Done together, with colours chosen to work against each other rather than in isolation, the whole exterior lifts at once. That matters most before a sale or a rental listing, where the first impression is a photograph taken from the kerb.
            </p>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#131316] p-8 rounded-lg border border-[#222227]"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Roof & Fence Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide professional roof and fence painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Roof & Fence Painting FAQs</h2>
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
              <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline font-medium">Interior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#D0A050] hover:underline font-medium">Roof Painting</Link>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get Your Roof & Fence Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your roof and fence painting project.
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
      <Footer />
    </div>
  );
}
