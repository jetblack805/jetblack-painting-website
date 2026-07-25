import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KingstonPainters() {
  const suburb = "Kingston";
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
    "description": `Jetblack Painting provides professional painting services across the City of Kingston. Specializing in coastal and residential repaints for homes across Mordialloc, Mentone, Cheltenham, Moorabbin, Parkdale and beyond.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Which suburbs across Kingston do you cover?`,
      answer: `We cover the full City of Kingston — Mordialloc (our home suburb), Mentone, Cheltenham, Moorabbin, Parkdale, Highett, Aspendale, Chelsea, Edithvale, Bonbeach, Carrum, Clarinda and Heatherton. Based in Mordialloc, we're in this area every day and can quote and start work quickly across the whole council.`
    },
    {
      question: `Do you understand the coastal conditions in Kingston's bayside suburbs?`,
      answer: `Yes — we're based in Mordialloc and work along the Kingston coastline constantly. Salt air, UV and moisture from Port Phillip Bay are factors we deal with on every job along this stretch. We use thorough salt washing, flexible primers and premium exterior acrylic systems rated for coastal exposure, and back every exterior job with a 5-year written guarantee. Proper preparation is the difference between a coastal paint job that lasts 3 years and one that lasts 10.`
    },
    {
      question: `Do you offer free quotes across the Kingston area?`,
      answer: `Yes. We provide free, no-obligation written quotes across all Kingston suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Kingston Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Kingston — coastal cottages along the foreshore suburbs and coating selection. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Chelsea", link: "/painter-chelsea" }
      ]}
      localExpertise={`Jetblack Painting is based in Mordialloc — right at the heart of the City of Kingston. We work across the whole council area every day: coastal suburbs like Mentone, Parkdale, Chelsea and Aspendale where salt air is a real factor in exterior coating choices; and inland suburbs like Cheltenham, Moorabbin, Clarinda and Heatherton where established brick homes make up the core of the housing stock. This is genuinely our home territory.`}
      propertyTypes={`Kingston's housing spans weatherboard beach houses and coastal cottages along the foreshore suburbs, established brick homes across the inland suburbs, and modern townhouse developments throughout — each needing a tailored approach to preparation and coating selection.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `Local House Painters Across the City of Kingston`,
          body: [
            `The City of Kingston covers a broad stretch of Melbourne's south-east and Bayside coast — including Mordialloc, Mentone, Cheltenham, Moorabbin, Parkdale, Highett and the southern coastal suburbs down to Chelsea and Carrum. Based in Mordialloc, Jetblack Painting is a truly local painter for the whole area — not a franchise dispatching from across town, but a team that works this territory every day.`,
            `Every Kingston project comes with a clear written quote and thorough preparation from a reliable local team. From coastal exteriors to interior refreshes, commercial repaints and cabinetry, we deliver sharp lines, durable coatings and a clean, professional result close to home.`,
          ],
        },
        {
          heading: `Coastal and Suburban Painting Across Kingston`,
          body: [
            `Kingston's Bayside pockets face salt air and strong UV, so coastal homes need proper salt washing, flexible primers and premium weather-resistant topcoats to keep their finish protected and lasting. Along the foreshore from Mentone to Carrum, we see what poorly prepared paint does to coastal homes — and we know exactly how to prevent it.`,
            `Further inland, Kingston's established brick family homes in Cheltenham, Moorabbin, Clarinda and Heatherton benefit from careful render and timber preparation and durable exterior coatings suited to Melbourne's variable climate. Whatever the suburb, the approach is the same: proper preparation, premium product and a finish built to last.`,
          ],
        },
      ]}
    />
  );
}
