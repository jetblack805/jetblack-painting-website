import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DromanaPainters() {
  const suburb = "Dromana";
  const faqs = [
    {
      question: `Do you paint beach houses and holiday homes in ${suburb}?`,
      answer: `Yes — ${suburb} is a bayside peninsula town with a mix of permanent homes, beach houses and holiday properties, and they're core to our work here. Weatherboard and fibro beach homes near the foreshore need coastal-grade care — salt washing, flexible primers and salt-resistant topcoats — so the finish holds up against salt air, UV and damp.`
    },
    {
      question: `Can you paint homes on the sloping blocks below Arthurs Seat?`,
      answer: `Yes. A lot of ${suburb} sits on the rise between the foreshore and Arthurs Seat, and sloping blocks change how a job is set up — a single-storey house can still be two storeys of working height at the downhill end. We assess access at the quote and price in the right scaffold or elevated equipment rather than discovering it on day one.`
    },
    {
      question: `How do you handle older fibro sheeting on ${suburb} beach houses?`,
      answer: `Carefully. Fibro sheeting on older ${suburb} beach houses can date from the era when asbestos cement was in common use, so we never dry-sand or power-sand fibro of unknown age. It's washed down and hand-prepared using low-disturbance methods, and where there's any doubt about the material we recommend having it tested before work starts.`
    },
    {
      question: `Can you work around a holiday-rental booking schedule?`,
      answer: `Yes. Plenty of ${suburb} properties are holiday lets, so we're used to working to a fixed window between bookings or through the quieter months. Give us your booking calendar with the quote and we'll stage the work to fit it, rather than you losing peak-season nights to a repaint.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and provide free written quotes across ${suburb}, itemising the coastal preparation, primers and topcoats so you can see exactly what the salt-air protection involves. Call Jimmy on 0432 077 782.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dromana Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Dromana — weatherboard, fibro beach houses and rendered permanent homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Sorrento", link: "/painter-sorrento" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Frankston", link: "/painter-frankston" },
      ]}
      localExpertise={`We know ${suburb} well — a relaxed bayside town on the Mornington Peninsula, set between the foreshore and the slopes of Arthurs Seat. Its housing is a mix of permanent brick and weatherboard homes, older fibro and weatherboard beach houses near the water, and modern rebuilds. Homes here face salt air, strong coastal UV and damp, so we use coastal-grade preparation and weather-resistant coatings — salt washing, flexible primers and premium salt-resistant topcoats — so every ${suburb} repaint holds up in this seaside setting.`}
      propertyTypes={`${suburb}'s weatherboard and fibro beach houses, brick and rendered permanent homes, holiday properties, and modern coastal rebuilds near the foreshore.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a popular bayside town on the Mornington Peninsula, where beach houses, permanent homes and holiday properties sit close to the foreshore beneath Arthurs Seat. Jetblack Painting provides premium interior and exterior painting built for this coastal setting — protecting ${suburb} homes against salt air and sun while delivering a beautiful, lasting finish. We know the area well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Coastal Protection & Weatherboard Expertise in ${suburb}`,
          body: `Homes near the bay in ${suburb} face constant salt air, UV and damp that punish poorly prepared paintwork. We counter that with proper salt washing, flexible exterior primers and premium salt-resistant topcoats, so your ${suburb} home's finish holds up far longer than a standard repaint would. Weatherboard and fibro beach houses need careful bare-timber priming, filling and tight caulking to keep moisture out. Whether it's an original beach cottage, a permanent brick home or a modern rebuild, we tailor the system to the surface. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
