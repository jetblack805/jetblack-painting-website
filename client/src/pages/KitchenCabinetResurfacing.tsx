import { motion } from "framer-motion";
import { CheckCircle, Phone, DollarSign, Zap, Home } from "lucide-react";
import { Link } from "wouter";
import SEOHead from "@/components/SEOHead";
import { serviceSchema } from "@/lib/serviceSchema";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MidPageCTA from "@/components/MidPageCTA";
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
    { name: "Brighton", link: "/painter-brighton" },
    { name: "Toorak", link: "/painter-toorak" },
    { name: "Malvern", link: "/painter-malvern" },
    { name: "Camberwell", link: "/painter-camberwell" },
    { name: "Hawthorn", link: "/painter-hawthorn" },
    { name: "Bentleigh", link: "/painter-bentleigh" },
    { name: "Caulfield", link: "/painter-caulfield" },
    { name: "Hampton", link: "/painter-hampton" },
    { name: "Mordialloc", link: "/painter-mordialloc" },
  ];

  const faqs = [
    {
      question: "How much cheaper is resurfacing than a new kitchen?",
      answer: "Cabinet resurfacing typically costs a fraction of a full kitchen renovation because the layout, carcasses, and benchtops stay in place."
    },
    {
      question: "How long does cabinet resurfacing take?",
      answer: "Most kitchens are completed within about a week, including preparation, priming, and 2-pack topcoats."
    },
    {
      question: "Is a 2-pack finish durable in a kitchen?",
      answer: "Yes. 2-pack polyurethane is a hard-wearing, wipeable finish designed for high-use surfaces like kitchen cabinetry."
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
              Kitchen cabinet resurfacing is one of the most cost-effective ways to transform your kitchen. Instead of a full renovation costing $15,000-$30,000+, cabinet resurfacing delivers a brand new look for a fraction of the price. Jetblack Painting specialises in premium 2-pack kitchen cabinet finishes that rival custom cabinetry.
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
      <Footer />
    </div>
  );
}
