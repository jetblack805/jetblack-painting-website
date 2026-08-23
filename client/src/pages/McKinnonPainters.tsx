import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function McKinnonPainters() {
  const suburb = "McKinnon";
  const faqs = [
    {
      question: `Do you specialise in ${suburb}'s interwar and bungalow homes?`,
      answer: `Yes. ${suburb} is full of interwar homes and Californian bungalows, and we know them well. Render cracks filled, bare timber primed, colours chosen to suit the era. Preparation is the difference between a finish that lasts and one that peels in two years. We do not cut it short.`
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Yes. Houses here are sought after, and a sharp pre-sale repaint shows at auction. Neutral colours, tight execution, clean fascias, fresh interior. We can scope the work and finish it on a timeline that fits your campaign.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. Quotes are free, written, and carry no obligation, across ${suburb} and the wider Glen Eira area. The full scope and the preparation are set out up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    },
    {
      question: `Can you paint over brick that has already been painted?`,
      answer: `Yes, and it is one of the most common jobs we quote in ${suburb}. Plenty of the post-war brick veneer here was painted decades ago. The old coating is often chalky, patchy, or lifting in sheets where moisture has been trapped behind it. We wash the wall down, scrape and sand back anything unsound, spot-prime bare masonry with the right sealer, then recoat with a breathable masonry system. One thing worth knowing first: painting brick is a one-way decision. Once it is coated it needs recoating from then on, so it pays to do it properly the first time.`
    },
    {
      question: `Do you paint steel-framed windows on older ${suburb} homes?`,
      answer: `Yes. The interwar and early post-war homes here often still have their original steel window frames. They nearly always fail the same way: rust blooming at the corners and along the bottom rail, where water sits. Painting over it hides the problem for a season and no longer. We wire-brush and sand back to sound metal, treat the bare steel with a rust-inhibiting primer, then bring it up in enamel. That way the repair holds instead of bubbling through by the next winter.`
    },
    {
      question: `Do you take on shopfronts and commercial work around ${suburb} Road?`,
      answer: `We do. Alongside houses we paint shopfronts, offices, consulting rooms and the common property of the low-rise blocks around the ${suburb} Road strip and the station precinct. Commercial work is scheduled around your trading hours so the shop stays open, and it carries $10 million public liability cover. Call Jimmy on 0432 077 782 to talk through access and timing.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="McKinnon Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in McKinnon — Californian bungalows and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh East", link: "/painter-bentleigh-east" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise={`We know ${suburb}. Its interwar and Californian bungalow homes need care with render preparation, timber priming and colours that suit the era. The ${suburb} Secondary College zone keeps property values high and expectations higher. We work to both.`}
      propertyTypes={`Californian bungalows and interwar homes, renovated family houses, period brick properties and low-rise units across ${suburb} and the surrounding Glen Eira suburbs.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is one of Glen Eira's tightly held family pockets. Leafy streets, well-kept interwar and bungalow homes, and the ${suburb} Secondary College zone that keeps demand high. We paint inside and out across the suburb, with the preparation and finish these established homes deserve.`,
            `We are based nearby in Mordialloc, so quoting and scheduling here are easy. Every job comes with a written quote, thorough preparation, and a tidy crew. Full exterior repaint, interior colour change or kitchen cabinetry, the standard is the same.`,
          ],
        },
        {
          heading: `Period Home and Bungalow Painting in ${suburb}`,
          body: [
            `${suburb}'s interwar homes and Californian bungalows have rendered walls, decorative brickwork and original timber. All three reward proper preparation. We fill and seal cracks in the render. We prime bare timber. We pick colours that suit the era and the street. Skip that and the topcoat fails early. Do it properly and it lasts for years.`,
            `Updated and contemporary homes here get the same care with different materials. Smooth interiors and durable exteriors, using Dulux and Taubmans systems rated for Melbourne's conditions. Whatever the style, the preparation is what decides the result.`,
          ],
        },
        {
          heading: `Post-War Brick Veneer: What ${suburb} Actually Needs`,
          body: [
            `Not every house here is a bungalow. A large share of ${suburb} went up between the late 1940s and the 1960s, as the Frankston line suburbs filled in. Brick veneer needs a different approach. The brickwork itself is usually sound. What fails is everything attached to it. Timber eaves and fascia boards. The barge boards along the gable ends. The window and door joinery. Those surfaces take the weather, and on the north and west elevations they are usually two coats past due while the walls still look fine.`,
            `Where that brick has been painted at some point, the job changes again. Old masonry coatings go chalky and lose their grip. Roll a fresh topcoat straight over the top and it lifts, taking the old layer with it. So we test adhesion before quoting, strip anything unsound, seal the bare brick, and rebuild the system so the new coating bonds to the wall rather than to a failing layer.`,
          ],
        },
        {
          heading: `Working Around the ${suburb} Road Village and Station Precinct`,
          body: [
            `${suburb} Road is the village strip. The precinct around it changed shape when the level crossing went and the station was rebuilt below street level. We work on both sides of that. Houses through the surrounding streets, and the shopfronts, consulting rooms and low-rise common property closer in.`,
            `Commercial jobs here run on the tenant's clock, not ours. Shopfront and facade work is scheduled around trading hours. Owners corporation work is staged so residents keep access to entries and car parks. Everything sits under our $10 million public liability policy. Same crew, same preparation standard as the residential work. Only the timing changes.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
