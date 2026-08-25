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
    },
    {
      question: `Do you paint roughcast render on ${suburb} homes?`,
      answer: `Yes, and it needs a different approach to a flat wall. Roughcast holds dirt and moss in its texture, so it gets washed down properly before anything else happens, and any cracked or drummy sections are made good rather than painted over. The texture also drinks paint — coverage is nothing like a smooth surface, which is why a rate quoted per square metre over the phone tends to be wrong on these houses. We work it out on site.`
    },
    {
      question: `Can you work room by room while we stay in the house?`,
      answer: `Yes, and most ${suburb} interior jobs run that way. We stage it so you keep usable rooms throughout, seal off the area being worked on, and protect floors, leadlight and fixed joinery before sanding starts. Furniture is moved and covered rather than shuffled around you. It usually adds a little time compared with an empty house, and that gets built into the timeline rather than sprung on you.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Malvern Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Malvern — Edwardian residences and Victorian terraces. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Malvern East", link: "/painter-malvern-east" },
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
        {
          heading: `The Surfaces ${suburb} Houses Actually Have`,
          body: [
            `Between the Edwardian and Victorian stock and the Californian bungalows through the side streets, ${suburb} throws up a particular set of surfaces, and each one behaves differently. Roughcast render holds dirt and moss in its texture and drinks far more paint than a smooth wall. Timber fretwork, verandah posts and window sashes carry decades of build-up in the profiles, and that has to come back to a sound edge rather than be buried under another coat.`,
            `Bungalow porches and the deep eaves common on these houses shelter some elevations while leaving others fully exposed, so the same building can need real repair on one side and little more than a clean and recoat on the other. That is why the quote comes after walking the property rather than from a floor area — the number changes with what the surfaces are doing, not with how big the house is.`,
          ],
        },
        {
          heading: `Painting a Home You Are Still Living In`,
          body: [
            `Most ${suburb} interior work happens around a household that has not moved out, and that shapes how the job runs. We stage it so there are always usable rooms, seal off the section being worked on, and protect floors, leadlight and fixed joinery before any sanding starts. Furniture gets moved and covered properly rather than pushed to the middle and left.`,
            `It takes a little longer than working through an empty house, and that goes into the timeline up front rather than turning into a surprise halfway through. Dust is the part people underestimate on a period home — old paint, old plaster and detailed trim make plenty of it, so containment and cleaning up daily matter more here than on a new build.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
