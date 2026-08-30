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
import imgService from "@/assets/images/gallery-exterior-navy-weatherboard.webp";
import imgService900 from "@/assets/images/gallery-exterior-navy-weatherboard-900.webp";

export default function ExteriorPainting() {
  const benefits = [
    "Professional surface preparation and power washing",
    "Premium weather-resistant Dulux and Taubmans paints",
    "Expert colour consultation for maximum curb appeal",
    "Protection against Melbourne's harsh weather conditions",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  const suburbs = [
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Aspendale", link: "/painter-aspendale" },
    { name: "Highett", link: "/painter-highett" },
    { name: "Sorrento", link: "/painter-sorrento" },
    { name: "Dromana", link: "/painter-dromana" },
    { name: "Patterson Lakes", link: "/painter-patterson-lakes" },
    { name: "Hampton", link: "/painter-hampton" },
  ];

  const faqs = [
    {
      question: "How often should I repaint my home's exterior in Melbourne?",
      answer: "Most Melbourne homes need an exterior repaint every 7 to 10 years, though coastal and heavily sun-exposed properties can need it sooner. Weatherboard and timber usually need attention before rendered or brick surfaces. During your free quote we'll assess the current condition and give you an honest recommendation.",
    },
    {
      question: "What preparation is included in your exterior painting?",
      answer: "Proper preparation is where a lasting exterior finish is won or lost, so it's always included in our quote — never added later. That means pressure washing, scraping and sanding back flaking paint, filling and repairing surfaces, spot-priming bare timber and metal, and caulking gaps before any topcoats go on.",
    },
    {
      question: "What time of year is best for exterior painting in Melbourne?",
      answer: "Spring and autumn are ideal, but with Melbourne's variable weather we paint year-round by working to the conditions — applying coatings in suitable temperatures and humidity and allowing proper drying between coats. We simply schedule around wet spells so your finish cures correctly.",
    },
    {
      question: "How much does exterior painting cost in Melbourne?",
      answer: "The size of the house is only part of it — substrate condition, the number of storeys, and how much timber repair or colour change is needed all move the price more than square metreage alone. A single-storey weatherboard in good condition costs far less to repaint than a two-storey render job with cracked and flaking paint. We quote after a free site visit rather than a rate sight-unseen — call 0432 077 782.",
    },
    {
      question: "What paint brands do you use for exterior painting?",
      answer: "Premium exterior-grade Dulux and Taubmans systems, matched to the substrate and its exposure — weatherproof acrylics for weatherboard and render, and appropriate primers for bare timber, previously unpainted brick, and metal fascias and gutters. The specific products are named in your written quote.",
    },
    {
      question: "Do you paint weatherboard homes differently to rendered or brick homes?",
      answer: "Yes. Weatherboard needs more preparation — sanding back flaking coatings, replacing or filling damaged boards, and priming bare timber — because timber moves with moisture and needs a flexible, well-adhered system. Render and brick are usually more stable but can chalk or crack over time, and previously unpainted masonry needs a specific sealer. We assess the actual substrate during the quote rather than treating every exterior the same.",
    },
  ];

  const projectSteps = [
    {
      title: "Quote and assessment",
      body: "We walk the exterior with you, checking the condition of weatherboard, render, brick and trim, noting access and height requirements, and talking through colour options. The written quote itemises the surfaces, preparation and specific products before any work begins.",
    },
    {
      title: "Pressure washing",
      body: "Every surface is pressure washed to remove dirt, mould, chalking paint and loose debris — a critical first step, since a new coat applied over a dirty or chalky surface never bonds properly no matter how good the paint is.",
    },
    {
      title: "Scraping, sanding and repairs",
      body: "Failing paint is scraped and sanded back to a sound edge so the new coating doesn't telegraph old cracks. Damaged weatherboards are repaired or replaced, and cracks in render are filled before anything else happens.",
    },
    {
      title: "Priming and caulking",
      body: "Bare timber, repaired sections and any previously unpainted metal are spot-primed, and gaps and joints are caulked to keep water out. This step is what stops a repaint failing early at the edges and joins.",
    },
    {
      title: "Topcoats",
      body: "Two full coats of exterior-grade Dulux or Taubmans product go on to the specified sheen, with proper drying time between coats and around Melbourne's weather rather than rushing to finish early.",
    },
    {
      title: "Walkthrough and handover",
      body: "We walk the finished exterior with you, touch up anything that needs it, and clean up the site completely. The 5-year written workmanship guarantee applies from this point.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Exterior Painting Melbourne | Jetblack Painting"
        description="Expert exterior house painting in Melbourne. Weather-resistant coatings, professional preparation, 5-star rated. Servicing all Melbourne suburbs. Free quotes."
        canonical="https://jetblackpainting.com/services/exterior-painting/"
      schema={serviceSchema({ serviceType: "Exterior Painting", name: "Exterior Painting Melbourne", description: "Expert exterior house painting in Melbourne. Weather-resistant coatings, professional preparation, 5-star rated. Servicing all Melbourne suburbs. Free quotes.", canonical: "https://jetblackpainting.com/services/exterior-painting/", faqs })}
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
              Professional Exterior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Protect and enhance your home's exterior with expert painting. Weather-resistant finishes designed for Melbourne's climate using premium Dulux products.
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
            srcSet={`${imgService900} 900w, ${imgService} 1050w`}
            sizes="(max-width: 1024px) 100vw, 1152px"
            width={1050}
            height={1400}
            alt="Navy weatherboard home with white picket fence and window trim painted by Jetblack Painting"
            className="rounded-lg shadow-md w-full max-h-[420px] object-cover"
            loading="lazy"
          />
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
              Melbourne's Expert Exterior House Painters
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting provides premium exterior painting services across Melbourne. We specialise in protecting and beautifying homes with weather-resistant coatings that withstand Melbourne's harsh UV, rain, and coastal conditions. Our 18+ years of experience means we understand exactly what your home needs.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Every exterior project includes thorough surface preparation including power washing, scraping, sanding, and priming. We handle all surface types including weatherboard, rendered walls, brick, timber, metal roofing, and concrete.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Exterior Painting Service</h2>
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
          <MidPageCTA heading="Get your free Exterior Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Exterior Painting Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide professional exterior painting services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">How an Exterior Painting Project Runs</h2>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What Drives the Cost of Exterior Painting in Melbourne</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Substrate condition is usually the biggest factor. A weatherboard home with sound, well-adhered paint is quick to prepare; one with flaking coatings, rotten or damaged boards, and years of moisture damage needs significant repair and priming before a single topcoat goes on. Rendered and brick homes are generally more stable but can need crack repair, chalk removal, or a sealer if they've never been painted before.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Height and access are the second driver. A single-storey home with clear ground access is straightforward; a two-storey house, steep gables, or a home on a slope needs scaffolding or elevated access equipment, and that adds real cost and time.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Colour change and the number of coats needed matter too — going from a dark colour to a light one, or covering chalky, faded paint, sometimes needs an extra coat for even coverage. Coastal and heavily sun-exposed properties also benefit from a higher-grade weather-resistant system, which costs more to supply but holds up considerably longer against Melbourne's UV and salt exposure.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              We don't publish a rate per square metre, because a number quoted without seeing the substrate is a number that changes later. The site visit and written quote are free — call Jimmy on 0432 077 782.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Exterior Painting FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Exterior Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your exterior painting project.
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
        <QuoteForm compact serviceType="Exterior Painting" />
      </Suspense>

      <Footer />
    </div>
  );
}
