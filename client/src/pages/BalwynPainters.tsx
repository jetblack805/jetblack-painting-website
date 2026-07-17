import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BalwynPainters() {
  const suburb = "Balwyn";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Balwyn and Balwyn North. Specialists in interwar, post-war and prestige home repaints for owner-occupiers across Balwyn's leafy Boroondara streets.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Balwyn and Balwyn North?`,
      answer: `Balwyn and Balwyn North have a housing stock dominated by interwar and post-war owner-occupied homes — California bungalows and Edwardian-era houses in Balwyn proper, and larger post-war brick and rendered homes on generous blocks throughout Balwyn North. Both areas also have a growing number of contemporary architect-designed builds replacing older homes. We handle the full range: period bungalow exterior repaints with correct timber and render preparation, large post-war brick homes requiring thorough high-pressure washing and quality topcoats, and interior refreshes on modern builds. Each surface type has different preparation requirements and we scope every job properly before quoting.`
    },
    {
      question: `Do you paint large homes on generous blocks in Balwyn North?`,
      answer: `Yes — large post-war and prestige homes on bigger blocks are a core part of what we do in Balwyn North and across the wider Boroondara corridor. Larger homes have more exterior surface area, more complexity around rooflines and eaves, and often rendered or face-brick facades that need specific preparation. We have the team and equipment to handle full exterior repaints on large properties efficiently without shortcuts on preparation or product quality. Every Balwyn North job is backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in Balwyn and Balwyn North?`,
      answer: `Yes. We provide free, no-obligation written quotes across Balwyn, Balwyn North and the surrounding inner-east suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Balwyn Painters | Period & Prestige Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb} and Balwyn North. Interior and exterior painting for interwar, post-war and prestige homes across Balwyn's leafy Boroondara streets. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Doncaster", link: "/painter-doncaster" },
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Templestowe", link: "/painter-templestowe" }
      ]}
      localExpertise={`Jetblack Painting services Balwyn and Balwyn North as part of our inner-east Boroondara coverage. Balwyn sits between Camberwell and Kew — two suburbs where we do a large proportion of our period home repaint work — and shares the same mix of interwar character homes and substantial owner-occupied post-war properties. Balwyn North in particular has some of the most generously-sized residential blocks in the inner east, with large post-war homes that present well when properly maintained and painted.`}
      propertyTypes={`Balwyn's housing spans interwar California bungalows and period homes in the established Balwyn streets, to larger post-war brick and rendered homes on generous blocks throughout Balwyn North, plus a growing number of contemporary architect-designed builds replacing older properties.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Balwyn and Balwyn North`,
          body: [
            `Balwyn and Balwyn North are established Boroondara suburbs with a housing stock that rewards proper maintenance. Balwyn proper has a strong presence of interwar California bungalows and period homes in its leafy residential streets, while Balwyn North is known for larger post-war homes on generous blocks — properties where a quality repaint makes a visible difference to the street appeal and long-term value. Jetblack Painting provides premium interior and exterior painting across both suburbs, with a team experienced in the specific demands of period and prestige home preparation and coating.`,
            `Every Balwyn project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint on a California bungalow, a large post-war home requiring scaffolding and premium topcoats, or a contemporary interior scheme for a newer build, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Period and Post-War Home Painting in Balwyn`,
          body: [
            `Interwar homes in Balwyn — California bungalows, Edwardian-influenced cottages — typically have timber weatherboards or rendered brick facades that need careful preparation before any new coating. We assess the condition of the existing paint system, identify any areas of moisture ingress or failing adhesion, and carry out full preparation: high-pressure washing, sanding, filling, and correct primer for the surface type. This is what makes the difference between a repaint that lasts 8–10 years and one that starts peeling within two.`,
            `Larger post-war homes in Balwyn North often have extensive exterior surface areas with brick, render or a combination of both, requiring thorough preparation and the right products for each substrate. We include full preparation in every quote with no hidden extras, so the scope and price you receive reflects the actual work involved.`,
          ],
        },
      ]}
    />
  );
}
