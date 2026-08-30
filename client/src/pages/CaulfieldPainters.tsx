import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CaulfieldPainters() {
  const suburb = "Caulfield";
  const faqs = [
    {
      question: `Do you paint Edwardian and interwar homes in ${suburb}?`,
      answer: `Yes — those are a signature of ${suburb}. Edwardian and interwar houses carry leadlight surrounds, deep timber fascias, fretwork and wide verandah beams, which is careful hand-cut preparation and cutting-in rather than roller work. We price on that detail rather than on square metres.`
    },
    {
      question: `Does traffic grime on Hawthorn Road or Glen Huntly Road affect paintwork?`,
      answer: `Traffic grime does affect paintwork. Facades fronting the busier ${suburb} arterials pick up a film of traffic grime and exhaust residue that ordinary rain does not shift. Painting over it stops the new coating bonding properly, so those elevations get a proper wash-down and, where needed, a sugar-soap clean before any primer goes on.`
    },
    {
      question: `Do you paint apartment blocks and common areas in ${suburb}?`,
      answer: `Yes. ${suburb} has a large number of apartment and unit developments, and we handle owners-corporation work — lobbies, corridors, stairwells, car parks and facades — with detailed written scopes, insurance certificates and staging that keeps resident access open throughout.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free written quotes across ${suburb}, with the preparation, products and number of coats itemised so you can compare against other quotes properly. Call Jimmy on 0432 077 782.`
    },
    {
      question: `Why would a rendered period home need a different paint system?`,
      answer: `Because a lot of ${suburb}'s period housing is solid masonry rather than brick veneer, and solid walls release moisture back out through the surface. A hard, non-breathable coating traps it, and the paint is pushed off in patches low on the wall. Breathable systems let the wall do what it was built to do.`
    },
    {
      question: `Do you work with owners corporations on ${suburb} apartment blocks?`,
      answer: `Yes. Common property around the station and the racecourse is a regular part of our work. We quote it with a written scope a committee can read and compare, and we stage the job around residents — one stairwell at a time, notice before we start, and equipment packed down at the end of each day.`
    }
  ];


  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Caulfield Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Caulfield — Edwardian terraces and interwar homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Malvern East", link: "/painter-malvern-east" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Highett", link: "/painter-highett" },
        { name: "Elsternwick", link: "/painter-elsternwick" },
        { name: "McKinnon", link: "/painter-mckinnon" },
      ]}
      localExpertise={`Jetblack Painting understands ${suburb}'s diverse housing stock — from the Edwardian terraces and interwar homes around Hawthorn Road and Glen Huntly Road to the post-war brick homes and modern apartments that make up ${suburb}'s broader residential mix. We tailor our preparation and coating systems to the property type every time.`}
      propertyTypes={`${suburb}'s Edwardian terraces, interwar homes, post-war brick properties, modern units and apartment buildings across Caulfield, Caulfield North and Caulfield South.`}
      localContent={[
        {
          heading: `House Painters Serving Caulfield, Caulfield North and Caulfield South`,
          body: [
            `${suburb} is a well-connected inner-south-east suburb known for its mix of Edwardian and interwar streetscapes, the Caulfield Racecourse precinct and popular shopping strips along Glen Huntly Road and Hawthorn Road. Jetblack Painting delivers premium interior and exterior painting across ${suburb} — careful preparation, sharp execution and durable results every time.`,
            `Whether you're refreshing the exterior of a classic period home, repainting a modern townhouse interior or updating cabinetry in a Caulfield apartment, we bring the same detailed approach to every project. Our written quotes lay out the full scope and preparation clearly before work starts, and our team keeps your property clean and tidy throughout.`,
          ],
        },
        {
          heading: `Period Home and Modern Apartment Painting in ${suburb}`,
          body: [
            `${suburb}'s Edwardian and interwar homes need proper preparation to maintain their character and protect their value — crack filling on rendered surfaces, bare timber priming, careful colour choices that suit the era and the street. We handle all of this as part of our standard approach, not as an afterthought.`,
            `For ${suburb}'s modern townhouses and apartment buildings, including body corporate and strata repaints, we deliver clean contemporary finishes using premium Dulux and Taubmans systems rated for Melbourne's conditions. Projects are scoped clearly, communicated throughout and completed to a standard that lasts.`,
          ],
        },
        {
          heading: `Solid Brick, Render, and Why Breathability Matters Here`,
          body: [
            `A good deal of ${suburb}'s period housing is solid masonry rather than brick veneer — double brick, frequently rendered, built before cavity construction became the norm. Solid walls handle moisture differently to modern ones. They take water up and release it back out through the surface, which means whatever sits on that surface has to let vapour through.`,
            `Seal a solid wall with a hard, non-breathable film and the moisture still finds its way in but can no longer get out. It gathers behind the coating and pushes it off, usually in patches low on the wall where the damp settles. On rendered period homes here we specify breathable systems for that reason, and we repair the render itself before coating rather than bridging cracks with paint and hoping they stay shut.`,
          ],
        },
        {
          heading: `Apartment Blocks and Common Property Near the Station`,
          body: [
            `${suburb} carries a dense band of low-rise apartment stock around the station and the racecourse, much of it interwar and post-war walk-ups with shared entries, stairwells and balconies. Common property is a different exercise to a house. The work is scoped for a committee rather than an owner, priced as a whole, and carried out while every resident is still living there.`,
            `That means staging it properly: one stairwell at a time, notice before anything is touched, and equipment that comes down at the end of the day rather than occupying a shared entry for a fortnight. We quote this work with a written scope a committee can actually read, compare against another quote and sign off, without needing anyone to interpret it for them.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
