import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ElwoodPainters() {
  const suburb = "Elwood";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": `Professional House Painting Services in ${suburb}`,
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Elwood. Specialists in Victorian, Edwardian and Art Deco home repaints for owner-occupiers in this coastal inner-south suburb on Port Phillip Bay.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `What types of homes do you paint in Elwood?`,
      answer: `Elwood has one of Melbourne's most concentrated collections of Victorian and Edwardian homes alongside a significant stock of 1920s–1940s Art Deco flats and apartments, particularly in the streets between Elwood Beach and the Rippon Lea precinct. We handle all of these: Victorian terrace and cottage exterior repaints with correct masonry and timber preparation, Edwardian home interiors with high ceilings and original cornicing, and Art Deco apartment interiors and exteriors where the period detailing needs to be respected in the colour and finish selection. Each surface type has different preparation requirements and we scope every job properly before quoting.`
    },
    {
      question: `How do you protect Elwood homes from salt air and bay conditions?`,
      answer: `Elwood Beach and the Elwood foreshore are directly on Port Phillip Bay, and the salt air that comes off the water affects paintwork on any property within a few hundred metres of the shore — and to a lesser degree across much of the suburb. We treat every coastal-exposed exterior in Elwood with a thorough pressure wash to remove salt deposits before any coating, flexible primers rated for coastal conditions, and premium topcoats from Dulux Weathershield or Taubmans All Weather with proven salt resistance. Every exterior job in Elwood is backed by our 5-year written workmanship guarantee.`
    },
    {
      question: `Do you offer free quotes in Elwood?`,
      answer: `Yes. We provide free, no-obligation written quotes across Elwood and the surrounding inner-south suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Elwood Painters | Victorian, Edwardian & Art Deco Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for Victorian terraces, Edwardian homes and Art Deco apartments in coastal Elwood. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Elsternwick", link: "/painter-elsternwick" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Prahran", link: "/painter-prahran" },
        { name: "Armadale", link: "/painter-armadale" }
      ]}
      localExpertise={`Jetblack Painting services Elwood as part of our inner-south coastal coverage. Elwood sits between Elsternwick and St Kilda on the Port Phillip Bay foreshore — a compact, affluent suburb with one of Melbourne's finest concentrations of period architecture: Victorian cottages and terraces, Federation homes, Edwardian bungalows, and a significant cluster of Art Deco apartment buildings from the 1920s–1940s. The suburb's bay-facing position means salt air is a real consideration for exterior paintwork, and the owner-occupier demographic expects a high standard of finish and preparation.`}
      propertyTypes={`Elwood's housing spans Victorian cottages and terraces in the older residential streets, Edwardian homes throughout the suburb, and a notable concentration of Art Deco apartments and flats — particularly near the beach and Elwood Canal — alongside some modern infill development.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Elwood`,
          body: [
            `Elwood is one of Melbourne's most architecturally rich inner suburbs — a bay-side enclave between Elsternwick and St Kilda with a dense mix of Victorian cottages, Edwardian homes, Federation houses and Art Deco apartments. The suburb attracts owner-occupiers who care about maintaining the character of their properties, and the combination of period architecture and coastal exposure makes proper paint preparation and product selection critical. Jetblack Painting provides premium interior and exterior painting across Elwood, with a team experienced in both period home requirements and coastal conditions.`,
            `Every Elwood project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's an exterior repaint on a Victorian terrace, a period-sensitive interior refresh on an Edwardian home with original cornicing, or an Art Deco apartment requiring careful attention to the rendered facade and period detailing, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Period Home and Coastal Painting in Elwood`,
          body: [
            `Elwood's Art Deco apartment buildings — concentrated particularly in the streets near Elwood Beach and the canal — have rendered exteriors that need thorough preparation before any topcoat: cleaning, crack filling, flexible primer, then a breathable topcoat that allows the render to move without cracking or trapping moisture. The same applies to rendered Victorian homes throughout the suburb. We include full preparation in every quote with no hidden extras.`,
            `Foreshore and canal-adjacent properties in Elwood are in direct contact with salt air from Port Phillip Bay. We use the same coastal preparation protocol as our work in Brighton, Sandringham and along the full Bayside coastline: pressure washing to remove salt deposits, flexible coastal-rated primers, and salt-resistant topcoats that perform in the marine environment. Getting this right is what separates a coastal repaint that lasts from one that starts failing within two years.`,
          ],
        },
      ]}
    />
  );
}
