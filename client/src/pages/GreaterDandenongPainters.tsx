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
    "description": `Jetblack Painting provides professional painting services across Greater Dandenong. Specializing in commercial property maintenance and residential repaints.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.manus.space/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
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
      title="Greater Dandenong Painters | Residential & Commercial Painting | Jetblack Painting"
      description="Expert painters in Greater Dandenong. Interior, exterior, and commercial painting services. Serving Keysborough, Dandenong, and surrounds. Free quotes."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Noble Park", link: "/painter-noble-park" },
        { name: "Springvale", link: "/painter-springvale" },
        { name: "Lyndhurst", link: "/painter-lyndhurst" }
      ]}
      localExpertise={`As painters serving the City of Greater Dandenong, we are committed to providing high-quality services for the region's homes and businesses. We specialize in durable finishes that withstand the local environment and enhance the value of your property.`}
      propertyTypes={`Greater Dandenong has a diverse range of properties, from established family homes and modern developments to large-scale commercial and industrial buildings. We have the expertise to handle any painting project in the area.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
