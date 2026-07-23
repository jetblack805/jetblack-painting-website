import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function WindsorPainters() {
  const suburb = "Windsor";
  const faqs = [
    {
      question: `Do you paint Victorian terraces and period homes in ${suburb}?`,
      answer: `Yes — single-fronted Victorian terraces and cottages are the signature of ${suburb}, and they're much of our work here. We're experienced with the details these homes need: correct preparation on render and masonry, lead paint assessment where applicable, period-appropriate colours, and careful restoration of verandah ironwork, parapets, cornices and window sashes. We can advise on Stonnington heritage overlay requirements for exterior colour schemes.`
    },
    {
      question: `Do you paint apartments and warehouse conversions in ${suburb}?`,
      answer: `Yes. Alongside its terraces, ${suburb} has a growing mix of apartments, warehouse conversions and townhouses around the Chapel Street precinct. We handle interior repaints, common-area and body-corporate work, and rendered facades, coordinating access and scheduling to keep disruption to a minimum.`
    },
    {
      question: `Do you paint rental properties in ${suburb}?`,
      answer: `Absolutely. ${suburb} has a high proportion of rentals, and we work with local landlords and property managers for smooth tenancy changeovers — fast vacancy turnarounds, low-VOC products for occupied homes, and durable interior finishes. All work is backed by a 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} with the full scope and preparation itemised. Call Jimmy on 0432 077 782 or email jimmy@jetblackpainting.com, backed by $10M public liability insurance and a 5-year workmanship guarantee.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Windsor Painters | Victorian Terrace & Heritage Home Specialists | Jetblack Painting"
      description={`Expert painters in ${suburb} — Victorian terraces, period cottages, apartments and warehouse conversions around Chapel Street and Stonnington. Free quotes, 5-year guarantee, $10M insurance.`}
      neighbouringSuburbs={[
        { name: "Prahran", link: "/painter-prahran" },
        { name: "St Kilda", link: "/painter-st-kilda" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Armadale", link: "/painter-armadale" },
        { name: "Toorak", link: "/painter-toorak" },
      ]}
      localExpertise={`${suburb} is one of inner Melbourne's most characterful pockets, sitting at the southern end of the Chapel Street precinct in the City of Stonnington. Its tight, tree-lined streets are dominated by single-fronted Victorian terraces and cottages, with a growing mix of apartments, warehouse conversions and townhouses, and much of the older streetscape sits under Stonnington heritage overlays. We've built up detailed knowledge of ${suburb}'s period fabric — ornate render facades, parapets, verandah ironwork and timber sashes — and use substrate-matched preparation and premium coatings suited to render, masonry and heritage timber. The suburb's dense hospitality and retail strip also brings us regular commercial and shopfront enquiries.`}
      propertyTypes={`${suburb}'s single-fronted Victorian terraces and cottages, double-fronted period homes, apartments and warehouse conversions, townhouses, and Chapel Street shopfronts and hospitality venues.`}
      localContent={[
        {
          heading: `Victorian Terrace & Heritage Specialists`,
          body: `Period homes in ${suburb} need a paint system appropriate to the substrate — render, masonry, or a combination — and preparation that addresses the underlying condition rather than painting over problems. On Victorian terraces we inspect for render cracks, rising damp, failed paint films and lead-based coatings before specifying a system, and we take care with the ornate details these homes are known for — parapets, verandah ironwork, cornices and window sashes. We match colours to the period of the home and can advise on Stonnington heritage overlay requirements for any property in a heritage precinct.`
        },
        {
          heading: `Apartments, Rentals & Chapel Street Commercial`,
          body: `${suburb}'s Chapel Street precinct brings us regular commercial enquiries from shopfronts, cafés and hospitality venues that need professional results with minimal disruption to trading. For the suburb's apartments and large rental stock, we offer interior repaints, body-corporate and common-area work, scheduled repaint programs for landlords, and fast vacancy turnarounds coordinated with property managers. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
