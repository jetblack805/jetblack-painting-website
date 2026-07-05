import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MorningtonPeninsulaPainters() {
  const suburb = "Mornington Peninsula";
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
    "description": `Jetblack Painting provides premium painting services across the Mornington Peninsula. Specializing in coastal-grade protection and rural property restoration.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you service the entire Mornington Peninsula?`,
      answer: `Yes, we provide professional painting services across the entire Peninsula, from Frankston and Mount Eliza down to Sorrento and Portsea.`
    },
    {
      question: `How do you protect Peninsula homes from the ocean air?`,
      answer: `We use high-performance, coastal-grade paint systems specifically designed to resist salt corrosion and intense UV rays, ensuring your Peninsula property stays protected and looking its best.`
    },
    {
      question: `Can you paint my holiday home while I'm not there?`,
      answer: `Certainly. We often work with property owners to complete painting projects on holiday homes during the off-season, providing regular updates and ensuring a secure, professional process.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mornington Peninsula Painters | Coastal & Rural Painting | Jetblack Painting"
      description="Expert painters serving the Mornington Peninsula. Specializing in coastal home protection, rural properties, and holiday homes. Free quotes."
      neighbouringSuburbs={[
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Sorrento", link: "/painter-sorrento" }
      ]}
      localExpertise={`As specialists serving the Mornington Peninsula, we understand the diverse needs of this region. From salt-sprayed coastal residences to rural farmhouses and luxury holiday homes, we provide durable painting solutions tailored to the Peninsula's unique climate.`}
      propertyTypes={`The Mornington Peninsula features a wide range of properties, including contemporary coastal mansions, rustic rural retreats, and classic beach shacks. Our team is experienced in selecting the right materials for each environment.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
