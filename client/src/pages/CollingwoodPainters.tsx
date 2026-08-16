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
    question: `Is there lead paint in ${suburb}'s older houses?`,
    answer: `In a suburb built the way ${suburb} was, it should be assumed until tested. Lead was in Australian household paint until 1970, so any original coating on a Victorian terrace or workers' cottage here is likely to contain it — usually buried under later layers on window sashes, door frames, skirtings and exterior weatherboards. Intact paint is not the hazard; disturbing it is. Dry sanding or power-sanding old coatings puts lead dust through the house, and that is the risk to children and pets. We test before we disturb original surfaces, and where lead is present we work wet, contain and sheet the area, and bag and dispose of the waste properly rather than sweeping it into the garden.`
  },
  {
    question: `How do you paint a terrace with no side access?`,
    answer: `It is the standard condition in ${suburb} rather than the exception. Single-fronted terraces share party walls with the houses either side, so there is usually no side path, no room to stand a ladder off the boundary, and no way to get plant through to the rear. Everything goes through the house or over the roof. We plan access at the quote stage — what needs to be carried through, whether the front elevation needs a scaffold or can be reached off a platform, whether the rear is reachable from the laneway — and we agree it with you and, where the work touches a shared wall or boundary, with your neighbour before we start. Getting that settled up front is what stops a terrace repaint stalling halfway.`
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
        },
        {
          heading: `Lead Paint in ${suburb}'s Pre-1970 Housing`,
          body: `Lead remained in Australian household paint until 1970, which puts almost every original coating in ${suburb} inside the window. On a Victorian terrace or workers' cottage it is typically sitting under decades of later layers — window sashes and their reveals, door frames, skirtings, and any original external weatherboard or joinery. Left intact and sound it is not a hazard. The danger comes from disturbing it, and the single worst thing anyone can do to an old ${suburb} house is take an orbital sander to the window frames on a dry day, because that turns a stable coating into airborne dust through the living areas. Our approach on any pre-1970 property here is to test before disturbing original surfaces, then work wet, sheet and contain the work area, use dust extraction where sanding is unavoidable, and bag and remove the waste rather than washing it into the stormwater. It adds time to the preparation, and it is not optional on a house of this age with children in it.`
        },
        {
          heading: `Access, Party Walls and Working in a Terrace Row`,
          body: `Painting a single-fronted terrace is a logistics problem before it is a painting problem. These houses share party walls on both sides, which means no side path, nowhere to foot a ladder off the boundary, and no route to the rear except through the hallway or over the roof. Front elevations sit hard on the footpath, so anything above the verandah needs either a platform or a scaffold licence and, on some streets, council approval to occupy the footpath. We work all of this out at the quote rather than discovering it on day one — what has to be carried through the house and how it will be protected on the way, how the facade will be reached, whether the rear is accessible from a laneway, and where any of it touches a neighbour's wall, roof or airspace. Where it does, we would rather have that conversation with them before the job starts than halfway through it. Terraces reward planning; they punish improvisation.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Richmond", link: "/painter-richmond" },
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
