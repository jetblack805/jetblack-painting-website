import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DandenongPainters() {
  const suburb = "Dandenong";
  const faqs = [
    {
      question: `Do you handle both residential and commercial painting in ${suburb}?`,
      answer: `Yes. We complete interior and exterior painting for homes across ${suburb} and ${suburb} North, as well as commercial painting for offices, warehouses and retail properties in the area. Commercial projects are scoped with flexible scheduling to minimise downtime.`
    },
    {
      question: `Can you repaint weathered and older exteriors in ${suburb}?`,
      answer: `Yes. Older ${suburb} homes with peeling or weathered paintwork need thorough preparation — pressure washing, scraping, sanding, priming and filling before topcoats are applied. We don't skip these steps; they're what makes the result actually last.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and ${suburb} North, with the full scope and preparation included up front so there are no surprises. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dandenong Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Dandenong — weatherboard family homes, unit developments and retail shopfronts. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
      ]}
      localExpertise={`Jetblack Painting has strong local knowledge across ${suburb} and the Greater Dandenong area, delivering practical repaint solutions for homes, shops and commercial buildings with reliable scheduling, clean site management and clear upfront pricing.`}
      propertyTypes={`${suburb}'s brick and weatherboard family homes, unit developments, retail shopfronts, offices and industrial premises across ${suburb} and ${suburb} North.`}
      localContent={[
        {
          heading: `House and Commercial Painters Serving Dandenong`,
          body: [
            `${suburb} is a major, diverse hub in Melbourne's south-east, with a busy commercial centre and a broad mix of established homes, family residences and commercial premises. Jetblack Painting provides premium residential and commercial painting across ${suburb} and ${suburb} North — thorough preparation, premium coatings and a clean, durable result.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable local team. From full house repaints to commercial and rental repaints and cabinetry, we deliver sharp lines, durable coatings and a professional result with minimal disruption to your home or business.`,
          ],
        },
        {
          heading: `Residential and Commercial Painting in ${suburb}`,
          body: [
            `${suburb}'s established homes benefit from proper preparation before any topcoat is applied — render repair, bare timber priming and weather-resistant systems suited to Melbourne's conditions. We don't rush the prep, because that's what keeps the result looking good for years rather than months.`,
            `For ${suburb}'s shops, offices and industrial premises, we offer flexible commercial painting scheduled around your trading hours, including after-hours work where needed. Projects are scoped clearly, carried out efficiently and finished to a durable commercial standard.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
