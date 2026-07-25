import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MoorabbinPainters() {
  const suburb = "Moorabbin";
  const faqs = [
    {
      question: `Do you paint weatherboard and brick homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a good mix of weatherboard and brick family homes from different eras, and we tailor our preparation to each — bare timber priming on weatherboard, render repair on older brick-veneer, the right primer for each surface. Proper prep is what makes the finish last in Melbourne's climate.`
    },
    {
      question: `Do you handle commercial painting in ${suburb}?`,
      answer: `Yes. ${suburb} has a significant commercial and light industrial strip around South Road and the DFO precinct, and we regularly repaint shopfronts, warehouses and mixed-use buildings in the area. We scope commercial work clearly and can schedule around business hours to minimise disruption.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding City of Kingston area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Moorabbin Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Moorabbin — interwar, weatherboard family homes and renovated residences. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`Based in nearby Mordialloc, we're a genuinely local painter for ${suburb} — no call centres, no dispatching from across Melbourne. We know the area's mix of family residences, interwar homes and commercial premises along South Road well, and we're on site quickly with the right team for the job.`}
      propertyTypes={`${suburb}'s interwar and post-war brick and weatherboard family homes, renovated residences, commercial premises and light industrial properties along the South Road corridor.`}
      localContent={[
        {
          heading: `Local Painters Serving Moorabbin`,
          body: [
            `${suburb} is a practical, well-connected suburb in the City of Kingston, home to a mix of family residences, interwar homes and commercial and light industrial properties along South Road and around the DFO ${suburb} precinct. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter — we're on site fast and deliver the kind of personal service that larger operators can't.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable team. From full house repaints to commercial shopfront repaints and kitchen cabinetry, we deliver sharp lines, premium coatings and a professional result with minimal disruption to your home or business.`,
          ],
        },
        {
          heading: `Residential and Commercial Painting in ${suburb}`,
          body: [
            `${suburb}'s family homes and interwar properties benefit from proper preparation — render repair, bare timber priming and durable, weather-resistant topcoats suited to Melbourne conditions. We keep these homes looking their best with premium coatings from Dulux and Taubmans, applied by an experienced team that doesn't rush the prep.`,
            `For ${suburb}'s shops, offices and industrial premises, we offer flexible commercial painting scheduled around your business — including early-morning or weekend work where needed. Commercial projects are scoped clearly, communicated throughout and completed to a professional standard that holds up.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
