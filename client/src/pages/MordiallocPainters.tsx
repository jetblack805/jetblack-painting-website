import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MordiallocPainters() {
  return (
    <SuburbPageTemplate
      suburb="Mordialloc"
      description="Professional house painters in Mordialloc, Melbourne. Interior, exterior & commercial painting for bayside homes. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="Based locally in nearby Keysborough, we're just minutes from Mordialloc. We understand the coastal environment and use premium weather-resistant paints that protect against salt air, UV exposure, and Melbourne's changing conditions."
      propertyTypes="Mordialloc's bayside homes, weatherboard properties, and modern residences"
    />
  );
}
