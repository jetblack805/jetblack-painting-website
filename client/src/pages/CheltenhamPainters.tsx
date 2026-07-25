import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CheltenhamPainters() {
  const suburb = "Cheltenham";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Trusted local painters for Bayside homes with a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-cheltenham/`
    }
  };

  const faqs = [
    {
      question: `How much does house painting cost in Cheltenham?`,
      answer: `Most Cheltenham homes cost between $3,500 and $8,500 for a full interior repaint and $4,000 to $12,000 for a full exterior, depending on size, condition and number of storeys. We provide free written quotes with no obligation — call 0432 077 782 or email jimmy@jetblackpainting.com.`
    },
    {
      question: `Do you paint weatherboard homes in Cheltenham?`,
      answer: `Yes — weatherboard is one of the most common property types in Cheltenham and we specialise in it. Proper weatherboard painting requires careful filling and sanding of all cracks, spot priming any bare timber, and applying a flexible exterior topcoat. We use Dulux and Taubmans premium exterior systems rated for Melbourne's coastal climate.`
    },
    {
      question: `Are you locally based near Cheltenham?`,
      answer: `Yes. Jetblack Painting is based in Mordialloc, just a few minutes from Cheltenham. Owner Jimmy Demirci visits every job personally — to scope the work, check in during the project and sign off on the final finish. You won't be dealing with a call centre or an unknown subcontractor.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Cheltenham Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Cheltenham — weatherboard cottages near the foreshore and newer townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Bayside", link: "/painter-bayside" },
      ]}
      localExpertise={`Cheltenham sits in the heart of Bayside, bordered by Mentone, Moorabbin and Highett. As painters based just down the road in Mordialloc, we work across Cheltenham regularly — from the family homes around Central Road and Weatherall Road to the period properties near the Cheltenham station precinct. We understand the local building stock and know exactly what surface preparation Cheltenham's mix of brick veneer, weatherboard and rendered homes needs.`}
      propertyTypes={`Cheltenham has a strong mix of 1950s–1970s brick veneer homes, weatherboard cottages near the foreshore, and newer townhouses and units. We tailor our painting systems to each: flexible membrane coatings for rendered surfaces, premium timber systems for weatherboard, and low-VOC interior finishes for newly renovated spaces.`}
      localContent={[
        {
          heading: "Local Painters in Cheltenham — Based in Mordialloc",
          body: [
            "Jetblack Painting is a Mordialloc-based painting company, which means Cheltenham is practically on our doorstep. When you book a quote, owner Jimmy Demirci visits the site himself to assess the work, recommend the right paint system and give you a detailed written quote. There's no guesswork and no surprise costs.",
            "We've painted dozens of homes across Cheltenham and the surrounding Bayside area since 2011. Whether it's a full interior repaint before selling, a fresh exterior coat to protect against Melbourne's winters, or a detailed heritage restoration on a period home, we bring the same level of care and precision to every project.",
          ],
        },
        {
          heading: "Interior & Exterior Painting Built to Last in Cheltenham",
          body: [
            "Surface preparation is the most important part of any paint job — and the part most painters rush. We never do. Every Cheltenham project starts with thorough preparation: washing surfaces, filling cracks, sanding rough areas, priming bare spots, and caulking gaps before a single drop of topcoat goes on. That prep work is what makes our finishes last.",
            "We use only premium Dulux and Taubmans paints — no budget alternatives. Combined with our 5-year written workmanship guarantee and $10M public liability insurance, you can be confident the job will be done right. Call 0432 077 782 for a free written quote.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
