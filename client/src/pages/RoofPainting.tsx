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
import imgService from "@/assets/images/gallery-roof-charcoal-tiles.webp";
import imgMetalRoof from "@/assets/images/gallery-roof-metal-colorbond.webp";
import imgRoofCleaning from "@/assets/images/gallery-roof-cleaning.webp";
import imgRoofCleaning900 from "@/assets/images/gallery-roof-cleaning-900.webp";
import imgVictorianRoof from "@/assets/images/gallery-roof-victorian-restoration.webp";
import imgVictorianRoof900 from "@/assets/images/gallery-roof-victorian-restoration-900.webp";

export default function RoofPainting() {
  const benefits = [
    "Extends roof life by 10-15 years",
    "All roof types: tile, metal, Colorbond",
    "Professional pressure cleaning included",
    "Premium roof coatings and sealants",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  /* First sentence of every answer is the answer, so it survives being quoted
     on its own by an AI assistant or Google's FAQ treatment. Feeds both the
     visible list and the FAQPage schema; mirrored in
     scripts/generate-static-pages.mjs — edit both or the layers drift. */
  const faqs = [
    {
      question: "How long does a professional roof painting last?",
      answer: "A properly prepared and coated roof typically lasts 10 to 15 years before it needs redoing. The key is preparation — cleaning, rust treatment, repairs and the right primer — followed by quality membrane or roof coatings applied at the correct thickness. We include all of that in every roof painting quote.",
    },
    {
      question: "What roof types can you paint?",
      answer: "We paint and restore all common Melbourne roof types, including Colorbond and Zincalume metal roofing, concrete and terracotta tiles, and cement sheet. Each surface needs a specific preparation and coating system, and we match the right one to your roof so the finish bonds properly and lasts.",
    },
    {
      question: "Can roof painting help keep my home cooler?",
      answer: "Yes. Lighter colours and modern heat-reflective roof coatings can reduce how much heat your roof absorbs, helping keep the home more comfortable in Melbourne summers and easing the load on cooling. We're happy to recommend suitable heat-reflective options during your quote.",
    },
    {
      question: "Do you repair a roof or just paint over problems?",
      answer: "We assess and repair first. Cracked or slipped tiles, failed ridge capping, rusted-through sheeting and blocked valleys are structural problems, not paint problems, and coating over them just seals the fault in where you can't see it happening. If a roof needs repair work, we say so at the quote rather than after the job has started.",
    },
    {
      question: "How is a tile roof different from a metal roof to paint?",
      answer: "Tile is porous and metal isn't, so they fail differently and need different systems. Tiles absorb water as their surface wears, which is why they need a sealer under the topcoat; metal roofing is stable across its face and vulnerable specifically at fixings, cut edges and valleys, which is why rust treatment is targeted at those points rather than the whole sheet."
    },
    {
      question: "What does the roof cleaning and preparation actually involve?",
      answer: "High-pressure cleaning removes moss, lichen and built-up grime first, because a coating applied over any of that peels within a season. On tile roofs this often reveals cracked or slipped tiles and failed ridge capping that need fixing before anything else happens. On metal roofs it's followed by a rust check at every fixing point, cut edge and valley, since that's where corrosion actually starts."
    },
    {
      question: "How does a roof membrane coating work?",
      answer: "A roof membrane is a flexible, waterproof coating rather than a standard paint film — it moves with the roof through Melbourne's temperature swings instead of cracking, and it bridges small surface imperfections that a thin topcoat would just sit on top of. It's applied in multiple coats at a specified thickness, which is what actually determines how many years it lasts, not just how many coats go on."
    },
  ];

  const suburbs = [
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Dromana", link: "/painter-dromana" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Aspendale", link: "/painter-aspendale" },
    { name: "Highett", link: "/painter-highett" },
    { name: "Sorrento", link: "/painter-sorrento" },
    { name: "Patterson Lakes", link: "/painter-patterson-lakes" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Roof Painting Melbourne | Jetblack Painting"
        description="Professional roof painting and restoration in Melbourne. Extends roof life 10-15 years. All roof types serviced. 5-star rated, fully insured. Free quotes."
        canonical="https://jetblackpainting.com/services/roof-painting/"
      schema={serviceSchema({ serviceType: "Roof Painting", name: "Roof Painting Melbourne", description: "Professional roof painting and restoration in Melbourne. Extends roof life 10-15 years. All roof types serviced. 5-star rated, fully insured. Free quotes.", canonical: "https://jetblackpainting.com/services/roof-painting/", faqs })}
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
              Roof Painting & Restoration Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional roof painting that extends your roof's life by 10-15 years. All roof types serviced including tile, metal, and Colorbond.
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
            width={640}
            height={480}
            alt="Charcoal grey tiled roof freshly painted by Jetblack Painting"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgMetalRoof}
              width={1050}
              height={1400}
              alt="Colorbond metal roof painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgRoofCleaning}
              srcSet={`${imgRoofCleaning900} 900w, ${imgRoofCleaning} 1123w`}
              sizes="(max-width: 1024px) 100vw, 1152px"
              width={1123}
              height={1400}
              alt="High-pressure roof cleaning and preparation by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgVictorianRoof}
              srcSet={`${imgVictorianRoof900} 900w, ${imgVictorianRoof} 1050w`}
              sizes="(max-width: 1024px) 100vw, 1152px"
              width={1050}
              height={1400}
              alt="Roof restoration in progress on a weatherboard home, with a Jetblack Painting painter working from the ridge"
              className="rounded-lg shadow-md w-full h-56 object-cover"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Melbourne's Roof Painting Specialists</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting provides professional roof painting and restoration services across Melbourne. A quality roof paint job not only transforms the look of your home but also protects against UV damage, moisture, and extends the life of your roof by 10-15 years.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Roof Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <MidPageCTA heading="Get your free Roof Painting quote today" />

          {/* Pillar-depth sections. Every paragraph is duplicated verbatim into
              the `extraSections` for this route in
              scripts/generate-static-pages.mjs — crawlers that don't run JS read
              that copy, so both must be edited together or the layers drift.
              Deliberately written at a more technical, process-level depth than
              the equivalent roof passage on roof-fence-painting, which stays a
              summary — measured similarity between the two pages is 3%. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Tile, Metal and Cement Sheet Need Different Systems</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Concrete and terracotta tile is porous. As the original surface treatment wears off, the tile itself starts absorbing water — that's why an unsealed roof gets heavier, dries slower after rain, and grows moss faster with every year that passes. Restoring a tile roof means dealing with that porosity directly: a penetrating sealer goes on before the colour coats, so the topcoat sits on a stable surface instead of soaking straight into bare tile.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Colorbond and Zincalume behave the opposite way — the sheet itself is stable, and failure starts at specific points: screw fixings, cut edges, and valleys where water and leaf litter sit longest. That's where rust treatment is targeted, followed by an etch primer made for galvanised steel before the topcoats go on. A metal roof coated without that step looks fine for a year, then bleeds rust through the new paint at every screw head.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Cement sheet is a third case again — fibre-cement roofing common on older extensions and outbuildings, which chalks and becomes porous with age similarly to tile, but is more prone to hairline cracking and needs a flexible, crack-bridging primer rather than a rigid one that will telegraph every existing crack straight through the new coating.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What Roof Cleaning and Repair Actually Involves</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Every job starts with high-pressure cleaning, and it matters more than people expect — moss, lichen and years of built-up grime sit between the coating and the roof surface, and a coating applied over any of that peels away within a season, taking the moss and the paint with it. Cleaning also does the job of revealing what's actually wrong with the roof, which brush-applying paint over a dirty surface would otherwise hide.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              On tile roofs, cleaning usually turns up cracked or slipped tiles and ridge capping where the mortar bedding has failed — both get fixed before priming starts, because a coating is not a structural repair and won't stop a slipped tile from leaking. On metal roofs, cleaning is followed by a fixing-by-fixing rust check: every screw, cut edge and valley gets inspected individually rather than assessed as one surface, because that is genuinely where a metal roof fails first.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              This is also the stage where we make the call on whether painting is the right job at all. Extensively cracked tiles, failed capping across large sections, or sheeting rusted through rather than just surface-affected are repair problems, not paint problems — coating over them seals the fault in where it can no longer be seen, which is worse than leaving it exposed. We say so at the quote stage, before any work is booked.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Membrane Coatings and Heat-Reflective Systems</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A roof membrane is a different product from a standard exterior paint, not just a heavier-duty version of one. It's a flexible, waterproof coating that moves with the roof as Melbourne's temperature swings expand and contract the surface underneath, rather than cracking the way a rigid film would. It also bridges small surface imperfections — hairline cracks, fine pitting — that a thin topcoat would simply sit on top of and eventually crack along.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              What actually determines how long a membrane system lasts is the applied thickness, not the number of coats on its own — two thin coats and three thin coats can both fall short of the specification a genuine 10 to 15 year result needs. We apply to the coating manufacturer's specified thickness rather than a fixed number of passes, which is the difference between a roof coating that's still performing at year twelve and one that's chalking out by year six.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Heat-reflective coatings work by reflecting more solar radiation than a standard dark roof colour absorbs, which measurably reduces how much heat transfers into the roof cavity below. Lighter colours and purpose-made reflective coatings are worth considering on any north or west-facing roof, and particularly on a roof that's already due for restoration — the reflective benefit comes at no extra preparation cost since the roof needs cleaning and coating either way.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Roof Painting Service Areas</h2>
            <div className="flex flex-wrap gap-3">
              {suburbs.map((s) => (
                <Link
                  key={s.name}
                  href={s.link}
                  className="bg-[#131316] px-4 py-2 rounded-lg border border-[#222227] text-[#EDEDEF] hover:border-[#E9BE6C] hover:text-[#E9BE6C] transition-all font-medium"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Roof Painting FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Roof Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your roof painting project.
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
        <QuoteForm compact serviceType="Roof Painting" />
      </Suspense>

      <Footer />
    </div>
  );
}
