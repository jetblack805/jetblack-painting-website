import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ChadsonePainters() {
  const suburb = "Chadstone";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `House Painting Services in ${suburb}`,
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
    "areaServed": { "@type": "City", "name": suburb },
    "description": `Jetblack Painting provides premium interior and exterior painting for Chadstone homes — from established brick residences to modern townhouses and renovations in Melbourne's Monash council area.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-chadstone/`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Chadstone?`,
      answer: `Chadstone has a solid mix of post-war brick homes, 1960s–1980s residences and an increasing number of townhouse and medium-density developments. We work across all these property types — from older brick homes needing careful exterior assessment to newer rendered townhouses requiring the right primer for long-term adhesion. Every property is inspected before we quote so the preparation and product specification is matched to the actual substrates.`
    },
    {
      question: `Do you do interior painting in Chadstone?`,
      answer: `Yes. Interior painting is a core part of our work. In Chadstone we regularly complete full interior repaints, single-room refreshes, kitchen and bathroom feature walls, and joinery refinishing. We use premium low-VOC Dulux and Taubmans products in the correct sheen levels for each room and surface, schedule around the household, and leave the property clean on completion. Call 0432 077 782 or use the quote form to arrange a free inspection.`
    },
    {
      question: `How long does an exterior repaint take in Chadstone?`,
      answer: `A typical exterior repaint on a single-storey brick home in Chadstone takes 3–5 days for the painting phase, with additional time if significant surface preparation or crack repair is needed. Two-storey homes take longer, and larger or more complex properties more still. We'll provide an estimated timeline in your written quote after the on-site inspection — we don't give timelines without seeing the property first.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Chadstone Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Premium interior and exterior painting for Chadstone's brick homes, townhouses and renovations. Fully licensed, 5-year guarantee, free written quotes.`}
      neighbouringSuburbs={[
        { name: "Oakleigh", link: "/painter-oakleigh" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`Chadstone sits in Melbourne's Monash council area, best known for Chadstone Shopping Centre, and surrounded by well-established residential suburbs. The housing stock ranges from post-war brick originals to newer townhouse developments on subdivided lots. We service Chadstone as part of our regular coverage across the Monash and Glen Eira council areas, alongside Oakleigh, Murrumbeena and the surrounding suburbs.`}
      propertyTypes={`Chadstone's residential stock spans post-war brick homes, 1960s–1980s residences and modern townhouse infill — all benefiting from proper surface assessment and quality coatings applied over correct preparation.`}
      localContent={[
        {
          heading: "Painters in Chadstone for Homes and Townhouses",
          body: [
            "Chadstone is a well-connected suburb with a residential character shaped by decades of solid brick construction, now seeing increasing infill townhouse activity. The older brick homes make up the core of the suburb's housing stock and they're solid properties that reward proper maintenance — including paint systems applied over correct preparation rather than painted straight over failing existing coatings.",
            "Jetblack Painting works in Chadstone and the surrounding Monash council suburbs. We inspect every property before quoting, specify the correct preparation and product system for the substrates present, and back every job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to arrange a free on-site inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Chadstone Homes",
          body: [
            "Interior painting in Chadstone covers all residential surface types — plaster and gyprock ceilings and walls, timber joinery, doors, built-ins and trims. We use premium Dulux and Taubmans products in the correct finish levels for each application, work efficiently to minimise household disruption, and clean up thoroughly on completion.",
            "Exterior repaints in Chadstone start with a proper surface inspection and assessment. We wash, patch, prime correctly and apply a premium exterior acrylic topcoat rated for Melbourne conditions. Every exterior job is backed by a 5-year written guarantee and covered by $10M public liability insurance.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
