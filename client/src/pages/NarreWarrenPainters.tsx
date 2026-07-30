import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function NarreWarrenPainters() {
  const suburb = "Narre Warren";
  const faqs = [
    {
      question: `Do you paint brick-veneer family homes in ${suburb}?`,
      answer: `Yes — brick veneer is the bulk of ${suburb} housing and the mainstay of our work here. Rendered and painted brick facades, eaves, fascias and garage doors outside; walls, ceilings, trims and doors inside, all over proper preparation rather than a coat straight over the top.`
    },
    {
      question: `Do you take on commercial work around the Fountain Gate precinct?`,
      answer: `Yes. Alongside the residential streets, ${suburb} has a substantial retail and commercial precinct, and we paint shops, offices and tenancies there. That work is scheduled around trading hours, with after-hours and weekend shifts available so the premises keeps operating.`
    },
    {
      question: `How long does a full exterior repaint take in ${suburb}?`,
      answer: `A typical single-storey brick-veneer home runs about three to five working days, depending on the condition of the render and how much repair the eaves and fascias need. Weather is the main variable — we schedule around wet spells rather than pushing coats on in unsuitable conditions.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service ${suburb} and the wider City of Casey with free written quotes covering the full scope, preparation and the specific products used. Call Jimmy on 0432 077 782.`
    }
  ];


  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Narre Warren Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Narre Warren — brick-veneer family homes, double-storey homes and metal roofs. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We service ${suburb} and the wider City of Casey — a large, family-oriented part of Melbourne's southeast growth corridor centred on the Fountain Gate precinct. The housing is predominantly brick-veneer and rendered family homes, from established neighbourhoods to newer estate developments. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s brick-veneer family homes, rendered estate houses, double-storey homes, tile and metal roofs, and townhouses across the established and newer estate streets.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of the southeast's largest family suburbs, spanning established neighbourhoods and estate developments around Fountain Gate. Jetblack Painting provides premium interior and exterior painting suited to this housing — refreshing tired facades, giving newer estate homes their first professional repaint, brightening interiors and getting homes presentation-ready for sale or lease. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior, Interior and Roof Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, sanding back failing or chalking coatings, priming, and sealing gaps — before durable, weather-resistant topcoats go on. Inside, we stage the work room by room with low-odour premium paints so the home stays livable. For the suburb's tile and metal roofs, we clean, repair and prime before applying a fresh membrane coating. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
