import { motion } from "framer-motion";
import { Phone, CheckCircle, Shield, Clock, Award, Building } from "lucide-react";
import { Link } from "wouter";

export default function CommercialPainting() {
  const services = [
    "Office & Corporate Spaces",
    "Retail Shops & Showrooms",
    "Warehouses & Factories",
    "Restaurants & Cafes",
    "Medical & Dental Clinics",
    "Schools & Childcare Centres",
    "Strata & Body Corporate",
    "Hotels & Hospitality"
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-20">
        <div className="container max-w-6xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <nav className="text-sm text-gray-400 mb-4">
              <Link href="/" className="hover:text-white">Home</Link> / <span className="text-white">Commercial Painting Melbourne</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Commercial Painting Melbourne</h1>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              Professional commercial painting services for offices, retail, industrial, and strata properties across Melbourne. Minimal disruption, maximum impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:0432077782" className="inline-flex items-center justify-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg">
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </a>
              <a href="mailto:jimmy.jetblackpainting@gmail.com" className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-8 py-4 rounded font-bold text-lg hover:bg-white hover:text-black transition-all">
                Request Commercial Quote
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-[#F5F5F0] border-b">
        <div className="container max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="flex flex-col items-center gap-2">
              <Building className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">500+ Commercial Projects</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Shield className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">$20M Public Liability</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Clock className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">After-Hours Available</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Award className="w-8 h-8 text-[#00AACC]" />
              <span className="font-bold text-[#0D0D0D]">OH&S Compliant</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-12">
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">Melbourne's Trusted Commercial Painters</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting provides comprehensive commercial painting services across Melbourne. We understand that your business can't afford downtime, which is why we offer flexible scheduling including after-hours and weekend work to minimise disruption to your operations.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              From small retail fit-outs to large-scale warehouse projects, our experienced team delivers professional results on time and on budget. We're fully licensed, OH&S compliant, and carry $20 million in public liability insurance for your peace of mind.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-12">
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Commercial Painting Services</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {services.map((service, i) => (
                <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg border-l-4 border-[#00AACC]">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg font-medium">{service}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center">
            <h3 className="text-3xl font-bold mb-4">Get Your Free Commercial Quote</h3>
            <p className="text-xl mb-6 text-gray-300">Contact us for a no-obligation quote on your commercial painting project.</p>
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
