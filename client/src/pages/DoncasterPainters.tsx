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
      localContent={[{"heading":"Trusted House Painters Serving Doncaster","body":["Doncaster is a popular family suburb in the City of Manningham, known for its elevated outlooks, large homes and the major Westfield Doncaster shopping precinct. Jetblack Painting provides premium interior and exterior painting across Doncaster and Doncaster East, from established brick family homes to the many modern rebuilds and apartments the area is known for.","Every Doncaster project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint, a modern interior scheme or cabinetry, we deliver sharp lines, durable coatings and a clean result with minimal disruption to your home."]},{"heading":"Modern and Family Home Painting in Doncaster","body":["Doncaster has a strong mix of newer rendered homes, established brick residences and apartment developments. We deliver the crisp modern finishes contemporary homes are built around, plus careful preparation and premium coatings for older brick and interwar properties that refresh their look and protect the surface.","Doncaster's hilly, exposed positions mean exteriors take plenty of sun and weather, so we use premium Dulux and Taubmans systems rated for Melbourne conditions. Whatever the property, you get meticulous preparation and a durable finish designed to last for years."]}]}
    />
  );
}

