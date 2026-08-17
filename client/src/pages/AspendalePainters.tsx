import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function AspendalePainters() {
  const suburb = "Aspendale";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Specialist Bayside painters with 13+ years experience and a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-aspendale/`
    }
  };

  const faqs = [
    {
      question: `Who are the best painters in Aspendale?`,
      answer: `Jetblack Painting is the most highly rated local painting company serving Aspendale. Based in nearby Mordialloc, owner Jimmy Demirci has over 13 years of experience painting homes across Aspendale and the surrounding Bayside area. We hold 5-star Google reviews, carry $10M public liability insurance, and back every job with a 5-year written workmanship guarantee.`
    },
    {
      question: `Do you paint interiors and exteriors in Aspendale?`,
      answer: `Yes — we offer a full range of painting services in Aspendale including interior house painting, exterior house painting, roof and fence painting, and kitchen cabinet resurfacing. We also handle commercial painting for local businesses and body corporate projects in the area.`
    },
    {
      question: `How do I get a painting quote in Aspendale?`,
      answer: `Call Jimmy directly on 0432 077 782 or email jimmy@jetblackpainting.com. He'll arrange a time to visit your Aspendale property, assess the work and provide a free, detailed written quote — usually within 24–48 hours of the site visit.`
    },
    {
      question: `Is painting a house on the beach side of the railway different from one further inland?`,
      answer: `Meaningfully, yes. The strip between the Frankston line and the sand takes wind straight off the bay with nothing in the way, so exposure there is far harsher than on streets set back behind the Nepean Highway — and the two ends of Aspendale often need different coating specifications on the same street grid. We scope beachfront elevations separately rather than pricing the whole house as one exposure.`
    },
    {
      question: `Do you cover Aspendale Gardens as well as Aspendale?`,
      answer: `Yes, and we treat them as genuinely different jobs. Aspendale Gardens is a separate, later suburb built inland from the 1980s onward — different housing stock, different era, and enough distance from the water that the coastal specification we use near the beach is often unnecessary there. If you are unsure which side of the line your property falls on, mention the street when you call and we will tell you.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Aspendale Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Aspendale — mid-century brick veneer and contemporary townhouses. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Kingston", link: "/painter-kingston" },
      ]}
      localExpertise={`Aspendale is a quiet coastal suburb in the City of Kingston, bordering Mordialloc on its northern edge. Jetblack Painting is based right in Mordialloc — our home suburb — which makes Aspendale part of our core local area. Jimmy Demirci has been painting Aspendale homes for over 13 years and knows the suburb's weatherboard beach houses, 1950s brick homes and modern townhouses inside out.`}
      propertyTypes={`Aspendale's housing stock is a mix of classic weatherboard homes, mid-century brick veneer, and contemporary townhouses and units — many within a short walk of the beach. Coastal properties here need surface preparation and paint systems designed to handle the bay environment: salt washing, flexible primers and weather-resistant topcoats.`}
      localContent={[
        {
          heading: "Aspendale Painting — Your Local Painter Is in Mordialloc",
          body: [
            "When you hire Jetblack Painting in Aspendale, you're hiring a company that's genuinely local. Our base in Mordialloc is right on your doorstep, so we can respond quickly to quote requests, get on site promptly and deliver results without the delays you might get from a larger company based further away.",
            "Every job in Aspendale is personally managed by owner Jimmy Demirci. He visits the site to scope the work, stays in contact during the project and does the final walkthrough before we leave. You're dealing with the owner from first call to last brushstroke.",
          ],
        },
        {
          heading: "Quality Coastal Painting for Aspendale Homes",
          body: [
            "Salt air, UV and coastal damp are hard on paintwork. We see the results of poor preparation and cheap paint on Aspendale homes regularly — peeling weatherboards, chalking render, rusting metal trim. Our process is built specifically to prevent this: thorough surface preparation, premium flexible primers and topcoats from Dulux and Taubmans, and careful caulking and sealing of all joints.",
            "Every job we do comes with a 5-year written workmanship guarantee and $10M public liability insurance. We treat your Aspendale home with the same care we'd want for our own. Call 0432 077 782 for a free written quote — we're usually on site within a few days.",
          ],
        },
        {
          heading: "The Beach Side of the Railway Line",
          body: [
            "Aspendale is split lengthways by the Frankston railway line and the Nepean Highway, and the difference between the two sides matters more than the short walk between them suggests. On the beach side, houses face the bay across open ground with nothing to break the wind — a mix of original beach cottages, post-war brick, and rebuilds that have gone up on those blocks in recent years. Those elevations wear faster than anything set back behind the highway, and they wear unevenly: the bay-facing wall of a house can be due for attention while the street elevation still looks sound.",
            "We quote those properties by elevation rather than as a single number, because pricing the sheltered side at the same specification as the exposed one either overcharges you or underprepares the wall that actually needed the work. On the inland side the picture is calmer, and a standard exterior system is often entirely appropriate — there is no sense in paying for a marine-grade specification three streets back from the sand.",
          ],
        },
        {
          heading: "Aspendale and Aspendale Gardens Are Not the Same Suburb",
          body: [
            "It is worth being clear about this, because the two names get used interchangeably and they describe quite different places. Aspendale proper runs down to the beach and dates back to the early twentieth century, with housing stock to match. Aspendale Gardens is a later, separate suburb built inland from the 1980s onward — planned estate streets, brick-veneer and rendered homes of that era, and enough distance from the water that salt exposure stops being the governing factor.",
            "Practically, that means a quote for one is not a guide to the other. The preparation a foreshore weatherboard needs is not what a 1990s Gardens home needs, and quoting them the same way does a disservice to both. We work across both and scope each to what the property in front of us actually requires.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
