import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CroydonPainters() {
  const suburb = "Croydon";
  const faqs = [
    {
      question: `Do you paint weatherboard and brick homes in ${suburb}?`,
      answer: `Yes. ${suburb} has plenty of weatherboard and brick-veneer family homes, and we tailor our preparation to each — bare timber priming and proper filling on weatherboard, and the right primer on brick before topcoating. The preparation is what makes the finish last.`
    },
    {
      question: `Do you paint investment and pre-sale properties in ${suburb}?`,
      answer: `Yes. We regularly repaint rental and pre-sale homes in ${suburb} — durable finishes, practical timelines and upfront written quotes so you can plan around tenancies. Quick turnarounds are available for changeovers.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb}, Croydon North and Croydon Hills, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Croydon Painters | House Painting Services | Jetblack Painting"
      description={`Trusted painters in ${suburb}. Interior, exterior, roof and commercial painting for weatherboard, brick and modern homes across ${suburb}, Croydon North and Croydon Hills. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Ringwood", link: "/painter-ringwood" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Doncaster", link: "/painter-doncaster" },
      ]}
      localExpertise={`Jetblack Painting works across ${suburb} regularly, painting the suburb's mix of weatherboard family homes, brick-veneer residences and modern rebuilt properties. We know the area and bring the right preparation system and coatings to each home type for a finish that holds up through the outer east's variable weather.`}
      propertyTypes={`${suburb}'s weatherboard cottages, brick-veneer family homes, modern rebuilt residences and investment properties across ${suburb}, Croydon North and Croydon Hills.`}
      localContent={[
        {
          heading: `House Painters Serving Croydon, Croydon North and Croydon Hills`,
          body: [
            `${suburb} is an established family suburb in the City of Maroondah, known for its relaxed outer-eastern character, generous blocks and a mix of weatherboard, brick-veneer and modern family homes across its leafy streets. Jetblack Painting provides premium interior and exterior painting across all parts of ${suburb} — careful preparation, clean execution and a durable finish.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable team. Whether it's a full exterior repaint, a fresh interior colour scheme or a pre-sale refresh, we deliver sharp lines, premium coatings and a professional result with minimal disruption to your family.`,
          ],
        },
        {
          heading: `Weatherboard and Family Home Painting in ${suburb}`,
          body: [
            `${suburb} has a high proportion of weatherboard and brick-veneer family homes, and timber exteriors in particular need proper care to last — bare timber priming, careful filling, sharp caulking and weather-resistant topcoats that hold up against the outer east's sun and rain exposure. We treat this preparation as standard, not an extra.`,
            `For ${suburb}'s renovated and modern homes, we deliver smooth interior and exterior finishes using premium Dulux and Taubmans systems designed for Melbourne's climate. Whatever the property type, the preparation comes first — and the finish is built to last.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
