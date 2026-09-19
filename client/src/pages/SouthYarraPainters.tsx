import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SouthYarraPainters() {
  const suburb = "South Yarra";
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
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides premium interior and exterior painting services for South Yarra's heritage terraces, luxury apartments and modern residences.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-south-yarra/`
    }
  };

  const faqs = [
    {
      question: `Do you paint South Yarra apartments and period terraces?`,
      answer: `Yes. We regularly work on South Yarra's character Victorian and Edwardian terraces, as well as contemporary apartments in the Toorak Road and Chapel Street precincts. We understand the specific preparation and finish requirements for both heritage and modern properties in the area.`
    },
    {
      question: `How do you handle painting in South Yarra's strata and body corporate buildings?`,
      answer: `We're experienced with strata and body corporate painting across South Yarra, working with owners corporations and property managers to coordinate access, minimise disruption to residents and meet body corporate specifications. We carry $10M public liability insurance as required by most strata schemes.`
    },
    {
      question: `What interior colours work best for South Yarra homes and apartments?`,
      answer: `South Yarra properties tend to suit warm whites, soft greige tones and restrained accent colours that photograph well and complement the architectural detail. We offer colour consultation as part of every quote, helping you choose a scheme that suits your home's era and maximises its appeal — whether you're living in it or preparing it for sale.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="South Yarra Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in South Yarra — Victorian terraces, apartments and townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`Common property in a ${suburb} apartment building — fire stair, lift lobby and corridors repainted while the building stayed occupied and every exit route stayed open.`}
      projectImages={[
        {
          // Portrait 1400x1867 straight off the phone, no crop. Checked at 3x
          // for anything identifying before publishing: the only signage in
          // frame is a generic "fire hose reel / fire extinguisher" door label
          // and an exit sign. No unit numbers, no building name, no street
          // number anywhere in the frame, so no masking was needed.
          src: "/projects/project-south-yarra-stairwell.webp",
          small: "/projects/project-south-yarra-stairwell-800.webp",
          width: 1400,
          height: 1867,
          alt: `Fire stair in a ${suburb} apartment building after repainting, with white walls and ceiling above black tiled treads and a stainless steel handrail`,
          caption: `A fire stair is the hardest part of a common-property repaint to get right, because it is the one part that cannot be closed. Residents use it while you are in it, so the work goes in sections and the exit path stays clear the whole time. White walls above black tile leave nowhere to hide a wavy cut — the tile edge runs dead straight and the paint line has to match it.`,
        },
        {
          // Same building, same visit. A resident is walking the corridor
          // mid-frame at a distance, face turned down and partly behind a
          // hand; no unit numbers or door plates are legible at any zoom.
          src: "/projects/project-south-yarra-lift-lobby.webp",
          small: "/projects/project-south-yarra-lift-lobby-800.webp",
          width: 1400,
          height: 1867,
          alt: `Lift lobby and corridor in a ${suburb} apartment building after repainting, with white walls and ceiling, dark polished floor tiles and recessed downlighting`,
          caption: `The lift lobby is the first thing anyone sees walking in, and a polished dark floor reflects the wall straight back at you. Roller texture, a missed cut around the lift architrave, a patch that flashes under the downlights — all of it doubles in the floor. Owners corporations notice this one.`,
        },
      ]}
      neighbouringSuburbs={[
        { name: "Richmond", link: "/painter-richmond" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Stonnington", link: "/painter-stonnington" },
        { name: "Armadale", link: "/painter-armadale" },
      ]}
      localExpertise={`South Yarra is one of Melbourne's most sought-after inner suburbs, with a diverse mix of Victorian and Edwardian period terraces, Art Deco and contemporary apartments, and heritage-listed streetscapes. Our team understands the care and precision these properties demand — whether that's colour-matching original heritage renders, preparing ornate timber joinery, or delivering a seamless modern finish for a luxury renovation.`}
      propertyTypes={`South Yarra's property mix ranges from classic Victorian and Edwardian terraces along tree-lined streets to high-end apartments in newer developments — all requiring meticulous surface preparation and premium finishes.`}
      localContent={[
        {
          heading: "Painters in South Yarra for Every Property Type",
          body: [
            "South Yarra sits at the heart of Melbourne's inner southeast, bordered by the Yarra River, Toorak Road and Chapel Street. Its character streets are lined with heritage terraces, converted warehouses and architect-designed townhouses, while newer precincts have brought luxury apartment towers that need a completely different approach. Jetblack Painting works across all of these — bringing the same standard of meticulous preparation and premium finish to every job regardless of size.",
            "For South Yarra's period homes, that means careful stripping and preparation of original joinery, historically sympathetic colour palettes, and a genuine respect for the details that make these homes special — cornices, ceiling roses, timber sash windows, verandah ironwork. For contemporary apartments and townhouses, it means crisp edges, zero visible joins, and durable finishes that hold up in South Yarra's busy rental market.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for South Yarra Homes",
          body: [
            "Our South Yarra interior painting service covers everything from a single-room refresh to a complete multi-storey repaint, using premium Dulux and Taubmans products in flat, low-sheen, satin and semi-gloss finishes suited to each surface. We prepare properly — filling, sanding and priming — so the finish stays looking its best long after we've packed up.",
            "For South Yarra exteriors, proper preparation is even more important. Many homes in the area have existing paint systems built up over decades, and cutting corners on prep leads to peeling within a year or two. We wash, scrape, sand and prime before any topcoat goes on, and we use exterior-grade systems rated for Melbourne's variable climate. The result is a finish that protects the home and holds its appearance for years.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
