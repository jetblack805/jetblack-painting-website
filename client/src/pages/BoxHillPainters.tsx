import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BoxHillPainters() {
  const suburb = "Box Hill";

  const faqs = [
    {
      question: "Do you paint weatherboard and rendered homes in Box Hill?",
      answer:
        "Yes. We handle complete preparation and repaint systems for weatherboard, brick, and rendered homes across Box Hill.",
    },
    {
      question: "Can you complete interior and exterior painting in one project?",
      answer:
        "Yes. We can stage both interior and exterior works to reduce disruption and deliver a consistent finish across the property.",
    },
    {
      question: "Do you provide free painting quotes in Box Hill?",
      answer:
        "Yes. We provide free written quotes for residential and commercial painting projects in Box Hill.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Box Hill Painters | Interior, Exterior & Commercial | Jetblack Painting"
      description="Professional painters in Box Hill for interior, exterior, roof and commercial painting. Fully insured with free written quotes."
      neighbouringSuburbs={[
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
      ]}
      localExpertise="Jetblack Painting supports Box Hill homeowners, landlords and local businesses with preparation-first repainting and durable finishes suited to Melbourne conditions."
      propertyTypes="Box Hill includes established family homes, modern townhouses, apartments and commercial properties that require tailored prep and coating systems."
      faqs={faqs}
    />
  );
}
