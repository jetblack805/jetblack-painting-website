import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function WheelersHillPainters() {
  const suburb = "Wheelers Hill";

  const faqs = [
    {
      question: "Do you paint brick and rendered homes in Wheelers Hill?",
      answer:
        "Yes. We repaint brick and rendered homes in Wheelers Hill using substrate-appropriate preparation and products.",
    },
    {
      question: "Can you complete interior painting while we live in the home?",
      answer:
        "Yes. We can stage interior painting works room-by-room to reduce disruption and keep spaces usable.",
    },
    {
      question: "Do you provide free quotes in Wheelers Hill?",
      answer:
        "Yes. We provide free written quotes with clear scope and timeline guidance.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Wheelers Hill Painters | House Painting Specialists | Jetblack Painting"
      description="Trusted painters in Wheelers Hill for interior, exterior, roof and commercial painting. Fully insured and free written quotes."
      neighbouringSuburbs={[
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Croydon", link: "/painter-croydon" },
        { name: "Ringwood", link: "/painter-ringwood" },
      ]}
      localExpertise="Jetblack Painting supports Wheelers Hill property owners with durable repaint systems and consistent workmanship."
      propertyTypes="Wheelers Hill includes established family homes and updated properties requiring thorough prep for lasting results."
      faqs={faqs}
    />
  );
}
