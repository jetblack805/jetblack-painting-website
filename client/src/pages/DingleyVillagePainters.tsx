import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DingleyVillagePainters() {
  const suburb = "Dingley Village";
  const faqs = [
    {
      question: `Do you paint homes backing onto Braeside Park or the golf courses?`,
      answer: `Yes, and those blocks need a bit more thought. Mature tree cover on the parkland and golf-course edges of ${suburb} keeps walls shaded and damp for longer, drops leaf litter into gutters, and brings moss and mould on the south side. We clear and treat those surfaces properly and use a mould-inhibiting system where the shade warrants it.`
    },
    {
      question: `Do you repaint 1970s and 80s homes in ${suburb}?`,
      answer: `Constantly — that era makes up much of ${suburb}. Homes of that vintage usually carry several previous repaints, so the work is in sanding back the built-up edges and failing patches to something sound before recoating. Original stained timber trims are common too, and those need the right primer or the new colour bleeds through.`
    },
    {
      question: `Do you paint the newer estate and townhouse developments in ${suburb}?`,
      answer: `Yes. ${suburb} has a mix of established streets and newer estate and townhouse builds, and we work across both. For body-corporate or owners-corporation properties we provide the written scope, pricing and insurance documentation the committee needs before work is approved.`
    },
    {
      question: `Do you do roof painting in ${suburb}?`,
      answer: `Yes. Tile and metal roofs are common across ${suburb}, and the tree cover around the parkland fringe means they collect debris, moss and lichen faster than open streets do. We pressure wash, repair and prime before coating, and roof work carries our 5-year written workmanship guarantee.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dingley Village Painters | Premium Homes | Jetblack Painting"
      description="Premium house painters in Dingley Village — brick-veneer family homes, 1970s–80s houses and clad exteriors. Free quotes, 5-year guarantee. Call 0432 077 782."
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
