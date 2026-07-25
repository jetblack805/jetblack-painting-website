import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function StonningtonPainters() {
  const suburb = "Stonnington";
  const faqs = [
    {
      question: `Do you paint heritage and period homes across ${suburb}?`,
      answer: `Yes. The City of ${suburb} takes in some of Melbourne's finest period architecture — grand Victorian and Edwardian mansions in Toorak, elegant terraces in South Yarra and Prahran, and beautifully detailed Federation homes in Malvern and Armadale. We're experienced with lead-paint-safe preparation, timber and ornamental restoration, and heritage-appropriate colour schemes that protect these homes' character and considerable value.`
    },
    {
      question: `Can you paint luxury apartments and townhouses in ${suburb}?`,
      answer: `Yes. Contemporary ${suburb} properties — high-end apartments, architect-designed townhouses, and premium renovations — demand seamless, crisp finishes that match the quality of the build. We use premium Dulux and Taubmans systems for interiors that look and feel like they belong in these homes.`
    },
    {
      question: `Do you offer free quotes across the ${suburb} area?`,
      answer: `Yes. We provide free, no-obligation written quotes across the City of ${suburb} — including Toorak, Malvern, Armadale, South Yarra and Prahran — with the full scope and preparation detailed up front. Call Jimmy on 0432 077 782 or submit a request online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Stonnington Painters | Heritage Homes | Jetblack Painting"
      description="Heritage and period home painters in Stonnington — Victorian, Edwardian mansions and Federation homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Armadale", link: "/painter-armadale" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "South Yarra", link: "/painter-south-yarra" },
      ]}
      localExpertise={`The City of ${suburb} sets the benchmark for Melbourne real estate — from grand Victorian mansions in Toorak to elegant period terraces in South Yarra and architect-designed contemporary homes in Malvern. We deliver the meticulous, detail-focused painting these properties demand, with preparation and finishes that match the standard of the home.`}
      propertyTypes={`${suburb}'s Victorian and Edwardian mansions, Federation homes, Edwardian terraces, luxury apartments, townhouses and architect-designed contemporary residences across Toorak, Malvern, Armadale, South Yarra and Prahran.`}
      localContent={[
        {
          heading: `Premium House Painters Across the City of Stonnington`,
          body: [
            `The City of ${suburb} takes in some of Melbourne's most prestigious addresses — Toorak, Malvern, Armadale, South Yarra and Prahran — where grand period homes and high-end contemporary residences sit along leafy, heritage-listed streets. Jetblack Painting delivers the meticulous, high-end painting these homes demand, right across the ${suburb} area.`,
            `Every ${suburb} project comes with a detailed written quote and thorough preparation from a discreet, professional team. From heritage mansions to designer interiors, townhouses and luxury apartments, we deliver refined finishes, durable coatings and a clean, respectful result on some of Melbourne's most valuable homes.`,
          ],
        },
        {
          heading: `Heritage and Luxury Home Painting in ${suburb}`,
          body: [
            `${suburb}'s period homes carry fine detailing — decorative render, timber fretwork, cast-iron lacework and ornate ceilings — that reward meticulous work. We handle lead-paint-safe preparation, careful restoration of original features and heritage-sympathetic colour schemes so these valuable homes keep their character intact. Done properly, heritage painting protects both the aesthetic and the long-term value of the property.`,
            `For ${suburb}'s contemporary and architect-designed residences, we deliver the seamless modern finishes designer homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors. Whichever era the home belongs to, the standard stays the same: immaculate preparation and a finish that holds up for years.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
