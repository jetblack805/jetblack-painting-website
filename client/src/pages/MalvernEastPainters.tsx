import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function MalvernEastPainters() {
  const suburb = "Malvern East";
  const faqs = [
    {
      question: `Do you paint period and heritage homes in ${suburb}?`,
      answer: `Yes — Edwardian homes, Californian bungalows and interwar double-brick houses make up much of our ${suburb} work, including properties in the heritage-listed Gascoigne Estate. We inspect for render cracks, rising damp, failed paint films and lead-based coatings, then specify the right preparation and paint system, with period-appropriate colours and careful work on verandah timbers, fretwork and window sashes.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `${suburb} has a rich mix — Edwardian and Federation homes, Californian bungalows, interwar and post-war brick houses, grand period residences, and modern townhouses and apartments. We handle all of them with substrate-matched preparation and premium Dulux or Haymes systems, whether it's ornate heritage trim or a full interior repaint.`
    },
    {
      question: `Do you paint rental properties in ${suburb}?`,
      answer: `Yes. We work with local landlords and property managers across ${suburb} for smooth tenancy changeovers — fast vacancy turnarounds, low-VOC products for occupied homes, and durable interior finishes. All work is backed by a 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} with the full scope and preparation itemised. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com, backed by $10M public liability insurance and a 5-year workmanship guarantee.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Malvern East Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Malvern East — Edwardian, Federation homes and Californian bungalows. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Glen Iris", link: "/painter-glen-iris" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Chadstone", link: "/painter-chadstone" },
        { name: "Murrumbeena", link: "/painter-murrumbeena" },
      ]}
      localExpertise={`${suburb} is one of Stonnington's most established and leafy suburbs, with tree-lined streets, the heritage-listed Gascoigne Estate, and a residential fabric dominated by Edwardian homes, Californian bungalows and interwar double-brick houses, alongside grand period residences and newer townhouses. Much of the older streetscape sits under Stonnington heritage overlays, making experienced heritage painters essential for exterior work. We've built up detailed knowledge of the suburb's architecture — from roughcast-render bungalows to ornate Edwardian facades — and use substrate-matched preparation and premium coatings suited to render, masonry and period timber.`}
      propertyTypes={`${suburb}'s Edwardian and Federation homes, Californian bungalows, interwar and post-war double-brick houses, grand period residences, and modern townhouses and apartments — including heritage-overlay properties in the Gascoigne Estate.`}
      localContent={[
        {
          heading: `Heritage, Bungalow & Period Home Specialists`,
          body: `Period homes in ${suburb} need a paint system appropriate to the substrate — render, masonry, weatherboard or a combination — and preparation that addresses the underlying condition rather than painting over problems. On Edwardian and Federation homes we carry out detailed inspections for render cracks, rising damp, failed paint films and lead-based coatings before specifying a system. Californian bungalows present their own challenges: roughcast render needs different preparation to smooth render or brick, and deep verandah timbers need oil-based or alkyd primers to penetrate properly. We match colours to the period of the home and can advise on Stonnington heritage overlay requirements, including within the Gascoigne Estate.`
        },
        {
          heading: `Interior Repaints & Rental Properties in ${suburb}`,
          body: `Beyond heritage exteriors, we deliver flawless interior repaints across ${suburb} — walls, ceilings, trims, doors and detailed cornice work — staged room by room with low-odour premium paints so the home stays livable. For the suburb's rental stock, we offer scheduled repaint programs for landlords, fast vacancy turnarounds coordinated with property managers, and durable finishes that stand up to tenancy use. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
