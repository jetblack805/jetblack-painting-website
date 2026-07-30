import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function RosebudPainters() {
  const suburb = "Rosebud";
  const faqs = [
    {
      question: `When is the best time of year to repaint in ${suburb}?`,
      answer: `Outside the summer peak, if the property is a holiday let. ${suburb} fills up over summer, so most owners want the work done between about March and November — which also happens to suit exterior painting better, since coatings need moderate temperatures and a dry surface to cure properly. We book around the season rather than against it.`
    },
    {
      question: `How far back from the beach does salt air still affect paintwork?`,
      answer: `Further than most people expect. Salt carries well inland on the prevailing weather across ${suburb}, so streets several blocks back from the foreshore still see the chalking and early coating failure that front-row properties get. We assess exposure at the quote rather than assuming only the beachfront needs the coastal-grade system.`
    },
    {
      question: `Can you paint a ${suburb} holiday rental between bookings?`,
      answer: `Yes, and we do it regularly. Send your booking calendar with the quote and we'll stage the work into the gaps — interiors room by room if the window is tight, exteriors in a single block when the weather allows. The aim is a finished job without you blocking out revenue nights.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and provide free written quotes across ${suburb}, with the exposure assessment and coating system itemised so you can see what you're paying for. Call Jimmy on 0432 077 782.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Rosebud Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Rosebud — weatherboard, fibro beach houses and rendered permanent homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Frankston", link: "/painter-frankston" },
      ]}
      localExpertise={`We know ${suburb} well — one of the Mornington Peninsula's busiest bayside towns, where a large stock of beach houses, permanent homes and holiday properties lines the foreshore and the streets behind it. The housing ranges from original weatherboard and fibro beach shacks to brick and rendered permanent homes and modern rebuilds. Homes here face salt air, strong coastal UV and damp, so we use coastal-grade preparation and weather-resistant coatings — salt washing, flexible primers and premium salt-resistant topcoats — so every ${suburb} repaint holds up in this seaside setting.`}
      propertyTypes={`${suburb}'s weatherboard and fibro beach houses, brick and rendered permanent homes, holiday and rental properties, and modern coastal rebuilds near the foreshore.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of the peninsula's most popular bayside towns, with a big mix of beach houses, permanent homes and holiday properties close to its long foreshore. Jetblack Painting provides premium interior and exterior painting built for this coastal setting — protecting ${suburb} homes against salt air and sun while delivering a beautiful, lasting finish. We know the area well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Coastal Protection & Weatherboard Expertise in ${suburb}`,
          body: `Homes near the bay in ${suburb} face constant salt air, UV and damp that punish poorly prepared paintwork. We counter that with proper salt washing, flexible exterior primers and premium salt-resistant topcoats, so your ${suburb} home's finish holds up far longer than a standard repaint would. Weatherboard and fibro beach houses need careful bare-timber priming, filling and tight caulking to keep moisture out. Whether it's an original beach shack, a permanent brick home or a modern rebuild, we tailor the system to the surface. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
