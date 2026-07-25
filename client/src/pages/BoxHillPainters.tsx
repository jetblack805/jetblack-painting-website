import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BoxHillPainters() {
  const suburb = "Box Hill";
  const faqs = [
    {
      question: `Do you paint weatherboard, brick and rendered homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a good mix of weatherboard, brick veneer and rendered homes, and we tailor our preparation to each substrate — proper timber priming for weatherboard, crack filling and sealing on render, and the right primer system for brick so the topcoat bonds correctly and lasts.`
    },
    {
      question: `Can you complete interior and exterior painting in one project in ${suburb}?`,
      answer: `Yes. We regularly stage interior and exterior works together for ${suburb} homeowners — sequenced to reduce disruption and keep your home functional while we work through the full scope.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb}, Box Hill North and Box Hill South, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Box Hill Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Box Hill — Californian bungalows and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Croydon", link: "/painter-croydon" },
      ]}
      localExpertise={`Jetblack Painting understands ${suburb}'s diverse housing mix — from Californian bungalows and interwar homes around the heritage streetscapes to the modern apartment developments around ${suburb} Central and the large family homes spreading through Box Hill North. We tailor our preparation and coating system to the property type every time.`}
      propertyTypes={`${suburb}'s Californian bungalows, interwar homes, brick veneer family residences, modern apartment buildings and commercial properties across Box Hill, Box Hill North and Box Hill South.`}
      localContent={[
        {
          heading: `House Painters Serving Box Hill, Box Hill North and Box Hill South`,
          body: [
            `${suburb} is a thriving suburb in the City of Whitehorse, home to a vibrant multicultural community, a busy central hub around ${suburb} Central, and a diverse mix of established bungalows, family residences and modern apartment developments. Jetblack Painting provides premium interior and exterior painting across all three Box Hill postcodes, tailoring the approach to each property's age and materials.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable, tidy team. From full house repaints and cabinetry to strata and commercial repaints, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your home or business.`,
          ],
        },
        {
          heading: `Period Home and Modern Apartment Painting in ${suburb}`,
          body: [
            `${suburb}'s established bungalows and interwar homes have rendered surfaces, feature brickwork and original timber that benefit from proper preparation — filling, priming and quality topcoats that keep these classic homes looking sharp and protected.`,
            `For ${suburb}'s newer townhouses, apartments and commercial buildings, we deliver smooth, contemporary finishes using premium Dulux and Taubmans systems built for Melbourne conditions. Whatever the property, you get meticulous preparation and a finish designed to last for years.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
