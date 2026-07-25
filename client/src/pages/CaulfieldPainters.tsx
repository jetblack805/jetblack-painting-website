import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CaulfieldPainters() {
  const suburb = "Caulfield";
  const faqs = [
    {
      question: `Do you paint period homes in ${suburb}?`,
      answer: `Yes. ${suburb} has a strong mix of Edwardian terraces, interwar homes and post-war brick properties, and we're experienced with each. We use heritage-sympathetic colour choices, proper surface preparation and lead-paint-safe methods on older homes so the result looks right and holds up well.`
    },
    {
      question: `How long does a house repaint take in ${suburb}?`,
      answer: `Most ${suburb} homes are completed within 5 to 10 working days depending on size and the preparation involved. We provide a clear timeline with every quote so you can plan around the work with minimal disruption.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Absolutely. We provide free, no-obligation written quotes across ${suburb}, Caulfield North and Caulfield South, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Caulfield Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Caulfield — Edwardian terraces and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Elsternwick", link: "/painter-elsternwick" },
        { name: "McKinnon", link: "/painter-mckinnon" },
      ]}
      localExpertise={`Jetblack Painting understands ${suburb}'s diverse housing stock — from the Edwardian terraces and interwar homes around Hawthorn Road and Glen Huntly Road to the post-war brick homes and modern apartments that make up ${suburb}'s broader residential mix. We tailor our preparation and coating systems to the property type every time.`}
      propertyTypes={`${suburb}'s Edwardian terraces, interwar homes, post-war brick properties, modern units and apartment buildings across Caulfield, Caulfield North and Caulfield South.`}
      localContent={[
        {
          heading: `House Painters Serving Caulfield, Caulfield North and Caulfield South`,
          body: [
            `${suburb} is a well-connected inner-south-east suburb known for its mix of Edwardian and interwar streetscapes, the Caulfield Racecourse precinct and popular shopping strips along Glen Huntly Road and Hawthorn Road. Jetblack Painting delivers premium interior and exterior painting across ${suburb} — careful preparation, sharp execution and durable results every time.`,
            `Whether you're refreshing the exterior of a classic period home, repainting a modern townhouse interior or updating cabinetry in a Caulfield apartment, we bring the same detailed approach to every project. Our written quotes lay out the full scope and preparation clearly before work starts, and our team keeps your property clean and tidy throughout.`,
          ],
        },
        {
          heading: `Period Home and Modern Apartment Painting in ${suburb}`,
          body: [
            `${suburb}'s Edwardian and interwar homes need proper preparation to maintain their character and protect their value — crack filling on rendered surfaces, bare timber priming, careful colour choices that suit the era and the street. We handle all of this as part of our standard approach, not as an afterthought.`,
            `For ${suburb}'s modern townhouses and apartment buildings, including body corporate and strata repaints, we deliver clean contemporary finishes using premium Dulux and Taubmans systems rated for Melbourne's conditions. Projects are scoped clearly, communicated throughout and completed to a standard that lasts.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
