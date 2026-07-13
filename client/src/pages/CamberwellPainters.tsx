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
      localContent={[
        {
          heading: "Trusted House Painters Serving Camberwell",
          body: [
            "Camberwell is prized for its elegant Edwardian and Californian bungalow homes, tree-lined streets and the busy shopping precinct around Camberwell Junction. Jetblack Painting provides premium interior and exterior painting that respects the character of these classic homes while delivering the durable, flawless finish Camberwell homeowners expect.",
            "From full exterior repaints of period façades to interior makeovers, feature walls and cabinetry, we bring detailed preparation and a careful, tidy approach to every Camberwell project. Our quotes are clear and complete, with all the preparation included up front — no surprises later.",
          ],
        },
        {
          heading: "Period Home and Bungalow Painting in Camberwell",
          body: [
            "Camberwell's Edwardian homes and Californian bungalows have distinctive timber detailing, rendered surfaces and roof lines that need the right preparation and paint systems. We take care with bare timber priming, crack filling on render, and heritage-sympathetic colour choices that keep these homes looking as they should.",
            "For renovated and modern Camberwell properties, we deliver smooth contemporary finishes using premium coatings designed to handle Melbourne's climate and stay looking fresh for years. Whichever style your home is, the result is a clean, hard-wearing finish applied by a team that treats your property with respect.",
          ],
        },
      ]}
    />
  );
}
