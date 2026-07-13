import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function BentleighPainters() {
  return (
    <SuburbPageTemplate
      suburb="Bentleigh"
      description="Professional house painters in Bentleigh, Melbourne. Interior, exterior & commercial painting services. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Keysborough", link: "/keysborough-painters" },
      ]}
      localExpertise="Based locally in nearby Mordialloc, we know Bentleigh's mix of family homes, period properties, and modern townhouses. Our team delivers premium painting results with quick response times and personalised service for all Bentleigh residents."
      propertyTypes="Bentleigh's family homes, period properties, and modern townhouses"
      localContent={[{"heading":"Trusted House Painters Serving Bentleigh","body":["Bentleigh is a popular family suburb in the City of Glen Eira, known for its solid interwar and Californian bungalow homes, the busy Centre Road shopping strip and quiet, tree-lined residential streets. Jetblack Painting provides premium interior and exterior painting across Bentleigh, Bentleigh East and McKinnon, tailoring our preparation and finish to each home's era and materials.","Every Bentleigh project starts with a clear written quote and thorough preparation, carried out by a tidy, reliable local team. Whether it's a full exterior repaint, a fresh interior colour scheme or cabinetry, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your family."]},{"heading":"Bungalow and Family Home Painting in Bentleigh","body":["Bentleigh's interwar homes and Californian bungalows have distinctive rendered surfaces, feature brickwork and timber detailing that benefit from the right preparation — crack filling on render, bare timber priming and careful colour choices that suit the period. We keep these classic homes looking their best with premium, hard-wearing coatings.","For Bentleigh's renovated and modern family homes, we deliver smooth contemporary finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the property, you get considered preparation and a finish designed to last for years."]}]}
      faqs={[{"question":"Do you paint Bentleigh's interwar and bungalow homes?","answer":"Yes. Bentleigh has a large number of interwar and Californian bungalow homes, and we're experienced with their rendered façades, feature brickwork and timber detailing. We use the right preparation and period-sympathetic colours to keep these classic homes looking their best."},{"question":"How long does a house repaint take in Bentleigh?","answer":"Most Bentleigh homes are completed within 5 to 10 working days depending on size and the amount of preparation needed. We provide a detailed timeline with every quote so you know exactly what to expect."},{"question":"Do you offer free quotes in Bentleigh?","answer":"Absolutely. We provide free, no-obligation written quotes for all Bentleigh, Bentleigh East and McKinnon homes, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a visit."}]}
    />
  );
}
