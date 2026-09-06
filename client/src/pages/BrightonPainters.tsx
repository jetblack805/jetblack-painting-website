import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BrightonPainters() {
  const suburb = "Brighton";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Premium House Painting Services in ${suburb}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Jetblack Painting",
      telephone: "0432 077 782",
      url: "https://jetblackpainting.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mordialloc",
        postalCode: "3195",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    description: `Jetblack Painting offers luxury interior and exterior painting for Brighton's heritage and modern homes. Expert colour consulting and premium finishes.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}`,
    },
  };

  const faqs = [
    {
      question: `Do you specialize in Brighton's heritage Victorian and Edwardian homes?`,
      answer: `Yes, we are specialists in restoring and painting Brighton's iconic heritage properties. We understand the specific requirements for Victorian and Edwardian homes, including lead paint safety, meticulous timber restoration, and authentic heritage colour schemes.`,
    },
    {
      question: `How do you handle painting for Brighton's beachside properties?`,
      answer: `Brighton's coastal location requires premium protection. We use high-performance, salt-resistant coatings and specialized application techniques to ensure your beachside home remains protected from the elements while maintaining its luxury aesthetic.`,
    },
    {
      question:
        "Are your painters licensed and insured to work on luxury Brighton residences?",
      answer:
        "Absolutely. All our painters are fully licensed, and we carry $10 million in public liability insurance. We pride ourselves on our professional conduct and respect for the high-end properties we work on in Brighton.",
    },
    {
      question:
        "Do I need a permit to repaint a heritage-overlay home in Brighton?",
      answer:
        "Whether a permit is needed depends on the colour and the element. Bayside's heritage overlay generally controls what's visible from the street on a contributory building — repainting an existing colour scheme like-for-like is usually exempt, but a significant colour change to a street-facing facade, or work to original render detailing and joinery, can trigger a planning permit. We check the specific overlay and property grading before quoting and tell you plainly whether a permit applies, rather than assuming either way.",
    },
    {
      question:
        "Can you paint a brand new architect-built home in Brighton, not just heritage restorations?",
      answer:
        "Yes — a large share of our Brighton work now is new architect-designed builds rather than heritage restoration, reflecting how much of the suburb has gone through knockdown-rebuild in the last decade. New render needs to cure fully before coating and gets tested for moisture and alkalinity first, since painting too early traps moisture and causes early failure. We work with builders and owners on the handover timeline so the first coat goes on when the substrate is actually ready, not just when the scaffold comes down.",
    },
    {
      question:
        "How do you protect an occupied, furnished home during painting in Brighton?",
      answer:
        "Full drop sheeting, furniture moved and covered rather than worked around, and floors protected before anything is opened. On a high-value property we walk the scope with you first so there's no ambiguity about what's being painted and what isn't, and the crew works room by room so the rest of the house stays liveable. Every job finishes with a walk-through before we consider it done.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Brighton Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Brighton — heritage homes, modern beachside residences and premium materials. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`Three ${suburb} jobs. An exterior repaint on a weatherboard home — olive and cream taken to a dark charcoal, with the fretwork, verandah posts and window frames picked out in white — an interior repaint rolled out room by room, through to the stair hall, and a new architect-designed build by the pool.`}
      projectImages={[
        {
          // Cropped in from the left. The original frame carried an enamel "11"
          // house-number plate on the gate post, and street numbers do not go on
          // this site — one was deliberately blurred on 2026-08-02, and fence
          // photos were declined in #256 for republishing an address that had
          // already been removed. RECT=600,0,2268,4032 puts the plate outside
          // the frame. The after and during frames were checked too and carry
          // no number. Do not widen this crop.
          //
          // All three exterior frames are 1200x2133 so the before and after line
          // up in the grid — the after is a 1242x2208 phone frame and the before
          // was cropped to the same ratio deliberately.
          src: "/projects/project-brighton-exterior-before.webp",
          small: "/projects/project-brighton-exterior-before-800.webp",
          width: 1200,
          height: 2133,
          alt: `Weatherboard ${suburb} home in olive and cream before repainting, with a Jetblack Painting painter working the upper storey from the verandah roof`,
          caption:
            "Before. Olive weatherboard with cream trim — the paint was sound, the colour had dated. Working the upper storey off the verandah roof.",
        },
        {
          src: "/projects/project-brighton-exterior-after.webp",
          small: "/projects/project-brighton-exterior-after-800.webp",
          width: 1200,
          height: 2133,
          alt: `The same ${suburb} weatherboard home after repainting, in dark charcoal with white fretwork, verandah posts and window frames`,
          caption:
            "After, from the same spot. Weatherboards in a dark charcoal with the fretwork, posts and window frames in white — on a house with this much detail the trim is the whole point of the colour.",
        },
        {
          src: "/projects/project-brighton-exterior-cutting-in.webp",
          small: "/projects/project-brighton-exterior-cutting-in-800.webp",
          width: 1200,
          height: 2133,
          alt: `A Jetblack Painting painter on a ladder cutting in the verandah fretwork by brush during a ${suburb} exterior repaint`,
          caption:
            "Cutting in the verandah fretwork. There is no spraying this — every bracket and spindle is done by hand, off a ladder, over drop sheets.",
        },
        {
          src: "/projects/project-brighton-interior-rolling.webp",
          small: "/projects/project-brighton-interior-rolling-800.webp",
          width: 1206,
          height: 2146,
          alt: `Jimmy Demirci of Jetblack Painting rolling a wall with an extension pole during an interior repaint in ${suburb}`,
          caption:
            "Rolling out a wall on an extension pole. The room is clear of furniture but the carpet and trim are staying, so it is rolled rather than sprayed — spraying here would mean masking every surface in the room to save an hour on the walls.",
        },
        {
          // Deliberately last. The grid is two columns, so a fifth image sits
          // alone on the final row — which works here because this is the
          // finished result and the four above it are the work that got there.
          // If a sixth is ever added, pair it with this one rather than pushing
          // it down to a row of its own.
          src: "/projects/project-brighton-stair-hall.webp",
          small: "/projects/project-brighton-stair-hall-800.webp",
          width: 1200,
          height: 1600,
          alt: `Finished stair hall in a ${suburb} home after an interior repaint, curved staircase with white risers and balusters against timber treads, handrail and floorboards`,
          caption:
            "The stair hall finished. A curved string, turned balusters and an arched fretwork surround are all cut in by hand, and there is nowhere on a staircase to hide a wobbly line — it sits at eye level and you walk past it every day.",
        },
        {
          // Jimmy supplied two interiors of this job as well. They are withheld
          // deliberately and permanently: the crew in both wears "Quest
          // Paintings LTD" shirts with an 021 number, not Jetblack's. Another
          // company's branding should never be what a visitor finds when they
          // zoom into Jetblack's portfolio. Jimmy confirmed on 2026-09-06 to
          // run the pool exterior only. Do not add those two later.
          //
          // This frame carries no people and no branding: the glazing was
          // zoomed and holds only bare trees, a neighbour's brickwork, a step
          // ladder and drop sheets.
          src: "/projects/project-brighton-architect-pool-house.webp",
          small: "/projects/project-brighton-architect-pool-house-800.webp",
          width: 1400,
          height: 1050,
          alt: `Architect-designed ${suburb} home after repainting, white rendered walls and a cantilevered upper storey above full-height glazing and a black lap pool`,
          caption:
            "A new architect-designed build. Flat white planes this size are the hardest thing in the trade to paint well — there is no detail anywhere to break the surface up, so a single roller lap, patch or join in the render reads straight across the whole wall the moment the light rakes along it.",
        },
      ]}
      neighbouringSuburbs={[
        { name: "Brighton East", link: "/painter-brighton-east" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise={`We understand ${suburb}'s unique properties, from Victorian heritage homes to modern beachside residences. Our team knows the local climate challenges including salt air and coastal weather, and can recommend the best paint finishes and colours for ${suburb} homes.`}
      propertyTypes={`${suburb}'s heritage homes, modern beachside residences, and period properties require specialized care and premium materials.`}
      localContent={[
        {
          heading: "Premium House Painters Serving Brighton",
          body: [
            "Brighton blends beachside prestige with heritage character, from the landmark bathing boxes along Dendy Street Beach to the grand period homes lining the Golden Mile and the streets around Church Street and Bay Street. Jetblack Painting provides the premium interior and exterior painting these homes deserve — combining careful preparation, expert colour work and durable, high-quality finishes on some of Bayside's most valuable properties.",
            "Whether you own a stately Victorian or Edwardian residence, a renovated period home or a sleek modern beachside build, we tailor our approach to the property. Our detailed written quotes include the full scope and preparation up front, so there are no surprises — just a clean, professional result and respectful conduct on site.",
          ],
        },
        {
          heading: "Heritage Restoration and Coastal Protection in Brighton",
          body: [
            "Brighton's heritage homes need more than a coat of paint. We handle the specifics of Victorian and Edwardian properties — lead-paint-safe preparation, meticulous timber and ornamental restoration, and authentic heritage colour schemes that suit the era and any overlay requirements. The result protects the home's value and keeps its character intact.",
            "Sitting right on Port Phillip Bay, Brighton homes also face constant salt air and coastal weather. We use high-performance, salt-resistant coatings and thorough surface preparation so exteriors stay protected against the elements and hold their finish far longer than a standard repaint would in this environment.",
          ],
        },
        {
          heading: "Brighton's Knockdown-Rebuild and Architect-Designed Homes",
          body: [
            "Brighton has one of the highest knockdown-rebuild rates in Melbourne, and a large share of our work here now is brand new architect-designed homes rather than heritage restoration. Render is the dominant facade material across both eras — the difference is that new render needs to fully cure before it can be coated, and we test for surface moisture and alkalinity rather than painting the moment the scaffold comes down. Coat a green wall too early and the finish fails within a season, no matter how good the paint is.",
            "We work directly with builders around handover timelines on new builds, and separately handle the render, cladding and joinery combinations that show up on architect-designed homes — standing-seam metal, timber cladding, off-form concrete panels — each needing its own primer and coating system rather than one product across the lot.",
          ],
        },
        {
          heading:
            "Heritage Overlays Around the Golden Mile and Church Street Precinct",
          body: [
            "Much of Brighton sits within Bayside's heritage overlay, particularly through the Golden Mile and the streets around Church Street and New Street. What that means for a repaint varies by property grading and by what's actually visible from the street — a like-for-like recolour of an existing scheme is usually straightforward, while a significant change to a contributory building's street-facing facade can require a planning permit first.",
            "We check the specific overlay and grading for the property before quoting, so you know upfront whether a permit conversation is needed rather than finding out halfway through a job. For homes not under overlay, there's more freedom in colour and finish — we scope both the same way, with the constraints made clear from the first visit.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
