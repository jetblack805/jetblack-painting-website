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
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
