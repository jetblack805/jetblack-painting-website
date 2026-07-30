import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ClydeNorthPainters() {
  const suburb = "Clyde North";
  const faqs = [
    {
      question: `When does a new ${suburb} home need its first repaint?`,
      answer: `Usually five to ten years after handover. ${suburb} is almost entirely new estate housing, so nearly every property here is still wearing builder-grade paint — a thin, cost-driven system that fades and chalks early, particularly on the elevations taking full afternoon sun.`
    },
    {
      question: `Is a first repaint different from repainting an older home?`,
      answer: `Yes, and it is often simpler. There are no decades of built-up coats or old repairs to sand back, so more of the budget goes into the coating itself rather than the preparation. What does matter is priming any bare or patched plaster properly, since new-build walls often have settlement cracks that were only filled once.`
    },
    {
      question: `Can you work on the narrow side access typical of estate blocks?`,
      answer: `Yes. Estate blocks in ${suburb} are tight, and side access between houses is often under a metre. We plan the setup at the quote — smaller platforms where a full scaffold will not fit, and agreement with you on where equipment stands — rather than turning up and improvising.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service ${suburb} and the wider City of Casey with free written quotes. Call Jimmy on 0432 077 782.`
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
