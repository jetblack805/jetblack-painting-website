import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MoorabbinPainters() {
  const suburb = "Moorabbin";
  const faqs = [
    {
      question: "Do you repaint weatherboard and brick homes in Moorabbin?",
      answer:
        "Yes. We paint both weatherboard and brick properties in Moorabbin, tailoring prep and coatings to each surface for a durable finish.",
    },
    {
      question: "Can you handle commercial painting in Moorabbin industrial areas?",
      answer:
        "Yes. We complete commercial repainting for warehouses, offices and mixed-use properties with practical staging to reduce downtime.",
    },
    {
      question: "Do you offer roof painting in Moorabbin?",
      answer:
        "Yes. Roof painting is one of our core services and we provide complete prep and coating systems suitable for Melbourne conditions.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Moorabbin Painters | Residential & Commercial Repaints | Jetblack Painting"
      description="Trusted painters in Moorabbin for interior, exterior, roof and commercial painting. Fully insured with free written quotes."
      neighbouringSuburbs={[
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Bayside", link: "/painter-bayside" },
      ]}
      localExpertise="Jetblack Painting supports Moorabbin homeowners and businesses with quality repaint outcomes, strong communication, and preparation-first workmanship that protects your property long-term."
      propertyTypes="Moorabbin has a mix of classic homes, renovated residences, and industrial/commercial buildings that each require specific preparation and paint system selection."
      faqs={faqs}
    />
  );
}
