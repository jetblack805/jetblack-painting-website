import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SeafordPainters() {
  const suburb = "Seaford";
  const faqs = [
    {
      question: `How do you protect ${suburb} homes from coastal salt air?`,
      answer: `In ${suburb} we use coastal-grade preparation and coatings — thorough salt washing, flexible exterior primers and premium salt-resistant topcoats — so your beachside home stays protected against salt air, UV and damp far longer than a standard repaint would last in this environment.`
    },
    {
      question: `Do you paint weatherboard beach houses in ${suburb}?`,
      answer: `Yes. Weatherboard beach cottages are common in ${suburb}, and coastal timber needs particular care — bare timber priming, careful filling and sharp caulking to keep moisture out. From older beach cottages to newer brick and rendered homes, we tailor the paint system to the surface for a durable finish.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Absolutely. A clean, fresh repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter servicing the bayside and Mornington Peninsula corridor from nearby Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Seaford Painters | Coastal House Painting Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Coastal painting specialists for weatherboard beach houses, brick homes and beachside properties across ${suburb}. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Carrum", link: "/painter-carrum" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Patterson Lakes", link: "/painter-patterson-lakes" },
        { name: "Chelsea", link: "/painter-chelsea" },
      ]}
      localExpertise={`We know ${suburb} well — a relaxed beachside suburb at the southern end of the bayside corridor, framed by its long beach and the Seaford wetlands. The suburb's housing ranges from older weatherboard beach cottages near the foreshore to post-war brick homes and newer rendered builds further back. Homes here face salt air, UV and damp, so we use coastal-grade preparation and weather-resistant coatings — salt washing, flexible primers and premium salt-resistant topcoats — so every ${suburb} repaint holds up in this seaside environment.`}
      propertyTypes={`${suburb}'s weatherboard beach cottages, post-war brick homes, rendered contemporary builds, and newer townhouses close to the foreshore and Seaford wetlands.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a laid-back beachside suburb where weatherboard cottages, brick homes and modern builds sit close to one of the longest beaches on the bay. Jetblack Painting provides premium interior and exterior painting built for this coastal setting — protecting ${suburb} homes against salt air and sun while delivering a beautiful, lasting finish. We know the area well and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site — whether it's a full exterior repaint, an interior colour refresh or a pre-sale makeover.`
        },
        {
          heading: `Coastal Protection and Weatherboard Expertise in ${suburb}`,
          body: `Homes near the beach in ${suburb} face constant salt air, UV and damp that punish poorly prepared paintwork. We counter that with proper salt washing, flexible exterior primers and premium salt-resistant topcoats, so your ${suburb} home's finish holds up far longer than a standard repaint would. Weatherboard is common near the foreshore, and coastal timber needs careful bare-timber priming, filling and tight caulking to keep moisture out. Whether it's a heritage beach cottage, a post-war brick home or a rendered modern build, we tailor the system to the surface. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
