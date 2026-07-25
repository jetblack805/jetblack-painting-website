import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "Fitzroy";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} is one of Melbourne's densest concentrations of Victorian-era terrace houses, single-fronted cottages, and row houses — most with original ornate iron lacework, return verandas, and rendered or brick facades. The suburb also has a significant share of converted warehouse apartments and commercial buildings along Smith Street and Brunswick Street. We work across all of these property types, from single-apartment interiors to full terrace exterior repaints.`
  },
  {
    question: `Do you paint rental and investment properties in ${suburb}?`,
    answer: `Yes — ${suburb} has one of Melbourne's highest rental proportions, and a large share of our work here is for landlords and property investors. We understand what tenants and property managers need: neutral, durable finishes, low-VOC paints suitable for occupied properties, minimal disruption during changeovers, and fast turnarounds. We can schedule around existing tenancy arrangements and provide detailed scope documentation to support lease administration.`
  },
  {
    question: `Can you paint the exterior of a heritage terrace in ${suburb}?`,
    answer: `Yes. Many ${suburb} properties fall within heritage overlay zones — the suburb has one of Melbourne's highest concentrations of Victorian-era streetscapes — meaning exterior colour changes may require a planning permit depending on the extent of the change. We navigate this routinely and can advise on what typically triggers a permit and what doesn't. For the painting itself, we use exterior systems proven on original render, timber, and iron substrates, with preparation appropriate to each surface.`
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
  "description": `Professional painters serving ${suburb} — specialist in Victorian terraces, heritage overlay properties, and rental and investment painting.`,
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

export default function FitzroyPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Fitzroy Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Fitzroy — Edwardian — single-fronted. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} sits immediately north of the CBD — one of Melbourne's oldest and most characterful inner suburbs, with Brunswick Street and Smith Street at its heart and a dense grid of Victorian terrace houses, workers' cottages, and converted warehouse spaces throughout. The suburb's housing stock is almost entirely Victorian and Edwardian-era, with a high proportion of heritage overlay protection, and a very active rental and investment property market. Jetblack Painting works throughout ${suburb} and neighbouring Collingwood, Carlton, and Northcote, with extensive experience in the preparation and coating systems that period masonry and timber buildings require.`}
      propertyTypes={`${suburb}'s housing stock is predominantly Victorian and Edwardian — single-fronted and double-fronted terrace houses, workers' cottages, and the occasional converted warehouse or commercial building. Many properties are rental or investment-owned, with a strong market for quality interior repaints during tenancy changeovers. Heritage overlay zones cover much of the suburb, governing exterior colour choices. We handle interior and exterior repaints across the full range of ${suburb} property types.`}
      localContent={[
        {
          heading: `Victorian Terraces & Heritage Properties`,
          body: `${suburb}'s terrace houses are some of Melbourne's most intact Victorian streetscapes — rows of single-fronted and double-fronted homes with original iron lacework, tessellated tile paths, and rendered or unpainted brick facades. These properties require careful surface preparation — particularly for original lime render and heritage mortar joints — and primer and topcoat systems compatible with the movement and porosity of older substrates. We work within heritage overlay guidelines and can advise on colour choices appropriate for the streetscape context.`
        },
        {
          heading: `Rental & Investment Property Painting`,
          body: `With ${suburb}'s high rental density, interior repaints during tenancy changeovers are a core part of our work. We use low-VOC paints, work efficiently to minimise vacancy time, and apply neutral palettes that photograph well for rental listings and appeal to a broad tenant pool. For landlords with multiple properties, we offer consistent pricing and scheduling across a portfolio. We carry $10M public liability insurance and provide a 5-year written workmanship guarantee on all painting work.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Carlton", link: "/painter-carlton" },
        { name: "Prahran", link: "/painter-prahran" },
        { name: "St Kilda", link: "/painter-st-kilda" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Malvern", link: "/painter-malvern" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
