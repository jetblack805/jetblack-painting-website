import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What areas do Jetblack Painting services cover in Melbourne?",
    answer: "Jetblack Painting proudly serves Keysborough, Bayside suburbs (including Mordialloc, Mentone, and Brighton), the Mornington Peninsula, and all greater Melbourne suburbs. We provide high-quality interior, exterior, and commercial painting services wherever you are located."
  },
  {
    question: "Are your Melbourne house painters licensed and insured?",
    answer: "Absolutely. Jetblack Painting is a fully licensed business with comprehensive insurance coverage. We prioritize safety and professionalism, providing complete peace of mind for all our residential and commercial clients."
  },
  {
    question: "Do you offer free quotes for painting projects?",
    answer: "Yes! We provide free, no-obligation quotes for all painting projects in Melbourne. We'll visit your property, assess the requirements, and provide a transparent, detailed estimate with no hidden costs."
  },
  {
    question: "How long has Jetblack Painting been operating in Melbourne?",
    answer: "We have over 13 years of experience providing premium painting services across Melbourne. Our long-standing reputation is built on quality craftsmanship and exceptional customer service."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16"
        >
          <span className="text-[#007A99] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Questions & Answers
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#555] text-lg leading-relaxed">
            Find answers to common questions about our professional house painting services in Melbourne.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="border border-gray-200 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#F5F5F0] transition-colors"
                >
                  <h3 className="text-lg font-semibold text-[#0D0D0D] text-left">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-[#00AACC] transition-transform flex-shrink-0 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 py-4 bg-[#F5F5F0] border-t border-gray-200"
                  >
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12">
            <a 
              href="/faq" 
              className="text-[#007A99] font-semibold hover:underline flex items-center gap-2"
            >
              View all FAQs
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
