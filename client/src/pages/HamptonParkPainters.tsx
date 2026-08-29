import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonParkPainters() {
  const suburb = "Hampton Park";
  const faqs = [
    {
      question: `Do you paint brick veneer family homes in ${suburb}?`,
      answer: `Yes — brick veneer family homes from the 1980s through the 2000s make up most of ${suburb}, and they're the bulk of our work here. On those homes the eaves, fascias, gutters and window frames fail first, so that's where the preparation matters most: scraping back, treating and priming bare timber, and replacing any rotten sections rather than filling over them.`
    },
    {
      question: `Can you repaint a rental property between tenants in ${suburb}?`,
      answer: `Yes. ${suburb} has a lot of investment properties, and a fast, clean repaint between tenancies is one of the best-value ways to lift a rental. We work to your vacancy window, use durable washable interior finishes that stand up to wear, and keep neutral colours that suit the widest range of tenants.`
    },
    {
      question: `How much does it cost to repaint a home in ${suburb}?`,
      answer: `Repainting cost depends on the size of the home, how much preparation the surfaces need and whether it's interior, exterior or both. Rather than quote a number blind, we visit the property, assess the actual condition and give you a free written quote itemising preparation, coats and products.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the City of Casey and provide free written quotes across ${suburb} with the full scope clearly listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  // Casey/Cardinia corridor — this page stays live but is out of the index
  // as of 2026-08-29. Rationale and the query-level numbers are in SEO-LOG.md.
  return (
    <SuburbPageTemplate
      noindex
      suburb={suburb}
      title="Hampton Park Painters | Family Homes | Jetblack Painting"
      description="House painters in Hampton Park — brick veneer family homes, rentals and investment properties across Casey. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Narre Warren", link: "/painter-narre-warren" },
        { name: "Cranbourne", link: "/painter-cranbourne" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" },
      ]}
      localExpertise={`We know ${suburb} well — an established City of Casey suburb built out mainly through the 1980s, 90s and 2000s, where brick veneer family homes on standard blocks make up most of the streets. A lot of that housing is now at the age where the original exterior paint has given up on the eaves, fascias and window frames, and there's a strong rental and investment market alongside owner-occupiers. We handle both, with durable systems and preparation that suits homes of this era.`}
      propertyTypes={`${suburb}'s 1980s to 2000s brick veneer family homes, rendered newer builds, townhouses, and the rental and investment properties across the suburb.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is an established family suburb in the City of Casey, built out largely between the 1980s and 2000s and made up mostly of brick veneer homes on standard suburban blocks. Much of that housing is now due for its first or second proper repaint. Jetblack Painting provides premium interior and exterior painting across ${suburb} for owner-occupiers, landlords and property managers alike — with a clear written quote up front and a clean, tidy site throughout.`
        },
        {
          heading: `Exterior Repaints & Rental Turnarounds in ${suburb}`,
          body: `On a ${suburb} brick veneer home, the paint that fails first is on the timber: eaves, fascias, barge boards and window frames, all taking full sun and rain. We scrape those back to a sound edge, treat and prime bare timber, replace rotten sections instead of filling over them, and finish with exterior systems built for Melbourne's heat, UV and winter damp. For rentals and investment properties we work to your vacancy window with hard-wearing washable interior finishes in neutral colours that let the property to the widest market. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
