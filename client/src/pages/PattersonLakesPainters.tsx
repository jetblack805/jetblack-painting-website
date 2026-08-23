import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function PattersonLakesPainters() {
  const suburb = "Patterson Lakes";
  const faqs = [
    {
      question: `Do you paint waterfront and canal-estate homes in ${suburb}?`,
      answer: `Yes. ${suburb} is built around its canals and marina, and waterfront homes are a big part of our work here. A house on the water takes constant salt air, humidity and reflected UV. We use flexible, salt-resistant exterior systems and prepare thoroughly: washing, priming and sealing before any topcoat goes on.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `${suburb} has larger modern brick and rendered homes, double-storey waterfront houses, and townhouses. Many have wide eaves, balconies and timber detailing. We prepare and repaint rendered and brick facades, balconies, eaves and fascias, and we refresh interiors with premium low-odour paints.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Yes. A fresh repaint is one of the best-value ways to lift a property before a sale or a new tenancy, and presentation counts for a lot on the water. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect how the house shows.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We are based nearby in Mordialloc and quote across ${suburb} for free, in writing, with the full scope and preparation set out. Call Jimmy on 0432 077 782 or ask for a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Patterson Lakes Painters | Waterfront House Painting"
      description="Waterfront and coastal house painters in Patterson Lakes — canal-front homes and rendered residences. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Chelsea Heights", link: "/painter-chelsea-heights" },
        { name: "Carrum", link: "/painter-carrum" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`We know ${suburb} well. It is a waterfront pocket of the City of Kingston, built around a network of canals and a marina where the Patterson River meets the bay. It is a short drive from our Mordialloc base. The housing is mostly larger modern brick and rendered homes, many sitting directly on the water with balconies, jetties and wide eaves. Living on the water means constant salt air, humidity and UV bouncing off the surface. So we specify flexible, salt-resistant exterior systems, and we do the washing, priming and sealing that actually protects these homes.`}
      propertyTypes={`Waterfront and canal-front homes, larger modern brick and rendered houses, double-storey homes with balconies and timber detailing, and townhouses across the estate.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is one of Melbourne's most distinctive waterfront communities. A canal estate in the City of Kingston, with a marina, riverfront reserves, and homes built to make the most of the water.`,
            `We paint inside and out on these properties. The work protects facades, balconies and eaves against a harsh waterside environment, and it looks the part when it is done. We are based nearby in Mordialloc, so we know the area. Every job comes with a written quote, thorough preparation, and a tidy site.`,
          ],
        },
        {
          heading: `Waterfront Protection and Interior Repaints in ${suburb}`,
          body: [
            `Homes on the water here face salt air, humidity and reflected UV. All three punish paintwork that was not prepared properly. We counter that with a proper wash, flexible primers, and premium salt-resistant topcoats over render, masonry and timber. The finish holds up far longer than a standard repaint would in this spot.`,
            `Inside, we repaint room by room with low-odour premium paints, so the house stays liveable while the work runs. Everything we do in ${suburb} carries $10 million public liability insurance and a 5-year written workmanship guarantee.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
