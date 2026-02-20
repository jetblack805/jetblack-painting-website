import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, MapPin, Award, Clock } from "lucide-react";

export default function ExteriorPainting() {
  useEffect(() => {
    // Update meta tags dynamically
    document.title = "Exterior Painting Melbourne | Professional Exterior Painters VIC";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Expert exterior painting services in Melbourne. Our skilled exterior painters transform homes and businesses with durable, high-quality finishes. Free quotes!"
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Exterior Painting Melbourne, Exterior Painters VIC"
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Expert Exterior Painting Services in Melbourne | Jetblack Painting"
      );
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Transform your home or business with Jetblack Painting's professional exterior painting services across Melbourne. Durable finishes, free quotes."
      );
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        "https://jetblackpainting.com/images/exterior-painting-social.jpg"
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute(
        "content",
        "https://jetblackpainting.com/services/exterior-painting"
      );
    }

    const ogType = document.querySelector('meta[property="og:type"]');
    if (ogType) {
      ogType.setAttribute("content", "article");
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute(
        "content",
        "Expert Exterior Painting Services in Melbourne | Jetblack Painting"
      );
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Transform your home or business with Jetblack Painting's professional exterior painting services across Melbourne. Durable finishes, free quotes."
      );
    }

    // Add Service Schema Markup
    const serviceSchema = document.querySelector('script[type="application/ld+json"]');
    if (serviceSchema) {
      serviceSchema.remove();
    }

    const newSchema = document.createElement("script");
    newSchema.type = "application/ld+json";
    newSchema.textContent = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType": "Exterior Painting",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Jetblack Painting",
        "image": "https://jetblackpainting.com/images/jetblack-painting-logo.png",
        "url": "https://jetblackpainting.com/",
        "telephone": "+61432077782",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "31 Northumberland Dr",
          "addressLocality": "Keysborough",
          "addressRegion": "VIC",
          "postalCode": "3173",
          "addressCountry": "AU"
        },
        "areaServed": {
          "@type": "State",
          "name": "Victoria"
        }
      },
      "description": "Expert exterior painting services in Melbourne. Our skilled exterior painters transform homes and businesses with durable, high-quality finishes. Free quotes!",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Jetblack Painting Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Residential Exterior Painting"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Commercial Building Exterior Painting"
            }
          }
        ]
      }
    });
    document.head.appendChild(newSchema);
  }, []);

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
              Expert Exterior Painting Services in Melbourne
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Transform your home or business with Jetblack Painting's professional exterior painting services. We deliver durable, high-quality finishes that withstand Melbourne's weather.
            </p>
            <button className="bg-[#00AACC] hover:bg-[#0088AA] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Get Your Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-[#0D0D0D]">
                Why Choose Our Exterior Painting Services?
              </h2>
              <ul className="space-y-4">
                {[
                  "Professional preparation and surface treatment",
                  "High-quality, weather-resistant paints",
                  "Experienced exterior painters with 13+ years expertise",
                  "Fully licensed and insured",
                  "5-star rated on Google",
                  "Free, no-obligation quotes"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#00AACC] mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#F5F5F0] p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#0D0D0D]">Our Process</h3>
              <div className="space-y-6">
                {[
                  { title: "Inspection", desc: "Thorough assessment of exterior surfaces" },
                  { title: "Preparation", desc: "Cleaning, sanding, and priming" },
                  { title: "Painting", desc: "Professional application of quality paint" },
                  { title: "Finishing", desc: "Final touches and quality check" }
                ].map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#00AACC] text-white flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#0D0D0D]">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[#F5F5F0]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0D0D0D]">
              Serving Melbourne & Surrounding Areas
            </h2>
            <p className="text-gray-600 text-lg">
              We provide exterior painting services across Melbourne, including Keysborough, Bayside, Mornington Peninsula, and all surrounding suburbs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Keysborough",
              "Bayside",
              "Mornington Peninsula",
              "Brighton",
              "Mordialloc",
              "Sandringham"
            ].map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <MapPin className="w-6 h-6 text-[#00AACC] mb-3" />
                <h3 className="font-bold text-[#0D0D0D]">{area}</h3>
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
              Ready to Transform Your Exterior?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Get a free, no-obligation quote from our expert exterior painters today.
            </p>
            <button className="bg-white text-[#00AACC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
              Request Free Quote
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
