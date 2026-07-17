import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HeathertonPainters() {
  const suburb = "Heatherton";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Heatherton homes — a quiet residential suburb in Melbourne's Kingston council area.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-heatherton/`
    }
  };

  const faqs = [
    {
      question: `Do you paint homes in Heatherton?`,
      answer: `Yes. Heatherton is one of the suburbs we service regularly as part of our Kingston council coverage. The housing stock is largely post-war brick homes and 1970s–1980s residences, with a mix of well-maintained originals and renovation projects. We handle interior and exterior painting for all property types in the area — from full repaints to specific rooms or surfaces. Call 0432 077 782 or use the quote form to book an inspection.`
    },
    {
      question: `What does exterior painting in Heatherton involve?`,
      answer: `Exterior repaints start with a thorough inspection of the current surface condition — we check for adhesion failure, chalking, surface contamination, cracking and moisture-related defects. After a proper preparation phase (wash, patch, prime), we apply a premium exterior acrylic topcoat rated for Melbourne conditions. Every exterior job is covered by our 5-year written guarantee and $10M public liability insurance. We quote based on what we see on site, not rough estimates over the phone.`
    },
    {
      question: `How long does a house repaint take in Heatherton?`,
      answer: `Timeline depends on size, scope and surface condition. An exterior repaint on a typical Heatherton home takes 3–5 days for the painting phase, longer if significant preparation work is needed. Interior projects vary by room count and scope — a full interior repaint on a standard three-bedroom home typically takes a week. We'll provide an estimated timeline in your written quote after the on-site inspection.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Heatherton Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Quality interior and exterior painting for Heatherton homes in Kingston council. Fully licensed, free written quotes, 5-year guarantee.`}
      neighbouringSuburbs={[
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Clarinda", link: "/painter-clarinda" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Mentone", link: "/painter-mentone" },
      ]}
      localExpertise={`Heatherton is a quiet, well-established suburb in Melbourne's Kingston council area, bordered by Cheltenham to the north, Moorabbin to the west and Clarinda to the east. It's a predominantly residential suburb with a mix of post-war brick homes and 1960s–1980s properties on comfortable block sizes. We cover Heatherton as part of our regular service area across Kingston and Bayside — it's local territory we know well.`}
      propertyTypes={`Heatherton's housing is primarily post-war brick and 1970s–1980s residences, with an increasing number of renovation and extension projects — all requiring sound surface preparation before any coating is applied.`}
      localContent={[
        {
          heading: "Painters in Heatherton Covering Kingston Council",
          body: [
            "Heatherton sits in the Kingston council area where we've completed painting projects across the spectrum — from straightforward interior repaints to full exterior restorations on homes that haven't been painted in fifteen years. The older brick homes in this part of Melbourne are generally in good structural condition, but exterior paint systems do degrade over time and need proper preparation before recoating, not just a fresh layer over a failing existing film.",
            "Jetblack Painting services Heatherton alongside Cheltenham, Moorabbin, Clarinda and the surrounding Kingston council suburbs. We carry $10M public liability insurance, are fully licensed for residential work in Victoria, and back every project with a 5-year written guarantee. Call 0432 077 782 to arrange an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Heatherton Homes",
          body: [
            "Interior painting in Heatherton covers the standard range of residential surfaces: ceilings, walls, timber joinery, doors and built-ins. We use premium Dulux and Taubmans products in the correct finish levels, work efficiently to minimise disruption to the household, and clean up thoroughly on completion.",
            "For exterior repaints, we start with a detailed inspection to identify what preparation is genuinely needed — then we do the preparation properly rather than rushing to the topcoat. A correct primer on the right substrate is the difference between a finish that holds for ten years and one that starts peeling within two. Every exterior job comes with a 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
