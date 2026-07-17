import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KeysboroughPainters() {
  const suburb = "Keysborough";
  const faqs = [
    {
      question: `Are you based near ${suburb}?`,
      answer: `Yes. Jetblack Painting is based just nearby in Mordialloc, so we're a genuinely local painter for ${suburb}. That means fast quotes, easy site visits and a team that knows the area's homes and estates well — we're not a call centre dispatching from the other side of Melbourne.`
    },
    {
      question: `Do you paint new estate homes in ${suburb}?`,
      answer: `Definitely. Many ${suburb} homes are modern estate builds with rendered façades and large open interiors that need crisp, seamless finishes. We use premium Dulux and Taubmans systems and take extra care with preparation on rendered surfaces so the topcoat sits cleanly and holds up through Melbourne's climate.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding Greater Dandenong area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Keysborough Painters | Local House Painting Services | Jetblack Painting"
      description={`Local house painters in ${suburb}. Based in nearby Mordialloc — fast quotes, reliable service and premium results for ${suburb}'s estate homes, family homes and commercial properties. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
      ]}
      localExpertise={`Jetblack Painting is based in nearby Mordialloc and regularly works across ${suburb}. We know the area's growing mix of modern estate homes, established family homes and commercial properties well — and because we're genuinely local, we can be on site quickly and deliver the kind of personal service that larger outfits can't.`}
      propertyTypes={`${suburb}'s modern estate homes with rendered façades, established brick family homes, commercial buildings and the growing townhouse and unit stock across the Greater Dandenong area.`}
      localContent={[
        {
          heading: `Local House Painters Serving Keysborough`,
          body: [
            `${suburb} is a growing family suburb in the City of Greater Dandenong, known for its modern estates, established family homes and the popular Parkmore shopping precinct. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter — not a franchise or call centre — providing premium interior and exterior work across ${suburb} with careful preparation and a clean, durable finish.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable team that turns up when it says it will. Whether it's a full exterior repaint, a modern interior scheme, cabinetry or a commercial repaint, we deliver sharp lines, premium coatings and a professional result with minimal disruption.`,
          ],
        },
        {
          heading: `Estate and Family Home Painting in ${suburb}`,
          body: [
            `${suburb}'s newer estate homes typically feature rendered façades, feature walls and large open-plan interiors. We deliver the crisp, seamless finishes these homes are built around — using premium Dulux and Taubmans systems with proper priming on render so the topcoat sits perfectly and the result holds up for years.`,
            `For ${suburb}'s established family homes, we bring thorough preparation and premium coatings that refresh the look, protect the surface and add years of life to the paintwork. Commercial painting across the Keysborough area — warehouses, offices, shopfronts — is also something we handle regularly, scoped clearly and completed efficiently.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
