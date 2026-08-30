import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function AspendalePainters() {
  const suburb = "Aspendale";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Specialist Bayside painters with 18+ years experience and a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-aspendale/`
    }
  };

  const faqs = [
    {
      question: `Who are the best painters in ${suburb}?`,
      answer: `Jetblack Painting is the most highly rated local painting company serving ${suburb}. We are based in nearby Mordialloc, and owner Jimmy Demirci has over 18 years painting homes across ${suburb} and the Bayside area. We hold 5-star Google reviews, carry $10 million public liability insurance, and back every job with a 5-year written workmanship guarantee.`
    },
    {
      question: `Do you paint interiors and exteriors in ${suburb}?`,
      answer: `Yes. We cover interior house painting, exterior house painting, roof and fence painting, and kitchen cabinet resurfacing. We also take on commercial work for local businesses and body corporate projects in the area.`
    },
    {
      question: `How do I get a painting quote in ${suburb}?`,
      answer: `Call Jimmy directly on 0432 077 782, or email jimmy@jetblackpainting.com. He will arrange a time to visit, assess the work, and give you a free written quote. That usually comes back within 24 to 48 hours of the site visit.`
    },
    {
      question: `Is painting a house on the beach side of the railway different from one further inland?`,
      answer: `Yes, meaningfully. The strip between the Frankston line and the sand takes wind straight off the bay with nothing in the way. Exposure there is far harsher than on streets set back behind the Nepean Highway. The two ends of ${suburb} often need different coating specifications on the same street grid. So we scope beachfront elevations separately, rather than pricing a whole house as one exposure.`
    },
    {
      question: `Do you cover Aspendale Gardens as well as ${suburb}?`,
      answer: `Yes, and we treat them as genuinely different jobs. Aspendale Gardens is a separate, later suburb built inland from the 1980s onward. Different housing, different era, and far enough from the water that the coastal specification we use near the beach is often unnecessary. If you are not sure which side of the line your property sits on, mention the street when you call and we will tell you.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Aspendale Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Aspendale — mid-century brick veneer and contemporary townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Kingston", link: "/painter-kingston" },
      ]}
      localExpertise={`${suburb} is a quiet coastal suburb in the City of Kingston, sharing its northern edge with Mordialloc. We are based in Mordialloc, so ${suburb} is part of our core local area. Jimmy Demirci has been painting homes here for over 18 years. He knows the weatherboard beach houses, the 1950s brick homes and the modern townhouses inside out.`}
      propertyTypes={`A mix of classic weatherboard homes, mid-century brick veneer, and contemporary townhouses and units. Many are a short walk from the beach. Coastal properties here need preparation and paint systems built for the bay: salt washing, flexible primers and weather-resistant topcoats.`}
      localContent={[
        {
          heading: "Aspendale Painting — Your Local Painter Is in Mordialloc",
          body: [
            "Hire us in Aspendale and you are hiring a genuinely local company. Our base in Mordialloc is on your doorstep. That means quick answers to quote requests, a prompt start, and none of the delays you get from a bigger company based across town.",
            "Every Aspendale job is managed by Jimmy Demirci himself. He visits to scope the work, stays in contact while it runs, and does the final walkthrough before we leave. You deal with the owner from the first call to the last brushstroke.",
          ],
        },
        {
          heading: "Quality Coastal Painting for Aspendale Homes",
          body: [
            "Salt air, UV and coastal damp are hard on paintwork. We see what poor preparation and cheap paint do to Aspendale homes: peeling weatherboards, chalking render, rusting metal trim.",
            "Our process is built to prevent that. Thorough surface preparation. Premium flexible primers and topcoats from Dulux and Taubmans. Careful caulking and sealing at every joint.",
          ],
        },
        {
          heading: "The Beach Side of the Railway Line",
          body: [
            "Aspendale is split lengthways by the Frankston railway line and the Nepean Highway. The difference between the two sides matters more than the short walk between them suggests. On the beach side, houses face the bay across open ground with nothing to break the wind. Original beach cottages, post-war brick, and rebuilds that have gone up on those blocks recently. Those walls wear faster than anything behind the highway, and they wear unevenly. The bay-facing wall of a house can be well overdue while the street elevation still looks sound.",
            "So we quote those properties by elevation, not as one number. Pricing the sheltered side to the same specification as the exposed one either overcharges you or underprepares the wall that actually needed the work. On the inland side the picture is calmer, and a standard exterior system is often exactly right. There is no sense paying for a marine-grade specification three streets back from the sand.",
          ],
        },
        {
          heading: "Aspendale and Aspendale Gardens Are Not the Same Suburb",
          body: [
            "Worth being clear about, because the two names get used interchangeably and they describe different places. Aspendale proper runs down to the beach and dates from the early twentieth century, with housing to match. Aspendale Gardens is a separate suburb, built inland from the 1980s onward. Planned estate streets, brick-veneer and rendered homes of that era, and far enough from the water that salt stops being the governing factor.",
            "In practice that means a quote for one tells you nothing about the other. What a foreshore weatherboard needs is not what a 1990s Gardens home needs. Quoting them the same way does a disservice to both. We work across both and scope each to what is actually in front of us.",
          ],
        },
      ]}
      projectSummary={`Render repairs and a full exterior repaint on a beachfront home at Gnotuk, ${suburb} — a property that takes salt-laden wind off the bay year round. Damaged render was cut out and patched, the patches primed, and the whole exterior recoated including the eaves lining, fascia and downpipes.`}
      projectImages={[
        {
          src: "/projects/project-aspendale-render-patches-before.webp",
          small: "/projects/project-aspendale-render-patches-before-800.webp",
          width: 1000,
          height: 1333,
          alt: `Fresh render patch repairs drying on the upper wall of an ${suburb} home before repainting`,
          caption: "Render cut out and patched. The patches are left to cure before priming — coating them early is what causes the flashing you see on a rushed job.",
        },
        {
          src: "/projects/project-aspendale-render-repair-scaffold.webp",
          small: "/projects/project-aspendale-render-repair-scaffold-800.webp",
          width: 1200,
          height: 1600,
          alt: `Scaffolding against the rear elevation of a beachfront ${suburb} house during exterior painting`,
          caption: "Scaffold up on the elevation facing the water. That side takes the salt and weathers first, so it gets the closest preparation.",
        },
        {
          src: "/projects/project-aspendale-eaves-skylights-after.webp",
          small: "/projects/project-aspendale-eaves-skylights-after-800.webp",
          width: 1200,
          height: 1600,
          alt: `Repainted eaves lining and skylights on an ${suburb} home`,
          caption: "Eaves lining, fascia and downpipes recoated. Skylights masked rather than cut around freehand.",
        },
        {
          src: "/projects/project-aspendale-facade-after.webp",
          small: "/projects/project-aspendale-facade-after-800.webp",
          width: 1200,
          height: 1600,
          alt: `Finished render and gutter line on a two-storey ${suburb} house after repainting`,
          caption: "Finished render with the repairs invisible under the topcoat, and a clean line where the wall meets the gutter.",
        },
        {
          src: "/projects/project-aspendale-roofline-bay-view.webp",
          small: "/projects/project-aspendale-roofline-bay-view-800.webp",
          width: 1200,
          height: 900,
          alt: `Roofline of a completed ${suburb} exterior repaint with Port Phillip Bay beyond`,
          caption: "From the roofline, with the bay behind. This is the exposure every coating on this house has to survive.",
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
