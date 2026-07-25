import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function EdithvalePainters() {
  const suburb = "Edithvale";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Edithvale homes — a coastal suburb in Melbourne's Kingston council area on Port Phillip Bay.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-edithvale/`
    }
  };

  const faqs = [
    {
      question: `Do you paint homes in Edithvale?`,
      answer: `Yes. Edithvale is part of our regular Kingston council service area. The suburb has a mix of older coastal homes, brick residences and more recent renovations close to the foreshore and wetlands. We handle interior and exterior painting for all property types — from a single-room refresh to a full house repaint. Call 0432 077 782 or use the quote form to book a free on-site inspection.`
    },
    {
      question: `Does the coastal location affect exterior painting in Edithvale?`,
      answer: `Yes — Edithvale sits on Port Phillip Bay and the coastal microclimate accelerates exterior paint degradation if the coating system isn't specified correctly. Salt air, moisture and UV all work harder on paint films in foreshore locations. We specify premium exterior acrylic systems rated for coastal exposure, apply them over the correct primer for each substrate, and back every exterior job with a 5-year written guarantee. Preparation — washing, treating contamination, priming bare surfaces — is as important as the topcoat.`
    },
    {
      question: `What are typical painting costs for an Edithvale home?`,
      answer: `Costs vary based on property size, storey count, scope and surface condition. An exterior repaint on a typical Edithvale home generally ranges from $4,000–$10,000 depending on size and preparation required. Interior projects vary by room count and finish level. We provide a detailed written quote after an on-site inspection — no guesswork. Call 0432 077 782 to arrange.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Edithvale Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Edithvale — brick family residences. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Carrum", link: "/painter-carrum" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`Edithvale is a coastal suburb in Melbourne's Kingston council area, located between Chelsea to the north and Bonbeach to the south on Port Phillip Bay. The Edithvale-Seaford Wetlands border the suburb to the east, giving it a distinctive coastal and wetland character. The foreshore proximity means exterior paint systems face additional stress from salt air and moisture — we're experienced with coastal painting across this part of the Kingston coastline.`}
      propertyTypes={`Edithvale features a mix of older coastal homes, brick family residences and renovation projects in a suburb that continues to attract buyers seeking foreshore access at competitive prices.`}
      localContent={[
        {
          heading: "Painters in Edithvale for Coastal Homes",
          body: [
            "Edithvale's location on Port Phillip Bay means exterior painting here requires more than a standard approach. Salt air deposits on surfaces, moisture levels are higher near the foreshore, and UV load is significant through Melbourne's summer months. Paint systems that perform well inland can fail prematurely in coastal locations if they're not specified for the exposure. We assess every surface, treat contamination before priming, and specify topcoat systems with a verified track record in coastal conditions.",
            "Jetblack Painting services Edithvale as part of our Kingston council coverage. We carry $10M public liability insurance, are fully registered for residential painting work in Victoria, and back every job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to arrange an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Edithvale Homes",
          body: [
            "For Edithvale interiors, we work with all surface types — plaster and gyprock ceilings and walls, timber joinery, doors, trims and built-ins. We use premium Dulux and Taubmans products in the appropriate finish levels for each area, keep the work schedule around your household, and leave the property clean on completion.",
            "Exterior repaints in Edithvale start with a thorough wash-down and surface inspection. We identify any adhesion failure, efflorescence, surface contamination or substrate defects before we prepare and prime. After the correct preparation phase, we apply a premium exterior acrylic topcoat rated for Melbourne's coastal conditions — backed by our 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
