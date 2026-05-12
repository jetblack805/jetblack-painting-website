import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Star, MapPin, Phone, ChevronDown, Home, Wrench, Mail } from "lucide-react";
import { Link } from "wouter";

export default function BrightonPainters() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    document.title = "House Painters Brighton | Interior & Exterior | Jetblack Painting";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Expert house painters in Brighton, Melbourne. Jetblack Painting delivers premium interior & exterior painting, weather protection and flawless finishes. Free quotes — call 0432 077 782.");
    // Dynamic schema injection removed for GSC compliance
  }, []);

  const faqs = [
    {
      question: "Do you offer free quotes in Brighton?",
      answer: "Yes — we provide free, no-obligation quotes for all painting projects in Brighton. Call 0432 077 782 or use our online form and we'll respond promptly."
    },
    {
      question: "What interior painting services do you offer in Brighton?",
      answer: "We paint walls, ceilings, trims, doors and feature walls using premium low-VOC paints. Our team works cleanly and efficiently with minimal disruption to your home."
    },
    {
      question: "How do you protect Brighton homes from Melbourne's weather?",
      answer: "We use industry-leading weather-resistant exterior coatings and thorough surface preparation — filling cracks, sanding, priming — to ensure a durable finish that stands up to Melbourne's sun, rain and wind."
    },
    {
      question: "Are you experienced with Art Deco and Californian bungalow homes in Brighton?",
      answer: "Absolutely. We have extensive local experience painting Art Deco and Californian bungalow homes throughout Brighton and understand the specific surface requirements, colour palettes and heritage considerations of the area."
    },
    {
      question: "How long does an exterior repaint take in Brighton?",
      answer: "Most residential exterior repaints in Brighton take 2–4 days depending on the size and condition of the property. We'll give you a clear timeline in your free quote."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-28 bg-[#0D0D0D] text-white overflow-hidden"
        style={{ backgroundImage: `url(/images/house-painters-brighton-melbourne.jpg)`, backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
            <p className="text-[#00AACC] font-semibold mb-3 uppercase tracking-widest text-sm">Melbourne Painters</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Painter in Brighton
            </h1>
            <p className="text-lg text-gray-200 mb-8 max-w-2xl">
              Jetblack Painting delivers premium interior and exterior painting services across Brighton and greater Melbourne. Trusted by local homeowners for 13+ years.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="bg-[#00AACC] hover:bg-[#0088AA] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                Get Your Free Quote
              </a>
              <a href="tel:0432077782" className="border-2 border-white hover:bg-white hover:text-[#0D0D0D] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Internal Nav Links */}
      <section className="bg-[#0D0D0D] border-t border-white/10">
        <div className="container py-3 flex flex-wrap gap-6 text-sm">
          <Link href="/" className="text-gray-400 hover:text-[#00AACC] flex items-center gap-1 transition-colors">
            <Home className="w-4 h-4" /> Home
          </Link>
          <a href="/#services" className="text-gray-400 hover:text-[#00AACC] flex items-center gap-1 transition-colors">
            <Wrench className="w-4 h-4" /> Our Services
          </a>
          <a href="/#contact" className="text-gray-400 hover:text-[#00AACC] flex items-center gap-1 transition-colors">
            <Mail className="w-4 h-4" /> Contact Us
          </a>
        </div>
      </section>

      {/* Interior Painting */}
      <section className="py-20 bg-white">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-5 text-[#0D0D0D]">Interior Painting Brighton</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Your home's interior deserves a finish that lasts. Jetblack Painting's interior painting service in Brighton covers every room — living areas, bedrooms, kitchens, hallways and feature walls. We use premium low-VOC paints that deliver rich, even colour and stand up to everyday life. Every surface is carefully prepared: filled, sanded and primed before a single drop of paint is applied. Whether you're refreshing a single room or repainting your entire home, our team works cleanly and efficiently so you can enjoy your space again as quickly as possible. We understand the architectural character of Art Deco and Californian bungalow homes in Brighton and recommend colour palettes and finishes that complement your home perfectly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Exterior Painting */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-5 text-[#0D0D0D]">Exterior House Painting</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Melbourne's climate is demanding — blazing summers, wet winters and everything in between. Jetblack Painting's exterior painting service in Brighton is built around weather protection first. We use industry-leading exterior coatings that resist UV fading, moisture penetration and surface cracking, keeping your home looking sharp for years. Our process starts with a thorough inspection of all exterior surfaces, followed by pressure washing, crack filling, sanding and priming before any topcoat is applied. From the rendered facades along Church Street to the weatherboard cottages near Brighton Beach, we have the local knowledge and premium finishes to make your Brighton home stand out on the street.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#0D0D0D]">Why Choose Jetblack Painting</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Trusted by homeowners across the bayside streets of Brighton for premium results and reliable service.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Star, title: "5-Star Rated", desc: "Consistently excellent Google reviews from Brighton homeowners." },
              { icon: MapPin, title: "Local Brighton Experience", desc: "We know the bayside streets of Brighton — the homes, the styles and the conditions." },
              { icon: Check, title: "Premium Finishes", desc: "Only top-tier paints and materials for a flawless, lasting result." },
              { icon: Check, title: "Weather Protection", desc: "Exterior coatings engineered to handle Melbourne's toughest conditions." },
              { icon: Check, title: "Licensed & Insured", desc: "Fully licensed and insured for complete peace of mind." },
              { icon: Phone, title: "Free Quotes", desc: "No-obligation quotes — fast response, clear pricing, no surprises." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.08 }} viewport={{ once: true }} className="bg-[#F5F5F0] p-6 rounded-lg">
                <item.icon className="w-8 h-8 text-[#00AACC] mb-4" />
                <h3 className="font-bold text-[#0D0D0D] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Projects */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold mb-5 text-[#0D0D0D]">Local Painting Projects in Brighton</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Jetblack Painting has completed dozens of residential painting projects across the bayside streets of Brighton. From full interior and exterior repaints of Art Deco and Californian bungalow homes to pre-sale makeovers and investment property refreshes, our portfolio in Brighton speaks for itself. We take pride in understanding what makes each suburb unique — the architectural heritage, the street appeal expectations and the lifestyle of the people who live there. When you choose Jetblack Painting in Brighton, you're choosing a team that genuinely knows your neighbourhood and is committed to delivering results that exceed your expectations. Our work near Church Street and Brighton Beach has earned us repeat clients and referrals throughout the area.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="/#contact" className="bg-[#00AACC] hover:bg-[#0088AA] text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                Get a Free Quote
              </a>
              <a href="/#services" className="border-2 border-[#0D0D0D] hover:bg-[#0D0D0D] hover:text-white text-[#0D0D0D] px-8 py-3 rounded-lg font-semibold transition-colors text-center">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className="mb-10">
            <h2 className="text-3xl font-bold text-[#0D0D0D]">FAQs — House Painters Brighton</h2>
          </motion.div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: i * 0.05 }} viewport={{ once: true }} className="border border-gray-200 rounded-lg overflow-hidden">
                <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F5F5F0] transition-colors text-left">
                  <h3 className="font-semibold text-[#0D0D0D]">{faq.question}</h3>
                  <ChevronDown className={`w-5 h-5 text-[#00AACC] transition-transform flex-shrink-0 ml-4 ${openIndex === i ? "rotate-180" : ""}`} />
                </button>
                {openIndex === i && (
                  <div className="px-6 py-4 bg-[#F5F5F0] border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#00AACC] text-white">
        <div className="container text-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Brighton Home?</h2>
            <p className="text-lg mb-8 max-w-xl mx-auto opacity-90">Contact your local Brighton painters today for a free, no-obligation quote.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-white text-[#00AACC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Free Quote
              </a>
              <a href="tel:0432077782" className="border-2 border-white hover:bg-white hover:text-[#00AACC] px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> 0432 077 782
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
