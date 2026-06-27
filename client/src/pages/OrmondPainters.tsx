import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function OrmondPainters() {
  const suburb = "Ormond";

  const faqs = [
    {
      question: "Do you paint homes and units in Ormond?",
      answer:
        "Yes. We provide interior and exterior painting for homes, units and investment properties across Ormond.",
    },
    {
      question: "Can you complete rental refresh painting quickly?",
      answer:
        "Yes. We stage works efficiently for rental turnovers and pre-sale timelines where practical.",
    },
    {
      question: "Do you provide free painting quotes in Ormond?",
      answer:
        "Yes. We provide free written quotes with clear scope, prep and coating details.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Ormond Painters | Local Interior & Exterior Painting | Jetblack Painting"
      description="Trusted painters in Ormond for interior, exterior, roof and commercial painting. Professional prep and free written quotes."
      neighbouringSuburbs={[
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="Jetblack Painting delivers reliable repainting in Ormond with careful preparation, tidy site management and durable finishes."
      propertyTypes="Ormond includes period homes, family residences and unit developments requiring practical preparation and coating selection."
      faqs={faqs}
    />
  );
}

