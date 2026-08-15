import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function AspendalePainters() {
  const suburb = "Aspendale";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Specialist Bayside painters with 13+ years experience and a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-aspendale/`
    }
  };

  const faqs = [
    {
      question: `Who are the best painters in Aspendale?`,
      answer: `Jetblack Painting is the most highly rated local painting company serving Aspendale. Based in nearby Mordialloc, owner Jimmy Demirci has over 13 years of experience painting homes across Aspendale and the surrounding Bayside area. We hold 5-star Google reviews, carry $10M public liability insurance, and back every job with a 5-year written workmanship guarantee.`
    },
    {
      question: `Do you paint interiors and exteriors in Aspendale?`,
      answer: `Yes — we offer a full range of painting services in Aspendale including interior house painting, exterior house painting, roof and fence painting, and kitchen cabinet resurfacing. We also handle commercial painting for local businesses and body corporate projects in the area.`
    },
    {
      question: `How do I get a painting quote in Aspendale?`,
      answer: `Call Jimmy directly on 0432 077 782 or email jimmy@jetblackpainting.com. He'll arrange a time to visit your Aspendale property, assess the work and provide a free, detailed written quote — usually within 24–48 hours of the site visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Aspendale Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Aspendale — mid-century brick veneer and contemporary townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Kingston", link: "/painter-kingston" },
      ]}
      localExpertise={`Aspendale is a quiet coastal suburb in the City of Kingston, bordering Mordialloc on its northern edge. Jetblack Painting is based right in Mordialloc — our home suburb — which makes Aspendale part of our core local area. Jimmy Demirci has been painting Aspendale homes for over 13 years and knows the suburb's weatherboard beach houses, 1950s brick homes and modern townhouses inside out.`}
      propertyTypes={`Aspendale's housing stock is a mix of classic weatherboard homes, mid-century brick veneer, and contemporary townhouses and units — many within a short walk of the beach. Coastal properties here need surface preparation and paint systems designed to handle the bay environment: salt washing, flexible primers and weather-resistant topcoats.`}
      localContent={[
        {
          heading: "Aspendale Painting — Your Local Painter Is in Mordialloc",
          body: [
            "When you hire Jetblack Painting in Aspendale, you're hiring a company that's genuinely local. Our base in Mordialloc is right on your doorstep, so we can respond quickly to quote requests, get on site promptly and deliver results without the delays you might get from a larger company based further away.",
            "Every job in Aspendale is personally managed by owner Jimmy Demirci. He visits the site to scope the work, stays in contact during the project and does the final walkthrough before we leave. You're dealing with the owner from first call to last brushstroke.",
          ],
        },
        {
          heading: "Quality Coastal Painting for Aspendale Homes",
          body: [
            "Salt air, UV and coastal damp are hard on paintwork. We see the results of poor preparation and cheap paint on Aspendale homes regularly — peeling weatherboards, chalking render, rusting metal trim. Our process is built specifically to prevent this: thorough surface preparation, premium flexible primers and topcoats from Dulux and Taubmans, and careful caulking and sealing of all joints.",
            "Every job we do comes with a 5-year written workmanship guarantee and $10M public liability insurance. We treat your Aspendale home with the same care we'd want for our own. Call 0432 077 782 for a free written quote — we're usually on site within a few days.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
