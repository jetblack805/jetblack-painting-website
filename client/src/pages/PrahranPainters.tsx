import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function PrahranPainters() {
  const suburb = "Prahran";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Prahran and Windsor. Specialists in Victorian terrace, Art Deco apartment and period home repaints for owner-occupiers, landlords and pre-sale projects in inner south Melbourne.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Prahran and Windsor?`,
      answer: `Prahran and Windsor have a very mixed housing stock — Victorian and Edwardian terraces and cottages, particularly in the streets off Chapel Street and Commercial Road, Art Deco apartment blocks and flats from the 1930s and 1940s, and modern apartments and townhouses throughout. We handle all of these: period terrace exterior repaints with correct masonry and render preparation, interior refreshes on Victorian rooms with high ceilings and ornate cornicing, and apartment interiors where low-VOC products and minimal disruption matter. Each property type has different preparation requirements, and we scope every job properly before quoting.`
    },
    {
      question: `Do you paint investment properties and rental homes in Prahran?`,
      answer: `Yes. Prahran and Windsor have a high proportion of rental properties and investment stock, and landlords regularly need painting done between tenancies or before lease renewals. We're experienced working to tenancy timelines — quick turnarounds on interior refreshes, selecting durable washable products suited to rental wear, and coordinating access efficiently. We also work on pre-sale repaints for investors preparing properties for market. Call Jimmy on 0432 077 782 to discuss your specific situation and timeline.`
    },
    {
      question: `Do you offer free quotes in Prahran and Windsor?`,
      answer: `Yes. We provide free, no-obligation written quotes across Prahran, Windsor and the surrounding inner-south suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Prahran Painters | Victorian Terrace & Period Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb} and Windsor. Interior and exterior painting for Victorian terraces, Art Deco apartments and period homes across Prahran. Free quotes.`}
      neighbouringSuburbs={[
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Armadale", link: "/painter-armadale" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Elsternwick", link: "/painter-elsternwick" },
        { name: "Caulfield", link: "/painter-caulfield" }
      ]}
      localExpertise={`Jetblack Painting services Prahran and Windsor as part of our inner-south coverage. Prahran is one of Melbourne's most densely housed inner suburbs — a mix of Victorian and Edwardian terraces, Art Deco apartment blocks and modern infill development, with a large proportion of investment and rental properties alongside long-term owner-occupiers. The suburb shares similar housing conditions and painting requirements to South Yarra, Armadale and Elsternwick, where we do a significant volume of our work.`}
      propertyTypes={`Prahran and Windsor's housing spans Victorian terraces and Edwardian cottages in the streets off Chapel Street, Art Deco flats and apartment blocks from the 1930s–1940s, and modern townhouses and apartments throughout — each requiring different surface preparation and paint selection.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Prahran and Windsor`,
          body: [
            `Prahran and Windsor are densely housed inner suburbs with a diverse mix of Victorian terraces, Art Deco apartment blocks and modern builds, spread across the streets between Chapel Street, High Street and Commercial Road. Jetblack Painting provides premium interior and exterior painting across Prahran and Windsor, with a team experienced in the specific requirements of terrace painting, period apartment interiors and the practical realities of working in high-density inner-city streets.`,
            `Every Prahran project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's an exterior repaint on a Victorian terrace row, an interior refresh in a high-ceiling Edwardian cottage, or a landlord repaint between tenancies in an Art Deco flat, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Terrace, Apartment and Period Home Painting in Prahran`,
          body: [
            `Victorian terraces in Prahran typically have rendered brick exteriors that need thorough preparation — washing, crack filling and flexible primer — before any topcoat goes on. The ironwork detailing on many terrace facades needs careful masking and correct metal primer to hold up long-term. Interior spaces with high ceilings, original cornices and decorative plasterwork need careful cut-in work to maintain the period character.`,
            `Art Deco apartment blocks and flats in Prahran often need interior refreshes between tenancies. We select durable, washable low-sheen products suited to rental conditions, work efficiently to minimise vacancy time, and leave a clean result that holds up to regular cleaning and tenant use. For pre-sale work, we can advise on neutral colour palettes that present well at inspection.`,
          ],
        },
      ]}
    />
  );
}
