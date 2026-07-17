import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BlackRockPainters() {
  const suburb = "Black Rock";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Black Rock homes — from elegant period residences to contemporary coastal properties along Port Phillip Bay.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-black-rock/`
    }
  };

  const faqs = [
    {
      question: `What kinds of homes do you paint in Black Rock?`,
      answer: `Black Rock is one of Melbourne's most prestigious bayside suburbs, featuring a mix of substantial period homes, luxury architect-designed residences and high-end renovations on large blocks close to the foreshore. We work across all property types — from heritage-listed homes with intricate timber detailing to contemporary builds with render, Colorbond and mixed cladding systems. Each project gets a tailored preparation and coating approach matched to the specific substrates and the home's coastal exposure.`
    },
    {
      question: `Do you paint exteriors on Black Rock homes exposed to salt air and coastal weather?`,
      answer: `Yes — exterior painting in coastal suburbs like Black Rock requires specific product selection and preparation. Salt air accelerates paint film failure if the system isn't rated for the exposure. We wash down surfaces thoroughly, treat any efflorescence or surface contamination, and specify premium exterior acrylic or elastomeric systems with verified durability for coastal conditions. All exterior work is backed by our 5-year written guarantee and covered by $10M public liability insurance.`
    },
    {
      question: `How do I get a painting quote for my Black Rock property?`,
      answer: `Call us on 0432 077 782 or fill in the quote form on this page. We'll arrange a time to inspect the property in person — we don't quote blind from photos or rough measurements. After the inspection you'll receive a detailed written quote covering scope, product specification, timeline and price. There's no obligation and no call centre — you deal with the painter directly.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Black Rock Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Premium interior and exterior painting for Black Rock's prestige residences, period homes and coastal properties. Fully licensed, 5-star rated, free quotes.`}
      neighbouringSuburbs={[
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Mentone", link: "/painter-mentone" },
      ]}
      localExpertise={`Black Rock sits on Port Phillip Bay in Melbourne's Bayside council area, bordered by Sandringham to the north and Beaumaris to the south. It's one of Melbourne's most exclusive bayside suburbs — large blocks, prestige homes and direct foreshore access. The coastal microclimate means salt air, UV and seasonal moisture are constant factors in how exterior paint systems perform, and our team understands what's required to deliver a finish that holds up long-term on these properties.`}
      propertyTypes={`Black Rock property ranges from grand period residences and architect-designed contemporary homes to high-end renovations on large blocks — all requiring careful preparation and premium coating systems suited to the coastal environment.`}
      localContent={[
        {
          heading: "Painters in Black Rock for Prestige and Coastal Homes",
          body: [
            "Black Rock carries a reputation as one of Melbourne's premier bayside suburbs, and the homes reflect that — substantial, well-maintained properties where the quality of a paint finish is immediately apparent. Whether it's a heritage timber Queenslander, a rendered brick family home, or a contemporary architectural design with mixed cladding, we approach every surface correctly: identifying what's there, preparing it properly, and specifying a product system that performs.",
            "Jetblack Painting has worked on prestige properties throughout the Bayside area. We use premium Dulux and Taubmans products — not trade-grade filler products — and we back every job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to arrange an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Black Rock Properties",
          body: [
            "For Black Rock interiors, we handle all surface types: original plaster ceilings and cornices, gyprock walls, timber joinery, built-ins and feature walls. We use premium low-VOC products in the correct sheen levels for each space, work around your household schedule, and leave the property in excellent condition. We're experienced with the open-plan layouts and high-spec finishes common in renovated homes throughout the suburb.",
            "Black Rock exteriors face salt air from the bay, strong summer UV and Melbourne's variable winters. These conditions accelerate film failure if the paint system isn't specified correctly. We assess every surface for adhesion, contamination and defects before we touch a brush, apply the correct primer for the substrate, and topcoat with verified exterior acrylic systems. The result is a finish that looks good and protects the home.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
