import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BraesidePainters() {
  const suburb = "Braeside";
  const faqs = [
    {
      question: `Do you paint commercial and warehouse properties in ${suburb}?`,
      answer: `Yes — ${suburb} has a large business and light-industrial precinct alongside its residential streets, and we paint warehouses, factory units, offices and showrooms as well as homes. Commercial work can be scheduled after hours or over weekends so your operation keeps running, and we're fully insured with $10 million public liability cover.`
    },
    {
      question: `How close are you to ${suburb}?`,
      answer: `Very close — Jetblack Painting is based in Mordialloc, which shares the 3195 postcode with ${suburb} and is only a few minutes away. That means quick quotes, easy site visits and no travel surcharge.`
    },
    {
      question: `Do homes near Braeside Park need different preparation?`,
      answer: `Homes backing onto the parkland and wetlands sit in a damper microclimate, so shaded south-facing walls, eaves and fences are more prone to mould and mildew. We wash and treat those surfaces before painting rather than coating over them, and use mould-resistant exterior systems so the finish stays clean for longer.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free written quotes for residential and commercial work across ${suburb}, with the full scope and preparation listed. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Braeside Painters | Home & Commercial | Jetblack Painting"
      description="Painters in Braeside for homes, warehouses and offices. Based minutes away in Mordialloc. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Aspendale Gardens", link: "/painter-aspendale-gardens" },
        { name: "Dingley Village", link: "/painter-dingley-village" },
        { name: "Parkdale", link: "/painter-parkdale" },
      ]}
      localExpertise={`We know ${suburb} well — it shares the 3195 postcode with our Mordialloc base, so it's effectively our home ground. ${suburb} is an unusual mix: a substantial business and light-industrial precinct on one side, quiet residential streets and the wetlands of Braeside Park on the other. That means we work on everything here from warehouse and office repaints to brick-veneer family homes, and homes sitting close to the parkland need mould-resistant systems because of the damper air.`}
      propertyTypes={`${suburb}'s brick veneer and rendered family homes near the parkland, plus the warehouses, factory units, offices and showrooms across the business precinct.`}
      localContent={[
        {
          heading: `House & Commercial Painters Serving ${suburb}`,
          body: `${suburb} sits directly alongside our Mordialloc base — same postcode, a few minutes' drive — so we're on site quickly for quotes and jobs alike. The suburb combines a large business and light-industrial precinct with residential streets and the wetlands of Braeside Park, and Jetblack Painting works across both sides of it: warehouse, office and showroom repaints as well as full interior and exterior work on family homes. Every project comes with a clear written quote covering scope, preparation and products.`
        },
        {
          heading: `Warehouse Repaints & Mould-Resistant Exteriors in ${suburb}`,
          body: `Commercial painting in ${suburb} is usually about durability and timing. We use hard-wearing systems built for high-traffic and industrial surfaces, and schedule work after hours or across weekends so your business keeps trading. On the residential side, homes near Braeside Park sit in a damper microclimate where shaded walls, eaves and fences pick up mould and mildew faster than usual — so we wash and treat those surfaces properly before painting and finish with mould-resistant exterior coatings. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
