import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function TemplestowePainters() {
  const suburb = "Templestowe";

  const faqs = [
    {
      question: "Do you paint larger family homes in Templestowe?",
      answer:
        "Yes. We repaint large family homes and modern residences in Templestowe with detail-focused finishing.",
    },
    {
      question: "Can you provide colour guidance for exterior repainting?",
      answer:
        "Yes. We can provide practical colour and finish guidance based on your property style and surroundings.",
    },
    {
      question: "Do you offer free painting quotes in Templestowe?",
      answer:
        "Yes. We provide free written quotes with clear preparation and coating details.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Templestowe Painters | Premium House Painting | Jetblack Painting"
      description="Local painters in Templestowe for interior, exterior, roof and commercial painting. Professional workmanship and free written quotes."
      neighbouringSuburbs={[
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Ringwood", link: "/painter-ringwood" },
      ]}
      localExpertise="Jetblack Painting helps Templestowe homeowners protect and improve presentation with preparation-first repainting."
      propertyTypes="Templestowe includes premium family homes and modern residences requiring careful prep and premium coating systems."
      faqs={faqs}
      localContent={[{"heading":"Premium House Painters Serving Templestowe","body":["Templestowe is a prestigious, leafy suburb in the City of Manningham, known for its large blocks, elevated homes and green surrounds near the Yarra and Westerfolds Park. Jetblack Painting provides premium interior and exterior painting across Templestowe and Templestowe Lower, delivering the meticulous preparation and refined finish these substantial homes deserve.","Every Templestowe project comes with a detailed written quote and thorough preparation from a professional, tidy team. From full exterior repaints of large two-storey homes to premium interiors and cabinetry, we deliver sharp lines, durable coatings and a clean, respectful result."]},{"heading":"Large and Luxury Home Painting in Templestowe","body":["Many Templestowe homes are substantial family residences with rendered façades, timber detailing, high ceilings and generous interiors that need an experienced team and proper access equipment. We handle these larger projects safely and efficiently, with careful preparation and premium, weather-resistant coatings.","For Templestowe's modern and architect-designed homes, we deliver the seamless contemporary finishes designer interiors depend on, using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the size or style, you get considered preparation and a finish built to last."]}]}
    />
  );
}

