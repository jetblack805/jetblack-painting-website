import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function GlenIrisPainters() {
  const suburb = "Glen Iris";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Glen Iris. Specialists in Edwardian, interwar and period home repaints for owner-occupiers across Glen Iris and the surrounding Boroondara corridor.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you specialise in painting Edwardian and interwar homes in Glen Iris?`,
      answer: `Yes — Glen Iris has a dense stock of Edwardian and California bungalow-style homes, particularly around Tooronga Road, Gardiners Creek and the streets between High Street and Burke Road. These homes have their own preparation requirements: older lead-containing paint layers need to be dealt with correctly, timber windows and weatherboards need proper priming before topcoating, and original cornicing and period detail needs to be cut in cleanly. We've done a lot of this work across Glen Iris, Hawthorn and Malvern, and we understand what the properties need.`
    },
    {
      question: `Do you handle interior refreshes and pre-sale painting in Glen Iris?`,
      answer: `Yes. Glen Iris has a very active property market and a large proportion of owner-occupiers who repaint before sale to maximise presentation. We work regularly on pre-sale interior refreshes — often focusing on the main living areas, entry and kitchen — as well as full interior repaints. We can advise on neutral colour selections that present well at inspection and work quickly to meet auction campaign timelines. Call Jimmy on 0432 077 782 for a quote and timeline discussion.`
    },
    {
      question: `Do you offer free quotes in Glen Iris?`,
      answer: `Yes. We provide free, no-obligation written quotes across Glen Iris and the surrounding inner-east suburbs, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online — we're usually able to come out and quote within a few days.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Glen Iris Painters | Edwardian & Period Home Specialists | Jetblack Painting"
      description={`Professional house painters in ${suburb}. Interior and exterior painting for Edwardian, interwar and period homes across Glen Iris. Pre-sale and full repaints. Free quotes.`}
      neighbouringSuburbs={[
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Camberwell", link: "/painter-camberwell" },
        { name: "Armadale", link: "/painter-armadale" },
        { name: "Kew", link: "/painter-kew" }
      ]}
      localExpertise={`Jetblack Painting services Glen Iris as part of our broader inner-east coverage. Glen Iris sits between Malvern, Hawthorn and Camberwell — three suburbs where we do a large proportion of our work — and shares the same dominant housing type: Edwardian and interwar period homes that require skilled preparation and careful paint selection. The suburb also has a strong owner-occupier culture and an active property market, which means a high volume of pre-sale repaints and owner-driven interior refreshes.`}
      propertyTypes={`Glen Iris is dominated by Edwardian and California bungalow-era homes, particularly in the streets near Tooronga Road, High Street and the Gardiners Creek corridor, alongside a growing number of contemporary builds and townhouse developments on subdivided blocks — each requiring a different preparation and coating approach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Glen Iris`,
          body: [
            `Glen Iris is a large inner-east suburb with one of Melbourne's strongest concentrations of Edwardian and interwar period homes. The streets around Tooronga Road, Burke Road and the Gardiners Creek corridor are full of California bungalows and Edwardian cottages that are actively maintained and regularly repainted by owner-occupiers who care about the quality of finish. Jetblack Painting provides premium interior and exterior painting across Glen Iris, with a team experienced in the specific demands of period home preparation and coating.`,
            `Every Glen Iris project comes with a clear written quote and thorough preparation from a professional, tidy team. Whether it's a full exterior repaint on a period bungalow, a pre-sale interior refresh to maximise auction presentation, or a contemporary interior scheme for a newer build, we deliver sharp lines, durable coatings and a clean result backed by our 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Period Home and Pre-Sale Painting in Glen Iris`,
          body: [
            `Edwardian and interwar homes in Glen Iris typically have older paint systems that need proper assessment before any new coating goes on. Where lead paint is present in older layers, we follow correct containment and preparation procedures. Timber weatherboards and window frames need thorough cleaning, filling and priming before topcoating, and original period features — cornicing, archways, decorative verge boards — need clean cut-in work to maintain the character of the property.`,
            `Glen Iris has a very active pre-sale painting market. A well-executed interior refresh — neutral colours, clean lines, fresh doors and trims — can make a measurable difference to auction day presentation. We understand the timing pressures of campaign preparation and can scope and complete pre-sale work efficiently without compromising on finish quality.`,
          ],
        },
      ]}
    />
  );
}
