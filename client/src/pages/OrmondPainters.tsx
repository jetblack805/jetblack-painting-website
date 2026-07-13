import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function OrmondPainters() {
  const suburb = "Ormond";

  const faqs = [
    {
      question: "Do you paint homes and units in Ormond?",
      answer:
        "Yes. We provide interior and exterior painting for homes, units and investment properties across Ormond.",
    },
    {
      question: "Can you complete rental refresh painting quickly?",
      answer:
        "Yes. We stage works efficiently for rental turnovers and pre-sale timelines where practical.",
    },
    {
      question: "Do you provide free painting quotes in Ormond?",
      answer:
        "Yes. We provide free written quotes with clear scope, prep and coating details.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Ormond Painters | Local Interior & Exterior Painting | Jetblack Painting"
      description="Trusted painters in Ormond for interior, exterior, roof and commercial painting. Professional prep and free written quotes."
      neighbouringSuburbs={[
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="Jetblack Painting delivers reliable repainting in Ormond with careful preparation, tidy site management and durable finishes."
      propertyTypes="Ormond includes period homes, family residences and unit developments requiring practical preparation and coating selection."
      faqs={faqs}
      localContent={[{"heading":"Reliable House Painters Serving Ormond","body":["Ormond is a well-established family suburb in the City of Glen Eira, known for its interwar homes, Californian bungalows and convenient position around Ormond Station and North Road. Jetblack Painting provides premium interior and exterior painting across Ormond, matching our preparation and finish to each home's age and materials for a clean, lasting result.","Every Ormond project comes with a clear written quote and thorough preparation from a tidy, local team. Whether you need a full exterior repaint, a fresh interior scheme or cabinetry work, we deliver sharp lines and durable coatings with minimal disruption to your home."]},{"heading":"Bungalow and Modern Home Painting in Ormond","body":["Ormond's period homes carry rendered façades, feature brickwork and timber detailing that need the right care — crack repair, bare timber priming and colours chosen to suit the era. We protect these homes with premium, hard-wearing paint systems that keep them looking their best for years.","For Ormond's renovated and contemporary homes, we deliver smooth, durable interior and exterior finishes using premium Dulux and Taubmans coatings built for Melbourne's climate. Whatever the property type, you get considered preparation and a finish designed to last."]}]}
    />
  );
}

