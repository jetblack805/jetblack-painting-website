import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function McKinnonPainters() {
  const suburb = "McKinnon";
  const faqs = [
    {
      question: `Do you specialise in ${suburb}'s interwar and bungalow homes?`,
      answer: `Yes. ${suburb} is full of interwar homes and Californian bungalows, and we know these properties well — render crack filling, bare timber priming, careful colour selection that suits the era. Proper preparation makes the difference between a finish that lasts and one that peels in two years. We don't cut corners on prep.`
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Absolutely. ${suburb} properties are highly sought after and a sharp pre-sale repaint — neutral palette, tight execution, clean fascias and fresh interior — can add real dollars at auction. We can scope and complete pre-sale repaints efficiently on a timeline that works around your campaign.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the broader Glen Eira area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="McKinnon Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in McKinnon — Californian bungalows and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise={`We understand ${suburb}'s character — its interwar and Californian bungalow homes demand particular care with render preparation, timber priming and colour choices that respect the era. The ${suburb} Secondary College zone keeps property values high and expectations higher; we deliver the preparation and finish that matches both.`}
      propertyTypes={`${suburb}'s Californian bungalows and interwar homes, renovated family residences, period brick properties and low-rise units across ${suburb} and the surrounding Glen Eira suburbs.`}
      localContent={[
        {
          heading: `House Painters Serving McKinnon`,
          body: [
            `${suburb} is one of Glen Eira's most tightly held family pockets — known for its leafy streets, well-presented interwar and bungalow homes, and the sought-after ${suburb} Secondary College zone that keeps demand high. Jetblack Painting provides premium interior and exterior painting throughout ${suburb}, with the careful preparation and clean finish these established, high-value homes deserve.`,
            `As a local painter based nearby in Mordialloc, we make quoting and scheduling easy for ${suburb} homeowners. Every project comes with a clear written quote, thorough preparation and a respectful, tidy team — whether it's a full exterior repaint, an interior colour update or kitchen cabinetry.`,
          ],
        },
        {
          heading: `Period Home and Bungalow Painting in ${suburb}`,
          body: [
            `${suburb}'s interwar homes and Californian bungalows carry rendered surfaces, decorative brickwork and original timber that genuinely reward proper preparation — filling and sealing render cracks, priming bare timber, and choosing colours that suit the era and the streetscape. Skip the prep and the topcoat fails early; do it properly and the finish lasts for years.`,
            `For updated and contemporary ${suburb} homes, we deliver smooth, long-lasting interiors and durable exteriors using premium Dulux and Taubmans paint systems rated for Melbourne's conditions. Whatever the style, the standard is the same: meticulous prep, premium product and a result that holds up.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
