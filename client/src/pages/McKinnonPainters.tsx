import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function McKinnonPainters() {
  const suburb = "McKinnon";

  const faqs = [
    {
      question: "Do you service period homes in McKinnon?",
      answer:
        "Yes. We repaint period and contemporary homes in McKinnon with careful preparation and premium finishing standards.",
    },
    {
      question: "Can you repaint both internal and external areas?",
      answer:
        "Yes. We provide complete interior and exterior repainting, including trims, doors, fascias and weatherboards.",
    },
    {
      question: "Do you provide free quotes in McKinnon?",
      answer:
        "Yes. We provide free written painting quotes for homes and businesses in McKinnon.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="McKinnon Painters | Interior & Exterior Painting | Jetblack Painting"
      description="Experienced painters in McKinnon for interior, exterior, roof and commercial painting. Reliable service and free written quotes."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="Jetblack Painting helps McKinnon homeowners and investors maintain presentation and protect surfaces with durable coating systems."
      propertyTypes="McKinnon includes period homes, renovated family residences and low-rise multi-unit properties requiring tailored prep."
      faqs={faqs}
      localContent={[{"heading":"Local House Painters Serving McKinnon","body":["McKinnon is a sought-after family pocket in the City of Glen Eira, prized for its leafy streets, well-kept interwar and Californian bungalow homes and the popular McKinnon Secondary College zone. Jetblack Painting provides premium interior and exterior painting throughout McKinnon, delivering the careful preparation and clean finish these established homes deserve.","As a genuinely local painter, we make quoting and scheduling easy for McKinnon homeowners. Every project comes with a clear written quote, thorough preparation and a respectful, tidy team — whether it's a full exterior repaint, an interior refresh or kitchen cabinetry."]},{"heading":"Period Home Painting Expertise in McKinnon","body":["McKinnon's interwar homes and bungalows feature rendered surfaces, decorative brickwork and original timber that reward proper preparation — filling and sealing render, priming bare timber and choosing colours that suit the era and the streetscape. We keep these homes looking sharp with premium, durable coatings.","For updated and modern McKinnon homes, we deliver smooth, long-lasting finishes with premium Dulux and Taubmans systems designed for Melbourne conditions. Whatever the style, the standard is the same: meticulous prep and a professional result built to last."]}]}
    />
  );
}

