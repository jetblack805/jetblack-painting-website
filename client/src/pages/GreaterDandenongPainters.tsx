import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function GreaterDandenongPainters() {
  const suburb = "Greater Dandenong";
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
        "addressLocality": "Mordialloc",
        "postalCode": "3195",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides professional painting services across Greater Dandenong. Specializing in commercial property maintenance and residential repaints.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you provide painting services in Keysborough and Dandenong?`,
      answer: `Yes, we are very active in Keysborough, Dandenong, Noble Park, and all surrounding areas within the City of Greater Dandenong.`
    },
    {
      question: `What commercial painting services do you offer in Dandenong?`,
      answer: `We offer comprehensive commercial painting for warehouses, factories, offices, and retail spaces, focusing on durability and professional presentation.`
    },
    {
      question: `Are you fully insured for painting projects in Greater Dandenong?`,
      answer: `Yes, Jetblack Painting is fully insured and licensed, providing peace of mind for all our residential and commercial clients in the Greater Dandenong area.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Greater Dandenong Painters | Premium House Painting"
      description="Premium house painters in Greater Dandenong — modern developments to large-scale commercial. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Moorabbin", link: "/painter-moorabbin" }
      ]}
      localExpertise={`As painters serving the City of Greater Dandenong, we are committed to providing high-quality services for the region's homes and businesses. We specialize in durable finishes that withstand the local environment and enhance the value of your property.`}
      propertyTypes={`Greater Dandenong has a diverse range of properties, from established family homes and modern developments to large-scale commercial and industrial buildings. We have the expertise to handle any painting project in the area.`}
      faqs={faqs}
      schema={schema}
      localContent={[{"heading":"Local House Painters Across Greater Dandenong","body":["The City of Greater Dandenong covers a diverse part of Melbourne's south-east — including Dandenong, Keysborough, Springvale, Noble Park and Keysborough's growing estates — with a broad mix of established homes, modern family housing and commercial premises. Based nearby in Mordialloc, Jetblack Painting provides premium residential and commercial painting right across the area.","Every Greater Dandenong project comes with a clear written quote and thorough preparation from a reliable local team. From full house repaints to estate homes, commercial repaints and cabinetry, we deliver sharp lines, durable coatings and a professional result with minimal disruption."]},{"heading":"Residential and Commercial Painting in Greater Dandenong","body":["Greater Dandenong's established homes benefit from proper preparation — render repair, bare timber priming and durable, weather-resistant topcoats suited to Melbourne conditions — while its many newer estate homes call for crisp, seamless modern finishes. We tailor the system to each property for a lasting result.","For the area's shops, offices and industrial premises, we offer flexible commercial painting scheduled around your business, including after-hours work where needed. Whatever the project, you get considered preparation and a hard-wearing finish built to last."]}]}
    />
  );
}
