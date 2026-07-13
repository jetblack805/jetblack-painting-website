import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function GlenWaverleyPainters() {
  const suburb = "Glen Waverley";

  const faqs = [
    {
      question: "Do you paint brick veneer and rendered homes in Glen Waverley?",
      answer:
        "Yes. We repaint brick, render and weatherboard homes in Glen Waverley with the correct prep for each substrate.",
    },
    {
      question: "Can you repaint occupied homes with minimal disruption?",
      answer:
        "Yes. We plan works in stages and keep work areas tidy so your household can remain functional.",
    },
    {
      question: "Do you provide painting for investment properties in Glen Waverley?",
      answer:
        "Yes. We provide efficient repainting for rentals and pre-sale projects to improve presentation and value.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Glen Waverley Painters | Local House Painting Experts | Jetblack Painting"
      description="Professional painters in Glen Waverley for interior, exterior, roof and commercial painting. Fully insured and free written quotes."
      neighbouringSuburbs={[
        { name: "Wheelers Hill", link: "/painter-wheelers-hill" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Croydon", link: "/painter-croydon" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Box Hill", link: "/painter-box-hill" },
      ]}
      localExpertise="Jetblack Painting delivers quality repainting across Glen Waverley with clear scope definitions, durable systems and reliable communication."
      propertyTypes="Glen Waverley includes established homes, renovated residences and modern properties requiring specific preparation standards."
      faqs={faqs}
      localContent={[{"heading":"Trusted House Painters Serving Glen Waverley","body":["Glen Waverley is one of Melbourne's most sought-after family suburbs in the City of Monash, prized for its large homes, excellent schools and the bustling precinct around The Glen and Kingsway. Jetblack Painting provides premium interior and exterior painting across Glen Waverley, from established brick family homes to the many modern rebuilds and architect-designed residences the area is known for.","Every Glen Waverley project comes with a clear written quote and thorough preparation from a tidy, professional team. Whether it's a full exterior repaint, a modern interior scheme or feature cabinetry, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your family."]},{"heading":"Modern and Family Home Painting in Glen Waverley","body":["Glen Waverley has a high proportion of newer and rebuilt family homes with rendered façades, feature walls and large open interiors. We deliver the crisp, seamless modern finishes these homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors.","For Glen Waverley's established brick and interwar homes, we bring careful preparation and premium coatings that protect the property and refresh its look. Whatever the era, you get meticulous prep and a finish designed to handle Melbourne's climate and last for years."]}]}
    />
  );
}

