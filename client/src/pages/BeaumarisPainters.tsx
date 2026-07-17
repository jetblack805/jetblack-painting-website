import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BeaumarisPainters() {
  const suburb = "Beaumaris";
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
        "addressLocality": "Melbourne",
        "addressRegion": "VIC",
        "addressCountry": "AU"
      }
    },
    "areaServed": { "@type": "City", "name": suburb },
    "description": `Jetblack Painting provides premium interior and exterior painting for Beaumaris homes — from 1960s brick residences to architect-designed coastal properties.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-beaumaris/`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Beaumaris?`,
      answer: `Beaumaris has a distinctive mix of 1960s–1970s architect-designed brick homes, large family residences on generous blocks, and properties closer to the bay with coastal exposure. We're experienced across all of these — from preparing the original face-brick and render on mid-century homes to delivering a crisp, weather-resistant finish on modern renovation projects. Each property gets a tailored approach based on its construction and condition.`
    },
    {
      question: `Do you handle exterior painting for Beaumaris homes near the bay?`,
      answer: `Yes. Coastal proximity means salt air, moisture and UV exposure all work harder on exterior paint films. For Beaumaris homes, we recommend a thorough wash-down and inspection before any coating, treating any efflorescence or surface contamination, and using a premium exterior acrylic or elastomeric system rated for exposed coastal conditions. We carry $10M public liability insurance and back the work with a 5-year written guarantee.`
    },
    {
      question: `How much does it cost to paint a house in Beaumaris?`,
      answer: `Cost depends on property size, number of storeys, surface condition and scope — interior only, exterior only, or both. A typical Beaumaris home exterior repaint ranges from $4,000 to $12,000+, while interior projects vary widely by room count and finish level. We provide a detailed, no-obligation written quote after inspecting the property. Call 0432 077 782 or use the quote form to get started.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Beaumaris Painters | Interior & Exterior House Painting | Jetblack Painting"
      description={`Expert house painters in ${suburb}. Premium interior and exterior painting for Beaumaris's architect homes, coastal residences and family properties. 5-star rated, fully licensed, free quotes.`}
      neighbouringSuburbs={[
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Black Rock", link: "/painter-black-rock" },
        { name: "Highett", link: "/painter-highett" },
      ]}
      localExpertise={`Beaumaris sits on Port Phillip Bay in the Bayside council area, known for its substantial 1960s and 1970s architect-designed homes, generous blocks and tree-lined streets running down towards the foreshore. It's one of Melbourne's most architecturally consistent post-war suburbs, and our team understands the surface preparation and coating systems these brick and render homes require — particularly for exteriors facing the coastal microclimate.`}
      propertyTypes={`Beaumaris property is dominated by mid-century architect-designed homes, generous suburban residences and some newer builds — all benefiting from correct surface preparation and quality coatings to handle the bay-facing exposure.`}
      localContent={[
        {
          heading: "Painters in Beaumaris for Mid-Century and Coastal Homes",
          body: [
            "Beaumaris has one of Melbourne's most cohesive mid-century residential streetscapes. Many of the homes along its tree-lined streets were designed by notable Melbourne architects during the 1960s and 70s — low-profile brick, strong horizontal lines, and generous garden settings. These homes require painters who understand how to work with the materials: face brick that can't be painted carelessly, rendered walls that need the right primer, cedar and hardwood joinery that demands preparation before any topcoat.",
            "Jetblack Painting works throughout Beaumaris and the surrounding Bayside council area. We assess every surface properly — filling gaps, sanding back any existing paint that's lifting or chalking, priming bare surfaces — before any colour goes on. The result is a finish that holds its appearance and protects the home long after the job is done.",
          ],
        },
        {
          heading: "Interior and Exterior Painting for Beaumaris Homes",
          body: [
            "For Beaumaris interiors, we work with all surface types — original plaster ceilings, gyprock, feature walls, timber panelling and joinery. We use premium Dulux and Taubmans products in the correct sheen levels for each room and surface, and we prepare carefully so the finish stays consistent and clean. We work around your schedule to minimise disruption, and we leave the property cleaner than we found it.",
            "Beaumaris exteriors are exposed to salt air from the bay, strong UV in summer and Melbourne's wet winters. A paint system that looks fine at six months can start failing at two years if the prep and product selection aren't right. We use exterior acrylic systems with verified durability ratings, applied over the correct primer for each substrate. Every job is backed by our 5-year written guarantee.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
