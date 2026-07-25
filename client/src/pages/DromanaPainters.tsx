import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DromanaPainters() {
  const suburb = "Dromana";
  const faqs = [
    {
      question: `Do you paint beach houses and holiday homes in ${suburb}?`,
      answer: `Yes — ${suburb} is a bayside peninsula town with a mix of permanent homes, beach houses and holiday properties, and they're core to our work here. Weatherboard and fibro beach homes near the foreshore need coastal-grade care — salt washing, flexible primers and salt-resistant topcoats — so the finish holds up against salt air, UV and damp.`
    },
    {
      question: `How do you protect ${suburb} homes from the coastal environment?`,
      answer: `Homes near the bay in ${suburb} face constant salt air, strong UV and damp. We use flexible, salt-resistant exterior systems and thorough preparation — washing, priming and sealing bare timber — so your home's finish lasts far longer than a standard repaint would in this seaside environment.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} property?`,
      answer: `Absolutely. A clean, fresh repaint is one of the best-value ways to lift a ${suburb} beach house or home before sale, a new tenancy or the holiday-rental season. We work to your timeline, keep the site tidy, and focus on the surfaces that most affect presentation.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dromana Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Dromana — weatherboard, fibro beach houses and rendered permanent homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
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
