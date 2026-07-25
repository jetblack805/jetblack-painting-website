import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function GlenWaverleyPainters() {
  const suburb = "Glen Waverley";
  const faqs = [
    {
      question: `Do you paint the large family homes common in ${suburb}?`,
      answer: `Yes. ${suburb} is known for substantial family homes — many rebuilt on large blocks with rendered façades, feature walls and big open-plan interiors. We're well set up for these: proper team sizing, the right access equipment, and premium Dulux and Taubmans systems that give the crisp, seamless result these homes are built around.`
    },
    {
      question: `Can you repaint a brick veneer home in ${suburb}?`,
      answer: `Absolutely. ${suburb} has plenty of 1960s–80s brick-veneer homes, and a proper repaint makes a significant difference to presentation and protection. We clean, prime and use quality exterior coatings rated for Melbourne's conditions — no shortcuts on prep, so the topcoat bonds properly and lasts.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding City of Monash area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Glen Waverley Painters | Premium Homes | Jetblack Painting"
      description="Premium house painters in Glen Waverley — large rebuilt family homes with rendered façades. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Wheelers Hill", link: "/painter-wheelers-hill" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Ringwood", link: "/painter-ringwood" },
      ]}
      localExpertise={`We understand ${suburb}'s housing stock — from the established 1960s–80s brick-veneer homes on quiet streets to the many rebuilt and architect-designed family homes that have replaced them, often with rendered façades and premium interiors. Whether it's a classic brick exterior repaint or a seamless modern interior finish, we match our approach to the property every time.`}
      propertyTypes={`${suburb}'s large rebuilt family homes with rendered façades, established brick-veneer homes, modern interiors with feature walls, and investment properties across the ${suburb} and City of Monash area.`}
      localContent={[
        {
          heading: `House Painters Serving Glen Waverley`,
          body: [
            `${suburb} is one of Melbourne's most sought-after family suburbs in the City of Monash — prized for its large homes, excellent schools and the busy lifestyle precinct around The Glen shopping centre and Kingsway. Jetblack Painting provides premium interior and exterior painting across ${suburb}, from established brick family homes to the many modern rebuilds and architect-designed residences that have become a hallmark of the area.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint, a fresh contemporary interior or cabinetry work, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your household.`,
          ],
        },
        {
          heading: `Modern and Established Home Painting in ${suburb}`,
          body: [
            `${suburb}'s newer and rebuilt family homes typically feature rendered façades, feature walls and large open-plan interiors. We deliver the crisp, seamless finishes these homes demand — using premium Dulux and Taubmans systems, with proper render priming so the topcoat sits perfectly and the result holds up through Melbourne's climate for years.`,
            `For ${suburb}'s established brick-veneer and interwar homes, we bring thorough preparation and premium coatings that refresh the look, protect the surface and add genuine life to the paintwork. Whatever the era, the standard stays the same: meticulous prep, premium coatings, and a finish you'll notice the difference in.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
