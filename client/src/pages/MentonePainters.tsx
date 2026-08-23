import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MentonePainters() {
  const suburb = "Mentone";
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
    "description": `Jetblack Painting provides professional painting services in Mentone. Specializing in coastal home protection and period home restoration for Edwardian and interwar homes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint ${suburb}'s Edwardian and interwar homes?`,
      answer: `Yes. ${suburb} has a strong run of Edwardian and California bungalow homes, especially around Como Parade, Mentone Parade and the streets between the station and the beach. These houses need period-appropriate care. That means lead-safe preparation, careful timber restoration, render repair where it is needed, and colours that suit the era. Done properly, it shows in how long the finish lasts.`
    },
    {
      question: `How do you handle ${suburb}'s coastal salt air on exteriors?`,
      answer: `Salt air off Port Phillip Bay is a real factor here. It settles on the surface, breaks down adhesion, and makes paint peel far sooner than it would inland. So we pressure wash the salt off before any paint goes on. Then premium flexible primers, and salt-resistant topcoats from Dulux and Taubmans made for coastal exposure. Every exterior job carries our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. Quotes are free, written, and carry no obligation, across ${suburb} and the wider Kingston area. The scope and the preparation are itemised up front, so there are no surprises later. Call Jimmy on 0432 077 782 or ask for one online. We can usually quote within a few days.`
    },
    {
      question: `Do you paint apartments and units along the ${suburb} foreshore?`,
      answer: `Yes. The stretch near Beach Road and the esplanade holds a good number of newer apartment and townhouse developments, sitting alongside the older Edwardian homes further inland. Those beachfront buildings face the same salt air as anything else in ${suburb}, so they get the same coastal-rated preparation and coatings. We are used to working with body corporates on shared facades, stairwells and common areas.`
    },
    {
      question: `Do you do commercial painting around ${suburb}'s schools and Nepean Highway businesses?`,
      answer: `Yes. ${suburb} has a solid commercial strip along the Nepean Highway and Bay Road, and established schools including Mentone Grammar. We handle facade repaints, signage surrounds and general maintenance for businesses and facilities as well as homes. Commercial work is quoted with a clear scope and scheduled around trading hours or school terms.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mentone Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Mentone — California bungalow-style period homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Heatherton", link: "/painter-heatherton" }
      ]}
      localExpertise={`We are based just up the road in Mordialloc, so ${suburb} is genuinely local territory for us. We know the Edwardian and interwar homes along Como Parade and Mentone Parade. We know what the salt air does to paint this close to the beach. And we know the suburb runs from heritage homes to modern ones, often in the same street.`}
      propertyTypes={`Edwardian and California bungalow period homes, weatherboard beach cottages near the foreshore, mid-century brick homes and modern residential builds. Each one needs its own approach to preparation and coating.`}
      faqs={faqs}
      schema={schema}
      localContent={[{"heading":"Bayside House Painters Serving Mentone","body":["Mentone is a coastal Bayside suburb in the City of Kingston, known for its beach, the Como Parade shops and a mix of Edwardian and interwar homes alongside modern beachside residences. Based just up the road in Mordialloc, Jetblack Painting is a genuinely local painter delivering premium interior and exterior work built for Mentone's seaside conditions.","Every Mentone project comes with a clear written quote and thorough preparation from a tidy local team. Whether it's a full exterior repaint or a fresh interior scheme, we deliver sharp lines, durable coatings and a clean, professional result close to home."]},{"heading":"Coastal Protection and Period Care in Mentone","body":["Homes near the water in Mentone face salt air, strong UV and damp winters that break down poorly prepared paintwork. We counter that with proper salt washing, flexible primers and premium salt-resistant topcoats, so your Mentone home's finish stays protected and looks sharp for years.","Mentone's Edwardian and interwar homes need careful, period-sympathetic work — bare timber priming, render repair and colours that suit the era. From heritage homes to rendered modern builds, we match the paint system to the surface for a durable, flawless result."]},{"heading":"Beachfront Apartments and Modern Builds Along the Esplanade","body":["Closer to Beach Road and the esplanade, Mentone's housing shifts from the Edwardian and bungalow streets further inland to a stronger mix of apartment blocks, townhouses and newer architecturally-designed homes. These beachfront properties take the same battering from salt air and UV as anything else near the bay, so the coastal-grade preparation and coatings we use across Mentone apply just as much here — arguably more, given the direct water exposure.","Multi-unit buildings along the foreshore often mean working with a body corporate on shared facades, stairwells, balustrades and common areas rather than a single homeowner. We provide the written scopes, itemised pricing and insurance certificates a committee needs to sign off on works, and we stage jobs to keep resident access open throughout."]},{"heading":"Schools and Local Businesses Around Mentone","body":["Mentone isn't only a residential suburb — there's a genuine commercial strip along the Nepean Highway and Bay Road, and established schools including Mentone Grammar in the area. We take on commercial and facility painting alongside residential work: shopfront facades, signage surrounds and general maintenance repaints for local businesses.","Commercial jobs come with the same clear, written scope as any residential quote, and we schedule around trading hours or school terms so the work doesn't get in the way of business as usual."]}]}
    />
  );
}
