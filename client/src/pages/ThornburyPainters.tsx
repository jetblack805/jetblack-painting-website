import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Thornbury";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has a strong mix of Californian bungalows, Edwardian and Federation homes, Victorian cottages, and interwar brick houses, alongside newer townhouses and apartments. We handle all of them — from roughcast render and tuck-pointed brick on bungalows to detailed timber trim on period cottages — with thorough preparation and premium Dulux or Haymes systems matched to each substrate.`
  },
  {
    question: `Do you paint heritage and period homes in ${suburb}?`,
    answer: `Yes — period and interwar homes make up much of our ${suburb} work. We're experienced with properties under Darebin council heritage overlays: correct preparation on render, masonry and timber, lead paint assessment where applicable, period-appropriate colour palettes, and careful work on verandah timbers, fretwork and window sashes. We can advise on heritage overlay requirements for exterior colour schemes.`
  },
  {
    question: `Do you paint rental properties in ${suburb}?`,
    answer: `Absolutely. ${suburb} has a high proportion of rental homes, and we work with local landlords and property managers for smooth tenancy changeovers. We offer fast turnarounds between tenancies, low-VOC products for occupied properties, and durable wall and ceiling refreshes. All work is backed by a 5-year written workmanship guarantee.`
  },
  {
    question: `Can you provide a free quote in ${suburb}?`,
    answer: `Yes — we offer free, no-obligation quotes across ${suburb} and the surrounding inner-north. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time. We'll assess the property, discuss colours, and provide a detailed written quote with $10M public liability insurance and a 5-year workmanship guarantee.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painting services in ${suburb}, Melbourne — Californian bungalows, Edwardian and Federation homes, Victorian cottages, rental properties and modern townhouses across the inner-north.`,
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Californian Bungalow Painting" } }
    ]
  }
};

export default function ThornburyPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title={`${suburb} Painters | Bungalow, Edwardian & Period Home Specialists | Jetblack Painting`}
      description={`Expert painters in ${suburb} — Californian bungalows, Edwardian and Federation homes, Victorian cottages and rental properties across the inner-north. Free quotes, 5-year guarantee, $10M insurance.`}
      localExpertise={`${suburb} is a character-rich inner-north suburb in the City of Darebin, sitting between Northcote and Preston along the High Street and St Georges Road corridors. Its residential streets are dominated by Californian bungalows and interwar brick homes, threaded with Edwardian and Federation cottages and pockets of Victorian terraces, and much of the older streetscape sits under Darebin heritage overlays that make experienced heritage painters essential for exterior work. We've built up detailed knowledge of ${suburb}'s housing stock over years of working across the inner-north — from the roughcast-render bungalows on the residential streets to the shopfronts and hospitality venues along the High Street and Station Street precincts. The suburb's high proportion of rental properties also means we work regularly with local property managers and landlords on tenancy changeovers and scheduled repaint programs.`}
      propertyTypes={`${suburb}'s housing spans several eras of Melbourne architecture. The Californian bungalow — with its deep verandahs, exposed rafter tails, and roughcast render or tuck-pointed brick — is the defining style across much of the suburb, alongside interwar double-brick homes. Edwardian and Federation cottages fill the transitional streets, with Victorian terraces and single-fronted cottages in the older southern pockets closer to Northcote. Newer infill townhouses and apartments appear along and behind High Street. We paint all of these using appropriate products and preparation — oil-based primers on raw timber and verandah beams, Dulux Weathershield on exposed render and masonry, and heritage-matched palettes on period facades.`}
      localContent={[
        {
          heading: "Bungalow, Heritage & Period Home Specialists",
          body: `Period and interwar homes in ${suburb} need a paint system suited to the substrate — render, masonry, weatherboard or a mix — and preparation that addresses the underlying condition rather than painting over problems. On bungalows, the roughcast render used on many facades requires different preparation to smooth render or brick, and the deep verandah timbers need oil-based or alkyd primers to penetrate properly. On Victorian, Edwardian and Federation homes we inspect for render cracks, rising damp, failed paint films and lead-based coatings before specifying a system. We match colours to the period of the home and can advise on Darebin heritage overlay requirements for any property in a heritage precinct.`
        },
        {
          heading: "Rental Properties & High Street Commercial",
          body: `${suburb}'s High Street and Station Street precincts bring us regular commercial painting enquiries from shopfronts, cafés and hospitality businesses that need professional results with minimal disruption to trading. For the suburb's large rental stock, we offer scheduled repaint programs for landlords, fast vacancy turnarounds coordinated with property managers, and durable interior finishes that stand up to high-turnover tenancy use. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Northcote", link: "/painter-northcote" },
        { name: "Brunswick", link: "/painter-brunswick" },
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Collingwood", link: "/painter-collingwood" },
        { name: "Carlton", link: "/painter-carlton" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
