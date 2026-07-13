import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function HamptonPainters() {
  return (
    <SuburbPageTemplate
      suburb="Hampton"
      description="Professional house painters in Hampton, Melbourne. Interior, exterior & commercial painting for coastal homes. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise="We understand Hampton's coastal properties and the unique challenges of bayside painting. From weatherboard cottages to modern beach homes, our team uses weather-resistant coatings that protect against salt air and coastal conditions."
      propertyTypes="Hampton's weatherboard cottages, coastal homes, and modern beach residences"
      localContent={[
        {
          heading: "Bayside House Painters Serving Hampton",
          body: [
            "Hampton is a sought-after Bayside suburb where classic weatherboard cottages, period homes and modern beachside residences sit just back from the water around Hampton Street and the beach. Jetblack Painting provides premium interior and exterior painting built for this coastal setting, protecting Hampton homes against salt air and sun while delivering a beautiful, lasting finish.",
            "As a local Bayside painter based nearby in Mordialloc, we know Hampton's homes and conditions well. Every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site — whether it's a full exterior repaint or a fresh interior colour scheme.",
          ],
        },
        {
          heading: "Coastal Protection and Weatherboard Expertise in Hampton",
          body: [
            "Homes close to the bay in Hampton face constant salt air, UV and damp winters that punish poorly prepared paintwork. We counter that with proper salt washing, flexible exterior primers and premium salt-resistant topcoats, so your Hampton home's finish holds up far longer than a standard repaint would in this environment.",
            "Weatherboard is a Hampton staple, and timber near the coast needs particular care — bare timber priming, careful filling and sharp caulking to keep moisture out. From heritage weatherboard cottages to rendered modern builds, we tailor the paint system to the surface for a durable, flawless result.",
          ],
        },
      ]}
    />
  );
}
