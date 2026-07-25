import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ClydeNorthPainters() {
  const suburb = "Clyde North";
  const faqs = [
    {
      question: `Do you paint new estate homes in ${suburb}?`,
      answer: `Yes — ${suburb} is one of Melbourne's fastest-growing suburbs, made up largely of near-new estate homes, and they're the core of our work here. Many are reaching the point where the builder's coating has started to fade or chalk and a professional repaint restores and protects them. We wash, prepare and recoat rendered and brick facades with premium exterior systems, backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `${suburb} is dominated by modern brick and rendered family homes — single and double-storey estate builds — along with townhouses. We handle exterior repaints, interior colour refreshes, eaves, fascias and garage doors, matching the paint system to each surface for a durable, even finish.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Yes. A clean, fresh repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the City of Casey and provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Clyde North Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Clyde North — double-storey family houses and metal roofs. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Cranbourne", link: "/painter-cranbourne" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We service ${suburb} and the wider City of Casey — one of the fastest-growing residential areas in the country, made up almost entirely of modern estate homes on new streets. The housing is predominantly brick and rendered single and double-storey family homes, many now reaching the age where their original builder's coating needs a professional repaint. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s modern brick and rendered estate homes, single and double-storey family houses, tile and metal roofs, and townhouses across the growth-corridor estates.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of Melbourne's newest and fastest-growing suburbs in the City of Casey, built almost entirely of modern estate homes. Jetblack Painting provides premium interior and exterior painting suited to this housing — giving near-new homes their first professional repaint, refreshing facades, brightening interiors and getting homes presentation-ready for sale or lease. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior, Interior and Roof Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, sanding back failing or chalking builder's coatings, priming, and sealing gaps — before durable, weather-resistant topcoats go on. Inside, we stage the work room by room with low-odour premium paints so the home stays livable. For the suburb's tile and metal roofs, we clean, repair and prime before applying a fresh membrane coating. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
