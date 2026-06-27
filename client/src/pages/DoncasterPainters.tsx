import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DoncasterPainters() {
  const suburb = "Doncaster";

  const faqs = [
    {
      question: "Do you repaint modern homes and townhouses in Doncaster?",
      answer:
        "Yes. We paint contemporary homes, townhouses and apartments with tidy project staging and premium finishes.",
    },
    {
      question: "Can you complete commercial painting in Doncaster?",
      answer:
        "Yes. We handle commercial repainting for retail, office and mixed-use properties with minimal disruption.",
    },
    {
      question: "How quickly can I get a quote in Doncaster?",
      answer:
        "We provide prompt inspections and free written quotes for Doncaster painting projects.",
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Doncaster Painters | Interior & Exterior Repaints | Jetblack Painting"
      description="Local painters in Doncaster for interior, exterior, roof and commercial painting. Professional prep, premium finish, free quote."
      neighbouringSuburbs={[
        { name: "Box Hill", link: "/painter-box-hill" },
        { name: "Templestowe", link: "/painter-templestowe" },
        { name: "Donvale", link: "/painter-donvale" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
      ]}
      localExpertise="Jetblack Painting supports Doncaster homeowners and businesses with preparation-first repainting and consistent workmanship standards."
      propertyTypes="Doncaster includes large family residences, townhouses and commercial sites that each need tailored preparation and coating systems."
      faqs={faqs}
    />
  );
}

