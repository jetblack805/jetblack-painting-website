import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "South Melbourne";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has one of Melbourne's most intact Victorian-era streetscapes, centred on the Emerald Hill heritage precinct. We paint single and double-fronted Victorian terraces, workers' cottages, Edwardian homes, converted warehouses, modern apartments and commercial premises along Clarendon Street and City Road. Every property gets thorough surface preparation and premium Dulux or Haymes products matched to the substrate.`
  },
  {
    question: `Do you work on heritage properties in ${suburb}?`,
    answer: `Yes — heritage work is a core part of our ${suburb} service. The Emerald Hill precinct and much of the suburb sits under City of Port Phillip heritage overlays, and we're experienced with what that requires: correct preparation on render, masonry and timber substrates, lead paint assessment on older properties, period-appropriate exterior colour palettes, and careful restoration of verandah ironwork, parapets, cornices and timber sash windows.`
  },
  {
    question: `Do you paint rental and investment properties in ${suburb}?`,
    answer: `Absolutely. ${suburb}'s proximity to the CBD makes it a strong rental market, and we work with local landlords and property managers on tenancy changeover repaints, scheduled maintenance programs and pre-sale refreshes. We offer fast turnarounds, low-VOC products for occupied properties, and durable interior finishes. All work is backed by a 5-year written workmanship guarantee.`
  },
  {
    question: `Can you provide a free quote in ${suburb}?`,
    answer: `Yes — we provide free, no-obligation quotes across ${suburb} and surrounding suburbs. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time. We'll assess the property, discuss your colour preferences, and provide a detailed written quote backed by $10M public liability insurance and a 5-year workmanship guarantee.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painting services in ${suburb}, Melbourne — Victorian terraces and workers' cottages in the Emerald Hill heritage precinct, apartments, and commercial premises along Clarendon Street.`,
  "telephone": "0432077782",
  "email": "jimmy@jetblackpainting.com",
  "url": "https://jetblackpainting.com",
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
  },
  "areaServed": {
    "@type": "City",
    "name": suburb
  },
  "priceRange": "$$",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `Painting Services in ${suburb}`,
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Interior Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heritage Period Home Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rental Property Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial & Shopfront Painting" } }
    ]
  }
};

export default function SouthMelbournePainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title={`${suburb} Painters | Victorian Terrace & Heritage Specialists | Jetblack Painting`}
      description={`Expert painters in ${suburb} — Victorian terraces and cottages in the Emerald Hill heritage precinct, apartments, and Clarendon Street commercial premises. Free quotes, 5-year guarantee, $10M insurance.`}
      localExpertise={`${suburb} is one of Melbourne's oldest and most distinguished inner suburbs, built around the Emerald Hill precinct — one of Australia's most intact Victorian-era streetscapes, crowned by the South Melbourne Town Hall. The suburb's residential streets hold a dense concentration of Victorian terraces and workers' cottages, most protected by City of Port Phillip heritage overlays, which makes experienced heritage painters essential for exterior work here. Clarendon Street provides one of the inner south's busiest retail strips, and the South Melbourne Market precinct brings steady hospitality and commercial painting work alongside our residential jobs. Toward Kings Way and City Road, converted warehouses and newer apartment buildings add a very different kind of project — large rendered surfaces, body corporate common areas, and modern interiors. With Albert Park and Port Melbourne beside it and the CBD minutes away, ${suburb} is a suburb where presentation matters, and property owners expect a meticulous, premium finish.`}
      propertyTypes={`${suburb}'s housing stock is dominated by Victorian-era buildings: single and double-fronted terraces with ornate render facades, cast-iron lacework and decorative parapets, and rows of timber and brick workers' cottages on narrow lots. Edwardian homes fill the transitional streets, while the suburb's industrial past has left converted warehouses and factories now serving as apartments, offices and studios. Modern apartment towers and townhouses cluster near Kings Way and the market precinct. We paint all of them with the right system for each substrate: oil-based or alkyd primers on bare timber, Dulux Weathershield on render and masonry, heritage colour palettes on period facades, and low-VOC interior ranges for occupied homes and rentals.`}
      localContent={[
        {
          heading: "Emerald Hill Heritage & Victorian Terraces",
          body: `The Emerald Hill precinct is one of the most significant Victorian streetscapes in Australia, and repainting properties here demands genuine heritage experience. We assess every substrate before quoting — render cracking, rising damp, failed paint films and older lead-based coatings all need proper treatment before new product goes on. Our heritage work in ${suburb} covers full exterior repaints, verandah ironwork and cast-iron lacework, ornate parapets and cornices, timber fretwork, and double-hung sash windows, with colour palettes matched to Heritage Victoria guidance and City of Port Phillip overlay requirements.`
        },
        {
          heading: "Clarendon Street Commercial & Apartments",
          body: `Alongside our residential work, we service ${suburb}'s commercial heart — shopfronts, cafés and restaurants along Clarendon Street and around the South Melbourne Market — with after-hours and staged scheduling to keep businesses trading. For the suburb's apartment buildings and converted warehouses we handle interiors, common areas and full exterior repaints, working with owners corporations and property managers on detailed scopes and clear schedules. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Albert Park", link: "/painter-albert-park" },
        { name: "Port Melbourne", link: "/painter-port-melbourne" },
        { name: "St Kilda", link: "/painter-st-kilda" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Prahran", link: "/painter-prahran" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
