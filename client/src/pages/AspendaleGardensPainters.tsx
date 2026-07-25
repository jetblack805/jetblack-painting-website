import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function AspendaleGardensPainters() {
  const suburb = "Aspendale Gardens";
  const faqs = [
    {
      question: `Do you paint modern estate and brick-veneer homes in ${suburb}?`,
      answer: `Yes — ${suburb} is largely made up of modern brick and rendered family homes from the 1980s onward, and they're the core of our work here. We prepare and repaint rendered and brick facades, eaves, fascias and garage doors, and refresh interiors room by room with premium low-sheen and enamel systems, all with proper preparation so the finish stays even and lasts.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Absolutely. A clean, neutral repaint is one of the best-value ways to lift an ${suburb} property before sale or a new tenancy. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect presentation — walls, ceilings, trims, doors and the facade.`
    },
    {
      question: `Do you handle the coastal conditions near ${suburb}?`,
      answer: `Yes. ${suburb} sits close to the bay and the Waterways wetlands, so exteriors see salt-laden air and damp. We use flexible, weather-resistant exterior systems and thorough preparation — washing, priming and sealing — so your home's finish holds up far longer than a standard repaint would in this environment.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Aspendale Gardens Painters | Coastal House Painting"
      description="Coastal house painters in Aspendale Gardens — rendered family homes and 1980s–2000s builds. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Edithvale", link: "/painter-edithvale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
      ]}
      localExpertise={`We know ${suburb} well — a modern, family-oriented estate pocket of the City of Kingston built around the Waterways wetlands, just minutes from our Mordialloc base. Unlike the older beachside streets of neighbouring Aspendale, ${suburb} is dominated by brick and rendered homes from the 1980s onward, laid out in quiet courts and crescents. Our team uses surface-appropriate preparation and premium coatings — masonry systems on rendered and brick facades, careful timber priming on eaves, fascias and doors — with weather-resistant exterior systems suited to the suburb's bayside, wetland-edge conditions.`}
      propertyTypes={`${suburb}'s modern brick and rendered family homes, 1980s–2000s builds, double-storey homes, and newer townhouses across the estate and Waterways precinct.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is a quiet, green, family-focused estate in the City of Kingston, built largely around comfortable modern brick and rendered homes on landscaped streets beside the Waterways wetlands. Jetblack Painting provides premium interior and exterior painting suited to this housing — refreshing rendered and brick facades, brightening interiors and getting homes presentation-ready for sale or lease. As a local painter based nearby in Mordialloc, we know the area well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Exterior & Interior Repaints in ${suburb}`,
          body: `Exterior repaints in ${suburb} start with real preparation — pressure washing, sanding back failing coatings, priming, and sealing gaps — before durable, weather-resistant topcoats go on, which matters given the suburb's proximity to the bay and wetlands. Inside, we stage the work room by room with low-odour premium paints so the home stays livable throughout. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
