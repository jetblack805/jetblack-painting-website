import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BrightonPainters() {
  const suburb = "Brighton";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Premium House Painting Services in ${suburb}`,
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
    "description": `Jetblack Painting offers luxury interior and exterior painting for Brighton's heritage and modern homes. Expert colour consulting and premium finishes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}`
    }
  };

  const faqs = [
    {
      question: `Do you specialize in Brighton's heritage Victorian and Edwardian homes?`,
      answer: `Yes, we are specialists in restoring and painting Brighton's iconic heritage properties. We understand the specific requirements for Victorian and Edwardian homes, including lead paint safety, meticulous timber restoration, and authentic heritage colour schemes.`
    },
    {
      question: `How do you handle painting for Brighton's beachside properties?`,
      answer: `Brighton's coastal location requires premium protection. We use high-performance, salt-resistant coatings and specialized application techniques to ensure your beachside home remains protected from the elements while maintaining its luxury aesthetic.`
    },
    {
      question: "Are your painters licensed and insured to work on luxury Brighton residences?",
      answer: "Absolutely. All our painters are fully licensed, and we carry $20 million in public liability insurance. We pride ourselves on our professional conduct and respect for the high-end properties we work on in Brighton."
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Brighton Painters | Luxury House Painting Services | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Specializing in heritage restoration, luxury interior painting, and coastal exterior protection. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise={`We understand ${suburb}'s unique properties, from Victorian heritage homes to modern beachside residences. Our team knows the local climate challenges including salt air and coastal weather, and can recommend the best paint finishes and colours for ${suburb} homes.`}
      propertyTypes={`${suburb}'s heritage homes, modern beachside residences, and period properties require specialized care and premium materials.`}
      faqs={faqs}
      schema={schema}
    />
  );
}
