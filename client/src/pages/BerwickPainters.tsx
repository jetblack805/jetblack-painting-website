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
    />
  );
}
