import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighEastPainters() {
  const suburb = "Bentleigh East";
  const faqs = [
    {
      question: `Do you paint californian bungalows in ${suburb}?`,
      answer: `Yes — they're one of the signatures of ${suburb}. Bungalows of that era carry detail a modern build doesn't: deep timber fascias, bracketed eaves, leadlight surrounds and wide front-porch beams. That's slow, hand-cut work rather than roller work, and we quote it on the detail involved rather than on floor area.`
    },
    {
      question: `Can you match the original interwar colours on a ${suburb} home?`,
      answer: `Usually, yes. Interwar and post-war homes in ${suburb} often have an original scheme still readable in a sheltered spot — under an eave, behind a downpipe or inside a cupboard. We can colour-match from a sound sample, or suggest a heritage-appropriate palette if you'd rather update it while keeping the period feel.`
    },
    {
      question: `Is lead paint a concern on older ${suburb} homes?`,
      answer: `It can be. Homes built before 1970 may carry lead-based paint under later coats, which is why we don't dry-sand or power-sand original timberwork of that age. Preparation is done with low-dust methods, and where the age is uncertain we recommend testing before any sanding starts.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We're a short drive away in Mordialloc and provide free written quotes across ${suburb}, itemising the preparation each surface needs — which on a period home is usually where the real difference between quotes sits. Call Jimmy on 0432 077 782.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bentleigh East Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Bentleigh East — post-war brick-veneer homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Oakleigh", link: "/painter-oakleigh" },
      ]}
      localExpertise={`We know ${suburb} well — a large, established, family-oriented suburb in the City of Glen Eira, just a short drive from our Mordialloc base. Its streets are filled with post-war brick-veneer family homes, californian bungalows and interwar houses, along with renovated homes and newer townhouses. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on bungalow eaves, windows and weatherboard — so every ${suburb} repaint holds up to Melbourne's weather.`}
      propertyTypes={`${suburb}'s post-war brick-veneer homes, californian bungalows, interwar houses, renovated family homes and newer townhouse developments.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of the southeast's larger family suburbs, filled with comfortable post-war brick homes, californian bungalows and interwar houses on generous blocks. Jetblack Painting provides premium interior and exterior painting suited to this housing mix — refreshing tired facades, brightening interiors and getting homes presentation-ready for sale or lease. As a local painter based nearby in Mordialloc, we know the area's streets and homes well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Brick, Render and Bungalow Expertise in ${suburb}`,
          body: `${suburb}'s post-war homes are typically brick veneer or rendered masonry, which need the right preparation — sound crack repair, masonry-appropriate primers and flexible, weather-resistant topcoats — so the finish stays even and lasts through Melbourne's temperature swings and damp winters. The suburb's californian bungalows and weatherboard homes need particular care on timber — bare timber priming, careful filling and sharp caulking around eaves, windows and fascias. Whether it's a heritage bungalow, a post-war brick home or a newer townhouse, we tailor the paint system to the surface for a durable, flawless result. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
