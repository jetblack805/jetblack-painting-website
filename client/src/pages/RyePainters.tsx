import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function RyePainters() {
  const suburb = "Rye";
  const faqs = [
    {
      question: `Do you paint holiday homes and beach shacks in ${suburb}?`,
      answer: `Yes — ${suburb} has one of the peninsula's biggest concentrations of holiday homes, original beach shacks and short-stay rentals, and they're core to our work here. Many are weatherboard or fibro and have been left through several seasons, so they need proper scraping, bare-timber priming and caulking before any topcoat goes on.`
    },
    {
      question: `Can you work around the holiday rental season?`,
      answer: `Yes, and we plan around it. Most ${suburb} owners want exterior work done outside peak summer letting, so we schedule repaints for the quieter months and work to a firm timeline. If the property is tenanted or listed, we'll stage the job so it's presentable between bookings.`
    },
    {
      question: `Are back beach homes different to front beach homes?`,
      answer: `Yes. ${suburb} front beach properties face bay salt spray and reflected sun, while back beach homes near the ocean side take stronger wind, salt and UV. Back beach exteriors generally need repainting more often, and both benefit from flexible, salt-resistant systems rather than standard exterior acrylic.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and provide free written quotes across ${suburb} with the full scope, preparation and products listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Rye Painters | Beach House Repaints | Jetblack Painting"
      description="Coastal house painters in Rye — beach shacks, holiday homes and permanent residences, front beach and back beach. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Sorrento", link: "/painter-sorrento" },
        { name: "Rosebud", link: "/painter-rosebud" },
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Safety Beach", link: "/painter-safety-beach" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
      ]}
      localExpertise={`We know ${suburb} well — one of the Mornington Peninsula's busiest holiday towns, stretching from the front beach on the bay across to the back beach on the ocean side. The housing is a real mix: original weatherboard and fibro beach shacks, brick and rendered permanent homes, and modern rebuilds and short-stay rentals. Salt, wind and UV are harsher here than almost anywhere else we work, and back beach properties take the worst of it, so we use coastal-grade preparation and salt-resistant systems on every ${suburb} exterior.`}
      propertyTypes={`${suburb}'s weatherboard and fibro beach shacks, brick and rendered permanent homes, holiday and short-stay rental properties, and modern coastal rebuilds on both the front and back beach.`}
      localContent={[
        {
          heading: `Coastal House Painters Serving ${suburb}`,
          body: `${suburb} runs from the calm front beach on Port Phillip across to the exposed back beach, and the housing changes as you go — original beach shacks, permanent family homes, holiday rentals and modern rebuilds. Jetblack Painting provides premium interior and exterior painting across all of it, with coastal preparation that suits the exposure of each property. Every ${suburb} project comes with a clear written quote covering scope, preparation and paint products.`
        },
        {
          heading: `Beach Shack Restoration & Rental Repaints in ${suburb}`,
          body: `A lot of ${suburb} beach houses have been through years of salt and sun with only patch repairs, so the honest starting point is preparation rather than paint. We scrape back failing paint to a sound edge, cut out and replace rotten weatherboard instead of filling over it, spot-prime every patch of bare timber with a penetrating primer, then caulk the joints, window frames and corner trims with a flexible sealant before two full topcoats go on. For holiday rentals we work around the letting calendar so the property is ready before the season. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
