import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MurrumbeenaPainters() {
  const suburb = "Murrumbeena";
  const faqs = [
    {
      question: `Do you paint Californian bungalows and interwar homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a fine run of Californian bungalows and interwar homes, and we know them well. Render gets prepared properly. Bare timber gets primed. Colours are chosen to suit the age of the house and the street. We do not skip preparation, which is why the finish lasts.`,
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Yes. Presentation matters at sale time in a suburb like this one. A fresh neutral repaint, tight cutting-in and clean fascias change how a house shows to buyers. We can scope the work and finish it in time for your campaign.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. Quotes are free, written, and carry no obligation, across ${suburb} and the surrounding Glen Eira suburbs. The full scope and the preparation are set out up front. Call Jimmy on 0432 077 782 or ask for one online.`,
    },
    {
      question: `Do you paint townhouses and new unit developments in ${suburb}?`,
      answer: `Yes. Many of ${suburb}'s larger blocks have been subdivided into townhouses and units in recent years, especially near the station and ${suburb} Park. These builds use render, Colorbond cladding and feature cladding rather than the timber and brick of the old bungalows. The preparation and coatings change to match. We are used to working with owners corporations and with several unit owners at once.`,
    },
    {
      question: `Do you handle investment property and rental turnover painting in ${suburb}?`,
      answer: `Regularly. ${suburb} sits close to Chadstone Shopping Centre and on the train line, which makes it popular with renters and investors. A good share of our work here is turnover painting between tenancies. Quick, tidy, and priced sensibly, without cutting the preparation short.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Murrumbeena Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Murrumbeena — Californian bungalows and interwar. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`An exterior repaint on a Tudor-style ${suburb} home with a first-floor addition. Only the render and the trim changed — the tile roof and the original red brick were left exactly as they were, because on a house of this era those are the two things worth keeping.`}
      projectImages={[
        {
          src: "/projects/project-murrumbeena-tudor-exterior.webp",
          small: "/projects/project-murrumbeena-tudor-exterior-800.webp",
          width: 1400,
          height: 1050,
          alt: `Tudor-style ${suburb} home after an exterior repaint, pale grey render with charcoal picked out through the half-timbering, fascias and gutters, above original red brick and a terracotta tile roof`,
          caption:
            "Pale grey on the render with the charcoal taken through the half-timbering, the fascias, the gutters and the downpipes. The brick and the terracotta roof were not touched — picking out the timbering in a dark colour is what modernises a house like this, and painting the brick would have thrown away the part that gives it its character.",
        },
      ]}
      neighbouringSuburbs={[
        { name: "Hughesdale", link: "/painter-hughesdale" },
        { name: "Carnegie", link: "/painter-carnegie" },
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Malvern", link: "/painter-malvern" },
      ]}
      localExpertise={`We know ${suburb}. The Californian bungalows and interwar homes along Neerim Road, and the streets around ${suburb} Station, are what give the suburb its look. They need a painter who understands rendered surfaces, timber and original brickwork. We prepare properly and use premium products every time.`}
      propertyTypes={`Californian bungalows, interwar and post-war brick homes, renovated family houses, townhouses and units across ${suburb} and the wider Glen Eira area.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is a leafy suburb in the City of Glen Eira. It is known for Californian bungalows, interwar homes, and the village feel around Neerim Road and ${suburb} Station. We paint inside and out on these established family homes.`,
            `Every job here starts with a written quote and thorough preparation. Full exterior repaints, interior refreshes, cabinetry. Sharp lines, premium coatings, and as little disruption to the household as we can manage.`,
          ],
        },
        {
          heading: `Bungalow and Family Home Painting in ${suburb}`,
          body: [
            `${suburb}'s bungalows and interwar homes have rendered walls, brick detailing and original timber. All three reward proper preparation. We fill and seal cracks in the render. We prime bare timber before anything else goes on. And we take time over colour, so it suits the age of the house and the street it sits in.`,
            `Newer and renovated homes here get the same care with different materials. Smooth interiors, weather-resistant exteriors, and Dulux and Taubmans systems chosen for Melbourne's climate. Whatever the era, the preparation is what makes it last.`,
          ],
        },
        {
          heading: `Townhouses and Unit Developments Near ${suburb} Station`,
          body: [
            `${suburb} has filled in steadily over the past decade. Older weatherboard blocks have been subdivided into townhouses and units, mostly within walking distance of ${suburb} Station and ${suburb} Park. These builds use render, Colorbond cladding and feature brickwork rather than the painted timber of the old bungalow stock. The coating system changes to match.`,
            `Multi-unit jobs usually mean dealing with an owners corporation, or with several owners at once. We provide a written scope, itemised pricing and the insurance paperwork a committee needs before it can approve the work. Access is staged so residents are not shut out while the job runs.`,
          ],
        },
        {
          heading: `Investment Properties and Rental Turnovers Near Chadstone`,
          body: [
            `${suburb} is a short run to Chadstone Shopping Centre and sits on the train line. That makes it popular with renters. A good share of our work here is turnover painting between tenancies.`,
            `Landlords and property managers need the place repainted fast, on budget and ready to re-list. We work to that date. What we will not do is skip the preparation that decides whether the repaint lasts. One unit or a portfolio across ${suburb} and the Glen Eira suburbs, the quote is written and we can work around the changeover.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
