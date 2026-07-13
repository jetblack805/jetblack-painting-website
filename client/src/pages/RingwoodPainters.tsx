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
      localContent={[{"heading":"Trusted House Painters Serving Ringwood","body":["Ringwood is a busy outer-eastern hub in the City of Maroondah, anchored by the Eastland shopping precinct and home to a mix of established family homes, weatherboard and brick properties, and newer townhouses and apartments. Jetblack Painting provides premium interior and exterior painting across Ringwood, Ringwood East and Ringwood North.","Every Ringwood project comes with a clear written quote and thorough preparation from a reliable, tidy team. From full house repaints to unit repaints and cabinetry, we deliver sharp lines, durable coatings and a clean, professional result with minimal disruption."]},{"heading":"Family Home and Modern Painting in Ringwood","body":["Ringwood's established homes include weatherboard, brick-veneer and interwar properties that benefit from proper preparation — timber priming, render repair and durable, weather-resistant topcoats suited to the outer east. We keep these homes looking their best with premium coatings and careful work.","For Ringwood's newer townhouses and rebuilt family homes, we deliver smooth contemporary finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the property, you get considered preparation and a finish designed to last."]}]}
    />
  );
}

