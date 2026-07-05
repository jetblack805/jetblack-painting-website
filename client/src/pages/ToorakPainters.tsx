import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ToorakPainters() {
  const suburb = "Toorak";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Luxury House Painting Services in ${suburb}`,
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
    "description": `Jetblack Painting provides high-end interior and exterior painting for Toorak's prestigious mansions and modern luxury residences.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}`
    }
  };

  const faqs = [
    {
      question: `What experience do you have with Toorak's luxury mansions?`,
      answer: `We have extensive experience working on some of Toorak's most prestigious properties. Our team specializes in high-end finishes, including ornate ceiling restoration, fine timber work, and premium 2-pack finishes that meet the exacting standards of Toorak homeowners.`
    },
    {
      question: `Do you offer colour consulting for high-end Toorak homes?`,
      answer: `Yes, we provide professional colour consultation services tailored to Toorak's unique architectural styles. Whether you're looking for a classic heritage palette for a Victorian mansion or a sophisticated modern scheme for a contemporary residence, we help you choose the perfect finish.`
    },
    {
      question: "How do you ensure minimal disruption during a large painting project in Toorak?",
      answer: "We understand the importance of privacy and cleanliness. Our team follows a strict protocol for site management, using high-quality drop sheets, dust extraction systems, and organized workflows to ensure your Toorak home remains clean and functional throughout the project."
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Toorak Painters | Luxury House Painting Specialists | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Specializing in high-end interior and exterior painting for luxury mansions and modern residences. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise={`We understand ${suburb}'s prestigious properties, from grand Victorian mansions to architecturally-designed modern homes. Our team has extensive experience with high-end finishes, heritage colour schemes, and the premium materials that ${suburb} homeowners expect.`}
      propertyTypes={`${suburb}'s grand Victorian mansions, period homes, and architecturally-designed luxury residences require a superior level of craftsmanship.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
