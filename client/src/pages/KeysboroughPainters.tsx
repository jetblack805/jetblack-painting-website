import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, Star, MapPin, Phone } from "lucide-react";

export default function KeysboroughPainters() {
  useEffect(() => {
    // Update meta tags dynamically
    document.title = "Keysborough Painters | Expert House & Commercial Painting Services";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Top-rated painters in Keysborough, VIC. Jetblack Painting offers professional interior, exterior, and commercial painting services in Keysborough and surrounding suburbs. Free quotes!"
      );
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute(
        "content",
        "Keysborough Painters, House Painting Keysborough, Commercial Painting Keysborough"
      );
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute(
        "content",
        "Jetblack Painting | Your Local Keysborough Painters"
      );
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute(
        "content",
        "Jetblack Painting provides expert house & commercial painting services in Keysborough, VIC. Local, reliable, and 5-star rated. Get a free quote!"
      );
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute(
        "content",
        "https://jetblackpainting.com/images/keysborough-painters-social.jpg"
      );
    }

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute(
        "content",
        "https://jetblackpainting.com/keysborough-painters"
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
        "Jetblack Painting | Your Local Keysborough Painters"
      );
    }

    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute(
        "content",
        "Jetblack Painting provides expert house & commercial painting services in Keysborough, VIC. Local, reliable, and 5-star rated. Get a free quote!"
      );
    }

    // Add Local Landing Page Schema Markup
    const serviceSchema = document.querySelector('script[type="application/ld+json"]');
    if (serviceSchema) {
      serviceSchema.remove();
    }

    const newSchema = document.createElement("script");
    newSchema.type = "application/ld+json";
    newSchema.textContent = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType": "House Painting",
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
          "@type": "City",
          "name": "Keysborough"
        }
      },
      "description": "Top-rated painters in Keysborough, VIC. Jetblack Painting offers professional interior, exterior, and commercial painting services in Keysborough and surrounding suburbs. Free quotes!"
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
              Keysborough Painters You Can Trust
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Jetblack Painting provides expert house & commercial painting services in Keysborough, VIC. Local, reliable, and 5-star rated.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#00AACC] hover:bg-[#0088AA] text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                Get Your Free Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#0D0D0D] text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call 0432 077 782
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-[#0D0D0D]">
              Why Keysborough Residents Choose Jetblack Painting
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              We're your local Keysborough painters with a proven track record of excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Star,
                title: "5-Star Rated",
                desc: "Consistently excellent reviews from Keysborough customers"
              },
              {
                icon: MapPin,
                title: "Local Expertise",
                desc: "Based in Keysborough with deep knowledge of local properties"
              },
              {
                icon: Check,
                title: "Licensed & Insured",
                desc: "Fully licensed and insured for your peace of mind"
              },
              {
                icon: Phone,
                title: "Quick Response",
                desc: "Fast turnaround on quotes and scheduling"
              },
              {
                icon: Check,
                title: "Free Quotes",
                desc: "No-obligation quotes for all Keysborough projects"
              },
              {
                icon: Check,
                title: "13+ Years Experience",
                desc: "Trusted by hundreds of Keysborough families"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#F5F5F0] p-6 rounded-lg"
              >
                <item.icon className="w-8 h-8 text-[#00AACC] mb-4" />
                <h3 className="font-bold text-[#0D0D0D] mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services in Keysborough */}
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
              Painting Services Available in Keysborough
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Interior Painting Keysborough",
                desc: "Transform your home's interior with professional painting services"
              },
              {
                title: "Exterior Painting Keysborough",
                desc: "Boost curb appeal with expert exterior repaints"
              },
              {
                title: "Commercial Painting Keysborough",
                desc: "Professional painting for offices, retail, and warehouses"
              },
              {
                title: "Pre-Sale Property Painting",
                desc: "Maximize your property's value before selling"
              },
              {
                title: "Rental Property Painting",
                desc: "Fast turnaround for landlords and property managers"
              },
              {
                title: "Roof & Fence Painting",
                desc: "Complete exterior transformation services"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-bold text-[#0D0D0D] mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.desc}</p>
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
              Get Your Free Keysborough Painting Quote Today
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Contact our local Keysborough painters for a free, no-obligation quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-[#00AACC] hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors">
                Request Free Quote
              </button>
              <button className="border-2 border-white hover:bg-white hover:text-[#00AACC] px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                0432 077 782
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
