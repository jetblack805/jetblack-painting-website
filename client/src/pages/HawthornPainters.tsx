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
      localContent={[
        {
          heading: "Expert House Painters Serving Hawthorn",
          body: [
            "Hawthorn is one of Melbourne's most beautiful inner-eastern suburbs, famous for its grand Victorian terraces, Federation homes and tree-lined streets around Grace Park, Glenferrie Road and the Yarra. Jetblack Painting provides the detailed, high-quality painting these period homes deserve, alongside modern finishes for Hawthorn's contemporary townhouses and apartments.",
            "Every Hawthorn project starts with proper preparation and a clear, honest quote. Whether you're restoring an ornate terrace façade or refreshing a modern interior, our team delivers sharp lines, durable coatings and a clean, professional result with minimal disruption to your home.",
          ],
        },
        {
          heading: "Heritage and Period Home Painting in Hawthorn",
          body: [
            "Hawthorn's period architecture rewards careful work. We handle the specifics of Victorian and Federation homes — lead-paint-safe preparation, detailed timber and cast-iron lacework restoration, and heritage-appropriate colour schemes that suit the era and the streetscape. The finish protects the home's character and its considerable value.",
            "For Hawthorn's modern properties, we use premium Dulux and Taubmans systems for crisp, long-lasting interiors and weather-resistant exteriors built for Melbourne conditions. Whatever the era, the standard stays the same: meticulous prep and a finish that lasts.",
          ],
        },
      ]}
    />
  );
}
