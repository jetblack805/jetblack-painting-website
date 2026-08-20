import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MordiallocPainters() {
  const suburb = "Mordialloc";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jetblackpainting.com/#business",
      "name": "Jetblack Painting",
      "image": "https://jetblackpainting.com/og-image.jpg",
      "telephone": "0432 077 782",
      "email": "jimmy@jetblackpainting.com",
      "url": "https://jetblackpainting.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mordialloc",
        "addressRegion": "VIC",
        "postalCode": "3195",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -38.0131,
        "longitude": 145.0965
      },
      "areaServed": [
        { "@type": "City", "name": "Mordialloc" },
        { "@type": "City", "name": "Armadale" },
        { "@type": "City", "name": "Aspendale" },
        { "@type": "City", "name": "Bayside" },
        { "@type": "City", "name": "Beaumaris" },
        { "@type": "City", "name": "Bentleigh" },
        { "@type": "City", "name": "Berwick" },
        { "@type": "City", "name": "Black Rock" },
        { "@type": "City", "name": "Bonbeach" },
        { "@type": "City", "name": "Box Hill" },
        { "@type": "City", "name": "Brighton" },
        { "@type": "City", "name": "Brighton East" },
        { "@type": "City", "name": "Camberwell" },
        { "@type": "City", "name": "Carlton" },
        { "@type": "City", "name": "Carrum" },
        { "@type": "City", "name": "Caulfield" },
        { "@type": "City", "name": "Chadstone" },
        { "@type": "City", "name": "Chelsea" },
        { "@type": "City", "name": "Cheltenham" },
        { "@type": "City", "name": "Clarinda" },
        { "@type": "City", "name": "Croydon" },
        { "@type": "City", "name": "Dandenong" },
        { "@type": "City", "name": "Doncaster" },
        { "@type": "City", "name": "Donvale" },
        { "@type": "City", "name": "Edithvale" },
        { "@type": "City", "name": "Elsternwick" },
        { "@type": "City", "name": "Glen Waverley" },
        { "@type": "City", "name": "Greater Dandenong" },
        { "@type": "City", "name": "Hampton" },
        { "@type": "City", "name": "Hawthorn" },
        { "@type": "City", "name": "Heatherton" },
        { "@type": "City", "name": "Highett" },
        { "@type": "City", "name": "Keysborough" },
        { "@type": "City", "name": "Kew" },
        { "@type": "City", "name": "Kingston" },
        { "@type": "City", "name": "Malvern" },
        { "@type": "City", "name": "McKinnon" },
        { "@type": "City", "name": "Mentone" },
        { "@type": "City", "name": "Moorabbin" },
        { "@type": "City", "name": "Mornington Peninsula" },
        { "@type": "City", "name": "Murrumbeena" },
        { "@type": "City", "name": "Oakleigh" },
        { "@type": "City", "name": "Ormond" },
        { "@type": "City", "name": "Parkdale" },
        { "@type": "City", "name": "Ringwood" },
        { "@type": "City", "name": "Sandringham" },
        { "@type": "City", "name": "South Yarra" },
        { "@type": "City", "name": "Stonnington" },
        { "@type": "City", "name": "Templestowe" },
        { "@type": "City", "name": "Toorak" },
        { "@type": "City", "name": "Wheelers Hill" }
      ],
      "description": "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 90+ Melbourne suburbs.",
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "07:00",
        "closes": "18:00"
      }
    },
    {
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
          "addressRegion": "VIC",
          "postalCode": "3195",
          "addressCountry": "AU"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": suburb
      },
      "description": `Jetblack Painting provides premium interior, exterior, and commercial painting services in ${suburb}. Specializing in coastal home protection and heritage property restoration.`,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}/`
      }
    }
  ];

  const faqs = [
    {
      question: `How do you protect ${suburb} homes from coastal salt air?`,
      answer: `We start by washing the salt off. That matters more than anything else here, because paint will not hold over a salt film. After the wash we use flexible primers, then coastal-grade topcoats from Dulux and Taubmans. Those products are built for this kind of exposure. Skip the wash and even the best paint lets go early.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `All of them. Weatherboard beach houses, Victorian-era heritage homes, modern architect-designed places, and the shops and offices along Main Street. We have worked on each type here in ${suburb}.`
    },
    {
      question: "How long does a typical house painting project take?",
      answer: "Most homes in Mordialloc take 5 to 10 working days. What moves that number is the size of the house and how much prep it needs. You get a timeline with your quote, so you know what to expect before we start."
    },
    {
      question: `Do you paint boat clubs, bowls clubs or other community buildings near ${suburb}'s foreshore?`,
      answer: `Yes. The foreshore and creek area has a strong club scene, boating, bowls and life saving among them, and we have painted that kind of building as well as houses. These jobs mean bigger surfaces, heavier salt air right on the water, and club events to schedule around. We are set up for all three.`
    },
    {
      question: `Do you do commercial painting for shops and hospitality venues on ${suburb}'s Main Street?`,
      answer: `Yes. We are based in ${suburb}, and we paint shopfronts, cafes and hospitality venues along Main Street and the Nepean Highway strip as well as homes. Commercial jobs get a clear written scope. We then schedule around your trading hours, so you lose as little business as possible.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mordialloc Painters | Coastal Painting | Jetblack Painting"
      description="Mordialloc painters based in the 3195 — beach houses, bayside homes and Main Street shopfronts. Interior, exterior, roof and commercial. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Waterways", link: "/painter-waterways" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
      ]}
      localExpertise={`We are based in ${suburb} and we paint right across the Bayside area. Living this close to the water is hard on paint. Salt air eats into coatings, the sun fades them, and Melbourne's weather does the rest. We choose products and preparation for those conditions, because we deal with them on every job here.`}
      propertyTypes={`${suburb} has classic weatherboard beach houses, contemporary bayside homes and period homes. Each one needs a different approach, so we match the method to the building rather than treating them all the same.`}
      localContent={[
        {
          heading: "House Painters Based in Mordialloc",
          body: [
            "Mordialloc is our home. Jetblack Painting is based here in the 3195. Book a quote for a house near Main Street, along the Nepean Highway, or in the quiet streets around Mordialloc Creek and Peter Scullin Reserve, and you get a local painter. Not a call centre. Not a subcontractor sent from the other side of Melbourne. We know the homes here because we live among them.",
            "Being close by means quick quotes and easy site visits. It also means a team that turns up when it says it will. We have painted right across Mordialloc and the wider Kingston area. Heritage cottages near the foreshore, newer townhouses, and unit blocks set back from the beach.",
          ],
        },
        {
          heading: "Coastal Painting Built for Mordialloc's Bayside Weather",
          body: [
            "Mordialloc sits right on Port Phillip Bay. That means salt air, strong sun and wet winters. Paint that goes on without proper preparation will blister, peel and fade much faster here than it would inland. So we wash the salt off first. Then flexible exterior primers, then topcoats from Dulux and Taubmans that are rated for coastal use.",
            "Weatherboard is everywhere in Mordialloc, and timber this close to the water needs care. We fill, sand and prime any bare timber, then caulk the gaps tight. That stops water getting in behind the paint. Weatherboard beach house, rendered front, or a newer Colorbond-and-render build, we match the system to the surface.",
          ],
        },
        {
          heading: `The Fishing Village Character Around the Pier and Creek`,
          body: [
            `${suburb} started as a fishing village around the creek mouth and the pier. You can still see it in the weatherboard cottages and boat clubs near the foreshore. We know these older homes well. The timber needs priming and sealing properly. Anything within a street or two of the water gets the same salt-rated preparation and coatings we use across the Bayside strip.`,
            `The pier and creek area is also home to boating, bowls and life saving clubs. We paint that kind of building as well as private homes. The surfaces are bigger, the salt exposure is heavier, and there are usually club events to work around. None of that is new to us.`,
          ],
        },
        {
          heading: `Commercial and Hospitality Painting on Main Street`,
          body: [
            `We do not only paint homes around ${suburb}. We also look after shops, cafes and hospitality venues along Main Street and the Nepean Highway strip. Commercial work brings its own problems. There are trading hours to fit around, shopfront signage to protect, and usually a tighter deadline than a house.`,
            `Every commercial quote is written up front, so you can see the scope before we start. We then work around your trade. Early mornings, after hours, or one zone at a time, depending on what keeps your doors open.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
