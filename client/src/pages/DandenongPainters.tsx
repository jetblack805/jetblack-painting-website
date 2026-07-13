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
      localContent={[{"heading":"Local House Painters Serving Dandenong","body":["Dandenong is a major, diverse hub in Melbourne's south-east, with a busy commercial centre and a broad mix of established homes, family residences and commercial premises. Jetblack Painting provides premium residential and commercial painting across Dandenong and Dandenong North, delivering careful preparation and a clean, durable finish at a fair price.","Every Dandenong project comes with a clear written quote and thorough preparation from a reliable local team. From full house repaints to commercial and rental repaints and cabinetry, we deliver sharp lines, durable coatings and a professional result with minimal disruption to your home or business."]},{"heading":"Residential and Commercial Painting in Dandenong","body":["Dandenong's established homes benefit from proper preparation — render repair, bare timber priming and durable, weather-resistant topcoats suited to Melbourne conditions. We keep these homes looking their best with premium coatings applied by an experienced, tidy team.","For Dandenong's shops, offices and industrial premises, we offer flexible commercial painting scheduled around your business, including after-hours work where needed. Whatever the project, you get considered preparation and a hard-wearing finish designed to last."]}]}
    />
  );
}
