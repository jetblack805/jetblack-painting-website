import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DingleyVillagePainters() {
  const suburb = "Dingley Village";
  const faqs = [
    {
      question: `Do you paint family homes and brick-veneer houses in ${suburb}?`,
      answer: `Yes — brick-veneer and clad family homes are the mainstay of our ${suburb} work. We prepare and repaint rendered and brick facades, eaves, fascias and garage doors, and refresh interiors room by room with premium low-sheen and enamel systems. Every job includes proper preparation so the finish stays even and lasts.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Absolutely. A clean, neutral repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you do roof painting in ${suburb}?`,
      answer: `Yes. Many ${suburb} homes have tile or metal roofs that benefit from cleaning, repairs and a fresh membrane coating. We pressure wash, repair and prime before coating, which restores the look and adds years of protection. Roof work is covered by our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dingley Village Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for brick-veneer family homes, established houses and modern townhouses across ${suburb}, Kingston. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Heatherton", link: "/painter-heatherton" },
        { name: "Clarinda", link: "/painter-clarinda" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We know ${suburb} well — a settled, family-oriented pocket of the City of Kingston ringed by Braeside Park, golf courses and parkland, just minutes from our Mordialloc base. The suburb's housing is mostly post-war and later brick-veneer family homes, 1970s and 1980s builds, and newer townhouse developments around The Village centre. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s brick-veneer family homes, 1970s–80s houses, rendered and clad exteriors, tile and metal roofs, and newer townhouse and estate developments.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a quiet, green, family-focused suburb in the City of Kingston, built largely around comfortable brick-veneer and clad homes on generous blocks. Jetblack Painting provides premium interior and exterior painting suited to this housing — refreshing tired facades, brightening interiors and getting homes presentation-ready for sale or lease. As a local painter based nearby in Mordialloc, we know the area's streets and homes well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior, Interior and Roof Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, scraping and sanding back failing coatings, priming bare timber, and sealing gaps — before durable weather-resistant topcoats go on. Inside, we stage the work room by room with low-odour premium paints so the home stays livable. For the suburb's tile and metal roofs, we clean, repair and prime before applying a fresh membrane coating that restores the look and protects the roof for years. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
