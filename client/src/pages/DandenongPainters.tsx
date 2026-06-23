import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DandenongPainters() {
  const suburb = "Dandenong";
  const faqs = [
    {
      question: "Do you handle both residential and commercial painting in Dandenong?",
      answer:
        "Yes. We complete interior and exterior painting for homes as well as commercial painting for offices, warehouses and retail properties in Dandenong.",
    },
    {
      question: "Can you repaint older weathered exteriors in Dandenong?",
      answer:
        "Yes. We include the right preparation steps like washing, patching, sanding and priming to restore weathered surfaces before topcoats are applied.",
    },
    {
      question: "Are your Dandenong painting quotes obligation-free?",
      answer:
        "Yes. We provide free, no-obligation written quotes with clear scope, preparation and product recommendations.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dandenong Painters | House & Commercial Painting Services | Jetblack Painting"
      description="Experienced painters in Dandenong for interior, exterior and commercial projects. Fully insured, quality finishes, and free written quotes."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
      ]}
      localExpertise="Jetblack Painting has strong local knowledge across Dandenong and surrounding suburbs, delivering practical repaint solutions for homes, shops and commercial buildings with reliable scheduling and clean site management."
      propertyTypes="Dandenong includes weatherboard and brick homes, unit developments, retail shops, and larger industrial/commercial premises that need durable, fit-for-purpose paint systems."
      faqs={faqs}
    />
  );
}
