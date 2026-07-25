import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function OrmondPainters() {
  const suburb = "Ormond";
  const faqs = [
    {
      question: `Do you paint period and interwar homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a strong collection of interwar homes and bungalows, and we're experienced with what these properties need — render crack repair, bare timber priming, and colours that respect the era and the streetscape. Proper preparation is the difference between a finish that lasts and one that fails early.`
    },
    {
      question: `Can you help with rental property repaints in ${suburb}?`,
      answer: `Yes. We provide efficient rental repaint packages across ${suburb} — neutral palette, thorough prep, tight execution — staged around your tenancy schedule to minimise vacant time. We can work quickly without compromising on surface prep or finish quality.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and surrounding Glen Eira suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Ormond Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Ormond — interwar homes and Californian bungalows. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise={`We understand ${suburb}'s housing mix — the interwar homes and bungalows around Ormond Station and North Road that give the suburb its character, alongside renovated and rebuilt homes where modern finishes are expected. We tailor our preparation and coating systems to each property type, not a one-size approach.`}
      propertyTypes={`${suburb}'s interwar homes, Californian bungalows, renovated family residences, investment units and low-rise apartment buildings across ${suburb} and the Glen Eira area.`}
      localContent={[
        {
          heading: `House Painters Serving Ormond`,
          body: [
            `${suburb} is a well-established family suburb in the City of Glen Eira, known for its interwar homes, Californian bungalows and the convenient lifestyle around Ormond Station and North Road. Jetblack Painting provides premium interior and exterior painting across ${suburb}, matching our preparation and finish to each home's age and materials for a clean, lasting result.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a tidy, local team. Whether you need a full exterior repaint, a fresh interior scheme, cabinetry work or a rental turnaround, we deliver sharp lines and durable coatings with minimal disruption to your home.`,
          ],
        },
        {
          heading: `Period and Modern Home Painting in ${suburb}`,
          body: [
            `${suburb}'s period homes carry rendered façades, feature brickwork and timber detailing that need the right care — crack repair, bare timber priming and colours chosen to suit the era. We protect these homes with premium, hard-wearing paint systems that keep them looking sharp and extend the life of the paintwork.`,
            `For ${suburb}'s renovated and contemporary homes, we deliver smooth, durable interior and exterior finishes using premium Dulux and Taubmans coatings built for Melbourne's climate. Whatever the property type, you get considered preparation and a finish designed to hold up for years.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
