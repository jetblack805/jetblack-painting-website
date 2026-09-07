import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CanterburyPainters() {
  const suburb = "Canterbury";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Heritage House Painting Services in ${suburb}`,
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
    description: `Jetblack Painting provides heritage-sensitive interior and exterior painting across Canterbury, covering the Federation and Edwardian homes around Maling Road and the wider Boroondara heritage overlay.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}/`,
    },
  };

  const faqs = [
    {
      question: `Do you paint Federation and Edwardian homes in ${suburb}?`,
      answer: `Yes, and they are most of the work here. ${suburb} has one of the more intact concentrations of Federation and Edwardian housing in Boroondara — roughcast render over brick, deep verandahs with turned posts and timber brackets, leadlight surrounds and wide eaves. Those elements are all painted separately and all by hand. We prepare with lead-paint safe methods, because anything built before 1970 in this suburb should be assumed to have lead in the older coats until testing says otherwise.`,
    },
    {
      question: `Will a heritage overlay affect repainting my ${suburb} home?`,
      answer: `Often, and it is worth knowing before you choose a colour rather than after. Much of ${suburb} sits under a Boroondara heritage overlay, which generally controls what is visible from the street on a contributory building. Repainting an existing scheme like-for-like is usually exempt; a significant colour change to a street-facing facade, or work to original render detailing and joinery, can require a planning permit. We check the specific overlay and the property's grading before quoting, and tell you plainly whether a permit applies rather than guessing either way.`,
    },
    {
      question: `How do you work around the mature gardens ${suburb} is known for?`,
      answer: `Carefully, and it changes the quote. Established oaks, elms and hedging sit tight against a lot of ${suburb} facades, which affects where scaffold can stand, how far a ladder can be footed safely, and how much of the elevation can be reached at all without pruning. We walk the site and work out access before pricing, because discovering halfway through that one elevation needs a different platform is how a job runs over. Gardens get sheeted and protected, and we do not cut anything back without asking you first.`,
    },
    {
      question: `Do you paint shopfronts and commercial frontages around Maling Road?`,
      answer: `Yes. Maling Road is a largely intact Edwardian shopping strip, and a frontage there is a heritage facade with a business operating behind it. That means staged access so the shop stays trading, work sequenced outside opening hours where it needs to be, and pedestrian management on a footpath that stays busy. We are fully licensed and carry $10 million in public liability insurance, which matters on any job worked over a public footpath.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding City of Boroondara, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Canterbury Painters | Heritage Homes | Jetblack Painting"
      description="Heritage house painters in Canterbury — Federation and Edwardian homes, Maling Road frontages and Boroondara overlay work. Free quotes, 5-year guarantee."
      neighbouringSuburbs={[
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Balwyn", link: "/painter-balwyn" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Glen Iris", link: "/painter-glen-iris" },
      ]}
      localExpertise={`${suburb} is a small, consistently period suburb in the City of Boroondara, built out largely between the 1890s and the 1920s and never substantially redeveloped. That consistency is the thing that shapes the work: Federation and Edwardian detailing on almost every street, heritage overlays across much of the suburb, and mature gardens that decide how a facade can physically be reached.`}
      propertyTypes={`${suburb}'s Federation and Edwardian homes, roughcast and render facades, interwar brick residences on the streets toward Balwyn, and the heritage shopfronts of the Maling Road precinct.`}
      localContent={[
        {
          heading: `House Painters Serving Canterbury`,
          body: [
            `${suburb} sits between Camberwell and Balwyn in the City of Boroondara, built out mostly between the 1890s and 1920s and largely spared the knockdown-rebuild that reshaped suburbs further south. The result is one of Melbourne's more intact period streetscapes, centred on the Edwardian shopping strip at Maling Road and the surrounding Federation and Edwardian homes.`,
            `Jetblack Painting works across ${suburb} on interiors, full exteriors, and the heritage detailing these houses carry. Every job comes with a written quote that itemises scope and preparation, premium Dulux and Taubmans systems, and a 5-year written workmanship guarantee. We are fully licensed and carry $10 million in public liability insurance.`,
          ],
        },
        {
          heading: `Heritage Detail and Lead-Safe Preparation in ${suburb}`,
          body: [
            `A Federation facade in ${suburb} is not one surface. Roughcast render, smooth render bands, timber brackets and turned verandah posts, cast-iron work, wide eaves and leadlight surrounds all take different preparation and often different coatings, and every one of them is cut in by hand. There is no efficient shortcut on a house like this — the detail is the reason it looks the way it does, and it is also the reason the job takes the time it takes.`,
            `Anything in this suburb built before 1970 should be assumed to carry lead in its older coats until testing shows otherwise. We prepare accordingly: no dry sanding back to bare on suspect coats, containment and controlled removal where it is needed, and clean-up that leaves nothing in the garden beds. It is slower and it is not negotiable on a period home with people living in it.`,
          ],
        },
        {
          heading: `Access, Mature Gardens and the Maling Road Precinct`,
          body: [
            `The gardens are part of why ${suburb} looks the way it does, and they are also the practical constraint on painting it. Established oaks, elms and dense hedging sit hard against a lot of facades here, which decides where scaffold can stand and whether an elevation can be reached safely at all. We work access out on site before pricing, because finding out mid-job that one wall needs a different platform is how a schedule slips. Gardens are sheeted and protected, and nothing gets cut back without asking first.`,
            `Around Maling Road the work changes character again. A frontage on that strip is a heritage facade with a trading business behind it, so the job is staged to keep the shop open, sequenced outside trading hours where that is what it takes, and managed around a footpath that stays busy all day. That coordination is most of what separates a commercial quote here from a residential one.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
