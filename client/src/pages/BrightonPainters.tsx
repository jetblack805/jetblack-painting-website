import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BrightonPainters() {
  return (
    <SuburbPageTemplate
      suburb="Brighton"
      description="Professional residential and commercial painting services in Brighton. 5-star rated, fully licensed, free quotes. Specialists in heritage and coastal homes."
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Malvern", link: "/painter-malvern" },
      ]}
      localExpertise="We understand Brighton's unique properties, from Victorian heritage homes to modern beachside residences. Our team knows the local climate challenges including salt air and coastal weather, and can recommend the best paint finishes and colours for Brighton homes."
      propertyTypes="Brighton's heritage homes, modern beachside residences, and period properties"
    />
  );
}
