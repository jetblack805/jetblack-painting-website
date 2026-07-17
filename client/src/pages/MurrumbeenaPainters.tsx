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
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Murrumbeena Painters | Bungalow & Family Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Specialists in Californian bungalows, interwar homes and family properties across ${suburb} and Glen Eira. Thorough prep, premium finishes, free quotes.`}
      neighbouringSuburbs={[
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
      ]}
      faqs={faqs}
    />
  );
}
