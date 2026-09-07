import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function LyndhurstPainters() {
  const suburb = "Lyndhurst";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Professional House Painting Services in ${suburb}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Jetblack Painting",
      telephone: "0432 077 782",
      url: "https://jetblackpainting.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mordialloc",
        postalCode: "3195",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    description: `Jetblack Painting provides interior and exterior house painting across Lyndhurst, specialising in first-cycle repaints of the rendered and brick-veneer estate homes built through the 2000s and 2010s.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase()}/`,
    },
  };

  const faqs = [
    {
      question: `Our ${suburb} house is about fifteen years old and has never been repainted. Is that normal?`,
      answer: `It is completely normal, and it is most of what we do here. ${suburb}'s housing is young — the bulk of it went up through the 2000s and 2010s — so a large share of the suburb is reaching its first repaint at roughly the same time. The original builder's coating is usually two thin coats sprayed on quickly at handover, which is enough to look right on move-in day and not much more. What tells you it is due is chalking on the north and west render, timber-look entry and garage doors going grey and dry, and fascias and gutters that have lost their gloss.`,
    },
    {
      question: `Do you paint rendered estate homes in ${suburb}?`,
      answer: `Yes, and a modern estate home is rarely one surface. A typical ${suburb} facade combines rendered walls, a Colorbond garage door and roof, aluminium window frames, and a timber or timber-look front door — four materials that each need their own preparation and their own coating system. Putting one product across the lot is the single most common reason a repaint on these homes fails early. We scope each element separately and the quote itemises it that way.`,
    },
    {
      question: `Our estate has design guidelines. Does that change anything for a repaint?`,
      answer: `It might, and we check rather than assume. Some estates carry design guidelines that outlast the original build and can limit exterior colour changes on street-facing elevations, while plenty of others only ever applied at construction and no longer apply to you at all. Before we quote a colour change we ask which estate you are in and confirm what, if anything, still binds — so you find out before the job, not during it.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding City of Casey, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Lyndhurst Painters | Estate Home Repaints | Jetblack Painting"
      description="House painters in Lyndhurst — rendered and brick-veneer estate homes reaching their first repaint. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Keysborough", link: "/keysborough-painters" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
        { name: "Hampton Park", link: "/painter-hampton-park" },
        { name: "Cranbourne", link: "/painter-cranbourne" },
        { name: "Narre Warren", link: "/painter-narre-warren" },
      ]}
      localExpertise={`${suburb} sits between Dandenong South and Cranbourne in the City of Casey, immediately east of Keysborough, where we already work. Its housing is unusually uniform in age — estate development from the early 2000s onward, plus the golf-course housing around Sandhurst — which means the suburb is moving through its first repaint cycle largely at once. We know what fails first on a fifteen-year-old project home and what is still sound enough to leave alone.`}
      propertyTypes={`${suburb}'s rendered and brick-veneer project homes from the 2000s and 2010s, double-storey estate builds, the golf-course homes around Sandhurst, and newer townhouses and dual occupancies across the ${suburb} and Lynbrook estates.`}
      localContent={[
        {
          heading: `House Painters Serving Lyndhurst`,
          body: [
            `${suburb} is a young City of Casey suburb between the South Gippsland and Western Port highways, built out through the 2000s and 2010s in estates rather than street by street. That history shows in the housing: rendered and brick-veneer project homes, double-storey builds on compact blocks, and the golf-course housing around Sandhurst, most of it within a decade or two of the same age. Jetblack Painting works throughout ${suburb} from our base in Mordialloc, immediately west via Keysborough.`,
            `Every ${suburb} job starts with a written quote that itemises the scope and the preparation, so you can see what you are paying for rather than a single figure with no working. Interior repaints, full exteriors, fascias and gutters, garage and entry doors — the same standard of preparation and the same premium Dulux and Taubmans systems we use across Bayside and the south-east, backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `First-Cycle Repaints on Lyndhurst's Estate Homes`,
          body: [
            `A builder's original paint job is not a repaint. It is two quick coats applied to a program, over render that in many cases had barely finished curing, and it is specified to pass handover rather than to last twenty years. That is why so many ${suburb} homes look tired at fifteen while the house itself is still in good order — the substrate is fine, the coating on it has simply done its time. A proper repaint is mostly preparation: washing off the chalk, spot-priming where the original film has failed, and getting a full-build system on rather than another thin one.`,
            `The exposure here does not help either. ${suburb} is flat, open and short on mature tree cover, so north and west elevations take direct sun and wind-driven rain with nothing in the way. Those elevations reliably go first, and on a house where the render, the garage door and the entry door are all different materials, they go at different rates. We quote the whole facade but we tell you honestly which parts are urgent and which will hold another season, rather than pricing everything as though it is all equally gone.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
