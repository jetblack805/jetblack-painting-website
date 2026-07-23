import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function NarreWarrenPainters() {
  const suburb = "Narre Warren";
  const faqs = [
    {
      question: `Do you paint estate and brick-veneer family homes in ${suburb}?`,
      answer: `Yes — ${suburb} is largely made up of brick-veneer and rendered family homes across established streets and estate developments, and they're the core of our work here. We prepare and repaint rendered and brick facades, eaves, fascias and garage doors, and refresh interiors room by room with premium low-sheen and enamel systems, all with proper preparation so the finish stays even and lasts.`
    },
    {
      question: `Can you repaint a newer ${suburb} home for the first time?`,
      answer: `Absolutely. Many ${suburb} estate homes are due for their first repaint after 8–12 years, when the builder's coating fades or chalks. We wash, prepare and recoat with premium exterior systems that restore the colour and add years of protection, backed by our 5-year written workmanship guarantee.`
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
      title="Narre Warren Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for brick-veneer family homes and estate houses across ${suburb}, City of Casey. 5-star rated, fully licensed, free quotes.`}
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
