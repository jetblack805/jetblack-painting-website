import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ToorakPainters() {
  const suburb = "Toorak";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Luxury House Painting Services in ${suburb}`,
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
    "description": `Jetblack Painting provides high-end interior and exterior painting for Toorak's prestigious mansions and modern luxury residences.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}`
    }
  };

  const faqs = [
    {
      question: `What experience do you have with Toorak's luxury mansions?`,
      answer: `We have extensive experience working on some of Toorak's most prestigious properties. Our team specializes in high-end finishes, including ornate ceiling restoration, fine timber work, and premium 2-pack finishes that meet the exacting standards of Toorak homeowners.`
    },
    {
      question: `Do you offer colour consulting for high-end Toorak homes?`,
      answer: `Yes, we provide professional colour consultation services tailored to Toorak's unique architectural styles. Whether you're looking for a classic heritage palette for a Victorian mansion or a sophisticated modern scheme for a contemporary residence, we help you choose the perfect finish.`
    },
    {
      question: "How do you ensure minimal disruption during a large painting project in Toorak?",
      answer: "We understand the importance of privacy and cleanliness. Our team follows a strict protocol for site management, using high-quality drop sheets, dust extraction systems, and organized workflows to ensure your Toorak home remains clean and functional throughout the project."
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Toorak Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Toorak — grand Victorian mansions and period homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise={`We understand ${suburb}'s prestigious properties, from grand Victorian mansions to architecturally-designed modern homes. Our team has extensive experience with high-end finishes, heritage colour schemes, and the premium materials that ${suburb} homeowners expect.`}
      propertyTypes={`${suburb}'s grand Victorian mansions, period homes, and architecturally-designed luxury residences require a superior level of craftsmanship.`}
      localContent={[
        {
          heading: "Luxury House Painters for Toorak's Finest Homes",
          body: [
            "Toorak is Melbourne's most prestigious address, and its homes demand a standard of finish to match. From the grand Italianate and Victorian mansions along St Georges Road to the architect-designed contemporary residences tucked behind the hedges of Grange Road and Lansell Road, Jetblack Painting delivers the meticulous, high-end workmanship that Toorak homeowners expect. Every project is treated as a showcase — because in Toorak, it is.",
            "We work discreetly and to exacting standards, whether that's a full repaint of a heritage estate, refined trim and joinery work, ornate ceiling and cornice restoration, or a flawless 2-pack finish on kitchen cabinetry and built-in furniture. Our quotes are detailed and transparent, and our team respects the privacy, security and cleanliness that high-value properties require.",
          ],
        },
        {
          heading: "Heritage Expertise and Premium Finishes in Toorak",
          body: [
            "Many Toorak homes sit within heritage overlays, where colour schemes and preparation methods matter. We're experienced with period-correct palettes for Victorian and Edwardian façades, careful lead-paint-safe preparation on older homes, and the fine timber restoration that grand Toorak properties often need. The goal is a finish that honours the architecture rather than fighting it.",
            "For contemporary Toorak residences, we deliver the crisp, seamless modern finishes — deep matte walls, high-durability enamels and specialist coatings — that designer homes are built around. Whichever era your home belongs to, we use only premium materials and proven systems so the result looks immaculate and holds up for years.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
