import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Port Melbourne";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has a distinctive mix of historic Victorian-era cottages, converted industrial warehouses now used as residences, terrace houses, and modern apartments — particularly around the Bay Street strip and the former waterfront precinct. We work across all of these property types, from single-storey period homes to multi-storey apartment and commercial buildings, adapting our approach to the substrate and finish required for each.`
  },
  {
    question: `How does the coastal location affect exterior painting in ${suburb}?`,
    answer: `${suburb}'s position on Port Phillip Bay means salt air and coastal moisture are constant factors for exterior coatings. We use premium exterior paints rated for coastal exposure and always start with thorough surface preparation — removing salt deposits, treating any existing corrosion or chalking, and applying appropriate primers before topcoating. Done properly, a quality coastal exterior repaint in ${suburb} will hold for 8–12 years.`
  },
  {
    question: `Do you paint converted warehouses and heritage industrial buildings in ${suburb}?`,
    answer: `Yes — ${suburb} has a number of converted warehouses and loft-style residences, especially around the Fishermans Bend area and the former waterfront. These often feature exposed brick, concrete, and steel elements that require specialist surface preparation and the right primer systems. We have experience with these substrates and can advise on appropriate paint systems for both interior and exterior applications.`
  },
  {
    question: `Can you provide a free quote for painting in ${suburb}?`,
    answer: `Yes. We provide free, no-obligation on-site quotes across ${suburb} and all surrounding inner-city and bayside suburbs. Jimmy will inspect the property, discuss your colour and finish preferences, and provide a detailed written quote. Call 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painters serving ${suburb} — specialist in Victorian cottages, converted warehouses, and coastal bayside properties.`,
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

export default function PortMelbournePainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title={`${suburb} Painters | Coastal, Heritage & Warehouse Conversion Specialists | Jetblack Painting`}
      description={`Expert painting services in ${suburb}. Specialists in Victorian cottages, converted warehouses, and coastal bayside properties. Free quotes — call 0432 077 782.`}
      localExpertise={`${suburb} sits on the inner edge of Port Phillip Bay — one of Melbourne's most historically rich inner suburbs, transitioning from its working-class waterfront origins into a sought-after residential address. The suburb blends Victorian-era worker's cottages on streets like Nott Street and Esplanade East with converted industrial buildings, terrace houses, and modern apartment towers near the bay. Jetblack Painting works across the full range of ${suburb} property types, bringing the surface preparation knowledge and premium coating systems that coastal and period properties demand.`}
      propertyTypes={`${suburb}'s housing stock spans Victorian worker's cottages, Edwardian terrace houses, converted warehouses and loft apartments, and contemporary high-rise buildings along the waterfront. Many period homes are in heritage overlay zones requiring careful colour selection. We handle interior and exterior repaints across all of these property types, with particular expertise in the prep and primer work that coastal salt air and heritage masonry construction require.`}
      localContent={[
        {
          heading: `Victorian Cottages & Heritage Homes`,
          body: `${suburb}'s grid of Victorian-era worker's cottages — many now immaculately renovated — are a major part of our work in the suburb. These properties typically feature timber weatherboard or brick construction, ornate timber fretwork, and front verandas that require careful preparation and premium coatings to withstand the coastal climate. We work within heritage overlay guidelines and can advise on period-appropriate colour palettes.`
        },
        {
          heading: `Converted Warehouses & Waterfront Apartments`,
          body: `The Fishermans Bend and waterfront precincts have seen significant conversion of former industrial buildings into residential and mixed-use spaces. These often feature exposed brick, concrete render, and steel — all substrates requiring specialist primers and compatible topcoat systems. We carry $10M public liability insurance and provide a 5-year written workmanship guarantee on all painting work, giving owners of these high-value properties full confidence in the finish.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "St Kilda", link: "/painter-st-kilda" },
        { name: "Elwood", link: "/painter-elwood" },
        { name: "Prahran", link: "/painter-prahran" },
        { name: "Brighton", link: "/painter-brighton" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
