import { motion } from "framer-motion";
import { Shield, Droplets, Clock, CheckCircle } from "lucide-react";
import { useEffect } from "react";

export default function RoofPainting() {
  useEffect(() => {
    // Update meta tags
    document.title = "Roof Painting Melbourne | Professional Painters | Jetblack Painting";
    
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", "Expert roof painting services in Melbourne. Protect your home with professional roof painters. Free quotes, 5-star rated, fully licensed & insured. Call 0432 077 782.");

    // Remove existing schema
    const existingSchema = document.querySelector('script[type="application/ld+json"]');
    if (existingSchema) existingSchema.remove();

    // Add Service Schema
    const serviceSchema = document.createElement("script");
    serviceSchema.type = "application/ld+json";
    serviceSchema.textContent = JSON.stringify({
      "@context": "http://schema.org",
      "@type": "Service",
      "serviceType": "Roof Painting",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Jetblack Painting",
        "image": "https://jetblackpainting.manus.space/logo.jpg",
        "url": "https://jetblackpainting.manus.space",
        "telephone": "+61432077782",
        "email": "jimmy.jetblackpainting@gmail.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "31 Northumberland Dr",
          "addressLocality": "Keysborough",
          "addressRegion": "VIC",
          "postalCode": "3173",
          "addressCountry": "AU"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "100"
        }
      },
      "areaServed": "Melbourne, VIC, Australia",
      "description": "Professional roof painting services for residential and commercial properties across Melbourne. Expert surface preparation, premium materials, and lasting protection."
    });
    document.head.appendChild(serviceSchema);

    // Add Article Schema for this service page
    const articleSchema = document.createElement("script");
    articleSchema.type = "application/ld+json";
    articleSchema.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Roof Painting Services in Melbourne",
      "description": "Comprehensive guide to professional roof painting services in Melbourne. Learn about the benefits, process, and why Jetblack Painting is your trusted choice for roof protection.",
      "image": "https://jetblackpainting.manus.space/images/roof-painting.jpg",
      "datePublished": "2024-02-01",
      "dateModified": "2026-05-09",
      "author": {
        "@type": "Organization",
        "name": "Jetblack Painting"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Jetblack Painting",
        "logo": {
          "@type": "ImageObject",
          "url": "https://jetblackpainting.manus.space/logo.jpg"
        }
      }
    });
    document.head.appendChild(articleSchema);
  }, []);
  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Protection",
      description: "Professional roof painting protects your home from UV damage, moisture, and weather deterioration."
    },
    {
      icon: Droplets,
      title: "Water Resistance",
      description: "Quality roof coatings create a waterproof barrier, preventing leaks and extending roof life."
    },
    {
      icon: Clock,
      title: "Increased Lifespan",
      description: "Regular roof maintenance and painting can extend your roof's life by 5-10 years."
    },
    {
      icon: CheckCircle,
      title: "Aesthetic Appeal",
      description: "A fresh coat of paint improves your home's curb appeal and overall appearance."
    }
  ];

  const process = [
    {
      step: "1",
      title: "Inspection & Assessment",
      description: "We thoroughly inspect your roof to identify any damage or areas needing repair before painting."
    },
    {
      step: "2",
      title: "Cleaning & Preparation",
      description: "The roof is cleaned, debris removed, and any necessary repairs are completed."
    },
    {
      step: "3",
      title: "Priming",
      description: "We apply a quality primer to ensure optimal paint adhesion and durability."
    },
    {
      step: "4",
      title: "Professional Painting",
      description: "Two coats of premium roof paint are applied for maximum protection and appearance."
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
              Professional Roof Painting Services Melbourne
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Protect and beautify your roof with Jetblack Painting's professional roof painting services. We use premium materials and expert techniques to ensure lasting protection.
            </p>
            <a
              href="tel:0432077782"
              className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
            >
              Get Your Free Roof Painting Quote
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Benefits of Professional Roof Painting</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-lg shadow-md"
                >
                  <Icon className="w-12 h-12 text-[#00AACC] mb-4" />
                  <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="container max-w-4xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Roof Painting Process</h2>
          <div className="space-y-6">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#00AACC] text-white font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container max-w-3xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Jetblack Painting for Roof Painting?</h2>
          <div className="space-y-4">
            {[
              "13+ years of professional roof painting experience",
              "5-star Google rating from satisfied customers",
              "Fully licensed and insured for your peace of mind",
              "Premium quality roof paint and materials",
              "Expert application techniques for durability",
              "Free quotes and 24-hour response guarantee"
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-6 h-6 text-[#00AACC] flex-shrink-0" />
                <p className="text-lg text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-[#0a0a0a] to-[#1a1a1a] text-white py-16">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Roof?</h2>
          <p className="text-xl mb-8 text-gray-300">
            Get a free, no-obligation quote from Melbourne's trusted roof painting specialists.
          </p>
          <a
            href="tel:0432077782"
            className="inline-flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-8 py-4 rounded font-bold text-lg transition-all"
          >
            Call 0432 077 782
          </a>
        </div>
      </section>
    </div>
  );
}
