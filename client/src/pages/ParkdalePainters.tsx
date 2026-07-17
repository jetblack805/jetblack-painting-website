import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ParkdalePainters() {
  const suburb = "Parkdale";
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
    "description": `Jetblack Painting provides professional interior, exterior and commercial painting services in ${suburb}. Specialist coastal home painters with a 5-year written guarantee.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-parkdale/`
    }
  };

  const faqs = [
    {
      question: `What's the best exterior paint for coastal homes in Parkdale?`,
      answer: `For Parkdale's coastal environment, we use premium flexible exterior systems from Dulux and Taubmans — specifically products rated for salt air exposure such as Dulux Weathershield and Taubmans Endure Exterior. These are combined with a proper preparation process including pressure washing to remove salt deposits, spot priming and flexible caulking. This ensures the finish stays intact against Port Phillip Bay's salt air, UV and damp winters.`
    },
    {
      question: `Do you offer free quotes for painting in Parkdale?`,
      answer: `Yes — all quotes are free, written and obligation-free. Owner Jimmy Demirci visits every Parkdale property personally to assess the scope of work and provide a detailed fixed-price quote. Call 0432 077 782 or email jimmy@jetblackpainting.com to arrange a time.`
    },
    {
      question: `How long does exterior house painting take in Parkdale?`,
      answer: `Most Parkdale exterior repaints take between 3 and 7 working days, depending on the size of the home, the number of storeys and the extent of preparation required. Single-storey weatherboard or brick veneer homes typically take 3–4 days. We provide a clear timeline in every quote so you know exactly what to expect.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Parkdale Painters | Coastal House Painting Specialists | Jetblack Painting"
      description={`Trusted house painters in ${suburb}. Specialist interior, exterior and coastal painting for Bayside homes. Locally based, fully insured, 5-year guarantee. Free quotes — call 0432 077 782.`}
      neighbouringSuburbs={[
        { name: "Mentone", link: "/painter-mentone" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Cheltenham", link: "/painter-cheltenham" },
        { name: "Sandringham", link: "/painter-sandringham" },
        { name: "Kingston", link: "/painter-kingston" },
      ]}
      localExpertise={`Parkdale is a beachside suburb in the City of Kingston, nestled between Mentone and Mordialloc along the Port Phillip Bay foreshore. As painters based in Mordialloc — right next door — Jetblack Painting works across Parkdale regularly. We're familiar with the suburb's classic Californian bungalows, weatherboard beach houses and 1960s brick veneer homes, and we know exactly what coatings and preparation these surfaces need to handle the coastal climate.`}
      propertyTypes={`Parkdale has a distinctive mix of period bungalows, weatherboard beach houses, brick veneer family homes and newer townhouses. Each property type needs a different painting approach — we tailor our systems accordingly, from flexible membrane coatings on rendered surfaces to premium timber systems for weatherboard, and heritage-appropriate colour schemes for period homes.`}
      localContent={[
        {
          heading: "House Painters Based Next Door to Parkdale",
          body: [
            "Jetblack Painting is based in Mordialloc — literally the next suburb along the bay from Parkdale. That means fast response times, no call-out fees and a team that genuinely knows the local area. Owner Jimmy Demirci has been painting homes in Parkdale and across Bayside since 2011, and he personally visits every job to assess the work and provide a written quote.",
            "We've worked on all types of Parkdale properties — from the classic weatherboard beach houses on the streets close to the foreshore, to the brick veneer family homes further back from the beach and the more modern townhouse developments. Whatever your home needs, we've seen it before and we know how to do it right.",
          ],
        },
        {
          heading: "Coastal Painting Protection for Parkdale Homes",
          body: [
            "Homes near Port Phillip Bay face a harsher environment than inland properties. Salt air, high UV and damp coastal winters accelerate paint degradation — peeling, blistering and fading are all common on homes that weren't painted with the right preparation or the right products. We counter this with a thorough salt-washing process, flexible primers, and premium topcoats specifically rated for coastal exposure.",
            "All our work comes with a 5-year written workmanship guarantee and is covered by $10M public liability insurance. If something isn't right, we'll fix it — that's Jimmy's personal promise on every Parkdale job. Call 0432 077 782 for your free written quote.",
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
