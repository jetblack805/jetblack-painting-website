import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KeysboroughPainters() {
  return (
    <SuburbPageTemplate
      suburb="Keysborough"
      description="Local house painters in Keysborough, Melbourne. Servicing Keysborough daily from our nearby Mordialloc base. Interior, exterior & commercial painting. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="Jetblack Painting is based in nearby Mordialloc and has been painting Keysborough homes for 13+ years. As your local painters, we offer fast response times, personalised service, and expert knowledge of every street in Keysborough."
      propertyTypes="Keysborough's modern family homes, townhouses, and established residences"
    />
  );
}
