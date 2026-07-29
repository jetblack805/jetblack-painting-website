import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ClydePainters() {
  const suburb = "Clyde";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Clyde. Specialists in handover-stage painting and repaints on brand-new estate homes in one of Melbourne's fastest-growing suburbs.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint brand-new homes in Clyde?`,
      answer: `Yes — Clyde is one of the fastest-growing suburbs in Melbourne's south-east, and most of our work here is on brand-new estate homes, either at handover stage or shortly after. New-build interiors usually need a proper two-coat system over the builder's flat white, particularly in high-traffic areas and wet zones, and we scope that clearly upfront rather than assuming the builder's finish is a final coat.`
    },
    {
      question: `Can you match render and Colorbond trims on new Clyde estate homes?`,
      answer: `Yes. Clyde's newer estates use a consistent palette of render finishes and Colorbond-matched trims across facades, fences and garage doors, and we colour-match repaints and touch-ups to the original specification so extensions, fence replacements or repainted trims blend in rather than standing out.`
    },
    {
      question: `Do you work around new estate access and building stage requirements?`,
      answer: `Yes. Homes on newer Clyde estates often still have active construction nearby, estate access rules, or staged handover conditions, and we plan around all of that — confirming site access, protecting new driveways and landscaping, and coordinating timing so painting doesn't clash with other trades still finishing nearby builds.`
    },
    {
      question: `Do you offer free quotes in Clyde?`,
      answer: `Yes. We service Clyde as part of our City of Casey coverage and provide free, no-obligation written quotes with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Clyde Painters | New Estate Homes | Jetblack Painting"
      description="House painters in Clyde — handover-stage and repaint work on new estate homes in one of Melbourne's fastest-growing suburbs. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Clyde North", link: "/painter-clyde-north" },
        { name: "Cranbourne", link: "/painter-cranbourne" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Narre Warren", link: "/painter-narre-warren" },
        { name: "Hampton Park", link: "/painter-hampton-park" }
      ]}
      localExpertise={`Jetblack Painting services Clyde as part of our City of Casey coverage. Clyde is one of the fastest-growing suburbs anywhere in Melbourne, with large new estates delivering thousands of new homes each year alongside a small pocket of older rural-residential properties. That growth means most of our work here is new-build focused — handover-stage interior painting, touch-ups and defect work shortly after settlement, and early repaints as builder-grade finishes reach the end of their life — and we scope each job around where the home sits in that lifecycle.`}
      propertyTypes={`Clyde's brand-new estate homes at handover and early-ownership stage, rendered facades with Colorbond-matched trims, and a smaller number of older rural-residential properties on the suburb's fringes.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Clyde`,
          body: [
            `Clyde is at the centre of Melbourne's south-east growth corridor, with new housing estates being built and handed over at a pace few other suburbs match. Jetblack Painting provides premium interior and exterior painting across Clyde, from handover-stage touch-ups on newly settled homes to full repaints as the suburb's earliest estate homes reach their first repaint cycle.`,
            `Every Clyde project starts with a clear written quote and preparation matched to the property's age and condition. Whether it's a two-coat upgrade over a builder's flat white finish, defect touch-ups picked up during a pre-settlement inspection, or an exterior repaint on an established home, we deliver a durable finish and a clean, respectful site. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `New-Build and Estate Painting in Clyde`,
          body: [
            `Builder-grade paint on a new home is usually a single coat, flat white finish designed to look presentable at handover rather than perform long-term — it marks, scuffs and shows roller lines quickly, especially in hallways, kitchens and bathrooms. We recommend a proper two-coat upgrade in high-traffic areas and wet zones early on, before daily wear makes the job bigger than it needs to be.`,
            `On the exterior, Clyde's newer estates use a consistent palette of rendered walls and Colorbond-matched fascias, gutters and garage doors, and we colour-match any repainted trims, fence replacements or extensions to the original specification. We also work around estate access conditions and nearby construction, protecting new driveways and landscaping and timing work so it doesn't clash with other trades still finishing neighbouring builds.`,
          ],
        },
      ]}
    />
  );
}
