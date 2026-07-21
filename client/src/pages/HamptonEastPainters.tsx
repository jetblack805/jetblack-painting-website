import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonEastPainters() {
  const suburb = "Hampton East";
  const faqs = [
    {
      question: `Do you paint post-war brick and californian bungalow homes in ${suburb}?`,
      answer: `Yes. ${suburb} is full of post-war brick veneer homes and californian bungalows, and each needs the right approach — masonry-appropriate preparation and coatings for rendered and brick surfaces, and careful timber priming and caulking on bungalow eaves, windows and weatherboard sections. We match the paint system to the surface for a durable, even finish.`
    },
    {
      question: `Can you repaint a ${suburb} home before we sell or lease it?`,
      answer: `Absolutely. A clean, neutral repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hampton East Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for post-war brick homes, californian bungalows and family residences across ${suburb}. 5-star rated, fully licensed, free quotes.`}
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
