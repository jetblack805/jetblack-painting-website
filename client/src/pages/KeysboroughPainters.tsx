import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KeysboroughPainters() {
  return (
    <SuburbPageTemplate
      suburb="Keysborough"
      description="Local house painters in Keysborough, Melbourne. Based right here in Keysborough. Interior, exterior & commercial painting. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="Jetblack Painting is proudly based in Keysborough at 31 Northumberland Dr. As your local painters, we offer the fastest response times and most personalised service. We know every street in Keysborough and have painted hundreds of local homes over our 13+ years in business."
      propertyTypes="Keysborough's modern family homes, townhouses, and established residences"
    />
  );
}
