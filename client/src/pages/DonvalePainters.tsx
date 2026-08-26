import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DonvalePainters() {
  const suburb = "Donvale";
  const faqs = [
    {
      question: `Do you paint large homes on big blocks in ${suburb}?`,
      answer: `Yes. Large family homes on generous treed blocks are exactly what we are set up for. Proper access equipment, an experienced crew, and thorough preparation for both weatherboard and rendered facades that have taken real sun and weather.`
    },
    {
      question: `Can you match or update exterior colours on ${suburb} homes?`,
      answer: `Yes. We help homeowners here update exterior colours to suit the house, its surroundings and where taste has moved. Refresh what is there, or take it somewhere new. We carry a wide range of Dulux and Taubmans colours and can talk options through on site.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. Quotes are free, written, and carry no obligation, across ${suburb} and the City of Manningham. The full scope and the preparation are itemised up front. Call Jimmy on 0432 077 782 or ask for one online.`
    },
    {
      question: `Why has the shaded side of my ${suburb} house gone green or black?`,
      answer: `Green or black growth on a shaded wall is almost always mould and lichen rather than dirt, and it comes straight from ${suburb}'s tree cover. Walls under canopy stay damp for hours after the rest of the house has dried. That is all the growth needs. Washing it off without treating it means it is back within a season. So those walls get a proper treatment first, then a topcoat with a mould inhibitor, rather than a simple repaint.`
    },
    {
      question: `Do you paint cedar cladding and exposed timber on ${suburb}'s split-level homes?`,
      answer: `Yes, though it is worth talking through first. A lot of the 1970s split-levels here use cedar cladding and exposed beams that were oiled or stained rather than painted. Both can be painted and the result lasts well. But it is effectively a one-way decision. Going back to a natural oiled finish means stripping, which is slow and rarely worth it. We will tell you that at the quote, not after.`
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
      localExpertise={`${suburb} has a distinct mix of established homes. Large weatherboard and rendered family houses, on generous tree-lined blocks, in the City of Manningham. These homes take real sun, and Melbourne's weather swings hard between seasons. So we use robust preparation and premium weather-resistant coatings that hold up over years rather than months.`}
      propertyTypes={`Large established family homes on generous blocks, timber-clad and rendered facades, decking and eaves, plus modern renovations across the ${suburb} and Doncaster corridor.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is a leafy, semi-rural suburb in the City of Manningham. Big blocks, established family homes, and a green treed feel that sets it apart from the inner suburbs. Houses here often have substantial weatherboard or rendered facades, wide eaves, decking and generous outdoor areas. All of that needs careful paintwork to keep its condition and its street appeal.`,
            `We paint inside and out across ${suburb}, with the thorough preparation and durable finish these larger properties deserve. Every job comes with a written quote and a crew that respects your property. Full exterior repaint, a new interior colour scheme, or a deck restoration.`,
          ],
        },
        {
          heading: `Large Home and Timber Preparation in ${suburb}`,
          body: [
            `Homes on big treed blocks see a lot of weather. UV, wind and damp winters punish paintwork that was not prepared properly. So we prime bare timber, fill and sand carefully, treat rust on metal, then finish with premium weather-resistant topcoats built to last through seasons.`,
            `Rendered and modern homes here get smooth interiors and durable exteriors, using Dulux and Taubmans systems. Large homes mean more surface to cover. We bring the right crew size and the right access equipment, so the job moves without the quality slipping.`,
          ],
        },
        {
          heading: `Painting Against ${suburb}'s Bushland Edge`,
          body: [
            `What sets ${suburb} apart from most suburbs we work in is the tree cover. Blocks back onto remnant bushland and the Mullum Mullum Creek corridor. Mature eucalypts sit over the houses rather than beside them. That shade is the whole appeal of living here, and it changes what the paintwork has to survive. Walls under canopy dry slowly after rain. Surfaces that stay damp grow mould and lichen. That is the green and black staining creeping across south and south-east walls while the sunny side still looks fine.`,
            `Painting over that growth does not work. It comes back through the new coating. So those walls get treated and killed off first, then a topcoat carrying a mould inhibitor. Gum litter is the other factor. Leaves and bark fill the gutters, the gutters overflow, and the run-off leaves dark tracking down fascias and window heads. We flag blocked or overflowing gutters at the quote. Repainting a fascia without fixing the cause just resets the clock.`,
          ],
        },
        {
          heading: `Split-Level and Cedar-Clad Homes from the 1970s`,
          body: [
            `Much of ${suburb} was built through the 1960s and 70s, and that era left its mark. Split-level homes stepped down sloping blocks. Wide eaves. Exposed rafters. A lot of cedar cladding. These are not the brick-and-render facades of a newer estate, and they do not take the same approach. Timber that has been oiled or stained for decades needs different preparation from a rendered wall. The old coating has to be identified for what it actually is before anything goes over it.`,
            `Split-levels also mean the exterior is rarely one straight run. Stepped rooflines, high gable ends, and walls that drop away down the slope. All of that needs proper access rather than an over-extended ladder, and it gets planned into the quote instead of improvised on the day.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
