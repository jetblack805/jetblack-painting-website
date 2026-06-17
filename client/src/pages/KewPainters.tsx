import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KewPainters() {
  const suburb = "Kew";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Jetblack Painting",
      "telephone": "0432 077 782",
      "url": "https://jetblackpainting.manus.space",
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
    "description": `Jetblack Painting provides premium interior, exterior, and heritage painting services in Kew. Specializing in Victorian mansion restoration and contemporary home protection.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.manus.space/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialize in heritage house painting in Kew?`,
      answer: `Yes, we have extensive experience with Kew's historic properties. We use traditional techniques combined with premium modern paints to restore Victorian and Edwardian homes to their former glory while ensuring they are protected for years to come.`
    },
    {
      question: `What is your process for painting high-value residences in Kew?`,
      answer: `For Kew's prestigious homes, we follow a rigorous preparation process, including thorough cleaning, sanding, and premium priming. we use only the highest quality paints like Dulux and Taubmans to ensure a flawless, luxury finish.`
    },
    {
      question: `Are you familiar with heritage overlays in Kew?`,
      answer: `Absolutely. We understand the requirements of Boroondara Council's heritage overlays and can work with you to ensure your painting project complies with local regulations while achieving your aesthetic goals.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Kew Painters | Heritage & Modern House Painting | Jetblack Painting"
      description="Expert house painters in Kew. Specializing in heritage restoration, Victorian, and Edwardian home painting. 5-star rated, premium finishes, free quotes."
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Balwyn", link: "/painter-balwyn" },
        { name: "Abbotsford", link: "/painter-abbotsford" },
        { name: "Fairfield", link: "/painter-fairfield" },
        { name: "Deepdene", link: "/painter-deepdene" }
      ]}
      localExpertise=`As local painting experts serving Kew and the City of Boroondara, we understand the prestige and history of the area. Our team specializes in the meticulous restoration of heritage Victorian and Edwardian homes, ensuring every detail is preserved while using modern, durable paints for a long-lasting finish.`
      propertyTypes=`Kew's architectural landscape is defined by its grand Victorian and Edwardian mansions, particularly in the Sackville Ward, alongside stunning contemporary residences. We adapt our techniques to suit both historic preservation and modern architectural requirements.`
      faqs={faqs}
      schema={schema}
    />
  );
}
