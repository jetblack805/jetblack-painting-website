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
