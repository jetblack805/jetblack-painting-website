import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BrightonEastPainters() {
  const suburb = "Brighton East";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Brighton East homes — from large family residences to modern renovations in Melbourne's prestigious inner-south-east.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-brighton-east/`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Brighton East?`,
      answer: `Brighton East has a strong mix of large brick family homes, mid-century residences on generous blocks, and a growing number of high-quality renovations and new builds. We work across all of these — from face-brick homes requiring careful assessment before any coating to rendered and clad modern exteriors needing a premium finish. Every project starts with a proper inspection so we specify the right preparation and product system for the substrate.`
    },
    {
      question: `Do you handle interior repaints for Brighton East homes?`,
      answer: `Yes. Interior repaints are one of our core services. We work with original plaster ceilings, gyprock walls, timber joinery, built-ins and feature walls. For Brighton East's larger family homes that often covers substantial areas across multiple levels — we plan the work to minimise disruption, use low-VOC premium products appropriate for each room and surface type, and leave the property clean and ready to use.`
    },
    {
      question: `How much does painting a house in Brighton East cost?`,
      answer: `Cost depends on size, scope, number of storeys, surface condition and whether you're doing interior, exterior or both. As a guide, a full interior repaint of a 3-bedroom Melbourne home typically runs $5,000 to $12,000, and an exterior repaint $4,000 to $8,000 for a single-storey home or $8,000 to $15,000 for a double-storey. These are indicative ranges — every job is priced after a site visit, because condition, access and scope move the number more than floor area does. We provide a detailed written quote after inspecting the property — no rough estimates over the phone. Call 0432 077 782 or use the quote form to book an inspection.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Brighton East Painters | Coastal Homes | Jetblack Painting"
      description="Coastal house painters in Brighton East — quality renovations on generous blocks. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "McKinnon", link: "/painter-mckinnon" },
      ]}
      localExpertise={`Brighton East sits between Brighton and Bentleigh in Melbourne's Bayside council area, known for its wide streets, generous block sizes and substantial family homes. It shares Brighton's reputation for prestige residential property without the foreshore premium — which means a high concentration of large, well-maintained homes where the standard of a paint finish matters. We work throughout Brighton East and the surrounding Bayside area regularly.`}
      propertyTypes={`Brighton East is dominated by large brick family homes and quality renovations on generous blocks, alongside a growing number of architect-designed new builds — all calling for careful surface preparation and a finish that lasts.`}
      localContent={[
        {
          heading: "Painters in Brighton East for Large Family Homes",
          body: [
            "Brighton East's residential character is defined by its substantial housing stock — brick family homes on wide blocks, many of them well-maintained originals from the 1950s through to the 1980s, alongside a steady stream of quality renovation and extension projects. These homes require painters who understand how to prepare different substrates correctly: brick that's been previously painted, render that needs adhesion testing, timber joinery that has to be fully prepared before any topcoat goes on.",
            "Jetblack Painting works throughout Brighton East and the broader Bayside council area. We assess every surface properly before we quote and before we paint — filling gaps, sanding back chalking or flaking paint, priming bare surfaces — so the finish is consistent and the protection genuine. Every job is backed by a 5-year written guarantee.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Brighton East Homes",
          body: [
            "For Brighton East interiors, we cover all surface types — plaster ceilings and cornices in older homes, gyprock in extensions and renovations, timber panelling, joinery and built-in cabinetry. We work in the correct sheen levels for each room using premium Dulux and Taubmans products, and plan the job to fit around your household rather than the other way around.",
            "For exteriors, Brighton East homes don't face the same salt air exposure as foreshore suburbs, but they still contend with Melbourne's UV intensity, variable rainfall and temperature cycling. We specify and apply exterior acrylic systems with verified durability ratings over the correct primer for each substrate. The result holds its appearance and protects the home long after the job is signed off.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
