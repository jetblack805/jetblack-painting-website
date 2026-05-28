import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HawthornPainters() {
  return (
    <SuburbPageTemplate
      suburb="Hawthorn"
      description="Professional house painters in Hawthorn, Melbourne. Interior, exterior & commercial painting for period homes. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="We understand Hawthorn's stunning period architecture, from grand Victorian terraces to Federation homes and modern apartments. Our team has extensive experience with heritage colour schemes and premium finishes that enhance Hawthorn's beautiful streetscapes."
      propertyTypes="Hawthorn's Victorian terraces, Federation homes, and modern apartments"
    />
  );
}
