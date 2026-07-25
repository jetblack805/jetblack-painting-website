import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function FrankstonPainters() {
  const suburb = "Frankston";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Frankston. Specialists in coastal and residential repaints for homes across Frankston, Frankston South and the northern Mornington Peninsula gateway.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Frankston?`,
      answer: `Frankston has a wide and varied housing mix — from older brick veneer and weatherboard homes in the central and northern areas to more contemporary builds in Frankston South and along the waterfront. We handle the full range: brick veneer exterior repaints, weatherboard restoration, rendered homes, and interior refreshes. Preparation requirements vary a lot by age and surface condition, and we scope each job properly before we quote.`
    },
    {
      question: `Do you paint coastal homes in Frankston near Port Phillip Bay?`,
      answer: `Yes. Frankston's foreshore and waterfront streets are exposed to salt air from Port Phillip Bay, which breaks down paint film faster than inland suburbs. We use thorough pressure washing to remove salt deposits before any coating, premium flexible primers, and salt-resistant topcoats from Dulux and Taubmans rated for coastal conditions. Every exterior job in Frankston is backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in Frankston?`,
      answer: `Yes. We provide free, no-obligation written quotes across Frankston, Frankston South and the surrounding Mornington Peninsula area, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Frankston Painters | Waterfront Painting | Jetblack Painting"
      description="Waterfront and coastal house painters in Frankston — weatherboard homes in the established central. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Berwick", link: "/painter-berwick" },
        { name: "Dandenong", link: "/painter-dandenong" }
      ]}
      localExpertise={`Jetblack Painting services Frankston as part of our Mornington Peninsula coverage. Frankston is the gateway suburb to the Peninsula — a mix of established residential areas, coastal foreshore homes near Port Phillip Bay, and newer developments in Frankston South. We understand the coastal conditions that affect paintwork in the bayside streets and the varied surface types across the suburb's housing stock.`}
      propertyTypes={`Frankston's housing spans older brick veneer and weatherboard homes in the established central and northern areas, rendered and contemporary builds in Frankston South, and foreshore properties near the beach — each requiring a tailored preparation and coating approach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Frankston`,
          body: [
            `Frankston is the main hub at the gateway to the Mornington Peninsula, with a diverse housing stock that ranges from older weatherboard and brick veneer homes to modern builds in Frankston South and waterfront properties along the foreshore. Jetblack Painting provides premium interior and exterior painting across Frankston, with a team that knows the suburb's coastal conditions and property types.`,
            `Every Frankston project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint on an established brick home or a fresh interior scheme in a contemporary build, we deliver sharp lines, durable coatings and a clean result.`,
          ],
        },
        {
          heading: `Coastal and Residential Painting in Frankston`,
          body: [
            `Homes near the Frankston foreshore and the beach are exposed to salt air from Port Phillip Bay, which accelerates paint failure on any surface that hasn't been properly prepared. We counter this with thorough salt washing, flexible primers and premium salt-resistant topcoats — the same approach we use along the full Kingston and Bayside coastline.`,
            `Frankston's established brick veneer homes need careful surface preparation — cleaning, filling cracks, priming bare render — before any topcoat goes on. We include full preparation in every quote with no hidden extras, so the finish lasts as long as it should.`,
          ],
        },
      ]}
    />
  );
}
