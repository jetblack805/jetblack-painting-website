import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function OakleighPainters() {
  const suburb = "Oakleigh";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Oakleigh homes — from post-war brick residences to modern townhouses in Melbourne's Monash council area.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-oakleigh/`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Oakleigh?`,
      answer: `Oakleigh has a diverse housing stock — post-war brick homes, 1960s and 1970s residences, an increasing number of townhouse and unit developments, and some larger family homes. We work across all of these. Older brick homes often need careful exterior preparation including crack repair, effloresence treatment and correct primer selection. Newer renders and cladded surfaces need a different approach. We assess every property before quoting so the specification is right for what's actually there.`
    },
    {
      question: `Do you paint townhouses and units in Oakleigh?`,
      answer: `Yes. Townhouses, villa units and older brick flats are common in Oakleigh and we paint them regularly — both interior and exterior. For body corporate or strata properties we can work with the owners corporation or individual lot owners depending on the scope. For interior townhouse painting, we typically work room by room to minimise disruption. Call 0432 077 782 to discuss your specific project.`
    },
    {
      question: `How do I get a painting quote in Oakleigh?`,
      answer: `Call 0432 077 782 or fill in the quote form on this page. We'll arrange a time to inspect the property in person and provide a detailed written quote covering scope, product specification, estimated timeline and price. We don't estimate blind — we quote based on what we see on site. There are no call centres; you deal with the painter directly.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Oakleigh Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Premium interior and exterior painting for Oakleigh's brick homes, townhouses and renovations. Fully licensed, 5-year guarantee, free written quotes.`}
      neighbouringSuburbs={[
        { name: "Chadstone", link: "/painter-chadstone" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`Oakleigh sits in Melbourne's Monash council area, bordered by Chadstone to the north, Murrumbeena to the west and Huntingdale to the east. It's a well-established suburb with a vibrant retail and café strip and a mix of residential property types from post-war originals to modern infill development. We service Oakleigh as part of our regular coverage across Monash and Kingston council areas.`}
      propertyTypes={`Oakleigh's housing stock spans post-war brick homes, 1960s–1980s residences, townhouses and unit complexes — all requiring correct surface preparation and quality coating systems for lasting results.`}
      localContent={[
        {
          heading: "Painters in Oakleigh for Homes and Townhouses",
          body: [
            "Oakleigh is a busy, connected suburb with a housing stock that ranges from well-maintained post-war brick homes to newer infill townhouse developments. These different property types need different approaches — older brick homes need proper assessment for surface condition before any coating, while rendered townhouses need the right primer system to ensure adhesion on new or previously painted render. We don't take a one-size approach: every property is inspected before we quote.",
            "Jetblack Painting works in Oakleigh and the surrounding Monash council suburbs. We use premium Dulux and Taubmans products, prepare every surface correctly, and back every job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to arrange an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Oakleigh Homes",
          body: [
            "Interior painting in Oakleigh covers the full range of residential surfaces — plaster and gyprock ceilings and walls, timber joinery, doors, built-ins and trims. We use premium low-VOC products in the correct finish levels, work efficiently to minimise disruption, and leave the property clean on completion. We work with both owner-occupiers and landlords managing rental properties.",
            "Exterior repaints in Oakleigh require proper preparation before any topcoat is applied. We wash, patch, prime and apply a premium exterior acrylic system rated for Melbourne conditions. Every exterior job is backed by a 5-year written guarantee and covered by $10M public liability insurance.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
