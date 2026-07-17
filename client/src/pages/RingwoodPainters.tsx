import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function RingwoodPainters() {
  const suburb = "Ringwood";
  const faqs = [
    {
      question: `Do you paint weatherboard homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a large number of weatherboard homes, and we're experienced with the particular care these need — bare timber priming, careful filling and caulking to keep moisture out, and weather-resistant exterior topcoats that handle Melbourne's conditions. Done properly, a weatherboard repaint should last 8–12 years.`
    },
    {
      question: `Do you service Ringwood East and Ringwood North?`,
      answer: `Yes. We work across ${suburb}, Ringwood East and Ringwood North — the whole Maroondah area. Whether it's an established home in Ringwood East or a newer townhouse close to Eastland, we provide the same clear scoping, thorough preparation and premium finish.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the City of Maroondah, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Ringwood Painters | House & Weatherboard Painting Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Specialists in weatherboard homes, family homes and commercial properties across ${suburb}, Ringwood East, Ringwood North and the City of Maroondah. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Croydon", link: "/painter-croydon" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Box Hill", link: "/painter-box-hill" },
      ]}
      localExpertise={`We understand ${suburb}'s mix — established weatherboard and brick-veneer homes on generous blocks, newer townhouses and apartments around Eastland, and a strong commercial strip. Each property type needs a different approach, and we tailor our preparation and coating system to what's in front of us.`}
      propertyTypes={`${suburb}'s weatherboard and brick-veneer family homes, modern townhouses and apartments, commercial properties across ${suburb}, Ringwood East and Ringwood North in the City of Maroondah.`}
      localContent={[
        {
          heading: `House Painters Serving Ringwood, Ringwood East and Ringwood North`,
          body: [
            `${suburb} is a busy outer-eastern hub in the City of Maroondah, anchored by the Eastland shopping precinct and home to a broad mix of established weatherboard and brick-veneer family homes, newer townhouses and commercial properties. Jetblack Painting provides premium interior and exterior painting across ${suburb}, Ringwood East and Ringwood North.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable, tidy team. From full house repaints to unit repaints and cabinetry, we deliver sharp lines, durable coatings and a clean, professional result with minimal disruption to your home or business.`,
          ],
        },
        {
          heading: `Weatherboard and Family Home Painting in ${suburb}`,
          body: [
            `${suburb}'s established homes include a large number of weatherboard properties that need particular attention — bare timber priming, careful filling and caulking to seal moisture out of the paint film, and premium exterior topcoats that handle UV and Melbourne's damp winters. Skipping prep is why weatherboard finishes fail early; we don't skip it.`,
            `For ${suburb}'s brick-veneer, rendered and newer townhouse properties, we deliver smooth contemporary finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the property, you get the right preparation for the substrate and a finish that lasts.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
