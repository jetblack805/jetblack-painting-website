import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SomervillePainters() {
  const suburb = "Somerville";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Somerville. Specialists in brick veneer family homes, acreage properties and newer estate builds on the southern Mornington Peninsula corridor.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint brick veneer family homes in Somerville?`,
      answer: `Yes — Somerville has grown quickly with brick veneer family homes on newer estate blocks alongside older township housing, and this is a large part of our work here. On brick veneer homes the eaves, fascias, gutters and window frames are usually what fails first, so we focus preparation there: scraping back, treating and priming bare timber, and replacing any rotten sections rather than filling over them.`
    },
    {
      question: `Can you paint acreage and rural-residential properties around Somerville?`,
      answer: `Yes. Somerville sits on the edge of the Peninsula's rural-residential belt, and we regularly work on larger acreage properties, sheds and outbuildings as well as standard suburban homes. These properties often need more extensive exterior work and different access planning, and we scope that into the quote rather than treating them the same as a standard block.`
    },
    {
      question: `Do you paint the newer estate homes in Somerville?`,
      answer: `Yes. Somerville has had significant new estate development in recent years, and rendered and brick veneer homes on these estates need coatings matched to the substrate — flexible systems for render, standard exterior acrylics for brick and timber. We also handle interior painting on newly completed builds.`
    },
    {
      question: `Do you offer free quotes in Somerville?`,
      answer: `Yes. We service the southern Mornington Peninsula corridor and provide free, no-obligation written quotes across Somerville with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Somerville Painters | Family Homes | Jetblack Painting"
      description="House painters in Somerville — brick veneer family homes, acreage properties and newer estate builds. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hastings", link: "/painter-hastings" },
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Frankston South", link: "/painter-frankston-south" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" }
      ]}
      localExpertise={`Jetblack Painting services Somerville as part of our southern Mornington Peninsula coverage. Somerville sits on the corridor between Frankston and the Peninsula proper, and has grown substantially with new housing estates while retaining pockets of older township homes and larger rural-residential blocks on its outskirts. That mix — brick veneer family homes, newer rendered estate builds, and acreage properties — means we bring different preparation and coating approaches to different parts of the same suburb, rather than one standard system for everything.`}
      propertyTypes={`Somerville's brick veneer family homes, newer rendered estate builds, older township housing, and larger acreage and rural-residential properties on the suburb's outskirts.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Somerville`,
          body: [
            `Somerville is a fast-growing suburb on the southern Mornington Peninsula corridor, with new housing estates sitting alongside older township streets and a belt of larger rural-residential properties on the fringes. Jetblack Painting provides premium interior and exterior painting across all of it — brick veneer family homes, rendered estate builds and larger acreage properties — with a clear written quote and thorough preparation on every job.`,
            `Whether it's a full exterior repaint on an established Somerville home, an interior refresh on a newly completed estate build, or exterior work across a larger rural-residential property, we deliver durable coatings and a clean, respectful site from start to finish. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Brick Veneer, Estate Builds and Acreage Painting in Somerville`,
          body: [
            `On a typical Somerville brick veneer home, the paintwork that fails first is almost always the eaves, fascias, gutters and window frames — the surfaces taking the most sun and rain. We scrape these back to a sound edge, treat and prime bare timber with a penetrating primer, and replace any rotten sections rather than filling over them, then finish with exterior systems built for Melbourne's heat, UV and winter damp.`,
            `Newer rendered homes on Somerville's estates need flexible coatings that move with the substrate instead of cracking at the joints, while the acreage and rural-residential properties on the suburb's outskirts often mean more exterior area, sheds and outbuildings, and different access requirements — all of which we scope into the quote up front rather than adding as surprises later.`,
          ],
        },
      ]}
    />
  );
}
