import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HighettPainters() {
  const suburb = "Highett";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `House Painting Services in ${suburb}`,
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "name": "Jetblack Painting",
      "telephone": "0432 077 782",
      "url": "https://jetblackpainting.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Mordialloc",
        "postalCode": "3195",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": { "@type": "City", "name": suburb },
    "description": `Jetblack Painting provides premium interior and exterior painting for Highett homes — from post-war brick residences to modern townhouses and renovated family homes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-highett/`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in ${suburb}?`,
      answer: `${suburb} has a solid mix. Post-war brick homes, houses from the 1960s to the 1980s, and a growing number of townhouses and knock-down rebuilds. We work across all of them, from preparing original face-brick and weatherboard on the older homes to clean finishes on new render and modern cladding. The preparation changes a lot depending on the surface and the age of the house, so we look at the property before we quote.`
    },
    {
      question: `Do you do exterior repaints in ${suburb}?`,
      answer: `Yes, they are a core part of what we do. On a ${suburb} home we check the existing paint first. Is it letting go, chalking, showing efflorescence or contamination? Then we prepare to suit: washing down, patching, sanding and priming, before a premium exterior acrylic topcoat. All exterior work carries our 5-year written guarantee and $10 million public liability insurance.`
    },
    {
      question: `How do I get a painting quote in ${suburb}?`,
      answer: `Call 0432 077 782 or use the quote form on this page. We book an on-site inspection at a time that suits you. We do not price a job without seeing it. After the inspection you get a written quote covering the full scope, the products and the price. No call centre. You deal with the painter from the quote through to sign-off.`
    },
    {
      question: `Do you paint townhouses and units for owners corporations in ${suburb}?`,
      answer: `Yes, and ${suburb} has plenty of them. The suburb has taken on a lot of medium-density housing. In those developments the common property wears far faster than the inside of any single unit — entry lobbies, stairwells, balcony soffits, garage undercrofts, boundary and dividing fences. We itemise the scope line by line so a committee can actually read it, stage the work so residents keep access to entries and parking, and carry $10 million public liability cover across the whole site.`
    },
    {
      question: `What usually fails first on a ${suburb} exterior?`,
      answer: `On the 1960s to 1980s homes that make up much of ${suburb}, it is almost always the timber before the walls. Fascia boards, barge boards, eaves linings and window joinery on the north and west elevations get the hardest sun. The paint chalks, then cracks, then lets water into the end grain. The brickwork below can still look fine while that timber is well past due. Book an inspection when you notice the eaves rather than waiting for the walls. Replacing rotted fascia costs considerably more than repainting sound timber would have.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Highett Painters | House & Townhouse | Jetblack Painting"
      description="House painters in Highett — post-war brick homes, 1960s–1980s residences and modern townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hampton East", link: "/painter-hampton-east" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Moorabbin", link: "/painter-moorabbin" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`${suburb} sits in Melbourne's Bayside council area. Cheltenham is to the east, Moorabbin to the south, Hampton to the west. The housing is broad: post-war brick homes, houses from the 1970s and 1980s, and a steady run of townhouse development as young families and renovators move in. We work across ${suburb} and the surrounding Bayside and Kingston areas regularly.`}
      propertyTypes={`Post-war brick homes, houses from the 1960s to the 1980s, modern townhouses and renovation projects. All of them do better with proper preparation and a coating system matched to the surface.`}
      localContent={[
        {
          heading: "Painters in Highett for Brick Homes and Renovations",
          body: [
            "Highett is a practical, well-connected suburb, and its housing rewards good maintenance. Much of it is older brick. That needs a painter who knows what to do with face-brick and render. Not every surface can simply be painted. Put the wrong primer on the wrong surface and the paint lets go within a year or two. So we look at the property before we quote, and work out what each surface needs first.",
            "We work throughout Highett and the wider Bayside area. Premium Dulux and Taubmans products, proper preparation, and a 5-year written guarantee on the job. Call Jimmy on 0432 077 782 to book an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Highett Homes",
          body: [
            "Inside a Highett house you usually find two things at once. Original plaster in the old part, and gyprock in the extension. We handle both, along with ceilings, walls, timber joinery, built-ins, doors and trims. Each gets the right sheen for the job. We work around your household and leave the place clean.",
            "Outside, the condition of the surface decides everything else. We wash, patch, sand and prime before any topcoat goes on. Then a premium exterior acrylic or elastomeric system rated for Melbourne's UV and its swings in weather. Every exterior job carries the 5-year written guarantee.",
          ],
        },
        {
          heading: "Townhouse, Unit and Common Property Painting in Highett",
          body: [
            "Few suburbs nearby have changed shape as fast as Highett. Streets that held one post-war house per block now hold two, three or four townhouses. That changes what painting the suburb actually needs. Common property is the part owners notice last and the part that ages fastest. Stairwells and entry lobbies take daily traffic. Balcony soffits trap moisture. Then there are garage undercrofts, and long runs of boundary fence and render between developments.",
            "We quote this work the way a committee needs to read it. Itemised by area, with the preparation spelled out rather than buried in one lump sum. That way it can be compared properly and taken to a vote without guesswork. Work is staged so entries, letterboxes and car parks stay usable while it runs. The whole site sits under our $10 million public liability cover.",
          ],
        },
        {
          heading: "What the 1960s to 1980s Housing Stock Needs",
          body: [
            "Most Highett homes come from a period with one consistent recipe. Brick or brick veneer walls. Timber fascia and eaves. Aluminium window frames. A tiled roof. Each of those ages at its own rate, so a repaint that treats them as one surface fails unevenly. The brick is usually the least of your problems. The timber is the priority. On any elevation facing north or west, the timber is generally why the house has started to look tired.",
            "Render added during a renovation is common on these homes, and it brings a third surface with its own needs. Where new render meets original brickwork is where cracking tends to come back if the preparation was rushed. We identify each surface at the inspection and specify a primer and topcoat for each one, rather than running a single product over the lot. That specification goes into the written quote, so you can see what is going where.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
