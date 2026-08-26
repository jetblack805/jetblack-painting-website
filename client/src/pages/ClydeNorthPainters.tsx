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
    },
    {
      question: `Do you paint shops, medical suites and childcare centres in ${suburb}?`,
      answer: `Yes — commercial work is a real part of what we do here. A growth corridor fills in with the businesses that serve it, so ${suburb} has a steady pipeline of neighbourhood retail, medical and allied-health suites, childcare, gyms and cafes, much of it either fitting out for the first time or repainting after a few hard years of use. We quote these with an itemised written scope and provide insurance certificates before work starts.`
    },
    {
      question: `Does my estate's design guidelines affect what colour I can repaint?`,
      answer: `Estate design guidelines can restrict your colour choice, and it is worth checking before you settle on one. Many Casey estates run design guidelines or covenants that govern exterior colours and materials, and they typically apply for a set period after the estate is released rather than forever. We will raise it at the quote if a colour you are considering looks likely to run into one — but the guidelines are held by your estate or owners corporation, so confirming what applies to your block is a call you make, not us.`
    }
  ];


  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Clyde North Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Clyde North — double-storey family houses and metal roofs. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Clyde", link: "/painter-clyde" },
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
        },
        {
          heading: `Commercial and Fitout Painting Across ${suburb}`,
          body: `A growth corridor does not just fill up with houses — it fills up with the businesses that serve them, and ${suburb} has been doing that for years now. Neighbourhood retail strips, medical and allied-health suites, childcare centres, gyms and cafes have all followed the housing, and each brings its own painting work: first fitouts on a builder's shell, tenancy changeovers between operators, and facade repaints on buildings that went up early in the corridor's growth and are now showing it. Commercial jobs are quoted with a written scope itemising surfaces, products and coats, with insurance certificates supplied before anyone starts.`
        },
        {
          heading: `Working Around Trade and Estate Design Rules`,
          body: `Commercial work in ${suburb} is usually less about the painting than the timing. A trading business cannot close for a week, so the work gets staged — after hours, across weekends, or zone by zone so half a tenancy stays open while the other half is done. We agree that sequence at the quote rather than discovering it on day one. On the residential side, the thing most likely to catch owners out is estate design guidelines: many Casey estates set rules on exterior colours and materials for a period after release. If a colour you are weighing up looks likely to run into one, we will say so — though the guidelines themselves sit with your estate or owners corporation, so the final check is yours to make.`
        }
      ]}
      faqs={faqs}
    />
  );
}
