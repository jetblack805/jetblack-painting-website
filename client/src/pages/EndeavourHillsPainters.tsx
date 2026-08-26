import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function EndeavourHillsPainters() {
  const suburb = "Endeavour Hills";
  const faqs = [
    {
      question: `Do you paint 1980s and 90s homes in ${suburb}?`,
      answer: `Yes — ${suburb} was built out largely through the 1980s and 90s, so brick veneer homes of that era on generous blocks are the bulk of our work here. Homes of this age typically need their eaves, fascias, barge boards and window frames stripped back and re-primed properly, because that original timber paintwork is well past its service life.`
    },
    {
      question: `Do the sloping blocks in ${suburb} make exterior painting harder?`,
      answer: `Sloping blocks can make exterior painting harder. ${suburb} has genuinely hilly terrain, and split-level homes on sloping blocks often mean high walls, awkward access and double-height gable ends. We plan access and scaffolding as part of the quote rather than treating it as an extra, so the price you're given accounts for the site.`
    },
    {
      question: `Can you paint the interior while we stay in the house?`,
      answer: `Yes, and most of our ${suburb} interior work is done in occupied homes. We stage it room by room, protect floors and furniture, use low-odour water-based products where suitable, and tidy up at the end of each day so the house stays livable.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the City of Casey and provide free written quotes across ${suburb} with preparation, coats and products all itemised. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Endeavour Hills Painters | Jetblack Painting Melbourne"
      description="House painters in Endeavour Hills — 1980s and 90s brick veneer and split-level homes on sloping blocks. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Narre Warren", link: "/painter-narre-warren" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise={`We know ${suburb} well — a City of Casey suburb built out mainly through the 1980s and 90s, set on genuinely hilly ground with plenty of split-level homes and sloping blocks. The housing is largely brick veneer on generous allotments, now at the age where original eaves, fascias and window frames need stripping back rather than another coat over the top. The terrain matters too: high walls and double-height gables need proper access planned into the job, which we build into the quote instead of adding later.`}
      propertyTypes={`${suburb}'s 1980s and 90s brick veneer family homes, split-level houses on sloping blocks, rendered newer builds, and townhouses.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is an established family suburb in the City of Casey, built across hilly ground with large brick veneer homes and split-level designs on generous blocks. Most of that housing dates from the 1980s and 90s, which puts it squarely in repaint territory. Jetblack Painting provides premium interior and exterior painting across ${suburb}, with access and preparation planned properly for the terrain and a clear written quote before anything starts.`
        },
        {
          heading: `Split-Level Exteriors & Timber Restoration in ${suburb}`,
          body: `The exterior paintwork that fails first on a ${suburb} home is the timber — eaves, fascias, barge boards and window frames, especially on the sun-facing and weather-facing elevations. We scrape those back to a sound edge, treat and prime bare timber with a penetrating primer, and replace rotten sections rather than filling over them, then finish with durable exterior systems built for Melbourne's UV and winter damp. On split-level homes and sloping blocks we plan the access and staging up front so high walls and double-height gables are painted safely and properly, not rushed from a ladder. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
