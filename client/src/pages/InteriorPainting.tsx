import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgHallway from "@/assets/images/service-interior-painting.webp";
import imgOpenPlanLiving from "@/assets/images/gallery-interior-open-plan-living.webp";
import imgKitchenTimber from "@/assets/images/gallery-interior-kitchen-timber.webp";
import imgLounge from "@/assets/images/gallery-interior-lounge.webp";
import imgStaircase from "@/assets/images/gallery-interior-staircase.webp";
import imgStagedLiving from "@/assets/images/gallery-interior-staged-living.webp";
import imgOpenLiving from "@/assets/images/gallery-interior-open-living.webp";
import imgBoucleLiving from "@/assets/images/gallery-interior-boucle-living.webp";

export default function InteriorPainting() {
  const benefits = [
    "Professional surface preparation and priming",
    "Premium quality Dulux and Taubmans paint products",
    "Expert colour consultation included",
    "Minimal disruption to your home",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  const suburbs = [
    { name: "McKinnon", link: "/painter-mckinnon" },
    { name: "Highett", link: "/painter-highett" },
    { name: "Murrumbeena", link: "/painter-murrumbeena" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Hampton", link: "/painter-hampton" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
  ];

  // Kept in step with the interior entry in scripts/generate-static-pages.mjs —
  // the FAQPage schema has to match the questions visible on the page, and the
  // crawler layer and rendered layer must describe the same page.
  const faqs = [
    {
      question: "How long does interior painting take?",
      answer: "Most interior painting projects take a few days to a week depending on the size of the home, access, and the preparation required. A single room is usually a day or two; a full home repaint is staged across a working week or more."
    },
    {
      question: "Do I need to move out during interior painting?",
      answer: "No. We stage the work room by room, use low-odour premium paints, and keep living areas usable throughout the project. Most households stay in the home for the full job."
    },
    {
      question: "Which paint brands do you use for interiors?",
      answer: "We use premium Australian brands including Dulux and Taubmans, matched to each surface and traffic level — washable low-sheen for living areas, durable enamels for trims and doors."
    },
    {
      question: "How much does interior painting cost in Melbourne?",
      answer: "It depends on the number of rooms, the condition of the walls and ceilings, whether you're changing colour significantly, and the finish level you choose. Those factors move the price more than room size alone, so we quote after a site visit rather than a rate sight-unseen. Quotes are free — call 0432 077 782."
    },
    {
      question: "Do you paint ceilings as well as walls?",
      answer: "Yes. Ceiling painting is included where specified — flat or low-sheen finishes are standard, and we address any cracking, water staining or previous patch repairs as part of the preparation."
    },
    {
      question: "Can you match or change to a completely different colour?",
      answer: "Yes. Significant colour changes — especially dark to light — sometimes need a tinted primer or an extra coat for even coverage. We account for this in the quote so there are no surprises once the job starts."
    },
    {
      question: "Do you paint rental properties between tenants?",
      answer: "Yes. We regularly repaint rental properties for landlords and property managers between tenancies, working to a fixed turnaround with durable, easy-clean finishes in neutral colours that suit the widest range of tenants."
    },
    {
      question: "Can you help if I don't know what colours to choose?",
      answer: "Yes. Colour consultation is included with every quote — we look at the room's natural light, existing furniture and finishes, and talk through options rather than leaving you to guess from a paint chart."
    }
  ];

  const projectSteps = [
    {
      title: "Quote and colour consultation",
      body: "We walk through the home with you, note the condition of every wall and ceiling, and talk through colours, sheens and any feature walls. The written quote itemises rooms, surfaces, prep and the specific products, so there's no guessing later.",
    },
    {
      title: "Furniture protection and setup",
      body: "Furniture is moved to the centre of the room or covered in place, floors and fixtures are protected with drop sheets, and the work area is sealed off from the rest of the house to control dust.",
    },
    {
      title: "Patching, sanding and priming",
      body: "Nail holes, cracks, water stains and old repairs are filled and sanded back smooth. Bare plaster, water-stained patches and any repaired sections are spot-primed so they don't flash through the topcoats.",
    },
    {
      title: "Edges, trims and doors — sprayed or cut in by hand",
      body: "How the detail work goes on depends on the room. Where a space can be properly masked and sealed off — empty rooms, and doors, trims and built-in joinery in particular — we spray, which lays the finish down dead flat with no brush marks and no roller texture on surfaces where every stroke would otherwise show. Where spraying isn't practical, because you're living in the room or an adjacent finish can't be masked cleanly, edges, corners and cornices are cut in by hand before the broad areas are rolled. Either way this is the step that separates a sharp finish from a messy one, and it's where an experienced painter earns their keep.",
    },
    {
      title: "Topcoats",
      body: "Two full coats go on to the specified sheen — low-sheen or matt for most walls, semi-gloss or gloss enamel for trims and doors — with proper drying time between coats rather than rushing to finish early.",
    },
    {
      title: "Walkthrough and handover",
      body: "We walk the finished rooms with you, touch up anything that needs it, remove all protection and clean up thoroughly. The 5-year written workmanship guarantee applies from this point.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Interior Painting Melbourne | Jetblack Painting"
        description="Professional interior painting in Melbourne. Premium Dulux paints, expert colour advice, 5-star rated. All Melbourne suburbs. Free quotes."
        canonical="https://jetblackpainting.com/services/interior-painting/"
      schema={serviceSchema({ serviceType: "Interior Painting", name: "Interior Painting Melbourne", description: "Professional interior painting services in Melbourne. Premium Dulux paints, expert colour consultation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.", canonical: "https://jetblackpainting.com/services/interior-painting/", faqs })}
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
              Professional Interior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your home with expert interior painting services. From feature walls to complete room makeovers, Jetblack Painting delivers flawless finishes with premium Dulux and Taubmans paints.
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
            src={imgHallway}
            width={1050}
            height={1400}
            alt="Elegant painted hallway with ornate cornices and parquet flooring by Jetblack Painting"
            className="rounded-lg shadow-md w-full max-h-[520px] object-cover"
            loading="lazy"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-4">
            <img
              src={imgOpenPlanLiving}
              width={823}
              height={561}
              alt="Open plan living room and kitchen interior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgKitchenTimber}
              width={823}
              height={561}
              alt="Modern kitchen with timber panelling painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgLounge}
              width={823}
              height={561}
              alt="Freshly painted lounge room by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgStaircase}
              width={1050}
              height={1400}
              alt="Staircase balustrade and walls painted white by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
            <img
              src={imgStagedLiving}
              width={1206}
              height={804}
              alt="Freshly painted staged living room by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgOpenLiving}
              width={1170}
              height={782}
              alt="Bright open living room interior painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-56 object-cover"
              loading="lazy"
            />
            <img
              src={imgBoucleLiving}
              width={1050}
              height={1400}
              alt="Styled living and dining room interior painted by Jetblack Painting"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">
              Melbourne's Trusted Interior Painting Specialists
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting delivers premium interior painting services across Melbourne. With 13+ years of experience and a 5-star Google rating, we transform homes with expert craftsmanship and premium materials. Our professional team handles everything from single rooms to complete home repaints.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              We specialise in residential interior painting including living rooms, bedrooms, kitchens, bathrooms, hallways, and ceilings. Every project includes thorough surface preparation, premium primers, and top-quality topcoats for a flawless, long-lasting finish.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Interior Painting Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <MidPageCTA heading="Get your free Interior Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Interior Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide professional interior painting services across all Melbourne suburbs including:</p>
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

          {/* How a project runs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">How an Interior Painting Project Runs</h2>
            <div className="space-y-6">
              {projectSteps.map((step, i) => (
                <div key={i} className="border-b border-[#222227] pb-4">
                  <h3 className="text-lg font-bold text-[#EDEDEF] mb-2">{step.title}</h3>
                  <p className="text-[#B4B4B8]">{step.body}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cost drivers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What Drives the Cost of Interior Painting</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Room count and size are the obvious factors, but wall and ceiling condition usually matters more. A recently painted, sound surface is quick to prepare; a home with cracked cornices, water stains, old wallpaper or years of nail holes and patch repairs needs significant preparation before a topcoat goes anywhere near it — and that preparation is what makes the difference between a repaint that looks factory-fresh and one that shows every flaw underneath.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Colour change matters more than most homeowners expect. Going from a dark feature wall to a light colour, or covering a strong existing colour, often needs an extra coat or a tinted primer to get even coverage — that's more product and more labour than repainting a similar colour over itself.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Ceiling height and access change the job too: standard 2.4m ceilings are straightforward, while raked ceilings, stairwells and double-height living areas need scaffolding or specialised access equipment. Paint quality and finish level are the fourth factor — a washable low-sheen in a high-traffic hallway costs more to supply than a basic flat finish, and two-pack enamel on kitchen cabinetry or trims costs more again, but both last considerably longer.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              We quote after seeing the property rather than publishing a rate per square metre, because none of this shows up in a number quoted sight-unseen. The site visit and written quote are free — call Jimmy on 0432 077 782.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Interior Painting FAQs</h2>
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
              <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline font-medium">Exterior Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline font-medium">Commercial Painting</Link>
              <span className="text-gray-300">|</span>
              <Link href="/services/roof-painting" className="text-[#D0A050] hover:underline font-medium">Roof Painting</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Interior Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your interior painting project.
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
