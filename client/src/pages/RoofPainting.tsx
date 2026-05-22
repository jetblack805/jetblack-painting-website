import { motion } from "framer-motion";
import { Phone, CheckCircle, Shield, Clock, Award } from "lucide-react";
import { Link } from "wouter";

export default function RoofPainting() {
  const benefits = [
    "Extends roof life by 10-15 years",
    "Improves energy efficiency",
    "Prevents leaks and water damage",
    "Increases property value",
    "Enhances street appeal",
    "UV and weather protection"
  ];

  const process = [
    { step: "1", title: "Free Roof Inspection", desc: "We assess your roof condition, identify issues, and recommend the best solution." },
    { step: "2", title: "High-Pressure Cleaning", desc: "Thorough cleaning to remove moss, lichen, dirt, and debris." },
    { step: "3", title: "Repairs & Preparation", desc: "Fix cracked tiles, replace broken ones, and seal all gaps." },
    { step: "4", title: "Premium Roof Coating", desc: "Apply 2-3 coats of premium roof membrane for lasting protection." }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-20">
        <div className="container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Roof Painting Melbourne</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Roof Painting &amp; Restoration Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Professional roof painting services across Melbourne. Restore, protect, and beautify your roof with Jetblack Painting's expert team. 5-star rated, fully licensed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0432077782" className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all">
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <a href="mailto:jimmy.jetblackpainting@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-all">
                Get Free Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-8 bg-[#F5F5F0] border-b">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">13+ Years Experience</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">Fully Licensed & Insured</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">5-Year Guarantee</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">5-Star Google Rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Professional Roof Painting in Melbourne</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Your roof is your home's first line of defence against Melbourne's harsh weather conditions. Over time, UV rays, rain, wind, and temperature fluctuations can cause your roof to deteriorate, leading to leaks, energy loss, and reduced property value.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting's professional roof painting and restoration service restores your roof to like-new condition while adding a protective membrane that extends its lifespan by 10-15 years. We service all roof types including terracotta tiles, concrete tiles, Colorbond, and metal roofing.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Benefits of Professional Roof Painting</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Our Roof Painting Process</h3>
            <div className="space-y-6">
              {process.map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-[#00AACC] text-white flex items-center justify-center font-bold flex-shrink-0">{item.step}</div>
                  <div>
                    <h4 className="text-lg font-bold text-[#0D0D0D]">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Areas Served */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12 bg-[#F5F5F0] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Roof Painting Areas We Serve</h3>
            <p className="text-gray-700 mb-4">We provide roof painting services across all Melbourne suburbs including:</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {["Brighton", "Toorak", "Malvern", "Camberwell", "Hawthorn", "Bentleigh", "Caulfield", "Hampton", "Mordialloc", "Keysborough", "Mentone", "Sandringham"].map((suburb) => (
                <span key={suburb} className="text-gray-700">• {suburb}</span>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Roof Painting Quote</h3>
            <p className="text-xl mb-6 text-gray-300">Protect your home with a professional roof restoration. Free inspections available.</p>
            <a href="tel:0432077782" className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg">
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
