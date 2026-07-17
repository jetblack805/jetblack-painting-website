import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CarrumPainters() {
  const suburb = "Carrum";
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
    "description": `Jetblack Painting provides premium interior and exterior painting for Carrum homes — a coastal suburb in Melbourne's Kingston council area at the southern end of Port Phillip Bay.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-carrum/`
    }
  };

  const faqs = [
    {
      question: `Do you paint homes in Carrum?`,
      answer: `Yes. Carrum is within our regular Kingston council service area. The suburb has a mix of older timber and brick homes, beach houses and more recent renovations and rebuilds close to the foreshore. We handle interior and exterior painting for all property types in Carrum and the surrounding Kingston coastline suburbs. Call 0432 077 782 or use the quote form to book a free inspection.`
    },
    {
      question: `What exterior painting challenges are specific to Carrum homes?`,
      answer: `Carrum sits at the mouth of Patterson River and directly on Port Phillip Bay — it's one of Melbourne's most exposed coastal locations. Salt air, high moisture and intense UV combine to accelerate exterior paint degradation significantly compared to inland suburbs. For homes in Carrum we specify premium exterior acrylic or elastomeric systems with verified coastal performance, apply them over the correct primer, and ensure thorough preparation including washing and treatment of any salt or efflorescence contamination. Every exterior job is backed by a 5-year written guarantee.`
    },
    {
      question: `Can you paint weatherboard homes in Carrum?`,
      answer: `Yes. Weatherboard homes are common throughout Melbourne's coastal suburbs including Carrum. They require careful assessment of board condition, thorough preparation (sanding, filling joints, treating any open timber or decay), correct primer selection and a flexible exterior topcoat that handles timber's natural movement through seasonal changes. We've painted weatherboard homes throughout the Kingston coastline and understand the preparation they need. Call 0432 077 782 to arrange an inspection.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Carrum Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Premium interior and exterior painting for Carrum's coastal homes and beach houses. Fully licensed, 5-year guarantee, free written quotes.`}
      neighbouringSuburbs={[
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Edithvale", link: "/painter-edithvale" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`Carrum sits at the southern end of Port Phillip Bay where Patterson River meets the bay, making it one of Melbourne's most coastal suburbs in the Kingston council area. It has a distinct character — older timber beach houses, brick family homes and a growing number of renovations and new builds as the suburb attracts buyers seeking waterway and bay access. The coastal and riparian setting creates specific demands for exterior paint systems that we understand well from working throughout this part of the Kingston coastline.`}
      propertyTypes={`Carrum features older beach houses and weatherboard homes alongside brick family residences and modern renovations — all in a highly coastal environment where product selection and surface preparation are paramount.`}
      localContent={[
        {
          heading: "Painters in Carrum for Coastal and Waterway Homes",
          body: [
            "Carrum's position at Patterson River mouth and Port Phillip Bay makes it one of Melbourne's most exposed suburban locations for exterior paint systems. The combination of salt air from the bay, moisture from the river, and Melbourne's UV intensity through summer means a paint system that isn't specified for coastal exposure will fail prematurely. We've worked throughout the Kingston coastline — from Mordialloc to Carrum — and we know what these conditions demand.",
            "Jetblack Painting carries $10M public liability insurance, is fully licensed for residential painting in Victoria, and backs every job with a 5-year written guarantee. We quote on-site after a proper inspection — no rough estimates over the phone. Call Jimmy on 0432 077 782 to arrange a time.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Carrum Homes",
          body: [
            "Interior painting in Carrum covers all residential surface types — plaster and gyprock ceilings and walls, timber joinery, doors, trims and built-ins. We use premium low-VOC Dulux and Taubmans products in the correct sheen levels, schedule around the household, and clean up thoroughly on completion.",
            "Exterior repaints in Carrum require proper preparation as the foundation. We inspect every surface, wash down, treat salt or efflorescence deposits, prime correctly for the substrate, and apply a premium exterior topcoat rated for Melbourne's coastal conditions. The preparation is as important as the topcoat — skipping it leads to early adhesion failure. Every exterior job is backed by a 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
