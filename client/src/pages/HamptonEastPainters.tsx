import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonEastPainters() {
  const suburb = "Hampton East";
  const faqs = [
    {
      question: `Do you paint weatherboard cottages in ${suburb}?`,
      answer: `Yes. ${suburb} still has a good number of weatherboard cottages among the brick-veneer streets, and timber needs a different approach — boards scraped back to a sound edge, splits and damaged sections repaired, and bare timber spot-primed before topcoats, because timber moves and a brittle coating cracks at the board joins.`
    },
    {
      question: `How is painting a post-war brick veneer different from a weatherboard home?`,
      answer: `Mostly in the preparation. Brick veneer and rendered surfaces in ${suburb} are stable, so the work is washing off chalking, filling cracks and sealing before topcoats. Weatherboard moves with moisture and temperature, so it needs a flexible system and far more attention to bare timber and joins. The two are quoted differently for that reason.`
    },
    {
      question: `Can you repaint a ${suburb} home before we sell or lease it?`,
      answer: `Yes, and it's common work for us here given how tightly ${suburb} sits between Hampton and Moorabbin. We work to agent timelines with durable, neutral, easy-clean finishes, concentrating on the surfaces that carry a photograph and an inspection — facade, front door, walls, ceilings and trims.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hampton East Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Hampton East — post-war brick veneer homes and Californian bungalows. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`An occupied ${suburb} home repainted throughout — hallway, stairwell and landing taken from a warm cream to a cool off-white, with the family living around the work.`}
      projectImages={[
        {
          // Same hallway, same camera position, mid-job and finished. Kept as a
          // pair deliberately: the value is that the walls and the floor
          // protection are the only things that change between the two frames.
          src: "/projects/project-hampton-east-hallway-during.webp",
          small: "/projects/project-hampton-east-hallway-during-800.webp",
          width: 1400,
          height: 1867,
          alt: `Hallway in a ${suburb} home mid-repaint, floor fully covered with canvas drop sheets and a ladder and paint tins set up in the room beyond`,
          caption: `The same hallway mid-job. This was an occupied house, so it is brushed and rolled rather than sprayed, and the floor is covered wall to wall before anything is opened. Canvas, not plastic — plastic slides underfoot on a hard floor and it does not hold a spill.`,
        },
        {
          src: "/projects/project-hampton-east-hallway-after.webp",
          small: "/projects/project-hampton-east-hallway-after-800.webp",
          width: 1400,
          height: 1867,
          alt: `The same ${suburb} hallway after repainting, walls and ceiling in a cool off-white with white trims, carpet uncovered and the house back in use`,
          caption: `Finished, sheets up, carpet back. The warm cream has gone cool, which is the change that does the work in a narrow hall — a warm wall closes the space in, a cooler one pushes the walls apart. Trims and architraves stay white so the doorways still read as edges.`,
        },
        {
          src: "/projects/project-hampton-east-stair-landing.webp",
          small: "/projects/project-hampton-east-stair-landing-800.webp",
          width: 1400,
          height: 1867,
          alt: `Stair landing in a ${suburb} home during repainting, with masking and floor protection in place below a high window and a dark timber balustrade`,
          caption: `The landing, with the protection still down. A stairwell is the one interior space you cannot reach off a plain ladder — the floor falls away under you — so it is staged off the treads, and the cutting-in around the high window happens from an awkward position rather than a comfortable one.`,
        },
        {
          src: "/projects/project-hampton-east-stairwell-window.webp",
          small: "/projects/project-hampton-east-stairwell-window-800.webp",
          width: 1400,
          height: 1867,
          alt: `Stairwell wall in a ${suburb} home after repainting, in a cool off-white with a white-framed window and cornice above the stairs`,
          caption: `The stairwell wall after coating. A tall unbroken wall like this is where side light from the window shows up every roller lap and every skipped bit of filling, so it is laid off in one direction and kept wet edge to wet edge rather than worked back over.`,
        },
      ]}
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Highett", link: "/painter-highett" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
      ]}
      localExpertise={`We know ${suburb}'s housing mix well — the post-war brick veneer homes, californian bungalows and family residences that fill the streets between Hampton and Moorabbin. Our team uses surface-appropriate preparation and premium coatings, from masonry systems on rendered and brick facades to careful timber priming on bungalow eaves, windows and weatherboard, so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s post-war brick veneer homes, californian bungalows, weatherboard cottages, renovated family homes and newer townhouse developments.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is a settled, family-friendly Bayside suburb where post-war brick veneer homes, californian bungalows and renovated family residences sit between Hampton, Highett and Moorabbin. Jetblack Painting provides premium interior and exterior painting built for this housing mix — refreshing tired facades, brightening interiors and getting homes presentation-ready for sale or lease.`,
            `As a local painter based nearby in Mordialloc, we know ${suburb}'s homes and streets well. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site — whether it's a full exterior repaint, an interior colour update or a pre-sale refresh.`,
          ],
        },
        {
          heading: `Brick, Render and Bungalow Expertise in ${suburb}`,
          body: [
            `${suburb}'s post-war homes are typically brick veneer or rendered masonry, which need the right preparation — sound crack repair, masonry-appropriate primers and flexible, weather-resistant topcoats — so the finish stays even and lasts through Melbourne's temperature swings and damp winters.`,
            `The suburb's californian bungalows and weatherboard homes need particular care on timber — bare timber priming, careful filling and sharp caulking around eaves, windows and fascias to keep moisture out. Whether it's a heritage bungalow, a post-war brick home or a newer townhouse, we tailor the paint system to the surface for a durable, flawless result.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
