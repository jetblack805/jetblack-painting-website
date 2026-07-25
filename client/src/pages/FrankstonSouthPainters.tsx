import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function FrankstonSouthPainters() {
  const suburb = "Frankston South";
  const faqs = [
    {
      question: `Do you paint larger and architect-designed homes in ${suburb}?`,
      answer: `Yes — ${suburb} is known for its larger, leafy properties, including architect-designed and split-level homes on bush blocks, and they're a big part of our work here. We handle extensive eaves, high walls, decks, cladding and feature timber with the right access equipment and premium coatings suited to each surface.`
    },
    {
      question: `How do you handle the coastal and bushland conditions in ${suburb}?`,
      answer: `${suburb} sits between the bay and the bushland of Sweetwater Creek and the peninsula, so homes face salt air, damp and heavy tree cover. We use flexible, weather-resistant exterior systems with thorough preparation — washing, priming and sealing — and treat mould-prone shaded areas properly so the finish lasts in these conditions.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Absolutely. A clean, quality repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service Frankston and the Mornington Peninsula corridor and provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Frankston South Painters | Coastal Homes | Jetblack Painting"
      description="Coastal house painters in Frankston South — larger family homes, architect-designed and split-level houses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Frankston", link: "/painter-frankston" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Seaford", link: "/painter-seaford" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
      ]}
      localExpertise={`We know ${suburb} well — one of the peninsula's most sought-after, leafy suburbs, where larger homes on generous bush blocks sit between the bay and the Sweetwater Creek bushland. The housing ranges from established brick and weatherboard family homes to architect-designed and split-level houses with extensive eaves, decking and cladding. Homes here face salt air, damp and heavy tree cover, so we specify flexible, weather-resistant exterior systems and carry out the thorough preparation these properties need for a finish that lasts.`}
      propertyTypes={`${suburb}'s larger family homes, architect-designed and split-level houses, weatherboard and brick homes on bush blocks, rendered contemporary builds, and coastal properties near the foreshore.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a leafy, upscale suburb at the gateway to the Mornington Peninsula, known for its established homes on large, treed blocks close to both the bay and the bush. Jetblack Painting provides premium interior and exterior painting suited to these properties — protecting facades against salt air and damp while delivering a beautiful, lasting finish. We know the area well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Coastal & Bushland Protection in ${suburb}`,
          body: `Homes in ${suburb} face a demanding mix — salt air off the bay, damp and mould-prone shade under heavy tree cover, and larger exterior areas to protect. We counter that with proper washing, flexible primers and premium weather-resistant topcoats on render, masonry and timber, and correct treatment of shaded, mould-prone surfaces before painting. From full exterior repaints on split-level homes to interior colour refreshes, we tailor the system to the surface. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
