import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CranbournePainters() {
  const suburb = "Cranbourne";
  const faqs = [
    {
      question: `Do you paint estate and brick-veneer family homes in ${suburb}?`,
      answer: `Yes — ${suburb} is a mix of established brick-veneer homes and large newer estates, and both are core to our work here. We prepare and repaint rendered and brick facades, eaves, fascias and garage doors, and refresh interiors room by room with premium low-sheen and enamel systems, all with proper preparation so the finish stays even and lasts.`
    },
    {
      question: `Can you repaint a newer ${suburb} home for the first time?`,
      answer: `Absolutely. Many newer ${suburb} estate homes are due for their first repaint after 8–12 years, when the builder's coating starts to fade or chalk. We wash, prepare and recoat with premium exterior systems that restore the colour and add years of protection, all backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Yes. A clean, neutral repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the City of Casey and provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Cranbourne Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for brick-veneer family homes and new estate houses across ${suburb}, City of Casey. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
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
