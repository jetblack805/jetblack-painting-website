import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function McKinnonPainters() {
  const suburb = "McKinnon";
  const faqs = [
    {
      question: `Do you specialise in ${suburb}'s interwar and bungalow homes?`,
      answer: `Yes. ${suburb} is full of interwar homes and Californian bungalows, and we know these properties well — render crack filling, bare timber priming, careful colour selection that suits the era. Proper preparation makes the difference between a finish that lasts and one that peels in two years. We don't cut corners on prep.`
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Absolutely. ${suburb} properties are highly sought after and a sharp pre-sale repaint — neutral palette, tight execution, clean fascias and fresh interior — can add real dollars at auction. We can scope and complete pre-sale repaints efficiently on a timeline that works around your campaign.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the broader Glen Eira area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a site visit.`
    },
    {
      question: `Can you paint over brick that has already been painted?`,
      answer: `Yes, and it is one of the most common jobs we quote in ${suburb}. Plenty of the post-war brick veneer here was painted decades ago, and the original coating is often chalky, patchy or lifting in sheets where moisture has been trapped behind it. We wash the substrate down, scrape and sand back anything unsound, spot-prime bare masonry with the right sealer and then recoat with a breathable masonry system. Worth knowing before you start: painting brick is a one-way decision — once it is coated it needs recoating periodically forever, so it is worth doing properly the first time.`
    },
    {
      question: `Do you paint steel-framed windows on older ${suburb} homes?`,
      answer: `Yes. The interwar and early post-war homes around ${suburb} often still have their original steel window frames, and they almost always fail the same way — rust blooming at the corners and along the bottom rail where water sits. Painting straight over it just hides the problem for a season. We wire-brush and sand back to sound metal, treat the bare steel with a rust-inhibiting primer and then bring it up in enamel, so the repair holds rather than bubbling through the new coat by the next winter.`
    },
    {
      question: `Do you take on shopfronts and commercial work around ${suburb} Road?`,
      answer: `We do. Alongside houses we paint shopfronts, offices, consulting rooms and the common property of the low-rise blocks around the ${suburb} Road strip and the station precinct. Commercial work is scheduled around your trading hours so the shop stays open, and we carry $10 million public liability cover for it. Call Jimmy on 0432 077 782 to talk through access and timing.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="McKinnon Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in McKinnon — Californian bungalows and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Ormond", link: "/painter-ormond" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise={`We understand ${suburb}'s character — its interwar and Californian bungalow homes demand particular care with render preparation, timber priming and colour choices that respect the era. The ${suburb} Secondary College zone keeps property values high and expectations higher; we deliver the preparation and finish that matches both.`}
      propertyTypes={`${suburb}'s Californian bungalows and interwar homes, renovated family residences, period brick properties and low-rise units across ${suburb} and the surrounding Glen Eira suburbs.`}
      localContent={[
        {
          heading: `House Painters Serving McKinnon`,
          body: [
            `${suburb} is one of Glen Eira's most tightly held family pockets — known for its leafy streets, well-presented interwar and bungalow homes, and the sought-after ${suburb} Secondary College zone that keeps demand high. Jetblack Painting provides premium interior and exterior painting throughout ${suburb}, with the careful preparation and clean finish these established, high-value homes deserve.`,
            `As a local painter based nearby in Mordialloc, we make quoting and scheduling easy for ${suburb} homeowners. Every project comes with a clear written quote, thorough preparation and a respectful, tidy team — whether it's a full exterior repaint, an interior colour update or kitchen cabinetry.`,
          ],
        },
        {
          heading: `Period Home and Bungalow Painting in ${suburb}`,
          body: [
            `${suburb}'s interwar homes and Californian bungalows carry rendered surfaces, decorative brickwork and original timber that genuinely reward proper preparation — filling and sealing render cracks, priming bare timber, and choosing colours that suit the era and the streetscape. Skip the prep and the topcoat fails early; do it properly and the finish lasts for years.`,
            `For updated and contemporary ${suburb} homes, we deliver smooth, long-lasting interiors and durable exteriors using premium Dulux and Taubmans paint systems rated for Melbourne's conditions. Whatever the style, the standard is the same: meticulous prep, premium product and a result that holds up.`,
          ],
        },
        {
          heading: `Post-War Brick Veneer: What ${suburb} Actually Needs`,
          body: [
            `Not every house here is a bungalow. A large share of ${suburb}'s stock went up between the late 1940s and the 1960s as the Frankston line suburbs filled in, and that brick veneer needs a different approach entirely. The brickwork itself is usually sound; what fails is everything attached to it — timber eaves and fascia boards, the barge boards along the gable ends, and the window and door joinery. Those are the surfaces that take the weather, and on the north and west elevations they are typically two coats past due while the walls still look fine.`,
            `Where that brick has been painted at some point, the job changes again. Old masonry coatings go chalky and lose their key, and a fresh topcoat rolled straight over the top will lift with the layer underneath it. We test adhesion before quoting, strip anything unsound, seal the bare brick and rebuild the system so the new coating bonds to the substrate rather than to a failing one.`,
          ],
        },
        {
          heading: `Working Around the ${suburb} Road Village and Station Precinct`,
          body: [
            `${suburb} Road is the suburb's village strip, and the precinct around it changed shape when the level crossing was removed and the station rebuilt below street level. We work on both sides of that — houses through the surrounding streets, and the shopfronts, consulting rooms and low-rise common property closer in.`,
            `Commercial jobs here run on the tenant's clock, not ours. Shopfront and facade work is scheduled around trading hours, owners corporation work is staged so residents keep access to entries and car parks, and everything is covered by our $10 million public liability policy. It is the same crew and the same preparation standard as the residential work — only the timing changes.`,
          ],
        },
        {
          heading: `Getting a Quote in ${suburb}`,
          body: [
            `Every ${suburb} quote follows a site visit. There is no useful way to price a repaint from a photo or a floor plan, because the cost sits in the condition of the surfaces rather than the size of the house — how much render cracking there is, whether the eaves have been maintained, how many coats the previous owner skipped. We look at all of it, then put the scope and the preparation in writing so you can see exactly what you are paying for.`,
            `Quotes are free, itemised and typically with you within 24 to 48 hours of the visit. Every job is backed by our 5-year written workmanship guarantee and carried out by a fully insured, VIC registered painting contractor. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
