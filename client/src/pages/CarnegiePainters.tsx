import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CarnegiePainters() {
  const suburb = "Carnegie";
  const faqs = [
    {
      question: `Do you paint Californian bungalows and period homes in ${suburb}?`,
      answer: `Yes — ${suburb} has a large stock of Californian bungalows, Edwardian and interwar homes, and they're a big part of our work here. Older render, timber trims, decorative gables and original weatherboard all need different preparation, so we match the system to the surface rather than putting one coating over everything.`
    },
    {
      question: `Can you paint apartments and townhouses around Koornang Road?`,
      answer: `Yes. ${suburb} has had a lot of townhouse and apartment development close to the station and Koornang Road shops. We repaint individual apartments and townhouses as well as common areas for owners corporations, working around residents and using low-odour products in occupied buildings.`
    },
    {
      question: `How long does a full interior repaint take in ${suburb}?`,
      answer: `A typical ${suburb} bungalow interior takes about a week depending on the number of rooms, ceiling heights and how much patching and preparation the walls need. Period homes with detailed cornices, picture rails and timber trims take longer to cut in properly, and we'll give you a realistic timeline in the written quote.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free written quotes across ${suburb} with the full scope, preparation and paint products clearly listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Carnegie Painters | Bungalow Repaints | Jetblack Painting"
      description="House painters in Carnegie — Californian bungalows, period homes, post-war brick and modern townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Chadstone", link: "/painter-chadstone" },
      ]}
      localExpertise={`We know ${suburb} well — an established Glen Eira suburb built around Koornang Road and the railway line, where streets of Californian bungalows and interwar homes sit alongside post-war brick and a steady wave of newer townhouses and apartments. The older homes carry original render, timber trims and decorative gables that need patient preparation, while the newer builds are mostly rendered and brick. We match the coating system to each surface so a ${suburb} repaint looks sharp and holds up for years.`}
      propertyTypes={`${suburb}'s Californian bungalows, Edwardian and interwar homes, post-war brick houses, and the modern townhouses and apartments around Koornang Road and the station.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of Glen Eira's busiest residential pockets, with period bungalows on the tree-lined streets and newer townhouse and apartment developments closer to Koornang Road and the station. Jetblack Painting provides premium interior and exterior painting across both — careful preparation, premium Dulux and Taubmans systems, and a clean, respectful approach on site. Every ${suburb} project comes with a clear written quote so you know exactly what's included before we start.`
        },
        {
          heading: `Period Home & Townhouse Painting in ${suburb}`,
          body: `Painting a ${suburb} bungalow well is mostly preparation. Original weatherboard and timber trims need bare-timber priming, filling and tight caulking; older render needs its cracks cut out and patched rather than skimmed over; and detailed cornices, picture rails and gables need to be cut in by hand. Newer rendered townhouses are a different job again, needing flexible coatings that move with the substrate. Whether it's a full exterior repaint, a room-by-room interior refresh or common-area work for an owners corporation, all work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
