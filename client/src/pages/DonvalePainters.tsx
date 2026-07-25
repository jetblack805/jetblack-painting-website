import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DonvalePainters() {
  const suburb = "Donvale";
  const faqs = [
    {
      question: `Do you paint large homes on big blocks in ${suburb}?`,
      answer: `Yes. ${suburb}'s large family homes on generous, treed blocks are exactly what we're set up for — proper access equipment, experienced team, and thorough preparation for both weatherboard and rendered façades that have taken real sun and weather exposure. You get a clean, durable finish that holds up.`
    },
    {
      question: `Can you match or update exterior colours on ${suburb} homes?`,
      answer: `Absolutely. We help ${suburb} homeowners modernise exterior colour schemes that suit the home's style, the surroundings and current trends — whether you want to refresh an existing look or take it in a new direction. We carry a wide range of Dulux and Taubmans colour decks and can advise on what works.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the City of Manningham, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Donvale Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Donvale — large established family homes on generous blocks and rendered façades. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Ringwood", link: "/painter-ringwood" },
        { name: "Croydon", link: "/painter-croydon" },
      ]}
      localExpertise={`We understand ${suburb}'s unique mix of established homes — large weatherboard and rendered family residences on generous, tree-lined blocks in the City of Manningham. These homes face real sun exposure and Melbourne's variable climate, so we use robust preparation systems and premium weather-resistant coatings that protect the property for the long term.`}
      propertyTypes={`${suburb}'s large established family homes on generous blocks, timber-clad and rendered façades, decking and eaves, plus modern renovations across the ${suburb} and Doncaster corridor.`}
      localContent={[
        {
          heading: `House Painters Serving Donvale`,
          body: [
            `${suburb} is a leafy, semi-rural suburb in the City of Manningham, known for its large blocks, established family homes and the green, treed feel that sets it apart from Melbourne's inner suburbs. Homes here often have substantial weatherboard or rendered façades, wide eaves, decking and generous outdoor areas that need experienced, careful paintwork to maintain their condition and street appeal.`,
            `Jetblack Painting provides premium interior and exterior painting across ${suburb}, delivering the thorough preparation and durable finish these larger properties deserve. Every project comes with a clear written quote and a professional team that respects your property — whether it's a full exterior repaint, a new interior colour scheme or a deck restoration.`,
          ],
        },
        {
          heading: `Large Home and Timber Preparation in ${suburb}`,
          body: [
            `${suburb}'s homes on big, treed blocks see significant weather exposure — UV, wind and Melbourne's damp winters can punish unprepared paintwork quickly. We use thorough surface preparation: proper timber priming on bare wood, careful filling and sanding, rust treatment on metal surfaces, and premium weather-resistant topcoats that hold up through seasons and years.`,
            `For ${suburb}'s rendered and modern homes, we deliver smooth, crisp interiors and durable exteriors using premium Dulux and Taubmans systems. Large homes mean more surface area to manage — we bring the right team size and access equipment to do it efficiently without compromising on quality.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
