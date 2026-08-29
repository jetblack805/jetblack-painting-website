import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CranbournePainters() {
  const suburb = "Cranbourne";
  const faqs = [
    {
      question: `Do you paint both the older homes and the newer estates in ${suburb}?`,
      answer: `Yes, and they are genuinely different jobs. The established brick-veneer homes around the ${suburb} town centre are usually onto their second or third repaint, so the work is sanding back built-up edges and failing patches. Newer estate homes are still on builder-grade paint and need a proper first repaint rather than a touch-up.`
    },
    {
      question: `When does a newer ${suburb} estate home need its first repaint?`,
      answer: `Typically somewhere between five and ten years. Builder-grade paint on a new build is usually a thin two-coat system chosen for cost, and it tends to give up first on the north and west elevations that take the afternoon sun. Chalking, patchy colour or a surface that marks easily are the signs it is due.`
    },
    {
      question: `Can you paint while we stay living in the house?`,
      answer: `Yes. Most ${suburb} repaints are done with the family still in the home. We stage interiors room by room, use low-odour water-based products where the specification allows, and keep the work area sealed off so the rest of the house stays usable.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service ${suburb} and the wider City of Casey with free written quotes, itemising the preparation each surface needs — which on a first repaint of an estate home is most of the value. Call Jimmy on 0432 077 782.`
    }
  ];


  // Casey/Cardinia corridor — this page stays live but is out of the index
  // as of 2026-08-29. Rationale and the query-level numbers are in SEO-LOG.md.
  return (
    <SuburbPageTemplate
      noindex
      suburb={suburb}
      title="Cranbourne Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Cranbourne — brick-veneer family homes, double-storey homes and metal roofs. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Clyde", link: "/painter-clyde" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We service ${suburb} and the wider City of Casey — one of Melbourne's biggest growth corridors, where established brick-veneer homes sit alongside large newer estates around the Cranbourne town centre and botanic gardens. The housing is mostly brick and rendered family homes, from older established streets to near-new estate builds. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s brick-veneer family homes, rendered estate houses, double-storey homes, tile and metal roofs, and townhouses across the established and growth-corridor streets.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a major family suburb in the City of Casey, spanning established neighbourhoods and fast-growing new estates. Jetblack Painting provides premium interior and exterior painting suited to this housing — refreshing tired facades, giving newer estate homes their first professional repaint, brightening interiors and getting homes presentation-ready for sale or lease. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior, Interior and Roof Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, sanding back failing or chalking coatings, priming, and sealing gaps — before durable, weather-resistant topcoats go on. Inside, we stage the work room by room with low-odour premium paints so the home stays livable. For the suburb's tile and metal roofs, we clean, repair and prime before applying a fresh membrane coating that restores the look and protects the roof for years. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
