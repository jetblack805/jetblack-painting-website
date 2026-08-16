import SuburbPageTemplate from "@/components/SuburbPageTemplate";

const suburb = "St Kilda";

const faqs = [
  {
    question: `What types of properties do you paint in ${suburb}?`,
    answer: `${suburb} has one of Melbourne's most varied housing stocks — Victorian terraces and cottages, Art Deco apartment blocks, Edwardian homes, and modern high-rise units. We work across all of them, from single-room refreshes in heritage apartments to full exterior repaints of multi-storey Art Deco buildings on streets like Fitzroy Street and The Esplanade. Every project gets a scope tailored to the building type and finish required.`
  },
  {
    question: `Do you paint investment properties and rental apartments in ${suburb}?`,
    answer: `Yes — a large portion of our ${suburb} work is for landlords and property investors. We understand the priorities: neutral, durable finishes that appeal broadly to tenants, minimal disruption during tenancy changeovers, and fast turnarounds to minimise vacancy time. We can coordinate around tenant schedules and provide condition-report quality results to support property management.`
  },
  {
    question: `How does the coastal environment near ${suburb} affect exterior painting?`,
    answer: `${suburb}'s foreshore position on Port Phillip Bay means salt air is a real factor for exterior coatings. We use premium exterior paints with proven salt-air resistance and ensure thorough surface preparation — washing off salt deposits and treating any existing corrosion or chalking before applying fresh coats. Done correctly, a quality exterior repaint in ${suburb} will hold for 8–12 years.`
  },
  {
    question: `Can you provide a free quote for painting in ${suburb}?`,
    answer: `Yes. We offer free, no-obligation on-site quotes across ${suburb} and all surrounding areas. Jimmy will inspect the property, walk through your colour and finish preferences, and provide a detailed written quote. Call 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Jetblack Painting",
  "description": `Professional painters serving ${suburb} — specialist in Art Deco apartments, Victorian terraces, and coastal rental properties.`,
  "telephone": "0432077782",
  "email": "jimmy@jetblackpainting.com",
  "url": "https://jetblackpainting.com",
  "areaServed": {
    "@type": "Place",
    "name": `${suburb}, VIC`
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Mordialloc",
    "addressRegion": "VIC",
    "postalCode": "3195",
    "addressCountry": "AU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -38.0131,
    "longitude": 145.0965
  }
};

export default function StKildaPainters() {
  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="St Kilda Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in St Kilda — Edwardian terraces and weatherboard cottages. Free quotes, 5-year guarantee. Call 0432 077 782."
      localExpertise={`${suburb} is one of Melbourne's most iconic inner-south suburbs — famous for its Art Deco apartment blocks, Victorian terraces, Acland Street café strip, and the Port Phillip Bay foreshore. The suburb's housing stock spans everything from single-fronted Victorian cottages on side streets to grand multi-storey Art Deco buildings facing the bay, along with a large share of modern and converted apartments. Jetblack Painting works across the full range of ${suburb} property types, with particular expertise in the surface preparation and heritage-compatible finishes that period buildings demand.`}
      propertyTypes={`${suburb} is dominated by Art Deco apartment blocks — many heritage-listed or in heritage overlay zones — alongside Victorian and Edwardian terraces, weatherboard cottages, and a growing number of modern apartments. The suburb also has a high proportion of investor-owned and rental properties. Our work here covers interior and exterior repaints of all building types, from single apartments to entire apartment block exteriors, with finishes that respect the character of each building.`}
      localContent={[
        {
          heading: `Art Deco & Period Building Specialists`,
          body: `Many of ${suburb}'s most-loved buildings are heritage Art Deco apartment blocks along Marine Parade, Barkly Street, and Grey Street. These buildings require careful colour selection — often working within heritage overlay guidelines — and surface preparation suited to the original render and masonry construction. We have extensive experience with these properties and can advise on appropriate period-compatible palettes and durable exterior coating systems.`
        },
        {
          heading: `Investment & Rental Property Painting`,
          body: `With ${suburb}'s high rental density and active property market, many of our clients are landlords, property managers, and investors preparing properties for lease or sale. We offer fast, professionally finished interior repaints with low-VOC paints, neutral palettes that photograph well for listings, and scheduling that accommodates tenancy changeovers. We also carry $10M public liability insurance and provide a 5-year written workmanship guarantee on all painting work.`
        }
      ]}
      neighbouringSuburbs={[
        { name: "Windsor", link: "/painter-windsor" },
        { name: "South Melbourne", link: "/painter-south-melbourne" },
        { name: "Elwood", link: "/painter-elwood" },
        { name: "Prahran", link: "/painter-prahran" },
        { name: "South Yarra", link: "/painter-south-yarra" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Elsternwick", link: "/painter-elsternwick" }
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
