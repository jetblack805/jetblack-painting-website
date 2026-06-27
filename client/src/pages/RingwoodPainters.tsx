import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function RingwoodPainters() {
  const suburb = "Ringwood";

  const faqs = [
    {
      question: "Do you service homes and commercial properties in Ringwood?",
      answer:
        "Yes. We provide residential and commercial painting services across Ringwood and surrounding suburbs.",
    },
    {
      question: "Can you handle complete exterior repainting in Ringwood?",
      answer:
        "Yes. We deliver full exterior repaints with preparation, priming and weather-resistant topcoats.",
    },
    {
      question: "Do you offer roof painting in Ringwood?",
      answer:
        "Yes. Roof painting is available with complete prep and coating systems suited to Melbourne weather.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Ringwood Painters | Residential & Commercial Painting | Jetblack Painting"
      description="Professional painters in Ringwood for interior, exterior, roof and commercial painting. Fully insured with free written quotes."
      neighbouringSuburbs={[
        { name: "Croydon", link: "/painter-croydon" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Box Hill", link: "/painter-box-hill" },
      ]}
      localExpertise="Jetblack Painting supports Ringwood property owners with structured repaint scopes and high-standard workmanship."
      propertyTypes="Ringwood has established homes, modern developments and commercial sites that require tailored paint preparation."
      faqs={faqs}
    />
  );
}

