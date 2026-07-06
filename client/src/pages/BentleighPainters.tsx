import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighPainters() {
  return (
    <SuburbPageTemplate
      suburb="Bentleigh"
      description="Professional house painters in Bentleigh, Melbourne. Interior, exterior & commercial painting services. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise="Based locally in nearby Mordialloc, we know Bentleigh's mix of family homes, period properties, and modern townhouses. Our team delivers premium painting results with quick response times and personalised service for all Bentleigh residents."
      propertyTypes="Bentleigh's family homes, period properties, and modern townhouses"
    />
  );
}
