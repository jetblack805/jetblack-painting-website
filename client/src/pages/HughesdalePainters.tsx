import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HughesdalePainters() {
  const suburb = "Hughesdale";
  const faqs = [
    {
      question: `Do you paint post-war brick veneer homes in ${suburb}?`,
      answer: `Yes — post-war and 1960s brick veneer makes up much of ${suburb}, and those homes are a core part of our work. Painted brick, render patches, timber eaves, fascias and older aluminium or timber windows each need different preparation, and getting the eaves and fascias right is what stops the next repaint coming around early.`
    },
    {
      question: `Can you repaint a ${suburb} home while we're still living in it?`,
      answer: `Yes, and most of our ${suburb} interior work is done in occupied homes. We stage the job room by room, protect floors and furniture, use low-odour water-based products where suitable, and leave the house clean and usable at the end of each day.`
    },
    {
      question: `Do you paint the newer townhouses in ${suburb}?`,
      answer: `Yes. ${suburb} has had steady townhouse development on subdivided blocks, and rendered townhouses need flexible exterior coatings that move with the substrate instead of cracking at the joints. We also handle the interior fit-out painting on newly completed builds.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free written quotes across ${suburb} with the preparation, number of coats and paint products all listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hughesdale Painters | Brick & Render | Jetblack Painting"
      description="House painters in Hughesdale — post-war brick veneer, bungalows and newer rendered townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Oakleigh", link: "/painter-oakleigh" },
        { name: "Chadstone", link: "/painter-chadstone" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Ormond", link: "/painter-ormond" },
      ]}
      localExpertise={`We know ${suburb} well — a quiet residential pocket sitting between Oakleigh and Chadstone, where post-war brick veneer homes and Californian bungalows line most streets and newer townhouses have filled in the subdivided blocks. The older housing here typically needs eaves, fascias, timber windows and painted brick brought back properly, while the newer rendered builds need flexible coatings. We tailor the system to each surface so a ${suburb} repaint lasts.`}
      propertyTypes={`${suburb}'s post-war and 1960s brick veneer homes, Californian bungalows, weatherboard cottages, and the newer rendered townhouses built on subdivided blocks.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a settled residential suburb between Oakleigh and Chadstone, made up largely of post-war brick veneer family homes with newer townhouses filling in around them. Jetblack Painting provides premium interior and exterior painting across both — thorough preparation, premium Dulux and Taubmans systems and a tidy site from start to finish. Every ${suburb} project starts with a clear written quote so there are no surprises.`
        },
        {
          heading: `Brick Veneer & Townhouse Painting in ${suburb}`,
          body: `On a typical ${suburb} brick veneer home, the paintwork that fails first is almost always the eaves, fascias, gutters and window frames — the surfaces taking the most sun and rain. We scrape back failing paint, treat and prime bare timber, replace any rotten sections rather than filling over them, and finish with durable exterior systems built for Melbourne's swings between heat and damp. Painted brick and rendered sections get their own preparation, and newer rendered townhouses get flexible coatings that won't crack at the joints. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
