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
      localExpertise={`${suburb} sits just east of the CBD, next to Fitzroy. It was a working-class suburb for most of its life. Now it is one of the inner city's most wanted addresses. Smith Street and Johnston Street carry the shops and cafes. The streets behind them are packed with Victorian terraces, workers' cottages and old warehouses turned into loft apartments. We paint across ${suburb}, Fitzroy, Abbotsford and Richmond. We know the heritage overlay rules here, and we know how fast rental jobs need to move.`}
      propertyTypes={`Most homes in ${suburb} are Victorian or Edwardian. Single-fronted terraces, double-fronted cottages and row houses. Mixed in are converted warehouse apartments and modern infill builds. A lot of it is rented, and a lot of it is held as investment property. Many houses sit inside a heritage overlay. We paint inside and out on all of it.`}
      localContent={[
        {
          heading: `Victorian Terraces and Heritage Properties`,
          body: [
            `${suburb}'s terrace streetscapes are some of the most intact in Melbourne. Rows of single-fronted homes with original iron lacework. Tessellated tile paths. Facades in render or bare brick.`,
            `Old walls need old-wall treatment. Lime render and heritage mortar joints are softer and more porous than modern brickwork. They move and they breathe. We use primers that cope with that rather than sealing the wall up tight.`,
            `Much of ${suburb} sits inside a heritage overlay. We can talk you through colour choices, and whether you need a permit, before any work starts.`,
          ],
        },
        {
          heading: `Converted Warehouses and Rental Properties`,
          body: [
            `The old factories around Hoddle Street and Langridge Street have mostly been converted. Some are homes now. Some are a mix of home and workspace. Inside you find exposed brick, bare concrete and steel. Each of those needs its own primer. Paint straight onto them and it lifts.`,
            `${suburb} also has a lot of rental stock. On those jobs we work to the changeover date. Low-VOC paints so the place can be lived in quickly, neutral colours that suit any tenant, and a finish date we hold to. Every job carries $10 million public liability insurance and a 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Lead Paint in ${suburb}'s Pre-1970 Housing`,
          body: [
            `Australian house paint contained lead until 1970. That covers almost every original coating in ${suburb}. On a terrace or a workers' cottage it is usually buried under later layers. Window sashes and their reveals, door frames, skirtings, and any original weatherboard or joinery outside.`,
            `Left alone and sound, it is not a hazard. The danger is in disturbing it. The worst thing anyone can do to an old ${suburb} house is take an orbital sander to the window frames on a dry day. That turns a stable coating into dust, and the dust travels through the living areas.`,
            `So on any pre-1970 house here we test first. Then we work wet, sheet and seal the work area, and use dust extraction where sanding cannot be avoided. Waste is bagged and taken away, not hosed into the stormwater. It adds time to the preparation. With children in the house it is not optional.`,
          ],
        },
        {
          heading: `Access, Party Walls and Working in a Terrace Row`,
          body: [
            `Painting a single-fronted terrace is an access problem before it is a painting problem. These houses share walls on both sides. There is no side path. There is nowhere to foot a ladder off the boundary. The only way to the back is through the hallway or over the roof.`,
            `The front sits hard on the footpath. Anything above the verandah needs a platform or a scaffold licence, and on some streets council approval to stand on the footpath at all.`,
            `We work all of this out at the quote, not on the first morning. What has to be carried through the house, and how we protect it on the way. How we reach the facade. Whether there is a laneway to the rear. Where the work touches a neighbour's wall, roof or airspace. Where it does, we would rather speak to them before we start than halfway through. Terraces reward planning and punish improvisation.`,
          ],
        },
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
