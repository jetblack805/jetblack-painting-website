import { motion } from "framer-motion";
import { CheckCircle, Phone } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
import imgService from "@/assets/images/gallery-commercial-comfortel-building.webp";
import imgBeforeAfter from "@/assets/images/gallery-commercial-before-after.webp";
import imgBeforeAfter900 from "@/assets/images/gallery-commercial-before-after-900.webp";
import imgComfortelFront from "@/assets/images/gallery-commercial-comfortel-front.webp";
import imgIndustrialLift from "@/assets/images/gallery-commercial-industrial-lift.webp";

export default function CommercialPainting() {
  const services = [
    "Office painting and repainting",
    "Retail store fit-outs",
    "Warehouse and factory painting",
    "Strata and body corporate painting",
    "Restaurant and hospitality venues",
    "Medical and healthcare facilities",
    "School and educational buildings",
    "After-hours and weekend work available"
  ];

  // Kept in step with the commercial entry in scripts/generate-static-pages.mjs:
  // the FAQPage schema has to match the questions visible on the page, and the
  // crawler layer and rendered layer must describe the same page.
  const faqs = [
    {
      question: "Can you paint outside business hours to avoid disruption?",
      answer: "Yes. We regularly work after hours, overnight and on weekends for commercial clients so your business keeps running with minimal disruption. The staging is agreed before we start, so you know which areas are affected and when they're back in use.",
    },
    {
      question: "What types of commercial premises do you paint?",
      answer: "We paint offices, retail and hospitality fit-outs, warehouses and industrial units, strata and body-corporate common areas, and owners-corporation buildings across Melbourne. Coatings and access are matched to the building rather than applied from a standard template.",
    },
    {
      question: "Are you licensed and insured for commercial work?",
      answer: "Absolutely. Jetblack Painting is fully licensed and carries $10 million public liability insurance, and we follow proper site safety and access procedures. We're happy to provide documentation for building managers and owners corporations before work begins.",
    },
    {
      question: "How much does commercial painting cost in Melbourne?",
      answer: "It depends on the area, the condition of the substrate, the access required and whether the premises stays open during the work. Those variables move a commercial quote far more than floor area alone, so we walk the site and give you an itemised written quote rather than a rate applied sight-unseen. Quotes are free — call 0432 077 782.",
    },
    {
      question: "How long will a commercial repaint take?",
      answer: "A single office suite or shopfront is usually a few days; a warehouse or a staged multi-area repaint runs longer, and after-hours work spreads the same hours across more calendar days. You get a schedule with the quote, including which zones are affected on which days.",
    },
    {
      question: "Can you paint while staff and customers are still on site?",
      answer: "Yes, and much of our commercial work is done in occupied premises. We zone the work so only one area is affected at a time, keep access ways safe and clear, use low-odour water-based products where the specification allows, and leave each area clean at the end of every shift.",
    },
    {
      question: "What paint do you use on commercial buildings?",
      answer: "Premium Dulux and Taubmans commercial systems, specified to the surface and the traffic it takes — washable low-sheen for corridors and offices, hard-wearing enamels or two-pack on doors, frames and handrails, and appropriate primers for steel, block and previously unsealed substrates. The products are named in your written quote.",
    },
    {
      question: "Do you work with owners corporations and strata managers?",
      answer: "Yes. We provide detailed scopes, transparent pricing, insurance documentation and clear schedules for owners corporations, body corporate committees and strata managers, and can run repaints as a staged maintenance program across a building or portfolio.",
    },
  ];

  const projectSteps = [
    {
      title: "Site walk-through and scope",
      body: "We walk the site with you, measure the areas, check the condition of every substrate and note the practical constraints — access, height, trading hours, tenant impact. That's what the written quote is built from, rather than a rate applied blind to a floor plan.",
    },
    {
      title: "Written scope and product specification",
      body: "You get an itemised quote listing the surfaces included, the preparation, the number of coats and the specific products. Naming the product matters commercially: a washable low-sheen in a corridor and a two-pack on a handrail are very different costs and very different service lives.",
    },
    {
      title: "Scheduling around your trading hours",
      body: "We agree the staging up front — which areas are painted when, what stays open, and whether the work runs after hours or over a weekend. Multi-area sites are split into zones so only one part of the premises is affected at a time.",
    },
    {
      title: "Site setup and preparation",
      body: "Floors, fittings and stock are protected before anything is opened. Preparation is where a commercial repaint is won or lost: washing down, filling and sanding, spot-priming bare or patched substrate, and masking to a clean line.",
    },
    {
      title: "Application",
      body: "Coats go on to the specified film build, with drying and recoat times respected rather than compressed to finish early. Areas are returned to use progressively as they're completed and cured enough to take normal traffic.",
    },
    {
      title: "Walk-through and sign-off",
      body: "We walk the finished work with you, list and complete any touch-ups, remove all protection and rubbish, and hand back a clean site. The 5-year written workmanship guarantee applies from completion.",
    },
  ];

  const suburbs = [
    { name: "Clyde North", link: "/painter-clyde-north" },
    { name: "Mount Eliza", link: "/painter-mount-eliza" },
    { name: "Moorabbin", link: "/painter-moorabbin" },
    { name: "Collingwood", link: "/painter-collingwood" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Highett", link: "/painter-highett" },
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Commercial Painting Melbourne | Jetblack Painting"
        description="Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes."
        canonical="https://jetblackpainting.com/services/commercial-painting/"
      schema={serviceSchema({ serviceType: "Commercial Painting", name: "Commercial Painting Melbourne", description: "Professional commercial painting services in Melbourne. Offices, retail, warehouses, strata. After-hours available. 5-star rated, fully insured. Free quotes.", canonical: "https://jetblackpainting.com/services/commercial-painting/", faqs })}
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
              Commercial Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Professional commercial painting for offices, retail, warehouses, and strata properties. After-hours work available to minimise business disruption.
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
            alt="Commercial building exterior painted by Jetblack Painting in Melbourne"
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
              alt="Before and after of a commercial building repaint by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgComfortelFront}
              alt="Commercial office and warehouse frontage painted by Jetblack Painting"
              className="rounded-lg shadow-md w-full h-64 object-cover"
              loading="lazy"
            />
            <img
              src={imgIndustrialLift}
              alt="Industrial building painting in progress with access equipment by Jetblack Painting"
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Melbourne's Trusted Commercial Painters</h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Jetblack Painting delivers large-scale commercial painting projects across Melbourne. With 13+ years of experience and full insurance coverage, we handle everything from small office repaints to major warehouse and factory projects. Our team works efficiently to minimise disruption to your business operations.
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting Services</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <MidPageCTA heading="Get your free Commercial Painting quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting Service Areas</h2>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">How a Commercial Painting Project Runs</h2>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What Drives the Cost of a Commercial Repaint</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Area is the obvious factor, but it's rarely the one that moves a commercial quote most. Substrate condition matters more: sound painted plasterboard is quick, while flaking render, water-damaged ceilings, rusted steel or previously unsealed block all add preparation hours before a single topcoat goes on.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Access is the second driver. Ground-floor office suites are straightforward; warehouse walls and ceilings at height, atriums, stairwells and external facades need scaffold, boom lifts or rope access, and that equipment is a real line in the quote rather than an afterthought.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              The third is downtime. Painting a premises that stays open — staged zones, after-hours shifts, faster-drying low-odour systems — costs more per square metre than an empty tenancy handed over for a week, but it's usually far cheaper than closing. Product specification is the fourth: a hard-wearing washable system in a high-traffic corridor costs more to supply than a builder's-grade wall paint and lasts several times longer, which is the calculation worth making on a building you'll still own in ten years.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              We don't publish a rate per square metre for commercial work, because a number quoted without seeing the substrate is a number that changes later. The site walk-through and written quote are free — call Jimmy on 0432 077 782.
            </p>
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Commercial Painting FAQs</h2>
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
            <h2 className="text-3xl font-bold mb-4">Get Your Free Commercial Painting Quote</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your commercial painting project.
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
