import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BonbeachPainters() {
  const suburb = "Bonbeach";
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
        "addressLocality": "Mordialloc",
        "postalCode": "3195",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": { "@type": "City", "name": suburb },
    "description": `Jetblack Painting provides premium interior and exterior painting for Bonbeach homes — a bayside suburb in Melbourne's Kingston council area close to Port Phillip Bay.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-bonbeach/`
    }
  };

  const faqs = [
    {
      question: `Do you paint homes in Bonbeach?`,
      answer: `Yes. Bonbeach is within our regular Kingston council service area. The suburb has a mix of older beach houses, brick homes and newer builds close to the foreshore. We handle interior and exterior painting for all property types in the area. Call 0432 077 782 or use the quote form to book a free on-site inspection and written quote.`
    },
    {
      question: `How does living near Port Phillip Bay affect exterior painting in Bonbeach?`,
      answer: `Coastal proximity in Bonbeach means exterior paint systems are exposed to salt air, higher moisture levels and UV intensity that accelerates film breakdown compared to inland suburbs. Paint that isn't specified for these conditions can start failing within a couple of years. We select premium exterior acrylic systems rated for coastal exposure, apply them over the correct primer for each substrate, and back every exterior job with a 5-year written guarantee. Thorough surface preparation — washing down, treating any efflorescence, priming bare areas — is essential before any topcoat.`
    },
    {
      question: `Can you paint the exterior weatherboards on older Bonbeach homes?`,
      answer: `Yes. Many older homes in coastal suburbs like Bonbeach have timber weatherboard cladding that requires careful preparation — thorough sanding, filling any cracked or open joints, treating any timber that shows decay, priming bare timber properly and selecting a flexible exterior topcoat that handles the seasonal movement in timber. We assess every board before quoting and we're experienced with the prep work these homes need to get a finish that lasts. Call 0432 077 782 to arrange an inspection.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bonbeach Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Bonbeach — brick family homes and modern renovations — all in a coastal. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Edithvale", link: "/painter-edithvale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Carrum", link: "/painter-carrum" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`Bonbeach is a small coastal suburb in Melbourne's Kingston council area, located between Edithvale to the north and Carrum to the south on Port Phillip Bay. It's a sought-after suburb for buyers wanting foreshore access, with a mix of older beach houses, renovated homes and newer builds close to the water. The coastal setting is a key consideration in how we specify and prepare exterior paint systems for properties in this area.`}
      propertyTypes={`Bonbeach features older beach houses, brick family homes and modern renovations — all in a coastal environment where the correct product selection and surface preparation are critical for long-term exterior durability.`}
      localContent={[
        {
          heading: "Painters in Bonbeach for Coastal and Foreshore Homes",
          body: [
            "Bonbeach sits directly on Port Phillip Bay and the combination of salt air, moisture and UV exposure here means exterior paint systems need to be specified for the actual conditions the home faces. We've completed painting projects throughout the Kingston coastline — from Mordialloc down through Edithvale, Bonbeach and Carrum — and we understand what the coastal environment demands from a paint system.",
            "Jetblack Painting carries $10M public liability insurance, is fully licensed for residential work in Victoria, and backs every job with a 5-year written guarantee. We use premium Dulux and Taubmans products throughout. Call Jimmy on 0432 077 782 to arrange a free inspection and written quote.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Bonbeach Homes",
          body: [
            "Interior painting in Bonbeach covers all residential surface types — plaster and gyprock ceilings and walls, timber joinery, built-ins, doors and trims. We use low-VOC premium products in the correct sheen levels for each room and work around your household schedule. Our jobs are clean, efficient and backed by clear pricing from the start.",
            "Exterior repaints in Bonbeach start with a thorough site inspection and surface assessment. We wash down, treat any contamination, fill and sand, and prime correctly before applying the topcoat. For coastal homes we specify premium exterior acrylic systems with a track record in high-exposure environments — and we back every exterior job with a 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
