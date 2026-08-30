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
      answer: `As a guide, a full interior repaint of a 3-bedroom Melbourne home typically runs $5,000 to $12,000, and an exterior repaint $4,000 to $8,000 for a single-storey home or $8,000 to $15,000 for a double-storey. These are indicative ranges — every job is priced after a site visit, because condition, access and scope move the number more than floor area does. We provide free written quotes with no obligation — call 0432 077 782 or email jimmy@jetblackpainting.com.`
    },
    {
      question: `Do you paint weatherboard homes in Cheltenham?`,
      answer: `Yes — weatherboard is one of the most common property types in Cheltenham and we specialise in it. Proper weatherboard painting requires careful filling and sanding of all cracks, spot priming any bare timber, and applying a flexible exterior topcoat. We use Dulux and Taubmans premium exterior systems rated for Melbourne's coastal climate.`
    },
    {
      question: `Are you locally based near Cheltenham?`,
      answer: `Yes. Jetblack Painting is based in Mordialloc, just a few minutes from Cheltenham. Owner Jimmy Demirci visits every job personally — to scope the work, check in during the project and sign off on the final finish. You won't be dealing with a call centre or an unknown subcontractor.`
    },
    {
      question: `Can you paint the exterior timber and leave the brickwork alone?`,
      answer: `Yes, and on a lot of ${suburb} brick veneer homes that is exactly the right scope. The brick does not need coating; the fascia, barge boards, eaves and window frames are what weather. Quoting the timber on its own is usually the difference between a job that is worth doing now and one that gets put off another year.`
    },
    {
      question: `How soon does a newly built ${suburb} townhouse need repainting?`,
      answer: `It depends on the coating the builder used and how hard the place is lived in, not on a fixed number of years. Builder-grade paint is applied thin and specified on price, so the first signs are usually scuffing and patchy sheen in hallways and stairwells rather than anything failing outright. We are happy to look and tell you honestly if it can wait.`
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
        {
          heading: `Post-War Brick Veneer: Where ${suburb} Homes Actually Fail`,
          body: [
            `Most of ${suburb}'s established housing is brick veneer put up between the 1950s and the 1970s. The brickwork itself asks for nothing. What fails is the timber around it — fascia, barge boards, window frames and the eaves lining — because that timber carries the weather while the brick simply stands there. That is where an exterior quote here should concentrate its hours, and it is the part a cheap quote quietly leaves out.`,
            `On homes of that age the eaves are often sheet lining rather than solid timber, and on anything built before the late 1980s that sheet may be fibre cement containing asbestos. We do not sand it and we do not pressure-blast it. It gets washed by hand and coated, and where the age of the sheeting is unclear we recommend having it tested before anyone brings an abrasive near it. That costs a little time and removes a risk not worth taking.`,
          ],
        },
        {
          heading: `Newer Townhouses and the First Repaint`,
          body: [
            `Alongside the original housing, ${suburb} has absorbed a lot of townhouse and apartment infill, particularly around the station and the Southland end. These come out of the build carrying builder-grade paint — thin, applied quickly, specified on price rather than wear. It photographs well on handover day and starts showing scuffs, traffic marks and patchy sheen within a few years.`,
            `Repainting one is a different job to repainting a 1960s house. There are no decades of old coatings to cut back, so more of the budget goes into the coating itself instead of the preparation. What matters is sealing plasterboard properly where the original coats went on thin, and putting a genuinely washable finish through hallways and stairwells that take the traffic.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
