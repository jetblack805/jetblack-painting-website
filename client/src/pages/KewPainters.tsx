import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KewPainters() {
  const suburb = "Kew";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Jetblack Painting",
      "telephone": "0432 077 782",
      "url": "https://jetblackpainting.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mordialloc",
        "postalCode": "3195",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides premium interior, exterior, and heritage painting services in Kew. Specialising in Victorian mansion restoration and contemporary home protection.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialise in heritage house painting in Kew?`,
      answer: `Yes, we have extensive experience with Kew's historic properties. We use traditional techniques combined with premium modern paints to restore Victorian and Edwardian homes to their former glory while ensuring they are protected for years to come.`
    },
    {
      question: `What is your process for painting high-value residences in Kew?`,
      answer: `For Kew's prestigious homes, we follow a rigorous preparation process, including thorough cleaning, sanding, and premium priming. We use only the highest quality paints like Dulux and Taubmans to ensure a flawless, luxury finish.`
    },
    {
      question: `Are you familiar with heritage overlays in Kew?`,
      answer: `Absolutely. We understand the requirements of Boroondara Council's heritage overlays and can work with you to ensure your painting project complies with local regulations while achieving your aesthetic goals.`
    },
    {
      question: `Do you deal with lead paint on older ${suburb} homes?`,
      answer: `Anything built before about 1970 can carry lead-based paint under the later coats, and a lot of ${suburb}'s period housing falls into that bracket. It is not a reason to panic, but it does change how the surface is prepared: no dry sanding, no heat guns, and no power tools that throw dust around. We identify it, keep the area contained, use wet methods where sanding is needed, and clean up properly as we go. Where a surface needs extensive removal rather than preparation, that is specialist work and we will tell you so rather than press on.`
    },
    {
      question: `How do you reach second-storey and gable work on a ${suburb} home?`,
      answer: `With scaffolding or edge protection, chosen for the building and the ground it sits on. Many ${suburb} homes are double-storey on sloping blocks toward Studley Park and the Yarra, which means the ground is rarely flat and a ladder is rarely the right answer. Access gets worked out at the site visit and itemised in the quote, because it affects both the price and how long the job takes.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Kew Painters | Heritage & Period Homes | Jetblack Painting"
      description="Heritage and period home painters in Kew — Edwardian mansions and modern architectural requirements. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Balwyn", link: "/painter-balwyn" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Templestowe", link: "/painter-templestowe" }
      ]}
      localExpertise={`As local painting experts serving Kew and the City of Boroondara, we understand the prestige and history of the area. Our team specialises in the meticulous restoration of heritage Victorian and Edwardian homes, ensuring every detail is preserved while using modern, durable paints for a long-lasting finish.`}
      propertyTypes={`Kew's architectural landscape is defined by its grand Victorian and Edwardian mansions, particularly in the Sackville Ward, alongside stunning contemporary residences. We adapt our techniques to suit both historic preservation and modern architectural requirements.`}
      localContent={[
        {
          heading: "Premium House Painters Serving Kew",
          body: [
            "Kew is one of Melbourne's most prestigious inner-eastern suburbs, defined by its grand Victorian and Edwardian mansions, leafy streets and elevated positions overlooking Studley Park and the Yarra. Jetblack Painting delivers the meticulous, high-end painting these homes deserve — from stately heritage residences around Cotham Road and the Sackville Ward to contemporary architect-designed properties throughout Kew and Kew East.",
            "We approach every Kew project as a premium job: detailed preparation, refined finishing and premium coatings selected to suit both historic homes and modern design. Our written quotes are thorough and transparent, and our team works cleanly and discreetly around your home and grounds.",
          ],
        },
        {
          heading: "Heritage Restoration Expertise in Kew",
          body: [
            "Many Kew homes are heritage-significant, and the details matter — period-correct colour schemes, lead-paint-safe preparation on older surfaces, and careful restoration of timber, render and ornamental features. We protect both the character and the substantial value of these grand properties with work that honours the original architecture.",
            "For Kew's contemporary residences, we deliver the seamless modern finishes designer homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors. Whichever era your Kew home belongs to, the standard is the same: immaculate preparation and a finish that lasts.",
          ],
        },
        {
          heading: "Getting to the Work on a Double-Storey Kew Home",
          body: [
            "A lot of Kew sits on a slope. The streets running down toward Studley Park and the Yarra put houses on blocks that fall away at the back, so a home that looks like a comfortable two storeys from the footpath can be three storeys off the ground at the rear. That changes the job before a brush is opened.",
            "Access gets decided at the site visit, not guessed at afterwards. Scaffolding, edge protection or a lift depends on the height, the fall of the land and what is underneath — garden beds, a deck, a driveway the neighbours share. It is itemised in the quote rather than folded into a lump sum, because it affects both the price and how long the work takes. Gable ends, upper-storey window frames and high fascia are where exterior paint fails first on these houses, and they are exactly the parts that get skipped when access is treated as an afterthought.",
          ],
        },
        {
          heading: "What Is Under the Old Paint on a Period Home",
          body: [
            "On a house that has been repainted every decade or so since the 1920s, the surface you are looking at is the top of a stack. How that stack behaves decides the preparation. Layers that have gone brittle need to come back to a sound edge rather than be coated over, and render that has been sealed with the wrong product will keep rejecting paint until it is dealt with properly.",
            "Anything built before roughly 1970 can also carry lead-based paint down in those layers. That is common across Kew's period housing and it is manageable, but it rules out dry sanding, heat guns and anything that throws dust around the garden. We keep the area contained, use wet methods where sanding is needed, and clean up as we go. If a surface needs full removal rather than preparation, that is specialist work and we will say so.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
