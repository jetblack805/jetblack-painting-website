import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighPainters() {
  const suburb = "Bentleigh";
  const faqs = [
    {
      question: `Do you paint Bentleigh's interwar homes and Californian bungalows?`,
      answer: `Yes. Bentleigh has a large concentration of interwar and Californian bungalow homes, and we're experienced with their rendered façades, feature brickwork and timber detailing. We use proper crack filling, bare timber priming and period-sympathetic colours to keep these classic homes looking their best for years.`
    },
    {
      question: `How long does a house repaint take in ${suburb}?`,
      answer: `Most ${suburb} homes are completed within 5 to 10 working days depending on size and the amount of preparation required. We provide a detailed timeline with every quote so you know exactly what to expect before work begins.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Absolutely. We provide free, no-obligation written quotes across ${suburb} and Bentleigh East, with the full scope and preparation included up front so there are no surprises. Call Jimmy on 0432 077 782 to arrange a visit.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bentleigh Painters | Bungalow & Family Home Specialists | Jetblack Painting"
      description={`Trusted house painters in ${suburb}. Specialists in interwar bungalows, family homes and unit repaints across Bentleigh and Bentleigh East. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "McKinnon", link: "/painter-mckinnon" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
      ]}
      localExpertise={`Based locally in nearby Mordialloc, Jetblack Painting has been painting ${suburb} homes for years. We know the mix of interwar bungalows, post-war brick homes, modern townhouses and unit developments that make up ${suburb}'s residential stock, and we tailor our preparation and finish to suit each property type.`}
      propertyTypes={`${suburb}'s interwar Californian bungalows, post-war brick homes, modern townhouses and unit blocks across Bentleigh and Bentleigh East.`}
      localContent={[
        {
          heading: `House Painters Serving Bentleigh and Bentleigh East`,
          body: [
            `Bentleigh is a popular family suburb in the City of Glen Eira, known for its solid stock of interwar and Californian bungalow homes, the busy Centre Road shopping strip and quiet, tree-lined residential streets. Jetblack Painting provides premium interior and exterior painting across Bentleigh and Bentleigh East, with preparation and coatings tailored to each home's era and materials — not a one-size-fits-all approach.`,
            `Every ${suburb} project starts with a detailed written quote and thorough preparation carried out by a reliable, tidy local team. Whether it's a full exterior repaint to lift your home's street appeal, a fresh interior colour scheme before a sale, or cabinetry and trims, we deliver sharp lines, durable coatings and a clean result that respects your property and your time.`,
          ],
        },
        {
          heading: `Bungalow Specialists and Family Home Repaints in ${suburb}`,
          body: [
            `Bentleigh's interwar homes and Californian bungalows have distinctive rendered surfaces, feature brickwork and timber detailing that need the right preparation to last. Cracks in render need proper filling and priming, bare timber needs sealed before topcoating, and colour choices for period homes benefit from experience. We handle all of this as standard — not as an extra.`,
            `For ${suburb}'s modern townhouses and unit developments, we deliver smooth contemporary finishes using premium Dulux and Taubmans systems suited to Melbourne's variable climate. Body corporate and strata repaints are also something we handle regularly — scoped clearly, carried out efficiently, and finished to a standard that holds up season after season.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
