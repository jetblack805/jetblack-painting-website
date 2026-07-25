import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Collingwood";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has a dense mix of Victorian terrace houses, workers' cottages, converted warehouses and loft apartments, and a growing number of modern infill developments — particularly along Smith Street, Johnston Street, and the residential streets running between them. We work across all of these property types, from single-apartment interior repaints to full exterior repaints of terrace rows and warehouse conversions.`
  },
  {
    question: `Do you paint rental and investment properties in ${suburb}?`,
    answer: `Yes — ${suburb} has one of Melbourne's highest rental proportions, and investment property painting is a significant part of our work here. We offer fast interior repaints using low-VOC paints with neutral palettes suited to tenant changeovers, detailed scope documentation for property managers, and flexible scheduling to minimise vacancy time. For landlords with multiple ${suburb} properties, we offer consistent pricing and can coordinate across a portfolio.`
  },
  {
    question: `Can you paint heritage terrace houses in ${suburb}?`,
    answer: `Yes. Much of ${suburb}'s residential streetscape falls within heritage overlay zones, which can govern exterior colour choices. We work with these constraints regularly — advising on what typically triggers a planning permit requirement and what doesn't, recommending period-compatible colour palettes, and applying exterior systems proven on original render, brick, and timber substrates. We carry $10M public liability insurance and provide a 5-year written workmanship guarantee on all work.`
  },
  {
    question: `Can you provide a free quote for painting in ${suburb}?`,
    answer: `Yes. We provide free, no-obligation on-site quotes across ${suburb} and all surrounding inner-north suburbs. Jimmy will inspect the property, discuss your colour and finish preferences, and provide a detailed written quote. Call 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painters serving ${suburb} — specialist in Victorian terraces, converted warehouses, and rental and investment properties.`,
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

export default function CollingwoodPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Collingwood Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Collingwood — Edwardian — single-fronted terraces. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} sits immediately east of the CBD, bordering Fitzroy to the north — one of Melbourne's most historically dense working-class suburbs, now one of its most sought-after inner-city addresses. Smith Street and Johnston Street anchor a vibrant commercial precinct, while the surrounding residential streets are packed with Victorian terrace houses, workers' cottages, and converted warehouses that have been transformed into loft apartments and creative workspaces. Jetblack Painting works throughout ${suburb} and neighbouring Fitzroy, Abbotsford, and Richmond, with deep familiarity with the heritage properties, heritage overlay guidelines, and rental-market dynamics of the area.`}
      propertyTypes={`${suburb}'s housing stock is predominantly Victorian and Edwardian — single-fronted terraces, double-fronted cottages, and row houses — alongside a significant share of converted warehouse apartments and modern infill developments. The suburb has a very high rental density and a strong investment property market. Many properties sit within heritage overlay zones. We handle interior and exterior repaints across all property types.`}
      localContent={[
        {
          heading: `Victorian Terraces & Heritage Properties`,
          body: `${suburb}'s Victorian terrace streetscapes are some of Melbourne's most intact — rows of single-fronted homes with original iron lacework, tessellated tile paths, and rendered or unpainted brick facades. These require surface preparation suited to original lime render and heritage mortar joints, and primer systems compatible with the flexibility and porosity of period construction. We're familiar with the heritage overlay zones that cover much of ${suburb} and can advise on colour choices and any permit implications before work begins.`
        },
        {
          heading: `Converted Warehouses & Rental Properties`,
          body: `${suburb}'s former industrial buildings — particularly in the Hoddle Street and Langridge Street precincts — have been extensively converted to residential and mixed-use spaces. These often feature exposed brick, concrete, and steel substrates requiring specialist primer systems. For ${suburb}'s large rental stock, we offer efficient interior repaints with low-VOC paints, neutral palettes, and turnarounds suited to tenancy changeovers — with $10M public liability insurance and a 5-year written workmanship guarantee on all work.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Fitzroy", link: "/painter-fitzroy" },
        { name: "Carlton", link: "/painter-carlton" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Prahran", link: "/painter-prahran" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
