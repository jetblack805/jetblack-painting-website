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
      question: `Do you paint Mentone's Edwardian and interwar homes?`,
      answer: `Yes — Mentone has a strong stock of Edwardian and California bungalow-style homes, particularly around Como Parade, Mentone Parade and the streets between the station and the beach. These homes need period-appropriate care: lead-paint-safe preparation, careful timber restoration, render repair where needed and colour schemes that suit the era. We do this work properly and the results show in how long the finish lasts.`
    },
    {
      question: `How do you handle Mentone's coastal salt air on exteriors?`,
      answer: `Salt air from Port Phillip Bay is a real factor in Mentone — it deposits on surfaces, breaks down adhesion and causes paint film to peel far faster than inland suburbs. We counter it with thorough pressure washing to strip salt deposits before any paint goes on, premium flexible primers and salt-resistant topcoats from Dulux and Taubmans specifically designed for coastal exposure. Every exterior job is backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in Mentone?`,
      answer: `Yes. We provide free, no-obligation written quotes across Mentone and the surrounding Kingston area, with the full scope and preparation itemised up front so there are no surprises. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to quote within a few days.`
    },
    {
      question: `Do you paint apartments and units along the Mentone foreshore?`,
      answer: `Yes. The stretch closer to Beach Road and the esplanade has a good number of newer apartment and townhouse developments alongside the older Edwardian homes further inland. These beachfront builds face the same salt-air exposure as any Mentone property, so we use the same coastal-rated preparation and coatings, and we're experienced working with body corporates on shared facades, stairwells and common areas.`
    },
    {
      question: `Do you do commercial painting around Mentone's schools and Nepean Highway businesses?`,
      answer: `Yes. Mentone has a solid commercial strip along the Nepean Highway and Bay Road, plus established schools including Mentone Grammar in the area, and we handle facade repaints, signage surrounds and general commercial maintenance for businesses and facilities as well as homes. Commercial jobs are quoted with clear scopes and scheduled to minimise disruption to trading hours or school terms.`
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
      localExpertise={`Based just up the road in Mordialloc, Jetblack Painting works in Mentone regularly and understands the suburb's character — the Edwardian and interwar homes along Como Parade and Mentone Parade, the coastal salt-air environment close to the beach, and the mix of heritage and modern properties throughout. This is genuinely local territory for us.`}
      propertyTypes={`Mentone's housing spans Edwardian and California bungalow-style period homes, weatherboard beach cottages near the foreshore, mid-century brick homes and modern residential builds — each needing a tailored approach to preparation and coating.`}
      faqs={faqs}
      schema={schema}
      localContent={[{"heading":"Bayside House Painters Serving Mentone","body":["Mentone is a coastal Bayside suburb in the City of Kingston, known for its beach, the Como Parade shops and a mix of Edwardian and interwar homes alongside modern beachside residences. Based just up the road in Mordialloc, Jetblack Painting is a genuinely local painter delivering premium interior and exterior work built for Mentone's seaside conditions.","Every Mentone project comes with a clear written quote and thorough preparation from a tidy local team. Whether it's a full exterior repaint or a fresh interior scheme, we deliver sharp lines, durable coatings and a clean, professional result close to home."]},{"heading":"Coastal Protection and Period Care in Mentone","body":["Homes near the water in Mentone face salt air, strong UV and damp winters that break down poorly prepared paintwork. We counter that with proper salt washing, flexible primers and premium salt-resistant topcoats, so your Mentone home's finish stays protected and looks sharp for years.","Mentone's Edwardian and interwar homes need careful, period-sympathetic work — bare timber priming, render repair and colours that suit the era. From heritage homes to rendered modern builds, we match the paint system to the surface for a durable, flawless result."]},{"heading":"Beachfront Apartments and Modern Builds Along the Esplanade","body":["Closer to Beach Road and the esplanade, Mentone's housing shifts from the Edwardian and bungalow streets further inland to a stronger mix of apartment blocks, townhouses and newer architecturally-designed homes. These beachfront properties take the same battering from salt air and UV as anything else near the bay, so the coastal-grade preparation and coatings we use across Mentone apply just as much here — arguably more, given the direct water exposure.","Multi-unit buildings along the foreshore often mean working with a body corporate on shared facades, stairwells, balustrades and common areas rather than a single homeowner. We provide the written scopes, itemised pricing and insurance certificates a committee needs to sign off on works, and we stage jobs to keep resident access open throughout."]},{"heading":"Schools and Local Businesses Around Mentone","body":["Mentone isn't only a residential suburb — there's a genuine commercial strip along the Nepean Highway and Bay Road, and established schools including Mentone Grammar in the area. We take on commercial and facility painting alongside residential work: shopfront facades, signage surrounds and general maintenance repaints for local businesses.","Commercial jobs come with the same clear, written scope as any residential quote, and we schedule around trading hours or school terms so the work doesn't get in the way of business as usual."]}]}
    />
  );
}
