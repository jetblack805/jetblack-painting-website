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
    },
    {
      question: `Why has the shaded side of my ${suburb} house gone green or black?`,
      answer: `That is almost always mould and lichen rather than dirt, and it is a direct consequence of ${suburb}'s tree cover. Elevations that sit under canopy stay damp for hours after the rest of the house has dried, and that is all the growth needs. Washing it off without treating it means it returns within a season, so those walls get a proper treatment and a topcoat with a mould inhibitor rather than a simple repaint.`
    },
    {
      question: `Do you paint cedar cladding and exposed timber on ${suburb}'s split-level homes?`,
      answer: `Yes, though it is worth a conversation first. A lot of ${suburb}'s 1970s split-levels use cedar cladding and exposed beams that were originally oiled or stained rather than painted. Both can be painted and the result lasts well, but it is effectively a one-way decision — going back to a natural oiled finish afterwards means stripping, which is slow and rarely worth it. We will tell you that at the quote rather than after.`
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
        {
          heading: `Painting Against ${suburb}'s Bushland Edge`,
          body: [
            `What separates ${suburb} from most of the suburbs we work in is the tree cover. Blocks back onto remnant bushland and the Mullum Mullum Creek corridor, and mature eucalypts sit over houses rather than beside them. That shade is the whole appeal of living here, and it also changes what paintwork has to survive. Walls under canopy dry slowly after rain, and surfaces that stay damp grow mould and lichen — the green and black staining you see creeping across south and south-east elevations while the sunny walls look fine.`,
            `Painting over that growth does not work; it comes back through the new coating. Those elevations get treated and killed off first, then a topcoat carrying a mould inhibitor. Gum litter is the other factor — leaves and bark fill gutters, gutters overflow, and the run-off leaves dark tracking down fascias and window heads. We flag blocked or overflowing gutters at the quote, because repainting a fascia without sorting the cause just resets a clock.`,
          ],
        },
        {
          heading: `Split-Level and Cedar-Clad Homes from the 1970s`,
          body: [
            `Much of ${suburb} was built out through the 1960s and 70s, and that era left a distinctive housing stock: split-level homes stepped down sloping blocks, wide eaves, exposed rafters and a lot of cedar cladding. These are not the brick-and-render facades of newer estates, and they do not take the same approach. Timber that has been oiled or stained for decades needs different preparation from a rendered wall — the old coating has to be assessed for what it actually is before anything goes over it.`,
            `Split-levels also mean the exterior is rarely one straight run. Stepped rooflines, high gable ends and elevations that drop away down the slope all need proper access rather than an over-extended ladder, and that gets planned into the quote instead of being improvised on the day.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
