import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function TemplestowePainters() {
  const suburb = "Templestowe";
  const faqs = [
    {
      question: `Do you paint large, multi-level homes in ${suburb}?`,
      answer: `Yes. ${suburb} is known for its substantial two-storey family homes on generous blocks, and we're set up for these — proper access equipment, the right team size, and thorough preparation for both rendered and brick façades. Large homes need experienced painters; we handle them safely and efficiently without compromising on the finish.`
    },
    {
      question: `Can you advise on exterior colour schemes for ${suburb} homes?`,
      answer: `Yes. ${suburb}'s homes often have generous frontages and established gardens where the exterior colour choice makes a real visual impact. We can provide practical guidance on schemes that suit the home's architecture, the streetscape and current trends — from classic neutrals to more contemporary palettes.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the City of Manningham, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Templestowe Painters | Large Home & Premium Painting Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Specialists in large family homes, multi-level residences and premium finishes across ${suburb}, Templestowe Lower and the City of Manningham. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Ringwood", link: "/painter-ringwood" },
      ]}
      localExpertise={`We understand ${suburb}'s character — substantial family homes on elevated blocks near the Yarra and Westerfolds Park, many with generous rendered and brick façades, high ceilings and premium interiors. These homes expect a meticulous, experienced painter, and that's what we provide.`}
      propertyTypes={`${suburb}'s large two-storey family homes, rendered and brick residences on generous blocks, modern architect-designed homes, and premium interiors across ${suburb} and Templestowe Lower.`}
      localContent={[
        {
          heading: `Premium House Painters Serving Templestowe and Templestowe Lower`,
          body: [
            `${suburb} is a prestigious, leafy suburb in the City of Manningham, known for its large blocks, elevated homes and the green surrounds near the Yarra and Westerfolds Park. Jetblack Painting provides premium interior and exterior painting across ${suburb} and Templestowe Lower, delivering the meticulous preparation and refined finish these substantial homes deserve.`,
            `Every ${suburb} project comes with a detailed written quote and thorough preparation from a professional, tidy team. From full exterior repaints of large two-storey homes to premium interior colour schemes and cabinetry, we deliver sharp lines, durable coatings and a clean, respectful result.`,
          ],
        },
        {
          heading: `Large Home and Premium Finish Painting in ${suburb}`,
          body: [
            `Many ${suburb} homes are substantial family residences with rendered façades, timber detailing, high ceilings and generous interiors that need an experienced team and proper access equipment. We handle these larger projects safely and efficiently, with careful preparation and premium, weather-resistant coatings that protect the investment and hold up through Melbourne's seasons.`,
            `For ${suburb}'s modern and architect-designed homes, we deliver the seamless contemporary finishes premium interiors depend on, using Dulux and Taubmans systems built for Melbourne's climate. Whatever the size or style, you get considered preparation and a finish built to last.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
