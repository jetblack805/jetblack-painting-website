import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CaulfieldPainters() {
  return (
    <SuburbPageTemplate
      suburb="Caulfield"
      description="Expert house painters in Caulfield, Melbourne. Interior, exterior & commercial painting services. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="We understand Caulfield's diverse property landscape, from Art Deco apartments to modern family homes and heritage properties. Our team delivers premium painting results that enhance the character of Caulfield's varied architecture."
      propertyTypes="Caulfield's Art Deco apartments, modern family homes, and heritage properties"
    />
  );
}
