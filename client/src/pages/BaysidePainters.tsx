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
        "addressLocality": "Melbourne",
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
      question: `What makes Bayside house painting different?`,
      answer: `Bayside homes are exposed to high levels of salt air and UV radiation. We use specialized flexible paints and rigorous preparation techniques to prevent the peeling and fading common in coastal environments.`
    },
    {
      question: `Do you provide painting services for all Bayside suburbs?`,
      answer: `Yes, we serve all suburbs within the Bayside area, including Brighton, Hampton, Sandringham, Black Rock, and Beaumaris.`
    },
    {
      question: `What kind of paint do you use for Bayside homes?`,
      answer: `We use premium, coastal-grade paints from leading brands like Dulux and Taubmans, specifically selected for their durability and resistance to the harsh Bayside climate.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bayside Painters | Coastal House Painting Experts | Jetblack Painting"
      description="Professional house painters in the Bayside area. Specialists in coastal home protection and luxury property painting. 5-star rated, free quotes."
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Black Rock", link: "/painter-black-rock" },
        { name: "Beaumaris", link: "/painter-beaumaris" }
      ]}
      localExpertise={`Serving the entire Bayside region, we are the experts in coastal house painting. We understand the specific environmental factors affecting Bayside properties and provide specialized solutions to ensure long-lasting beauty and protection.`}
      propertyTypes={`Bayside is home to some of Melbourne's most prestigious properties, including historic mansions, modern architectural masterpieces, and classic coastal homes. We provide premium painting services for all Bayside property types.`}
      faqs={faqs}
      schema={schema}
      localContent={[{"heading":"Premium House Painters Across the Bayside Region","body":["The Bayside region takes in some of Melbourne's most desirable coastal suburbs — Brighton, Sandringham, Hampton, Beaumaris, Black Rock and Cheltenham — where prized homes sit close to Port Phillip Bay. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter providing premium interior and exterior work built specifically for these seaside conditions.","Every Bayside project comes with a clear written quote and thorough preparation from a tidy, professional team. From heritage homes to modern beachside residences, we deliver sharp lines, durable coatings and a clean result that protects your property against the coastal environment."]},{"heading":"Coastal Protection Expertise Across Bayside","body":["Homes across the Bayside coast are exposed to relentless salt air, strong UV and damp winters that quickly break down paintwork that hasn't been prepared properly. We use thorough salt washing, flexible primers and premium salt-resistant topcoats so your home's finish stays protected and looks sharp for years.","Weatherboard and rendered coastal homes need particular care — bare timber priming, careful filling and sharp caulking to lock out moisture. From heritage beach houses to contemporary builds, we match the paint system to the surface for a durable, flawless result right across Bayside."]}]}
    />
  );
}
