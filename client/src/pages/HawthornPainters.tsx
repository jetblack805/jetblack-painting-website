import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HawthornPainters() {
  const suburb = "Hawthorn";
  const faqs = [
    {
      question: `Do you paint Victorian terraces and Federation homes in ${suburb}?`,
      answer: `Yes — the period stock around Grace Park and the Yarra-side streets is core to our work in ${suburb}. Terraces bring cast-iron lacework, rendered parapets, tessellated verandah detail and tall double-hung sashes, all of which are slow hand work. We quote on the detail involved, not on floor area.`
    },
    {
      question: `Does a heritage overlay affect what colours I can use in ${suburb}?`,
      answer: `A heritage overlay can affect your colour choices. Parts of ${suburb} sit within heritage overlays that place conditions on external colour schemes, particularly on street-facing elevations. We recommend checking with Boroondara before committing to an exterior scheme, and we are happy to work to a heritage-appropriate palette.`
    },
    {
      question: `Can you paint the render and ironwork on a ${suburb} terrace?`,
      answer: `Yes. Rendered parapets and facades need cracks cut out and filled, and chalking washed back before a breathable exterior system goes on. Cast-iron lacework and railings are a separate job again — rust treated back to sound metal and primed before enamel, or it lifts within a couple of seasons.`
    },
    {
      question: `Do you also paint the newer townhouses and apartments in ${suburb}?`,
      answer: `Yes. ${suburb} pairs its period streets with contemporary townhouses and apartment developments, and we work across both — including owners-corporation common areas, with the written scope and insurance documentation committees need up front.`
    },
    {
      question: `Do you treat weatherboard homes differently from the rendered terraces in ${suburb}?`,
      answer: `Yes, as different jobs entirely. Weatherboard fails at the board edges and laps first and needs a flexible coating that moves with the timber; render fails through cracking and needs a masonry system that bridges hairline cracks. We assess the substrate before quoting rather than pricing every exterior the same way.`
    },
    {
      question: `Does being close to the Yarra affect how you approach a repaint in ${suburb}?`,
      answer: `Being close to the Yarra can affect the approach. Lower-lying streets nearer the river hold more moisture, and that shows up as damp patches, mould behind gutters or paint lifting where water sits. We check for the actual cause before quoting — if there's a drainage or rising-damp issue contributing, we'll say so, because painting over it without fixing the source only buys a year or two.`
    }
  ];


  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Hawthorn Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Hawthorn — Victorian terraces and Federation homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Kew", link: "/painter-kew" },
        { name: "Armadale", link: "/painter-armadale" },
      ]}
      localExpertise={`We understand ${suburb}'s stunning period architecture — from the grand Victorian terraces and Federation homes lining Grace Park and the Yarra-side streets to the contemporary townhouses and apartments around Glenferrie Road and Burwood Road. Our team has deep experience with heritage preparation, period colour schemes and premium finishes that enhance ${suburb}'s beautiful streetscapes.`}
      propertyTypes={`${suburb}'s Victorian terraces, Federation homes, Edwardian residences, renovated period properties, modern townhouses and apartment buildings across ${suburb} and Hawthorn East.`}
      localContent={[
        {
          heading: `House Painters Serving Hawthorn and Hawthorn East`,
          body: [
            `${suburb} is one of Melbourne's most beautiful inner-eastern suburbs, famous for its grand Victorian terraces, Federation homes and leafy streets running down to the Yarra. Jetblack Painting provides the detailed, high-quality painting these historic homes deserve — alongside sharp modern finishes for ${suburb}'s contemporary townhouses and apartments.`,
            `Every ${suburb} project starts with proper preparation and a clear, honest quote. Whether you're restoring an ornate terrace façade on a Grace Park street, refreshing a modern interior in Hawthorn East or updating a classic bungalow, our team delivers sharp lines, durable coatings and a professional result with minimal disruption to your home.`,
          ],
        },
        {
          heading: `Heritage Restoration and Period Home Painting in ${suburb}`,
          body: [
            `${suburb}'s period architecture rewards careful, experienced work. We handle the specifics of Victorian and Federation homes — lead-paint-safe preparation, detailed restoration of timber fretwork and cast-iron lacework, and heritage-appropriate colour schemes that suit both the property's era and any local heritage overlay. Done properly, the finish protects the home's character and its considerable value.`,
            `For ${suburb}'s modern properties and renovations, we use premium Dulux and Taubmans systems for crisp, long-lasting interiors and weather-resistant exteriors built for Melbourne's conditions. Whatever the era, the standard stays the same: meticulous preparation, premium coatings, and a finish applied by a team that respects your property.`,
          ],
        },
        {
          heading: `Weatherboard and Federation Homes Beyond Grace Park`,
          body: [
            `Not every ${suburb} street is Victorian terrace and render. Move away from Grace Park and the immediate Yarra-side streets and there's a real run of Federation-era weatherboard homes, particularly through the streets east toward Auburn and Camberwell — different substrate, different failure pattern. Weatherboards fail at the board edges and laps first, not across the face, so preparation means scraping and priming those edges specifically rather than a blanket sand of the whole wall.`,
            `We treat weatherboard and render as genuinely different jobs rather than one painting service applied to both. Timber gets flexible, breathable coatings that move with the board as it expands and contracts; render gets a masonry system that seals and bridges hairline cracking. Using the wrong system on either substrate is the most common cause of an exterior repaint failing early.`,
          ],
        },
        {
          heading: `Moisture and Damp Near the Yarra`,
          body: [
            `The streets running down toward the river sit lower and hold more moisture than the higher parts of ${suburb}, and that shows up in exterior paint failing faster — persistent damp at the base of walls, mould behind gutters, coatings lifting where water sits rather than draining. Before quoting a repaint on a property in this zone we check for the actual cause rather than just painting over the symptom.`,
            `Where rising damp or a drainage issue is contributing, painting over it without addressing the source just buys a year or two before it happens again. We'll say so plainly at the quote stage — sometimes the honest advice is to fix the water problem first and repaint once the wall has had a chance to dry out.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
