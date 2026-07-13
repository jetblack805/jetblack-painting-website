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
      faqs={[{"question":"Do you paint Camberwell's Edwardian and bungalow homes?","answer":"Yes. Camberwell is known for its Edwardian homes and Californian bungalows, and we're experienced with their timber detailing, rendered surfaces and roof lines. We use the right preparation and heritage-sympathetic colours to keep these classic homes looking their best."},{"question":"How long does a repaint take in Camberwell?","answer":"Most Camberwell homes are completed within 5 to 10 working days depending on size and the amount of preparation required. We provide a detailed timeline with every quote so there's minimal disruption to your household."},{"question":"Do you offer free quotes in Camberwell?","answer":"Absolutely. We provide free, no-obligation written quotes across Camberwell, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a visit."}]}
    />
  );
}
