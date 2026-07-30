import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ChelseaHeightsPainters() {
  const suburb = "Chelsea Heights";
  const faqs = [
    {
      question: `Does being near the Edithvale-Seaford wetlands affect paintwork?`,
      answer: `It can. Ground-level humidity sits higher around the wetlands, and ${suburb} homes on shaded or south-facing walls tend to show mould and that grey-green film sooner than drier pockets of Kingston. Painting over it just traps it, so those walls are treated and primed with a mould-inhibiting system rather than simply recoated.`
    },
    {
      question: `Do you paint brick-veneer family homes in ${suburb}?`,
      answer: `Yes — brick-veneer and clad family homes are the mainstay of our ${suburb} work. Rendered and painted brick facades, eaves, fascias and garage doors outside; walls, ceilings, trims and doors inside, staged room by room so the house stays liveable while the work runs.`
    },
    {
      question: `Do you paint the newer townhouse developments in ${suburb}?`,
      answer: `Yes. ${suburb} has a growing number of townhouse developments, and we handle both individual owners and full-complex work. Where there's an owners corporation involved we provide the written scope and insurance documentation the committee needs before anything is approved.`
    },
    {
      question: `Do you do roof painting in ${suburb}?`,
      answer: `Yes. Many ${suburb} homes have tile or metal roofs, and in a damp pocket like this they collect moss and lichen faster than most. We pressure wash, repair and prime before coating — the cleaning stage matters more here than the coating itself. Roof work carries the same 5-year written workmanship guarantee.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Chelsea Heights Painters | Coastal Homes | Jetblack Painting"
      description="Coastal house painters in Chelsea Heights — brick-veneer family homes, later houses and clad exteriors. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Edithvale", link: "/painter-edithvale" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We know ${suburb} well — a settled, family-oriented pocket of the City of Kingston set back from the bay around the Edithvale-Seaford wetlands, just minutes from our Mordialloc base. The suburb's housing is mostly brick-veneer and clad family homes on quiet courts and crescents, from post-war builds through to 1990s homes. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — so every ${suburb} repaint holds up to Melbourne's weather and the damp near the wetlands.`}
      propertyTypes={`${suburb}'s brick-veneer family homes, post-war and later houses, rendered and clad exteriors, tile and metal roofs, and newer townhouse developments.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a quiet, family-focused suburb in the City of Kingston, built largely around comfortable brick-veneer and clad homes near the Edithvale-Seaford wetlands. Jetblack Painting provides premium interior and exterior painting suited to this housing — refreshing tired facades, brightening interiors and getting homes presentation-ready for sale or lease. As a local painter based nearby in Mordialloc, we know the area's streets and homes well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior, Interior and Roof Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, scraping and sanding back failing coatings, priming bare timber, and sealing gaps — before durable, weather-resistant topcoats go on, which matters given the damp conditions near the wetlands. Inside, we stage the work room by room with low-odour premium paints so the home stays livable. For the suburb's tile and metal roofs, we clean, repair and prime before applying a fresh membrane coating. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
