import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function WheelersHillPainters() {
  const suburb = "Wheelers Hill";
  const faqs = [
    {
      question: `Do you paint the large 1980s and 1990s homes common in ${suburb}?`,
      answer: `Yes. ${suburb}'s established family homes are often substantial brick or rendered builds from the 1980s and 90s, and a professional repaint transforms them. We bring thorough surface preparation, quality primers and premium Dulux and Taubmans topcoats that refresh the look and protect the property for another decade or more.`
    },
    {
      question: `Can you paint both interior and exterior while we live in the home?`,
      answer: `Yes. We stage interior painting room by room to keep spaces functional, and sequence exterior work to minimise disruption. We protect furniture and floors throughout, maintain tidy work zones and communicate clearly about access — most ${suburb} families stay comfortably in the home throughout the project.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the City of Monash, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Wheelers Hill Painters | Premium Homes | Jetblack Painting"
      description="Premium house painters in Wheelers Hill — rendered family homes on elevated blocks. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Keysborough", link: "/painter-keysborough" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
      ]}
      localExpertise={`We understand ${suburb}'s housing stock — the large, established family homes from the 1980s and 90s on elevated blocks near Jells Park and the Dandenong Valley, where solid brick and rendered façades need experienced preparation and premium coatings to protect against Melbourne's variable climate.`}
      propertyTypes={`${suburb}'s large 1980s–90s brick and rendered family homes on elevated blocks, established residences near Jells Park, and updated contemporary homes across ${suburb} and the City of Monash.`}
      localContent={[
        {
          heading: `House Painters Serving Wheelers Hill`,
          body: [
            `${suburb} is an established, family-focused suburb in the City of Monash, known for its large homes on elevated blocks, generous back yards and the green surrounds of Jells Park and the Dandenong Valley Parklands. The suburb's housing stock is largely substantial 1980s and 90s brick and rendered family homes — properties that repaint beautifully when the preparation is done properly.`,
            `Jetblack Painting provides premium interior and exterior painting across ${suburb}, delivering the careful preparation and durable finish these larger homes deserve. Every project comes with a clear written quote and a professional team that shows up when it says it will — whether it's a full exterior repaint, an interior refresh or a deck restoration.`,
          ],
        },
        {
          heading: `Large Family Home Painting in ${suburb}`,
          body: [
            `Many ${suburb} homes are substantial two-storey or split-level brick builds with wide facades, eaves, fascias and generous interiors that need proper access equipment and an experienced team to do well. We handle these bigger projects safely and efficiently, with thorough surface preparation and premium weather-resistant coatings that protect the home through Melbourne's seasons.`,
            `For updated and contemporary ${suburb} homes, we deliver smooth, modern finishes using premium Dulux and Taubmans systems. Whatever the size or style, you get considered preparation, quality product and a finish designed to last well beyond the next paint cycle.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
