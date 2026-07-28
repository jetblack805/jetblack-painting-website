import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SorrentoPainters() {
  const suburb = "Sorrento";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Sorrento. Specialists in coastal repaints for limestone cottages, weatherboard homes and premium holiday properties near the front and back beaches.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint holiday homes and premium properties in Sorrento?`,
      answer: `Yes — Sorrento has one of the Mornington Peninsula's highest concentrations of premium holiday homes and architect-designed properties, and this kind of work is a core part of what we do. Owners here expect a standard of preparation and finish that matches the value of the property, so we scope every job in detail, use premium Dulux and Taubmans systems, and coordinate around letting calendars and caretaker access rather than treating a holiday property like a standard job.`
    },
    {
      question: `How do you protect Sorrento homes from the coastal environment?`,
      answer: `Sorrento sits at the point where Port Phillip Bay meets Bass Strait, so properties here take salt air and weather from both the calm front beach and the exposed back beach. We wash every exterior thoroughly to remove salt film before any coating goes on, prime bare timber with penetrating oil-based primers, and finish with flexible, salt-resistant exterior systems built for this level of coastal exposure — not a standard suburban acrylic.`
    },
    {
      question: `Do you paint limestone and heritage cottages in Sorrento?`,
      answer: `Yes. Sorrento has a number of original limestone cottages and heritage weatherboard buildings dating back to the town's early history, alongside modern architect-designed homes and everything in between. Limestone and older render need their own preparation — testing for existing coatings, appropriate breathable products, and careful attention to pointing and detail — rather than the same system used on modern rendered walls.`
    },
    {
      question: `Do you offer free quotes in Sorrento?`,
      answer: `Yes. We service the full Mornington Peninsula and provide free, no-obligation written quotes across Sorrento with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Sorrento Painters | Coastal & Heritage | Jetblack Painting"
      description="Coastal house painters in Sorrento — limestone cottages, weatherboard and premium holiday homes near the front and back beach. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Rye", link: "/painter-rye" },
        { name: "Safety Beach", link: "/painter-safety-beach" },
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Mount Martha", link: "/painter-mount-martha" }
      ]}
      localExpertise={`Jetblack Painting services Sorrento as part of our Mornington Peninsula coverage. Sorrento sits at the narrowest point of the Peninsula, with the calm front beach on Port Phillip Bay on one side and the exposed back beach on Bass Strait on the other — a combination that makes it one of the most weather-exposed towns we work in. The town's housing is distinctive: original limestone cottages and heritage buildings from Sorrento's early settlement, weatherboard beach houses, and a significant number of premium, architect-designed holiday homes. We tailor preparation and coating systems to this exposure and this housing stock, rather than applying a standard suburban approach.`}
      propertyTypes={`Sorrento's limestone and heritage cottages, weatherboard beach houses, premium architect-designed holiday homes, and rendered permanent residences near both the front and back beach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Sorrento`,
          body: [
            `Sorrento is one of the Mornington Peninsula's most exposed and most prestigious towns, sitting where Port Phillip Bay meets Bass Strait. The housing stock reflects that history and standing — original limestone cottages, heritage weatherboard buildings, and a concentration of premium holiday homes that's among the highest on the Peninsula. Jetblack Painting provides premium interior and exterior painting across Sorrento, with preparation and coating systems matched to both the exposure and the standard property owners here expect.`,
            `Every Sorrento project starts with a clear written quote and thorough preparation. Whether it's a full exterior repaint on a weatherboard beach house, a limestone cottage needing careful, breathable products, or an interior refresh on a premium holiday property between lettings, we deliver a finish that holds up to this coastline and a site that's left clean and respected throughout. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Coastal Exposure and Heritage Painting in Sorrento`,
          body: [
            `Sorrento's position at the tip of the Peninsula means properties face salt air and weathering from two directions — the calmer bay side and the far harsher ocean side. We treat every exterior with a thorough wash to remove salt deposits before any coating, spot-prime bare or exposed timber with a penetrating oil-based primer, and finish with flexible, salt-resistant exterior systems built for genuinely exposed coastal conditions, not a standard suburban product.`,
            `Sorrento's limestone cottages and older heritage buildings need their own approach — testing what's already on the surface, using breathable products that won't trap moisture behind the render or stonework, and taking care around original detail and pointing. For the town's premium holiday homes, we work around letting calendars and caretaker access, and use durable, low-maintenance finishes that hold their presentation between guest stays.`,
          ],
        },
      ]}
    />
  );
}
