import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CroydonPainters() {
  const suburb = "Croydon";

  const faqs = [
    {
      question: "Do you paint family homes and investment properties in Croydon?",
      answer:
        "Yes. We repaint owner-occupied homes, rentals and pre-sale properties throughout Croydon.",
    },
    {
      question: "Can you help with exterior repainting exposed to harsh weather?",
      answer:
        "Yes. We use durable, weather-resistant systems with proper prep to improve long-term adhesion and finish life.",
    },
    {
      question: "Do you provide roof painting in Croydon?",
      answer:
        "Yes. Roof painting is a core service with full prep, repairs where required, and quality coating systems.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Croydon Painters | House Painting Services | Jetblack Painting"
      description="Trusted painters in Croydon for interior, exterior, roof and commercial painting. Fully insured, 5-star rated, free quotes."
      neighbouringSuburbs={[
        { name: "Ringwood", link: "/painter-ringwood" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Box Hill", link: "/painter-box-hill" },
      ]}
      localExpertise="Jetblack Painting helps Croydon property owners with clear scopes, reliable communication and high-standard finishing for long-lasting results."
      propertyTypes="Croydon has family homes, renovated residences and mixed commercial properties requiring practical prep and product selection."
      faqs={faqs}
    />
  );
}

