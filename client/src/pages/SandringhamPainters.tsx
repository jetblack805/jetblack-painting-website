import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SandringhamPainters() {
  const suburb = "Sandringham";
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
    "description": `Jetblack Painting provides premium coastal painting services in Sandringham. Specializing in salt-air protection and weatherboard home restoration.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `How do you protect Sandringham homes from the coastal environment?`,
      answer: `In Sandringham, we use specialized coastal-grade paints and a multi-step preparation process. This includes thorough pressure washing to remove salt deposits, followed by premium flexible primers and weather-resistant topcoats designed for Bayside conditions.`
    },
    {
      question: `What experience do you have with weatherboard homes in Sandringham?`,
      answer: `We specialize in the restoration and painting of weatherboard properties common in Sandringham. Our process ensures that old paint is safely removed, wood is repaired where necessary, and high-quality flexible paints are applied to prevent cracking and peeling.`
    },
    {
      question: `Do you offer commercial painting for businesses in Sandringham?`,
      answer: `Yes, we provide professional commercial painting services for shops and offices along Sandringham's commercial strips, ensuring high-quality results with minimal disruption to your business operations.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Sandringham Painters | Coastal House Painting Specialists | Jetblack Painting"
      description="Professional house painters in Sandringham. Coastal-grade protection for Bayside homes. Interior, exterior, and commercial painting. Free quotes."
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Black Rock", link: "/painter-black-rock" },
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Highett", link: "/painter-highett" },
        { name: "Cheltenham", link: "/painter-cheltenham" }
      ]}
      localExpertise={`Serving the Sandringham community and the wider Bayside area, we are experts in protecting coastal homes. We understand the unique challenges of Sandringham's environment, from salt air corrosion to intense UV exposure, and use specialized products to ensure your property remains beautiful and protected.`}
      propertyTypes={`Sandringham features a mix of classic weatherboard beach cottages, Edwardian homes, and modern bayside residences. Our team is skilled in tailoring our painting methods to suit each unique property type found along the Sandringham coastline.`}
      localContent={[
        {
          heading: "Bayside House Painters Serving Sandringham",
          body: [
            "Sandringham is a prized Bayside suburb where classic weatherboard beach cottages, Edwardian homes and modern coastal residences overlook Port Phillip Bay around Sandringham Beach, the yacht club and Royal Avenue. Jetblack Painting provides premium interior and exterior painting built for this seaside setting — protecting Sandringham homes against salt air and sun while delivering a clean, lasting finish.",
            "Based nearby in Mordialloc, we're a genuinely local Bayside painter who knows Sandringham's homes and coastal conditions. Every project comes with a clear written quote, thorough preparation and a tidy, respectful team, whether it's a full exterior repaint or a refreshed interior scheme.",
          ],
        },
        {
          heading: "Coastal Painting and Weatherboard Care in Sandringham",
          body: [
            "Homes near the water in Sandringham are exposed to relentless salt air, UV and damp winters that quickly break down paintwork that hasn't been prepared properly. We use thorough salt washing, flexible primers and premium salt-resistant topcoats so your Sandringham home's finish stays protected and looks sharp for years.",
            "Weatherboard is everywhere along the Sandringham coastline, and coastal timber needs particular attention — bare timber priming, careful filling and sharp caulking to lock out moisture. From heritage beach cottages to rendered modern homes, we match the paint system to the surface for a durable, flawless result.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
