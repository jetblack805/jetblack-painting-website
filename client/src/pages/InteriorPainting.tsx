import { motion } from "framer-motion";
import { CheckCircle, Phone, MapPin } from "lucide-react";

export default function InteriorPainting() {
  const benefits = [
    "Professional surface preparation and priming",
    "Premium quality paint products",
    "Expert color consultation",
    "Minimal disruption to your home",
    "Fully licensed and insured",
    "Satisfaction guaranteed"
  ];

  const faqs = [
    {
      question: "How long does interior painting take?",
      answer: "Most interior painting projects take 3-7 days depending on the size and complexity. We'll provide a detailed timeline during your free quote."
    },
    {
      question: "Do you move furniture?",
      answer: "Yes, we move and protect your furniture as part of our service. We use drop cloths and plastic sheeting to protect floors and belongings."
    },
    {
      question: "What paint do you use?",
      answer: "We use premium quality paints from leading brands like Dulux and Taubmans. We can recommend the best products for your specific needs."
    },
    {
      question: "Can you help with color selection?",
      answer: "Absolutely! Our team has extensive experience with color trends and can help you choose colors that complement your home's style."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Interior Painting Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Transform your home with expert interior painting services. From feature walls to complete room makeovers, Jetblack Painting delivers flawless finishes.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-3 rounded font-bold transition-all"
            >
              <Phone className="w-5 h-5" />
              Call for Free Quote
            </a>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-[#0D0D0D] mb-6">
              Expert Interior Painting for Melbourne Homes
            </h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              Jetblack Painting specializes in professional interior painting services across Melbourne. Whether you're looking to refresh a single room or completely transform your home's interior, our experienced team delivers exceptional results with meticulous attention to detail.
            </p>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              With over 13 years of experience in residential painting, we understand that your home is your most valuable asset. We treat every project with the care and professionalism it deserves, ensuring minimal disruption to your daily life while delivering stunning results.
            </p>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Our Interior Painting Services</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { title: "Bedroom Painting", desc: "Create a peaceful retreat with professional bedroom painting" },
                { title: "Living Room Painting", desc: "Transform your living space with expert color and finish selection" },
                { title: "Kitchen Painting", desc: "Durable, high-quality finishes for kitchen walls and cabinets" },
                { title: "Bathroom Painting", desc: "Moisture-resistant paints for humid bathroom environments" },
                { title: "Feature Walls", desc: "Bold accent walls that add character and depth to any room" },
                { title: "Ceiling Painting", desc: "Professional ceiling painting for a complete room transformation" }
              ].map((service, i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-bold text-[#0D0D0D] mb-2">{service.title}</h4>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Why Choose Us */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Why Choose Jetblack Painting for Interior Painting?</h3>
            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0 mt-1" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 bg-[#F5F5F0] p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-4">Interior Painting Services Across Melbourne</h3>
            <p className="text-gray-700 mb-6">
              We provide professional interior painting services throughout Melbourne, including:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {["Keysborough", "Brighton", "Toorak", "Mordialloc", "Hawthorn", "Mentone", "Sandringham", "Camberwell", "Bentleigh"].map((suburb) => (
                <div key={suburb} className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#00AACC]" />
                  <span className="text-gray-700">{suburb}</span>
                </div>
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
            <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b pb-6">
                  <h4 className="font-bold text-[#0D0D0D] mb-2 text-lg">{faq.question}</h4>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white p-12 rounded-lg text-center"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Interior?</h3>
            <p className="text-xl mb-6 text-gray-300">
              Get a free, no-obligation quote from Melbourne's trusted interior painting specialists.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Call 0432 077 782
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
