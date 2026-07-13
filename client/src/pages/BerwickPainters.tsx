import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BerwickPainters() {
  const suburb = "Berwick";
  const faqs = [
    {
      question: "Do you paint newer homes and estates in Berwick?",
      answer:
        "Yes. We handle both established homes and newer estate properties in Berwick, including full internal repaints and weather-ready exterior systems.",
    },
    {
      question: "Can you repaint investment properties in Berwick?",
      answer:
        "Yes. We provide efficient repaint programs for rental and investment properties, focusing on durable finishes and practical timelines.",
    },
    {
      question: "How soon can I get a painting quote in Berwick?",
      answer:
        "We provide prompt site visits and clear written quotes so you can plan your Berwick painting project without delays.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Berwick Painters | Residential & Commercial Painting | Jetblack Painting"
      description="Professional painters in Berwick for interior, exterior and commercial painting. Reliable scheduling, premium preparation and free quotes."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Bayside", link: "/painter-bayside" },
      ]}
      localExpertise="Our Berwick painting work covers modern family homes, established properties, and local commercial spaces. We apply proven prep systems and premium coatings to maximise finish quality and long-term value."
      propertyTypes="Berwick includes established family homes, larger modern residences, and mixed-use commercial sites that each require tailored preparation and coating systems."
      faqs={faqs}
      localContent={[{"heading":"Local House Painters Serving Berwick","body":["Berwick is a thriving family suburb in the City of Casey, known for its historic village, leafy streets and a strong mix of established homes and modern estate housing. Jetblack Painting provides premium interior and exterior painting across Berwick, from character homes around Berwick Village to the many contemporary family homes in the newer estates.","Every Berwick project comes with a clear written quote and thorough preparation from a reliable, tidy team. Whether it's a full exterior repaint, a fresh interior scheme or cabinetry, we deliver sharp lines, durable coatings and a clean, professional result with minimal disruption to your family."]},{"heading":"Estate and Family Home Painting in Berwick","body":["Berwick's modern estate homes typically feature rendered façades, feature walls and large open interiors. We deliver the crisp, seamless finishes these homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors suited to the outer south-east.","For Berwick's established and character homes, we bring careful preparation and premium coatings that refresh the look and protect the surface. Whatever the era, you get considered preparation and a finish designed to handle Melbourne's climate and last for years."]}]}
    />
  );
}
