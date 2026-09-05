import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SafetyBeachPainters() {
  const suburb = "Safety Beach";
  const faqs = [
    {
      question: `How do you protect ${suburb} homes from salt air?`,
      answer: `Salt is the main enemy on this stretch of the bay. Before painting we wash the salt film off the exterior — paint will not bond properly through it — then prime bare timber and finish with flexible, salt-resistant exterior systems. Metal fixings, gutters and balustrades near the water get particular attention because that's where corrosion starts.`
    },
    {
      question: `Do you paint homes around Martha Cove and the marina?`,
      answer: `Yes. Properties around Martha Cove sit right on the water, which means constant salt spray, strong UV and wind-driven rain. Those homes need coastal-grade preparation and premium salt-resistant topcoats, and we're happy to work with owners corporations on multi-dwelling and common-area work.`
    },
    {
      question: `How often should a ${suburb} home be repainted?`,
      answer: `Exposed coastal homes here generally need repainting more often than inland ones — commonly every 5 to 8 years for exteriors, depending on how directly the property faces the bay. Chalking, flaking around window frames and bare timber showing through are the signs it's due.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and provide free written quotes across ${suburb} with the full coastal preparation and products listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Safety Beach Painters | Coastal | Jetblack Painting"
      description="Coastal house painters in Safety Beach — salt-resistant exterior systems for beachfront and Martha Cove homes. Free quotes. Call 0432 077 782."
      projectSummary={`A ${suburb} render and roof repaint. The house had gone the way most Peninsula exteriors do — cream render dulled by salt air and hard UV, and a green Colorbond roof well past its best. Repainted in a mid grey with the roof brought to a dark charcoal, which is what changes the whole reading of the house from the street.`}
      projectImages={[
        {
          src: "/projects/project-safety-beach-render-roof-before.webp",
          small: "/projects/project-safety-beach-render-roof-before-800.webp",
          // 1200x1600 at quality 0.72 rather than the 1400x1867 default: this
          // frame is foliage, textured render and cloud, which webp compresses
          // badly, and at the default it was 395KB — over the 250KB ceiling the
          // speed baseline sets for anything in public/.
          width: 1200,
          height: 1600,
          alt: `Cream rendered entry and green Colorbond roof of a ${suburb} home before repainting`,
          caption:
            "Before. Cream render and a green roof — sound underneath, but the colour dates the house and the north and west elevations had taken the most sun.",
        },
        {
          src: "/projects/project-safety-beach-render-roof-after.webp",
          small: "/projects/project-safety-beach-render-roof-after-800.webp",
          width: 1400,
          height: 1050,
          alt: `The same ${suburb} home after repainting, with grey render and a dark charcoal roof`,
          caption:
            "After. Render in a mid grey, roof and gutters in a dark charcoal. Same house, same garden — the colour is doing all the work.",
        },
      ]}
      neighbouringSuburbs={[
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Rosebud", link: "/painter-rosebud" },
        { name: "Rye", link: "/painter-rye" },
        { name: "Sorrento", link: "/painter-sorrento" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
      ]}
      localExpertise={`We know ${suburb} well — a Mornington Peninsula bayside town sitting between Mount Martha and Dromana, where the housing runs from original beach houses to modern permanent homes and the waterfront properties around Martha Cove marina. Everything here is exposed to salt air, strong coastal UV and wind-driven rain, which strips poorly prepared paintwork fast. We use coastal-grade preparation — salt washing, bare-timber priming and flexible, salt-resistant topcoats — so a ${suburb} repaint actually lasts in this environment.`}
      propertyTypes={`${suburb}'s weatherboard and fibro beach houses, modern rendered and brick permanent homes, waterfront properties around Martha Cove, and holiday and rental homes near the foreshore.`}
      localContent={[
        {
          heading: `Coastal House Painters Serving ${suburb}`,
          body: `${suburb} sits on one of the peninsula's most exposed stretches of bay, with beach houses, permanent homes and the marina precinct at Martha Cove all facing constant salt air and sun. Jetblack Painting provides premium interior and exterior painting built for that setting — protecting ${suburb} homes against salt, UV and damp while delivering a finish that still looks sharp years later. Every project comes with a clear written quote and a clean, respectful site.`
        },
        {
          heading: `Salt-Resistant Exteriors & Beach House Repaints in ${suburb}`,
          body: `A coastal repaint fails early for one of two reasons: the salt film wasn't washed off first, or bare timber wasn't primed properly. We deal with both before a topcoat goes anywhere near the house. Weatherboard and fibro beach homes need careful bare-timber priming, filling and tight caulking to keep moisture out of the joints; rendered and brick permanent homes need flexible coatings that cope with the temperature swings. Metal gutters, balustrades and fixings close to the water get treated for corrosion rather than painted over. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
