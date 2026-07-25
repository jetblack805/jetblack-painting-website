import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighEastPainters() {
  const suburb = "Bentleigh East";
  const faqs = [
    {
      question: `Do you paint post-war brick and californian bungalow homes in ${suburb}?`,
      answer: `Yes — ${suburb} is full of post-war brick-veneer homes, californian bungalows and interwar houses, and each needs the right approach: masonry-appropriate preparation and coatings for rendered and brick surfaces, and careful timber priming and caulking on bungalow eaves, windows and weatherboard sections. We match the paint system to the surface for a durable, even finish.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `${suburb} has a broad mix — post-war brick-veneer family homes, californian bungalows, interwar houses, renovated period homes and newer townhouse developments. We handle all of them with substrate-matched preparation and premium Dulux or Taubmans systems, from full exterior repaints to interior colour refreshes.`
    },
    {
      question: `Can you repaint a ${suburb} home before we sell or lease it?`,
      answer: `Absolutely. A clean, neutral repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
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
