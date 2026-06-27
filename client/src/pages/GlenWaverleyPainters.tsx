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
    />
  );
}

