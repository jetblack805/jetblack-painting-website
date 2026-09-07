import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function RowvillePainters() {
  const suburb = "Rowville";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Professional House Painting Services in ${suburb}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Jetblack Painting",
      telephone: "0432 077 782",
      url: "https://jetblackpainting.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mordialloc",
        postalCode: "3195",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    description: `Jetblack Painting provides interior and exterior house painting across Rowville, from the established brick-veneer family homes on large blocks to the newer estates near Rowville Lakes and Stamford Park.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}/`,
    },
  };

  const faqs = [
    {
      question: `Do you paint the 1970s and 80s brick-veneer homes ${suburb} is full of?`,
      answer: `Yes, and on most of them the brick never gets touched. An exterior repaint on a home of that era is almost entirely trim — fascias, barge boards, eaves and soffits, gutters and downpipes, window frames and sills, the garage door and the front door. It is fiddly, largely brushwork, and it is where the whole result lives: the brick is the same colour it was in 1978, so the only thing changing the look of the house is the twenty percent of it that gets painted.`,
    },
    {
      question: `Our timber fascias and barge boards are starting to go. Can they be saved?`,
      answer: `Often yes, sometimes no, and we will tell you which before we quote rather than after we start. Timber of that age that has lost its coating goes grey and soft at the ends and around the fixings first. Where it is sound we sand back to a firm edge, prime the bare timber properly and rebuild the film, which is a genuine repair rather than paint over a problem. Where a board has actually failed, painting it is throwing money away — we say so, and it needs replacing by a carpenter before we coat it.`,
    },
    {
      question: `Do you also paint the newer homes around Rowville Lakes and Stamford Park?`,
      answer: `Yes. That part of ${suburb} is a different job to the older streets — rendered and lightweight-clad facades, Colorbond roofs and garage doors, and far less exposed timber. The preparation is different too: render needs washing and spot-priming rather than the sanding-back a timber fascia needs, and the coating system is chosen for the substrate. Same suburb, genuinely different scope, and the quote reflects that.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the wider City of Knox, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Rowville Painters | Family Home Repaints | Jetblack Painting"
      description="House painters in Rowville — brick-veneer family homes on large blocks, timber fascias, eaves and trim. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Wantirna South", link: "/painter-wantirna-south" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Wheelers Hill", link: "/painter-wheelers-hill" },
        { name: "Endeavour Hills", link: "/painter-endeavour-hills" },
        { name: "Ringwood", link: "/painter-ringwood" },
        { name: "Croydon", link: "/painter-croydon" },
      ]}
      localExpertise={`We know what ${suburb} is built from. The suburb filled out through the 1970s and 80s with brick-veneer family homes on blocks far larger than anything being subdivided today, which means long eaves runs, long fence lines and a lot of exposed timber trim. The newer pockets toward Rowville Lakes and Stamford Park are a different proposition again — render, cladding and Colorbond. We scope the two differently because they fail differently.`}
      propertyTypes={`${suburb}'s 1970s and 80s brick-veneer and weatherboard family homes on large blocks, split-level builds on the rising ground toward Lysterfield, and the rendered and clad homes of the Rowville Lakes and Stamford Park estates.`}
      localContent={[
        {
          heading: `House Painters Serving Rowville`,
          body: [
            `${suburb} is a large, established City of Knox suburb between Stud Road and the foothills, with Stud Park at its centre and Lysterfield Lake and Churchill National Park along its eastern edge. Most of it was built through the 1970s and 80s on generous blocks, and that generosity is the thing that shapes a painting quote here: bigger footprints, longer eaves and fascia runs, and split-level homes on the rising ground that need proper access equipment rather than a ladder and optimism.`,
            `Jetblack Painting works across ${suburb} and the wider City of Knox with a clear written quote, thorough preparation and premium Dulux and Taubmans coatings. Interiors staged room by room so the house stays liveable, exteriors sequenced around the weather, and a 5-year written workmanship guarantee on the finish. We are fully licensed and carry $10 million in public liability insurance.`,
          ],
        },
        {
          heading: `Timber Trim and Fascias on Rowville's Established Homes`,
          body: [
            `On a brick-veneer home the paint job is the trim, and in ${suburb} that trim is usually forty-odd years old. Fascias, barge boards, eaves linings, window frames and sills, the garage door — these are the surfaces carrying the weather, and they are the ones that decide whether the house reads as maintained or as neglected. Brick hides its age; a grey, cracked fascia does not. It is also why an honest quote on one of these homes spends most of its lines on preparation rather than on paint.`,
            `We work back to a sound edge, prime bare timber before anything else goes near it, and fill and caulk properly rather than skimming over movement that will open again by the second summer. Where a board is genuinely past coating we say so and recommend replacing it first, because painting failed timber buys you one season and costs you the whole job. For the newer rendered and clad homes in the estates, the same principle applies to a different substrate — the preparation is what you are actually paying for.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
