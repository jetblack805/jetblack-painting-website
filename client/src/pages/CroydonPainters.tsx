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
      localContent={[{"heading":"Local House Painters Serving Croydon","body":["Croydon is an established family suburb in the City of Maroondah, known for its relaxed outer-eastern feel, generous blocks and a mix of weatherboard, brick-veneer and modern homes. Jetblack Painting provides premium interior and exterior painting across Croydon, Croydon North and Croydon Hills, delivering careful preparation and a clean, durable finish.","Every Croydon project comes with a clear written quote and thorough preparation from a reliable, tidy team. Whether it's a full exterior repaint, a fresh interior scheme or cabinetry, we deliver sharp lines, premium coatings and a professional result with minimal disruption to your family."]},{"heading":"Weatherboard and Family Home Painting in Croydon","body":["Croydon has plenty of weatherboard and brick-veneer family homes, and timber exteriors in particular need proper care — bare timber priming, careful filling and durable, weather-resistant topcoats to handle the outer east's exposure. We keep these homes protected and looking sharp with premium coatings.","For Croydon's renovated and modern homes, we deliver smooth interior and exterior finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the property type, you get considered preparation and a finish designed to last for years."]}]}
    />
  );
}

