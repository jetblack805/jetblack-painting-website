import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MentonePainters() {
  const suburb = "Mentone";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Jetblack Painting",
      "telephone": "0432 077 782",
      "url": "https://jetblackpainting.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides professional painting services in Mentone. Specializing in coastal home protection and heritage-inspired color schemes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What painting services do you provide in Mentone?`,
      answer: `We offer a full range of services in Mentone, including interior and exterior house painting, commercial painting, and specialized roof and fence restoration. We are experts in both heritage and contemporary styles.`
    },
    {
      question: `How do you handle the salt air challenges in Mentone?`,
      answer: `For Mentone's coastal properties, we use premium, salt-resistant paint systems. Our preparation involves removing all surface contaminants before applying high-performance primers and topcoats that withstand the Bayside climate.`
    },
    {
      question: `Can you help with color selection for my Mentone home?`,
      answer: `Yes! We offer professional color consultation to help you choose the perfect palette that complements Mentone's unique architectural styles and your personal taste.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mentone Painters | Expert House Painting Services | Jetblack Painting"
      description="Trusted house painters in Mentone. Interior, exterior, and commercial painting specialists. Coastal protection for Bayside homes. Free quotes."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Heatherton", link: "/painter-heatherton" }
      ]}
      localExpertise={`As painters serving the Mentone area, we are deeply connected to the local architectural history, including the influence of the Heidelberg School. We specialize in providing durable, high-quality finishes that respect the heritage of Mentone's Italian-themed streets and coastal location.`}
      propertyTypes={`Mentone's properties range from historic Victorian-era homes to mid-century residences and modern apartments. We provide tailored painting solutions for every property type, ensuring a finish that enhances the unique character of your Mentone home.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
