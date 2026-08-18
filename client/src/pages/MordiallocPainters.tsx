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
      answer: `In ${suburb}, we use specialized coastal-grade paints and a multi-step preparation process. This includes thorough pressure washing to remove salt deposits, followed by premium flexible primers and weather-resistant topcoats from Dulux and Taubmans that are designed to withstand the harsh Bayside environment.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `We have extensive experience with ${suburb}'s diverse architecture, from classic weatherboard beach houses and Victorian-era heritage homes to modern architecturally-designed residences and commercial buildings along Main Street.`
    },
    {
      question: "How long does a typical house painting project take?",
      answer: "Most residential projects in Mordialloc are completed within 5 to 10 working days, depending on the size of the home and the extent of preparation required. We provide a detailed timeline with every quote to ensure minimal disruption to your daily life."
    },
    {
      question: `Do you paint boat clubs, bowls clubs or other community buildings near ${suburb}'s foreshore?`,
      answer: `Yes. ${suburb}'s foreshore and creek precinct has a strong community and recreational scene — boating, bowls and life saving clubs among them — and we've worked on this type of building as well as private homes. These jobs often mean larger surface areas, coordinating around club events and dealing with heavier salt-air exposure right on the water, all of which we're set up for.`
    },
    {
      question: `Do you do commercial painting for shops and hospitality venues on ${suburb}'s Main Street?`,
      answer: `Yes — being based in ${suburb} ourselves, we regularly paint shopfronts, cafes and other hospitality venues along Main Street and the Nepean Highway strip as well as homes. Commercial jobs are quoted with a clear written scope and scheduled around trading hours so the business isn't disrupted any more than it has to be.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mordialloc Painters | Coastal Painting | Jetblack Painting"
      description="Mordialloc painters based in the 3195 — weatherboard beach houses, bayside homes and Main Street shopfronts. Interior, exterior, roof and commercial. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Waterways", link: "/painter-waterways" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
      ]}
      localExpertise={`As local painting experts serving ${suburb} and the wider Bayside area, we understand the unique challenges of coastal living. Our team has extensive experience with ${suburb}'s distinctive coastal environment, including protection against salt air corrosion, UV rays, and Melbourne's unpredictable climate.`}
      propertyTypes={`${suburb}'s diverse range of properties includes classic weatherboard beach houses, contemporary bayside residences, and period homes. We adapt our techniques to suit each unique architectural style, ensuring a flawless and durable finish.`}
      localContent={[
        {
          heading: "House Painters Based in Mordialloc",
          body: [
            "Mordialloc is our home. Jetblack Painting is based right here in the 3195, so when you book a quote for a home near Main Street, along the Nepean Highway, or in the quiet streets around Mordialloc Creek and Peter Scullin Reserve, you're dealing with a genuinely local painter — not a call centre that sends a subcontractor from the other side of Melbourne. We know the area's homes because we live and work among them every day.",
            "That local base means fast quotes, easy site visits, and a team that turns up when it says it will. From the heritage cottages near the foreshore to the newer townhouses and unit developments spreading back from the beach, we've painted across every pocket of Mordialloc and the surrounding Kingston area.",
          ],
        },
        {
          heading: "Coastal Painting Built for Mordialloc's Bayside Weather",
          body: [
            "Being a beachside suburb on Port Phillip Bay, Mordialloc homes take a beating from salt air, strong UV and damp winter conditions. Paint that isn't prepared and applied correctly will blister, peel and fade far faster here than it would inland. We counter that with thorough salt washing, flexible exterior primers and premium weather-resistant topcoats from Dulux and Taubmans rated for coastal exposure.",
            "Weatherboard is everywhere in Mordialloc, and timber near the water needs particular care — proper filling, sanding, priming of bare timber and sharp caulking so moisture can't get behind the paint film. Whether it's a classic weatherboard beach house, a rendered façade or a Colorbond-and-render new build, we tailor the system to the surface so the finish lasts.",
          ],
        },
        {
          heading: `The Fishing Village Character Around the Pier and Creek`,
          body: [
            `${suburb} grew up as a fishing village around its creek mouth and pier, and that character is still visible today in the weatherboard cottages and boat clubs clustered near the foreshore. Being based here ourselves, we know these older coastal homes well — the timber needs proper priming and sealing, and anything within a street or two of the water gets the same salt-air-rated preparation and coatings we use right across the Bayside strip.`,
            `The pier and creek precinct is also home to boating, bowls and life saving clubs, and we take on this kind of community and recreational building alongside private homes — larger surface areas, heavier salt exposure and often working around club events, all things we're used to managing.`,
          ],
        },
        {
          heading: `Commercial and Hospitality Painting on Main Street`,
          body: [
            `Being based in the 3195, we don't just paint homes around ${suburb} — we look after a good number of the shops, cafes and hospitality venues along Main Street and the Nepean Highway strip too. Commercial work here comes with its own considerations: trading hours to work around, shopfront signage to protect, and often a tighter timeline than a residential job.`,
            `Every commercial quote is scoped clearly in writing up front, and we schedule work to minimise disruption to trade — early mornings, after hours or a staged approach depending on what the business needs.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
