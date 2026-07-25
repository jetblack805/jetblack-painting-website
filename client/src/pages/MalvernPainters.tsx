import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MalvernPainters() {
  const suburb = "Malvern";
  const faqs = [
    {
      question: `Do you paint ${suburb}'s Edwardian and Victorian homes?`,
      answer: `Yes. ${suburb} is known for its grand Edwardian and Victorian period homes, and we're experienced with heritage-appropriate palettes, meticulous timber and ornamental detailing, and lead-paint-safe preparation. We protect both the look and the long-term value of these properties — the finish has to be right.`
    },
    {
      question: `How long does a house repaint take in ${suburb}?`,
      answer: `Most ${suburb} homes are completed within 5 to 10 working days depending on size and the amount of period detailing involved. We provide a clear, detailed timeline with every quote so there's minimal disruption to your household.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Absolutely. We provide free, no-obligation written quotes across ${suburb} and Malvern East, with the full scope and preparation itemised up front so you know exactly what's included. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Malvern Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Malvern — Edwardian residences and Victorian terraces. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Armadale", link: "/painter-armadale" },
      ]}
      localExpertise={`We understand ${suburb}'s elevated expectations — from the grand Edwardian residences on Finch Street and Glenferrie Road to the elegant Victorian terraces and architect-designed contemporary homes that make up ${suburb}'s prestigious streetscapes. Jetblack Painting delivers premium preparation and finishes that match what these properties demand.`}
      propertyTypes={`${suburb}'s Edwardian residences, Victorian terraces, renovated heritage homes and architect-designed contemporary properties across ${suburb} and Malvern East.`}
      localContent={[
        {
          heading: `Premium House Painters Serving Malvern and Malvern East`,
          body: [
            `${suburb} is one of Melbourne's most established and prestigious suburbs — known for leafy, tree-lined streets, grand period homes and the boutique shopping strips of Glenferrie Road and High Street. Jetblack Painting delivers refined interior and exterior painting that lives up to these homes' character and value — from stately Edwardian and Victorian residences to elegant contemporary renovations across ${suburb} and Malvern East.`,
            `We treat every ${suburb} project with a focus on detail: careful preparation, sharp cutting-in around decorative features, and premium coatings that suit both heritage character and modern design. Our written quotes lay out the full scope clearly and completely — all preparation included up front, no scope creep once work begins.`,
          ],
        },
        {
          heading: `Heritage Colour and Period Preparation in ${suburb}`,
          body: [
            `Many ${suburb} streetscapes carry heritage significance, and getting the colours and preparation right genuinely matters. We're experienced with period-appropriate palettes for Edwardian and Victorian façades — restoring timber mouldings, ornamental detailing and lead-paint-safe surfaces that make these homes look as they should. Protect the look and you protect the property's long-term value.`,
            `For ${suburb}'s renovated and architect-designed homes, we deliver the crisp, durable modern finishes that premium interiors require — using proven Dulux and Taubmans paint systems built to handle Melbourne's variable climate and maintain their look year after year.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
