import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CamberwellPainters() {
  return (
    <SuburbPageTemplate
      suburb="Camberwell"
      description="Expert house painters in Camberwell, Melbourne. Interior, exterior & commercial painting. Heritage home specialists. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Brighton", link: "/painter-brighton" },
      ]}
      localExpertise="We understand Camberwell's beautiful tree-lined streets and heritage properties. From Edwardian homes to modern renovations, our team delivers premium painting results that respect the character of Camberwell's diverse architecture."
      propertyTypes="Camberwell's Edwardian homes, heritage properties, and modern renovations"
    />
  );
}
