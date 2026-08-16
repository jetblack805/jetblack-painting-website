import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KewPainters() {
  const suburb = "Kew";
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
    "description": `Jetblack Painting provides premium interior, exterior, and heritage painting services in Kew. Specializing in Victorian mansion restoration and contemporary home protection.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialize in heritage house painting in Kew?`,
      answer: `Yes, we have extensive experience with Kew's historic properties. We use traditional techniques combined with premium modern paints to restore Victorian and Edwardian homes to their former glory while ensuring they are protected for years to come.`
    },
    {
      question: `What is your process for painting high-value residences in Kew?`,
      answer: `For Kew's prestigious homes, we follow a rigorous preparation process, including thorough cleaning, sanding, and premium priming. we use only the highest quality paints like Dulux and Taubmans to ensure a flawless, luxury finish.`
    },
    {
      question: `Are you familiar with heritage overlays in Kew?`,
      answer: `Absolutely. We understand the requirements of Boroondara Council's heritage overlays and can work with you to ensure your painting project complies with local regulations while achieving your aesthetic goals.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Kew Painters | Heritage & Period Homes | Jetblack Painting"
      description="Heritage and period home painters in Kew — Edwardian mansions and modern architectural requirements. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Balwyn", link: "/painter-balwyn" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Templestowe", link: "/painter-templestowe" }
      ]}
      localExpertise={`As local painting experts serving Kew and the City of Boroondara, we understand the prestige and history of the area. Our team specializes in the meticulous restoration of heritage Victorian and Edwardian homes, ensuring every detail is preserved while using modern, durable paints for a long-lasting finish.`}
      propertyTypes={`Kew's architectural landscape is defined by its grand Victorian and Edwardian mansions, particularly in the Sackville Ward, alongside stunning contemporary residences. We adapt our techniques to suit both historic preservation and modern architectural requirements.`}
      localContent={[
        {
          heading: "Premium House Painters Serving Kew",
          body: [
            "Kew is one of Melbourne's most prestigious inner-eastern suburbs, defined by its grand Victorian and Edwardian mansions, leafy streets and elevated positions overlooking Studley Park and the Yarra. Jetblack Painting delivers the meticulous, high-end painting these homes deserve — from stately heritage residences around Cotham Road and the Sackville Ward to contemporary architect-designed properties throughout Kew and Kew East.",
            "We approach every Kew project as a premium job: detailed preparation, refined finishing and premium coatings selected to suit both historic homes and modern design. Our written quotes are thorough and transparent, and our team works cleanly and discreetly around your home and grounds.",
          ],
        },
        {
          heading: "Heritage Restoration Expertise in Kew",
          body: [
            "Many Kew homes are heritage-significant, and the details matter — period-correct colour schemes, lead-paint-safe preparation on older surfaces, and careful restoration of timber, render and ornamental features. We protect both the character and the substantial value of these grand properties with work that honours the original architecture.",
            "For Kew's contemporary residences, we deliver the seamless modern finishes designer homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors. Whichever era your Kew home belongs to, the standard is the same: immaculate preparation and a finish that lasts.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
