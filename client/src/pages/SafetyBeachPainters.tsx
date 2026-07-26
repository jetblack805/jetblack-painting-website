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
      neighbouringSuburbs={[
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Rosebud", link: "/painter-rosebud" },
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
