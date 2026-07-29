import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HastingsPainters() {
  const suburb = "Hastings";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Hastings. Specialists in weatherboard cottages, brick veneer family homes and properties exposed to Western Port's coastal conditions.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint older weatherboard homes in Hastings?`,
      answer: `Yes — Hastings has a good number of original weatherboard cottages and older township homes alongside newer brick veneer housing, and older weatherboard is a large part of our work here. We check for existing coatings, scrape back and prime any bare or damaged timber, and replace rotten boards rather than filling over them before a full exterior repaint.`
    },
    {
      question: `How do you handle the coastal exposure from Western Port?`,
      answer: `Hastings sits directly on Western Port, and homes closer to the foreshore and port take real salt air and weathering. We wash exteriors thoroughly to remove salt film before coating, use penetrating oil-based primers on exposed timber, and finish with exterior systems built for genuine coastal exposure rather than a standard inland suburban product.`
    },
    {
      question: `Do you paint brick veneer homes in Hastings?`,
      answer: `Yes. Hastings has a mix of established brick veneer homes from past decades and newer infill housing. On brick veneer, the eaves, fascias, gutters and window frames are usually what fails first, so we focus preparation there before finishing with exterior coatings matched to the substrate.`
    },
    {
      question: `Do you offer free quotes in Hastings?`,
      answer: `Yes. We service Hastings as part of our Mornington Peninsula coverage and provide free, no-obligation written quotes with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hastings Painters | Coastal & Township Homes | Jetblack Painting"
      description="House painters in Hastings — weatherboard cottages, brick veneer homes and coastal repaints on Western Port. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Somerville", link: "/painter-somerville" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Safety Beach", link: "/painter-safety-beach" }
      ]}
      localExpertise={`Jetblack Painting services Hastings as part of our Mornington Peninsula coverage. Hastings is a working port town on Western Port, with a housing mix that spans original weatherboard cottages from its early township days, established brick veneer family homes, and newer infill development. Its position directly on Western Port means properties closer to the foreshore and port face real coastal exposure, so we bring the same salt-air preparation and coating approach we use across our other bayside and Peninsula suburbs, rather than treating it as a standard inland job.`}
      propertyTypes={`Hastings' original weatherboard cottages, established brick veneer family homes, and newer infill housing, with particular attention to coastal exposure on properties nearer the foreshore and port.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Hastings`,
          body: [
            `Hastings is a Western Port coastal town with genuine working-port heritage, and its housing reflects that history — original weatherboard cottages, established brick veneer homes from past decades, and newer infill development sitting alongside each other. Jetblack Painting provides premium interior and exterior painting across Hastings, with preparation and coatings matched to both the age of the property and its exposure to the port.`,
            `Every Hastings project starts with a clear written quote and thorough preparation. Whether it's a full exterior repaint on a weatherboard cottage, an interior refresh on an established brick veneer home, or exterior work on a newer build closer to the foreshore, we deliver a durable finish and a clean, respectful site. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Coastal and Weatherboard Painting in Hastings`,
          body: [
            `Properties nearer Western Port take real salt air and weathering, so we wash every exterior thoroughly to remove salt deposits before any coating goes on, and finish with flexible, salt-resistant systems built for genuine coastal exposure. Hastings' original weatherboard cottages need particular care in preparation — checking for existing coatings, scraping back and priming bare or exposed timber with a penetrating oil-based primer, and replacing any rotten boards rather than filling over them.`,
            `On established brick veneer homes further from the foreshore, the eaves, fascias, gutters and window frames are typically what fails first, and we focus preparation there before finishing with exterior coatings built for Melbourne's heat, UV and winter damp. Newer infill builds get the same standard of preparation regardless of size, backed by the same guarantee.`,
          ],
        },
      ]}
    />
  );
}
