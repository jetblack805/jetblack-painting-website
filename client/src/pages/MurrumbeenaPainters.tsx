import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MurrumbeenaPainters() {
  const suburb = "Murrumbeena";
  const faqs = [
    {
      question: `Do you paint Californian bungalows and interwar homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a great collection of Californian bungalows and interwar homes, and we know these properties well — proper render preparation, bare timber priming, and colour choices that suit the character of the home and the streetscape. We don't skip prep, which is why our finishes last.`
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Absolutely. ${suburb} is a well-regarded Glen Eira suburb and presentation matters at sale time — a professional repaint with a fresh neutral palette, tight cutting-in and clean fascias can make a real difference to buyer appeal and auction result. We can scope and deliver pre-sale repaints on a timeline that fits your campaign.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and surrounding Glen Eira suburbs, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or submit a request online.`
    },
    {
      question: `Do you paint townhouses and new unit developments in ${suburb}?`,
      answer: `Yes. A lot of ${suburb}'s larger blocks have been subdivided into townhouses and units over recent years, especially closer to the station and ${suburb} Park. These builds use render, Colorbond cladding and feature cladding rather than the timber and brick of the older bungalows, so we adjust preparation and coatings accordingly — and we're used to coordinating with owners corporations and multiple unit owners on the one job.`
    },
    {
      question: `Do you handle investment property and rental turnover painting in ${suburb}?`,
      answer: `Regularly. ${suburb}'s proximity to Chadstone Shopping Centre and the train line makes it popular with renters and investors, so a good share of our work here is turnover painting between tenancies — quick, tidy, budget-conscious repaints that get a property back on the market fast without cutting corners on prep.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Murrumbeena Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Murrumbeena — Californian bungalows and interwar. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hughesdale", link: "/painter-hughesdale" },
        { name: "Carnegie", link: "/painter-carnegie" },
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Malvern", link: "/painter-malvern" },
      ]}
      localExpertise={`We understand ${suburb}'s character — the Californian bungalows and interwar homes along Neerim Road and the streets around ${suburb} Station are what define this suburb, and they need painters who know how to care for rendered surfaces, timber and original brickwork. We bring proper preparation and premium products every time.`}
      propertyTypes={`${suburb}'s Californian bungalows, interwar and post-war brick homes, renovated family residences, townhouses and units across ${suburb} and the Glen Eira area.`}
      localContent={[
        {
          heading: `House Painters Serving Murrumbeena`,
          body: [
            `${suburb} is a friendly, leafy suburb in the City of Glen Eira, known for its Californian bungalows, interwar homes and the relaxed village feel around Neerim Road and ${suburb} Station. Jetblack Painting provides premium interior and exterior painting across ${suburb}, delivering careful preparation and a clean, durable finish on these established family homes.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable, tidy local team. From full exterior repaints to interior refreshes and cabinetry, we deliver sharp lines, premium coatings and a professional result with minimal disruption to your household.`,
          ],
        },
        {
          heading: `Bungalow and Family Home Painting in ${suburb}`,
          body: [
            `${suburb}'s Californian bungalows and interwar homes have characterful rendered surfaces, brick detailing and original timber that genuinely benefit from proper preparation and period-sympathetic colours. We fill and seal render cracks, prime bare timber properly and take care with colour choices that suit the home's era and the street — so the finish looks right and lasts for years.`,
            `For ${suburb}'s renovated and contemporary homes, we deliver smooth, long-lasting interiors and weather-resistant exteriors using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the era, you get meticulous preparation and a finish designed to stand the test of time.`,
          ],
        },
        {
          heading: `Townhouses and Unit Developments Near ${suburb} Station`,
          body: [
            `${suburb} has seen steady infill development over the past decade, with older weatherboard blocks subdivided into modern townhouses and units, particularly within walking distance of ${suburb} Station and ${suburb} Park. These newer builds lean on render, Colorbond cladding and feature brickwork rather than the painted timber of the original bungalow stock, and we tailor our preparation and coating systems to suit — smooth, contemporary finishes that hold up to Melbourne's weather.`,
            `Multi-unit projects often mean coordinating with an owners corporation or several individual owners on the one site. We provide clear written scopes, itemised pricing and the insurance documentation a committee needs before approving works, and we can stage access so residents aren't disrupted while the job is underway.`,
          ],
        },
        {
          heading: `Investment Properties and Rental Turnovers Near Chadstone`,
          body: [
            `${suburb}'s short run to Chadstone Shopping Centre and its position on the train line make it a popular suburb for renters, which means a meaningful share of our work here is turnover painting between tenancies. Landlords and property managers need a property repainted fast, on budget, and ready to re-list — we understand that timeline and work to it without skipping the preparation that makes a repaint actually last.`,
            `Whether it's a single rental unit or a portfolio of properties across ${suburb} and neighbouring Glen Eira suburbs, we provide clear written quotes and can work around tenancy changeover dates to minimise vacancy periods for landlords.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
