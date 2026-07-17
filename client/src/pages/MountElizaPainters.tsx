import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MountElizaPainters() {
  const suburb = "Mount Eliza";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Mount Eliza. Specialists in prestige residential repaints for large homes on generous blocks, bay-view properties and established estates in Mount Eliza's semi-rural setting.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint large prestige homes in Mount Eliza?`,
      answer: `Yes — prestige and large-scale residential repaints are a core part of what we do. Mount Eliza homes typically sit on generous blocks with substantial exterior surface areas, established gardens that require careful protection, and complex rooflines or rendered feature facades that require careful preparation. We have the team and equipment to handle full exterior repaints on large properties efficiently without shortcuts on preparation. Every job is scoped in detail before we quote, so the price you receive reflects the actual work required.`
    },
    {
      question: `How do you handle bay-view and coastal properties in Mount Eliza?`,
      answer: `Properties with direct bay views or close to the Mount Eliza foreshore are exposed to elevated salt air from Port Phillip Bay, which degrades paint film faster than inland locations. We treat every coastal-exposed exterior in Mount Eliza with a thorough pressure wash to remove salt deposits, premium flexible primers rated for coastal conditions, and topcoats from Dulux Weathershield or Taubmans All Weather with proven salt resistance. Our 5-year written workmanship guarantee applies to every exterior job in Mount Eliza.`
    },
    {
      question: `Do you offer free quotes in Mount Eliza?`,
      answer: `Yes. We provide free, no-obligation written quotes across Mount Eliza and the surrounding Mornington Peninsula area, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mount Eliza Painters | Prestige & Coastal Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for prestige homes, large blocks and bay-view properties across Mount Eliza. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" }
      ]}
      localExpertise={`Jetblack Painting services Mount Eliza as part of our Mornington Peninsula coverage. Mount Eliza is an exclusive semi-rural suburb at the northern tip of the Peninsula — known for prestige homes on large, well-established blocks, bay-view properties along the foreshore escarpment, and a quiet, leafy character that attracts owner-occupiers committed to maintaining their properties properly. We understand the specific demands of painting in Mount Eliza: large exterior surface areas, complex architectural detailing on prestige homes, coastal salt air on bay-facing properties, and established gardens that require careful protection during the painting process.`}
      propertyTypes={`Mount Eliza's housing stock is dominated by prestige owner-occupied homes on generous blocks — ranging from established 1970s and 1980s brick and rendered homes to contemporary architect-designed builds and bay-view properties along the foreshore escarpment, all requiring careful preparation and premium coatings.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Mount Eliza`,
          body: [
            `Mount Eliza is one of the Mornington Peninsula's most exclusive suburbs — a semi-rural setting with prestige homes on generous blocks, bay views from the foreshore escarpment, and a resident population that expects a high standard of finish. Jetblack Painting provides premium interior and exterior painting across Mount Eliza, with a team that knows the suburb's property types, coating requirements and the care needed around established gardens and high-value finishes.`,
            `Every Mount Eliza project comes with a detailed written quote, thorough preparation and a professional, tidy team. Whether it's a full exterior repaint on a large prestige home, a heritage-style colour scheme for an established property, or a contemporary interior refresh, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Prestige and Coastal Painting in Mount Eliza`,
          body: [
            `Large homes in Mount Eliza often have complex exterior profiles — rendered feature facades, timber detailing, extensive eaves, and multi-level sections — that require proper preparation and the right products at every stage. We don't skip steps: high-pressure washing, filling and flexing cracks, priming bare render, and applying the correct topcoat for each surface type are all included in every quote.`,
            `Bay-facing and foreshore-adjacent properties in Mount Eliza are exposed to salt air from Port Phillip Bay, which accelerates paint failure without the right preparation and products. We use the same approach as we do for our coastal Bayside and Kingston work — thorough salt washing, flexible primers, and premium salt-resistant topcoats — ensuring the paint system performs as long as it should in a coastal environment.`,
          ],
        },
      ]}
    />
  );
}
