import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BaysidePainters() {
  const suburb = "Bayside";
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
    "description": `Jetblack Painting provides expert coastal painting services across the Bayside region. Specializing in salt-air protection and luxury property finishes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you cover all Bayside suburbs — Brighton, Hampton, Sandringham, Beaumaris and Black Rock?`,
      answer: `Yes. Jetblack Painting works right across the City of Bayside — Brighton, Hampton, Sandringham, Beaumaris and Black Rock — as well as the Kingston coastline from Mentone to Mordialloc. We're based in Mordialloc, so the whole Bayside and Kingston coastal strip is home territory for us.`
    },
    {
      question: `How do salt air and coastal conditions affect exterior paintwork on Bayside homes?`,
      answer: `Salt air deposits on surfaces, accelerates rust on metal trim and breaks down paint film adhesion far faster than in inland suburbs. Without proper preparation and coastal-rated products, an exterior paint job near Port Phillip Bay can start failing within 2–3 years. We counter this with thorough pressure washing to remove salt deposits, premium flexible primers, and topcoats from Dulux and Taubmans specifically rated for salt air and UV exposure — backed by a 5-year written guarantee.`
    },
    {
      question: `Do you offer free quotes across the Bayside area?`,
      answer: `Yes. We provide free, no-obligation written quotes across all Bayside and Kingston coastal suburbs, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bayside Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Bayside — Edwardian period homes in Brighton. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Black Rock", link: "/painter-black-rock" },
        { name: "Beaumaris", link: "/painter-beaumaris" }
      ]}
      localExpertise={`Based in Mordialloc, right at the southern edge of the Bayside council area, we're a genuinely local painter for the whole Bayside coastline. We've painted homes in Brighton, Hampton, Sandringham, Beaumaris and Black Rock for years and understand the coastal conditions, the heritage properties, and the premium finish standards these suburbs expect.`}
      propertyTypes={`Bayside's property mix spans Victorian and Edwardian period homes in Brighton, classic weatherboard beach cottages in Hampton and Sandringham, mid-century architect-designed homes in Beaumaris and luxury contemporary residences throughout — each requiring a tailored preparation and coating approach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `Premium House Painters Across the Bayside Region`,
          body: [
            `The City of Bayside takes in some of Melbourne's most desirable coastal suburbs — Brighton, Sandringham, Hampton, Beaumaris and Black Rock — where prized homes sit close to Port Phillip Bay. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter providing premium interior and exterior work built specifically for these seaside conditions.`,
            `Every Bayside project comes with a clear written quote and thorough preparation from a tidy, professional team. From heritage homes to modern beachside residences, we deliver sharp lines, durable coatings and a clean result that protects your property against the coastal environment for years.`,
          ],
        },
        {
          heading: `Coastal Protection Expertise Across Bayside`,
          body: [
            `Homes across the Bayside coast are exposed to relentless salt air, strong UV and damp winters that quickly break down paintwork that hasn't been prepared properly. We use thorough salt washing, flexible primers and premium salt-resistant topcoats so your home's finish stays protected and looks sharp — not just in the first year, but year after year.`,
            `Weatherboard and rendered coastal homes need particular care — bare timber priming, careful filling and sharp caulking to lock out moisture. From heritage beach houses to contemporary builds, we match the paint system to the surface for a durable, flawless result right across Bayside.`,
          ],
        },
      ]}
    />
  );
}
