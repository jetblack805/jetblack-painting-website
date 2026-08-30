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
// After shot. Already in the repo and used in Gallery.tsx — reused rather than
// re-imported as a second copy of the same photo.
import imgEpoxyAfter from "@/assets/images/gallery-commercial-epoxy-floor.webp";
import imgEpoxyAfter900 from "@/assets/images/gallery-commercial-epoxy-floor-900.webp";
// Before shot: the same warehouse in its original condition, ahead of the
// walls, beams and floor being done.
import imgEpoxyBefore from "@/assets/images/gallery-epoxy-warehouse-original.webp";
import imgEpoxyBefore900 from "@/assets/images/gallery-epoxy-warehouse-original-900.webp";
// Mid-job: walls and beams finished, slab bare and ready to coat.
import imgEpoxySlab from "@/assets/images/gallery-epoxy-warehouse-before.webp";
import imgEpoxySlab900 from "@/assets/images/gallery-epoxy-warehouse-before-900.webp";

export default function EpoxyFlooring() {
  const benefits = [
    "Decorative flake, solid colour and clear-sealed concrete finishes",
    "Garages, warehouses, workshops, showrooms and retail floors",
    "Mechanical floor preparation, not a paint-on-top job",
    "Seamless surface with no grout lines or joins to trap dirt",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee",
  ];

  /* First sentence of every answer is the answer, so it survives being quoted
     on its own by an AI assistant or Google's FAQ treatment. Feeds both the
     visible list and the FAQPage schema; mirrored in
     scripts/generate-static-pages.mjs — edit both or the layers drift.

     Deliberately avoids stating cure times, coating thicknesses, product
     brands or slip ratings as fixed numbers. Those vary by product, floor and
     temperature, and quoting one here would turn a page into a promise. */
  const faqs = [
    {
      question: "What is epoxy flake flooring?",
      answer:
        "Epoxy flake flooring is a layered floor coating with decorative vinyl flakes broadcast into it, then sealed under a clear topcoat. The flake does two jobs at once — it gives the floor its speckled, terrazzo-like appearance, and it builds texture into the surface so the finished floor isn't a flat sheet of gloss. It's the finish most people picture when they think of a modern garage or showroom floor.",
    },
    {
      question: "Can you coat an existing concrete slab, or does it need replacing?",
      answer:
        "Most existing slabs can be coated. Age, stains and old paint are usually not the problem people expect — grinding removes the surface layer along with them. What does need assessing first is structural cracking, moisture coming up through the slab, and whether the concrete was previously sealed, because those change the preparation and sometimes the coating system. We check all three before quoting rather than after starting.",
    },
    {
      question: "Why does the floor have to be ground before coating?",
      answer:
        "Grinding is what makes the coating bond to the slab instead of sitting on it. Bare concrete has a smooth, dense surface layer, and any coating rolled straight onto it is relying on grip it doesn't have — which is why cheap garage floor jobs peel up in sheets under a hot tyre. Mechanical preparation opens that surface up so the first coat keys into the concrete itself.",
    },
    {
      question: "Is an epoxy floor slippery when wet?",
      answer:
        "A flake floor has texture built into it from the flake itself, which gives it more grip than a smooth gloss coating. Where a floor needs more than that — a workshop that gets wet, a commercial entry, a ramp — an anti-slip additive can be worked into the topcoat. Tell us how the space actually gets used and we'll match the finish to it.",
    },
    {
      question: "How long before I can walk on it and park on it?",
      answer:
        "Foot traffic and vehicle traffic return at different times, and both depend on the coating system and the temperature while it cures. Vehicle traffic always waits considerably longer than foot traffic, because a tyre puts far more stress on a coating that hasn't fully hardened than a shoe does. We give you the exact timings for your floor and the conditions on the day as part of the quote, rather than a general figure that may not apply.",
    },
    {
      question: "What's the difference between epoxy coating and concrete resurfacing?",
      answer:
        "Coating puts a new wearing surface on top of a sound slab, while resurfacing rebuilds the surface of a slab that's damaged. If the concrete is structurally fine but stained, dusty or tired, a coating is the right answer. If the surface itself is spalling, pitted or has been patched repeatedly, it needs making good before any coating goes on — otherwise the new finish just follows the shape of the damage underneath.",
    },
    {
      question: "Do you do warehouse and commercial floors as well as domestic garages?",
      answer:
        "Yes, both. The difference is mostly scale, access and downtime rather than the finish itself — a warehouse floor has to be staged around the business still operating, and a retail or showroom floor usually has to be done outside trading hours. We work to a schedule agreed up front so you know exactly when the space is out of use.",
    },
    {
      question: "Will the coating hide cracks in my concrete?",
      answer:
        "The coating will hide fine surface cracking, but it will not fix a moving crack. A crack that's still moving will telegraph straight back through a new coating, sometimes within months, so it has to be cut out and filled properly first rather than coated over. We'd rather point that out at the quote than have it reappear through a finished floor.",
    },
  ];

  const suburbs = [
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Braeside", link: "/painter-braeside" },
    { name: "Dingley Village", link: "/painter-dingley-village" },
    { name: "Keysborough", link: "/keysborough-painters" },
    { name: "Moorabbin", link: "/painter-moorabbin" },
    { name: "Cheltenham", link: "/painter-cheltenham" },
    { name: "Dandenong", link: "/painter-dandenong" },
    { name: "Oakleigh", link: "/painter-oakleigh" },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Epoxy Flooring Melbourne | Jetblack Painting"
        description="Epoxy flake flooring, garage floor coatings and concrete resurfacing across Melbourne. Warehouses, workshops and garages. Fully insured. Free quotes."
        canonical="https://jetblackpainting.com/services/epoxy-flooring/"
        schema={serviceSchema({ serviceType: "Epoxy Flooring", name: "Epoxy Flooring Melbourne", description: "Epoxy flake flooring, garage floor coatings and concrete resurfacing across Melbourne. Warehouses, workshops and garages. Fully insured. Free quotes.", canonical: "https://jetblackpainting.com/services/epoxy-flooring/", faqs })}
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
              Epoxy Flooring &amp; Concrete Resurfacing Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Decorative epoxy flake floors, garage floor coatings and concrete resurfacing for warehouses, workshops and homes across Melbourne — ground back properly, then built up in layers.
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

      {/* Before and after of the same warehouse, same viewpoint. The pair is the
          most persuasive thing on this page, so it sits above the copy. Both
          images keep their intrinsic width/height so the browser reserves the
          right aspect ratio before load. */}
      <section className="py-12 bg-[#131316]">
        <div className="container">
          <div className="grid gap-4 md:grid-cols-2">
            <figure className="m-0">
              <img
                src={imgEpoxyBefore}
                srcSet={`${imgEpoxyBefore900} 900w, ${imgEpoxyBefore} 1400w`}
                sizes="(max-width: 768px) 100vw, 576px"
                width={1400}
                height={1050}
                alt="Melbourne warehouse in original condition before Jetblack Painting repainted the walls and beams and laid an epoxy flake floor"
                className="rounded-lg shadow-md w-full h-72 object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm uppercase tracking-[0.2em] text-[#98989D]">
                Before — original condition
              </figcaption>
            </figure>
            <figure className="m-0">
              <img
                src={imgEpoxyAfter}
                srcSet={`${imgEpoxyAfter900} 900w, ${imgEpoxyAfter} 1120w`}
                sizes="(max-width: 768px) 100vw, 576px"
                width={1120}
                height={1400}
                alt="Grey and black decorative epoxy flake floor finished by Jetblack Painting in the same Melbourne warehouse"
                className="rounded-lg shadow-md w-full h-72 object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm uppercase tracking-[0.2em] text-[#D0A050]">
                After — walls, beams and epoxy flake floor
              </figcaption>
            </figure>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Melbourne Epoxy Floor Specialists</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting coats and resurfaces concrete floors across Melbourne — decorative flake finishes, solid colour coatings and clear-sealed concrete, in everything from single domestic garages to full warehouse floors. It's the same trade discipline as the rest of our work: the finish people see is the last few hours of the job, and the preparation underneath it is the part that decides how long it lasts.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Epoxy Flooring Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <MidPageCTA heading="Get your free epoxy flooring quote today" />

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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Preparation Is the Whole Job</h2>
            <figure className="m-0 mb-6">
              <img
                src={imgEpoxySlab}
                srcSet={`${imgEpoxySlab900} 900w, ${imgEpoxySlab} 1400w`}
                sizes="(max-width: 1024px) 100vw, 896px"
                width={1400}
                height={1050}
                alt="Warehouse slab with walls and beams repainted, concrete bare and ready for the epoxy coating"
                className="rounded-lg shadow-md w-full h-64 object-cover"
                loading="lazy"
              />
              <figcaption className="mt-2 text-sm text-[#98989D]">
                The same warehouse mid-job: walls and beams finished, slab bare and ready to coat.
              </figcaption>
            </figure>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Almost every failed garage floor you've seen — the coating lifting in sheets, peeling away where the tyres sit — failed for the same reason. It was rolled onto smooth concrete that was never opened up first. Bare slabs have a dense, closed surface layer, and a coating applied straight onto it is holding on by very little. Heat, moisture and a turning tyre are enough to break that bond.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Mechanical preparation solves it by removing that layer entirely, along with old paint, sealers, glue residue and surface staining, and leaving a profile the first coat can key into. This is also the stage that exposes what the floor is actually like underneath. Cracks that were hidden under dirt, patches of previous repair, soft or crumbling areas and old oil that has soaked into the slab all surface here, and all of them need dealing with before a coating goes anywhere near the floor.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Moisture is the one that catches people out. Concrete sitting on ground without an effective vapour barrier can push moisture up through the slab, and that pressure will lift a coating from below no matter how well the surface was prepared. It's checked before quoting, because it changes which system is appropriate — and occasionally it's the reason we say a floor isn't a good candidate at all, which is better said before the job than discovered after it.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Flake, Solid Colour and Sealed Concrete</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A decorative flake floor is built in layers. A base coat goes down, vinyl flakes are broadcast into it while it's still wet, and once cured the excess is scraped back and the floor is sealed under a clear topcoat. The flake is doing more than decoration — it hides the everyday marking that shows up mercilessly on a plain floor, and it builds texture into the surface so the result isn't a sheet of gloss. Flake blends run from subtle grey-on-grey through to high-contrast black and white, which is the finish in the photo above.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Solid colour coatings suit spaces where the floor should read as one clean surface rather than a decorative feature — plant rooms, storage areas, back-of-house commercial spaces, and line-marked areas where the marking needs to stand out against a plain background. They're also the easier finish to touch in locally later, which matters in a working space that takes knocks.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Clear-sealed concrete is the lightest-touch option: the slab is ground, any repairs made good, and a clear sealer applied so the concrete itself stays visible. It suits polished-look interiors and spaces where the raw concrete is genuinely part of the design, and it's the option that shows the slab's own history most honestly — which is either exactly what you want or exactly what you don't, depending on the floor.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Garages, Warehouses and Commercial Floors</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              A domestic garage is usually the most straightforward version of this work, and the one where the visual difference is starkest — a stained, dusty slab becomes a floor that reads as a finished room rather than a leftover space. Concrete dust is the underrated part: an uncoated slab sheds fine dust continuously onto everything stored on it, and sealing the surface stops that at the source.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Warehouse and workshop floors are a different problem, and it's rarely the coating itself. It's staging. The floor has to come out of service in sections that let the business keep operating, stock and racking have to be moved and moved back, and each section needs its cure time protected from foot and vehicle traffic before the next one starts. That planning is the part worth getting right at the quote, because a schedule that ignores it costs the business more than the floor does.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Retail and showroom floors add appearance to the same equation. The finish is on display rather than just underfoot, joins between sections need to fall where they won't be noticed, and the work usually has to happen outside trading hours. We agree the staging and the access arrangements in writing before starting, so nobody discovers on the morning that the shop can't open.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Epoxy Flooring Service Areas</h2>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Epoxy Flooring FAQs</h2>
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
              <Link href="/services/kitchen-cabinet-resurfacing" className="text-[#D0A050] hover:underline font-medium">Kitchen Cabinet Resurfacing</Link>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Epoxy Flooring Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your garage, warehouse or commercial floor.
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
        <QuoteForm compact serviceType="Epoxy Flooring" />
      </Suspense>

      <Footer />
    </div>
  );
}
