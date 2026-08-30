import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useInView } from "@/lib/useInView";

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
    answer: "We have over 18 years of experience providing premium painting services across Melbourne. Our long-standing reputation is built on quality craftsmanship and exceptional customer service."
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const header = useInView("-100px");

  return (
    <section id="faq" className="py-24 bg-[#131316]">
      <div className="container">
        {/* Section Header */}
        <div
          ref={header.ref}
          className={`reveal up max-w-2xl mb-16 ${header.visible ? "visible" : ""}`}
        >
          <span className="text-[#D0A050] font-semibold text-sm tracking-widest uppercase mb-3 block">
            Questions & Answers
          </span>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDEDEF] leading-tight mb-5"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Frequently Asked Questions
          </h2>
          <p className="text-[#B4B4B8] text-lg leading-relaxed">
            Find answers to common questions about our professional house painting services in Melbourne.
          </p>
        </div>

        <div className="max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                delay={index * 0.05}
              />
            ))}
          </div>

          <div className="mt-12">
            <a
              href="/faq"
              className="text-[#D0A050] font-semibold hover:underline flex items-center gap-2"
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

function FAQItem({
  faq,
  isOpen,
  onToggle,
  delay,
}: {
  faq: { question: string; answer: string };
  isOpen: boolean;
  onToggle: () => void;
  delay: number;
}) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`reveal up border border-[#222227] rounded-lg overflow-hidden ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 flex items-center justify-between hover:bg-[#0C0C0E] transition-colors"
      >
        <h3 className="text-lg font-semibold text-[#EDEDEF] text-left">
          {faq.question}
        </h3>
        <ChevronDown
          className={`w-5 h-5 text-[#E9BE6C] transition-transform flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-6 py-4 bg-[#0C0C0E] border-t border-[#222227]">
          <p className="text-[#B4B4B8] leading-relaxed">
            {faq.answer}
          </p>
        </div>
      </div>
    </div>
  );
}
