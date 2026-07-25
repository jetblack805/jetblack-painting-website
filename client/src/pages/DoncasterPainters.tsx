import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DoncasterPainters() {
  const suburb = "Doncaster";
  const faqs = [
    {
      question: `Do you paint modern homes and large family residences in ${suburb}?`,
      answer: `Yes. ${suburb} is known for its larger family homes and many modern rebuilds, and we're experienced delivering the crisp, seamless finishes these properties require — rendered façades, feature walls and large open interiors done with premium Dulux and Taubmans systems and thorough preparation.`
    },
    {
      question: `Can you complete commercial painting in ${suburb}?`,
      answer: `Yes. We handle commercial repainting for retail, offices and mixed-use properties in the ${suburb} area, with flexible scheduling including after-hours work so your business isn't disrupted during trading hours.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and ${suburb} East, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Doncaster Painters | Luxury Painting | Jetblack Painting"
      description="Luxury house painters in Doncaster — large established brick homes and modern rebuilt residences. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
      ]}
      localExpertise={`Jetblack Painting works across ${suburb} and Doncaster East regularly, painting the area's impressive mix of large established brick homes, modern rebuilds and apartment developments that line the ridgeline and the streets around Westfield ${suburb}. We bring the right preparation and coating for each property type.`}
      propertyTypes={`${suburb}'s large established brick homes, modern rebuilt residences, rendered townhouses and apartment developments across ${suburb} and ${suburb} East.`}
      localContent={[
        {
          heading: `House Painters Serving Doncaster and Doncaster East`,
          body: [
            `${suburb} is a popular family suburb in the City of Manningham, known for its elevated position, impressive family homes and the major Westfield ${suburb} shopping precinct. Jetblack Painting provides premium interior and exterior painting across ${suburb} and Doncaster East, from established brick family homes to the many modern rebuilds and architecturally-designed residences the area is known for.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint, a modern interior colour scheme or kitchen cabinetry, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your home.`,
          ],
        },
        {
          heading: `Modern Home and Family Residence Painting in ${suburb}`,
          body: [
            `${suburb} has a strong mix of newer rendered homes, established brick residences and luxury rebuilds. We deliver crisp, modern finishes for contemporary homes and careful preparation and premium coatings for older brick properties — refreshing the look and protecting the surface for years ahead.`,
            `${suburb}'s elevated, exposed position means exteriors face real sun and weather load. We counter that with premium Dulux and Taubmans exterior systems designed for Melbourne's climate, properly applied over a thorough preparation — so the result lasts, not just looks good on day one.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
