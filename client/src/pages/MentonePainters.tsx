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
      localContent={[{"heading":"Bayside House Painters Serving Mentone","body":["Mentone is a coastal Bayside suburb in the City of Kingston, known for its beach, the Como Parade shops and a mix of Edwardian and interwar homes alongside modern beachside residences. Based just up the road in Mordialloc, Jetblack Painting is a genuinely local painter delivering premium interior and exterior work built for Mentone's seaside conditions.","Every Mentone project comes with a clear written quote and thorough preparation from a tidy local team. Whether it's a full exterior repaint or a fresh interior scheme, we deliver sharp lines, durable coatings and a clean, professional result close to home."]},{"heading":"Coastal Protection and Period Care in Mentone","body":["Homes near the water in Mentone face salt air, strong UV and damp winters that break down poorly prepared paintwork. We counter that with proper salt washing, flexible primers and premium salt-resistant topcoats, so your Mentone home's finish stays protected and looks sharp for years.","Mentone's Edwardian and interwar homes need careful, period-sympathetic work — bare timber priming, render repair and colours that suit the era. From heritage homes to rendered modern builds, we match the paint system to the surface for a durable, flawless result."]}]}
    />
  );
}
