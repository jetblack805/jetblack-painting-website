import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Albert Park";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} is characterised by Victorian and Edwardian terrace houses, single-fronted cottages, and a smaller number of Californian bungalows and interwar homes — most on compact inner-city lots with street frontages featuring ornate timber fretwork and iron lacework. We work across all of these property types, from interior refreshes to full exterior repaints, with surface preparation and colour selection suited to each building's era and construction.`
  },
  {
    question: `Do you handle heritage and character home painting in ${suburb}?`,
    answer: `Yes — a significant portion of ${suburb} falls within heritage overlay zones, meaning exterior colour changes and alterations are subject to local planning guidelines. We have extensive experience with period home repaints in heritage-sensitive areas: advising on appropriate period palettes, understanding what requires a permit, and delivering finishes that complement the streetscape. We use premium exterior paints with proven adhesion on original lime render and timber substrates.`
  },
  {
    question: `Do you paint pre-sale properties in ${suburb}?`,
    answer: `Pre-sale painting is a significant part of our work in ${suburb} and surrounding inner suburbs. A fresh coat — neutral, well-applied, and complementing the home's original character — consistently delivers strong results at auction. We work quickly to meet vendor timelines, provide colour advice aligned with current buyer preferences, and produce a finish that photographs well for marketing materials. Call us as early as possible in the campaign preparation process.`
  },
  {
    question: `Can you provide a free quote for painting in ${suburb}?`,
    answer: `Yes. We provide free, no-obligation on-site quotes across ${suburb} and all surrounding inner-south suburbs. Jimmy will inspect the property, walk through your colour and finish preferences, and provide a detailed written quote. Call 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painters serving ${suburb} — specialist in Victorian terraces, heritage overlay properties, and pre-sale painting.`,
  "telephone": "0432077782",
  "email": "jimmy@jetblackpainting.com",
  "url": "https://jetblackpainting.com",
  "areaServed": {
    "@type": "Place",
    "name": `${suburb}, VIC`
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mordialloc",
    "addressRegion": "VIC",
    "postalCode": "3195",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -38.0131,
    "longitude": 145.0965
  }
};

export default function AlbertParkPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Albert Park Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Albert Park — Edwardian — single-fronted. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} is one of Melbourne's most sought-after inner-south suburbs — a beautifully preserved Victorian streetscape wrapping around Albert Park Lake, home to the Formula 1 Grand Prix circuit and a thriving café and restaurant precinct. The suburb's tight grid of streets is lined almost entirely with Victorian and Edwardian terrace houses, cottages, and row houses, many with original ornate iron lacework, tessellated tile paths, and stucco or brick facades. Jetblack Painting has worked extensively throughout ${suburb} and neighbouring Middle Park, South Melbourne, and St Kilda, with a deep understanding of the preparation, primers, and heritage-compatible finishes these properties demand.`}
      propertyTypes={`${suburb}'s housing stock is predominantly Victorian and Edwardian — single-fronted and double-fronted terrace houses, workers' cottages, and the occasional interwar bungalow. Many properties sit within heritage overlay zones that govern exterior colour choices. The suburb also has a high proportion of pre-sale and investment-driven painting projects, given its strong property market and auction-driven culture. We work across interior and exterior repaints of all these property types.`}
      localContent={[
        {
          heading: `Victorian Terraces & Heritage Overlay Painting`,
          body: `Most of ${suburb}'s terrace houses and cottages fall within a Heritage Overlay — meaning external works, including repainting to a significantly different colour, may require a planning permit. We navigate this routinely and can advise on what's likely to require approval versus what doesn't. For the painting itself, these properties demand thorough preparation of the original render, mortar, and timber substrates, and we use premium exterior systems rated for both adhesion and flexibility on these older constructions.`
        },
        {
          heading: `Pre-Sale Painting in ${suburb}`,
          body: `${suburb}'s property market is consistently strong, and a well-executed repaint is one of the highest-return pre-sale investments available. We work closely with vendors, agents, and stylists to deliver neutral, character-appropriate finishes on a timeline that suits the campaign. Interior repaints in soft whites and warm neutrals, combined with a crisp exterior refresh, reliably lift presentation — and we carry $10M public liability insurance and provide a 5-year written workmanship guarantee, so buyers and agents can quote the work with confidence.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "St Kilda", link: "/painter-st-kilda" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Prahran", link: "/painter-prahran" },
        { name: "Elwood", link: "/painter-elwood" },
        { name: "Port Melbourne", link: "/painter-port-melbourne" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
