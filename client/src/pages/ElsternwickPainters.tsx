import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ElsternwickPainters() {
  const suburb = "Elsternwick";
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
    "areaServed": {
      "@type": "City",
      "name": suburb
    },
    "description": `Jetblack Painting provides premium interior and exterior painting services for Elsternwick's period terraces, Art Deco apartments and contemporary homes.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-elsternwick/`
    }
  };

  const faqs = [
    {
      question: `Do you paint Elsternwick's Art Deco and period homes?`,
      answer: `Yes. Elsternwick has a rich mix of Victorian and Edwardian terraces, Art Deco apartments and inter-war homes — all property types we paint regularly. We understand the specific preparation requirements for older render and timber, and we help clients choose historically appropriate colours that respect the character of their home while still looking fresh and modern.`
    },
    {
      question: `How do you manage painting in Elsternwick apartments and body corporate buildings?`,
      answer: `We work closely with owners corporations and property managers across Elsternwick and Glen Eira council, coordinating access, managing noise and minimising disruption to residents. We carry $10M public liability insurance as required by most strata schemes, and we can work in stages to keep common areas operational throughout the project.`
    },
    {
      question: `What exterior paint systems do you recommend for Elsternwick homes?`,
      answer: `For Elsternwick's rendered brick and solid brick Victorian and Edwardian homes, we typically recommend a premium acrylic or elastomeric system that bridges fine surface cracks and stands up to Melbourne's variable weather. We always wash, scrape, sand and prime before any topcoat — the preparation is what makes the finish last. We can provide a detailed written quote including product specifications.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Elsternwick Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Elsternwick — inter-war bungalows and Art Deco apartment blocks. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Brighton East", link: "/painter-brighton-east" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
      ]}
      localExpertise={`Elsternwick is one of Melbourne's most character-rich inner-southeast suburbs, known for its Victorian terraces, Edwardian homes, gracious Art Deco apartment blocks and inter-war bungalows. Our team has extensive experience across all of these property types — from carefully stripping and repainting timber joinery on a 1910s terrace to delivering a crisp, contemporary finish on a renovated Art Deco flat in the Ripponlea precinct.`}
      propertyTypes={`Elsternwick's property mix includes Victorian and Edwardian terraces on tree-lined streets, inter-war bungalows, Art Deco apartment blocks and a growing number of contemporary townhouses — each requiring a tailored approach to preparation and finish.`}
      localContent={[
        {
          heading: "Painters in Elsternwick for Heritage and Contemporary Properties",
          body: [
            "Elsternwick sits between Caulfield to the east and Brighton to the southwest, with Ripponlea and Gardenvale forming its inner ring. The suburb's streetscapes are a genuine architectural record — Victorian brick terraces sit beside inter-war bungalows, and the Ripponlea precinct is home to some of Melbourne's best-preserved Art Deco apartment buildings. Jetblack Painting works across all of these, bringing the same standard of careful preparation and premium finish to heritage and contemporary properties alike.",
            "For Elsternwick's older homes and flats, that means surface preparation that respects the original fabric — appropriate primers for aged render, careful caulking around timber windows and doors, and colour choices that complement rather than fight against the architecture. For renovations and new builds, it means crisp lines, zero visible joins and a durable finish suited to Melbourne's climate.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Elsternwick Homes",
          body: [
            "Our interior painting service in Elsternwick covers single-room refreshes through to full whole-house repaints, using premium Dulux and Taubmans products in the correct sheen level for each surface. We prepare every surface properly — filling, sanding and priming — before the topcoat goes on, because preparation is what separates a finish that looks good for one year from one that looks good for ten.",
            "Exterior painting in Elsternwick demands even more attention to preparation, especially on the rendered brick and solid masonry homes common to the area. We pressure-wash, strip loose paint, treat any mould or efflorescence, and apply the right primer system before any topcoat. The result is a finish that protects the home and holds its appearance well beyond the industry average — backed by our 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
