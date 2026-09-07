import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MordiallocPainters() {
  const suburb = "Mordialloc";
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": "https://jetblackpainting.com/#business",
      name: "Jetblack Painting",
      image: "https://jetblackpainting.com/og-image.jpg",
      telephone: "0432 077 782",
      email: "jimmy@jetblackpainting.com",
      url: "https://jetblackpainting.com",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mordialloc",
        addressRegion: "VIC",
        postalCode: "3195",
        addressCountry: "AU",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -38.0131,
        longitude: 145.0965,
      },
      areaServed: [
        { "@type": "City", name: "Mordialloc" },
        { "@type": "City", name: "Armadale" },
        { "@type": "City", name: "Aspendale" },
        { "@type": "City", name: "Bayside" },
        { "@type": "City", name: "Beaumaris" },
        { "@type": "City", name: "Bentleigh" },
        { "@type": "City", name: "Berwick" },
        { "@type": "City", name: "Black Rock" },
        { "@type": "City", name: "Bonbeach" },
        { "@type": "City", name: "Box Hill" },
        { "@type": "City", name: "Brighton" },
        { "@type": "City", name: "Brighton East" },
        { "@type": "City", name: "Camberwell" },
        { "@type": "City", name: "Carlton" },
        { "@type": "City", name: "Carrum" },
        { "@type": "City", name: "Caulfield" },
        { "@type": "City", name: "Chadstone" },
        { "@type": "City", name: "Chelsea" },
        { "@type": "City", name: "Cheltenham" },
        { "@type": "City", name: "Clarinda" },
        { "@type": "City", name: "Croydon" },
        { "@type": "City", name: "Dandenong" },
        { "@type": "City", name: "Doncaster" },
        { "@type": "City", name: "Donvale" },
        { "@type": "City", name: "Edithvale" },
        { "@type": "City", name: "Elsternwick" },
        { "@type": "City", name: "Glen Waverley" },
        { "@type": "City", name: "Greater Dandenong" },
        { "@type": "City", name: "Hampton" },
        { "@type": "City", name: "Hawthorn" },
        { "@type": "City", name: "Heatherton" },
        { "@type": "City", name: "Highett" },
        { "@type": "City", name: "Keysborough" },
        { "@type": "City", name: "Kew" },
        { "@type": "City", name: "Kingston" },
        { "@type": "City", name: "Malvern" },
        { "@type": "City", name: "McKinnon" },
        { "@type": "City", name: "Mentone" },
        { "@type": "City", name: "Moorabbin" },
        { "@type": "City", name: "Mornington Peninsula" },
        { "@type": "City", name: "Murrumbeena" },
        { "@type": "City", name: "Oakleigh" },
        { "@type": "City", name: "Ormond" },
        { "@type": "City", name: "Parkdale" },
        { "@type": "City", name: "Ringwood" },
        { "@type": "City", name: "Sandringham" },
        { "@type": "City", name: "South Yarra" },
        { "@type": "City", name: "Stonnington" },
        { "@type": "City", name: "Templestowe" },
        { "@type": "City", name: "Toorak" },
        { "@type": "City", name: "Wheelers Hill" },
      ],
      description:
        "Jetblack Painting is a Mordialloc-based house painting business providing interior, exterior and commercial painting services across 90+ Melbourne suburbs.",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `Professional House Painting Services in ${suburb}`,
      provider: {
        "@type": "HomeAndConstructionBusiness",
        name: "Jetblack Painting",
        telephone: "0432 077 782",
        url: "https://jetblackpainting.com",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Mordialloc",
          addressRegion: "VIC",
          postalCode: "3195",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "City",
        name: suburb,
      },
      description: `Jetblack Painting provides premium interior, exterior, and commercial painting services in ${suburb}. Specializing in coastal home protection and heritage property restoration.`,
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}/`,
      },
    },
  ];

  const faqs = [
    {
      question: `How do you protect ${suburb} homes from coastal salt air?`,
      answer: `We start by washing the salt off. That matters more than anything else here, because paint will not hold over a salt film. After the wash we use flexible primers, then coastal-grade topcoats from Dulux and Taubmans. Those products are built for this kind of exposure. Skip the wash and even the best paint lets go early.`,
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `All of them. Weatherboard beach houses, Victorian-era heritage homes, modern architect-designed places, and the shops and offices along Main Street. We have worked on each type here in ${suburb}.`,
    },
    {
      question: "How long does a typical house painting project take?",
      answer:
        "Most homes in Mordialloc take 5 to 10 working days. What moves that number is the size of the house and how much prep it needs. You get a timeline with your quote, so you know what to expect before we start.",
    },
    {
      question: `Do you paint boat clubs, bowls clubs or other community buildings near ${suburb}'s foreshore?`,
      answer: `Yes. The foreshore and creek area has a strong club scene, boating, bowls and life saving among them, and we have painted that kind of building as well as houses. These jobs mean bigger surfaces, heavier salt air right on the water, and club events to schedule around. We are set up for all three.`,
    },
    {
      question: `Do you do commercial painting for shops and hospitality venues on ${suburb}'s Main Street?`,
      answer: `Yes. We are based in ${suburb}, and we paint shopfronts, cafes and hospitality venues along Main Street and the Nepean Highway strip as well as homes. Commercial jobs get a clear written scope. We then schedule around your trading hours, so you lose as little business as possible.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mordialloc Painters | Coastal Painting | Jetblack Painting"
      description="Mordialloc painters based in the 3195 — beach houses, bayside homes and Main Street shopfronts. Interior, exterior, roof and commercial. Call 0432 077 782."
      projectSummary={`Two ${suburb} exteriors, plus Jimmy on the tools on a third. A weatherboard home taken from pale grey to charcoal, and the double-height rear courtyard of a two-storey townhouse — brickwork in white, joinery and balcony framing in a grey-green, photographed mid-job with the balustrade glass still masked. This is the home suburb — the yard is a few minutes from most of these jobs, which is why a ${suburb} quote gets done on site rather than estimated over the phone.`}
      projectImages={[
        {
          // Split out of a single 1819x1819 side-by-side Jimmy composed himself.
          // The seam was measured, not guessed: scanning columns either side of
          // the midpoint for vertical-edge strength puts it at x=944, not the
          // 909 an even split would assume. Both halves are cropped to the same
          // 874x880 window so the pair lines up in the grid.
          //
          // Kept at 874px, which is under the usual 1200-1400, because that is
          // the real resolution of the composite — upscaling would only invent
          // detail. Jimmy has the two originals if a sharper pair is ever wanted.
          src: "/projects/project-mordialloc-weatherboard-before.webp",
          small: "/projects/project-mordialloc-weatherboard-before-800.webp",
          width: 874,
          height: 880,
          alt: `Weatherboard ${suburb} home in pale grey with a grey roof before repainting, behind a white picket fence`,
          caption:
            "Before. Pale grey weatherboard and a grey roof — nothing wrong with it, but every line on the house disappears into the one tone.",
        },
        {
          src: "/projects/project-mordialloc-weatherboard-after.webp",
          small: "/projects/project-mordialloc-weatherboard-after-800.webp",
          width: 874,
          height: 880,
          alt: `The same ${suburb} weatherboard home after repainting in charcoal with white eaves, fretwork and window frames`,
          caption:
            "After, same spot, same fence. Charcoal on the boards with the eaves, fretwork and window frames in white — the gables and the verandah detail only exist as shapes once there is something for them to sit against.",
        },
        {
          src: "/projects/project-mordialloc-weatherboard-deck.webp",
          small: "/projects/project-mordialloc-weatherboard-deck-800.webp",
          width: 1200,
          height: 1600,
          alt: `Rear elevation of the same ${suburb} home after repainting, charcoal weatherboard and white trim above a timber deck`,
          caption:
            "Round the back, where nobody from the street will ever see it. The cut between the charcoal and the white is the same here as it is on the front.",
        },
        {
          src: "/projects/project-mordialloc-exterior-repaint-jimmy.webp",
          small: "/projects/project-mordialloc-exterior-repaint-jimmy-800.webp",
          width: 1400,
          height: 1867,
          alt: `Jimmy Demirci of Jetblack Painting cutting in by hand around a downpipe during an exterior repaint in ${suburb}, with Dulux masking film protecting the windows`,
          caption:
            "Cutting in around the downpipe by hand. The windows are masked before a brush is opened — the preparation is most of the day, and it is what decides whether the edges still look sharp in five years.",
        },
        // The four courtyard frames below are a separate job from the
        // weatherboard above and are captioned so they never read as the same
        // house. They are also mid-job, not a finished result — the balustrade
        // glass is still in its protective film and the interior is under dust
        // sheets — so nothing here claims a completed finish.
        //
        // No colour names. The brick is plainly white and the joinery a
        // grey-green, but naming a product off a photograph is guessing.
        // Compare Murrumbeena, where the Dulux colours ARE named because Jimmy
        // confirmed them.
        //
        // Two frames were cropped for the photographer's finger over the lens,
        // not for privacy: the courtyard shot at RECT=1050,0,2268,3024 (which
        // also squares it to 3:4 so all four sit as two clean grid rows) and
        // the brickwork shot at RECT=114,0,2910,3880. Full-resolution privacy
        // pass done on all four: no street number, no plate, no person, and the
        // interior visible through the glass holds nothing legible. The one
        // human trace is the photographer's own reflection in the door glass,
        // an unidentifiable backlit silhouette.
        {
          src: "/projects/project-mordialloc-courtyard-wide.webp",
          small: "/projects/project-mordialloc-courtyard-wide-800.webp",
          width: 1200,
          height: 1600,
          alt: `Rear courtyard of a two-storey ${suburb} townhouse during an exterior repaint, white painted brickwork and grey-green joinery below a glass balustrade, with bluestone paving and rendered planters`,
          caption:
            "The whole courtyard. White on the brickwork, grey-green on the joinery and the balcony framing, and the rendered planters left white to match the walls. A space this narrow bounces light off every surface, so the wall colour ends up doing far more work here than the same colour would on an open elevation.",
        },
        {
          src: "/projects/project-mordialloc-courtyard-brickwork.webp",
          small: "/projects/project-mordialloc-courtyard-brickwork-800.webp",
          width: 1200,
          height: 1600,
          alt: `Double-height painted brickwork in the courtyard of a ${suburb} townhouse, white brick meeting a timber boundary fence, with a glass balustrade balcony above`,
          caption:
            "The same corner from the other end, two full storeys of painted brick. Coating brick is a one-way decision — once it is painted it has to stay painted, so the preparation and the choice of system matter more here than they would on render.",
        },
        {
          src: "/projects/project-mordialloc-courtyard-balcony.webp",
          small: "/projects/project-mordialloc-courtyard-balcony-800.webp",
          width: 1200,
          height: 1600,
          alt: `Upper balcony and glass balustrade above the bifold doors of a ${suburb} townhouse courtyard, the glass still covered in protective film during the repaint`,
          caption:
            "Looking up at the balcony. The balustrade glass is still in its protective film, and it stays on until the end rather than coming off early — everything above and behind it gets cut in first, and glass is the one surface on the job you cannot sand a mistake back off.",
        },
        {
          src: "/projects/project-mordialloc-courtyard-bifolds.webp",
          small: "/projects/project-mordialloc-courtyard-bifolds-800.webp",
          width: 1200,
          height: 1600,
          alt: `Freshly painted grey-green bifold door frames in the courtyard of a ${suburb} townhouse, with the interior under dust sheets behind the glass`,
          caption:
            "The bifolds, with the house still under dust sheets behind them. Every leaf, edge and rebate is brushed, and the doors have to keep folding once it cures — too heavy a coat in the wrong place and the set binds the first time someone closes it.",
        },
      ]}
      neighbouringSuburbs={[
        { name: "Waterways", link: "/painter-waterways" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
      ]}
      localExpertise={`We are based in ${suburb} and we paint right across the Bayside area. Living this close to the water is hard on paint. Salt air eats into coatings, the sun fades them, and Melbourne's weather does the rest. We choose products and preparation for those conditions, because we deal with them on every job here.`}
      propertyTypes={`${suburb} has classic weatherboard beach houses, contemporary bayside homes and period homes. Each one needs a different approach, so we match the method to the building rather than treating them all the same.`}
      localContent={[
        {
          heading: "House Painters Based in Mordialloc",
          body: [
            "Mordialloc is our home. Jetblack Painting is based here in the 3195. Book a quote for a house near Main Street, along the Nepean Highway, or in the quiet streets around Mordialloc Creek and Peter Scullin Reserve, and you get a local painter. Not a call centre. Not a subcontractor sent from the other side of Melbourne. We know the homes here because we live among them.",
            "Being close by means quick quotes and easy site visits. It also means a team that turns up when it says it will. We have painted right across Mordialloc and the wider Kingston area. Heritage cottages near the foreshore, newer townhouses, and unit blocks set back from the beach.",
          ],
        },
        {
          heading: "Coastal Painting Built for Mordialloc's Bayside Weather",
          body: [
            "Mordialloc sits right on Port Phillip Bay. That means salt air, strong sun and wet winters. Paint that goes on without proper preparation will blister, peel and fade much faster here than it would inland. So we wash the salt off first. Then flexible exterior primers, then topcoats from Dulux and Taubmans that are rated for coastal use.",
            "Weatherboard is everywhere in Mordialloc, and timber this close to the water needs care. We fill, sand and prime any bare timber, then caulk the gaps tight. That stops water getting in behind the paint. Weatherboard beach house, rendered front, or a newer Colorbond-and-render build, we match the system to the surface.",
          ],
        },
        {
          heading: `The Fishing Village Character Around the Pier and Creek`,
          body: [
            `${suburb} started as a fishing village around the creek mouth and the pier. You can still see it in the weatherboard cottages and boat clubs near the foreshore. We know these older homes well. The timber needs priming and sealing properly. Anything within a street or two of the water gets the same salt-rated preparation and coatings we use across the Bayside strip.`,
            `The pier and creek area is also home to boating, bowls and life saving clubs. We paint that kind of building as well as private homes. The surfaces are bigger, the salt exposure is heavier, and there are usually club events to work around. None of that is new to us.`,
          ],
        },
        {
          heading: `Commercial and Hospitality Painting on Main Street`,
          body: [
            `We do not only paint homes around ${suburb}. We also look after shops, cafes and hospitality venues along Main Street and the Nepean Highway strip. Commercial work brings its own problems. There are trading hours to fit around, shopfront signage to protect, and usually a tighter deadline than a house.`,
            `Every commercial quote is written up front, so you can see the scope before we start. We then work around your trade. Early mornings, after hours, or one zone at a time, depending on what keeps your doors open.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
