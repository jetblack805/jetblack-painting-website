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
      localContent={[
        {
          heading: "Premium House Painters Serving Armadale",
          body: [
            "Armadale is a refined inner-eastern suburb known for its elegant Victorian and Edwardian terraces, the antique dealers and boutiques of High Street, and quiet, prestigious residential streets. Jetblack Painting delivers the detailed, high-quality painting these homes deserve — from ornate period façades to updated family homes and architect-designed residences throughout Armadale.",
            "Every Armadale project begins with careful preparation and a clear, honest quote. Whether you're restoring a heritage terrace or refreshing a modern interior, our team delivers sharp lines, premium coatings and a clean, professional result with respect for your home and street.",
          ],
        },
        {
          heading: "Heritage Detail and Premium Finishes in Armadale",
          body: [
            "Armadale's period homes carry fine detailing — decorative render, timber fretwork and cast-iron lacework — that rewards meticulous work. We handle lead-paint-safe preparation, careful restoration of original features and heritage-sympathetic colour schemes so these valuable homes keep their character intact.",
            "For Armadale's renovated and contemporary properties, we deliver smooth, hard-wearing modern finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the era, you get considered preparation and a finish designed to last.",
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
