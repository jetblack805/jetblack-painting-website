import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Northcote";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has a rich mix of Victorian and Edwardian terrace houses, Californian bungalows, and Art Deco homes, alongside modern townhouses and apartments. We handle all property types — from detailed heritage trim work on period terraces along High Street to full interior repaints in newer townhouse developments. Every job gets thorough surface preparation and premium Dulux or Haymes products suited to the substrate.`
  },
  {
    question: `Do you paint heritage and period homes in ${suburb}?`,
    answer: `Yes — heritage and period homes make up a large part of our ${suburb} workload. We're experienced with the requirements of properties under heritage overlay: correct surface preparation on render, masonry and timber, lead paint assessment where applicable, period-appropriate colour palettes, and careful restoration of ornate verandah ironwork, timber fretwork, cornices and window sashes. We can advise on Darebin council heritage overlay requirements for exterior colour schemes.`
  },
  {
    question: `Do you paint rental properties in ${suburb}?`,
    answer: `Absolutely. ${suburb} has a high proportion of rental properties, and we work with local landlords and property managers to keep tenancies running smoothly. We offer fast turnarounds between tenancies, low-VOC products for occupied properties, and thorough wall and ceiling refreshes that protect your investment. All work is backed by a 5-year written workmanship guarantee.`
  },
  {
    question: `Can you provide a free quote in ${suburb}?`,
    answer: `Yes — we offer free, no-obligation quotes across ${suburb} and surrounding suburbs. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time. We'll assess the property, discuss your colour choices, and provide a detailed written quote with $10M public liability insurance and a 5-year workmanship guarantee.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painting services in ${suburb}, Melbourne — Victorian and Edwardian period homes, Californian bungalows, rental properties and modern apartments along High Street and St Georges Road.`,
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

export default function NorthcotePainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Northcote Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Northcote. Interior, exterior and roof painting. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} is one of Melbourne's most character-rich inner-north suburbs, stretching along the Merri Creek corridor with a dense concentration of Victorian terrace houses, Edwardian cottages, and the Californian bungalows that define so much of Melbourne's interwar residential architecture. The suburb is strongly protected by Darebin council's heritage overlays, which cover much of the residential streetscape along and behind High Street and St Georges Road, making experienced heritage painters essential for any exterior work. We've built up detailed knowledge of ${suburb}'s architectural fabric over years of working in the area — from the single-fronted workers' cottages in the eastern streets to the larger double-fronted Edwardian homes closer to Westgarth. High Street's café and retail strip also brings us regular commercial painting enquiries, and the suburb's high proportion of rental properties means we work closely with local property managers and landlords for tenancy changeovers and scheduled repaint programs.`}
      propertyTypes={`${suburb}'s residential stock spans several distinct eras of Melbourne architecture. Victorian terrace houses — single and double-fronted, many with decorative render facades, ornate verandah ironwork, and timber fretwork — are most common in the eastern and southern parts of the suburb. Edwardian cottages and Federation-style homes fill the transitional streets, while the Californian bungalow — with its deep verandahs, exposed rafter tails, and characteristic tuck-pointed brick or roughcast render — dominates much of the interwar streetscape. More recent infill townhouses and apartment developments appear throughout the suburb, particularly along and behind High Street. We paint all of these property types using appropriate products and preparation methods — oil-based primers on raw timber, Dulux Weathershield on exposed render and masonry, and heritage-matched colour palettes on period facades.`}
      localContent={[
        {
          heading: "Heritage & Period Home Specialists",
          body: `Period homes in ${suburb} require a paint system that's appropriate for the substrate — whether render, masonry, weatherboard, or a combination — and surface preparation that actually addresses the underlying condition rather than painting over problems. On Victorian and Edwardian properties we carry out detailed inspections for render cracks, rising damp staining, failed paint films, and lead-based coatings before specifying a preparation and paint system. Californian bungalows present their own set of challenges: the roughcast render used on many bungalows requires different preparation to smooth-rendered or brick facades, and the deep verandah timbers need oil-based or alkyd primers to penetrate properly. We match paint colours to the period of the home and can advise on heritage overlay requirements for any property in a Darebin heritage precinct.`
        },
        {
          heading: "Rental Properties & High Street Commercial",
          body: `${suburb}'s vibrant High Street precinct — one of Melbourne's best-known café and lifestyle strips — brings us regular commercial painting enquiries from shopfronts, restaurants, and hospitality businesses that need professional results with minimal disruption to trading. For the suburb's large rental property stock, we offer scheduled repaint programs for landlords, fast vacancy turnarounds coordinated with property managers, and durable interior finishes that stand up to high-turnover tenancy use. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Collingwood", link: "/painter-collingwood" },
        { name: "Carlton", link: "/painter-carlton" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Hawthorn", link: "/painter-hawthorn" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
