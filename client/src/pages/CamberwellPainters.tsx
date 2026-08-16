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
    },
    {
      question: `Do you paint the Tudor Revival, mock-Tudor style homes in ${suburb}?`,
      answer: `Yes. The decorative timber battens set against rendered infill on ${suburb}'s Tudor Revival homes need to be treated as real structural timber — sanded, primed and finished separately from the render — so the contrast between the two stays sharp rather than blurring together over time.`
    },
    {
      question: `Can you paint a shopfront around ${suburb} Junction?`,
      answer: `Yes. Strip shopfronts around the Junction share party walls and awnings, so we assess each tenancy's condition individually rather than treating the row as one job, and work around trading hours the same way we would for any occupied commercial strip.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Camberwell Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Camberwell — Edwardian homes and Californian bungalows. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Balwyn", link: "/painter-balwyn" },
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
        {
          heading: `Tudor Revival Detailing Around ${suburb}`,
          body: [
            `Alongside the Edwardian homes and Californian bungalows, pockets of ${suburb} — particularly the streets developed through the 1920s and 30s — carry Tudor Revival style homes with decorative half-timbering: dark timber battens set against a lighter rendered or roughcast infill. That contrast is deliberate and needs to stay crisp, which means masking and cutting in cleanly between the two rather than letting one colour bleed into the other.`,
            `The timber battens themselves are usually solid and structural rather than a decorative veneer, so they get treated as real exterior timber — sanded back, primed and finished in a durable enamel that holds the contrast against the render for years rather than fading to the same tone.`,
          ],
        },
        {
          heading: `${suburb} Junction and the Shopping Strip`,
          body: [
            `The shops around ${suburb} Junction share party walls and awnings much like a terrace row, and the practical challenge is different from a standalone shopfront — access for scaffolding is tighter, awning posts and verandah bullnoses need their own preparation separate from the facade above, and trading hours across a strip of adjoining businesses have to be worked around rather than just one tenant's.`,
            `We scope Junction and strip shopfront work the same way we would a row of terraces — condition-assessed individually even where the buildings share a wall, so one tenancy's peeling paint doesn't get lumped into a neighbour's still-sound coating, or vice versa.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
