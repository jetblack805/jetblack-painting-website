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
    />
  );
}
