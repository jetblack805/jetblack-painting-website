import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    // Update meta tags dynamically
    document.title = "FAQ - Jetblack Painting | Melbourne Painters";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Frequently asked questions about Jetblack Painting services in Melbourne. Learn about our painting process, pricing, and more."
      );
    }

    // Add FAQ Schema Markup
    const faqSchema = document.querySelector('script[type="application/ld+json"]');
    if (faqSchema) {
      faqSchema.remove();
    }

    const newSchema = document.createElement("script");
    newSchema.type = "application/ld+json";
    newSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What areas do Jetblack Painting services cover in Melbourne?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Jetblack Painting proudly serves Keysborough, Bayside suburbs, Mornington Peninsula & all Melbourne suburbs."
          }
        },
        {
          "@type": "Question",
          "name": "Are Jetblack Painting services licensed and insured?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Jetblack Painting is fully licensed and insured, providing complete protection and peace of mind."
          }
        },
        {
          "@type": "Question",
          "name": "Do you offer free quotes?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Jetblack Painting is fully licensed and insured, providing complete protection and peace of mind."
          }
        }
      ]
    });
    document.head.appendChild(newSchema);
  }, []);

  const faqs = [
    {
      question: "What areas do Jetblack Painting services cover in Melbourne?",
      answer: "Jetblack Painting proudly serves Keysborough, Bayside suburbs, Mornington Peninsula & all Melbourne suburbs. We provide interior, exterior, and commercial painting services across the greater Melbourne area."
    },
    {
      question: "Are Jetblack Painting services licensed and insured?",
      answer: "Yes, Jetblack Painting is fully licensed and insured, providing complete protection and peace of mind for all our customers."
    },
    {
      question: "Do you offer free quotes?",
      answer: "Yes! We provide free, no-obligation quotes for all projects. Simply contact us with details about your painting needs, and we'll provide a competitive estimate."
    },
    {
      question: "How long have you been in the painting business?",
      answer: "Jetblack Painting has over 13 years of experience in residential, commercial, and specialized painting services across Melbourne."
    },
    {
      question: "What types of painting services do you offer?",
      answer: "We offer interior painting, exterior painting, commercial painting, pre-sale property painting, rental property painting, roof restoration, and fence painting services."
    },
    {
      question: "How can I get a quote from Jetblack Painting?",
      answer: "You can contact us by phone at 0432 077 782 or fill out our online quote request form. We'll respond quickly with a detailed estimate."
    },
    {
      question: "What is your Google rating?",
      answer: "Jetblack Painting maintains a 5-star rating on Google, reflecting our commitment to quality work and customer satisfaction."
    },
    {
      question: "Do you work on weekends?",
      answer: "Yes, we offer flexible scheduling including weekends. Our standard operating hours are 7am-5pm, but we can arrange special times for your convenience."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-[#0D0D0D] to-[#1a1a1a] text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-gray-300">
              Find answers to common questions about Jetblack Painting services in Melbourne.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container max-w-3xl">
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
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#00AACC] text-white">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact us directly for more information about our painting services.
            </p>
            <button className="bg-white text-[#00AACC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Get In Touch
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
