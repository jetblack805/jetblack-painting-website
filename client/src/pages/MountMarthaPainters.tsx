import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MountMarthaPainters() {
  const suburb = "Mount Martha";
  const schema = {
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
        postalCode: "3195",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    description: `Jetblack Painting provides professional interior and exterior painting services across Mount Martha. Specialists in coastal and residential repaints for holiday homes, permanent residences and bay-view properties along the Mount Martha foreshore and hillside.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`,
    },
  };

  const faqs = [
    {
      question: `Do you paint coastal homes and holiday properties in Mount Martha?`,
      answer: `Yes — coastal and holiday properties are a core part of our Mornington Peninsula work, and Mount Martha has a large stock of both. Homes close to Mount Martha Beach and the foreshore are exposed to salt air from Port Phillip Bay, which accelerates paint failure on surfaces that haven't been properly prepared and coated. We counter this with thorough salt washing before any coating, premium flexible primers, and salt-resistant topcoats from Dulux and Taubmans rated for coastal conditions. For holiday properties, we're experienced working around letting schedules and short-stay gaps to minimise disruption.`,
    },
    {
      question: `What types of homes do you paint in Mount Martha?`,
      answer: `Mount Martha has a diverse housing mix — older weatherboard beach houses and fibro cottages near the lower foreshore, established brick homes throughout the hillside residential areas, contemporary builds on the upper slopes with bay views, and a significant proportion of holiday homes and investment properties that need to be kept in good condition for rental and resale. We handle all surface types: weatherboard repaints, brick and render exteriors, and full interior refreshes on holiday properties. Every job is scoped properly before we quote.`,
    },
    {
      question: `Do you offer free quotes in Mount Martha?`,
      answer: `Yes. We provide free, no-obligation written quotes across Mount Martha and the surrounding Mornington Peninsula area, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mount Martha Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Mount Martha — fibro cottages near the lower foreshore. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`A ${suburb} exterior repaint on a hillside home above the bay. Grey walls with every post, beam, fascia and window surround cut in white — on a house shaped like this one the trim is what does the work, because the eye follows the horizontal lines of the balconies rather than the wall colour.`}
      projectImages={[
        {
          src: "/projects/project-mount-martha-entry-portico.webp",
          small: "/projects/project-mount-martha-entry-portico-800.webp",
          width: 1400,
          height: 1050,
          alt: `Entry elevation of a ${suburb} home after an exterior repaint, with grey walls, white posts and beams and a black front door`,
          caption:
            "The entry elevation. Grey walls, white posts and beams, and the door left black — three colours doing the whole job.",
        },
        {
          src: "/projects/project-mount-martha-balcony-elevation.webp",
          small: "/projects/project-mount-martha-balcony-elevation-800.webp",
          // 1200x1600 at quality 0.72 rather than the 1400x1867 default. Same
          // reason as the Safety Beach pair: sky, foliage and flat render
          // compress badly in webp and the default put this at 283KB, over the
          // 250KB ceiling the speed baseline sets for anything in public/.
          width: 1200,
          height: 1600,
          alt: `Upper balcony and glass balustrade of a ${suburb} home after repainting, white beams and posts against grey walls`,
          caption:
            "The same house from the garden. Soffits, beams and posts all cut in white against the grey — the part of an exterior that shows every shortcut and holds none of the colour.",
        },
        {
          src: "/projects/project-mount-martha-gable-brick-bayview.webp",
          small: "/projects/project-mount-martha-gable-brick-bayview-800.webp",
          width: 1200,
          height: 1600,
          alt: `White painted cladding and fascia meeting the original brickwork on the upper gable of a ${suburb} home, with Port Phillip Bay behind`,
          caption: `Up at the gable, with the bay behind it. The brick was left as it was and the cladding, fascia and barge board cut in white against it — a line that has to be straight, because on a ${suburb} hillside it is read from a long way off.`,
        },
      ]}
      neighbouringSuburbs={[
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Safety Beach", link: "/painter-safety-beach" },
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Rosebud", link: "/painter-rosebud" },
        { name: "Sorrento", link: "/painter-sorrento" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Hastings", link: "/painter-hastings" },
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
      ]}
      localExpertise={`Jetblack Painting services Mount Martha as part of our Mornington Peninsula coverage. Mount Martha extends south from Mornington along the eastern shore of Port Phillip Bay — a suburb of hillside homes with bay views, foreshore properties near Mount Martha Beach, and a substantial holiday home and investment property stock. We understand the coastal conditions that affect paintwork in the foreshore and bay-facing streets, and the practical realities of working on holiday properties with seasonal access schedules.`}
      propertyTypes={`Mount Martha's housing spans older weatherboard beach houses and fibro cottages near the lower foreshore, established brick and rendered homes on the hillside residential streets, and contemporary builds on the upper slopes with bay views — a wide range of surface types that each require specific preparation and coating approaches.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Mount Martha`,
          body: [
            `Mount Martha is a coastal Mornington Peninsula suburb that extends from the hillside residential areas above Nepean Highway down to the foreshore and Mount Martha Beach. The suburb has a diverse housing stock — older beach houses, established brick homes, and contemporary builds — alongside a large holiday property and investment sector. Jetblack Painting provides premium interior and exterior painting across Mount Martha, with a team experienced in coastal conditions, varied surface types and the practical requirements of Peninsula property owners.`,
            `Every Mount Martha project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint on a foreshore weatherboard, a contemporary interior refresh for a holiday let, or a hillside home requiring scaffolding and salt-resistant topcoats, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Coastal and Holiday Home Painting in Mount Martha`,
          body: [
            `Homes near the Mount Martha foreshore and beach are exposed to salt air from Port Phillip Bay, which breaks down paint film faster than inland properties. We use the same approach as across our wider Peninsula and Bayside coastline work: thorough pressure washing to remove salt deposits before any coating, premium flexible primers, and salt-resistant topcoats rated for coastal conditions. Preparation is done properly before any product goes on, which is what determines whether the finish lasts 8 years or starts failing in three.`,
            `Mount Martha's holiday property stock includes weatherboard beach houses that need periodic exterior maintenance and interior refreshes between letting seasons. We're experienced working around Peninsula letting schedules and can advise on durable, low-maintenance finishes suited to short-stay properties where resistance to cleaning, marking and general wear matters more than it does in an owner-occupied home.`,
          ],
        },
      ]}
    />
  );
}
