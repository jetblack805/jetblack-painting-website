import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ChelseaPainters() {
  const suburb = "Chelsea";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Specialist coastal painters with 13+ years experience and a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-chelsea/`
    }
  };

  const faqs = [
    {
      question: `How much does house painting cost in Chelsea?`,
      answer: `Most Chelsea homes cost between $3,500 and $9,000 for a full interior repaint and $4,500 to $13,000 for a full exterior, depending on size, storeys and surface condition. Weatherboard beach houses often need extra preparation — filling, sanding and priming bare timber — which affects the price. We provide free, detailed written quotes with no obligation. Call 0432 077 782 or email jimmy@jetblackpainting.com.`
    },
    {
      question: `What's the best paint to use on a weatherboard home in Chelsea?`,
      answer: `For Chelsea's coastal environment, we recommend flexible exterior systems from Dulux and Taubmans — products specifically formulated for salt air and UV exposure, such as Dulux Weathershield. Equally important is the preparation: all bare timber must be sanded, spot-primed and caulked before topcoat goes on. Skipping prep is the main reason weatherboard paint fails prematurely near the bay.`
    },
    {
      question: `Are you a local painter near Chelsea?`,
      answer: `Yes — Jetblack Painting is based in Mordialloc, about 5 minutes from Chelsea. Owner Jimmy Demirci personally visits every job to assess the work and provide a fixed-price written quote. We've been painting homes across Chelsea and the surrounding Kingston area since 2011.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Chelsea Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Chelsea — Californian bungalows to mid-century brick veneer. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Chelsea Heights", link: "/painter-chelsea-heights" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Parkdale", link: "/painter-parkdale" },
        { name: "Kingston", link: "/painter-kingston" },
        { name: "Mentone", link: "/painter-mentone" },
      ]}
      localExpertise={`Chelsea is a coastal suburb in the City of Kingston, sitting right on Port Phillip Bay between Aspendale and Edithvale. As a painting company based in Mordialloc — just a few minutes up the Nepean Highway — Jetblack Painting works across Chelsea regularly. We know the local housing stock well: the classic weatherboard beach houses on streets close to the foreshore, the 1950s and 1960s brick veneer homes further inland, and the newer townhouse developments that have appeared throughout the suburb in recent years.`}
      propertyTypes={`Chelsea's properties range from original weatherboard beach shacks and Californian bungalows to mid-century brick veneer and modern townhouses. Coastal properties here need paint systems designed for the bay environment — the salt air, high UV and damp winters that quickly expose any weaknesses in preparation or product quality.`}
      localContent={[
        {
          heading: "Local Painters Serving Chelsea — Based 5 Minutes Away",
          body: [
            "When you hire Jetblack Painting in Chelsea, you're getting a team that's genuinely local. Our base in Mordialloc means we can visit your property quickly for a quote, get on site promptly when the job starts, and be on hand if anything needs attention. Owner Jimmy Demirci visits every Chelsea job personally — there's no call centre, no unknown subcontractors, just Jimmy and his small team.",
            "We've been painting homes along this stretch of the bay since 2011. From the quiet streets near the Chelsea beach to the homes backing onto the Nepean Highway corridor, we know the local property types and what they need. Whether it's a complete exterior restoration or a fresh interior repaint, we deliver sharp, durable results every time.",
          ],
        },
        {
          heading: "Protecting Chelsea Homes from the Coastal Environment",
          body: [
            "Homes near Port Phillip Bay face conditions that inland properties don't — salt air deposits, intense UV and moisture from the bay all attack paintwork far more aggressively. We see the results of poor preparation on Chelsea homes regularly: peeling weatherboards, chalking render, rust streaks from metal trim. Our approach is built specifically to prevent this.",
            "Every Chelsea exterior job starts with thorough pressure washing to strip salt deposits, followed by careful filling and sanding of any damaged surfaces, bare-timber priming, flexible caulking of all joints, and premium topcoats from Dulux and Taubmans rated for coastal exposure. The extra preparation adds time — but it's what makes the difference between a finish that lasts 3 years and one that lasts 10. All work comes with a 5-year written workmanship guarantee and $10M public liability insurance. Call 0432 077 782 for your free written quote.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
