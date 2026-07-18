import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Brunswick";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has a rich mix of Victorian terrace houses, Edwardian cottages, Californian bungalows, converted factories and warehouses, modern apartments and townhouses. We handle all of them — from intricate heritage trim work on single-fronted terraces on Sydney Road to large-scale exterior repaints on rendered brick apartment blocks. Every property gets thorough surface preparation and premium Dulux or Haymes products matched to the substrate.`
  },
  {
    question: `Do you work on heritage properties in ${suburb}?`,
    answer: `Yes — heritage and period homes make up a significant portion of our ${suburb} workload. We're experienced with the requirements of Moreland council heritage overlays: correct surface preparation on render, masonry and timber substrates, lead paint assessment where applicable, period-appropriate exterior colour palettes, and careful restoration of verandah ironwork, timber fretwork, cornices and window sashes. We can advise on heritage overlay requirements for any exterior repaint in ${suburb}.`
  },
  {
    question: `Do you paint rental and investment properties in ${suburb}?`,
    answer: `Absolutely. ${suburb} has one of Melbourne's highest concentrations of rental properties, and we work closely with local landlords and property managers to deliver fast, professional results. We offer scheduled repaint programs, quick turnarounds between tenancies, low-VOC products for occupied properties, and durable interior finishes that stand up to high-turnover use. All work is backed by a 5-year written workmanship guarantee.`
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
  "description": `Professional painting services in ${suburb}, Melbourne — Victorian terraces, Edwardian cottages, bungalows, rental properties and converted warehouses along Sydney Road and Lygon Street.`,
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
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Warehouse & Apartment Painting" } }
    ]
  }
};

export default function BrunswickPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title={`${suburb} Painters | Victorian Terrace & Period Home Specialists | Jetblack Painting`}
      description={`Expert painters in ${suburb} — Victorian terraces, Edwardian cottages, bungalows, rental properties and converted warehouses along Sydney Road and Lygon Street. Free quotes, 5-year guarantee, $10M insurance.`}
      localExpertise={`${suburb} is one of Melbourne's most culturally vibrant inner-north suburbs, stretching from the Moonee Ponds Creek to Merri Creek with a remarkable density of Victorian terrace houses, Edwardian cottages, and the interwar Californian bungalows that define much of the suburb's residential character. The suburb's famous Sydney Road — Melbourne's longest continuous retail strip — runs its entire length, bringing us regular commercial painting enquiries alongside a large residential workload. Heritage overlays protect much of ${suburb}'s period streetscape under Moreland council (now Merri-bek) planning controls, making experienced painters essential for any exterior work on the suburb's many Victorian and Edwardian properties. ${suburb} also has an exceptionally high rental property concentration — among the highest in Melbourne — so we work regularly with property managers and landlords across the suburb for tenancy changeovers and scheduled repaint programs. The suburb's creative and industrial history has left a legacy of converted warehouses and factory buildings, particularly in the south near the Lygon Street and Dawson Street precincts, that require their own approach to surface preparation and paint selection.`}
      propertyTypes={`${suburb}'s residential stock spans 150 years of Melbourne building history. Victorian terrace houses — many single-fronted on narrow lots, with ornate render facades, cast-iron verandah columns and decorative parapets — are most common in the eastern streets near Lygon Street. Edwardian cottages and California bungalows fill the transitional streets built between 1900 and 1940, and are common throughout the western and northern parts of the suburb. The suburb also has a significant stock of converted factory and warehouse buildings — repurposed as apartments, studios and creative spaces — along with modern infill apartments and townhouses. We paint all property types using appropriate preparation and products: oil-based or alkyd primers on bare timber, Dulux Weathershield on render and masonry, and heritage colour palettes on period facades. For rental properties and apartments we use low-VOC interior ranges as standard.`}
      localContent={[
        {
          heading: "Victorian Terraces & Heritage Homes",
          body: `${suburb}'s Victorian and Edwardian streetscapes are among Melbourne's most intact — and most technically demanding to repaint. Correct substrate preparation is non-negotiable: render cracks, rising damp, failed paint films, and chalking lead-based coatings all need to be properly assessed and treated before any new product goes on. We carry out detailed inspections on every heritage property, specify the right primers and sealers for each substrate, and match colour palettes to Heritage Victoria guidance or council heritage overlay requirements. Our work on ${suburb} period homes covers full exterior repaints, verandah ironwork, ornate timber fretwork and lacework, window sashes and frames, and interior walls, ceilings and cornices.`
        },
        {
          heading: "Rental Properties & Sydney Road Commercial",
          body: `${suburb}'s Sydney Road is one of Melbourne's most active retail and hospitality strips, and we service shopfronts, cafés, restaurants and commercial tenancies throughout the precinct alongside our residential workload. For the suburb's large rental property stock, we offer scheduled repaint programs coordinated with property managers, fast vacancy turnarounds, and durable finishes suited to high-turnover tenancy use. We use low-odour interior products as standard in occupied rental properties. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Northcote", link: "/painter-northcote" },
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Carlton", link: "/painter-carlton" },
        { name: "Collingwood", link: "/painter-collingwood" },
        { name: "Kew", link: "/painter-kew" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
