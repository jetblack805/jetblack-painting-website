import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MurrumbeenaPainters() {
  const suburb = "Murrumbeena";

  const faqs = [
    {
      question: "Do you paint renovated homes and townhouses in Murrumbeena?",
      answer:
        "Yes. We paint renovated homes, townhouses and investment properties throughout Murrumbeena.",
    },
    {
      question: "Can you help with pre-sale painting in Murrumbeena?",
      answer:
        "Yes. We provide pre-sale repaint packages focused on clean presentation and buyer appeal.",
    },
    {
      question: "Do you offer commercial painting in Murrumbeena?",
      answer:
        "Yes. We complete commercial repainting for local businesses with practical staging and clear communication.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Murrumbeena Painters | House & Commercial Repaints | Jetblack Painting"
      description="Local painters in Murrumbeena for interior, exterior, roof and commercial painting. Fully insured and free written quotes."
      neighbouringSuburbs={[
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Malvern", link: "/painter-malvern" },
      ]}
      localExpertise="Jetblack Painting supports Murrumbeena property owners with preparation-first repainting and premium finish standards."
      propertyTypes="Murrumbeena has period homes, updated residences and mixed commercial buildings needing tailored paint systems."
      faqs={faqs}
    />
  );
}

