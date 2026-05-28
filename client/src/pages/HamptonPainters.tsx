import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonPainters() {
  return (
    <SuburbPageTemplate
      suburb="Hampton"
      description="Professional house painters in Hampton, Melbourne. Interior, exterior & commercial painting for coastal homes. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise="We understand Hampton's coastal properties and the unique challenges of bayside painting. From weatherboard cottages to modern beach homes, our team uses weather-resistant coatings that protect against salt air and coastal conditions."
      propertyTypes="Hampton's weatherboard cottages, coastal homes, and modern beach residences"
    />
  );
}
