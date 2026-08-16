import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MorningtonPainters() {
  const suburb = "Mornington";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Mornington. Specialists in coastal and residential repaints for holiday homes, permanent residences and heritage properties along Mornington's Main Street corridor and foreshore.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Mornington?`,
      answer: `Mornington has a genuinely diverse housing mix — Edwardian and Victorian weatherboard homes near the Main Street heritage precinct, post-war brick veneer throughout the established residential areas, and a significant number of holiday homes and modern coastal builds closer to the foreshore and Mornington Beach. We handle all of these: period weatherboard repaints with correct primer and preparation, brick veneer exterior repaint, and contemporary interior refreshes. The preparation requirements vary significantly between property types, and we scope every job properly before quoting.`
    },
    {
      question: `Do you paint holiday homes and investment properties in Mornington?`,
      answer: `Yes — Mornington has a large stock of holiday homes and investment properties that need to be kept in good condition for rental and resale. We're experienced working around tenancy schedules and short letting gaps. Interior refreshes on holiday homes typically involve low-VOC paints and quick-dry products where turnaround time matters. For pre-sale repaints, we can prioritise high-impact areas — feature walls, entry, kitchen and bathroom — to maximise presentation value without a full repaint. Call Jimmy on 0432 077 782 to discuss your specific situation.`
    },
    {
      question: `Do you offer free quotes in Mornington?`,
      answer: `Yes. We provide free, no-obligation written quotes across Mornington and the surrounding Mornington Peninsula area, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Mornington Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Mornington — beach houses, weatherboard cottages and modern coastal homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hastings", link: "/painter-hastings" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" }
      ]}
      localExpertise={`Jetblack Painting services Mornington as part of our Mornington Peninsula coverage. Mornington is one of the Peninsula's main residential towns — a mix of heritage properties near the Main Street and Mornington Beach precinct, established brick veneer homes throughout the suburb, and a substantial stock of coastal holiday properties closer to the foreshore. We understand the specific challenges of painting in Mornington: salt air from Port Phillip Bay, the varied surface conditions across different property eras, and the practical realities of working on occupied holiday homes and investment properties.`}
      propertyTypes={`Mornington's housing ranges from Victorian and Edwardian weatherboard homes near the heritage Main Street precinct to post-war brick veneer throughout the residential areas, and modern coastal builds and holiday homes closer to Mornington Beach — each requiring a different preparation and coating approach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Mornington`,
          body: [
            `Mornington is one of the Mornington Peninsula's main residential towns, with a housing stock that spans Victorian and Edwardian period homes near the heritage Main Street precinct, solid brick veneer homes throughout the established residential areas, and a large number of coastal holiday properties and newer builds closer to Mornington Beach and the foreshore. Jetblack Painting provides premium interior and exterior painting across Mornington, with a team that understands the suburb's coastal conditions and property diversity.`,
            `Every Mornington project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint on a period weatherboard home, a fresh interior scheme for a holiday property, or a pre-sale repaint to maximise presentation, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Coastal and Period Home Painting in Mornington`,
          body: [
            `Mornington's proximity to Port Phillip Bay means foreshore and nearby properties are exposed to salt air that accelerates paint failure on surfaces that haven't been properly prepared. We counter this with thorough salt washing, flexible primers and premium salt-resistant topcoats — the same approach we use across the full Kingston and Bayside coastline through to Frankston and down the Peninsula.`,
            `Mornington's heritage weatherboard homes near the Main Street precinct need careful attention: correct stripping or preparation of old paint layers, filling and flexing cracks, and the right primer for the timber substrate before any topcoat. We include full preparation in every quote with no hidden extras, so the finish lasts and the period character of the property is preserved.`,
          ],
        },
      ]}
    />
  );
}
