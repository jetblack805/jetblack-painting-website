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
      localContent={[
        {
          heading: "Premium House Painters Serving Malvern",
          body: [
            "Malvern is one of Melbourne's most established and prestigious suburbs, known for its leafy streets, grand period homes and the boutique shopping strips of Glenferrie Road and High Street. Jetblack Painting delivers the refined interior and exterior painting these homes call for — from stately Edwardian and Victorian residences to elegant modern renovations throughout Malvern and Malvern East.",
            "We treat every Malvern project with a focus on detail: careful preparation, sharp cutting-in, and premium coatings that suit both heritage character and contemporary design. Our written quotes lay out the full scope and preparation clearly, and our team works cleanly and respectfully around your home and garden.",
          ],
        },
        {
          heading: "Heritage Colour and Finish Expertise in Malvern",
          body: [
            "Many Malvern streetscapes carry heritage significance, and getting the colours and preparation right matters. We're experienced with period-appropriate palettes for Edwardian and Victorian façades, meticulous timber and ornamental detailing, and lead-paint-safe methods on older homes — protecting both the look and the long-term value of your property.",
            "For Malvern's renovated and architect-designed homes, we deliver the crisp, durable modern finishes that premium interiors depend on, using proven paint systems from Dulux and Taubmans built to handle Melbourne's variable climate and last for years.",
          ],
        },
      ]}
    />
  );
}
