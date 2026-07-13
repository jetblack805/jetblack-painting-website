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
      localContent={[{"heading":"Local House Painters Serving Murrumbeena","body":["Murrumbeena is a friendly, leafy suburb in the City of Glen Eira, known for its Californian bungalows, interwar homes and the village feel around Neerim Road and Murrumbeena Station. Jetblack Painting provides premium interior and exterior painting across Murrumbeena, delivering careful preparation and a clean, durable finish on these established family homes.","Every Murrumbeena project comes with a clear written quote and thorough preparation from a reliable, tidy local team. From full exterior repaints to interior refreshes and cabinetry, we deliver sharp lines, premium coatings and a professional result with minimal disruption."]},{"heading":"Bungalow and Family Home Painting in Murrumbeena","body":["Murrumbeena's Californian bungalows and interwar homes have characterful rendered surfaces, brick detailing and original timber that benefit from proper preparation and period-sympathetic colours. We keep these homes looking their best with premium, hard-wearing coatings applied by an experienced team.","For Murrumbeena's renovated and modern homes, we deliver smooth, long-lasting finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the era, you get meticulous preparation and a finish designed to last for years."]}]}
    />
  );
}

