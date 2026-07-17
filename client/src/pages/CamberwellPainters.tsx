import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CamberwellPainters() {
  const suburb = "Camberwell";
  const faqs = [
    {
      question: `Do you paint ${suburb}'s Edwardian and Californian bungalow homes?`,
      answer: `Yes. ${suburb} is known for its Edwardian homes and Californian bungalows, and we're experienced with their timber detailing, rendered surfaces and period character. We use heritage-sympathetic colour palettes, meticulous preparation and lead-paint-safe methods on older homes to keep them looking right and protect their long-term value.`
    },
    {
      question: `How long does a house repaint take in ${suburb}?`,
      answer: `Most ${suburb} homes are completed within 5 to 10 working days depending on size and the amount of preparation and period detailing required. We provide a detailed timeline with every quote so there's minimal disruption to your household.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Absolutely. We provide free, no-obligation written quotes across ${suburb}, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or submit a request online to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Camberwell Painters | Period Home & Heritage Specialists | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Specialists in Edwardian homes, Californian bungalows and modern renovations across ${suburb} and Canterbury. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Kew", link: "/painter-kew" },
      ]}
      localExpertise={`We understand ${suburb}'s tree-lined streets and diverse architectural character — from grand Edwardian homes on Cooloongatta Road to the Californian bungalows lining the quieter residential streets around ${suburb} Junction. Our team has extensive experience with period preparation and premium finishes that enhance ${suburb}'s prestigious streetscapes.`}
      propertyTypes={`${suburb}'s Edwardian homes, Californian bungalows, rendered period façades, modern renovations and apartment buildings across ${suburb} and Canterbury.`}
      localContent={[
        {
          heading: `House Painters Serving Camberwell and Canterbury`,
          body: [
            `Camberwell is prized for its elegant Edwardian and Californian bungalow homes, tree-lined avenues and the busy shopping precinct around Camberwell Junction. Jetblack Painting provides premium interior and exterior painting that respects the character and the value of these classic homes — while delivering the durable, flawless finish that Camberwell homeowners expect.`,
            `From full exterior repaints of period façades to interior colour refreshes, feature walls and cabinetry, we bring detailed preparation and a careful, tidy approach to every ${suburb} project. Our quotes are clear and complete, with all preparation included up front — no scope creep, no surprises once work begins.`,
          ],
        },
        {
          heading: `Period Home Painting and Heritage Colour in ${suburb}`,
          body: [
            `${suburb}'s Edwardian homes and Californian bungalows have distinctive timber detailing, rendered surfaces and fine roof lines that need the right preparation and paint systems to last. We handle proper crack filling on render, bare timber priming, meticulous cutting-in on decorative details and heritage-sympathetic colour choices — all standard in our approach, not extras.`,
            `For ${suburb}'s renovated and modern properties, we deliver smooth contemporary finishes using premium Dulux and Taubmans coatings built to handle Melbourne's climate and stay looking sharp for years. Whichever era your home is, the standard stays the same: meticulous preparation and a finish applied by a team that treats your property with respect.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
