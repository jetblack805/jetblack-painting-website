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
      question: `What types of homes do you paint in Highett?`,
      answer: `Highett has a solid mix of post-war brick homes, 1960s–1980s residences and a growing number of townhouses and knock-down rebuilds. We're experienced across all of these — from preparing original face-brick and weatherboard on older homes to delivering sharp, clean finishes on new renders and modern cladding systems. The right preparation approach varies significantly by substrate and age of the home, and we assess each property before quoting.`
    },
    {
      question: `Do you do exterior repaints in Highett?`,
      answer: `Yes. Exterior repaints are a core part of what we do. For Highett homes we inspect the current paint condition, check for adhesion failure, chalking, efflorescence or surface contamination, then prepare accordingly — washing down, patching, sanding and priming — before applying a premium exterior acrylic topcoat. All exterior work is covered by our 5-year written guarantee and $10M public liability insurance.`
    },
    {
      question: `How do I get a painting quote in Highett?`,
      answer: `Call 0432 077 782 or use the quote form on this page. We'll arrange an on-site inspection at a time that suits you — we don't estimate without seeing the property. After the inspection you'll receive a detailed written quote covering the full scope, product specification and price. No call centres, no surprises — you deal with the painter directly from quote to final sign-off.`
    },
    {
      question: `Do you paint townhouses and units for owners corporations in ${suburb}?`,
      answer: `Yes, and ${suburb} has a lot of them. The suburb has taken on a great deal of medium-density housing, and the common property in those developments — entry lobbies, stairwells, balcony soffits, garage undercrofts, boundary and dividing fences — wears far faster than the inside of any single unit. We quote owners corporation work with the scope itemised line by line so a committee can actually read it, stage the work so residents keep access to entries and parking throughout, and carry $10 million public liability cover across the whole site.`
    },
    {
      question: `What usually fails first on a ${suburb} exterior?`,
      answer: `On the 1960s to 1980s homes that make up much of ${suburb}, it is almost always the timber before the walls. Fascia boards, barge boards, eaves linings and window joinery on the north and west elevations get the hardest sun and go first — the paint chalks, then cracks, then lets water into the end grain. The brickwork below can still look perfectly serviceable while that timber is well past due. It is worth booking an inspection when you notice the eaves rather than waiting for the walls, because replacing rotted fascia costs considerably more than repainting sound timber would have.`
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
      localExpertise={`Highett sits in Melbourne's Bayside council area, bordered by Cheltenham to the east, Moorabbin to the south and Hampton to the west. It's a well-established suburb with a broad housing stock — post-war brick homes, 1970s–1980s residences and a steady influx of townhouse development as the suburb attracts young families and renovators. We work throughout Highett and the surrounding Bayside and Kingston areas regularly.`}
      propertyTypes={`Highett's housing stock ranges from post-war brick homes and 1960s–1980s residences to modern townhouses and renovation projects — all benefiting from proper preparation and quality coating systems.`}
      localContent={[
        {
          heading: "Painters in Highett for Brick Homes and Renovations",
          body: [
            "Highett is a practical, well-connected suburb with a housing stock that rewards good maintenance. The older brick homes that make up much of the suburb's character require painters who understand how to handle face-brick and render properly — not every surface can be painted without preparation, and the wrong primer on the wrong substrate leads to adhesion failure within a year or two. We inspect every property before quoting and identify exactly what the surface needs before we touch a brush.",
            "Jetblack Painting works throughout Highett and the broader Bayside area. We use premium Dulux and Taubmans products, prepare every surface correctly, and back the job with a 5-year written guarantee. Call Jimmy on 0432 077 782 to book an inspection.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Highett Homes",
          body: [
            "Interior painting in Highett typically covers a mix of original plaster in older homes and gyprock in renovated sections and extensions. We work with all surface types — ceilings, walls, timber joinery, built-ins, doors and trims — using the correct sheen for each application. We schedule around your household and leave the property clean on completion.",
            "Exterior repaints in Highett require attention to surface condition before anything else. We wash, patch, sand and prime before topcoating with a premium exterior acrylic or elastomeric system rated for Melbourne's UV and seasonal weather variation. Every exterior job is backed by our 5-year written guarantee.",
          ],
        },
        {
          heading: "Townhouse, Unit and Common Property Painting in Highett",
          body: [
            "Few suburbs in the area have changed shape as quickly as Highett. Streets that held a single post-war house per block now hold two, three or four townhouses, and that shift changes what painting work the suburb actually needs. Common property is the part owners tend to notice last and the part that ages fastest — stairwells and entry lobbies that take daily traffic, balcony soffits that trap moisture, garage undercrofts, and the long runs of boundary fence and render between developments.",
            "We quote this work the way a committee needs to read it: itemised by area, with the preparation spelled out rather than buried in a single lump sum, so it can be compared properly and taken to a vote without guesswork. Work is staged to keep entries, letterboxes and car parks usable while it runs, and the whole site sits under our $10 million public liability cover.",
          ],
        },
        {
          heading: "What the 1960s to 1980s Housing Stock Needs",
          body: [
            "The bulk of Highett's homes date from a period with a very consistent build recipe — brick or brick veneer walls, timber fascia and eaves, aluminium window frames and a tiled roof. Each of those ages at a different rate, and a repaint that treats them as one surface will fail unevenly. The brick is usually the least of the problem. The timber is the priority, and on any elevation facing north or west it is generally the reason the house has started to look tired.",
            "Where render has been added during a renovation — a very common update on these homes — it introduces a third substrate with its own requirements, and joining new render to original brickwork is where cracking tends to reappear if the preparation was rushed. We identify each substrate at the inspection and specify the primer and topcoat system for each one rather than applying a single product across the lot. That specification goes into the written quote, so you can see exactly what is going on which surface.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
