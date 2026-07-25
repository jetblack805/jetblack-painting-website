import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BerwickPainters() {
  const suburb = "Berwick";
  const faqs = [
    {
      question: `Do you paint estate homes and newer builds in ${suburb}?`,
      answer: `Yes. Many ${suburb} homes are modern estate builds with rendered façades and large open interiors. We use premium Dulux and Taubmans systems with proper render preparation so the finish holds up through Melbourne's climate for years.`
    },
    {
      question: `Do you paint investment and rental properties in ${suburb}?`,
      answer: `Yes. We provide efficient repaint programs for rental and pre-sale properties in ${suburb} — durable coatings, practical timelines and clear written quotes. Quick turnarounds are available for tenancy changeovers.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the wider Casey area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Berwick Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Berwick — established family houses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Ringwood", link: "/painter-ringwood" },
      ]}
      localExpertise={`Jetblack Painting works across ${suburb} and the Casey area, handling the mix of modern estate homes, established family residences and character homes around ${suburb} Village. We know the area's housing stock and bring the right preparation and coating system to each property type.`}
      propertyTypes={`${suburb}'s modern estate homes, established family houses, character homes near ${suburb} Village and rental properties across the wider Casey area.`}
      localContent={[
        {
          heading: `House Painters Serving Berwick and the Casey Area`,
          body: [
            `${suburb} is a thriving family suburb in the City of Casey, known for its historic village precinct, leafy established streets and a strong mix of modern estate housing and period character homes. Jetblack Painting provides premium interior and exterior painting across ${suburb} — from the heritage character homes near ${suburb} Village to the contemporary family homes in the growing estates to the south.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable team. Whether it's a full exterior repaint, a fresh interior scheme before a sale, or cabinetry and trims, we deliver sharp lines, durable coatings and a professional result with minimal disruption to your household.`,
          ],
        },
        {
          heading: `Estate Home and Investment Property Painting in ${suburb}`,
          body: [
            `${suburb}'s modern estate homes typically feature rendered façades, feature walls and large open-plan interiors. We deliver crisp, seamless finishes using premium Dulux and Taubmans systems and proper render priming so the result holds up through Melbourne's variable weather year after year.`,
            `For ${suburb}'s established and investment properties, we provide efficient repaint programs with durable coatings, practical scheduling around tenancies and clear, upfront quotes. Rental refreshes and pre-sale repaints are a regular part of what we do — fast, tidy and built to last.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
