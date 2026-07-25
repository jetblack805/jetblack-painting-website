import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Richmond";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has an exceptional mix of Victorian terrace houses, Edwardian cottages, converted factories and warehouses, modern apartments, and period-style townhouses. We handle all of them — from detailed cornice and heritage trim work on 1880s terraces on Church Street to large exterior repaints on brick commercial buildings along Bridge Road. Every property gets a preparation-first approach and premium Dulux or Haymes products.`
  },
  {
    question: `Do you paint rental and investment properties in ${suburb}?`,
    answer: `Absolutely. ${suburb} has one of Melbourne's highest concentrations of rental properties, and we work closely with landlords and property managers to keep tenancies running smoothly. We offer fast turnarounds between tenancies, low-VOC products where requested, and thorough wall and ceiling refreshes that protect your investment and attract quality tenants at the upper end of the market.`
  },
  {
    question: `Can you paint heritage terrace houses in ${suburb}?`,
    answer: `Yes — Victorian and Edwardian terraces make up a large portion of our ${suburb} workload. We're experienced with the specific requirements of heritage overlay properties: lead paint testing, lime-compatible primers where needed, correct period colour palettes, intricate verandah ironwork, ornate cornices, and careful surface preparation on render and masonry facades. We can also advise on Heritage Victoria guidelines for exterior colour schemes.`
  },
  {
    question: `Can you provide a free quote for painting in ${suburb}?`,
    answer: `Yes — we provide free, no-obligation quotes across ${suburb} and surrounding suburbs. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time. We'll assess the property, discuss your colour preferences, and provide a detailed written quote with a 5-year workmanship guarantee and $10M public liability insurance.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painting services in ${suburb}, Melbourne — Victorian terrace houses, heritage cottages, warehouses, rental properties and modern apartments.`,
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heritage Terrace Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Rental Property Painting" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse & Commercial Painting" } }
    ]
  }
};

export default function RichmondPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Richmond Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Richmond — double-fronted Victorian terrace houses built between 1870. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} is one of Melbourne's most densely developed inner-east suburbs, stretching from the Yarra River to Burnley with a remarkable concentration of Victorian terrace houses, heritage-listed streetscapes, and converted industrial buildings along its famous commercial strips — Bridge Road, Church Street, and Swan Street. The suburb's period character is protected by heritage overlays that require careful paint selection and surface preparation, making experienced heritage painters essential for any exterior repaint. We've built deep knowledge of ${suburb}'s architectural fabric over years of work in the area, from intricate verandah ironwork and ornate plasterwork cornices on Church Street terraces to large-scale commercial repaints on Bridge Road retail and the converted factories that now serve as apartments and creative studios throughout the suburb. ${suburb} also has an extremely high rental property concentration — roughly 60% of dwellings are rented — so we work regularly with local property managers and landlords to deliver fast, professional turnarounds between tenancies.`}
      propertyTypes={`${suburb} is dominated by single-fronted and double-fronted Victorian terrace houses built between 1870 and 1910, many with elaborately decorated verandahs, rendered facades, and shared party walls typical of Melbourne's inner-ring housing boom. Edwardian cottages and Californian bungalows fill out the remaining residential stock, alongside a significant volume of converted warehouse and factory buildings — particularly in the Cremorne precinct along the Yarra — that have been repurposed as apartments, offices, and studios. Modern apartment towers are increasingly common along the Swan Street and Bridge Road corridors, adding render and cladding systems to our typical scope in the suburb. We paint all of these property types using appropriate premium products — Dulux Weathershield for exposed exteriors, heritage-matched colour palettes for period homes, and low-VOC interior ranges for rental and commercial spaces.`}
      localContent={[
        {
          heading: "Victorian Terraces & Heritage Properties",
          body: `${suburb}'s Victorian and Edwardian terrace houses are some of Melbourne's most photographed streetscapes — and among the most technically demanding properties to repaint correctly. Correct surface preparation is non-negotiable on these buildings: render cracks, rising damp staining, failed previous paint films, and chalking lead-based coatings all need to be properly assessed and treated before any new product is applied. We carry out detailed substrate inspections on every heritage property, use appropriate primers and sealers for masonry and render, and match colour palettes to Heritage Victoria guidance or council heritage overlay requirements where applicable. Our work on ${suburb} terraces covers full exterior repaints, verandah ironwork (columns, brackets, balustrades), ornate timber fretwork, window frames and sashes, and interior walls and ceilings — including decorative cornice restoration where needed.`
        },
        {
          heading: "Rental Properties & Commercial Strips",
          body: `${suburb}'s three famous commercial strips — Bridge Road, Church Street, and Swan Street — are among Melbourne's most active retail and hospitality precincts, and we service shopfronts, restaurants, and commercial tenancies throughout these areas alongside our residential workload. For rental properties, we offer scheduled repaint programs for landlords with multiple ${suburb} properties, coordinating with tenants to minimise disruption and working efficiently to meet vacancy windows. We use low-odour interior products as standard in occupied rental properties, and can advise on durable wall and ceiling finishes that stand up to high-turnover tenancy use. All commercial and rental work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Collingwood", link: "/painter-collingwood" },
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Prahran", link: "/painter-prahran" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
