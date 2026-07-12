import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import SEOHead from "@/components/SEOHead";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "General Questions",
      items: [
        {
          q: "Do you offer free quotes?",
          a: "Yes! We provide completely free, no-obligation quotes. We'll visit your property, assess your needs, and provide a competitive price estimate."
        },
        {
          q: "Are you licensed and insured?",
          a: "Yes, Jetblack Painting is fully licensed and insured. We're committed to providing safe, professional service with complete peace of mind."
        },
        {
          q: "How long have you been in business?",
          a: "We've been serving Melbourne for over 13 years, building a reputation for quality workmanship and customer satisfaction."
        },
        {
          q: "Do you provide references?",
          a: "Absolutely! We're happy to provide references from previous customers. We also have a 5-star Google rating with hundreds of satisfied clients."
        }
      ]
    },
    {
      category: "Service Areas",
      items: [
        {
          q: "What areas do you serve?",
          a: "We serve all Melbourne suburbs including Keysborough, Brighton, Toorak, Mordialloc, Hawthorn, Mentone, Sandringham, Camberwell, Bentleigh, and the Mornington Peninsula."
        },
        {
          q: "Do you travel outside Melbourne?",
          a: "We primarily serve the Melbourne metropolitan area. For projects outside our usual service area, please contact us to discuss availability."
        },
        {
          q: "Is there a minimum project size?",
          a: "No, we welcome projects of all sizes, from small room touch-ups to large commercial projects."
        },
        {
          q: "Do you offer painting services specifically for Mordialloc's coastal homes?",
          a: "Yes, we specialize in painting homes in coastal areas like Mordialloc. We use premium weather-resistant paints and techniques to protect against salt air, humidity, and harsh UV rays, ensuring a durable and beautiful finish for your bayside property."
        },
        {
          q: "What types of homes do you paint in Mordialloc?",
          a: "In Mordialloc, we paint a variety of homes, including classic weatherboard houses, modern residences, and period homes. Our team is experienced with the diverse architectural styles found in the area, providing tailored painting solutions for each."
        },
        {
          q: "How do you protect homes from coastal conditions in Mordialloc?",
          a: "We protect Mordialloc homes from coastal conditions through meticulous surface preparation, high-quality flexible and breathable paints, and specialized techniques. Our approach prevents cracking, peeling, and fading caused by salt spray, strong winds, and sun exposure."
        }
      ]
    },
    {
      category: "Interior Painting",
      items: [
        {
          q: "How long does interior painting take?",
          a: "Most interior painting projects take 3-7 days depending on the size and complexity. We'll provide a detailed timeline during your free quote."
        },
        {
          q: "Do you move furniture?",
          a: "Yes, we move and protect your furniture as part of our service. We use drop cloths and plastic sheeting to protect floors and belongings."
        },
        {
          q: "Can you help with color selection?",
          a: "Absolutely! Our team has extensive experience with color trends and can help you choose colors that complement your home's style."
        },
        {
          q: "What paint do you use?",
          a: "We use premium quality paints from leading brands like Dulux and Taubmans. We can recommend the best products for your specific needs."
        }
      ]
    },
    {
      category: "Exterior Painting",
      items: [
        {
          q: "How often should I repaint my exterior?",
          a: "Most exterior paint jobs last 5-10 years depending on weather conditions and paint quality. We can assess your home and recommend a timeline."
        },
        {
          q: "Can you paint in all weather conditions?",
          a: "We can paint in most conditions, but avoid extreme heat, cold, or rain. We'll schedule your project during optimal weather windows."
        },
        {
          q: "Do you prepare surfaces before painting?",
          a: "Yes, proper preparation is essential. We clean, sand, and prime surfaces to ensure long-lasting, professional results."
        },
        {
          q: "What's included in exterior painting?",
          a: "Our exterior service includes surface preparation, priming, painting, and cleanup. We can also paint gutters, fascia, and trim."
        }
      ]
    },
    {
      category: "Commercial Painting",
      items: [
        {
          q: "Can you handle large commercial projects?",
          a: "Yes! We have experience with commercial painting projects of all sizes, from small offices to large retail spaces."
        },
        {
          q: "Can you work after hours?",
          a: "We can arrange after-hours or weekend work to minimize disruption to your business operations."
        },
        {
          q: "Do you provide project management?",
          a: "Yes, we handle all aspects of your commercial painting project, including scheduling, coordination, and quality control."
        }
      ]
    },
    {
      category: "Pricing & Payment",
      items: [
        {
          q: "How much does painting cost?",
          a: "Pricing depends on project size, surface condition, paint quality, and location. We provide free quotes with no hidden costs."
        },
        {
          q: "Do you offer payment plans?",
          a: "We accept various payment methods. For large projects, we can discuss payment arrangements during your quote."
        },
        {
          q: "What if I need additional work?",
          a: "We'll discuss any additional work and provide updated pricing before proceeding. No surprises!"
        }
      ]
    },
    {
      category: "Special Services",
      items: [
        {
          q: "Do you offer kitchen cabinet resurfacing?",
          a: "Yes! We specialize in luxury kitchen cabinet resurfacing with 2-pack finishes that look brand new."
        },
        {
          q: "Can you paint roof?",
          a: "Yes, we provide professional roof painting and restoration services to protect and enhance your home."
        },
        {
          q: "Do you do pre-sale property painting?",
          a: "Absolutely! We specialize in pre-sale painting to maximize your property's appeal and value."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Painting FAQs Melbourne | Jetblack Painting"
        description="Frequently asked questions about Jetblack Painting services in Melbourne, including quotes, service areas, interior, exterior and commercial painting."
        canonical="https://jetblackpainting.com/faq/"
      />
      <Navbar />
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-gray-300">
              Find answers to common questions about our painting services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container max-w-3xl">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-[#0D0D0D] mb-6">{category.category}</h2>
              <div className="space-y-4">
                {category.items.map((faq, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() =>
                        setOpenIndex(
                          openIndex === catIndex * 100 + itemIndex
                            ? null
                            : catIndex * 100 + itemIndex
                        )
                      }
                      className="w-full flex items-center justify-between p-6 bg-gray-50 hover:bg-gray-100 transition-colors text-left"
                    >
                      <h3 className="font-bold text-[#0D0D0D] text-lg">{faq.q}</h3>
                      <ChevronDown
                        className={`w-5 h-5 text-[#00AACC] transition-transform ${
                          openIndex === catIndex * 100 + itemIndex ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {openIndex === catIndex * 100 + itemIndex && (
                      <div className="p-6 bg-white border-t border-gray-200">
                        <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center mt-16"
          >
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Contact us for a free consultation and personalized answers to your painting questions.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#007A99] hover:bg-[#006B85] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
