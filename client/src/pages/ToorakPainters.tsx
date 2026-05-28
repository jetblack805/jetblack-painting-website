import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ToorakPainters() {
  return (
    <SuburbPageTemplate
      suburb="Toorak"
      description="Expert house painters in Toorak, Melbourne. Interior, exterior & commercial painting services for luxury homes. 5-star rated. Free quotes today!"
      neighbouringSuburbs={[
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="We understand Toorak's prestigious properties, from grand Victorian mansions to architecturally-designed modern homes. Our team has extensive experience with high-end finishes, heritage colour schemes, and the premium materials that Toorak homeowners expect."
      propertyTypes="Toorak's grand Victorian mansions, period homes, and architecturally-designed luxury residences"
    />
  );
}
