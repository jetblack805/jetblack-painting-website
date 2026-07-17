import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonPainters() {
  const suburb = "Hampton";
  const faqs = [
    {
      question: `How do you protect ${suburb} homes from coastal salt air?`,
      answer: `In ${suburb} we use specialised coastal-grade preparation and coatings — thorough salt washing, flexible exterior primers and premium salt-resistant topcoats — so your bayside home stays protected against salt air, UV and damp winters far longer than a standard repaint would in this environment.`
    },
    {
      question: `Do you paint weatherboard homes in ${suburb}?`,
      answer: `Yes. Weatherboard is a ${suburb} staple, and coastal timber needs particular care — bare timber priming, careful filling and sharp caulking to keep moisture out. From heritage weatherboard cottages to rendered modern builds, we tailor the system to the surface for a durable finish that lasts.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Absolutely. As a local Bayside painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation included. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hampton Painters | Coastal House Painting Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Coastal painting specialists for weatherboard cottages, period homes and bayside residences across ${suburb} and Hampton East. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`We understand ${suburb}'s coastal properties and the unique challenges of Bayside painting. From classic weatherboard cottages and period homes on the streets behind ${suburb} Street to modern beach residences closer to the foreshore, our team uses weather-resistant coatings and thorough preparation systems that protect against salt air, UV and Melbourne's variable coastal climate.`}
      propertyTypes={`${suburb}'s weatherboard cottages, period homes, modern beach residences and rendered contemporary builds across ${suburb} and Hampton East.`}
      localContent={[
        {
          heading: `House Painters Serving Hampton and Hampton East`,
          body: [
            `${suburb} is a sought-after Bayside suburb where classic weatherboard cottages, period homes and modern beachside residences sit just back from the water around ${suburb} Street and the beach. Jetblack Painting provides premium interior and exterior painting built for this coastal setting — protecting ${suburb} homes against salt air and sun while delivering a beautiful, lasting finish.`,
            `As a local Bayside painter based nearby in Mordialloc, we know ${suburb}'s homes and conditions well. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site — whether it's a full exterior repaint, an interior colour refresh or a pre-sale makeover to get the property presentation-ready.`,
          ],
        },
        {
          heading: `Coastal Protection and Weatherboard Expertise in ${suburb}`,
          body: [
            `Homes close to the bay in ${suburb} face constant salt air, UV and damp winters that punish poorly prepared paintwork. We counter that with proper salt washing, flexible exterior primers and premium salt-resistant topcoats, so your ${suburb} home's finish holds up far longer than a standard repaint would in this environment.`,
            `Weatherboard is a ${suburb} staple, and coastal timber needs particular attention — bare timber priming, careful filling and tight caulking to keep moisture out of the paint film. Whether it's a heritage weatherboard cottage, a rendered modern build or a Colorbond-and-render new home, we tailor the paint system to the surface for a durable, flawless result.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
