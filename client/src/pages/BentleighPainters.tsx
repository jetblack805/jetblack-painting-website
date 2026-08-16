import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighPainters() {
  const suburb = "Bentleigh";
  const faqs = [
    {
      question: `Do you paint ${suburb} interwar bungalows and post-war brick homes?`,
      answer: `Yes — that mix is most of ${suburb}. Interwar bungalows bring detailed timber fascias, bracketed eaves and porch beams that are hand-cut rather than rolled, while post-war brick is more straightforward render and masonry prep. The two are quoted differently because the labour is genuinely different.`
    },
    {
      question: `Do you work with owners corporations on ${suburb} unit blocks?`,
      answer: `Yes. ${suburb} has a lot of unit and townhouse developments, and we provide the written scope, itemised pricing and insurance certificates a committee needs before approving works. Common areas, stairwells, entries and facades can be staged so residents keep access throughout.`
    },
    {
      question: `Is lead paint a concern on older ${suburb} homes?`,
      answer: `It can be. Anything built before 1970 may carry lead-based paint under later coats, so we do not dry-sand or power-sand original timberwork of that age. Preparation uses low-dust methods, and where the age is uncertain we recommend testing before sanding begins.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We are based nearby in Mordialloc and provide free written quotes across ${suburb}, itemising the preparation each surface needs. Call Jimmy on 0432 077 782.`
    }
  ];


  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Bentleigh Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Bentleigh — interwar Californian bungalows and post-war brick homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh East", link: "/painter-bentleigh-east" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Highett", link: "/painter-highett" },
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
