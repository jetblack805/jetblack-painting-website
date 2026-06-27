import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function McKinnonPainters() {
  const suburb = "McKinnon";

  const faqs = [
    {
      question: "Do you service period homes in McKinnon?",
      answer:
        "Yes. We repaint period and contemporary homes in McKinnon with careful preparation and premium finishing standards.",
    },
    {
      question: "Can you repaint both internal and external areas?",
      answer:
        "Yes. We provide complete interior and exterior repainting, including trims, doors, fascias and weatherboards.",
    },
    {
      question: "Do you provide free quotes in McKinnon?",
      answer:
        "Yes. We provide free written painting quotes for homes and businesses in McKinnon.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="McKinnon Painters | Interior & Exterior Painting | Jetblack Painting"
      description="Experienced painters in McKinnon for interior, exterior, roof and commercial painting. Reliable service and free written quotes."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="Jetblack Painting helps McKinnon homeowners and investors maintain presentation and protect surfaces with durable coating systems."
      propertyTypes="McKinnon includes period homes, renovated family residences and low-rise multi-unit properties requiring tailored prep."
      faqs={faqs}
    />
  );
}

