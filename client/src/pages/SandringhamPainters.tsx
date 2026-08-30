import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SandringhamPainters() {
  const suburb = "Sandringham";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
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
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides premium coastal painting services in Sandringham. Specializing in salt-air protection and weatherboard home restoration.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialise in painting weatherboard beach cottages in Sandringham?`,
      answer: `Yes — weatherboard cottages close to Sandringham Beach and the yacht club are a core part of what we do in the area. Coastal timber needs specific care: safe removal of old failing paint, bare-timber priming, careful filling of cracks and gaps, sharp caulking to lock out moisture, and a premium flexible topcoat rated for salt air and UV. Done right, the finish protects the timber and lasts years longer than a standard repaint. Every exterior job is backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `How do you protect Sandringham homes from salt air and coastal conditions?`,
      answer: `Salt air from Port Phillip Bay is a real threat to paintwork along the Sandringham foreshore. We start every coastal job with a thorough pressure wash to remove salt deposits and contaminants before any paint goes on. We then apply premium flexible primers and salt-resistant topcoats from Dulux and Taubmans — products specifically engineered for coastal exposure. Skipping or rushing preparation is why coastal paint jobs fail early; we don't cut corners on it.`
    },
    {
      question: `Do you offer free quotes across Sandringham?`,
      answer: `Yes. We provide free, no-obligation written quotes across Sandringham and the surrounding Bayside area, with the full scope and preparation detailed up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    },
    {
      question: `Does the salt air really change how you paint in ${suburb}?`,
      answer: `It changes the preparation more than the paint. Salt settles on the surface as a fine film, and coating over it bonds the new paint to the salt instead of the substrate, which is why bayside repaints sometimes let go in sheets. Every exterior here gets washed down and rinsed before preparation starts, with the south and west elevations checked hardest.`
    },
    {
      question: `What decides how long a weatherboard exterior lasts near the bay?`,
      answer: `Mostly exposure and preparation rather than the brand on the tin. The elevations facing the water weather fastest, and the board ends and joints go before the faces do because end grain absorbs water. Sealing those ends and using a filler that stays flexible is what buys the extra years.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Sandringham Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Sandringham — Edwardian and interwar homes along Royal Avenue. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Black Rock", link: "/painter-black-rock" },
        { name: "Beaumaris", link: "/painter-beaumaris" },
        { name: "Highett", link: "/painter-highett" },
        { name: "Cheltenham", link: "/painter-cheltenham" }
      ]}
      localExpertise={`Serving the Sandringham community and the wider Bayside coast, Jetblack Painting is based nearby in Mordialloc — close enough that Sandringham is genuinely local territory for us. We know the suburb's weatherboard beach cottages near the foreshore, the Edwardian homes along Royal Avenue, and the coastal conditions that make proper preparation and product choice so important here.`}
      propertyTypes={`Sandringham features classic weatherboard beach cottages near the foreshore, Edwardian and interwar homes along Royal Avenue and the surrounding streets, and modern coastal residences — each requiring a tailored preparation and coating approach for the Bayside environment.`}
      localContent={[
        {
          heading: "Bayside House Painters Serving Sandringham",
          body: [
            "Sandringham is a prized Bayside suburb where classic weatherboard beach cottages, Edwardian homes and modern coastal residences overlook Port Phillip Bay around Sandringham Beach, the yacht club and Royal Avenue. Jetblack Painting provides premium interior and exterior painting built for this seaside setting — protecting Sandringham homes against salt air and sun while delivering a clean, lasting finish.",
            "Based nearby in Mordialloc, we're a genuinely local Bayside painter who knows Sandringham's homes and coastal conditions. Every project comes with a clear written quote, thorough preparation and a tidy, respectful team, whether it's a full exterior repaint or a refreshed interior scheme.",
          ],
        },
        {
          heading: "Coastal Painting and Weatherboard Care in Sandringham",
          body: [
            "Homes near the water in Sandringham are exposed to relentless salt air, UV and damp winters that quickly break down paintwork that hasn't been prepared properly. We use thorough salt washing, flexible primers and premium salt-resistant topcoats so your Sandringham home's finish stays protected and looks sharp for years.",
            "Weatherboard is everywhere along the Sandringham coastline, and coastal timber needs particular attention — bare timber priming, careful filling and sharp caulking to lock out moisture. From heritage beach cottages to rendered modern homes, we match the paint system to the surface for a durable, flawless result.",
          ],
        },
        {
          heading: `What Salt Air Does to a ${suburb} Exterior`,
          body: [
            `${suburb} sits directly on Port Phillip, and the elevations facing the water take salt-laden wind for most of the year. Salt does something specific to paint. It settles as a fine crystalline film, and if it is painted over, the new coating is bonded to the salt rather than to the surface underneath. It lets go early, and it tends to come away in sheets rather than flaking politely.`,
            `The answer is not a more expensive paint. It is a proper wash. Every exterior we do on the bay side is washed down and rinsed before preparation starts, and the south and west elevations get the closest inspection because they take the worst of it. A repaint that skips that step can look immaculate for a season and fail well inside the time it should have lasted.`,
          ],
        },
        {
          heading: `Weatherboard, End Grain and the Joints That Open First`,
          body: [
            `Much of ${suburb}'s older stock is weatherboard — Edwardian homes and Californian bungalows on the streets running back from Beach Road. Timber of that age has moved through a great many summers, and it fails first at the board ends and the joints where two boards meet. That is where end grain is exposed, and end grain drinks water far faster than the face of a board does.`,
            `We seal those ends rather than coating straight over them, and we fill the joints with something that stays flexible instead of a hard filler that cracks the first time the timber moves again. It is slower than running a roller along the wall. It is also most of the difference between a weatherboard exterior that holds for years and one that wants attention again far too soon.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
