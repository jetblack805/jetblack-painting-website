import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function WaterwaysPainters() {
  const suburb = "Waterways";
  const faqs = [
    {
      question: `Do you paint modern rendered homes in ${suburb}?`,
      answer: `Yes — ${suburb} is a modern master-planned estate, so almost every home here is rendered or brick with contemporary detailing. Render needs a flexible, breathable coating that moves with the substrate; a rigid paint film cracks at the control joints and around windows within a few years. We use exterior systems built for rendered homes.`
    },
    {
      question: `Does being on the wetlands affect the paintwork?`,
      answer: `Being on the wetlands does affect the paintwork. Homes fronting the lakes and wetlands in ${suburb} sit in a damper, more exposed setting, so south and west-facing walls, eaves and fences pick up mould and weathering faster. We wash and treat those surfaces before painting and use mould-resistant exterior systems so the finish holds up.`
    },
    {
      question: `Can you match the estate's existing colour scheme?`,
      answer: `Yes. Many ${suburb} homes were built to a coordinated palette, and if your property is covered by design guidelines or an owners corporation we'll work within them. We can also colour-match the existing render, trim and garage door so a partial repaint blends rather than stands out.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We're based just minutes away in Mordialloc and provide free written quotes across ${suburb} with the full scope and preparation included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Waterways Painters | Rendered Homes | Jetblack Painting"
      description="House painters in Waterways — modern rendered and brick homes on the wetlands estate. Based nearby in Mordialloc. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Aspendale Gardens", link: "/painter-aspendale-gardens" },
        { name: "Braeside", link: "/painter-braeside" },
        { name: "Patterson Lakes", link: "/painter-patterson-lakes" },
      ]}
      localExpertise={`We know ${suburb} well — it's a modern master-planned estate built around lakes and wetlands, just minutes from our Mordialloc base and sharing the 3195 postcode. The housing is consistent: contemporary rendered and brick homes, many built to a coordinated palette, with garages, feature walls and rendered fencing that all need to be handled together. Homes fronting the water sit in a damper setting, so we use flexible, mould-resistant exterior systems suited to render rather than generic coatings.`}
      propertyTypes={`${suburb}'s modern rendered and brick family homes, waterfront properties on the wetlands, townhouses, and the rendered fencing and garages that come with the estate.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of Kingston's newest residential pockets — a master-planned estate wrapped around lakes and wetlands, a few minutes from our Mordialloc base. The homes here are contemporary rendered and brick builds, many now old enough to be due for their first proper repaint. Jetblack Painting provides premium interior and exterior painting across the estate, with careful preparation and a clear written quote before any work begins.`
        },
        {
          heading: `Render Repaints & Waterfront Protection in ${suburb}`,
          body: `Rendered homes are their own discipline. Render moves, and a rigid paint film cracks at the control joints, around window frames and along parapets — so we use flexible, breathable exterior systems designed for the substrate, after cutting out and patching any existing cracks rather than skimming over them. Properties fronting the wetlands in ${suburb} face damper air and more weathering on their south and west elevations, so those surfaces get washed, treated and finished with mould-resistant coatings. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
