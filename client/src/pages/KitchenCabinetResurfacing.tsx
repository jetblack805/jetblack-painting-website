import { motion } from "framer-motion";
import { CheckCircle, Phone, DollarSign, Zap, Home } from "lucide-react";
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
import imgSprayBooth from "@/assets/images/gallery-cabinet-doors-spray-booth.webp";
import imgSprayBooth900 from "@/assets/images/gallery-cabinet-doors-spray-booth-900.webp";
import imgSprayDetail from "@/assets/images/gallery-cabinet-spray-finish-detail.webp";
import imgSprayDetail900 from "@/assets/images/gallery-cabinet-spray-finish-detail-900.webp";
import imgFinishedKitchen from "@/assets/images/gallery-cabinet-finished-white-kitchen.webp";
import imgFinishedKitchen900 from "@/assets/images/gallery-cabinet-finished-white-kitchen-900.webp";

export default function KitchenCabinetResurfacing() {
  const benefits = [
    "Premium 2-pack kitchen cabinet finishes",
    "Fraction of full kitchen renovation cost",
    "Professional colour consultation included",
    "Durable, long-lasting finish resistant to wear",
    "Fully licensed and insured with $10M public liability",
    "5-year workmanship guarantee"
  ];

  const suburbs = [
    { name: "McKinnon", link: "/painter-mckinnon" },
    { name: "Highett", link: "/painter-highett" },
    { name: "Murrumbeena", link: "/painter-murrumbeena" },
    { name: "Mentone", link: "/painter-mentone" },
    { name: "Aspendale", link: "/painter-aspendale" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
  ];

  /* Answers lead with the direct answer in the first sentence — these are the
     entries that get quoted back by AI assistants and Google's FAQ treatment,
     and a hedged opening sentence gets the whole answer skipped. This array
     feeds both the visible FAQ list and the FAQPage schema, so the two can
     never drift; keep it in sync with the copy in scripts/generate-static-pages.mjs. */
  const faqs = [
    {
      question: "How much cheaper is resurfacing than a new kitchen?",
      answer: "Resurfacing typically costs 30–50% less than a full kitchen renovation, because the layout, carcasses and benchtops all stay in place. You're paying for preparation, materials and spraying rather than demolition, new cabinetry and multiple trades. The saving is largest in kitchens where the existing layout still works and only the surfaces look dated."
    },
    {
      question: "Can laminate or vinyl-wrapped cabinets be painted?",
      answer: "Yes. Laminate, melamine and vinyl-wrapped MDF all take a 2-pack finish once they have been degreased, sanded to a key and primed with the right adhesion primer. Vinyl-wrapped doors that have started lifting around the oven or dishwasher are among the most common kitchens we resurface — the wrap fails long before the door underneath does."
    },
    {
      question: "Are the doors sprayed in my kitchen or taken away?",
      answer: "Doors, drawer fronts and end panels come off and are sprayed in our booth, where dust and airflow are controlled and every face can be laid flat. The carcasses and face frames that can't be removed are masked and sprayed in place. That combination is what gives the finish its glass-smooth look instead of the texture you get from brushing everything on site."
    },
    {
      question: "How long does cabinet resurfacing take?",
      answer: "Most kitchens take 5–10 days from first preparation to refitting the doors, depending on the number of doors and the coats specified. Preparation and priming take up more of that time than the topcoats do."
    },
    {
      question: "Can I use my kitchen while the cabinets are being resurfaced?",
      answer: "Yes. The carcasses, benchtops and appliances stay where they are, so the sink, oven and fridge remain usable throughout. You'll have open shelving while the doors are off, and the benches need to be clear on the days the frames are being sprayed."
    },
    {
      question: "Is a 2-pack finish durable in a kitchen?",
      answer: "Yes. 2-pack polyurethane cures chemically rather than simply drying, which leaves it hard, non-porous and genuinely wipeable — the same class of finish used on factory-made cabinetry. It stands up to daily wiping, hand contact and cooking steam far better than a brush-applied enamel."
    },
    {
      question: "Which sheen is best for kitchen cabinets?",
      answer: "Satin or low-sheen suits most kitchens. High gloss looks striking but shows fingerprints and wipe marks constantly, especially in darker colours. Satin handles daily contact far better and still wipes clean. If you want gloss, it works best on upper doors, which get touched least."
    },
    {
      question: "What can't cabinet resurfacing fix?",
      answer: "Water damage and structural problems. If the board under the sink or beside the dishwasher has swollen or gone soft, or a carcass has dropped out of square, a coating won't hide it — that section needs replacing first. Resurfacing renews the visible surfaces; it doesn't repair failed board or change the kitchen's layout."
    }
  ];

  return (
    <div className="min-h-screen bg-[#131316]">
      <SEOHead
        title="Kitchen Cabinet Resurfacing Melbourne | Jetblack Painting"
        description="Kitchen cabinet resurfacing in Melbourne. Premium 2-pack finishes at a fraction of renovation cost. Free quotes — call 0432 077 782."
        canonical="https://jetblackpainting.com/services/kitchen-cabinet-resurfacing/"
      schema={serviceSchema({ serviceType: "Kitchen Cabinet Resurfacing", name: "Kitchen Cabinet Resurfacing Melbourne", description: "Professional kitchen cabinet resurfacing Melbourne. Premium 2-pack finishes, fraction of renovation cost, 5-star rated. Transform your kitchen. Free quotes - Call 0432 077 782.", canonical: "https://jetblackpainting.com/services/kitchen-cabinet-resurfacing/", faqs })}
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
              Kitchen Cabinet Resurfacing Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your kitchen with premium 2-pack cabinet resurfacing. Get a brand new kitchen look for a fraction of full renovation cost.
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
          {/* Deliberately plural: the finished white kitchen and the grey doors
              in the booth are different jobs, not one project photographed at
              two stages. Without this heading three photos in a row read as a
              single before-and-after sequence, which would be untrue. */}
          <h2 className="text-2xl font-bold text-[#EDEDEF] mb-2">Recent cabinet projects</h2>
          <p className="text-[#B4B4B8] mb-6">
            A selection of separate kitchen cabinet jobs — finished kitchens, and doors being sprayed in our booth.
          </p>
          {/* Finished result runs full width: it is the only landscape shot of
              the three, and the one a visitor deciding on the service wants to
              see first. */}
          <img
            src={imgFinishedKitchen}
            srcSet={`${imgFinishedKitchen900} 900w, ${imgFinishedKitchen} 1170w`}
            sizes="(max-width: 1024px) 100vw, 1152px"
            width={1170}
            height={798}
            alt="Kitchen with white resurfaced cabinetry, stone island bench and stainless steel appliances"
            className="rounded-lg shadow-md w-full max-h-[420px] object-cover"
            loading="lazy"
            decoding="async"
          />
          {/* The two spray-booth shots are portrait, so they sit side by side in
              a taller box rather than being cropped into a wide strip. */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            <img
              src={imgSprayBooth}
              srcSet={`${imgSprayBooth900} 675w, ${imgSprayBooth} 1200w`}
              sizes="(max-width: 640px) 100vw, 50vw"
              width={1200}
              height={1600}
              alt="Kitchen cabinet doors being spray painted in Jetblack Painting's spray booth"
              className="rounded-lg shadow-md w-full h-80 sm:h-96 object-cover"
              loading="lazy"
              decoding="async"
            />
            <img
              src={imgSprayDetail}
              srcSet={`${imgSprayDetail900} 675w, ${imgSprayDetail} 1200w`}
              sizes="(max-width: 640px) 100vw, 50vw"
              width={1200}
              height={1600}
              alt="Spray gun laying an even coat across a kitchen cabinet door in the booth"
              className="rounded-lg shadow-md w-full h-80 sm:h-96 object-cover"
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
              Transform Your Kitchen Without Breaking the Bank
            </h2>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Kitchen cabinet resurfacing is one of the most cost-effective ways to transform your kitchen. Instead of a full renovation, cabinet resurfacing delivers a brand new look for a fraction of the price. Jetblack Painting specialises in premium 2-pack kitchen cabinet finishes that rival custom cabinetry.
            </p>
            <p className="text-lg text-[#B4B4B8] mb-4 leading-relaxed">
              Our professional team handles the complete process: careful disassembly, thorough surface preparation, priming, and application of premium 2-pack finish. The result is a durable, high-gloss kitchen cabinet finish that looks and feels like new cabinetry, with the added benefit of a 5-year workmanship guarantee.
            </p>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-[#0C0C0E] p-6 rounded-lg text-center">
              <DollarSign className="w-12 h-12 text-[#E9BE6C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">30-50%</h3>
              <p className="text-[#B4B4B8]">Less than full renovation</p>
            </div>
            <div className="bg-[#0C0C0E] p-6 rounded-lg text-center">
              <Zap className="w-12 h-12 text-[#E9BE6C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">5-10</h3>
              <p className="text-[#B4B4B8]">Days to complete</p>
            </div>
            <div className="bg-[#0C0C0E] p-6 rounded-lg text-center">
              <Home className="w-12 h-12 text-[#E9BE6C] mx-auto mb-3" />
              <h3 className="text-2xl font-bold text-[#EDEDEF] mb-2">100+</h3>
              <p className="text-[#B4B4B8]">Kitchens transformed</p>
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why Choose Our Kitchen Cabinet Resurfacing Service</h2>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#E9BE6C] flex-shrink-0 mt-1" />
                  <span className="text-[#B4B4B8] text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process Section */}
          <MidPageCTA heading="Get your free Kitchen Cabinet Resurfacing quote today" />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#0C0C0E] p-8 rounded-lg"
          >
            <h2 className="text-2xl font-bold text-[#EDEDEF] mb-6">Our Kitchen Cabinet Resurfacing Process</h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0A050] text-[#0A0A0B] flex items-center justify-center font-bold">1</div>
                <div>
                  <h3 className="font-bold text-[#EDEDEF] mb-1">Consultation & Colour Selection</h3>
                  <p className="text-[#B4B4B8]">We discuss your vision and help you choose the perfect colour and finish for your kitchen.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0A050] text-[#0A0A0B] flex items-center justify-center font-bold">2</div>
                <div>
                  <h3 className="font-bold text-[#EDEDEF] mb-1">Cabinet Removal & Preparation</h3>
                  <p className="text-[#B4B4B8]">We carefully remove cabinet doors and hardware, then thoroughly clean and sand all surfaces.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0A050] text-[#0A0A0B] flex items-center justify-center font-bold">3</div>
                <div>
                  <h3 className="font-bold text-[#EDEDEF] mb-1">Priming & Base Coat</h3>
                  <p className="text-[#B4B4B8]">We apply professional primer and base coat to ensure excellent adhesion and coverage.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0A050] text-[#0A0A0B] flex items-center justify-center font-bold">4</div>
                <div>
                  <h3 className="font-bold text-[#EDEDEF] mb-1">2-Pack Finish Application</h3>
                  <p className="text-[#B4B4B8]">We apply premium 2-pack finish in multiple coats for a durable, high-gloss result.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#D0A050] text-[#0A0A0B] flex items-center justify-center font-bold">5</div>
                <div>
                  <h3 className="font-bold text-[#EDEDEF] mb-1">Reassembly & Final Inspection</h3>
                  <p className="text-[#B4B4B8]">We reinstall doors, hardware, and handles, then perform a final quality inspection.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Pillar-depth sections. Every paragraph below is duplicated verbatim
              in the `extraSections` for this route in
              scripts/generate-static-pages.mjs — crawlers that don't run JS read
              that copy, so the two must be edited together or the layers drift. */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Which Kitchen Cabinets Can Be Resurfaced</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Most Melbourne kitchens built in the last thirty years can be resurfaced. Laminate and melamine doors, vinyl-wrapped MDF, timber and timber-veneer, and existing 2-pack polyurethane all take a new 2-pack finish once they have been properly prepared — the substrate matters far less than its condition. Vinyl-wrapped doors are the most common candidate we see: the wrap lifts and bubbles around the oven and the dishwasher long before anything structural fails, and resurfacing deals with that permanently instead of replacing doors that are otherwise sound.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              What can't be saved is board that has taken water. If the MDF under the sink or beside the dishwasher has swollen, gone soft or crumbled at the edges, no coating will hide it — that door or panel needs replacing before the rest of the kitchen is finished, and we'll tell you that at the quote rather than after the job has started. The same applies to doors that have delaminated badly or carcasses that have dropped out of square. Resurfacing renews surfaces; it doesn't repair failed board or fix a layout that never worked.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Why 2-Pack, and Why It's Sprayed</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Kitchen cabinetry is the hardest-worked painted surface in a house. Doors get grabbed with wet hands, wiped down with detergent, knocked with pans and steamed every day. A standard brush-applied enamel doesn't hold up to that for long — it stays comparatively soft, marks under a fingernail, and shows every brush stroke across a flat door face.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              2-pack polyurethane cures chemically rather than simply drying out, which is why it ends up hard, non-porous and genuinely wipeable. It's the same class of finish used on factory-made cabinetry, and sprayed properly it lays down without a single brush mark.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              How it goes on matters as much as what goes on. Doors, drawer fronts and end panels come off and are sprayed in our booth, where dust and airflow are controlled and every face can be laid flat. The carcasses and face frames that stay in your kitchen are masked and sprayed on site. Preparation is where the job is won or lost: every surface is degreased first, because years of cooking residue is the single most common reason cabinet paint fails to stick, then sanded to a key and primed with an adhesion primer matched to the substrate underneath.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Choosing Colour, Sheen and Hardware</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Colour is the easy part; sheen is where people get caught out. High gloss looks spectacular in a showroom and shows every fingerprint in a real kitchen, particularly in dark colours. Satin and low-sheen hide daily handling far better while still wiping clean, which is why they suit most family kitchens. If you do want gloss, it works best on the upper doors, where hands go least often.
            </p>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              Two-tone kitchens remain the most reliable way to modernise a dated layout — lighter uppers to keep the room feeling open, a deeper colour on the lower cabinets and the island where marks show least. Warm whites and greiges photograph well and date slowly. Strong colours are best kept to an island or a pantry door, where they can be changed later without redoing the whole kitchen.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Handles change the look more than most people expect, and swapping them is far easier while the doors are already off and in the booth. If you're planning new hardware, mention it at quoting stage — the hole spacing on new handles rarely matches the old, and it is a much cleaner job to sort that out before the finish goes on than to drill through it afterwards. Colour consultation is included with every quote.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">What to Expect During and After the Job</h2>
            <p className="text-[#B4B4B8] mb-4 leading-relaxed">
              You keep your kitchen. The carcasses, benchtops and appliances all stay where they are, so the sink, oven and fridge remain usable while the work is going on — it's the doors and drawer fronts that leave. Expect open shelving through the middle stretch of the job, and to have the benches clear on the days the frames are being sprayed.
            </p>
            <p className="text-[#B4B4B8] leading-relaxed">
              Most kitchens run 5–10 days from first preparation to refitting. When the doors go back on, the finish will feel dry and look finished, but 2-pack keeps hardening for some weeks after that. It's worth being gentle in that window — wipe with a soft cloth and warm water rather than scouring pads or solvent cleaners, and avoid leaving anything pressed hard against a door face. After that it behaves like any other kitchen surface. The workmanship is covered by our 5-year written guarantee.
            </p>
          </motion.div>

          {/* Service Areas with Internal Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#131316] p-8 rounded-lg border border-[#222227]"
          >
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Kitchen Cabinet Resurfacing Service Areas</h2>
            <p className="text-[#B4B4B8] mb-4">We provide professional kitchen cabinet resurfacing services across all Melbourne suburbs including:</p>
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
            <h2 className="text-3xl font-bold text-[#EDEDEF] mb-6">Kitchen Cabinet Resurfacing FAQs</h2>
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
            {/* Points the "should I just replace them instead?" intent at the blog
                post that answers it, so this page doesn't have to compete with
                its own article for that query. */}
            <p className="text-[#B4B4B8] mt-5">
              Still deciding between resurfacing and new cabinetry?{" "}
              <Link href="/blog/kitchen-cabinet-resurfacing-vs-replacement" className="text-[#D0A050] hover:underline font-medium">
                Read our comparison of resurfacing vs replacement
              </Link>
              .
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#151518] text-white p-12 rounded-lg text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Transform Your Kitchen Today</h2>
            <p className="text-xl mb-6 text-gray-300">
              Contact Jetblack Painting for a free, no-obligation quote on your kitchen cabinet resurfacing project.
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
        <QuoteForm compact serviceType="Kitchen Cabinet Resurfacing" />
      </Suspense>

      <Footer />
    </div>
  );
}
