import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MalvernPainters() {
  return (
    <SuburbPageTemplate
      suburb="Malvern"
      description="Professional house painters in Malvern, Melbourne. Interior, exterior & commercial painting with premium finishes. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Brighton", link: "/painter-brighton" },
      ]}
      localExpertise="We understand Malvern's elegant properties, from Edwardian and Victorian homes to modern luxury residences. Our team specialises in heritage colour palettes and premium finishes that complement Malvern's prestigious streetscapes."
      propertyTypes="Malvern's Edwardian homes, Victorian terraces, and modern luxury residences"
    />
  );
}
