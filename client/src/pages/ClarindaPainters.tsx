import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ClarindaPainters() {
  const suburb = "Clarinda";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `House Painting Services in ${suburb}`,
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
    "areaServed": { "@type": "City", "name": suburb },
    "description": `Jetblack Painting provides premium interior and exterior painting for Clarinda homes — a quiet residential suburb in Melbourne's Kingston council area.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-clarinda/`
    }
  };

  const faqs = [
    {
      question: `Do you paint homes in Clarinda?`,
      answer: `Yes. Clarinda is within our regular Kingston council service area. The suburb is predominantly post-war brick and 1960s–1980s residential housing, with some townhouse and renovation activity. We handle interior and exterior painting for all residential property types in Clarinda. Call 0432 077 782 or use the quote form to book a free on-site inspection and written quote.`
    },
    {
      question: `What does a typical exterior repaint involve for a Clarinda home?`,
      answer: `A proper exterior repaint starts with an on-site inspection to assess the current paint condition, identify any adhesion failure, cracking, efflorescence or moisture issues, and determine what preparation is needed. We then wash down, patch, prime (using the correct primer for the substrate — brick, render, timber or other) and apply a premium exterior acrylic topcoat. Every exterior job is backed by our 5-year written guarantee and covered by $10M public liability insurance.`
    },
    {
      question: `Do you do interior painting for rental properties in Clarinda?`,
      answer: `Yes. We work with landlords and property managers regularly across the Kingston and surrounding areas. Rental properties often need a hardwearing, easy-to-clean interior finish, and we can recommend the right product systems for high-traffic areas — washable wall paints, durable trim finishes and hard-wearing floor coatings if needed. We can work around tenancy schedules and provide the documentation landlords need. Call 0432 077 782 to discuss.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Clarinda Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Quality interior and exterior painting for Clarinda homes in Kingston council. Fully licensed, 5-year guarantee, free written quotes.`}
      neighbouringSuburbs={[
        { name: "Heatherton", link: "/painter-heatherton" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Oakleigh", link: "/painter-oakleigh" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`Clarinda is a quiet residential suburb in Melbourne's Kingston council area, bordered by Heatherton to the south, Cheltenham to the west and Oakleigh to the north. It's primarily a post-war brick suburb with a mix of 1950s–1980s homes on standard residential blocks. We service Clarinda as part of our broader Kingston council coverage, alongside nearby Heatherton, Cheltenham and Moorabbin.`}
      propertyTypes={`Clarinda is predominantly post-war brick housing from the 1950s to 1980s, with some newer townhouse infill — properties that typically require careful exterior assessment and correct primer selection before repainting.`}
      localContent={[
        {
          heading: "Painters in Clarinda Covering Kingston Council",
          body: [
            "Clarinda's housing stock is solid and well-maintained — brick homes from the post-war era that represent some of Melbourne's most durable residential construction. Exterior painting on these homes requires the right approach: testing adhesion on previously painted surfaces, treating any efflorescence, patching cracks in render or mortar joints, and applying the correct primer before topcoating. Skipping the preparation leads to adhesion failure within a few years, even with a premium topcoat.",
            "Jetblack Painting services Clarinda alongside Heatherton, Cheltenham, Moorabbin and the wider Kingston council area. We're fully licensed for residential painting in Victoria, carry $10M public liability insurance, and back every job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to arrange a free inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Clarinda Homes",
          body: [
            "Interior painting in Clarinda covers all residential surfaces — ceilings, walls, timber joinery, doors, trims and built-ins. We use premium Dulux and Taubmans products in the correct finish levels for each room and surface type. We schedule around your household and leave the property clean on completion.",
            "For exterior repaints, we conduct a thorough inspection before quoting, identify exactly what preparation is required, and specify the correct product system for the substrates on the home. The preparation — washing, patching, priming — is the foundation of a finish that holds. Every exterior job is backed by our 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
