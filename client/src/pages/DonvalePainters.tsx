import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DonvalePainters() {
  const suburb = "Donvale";
  const faqs = [
    {
      question: "Do you paint multi-level homes in Donvale?",
      answer:
        "Yes. We regularly paint multi-level Donvale properties, using safe access methods and careful sequencing for quality and efficiency.",
    },
    {
      question: "Can you help with colour updates for older Donvale homes?",
      answer:
        "Yes. We help homeowners modernise interiors and exteriors with practical colour schemes that suit the home style and improve street appeal.",
    },
    {
      question: "Do you provide clean and low-disruption painting in Donvale?",
      answer:
        "Yes. We protect floors and furniture, maintain tidy work zones, and keep communication clear throughout your Donvale project.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Donvale Painters | Interior & Exterior House Painting | Jetblack Painting"
      description="Local painters in Donvale delivering high-quality interior and exterior painting with detailed prep, premium finishes and free quotes."
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Toorak", link: "/painter-toorak" },
      ]}
      localExpertise="We deliver detail-focused painting for Donvale homes, including full interior repaints and weather-resistant exterior upgrades with professional preparation at every stage."
      propertyTypes="Donvale features established family homes, larger blocks, and renovated residences where coating selection and preparation are critical for long-lasting results."
      faqs={faqs}
      localContent={[{"heading":"Local House Painters Serving Donvale","body":["Donvale is a leafy, established suburb in the City of Manningham, known for its large blocks, semi-rural feel and generous family homes set among mature trees. Jetblack Painting provides premium interior and exterior painting across Donvale, delivering the careful preparation and durable finish these substantial properties deserve.","Every Donvale project comes with a clear written quote and thorough preparation from a professional, tidy team. From full exterior repaints of large homes to interior refreshes and cabinetry, we deliver sharp lines, premium coatings and a clean result with minimal disruption."]},{"heading":"Large Home and Timber Painting in Donvale","body":["Many Donvale homes sit on big, treed blocks with rendered and timber-clad façades, eaves and decking that take real weather exposure. We take care with timber preparation, priming and premium weather-resistant coatings so these features stay protected against sun, damp and Melbourne's variable climate.","For Donvale's modern and renovated homes, we deliver smooth, durable interior and exterior finishes using premium Dulux and Taubmans systems. Whatever the size or style, you get considered preparation and a professional finish built to last."]}]}
    />
  );
}
