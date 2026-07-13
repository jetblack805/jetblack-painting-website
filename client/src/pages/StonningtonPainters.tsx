import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function StonningtonPainters() {
  const suburb = "Stonnington";
  const faqs = [
    {
      question: "Do you service multiple suburbs across Stonnington?",
      answer:
        "Yes. We provide painting services across the Stonnington area, including period homes, apartments, and modern residences requiring premium finishes.",
    },
    {
      question: "Can you help with pre-sale painting in Stonnington?",
      answer:
        "Yes. We deliver practical pre-sale repaint packages focused on presentation, neutral colour updates, and strong first impressions for buyers.",
    },
    {
      question: "What painting services do you offer in Stonnington?",
      answer:
        "We offer interior painting, exterior painting, roof painting, commercial painting and kitchen cabinet resurfacing with free written quotes.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Stonnington Painters | Premium House Painting Services | Jetblack Painting"
      description="Premium painters servicing Stonnington with interior, exterior and pre-sale painting. Clean workmanship, clear quotes, and dependable scheduling."
      neighbouringSuburbs={[
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Armadale", link: "/painter-armadale" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Brighton", link: "/painter-brighton" },
      ]}
      localExpertise="We provide high-quality repainting throughout Stonnington, with strong attention to detailing, careful site protection, and finish standards suited to premium Melbourne homes."
      propertyTypes="Stonnington includes luxury homes, heritage properties, townhouses, and apartments that need considered preparation and tailored coating systems."
      faqs={faqs}
      localContent={[{"heading":"Premium House Painters Across the Stonnington Region","body":["The City of Stonnington takes in some of Melbourne's most prestigious suburbs — Toorak, Malvern, Armadale, South Yarra and Prahran — where grand period homes and high-end contemporary residences sit along leafy, historic streets. Jetblack Painting delivers the meticulous, high-end painting these homes demand, right across the Stonnington area.","Every Stonnington project comes with a detailed written quote and thorough preparation from a discreet, professional team. From heritage mansions to designer interiors, townhouses and apartments, we deliver refined finishes, durable coatings and a clean, respectful result on some of Melbourne's most valuable homes."]},{"heading":"Heritage and Luxury Home Painting in Stonnington","body":["Stonnington's period homes carry fine detailing — decorative render, timber fretwork, cast-iron lacework and ornate ceilings — that reward meticulous work. We handle lead-paint-safe preparation, careful restoration of original features and heritage-sympathetic colour schemes so these valuable homes keep their character intact.","For Stonnington's contemporary and architect-designed residences, we deliver the seamless modern finishes designer homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors. Whichever era the home belongs to, the standard stays immaculate."]}]}
    />
  );
}
