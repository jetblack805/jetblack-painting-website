import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ArmadalePainters() {
  const suburb = "Armadale";
  const faqs = [
    {
      question: "Do you paint heritage homes in Armadale?",
      answer:
        "Yes. We regularly repaint period and heritage-style homes in Armadale, with careful preparation and finishes that suit older architectural details.",
    },
    {
      question: "Can you work around occupied homes in Armadale?",
      answer:
        "Absolutely. We stage projects room-by-room where needed, keep work areas tidy, and communicate daily so your home remains practical while painting is underway.",
    },
    {
      question: "Do you provide written painting quotes in Armadale?",
      answer:
        "Yes. Every quote is written and clearly outlines preparation, coatings, and scope so you know exactly what is included before work begins.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Armadale Painters | Interior & Exterior House Painting | Jetblack Painting"
      description="Trusted painters in Armadale for interior, exterior and premium residential repainting. Fully insured, clean workmanship, and free written quotes."
      neighbouringSuburbs={[
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Stonnington", link: "/painter-stonnington" },
      ]}
      localExpertise="Jetblack Painting delivers premium painting outcomes for Armadale homes, from period residences to updated family properties. We focus on detailed preparation, sharp lines, and durable finishes suited to Melbourne conditions."
      propertyTypes="Armadale includes heritage terraces, renovated period homes, and architect-designed residences that benefit from careful prep and premium paint systems."
      faqs={faqs}
    />
  );
}
