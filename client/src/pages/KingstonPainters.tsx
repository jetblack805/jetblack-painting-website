import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KingstonPainters() {
  const suburb = "Kingston";
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
    "description": `Jetblack Painting provides professional painting services across the City of Kingston. Specializing in residential repaints and commercial property maintenance.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.manus.space/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Which suburbs in Kingston do you service?`,
      answer: `We service all suburbs within the City of Kingston, including Moorabbin, Cheltenham, Mentone, Mordialloc, Parkdale, and Chelsea.`
    },
    {
      question: `Do you offer commercial painting in Kingston?`,
      answer: `Yes, we provide professional commercial painting for offices, retail spaces, and industrial facilities throughout the Kingston area.`
    },
    {
      question: `How long does it take to paint a typical Kingston home?`,
      answer: `Most residential projects are completed within 5-10 working days, depending on the size and scope of the work. We provide a detailed timeline with every quote.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Kingston Painters | Professional House Painting | Jetblack Painting"
      description="Trusted house painters in the City of Kingston. Interior, exterior, and commercial painting services. Servicing all Kingston suburbs. Free quotes."
      neighbouringSuburbs={[
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Chelsea", link: "/painter-chelsea" }
      ]}
      localExpertise=`Serving the diverse City of Kingston, we provide professional painting services for residential and commercial properties. From the coastal suburbs to the industrial hubs, we understand the local needs and deliver high-quality, durable results.`
      propertyTypes=`Kingston features a wide variety of properties, including suburban family homes, coastal residences, and commercial warehouses. Our team is equipped to handle projects of all scales across the Kingston area.`
      faqs={faqs}
      schema={schema}
    />
  );
}
