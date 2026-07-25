import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function PattersonLakesPainters() {
  const suburb = "Patterson Lakes";
  const faqs = [
    {
      question: `Do you paint waterfront and canal-estate homes in ${suburb}?`,
      answer: `Yes — ${suburb} is built around its canals and marina, and waterfront homes are a big part of our work here. Homes on the water face constant salt air, humidity and reflected UV, so we use flexible, salt-resistant exterior systems and thorough preparation — washing, priming and sealing — to protect the finish far longer than a standard repaint would last in this environment.`
    },
    {
      question: `What types of properties do you paint in ${suburb}?`,
      answer: `${suburb} has a mix of larger modern brick and rendered homes, double-storey waterfront residences, and townhouses, many with extensive eaves, balconies and timber detailing. We prepare and repaint rendered and brick facades, balconies, eaves and fascias, and refresh interiors with premium systems suited to each surface.`
    },
    {
      question: `Can you repaint before we sell or lease a ${suburb} home?`,
      answer: `Absolutely. A clean, fresh repaint is one of the best-value ways to lift a ${suburb} property before sale or a new tenancy — especially important for waterfront presentation. We work to agent timelines, keep the site tidy, and focus on the surfaces that most affect the look of the home.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. As a local painter based nearby in Mordialloc, we provide free written quotes across ${suburb} with the full scope and preparation clearly included. Call Jimmy on 0432 077 782 or request a quote online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Patterson Lakes Painters | Waterfront House Painting"
      description="Waterfront and coastal house painters in Patterson Lakes — canal-front homes and rendered residences. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Carrum", link: "/painter-carrum" },
        { name: "Bonbeach", link: "/painter-bonbeach" },
        { name: "Chelsea", link: "/painter-chelsea" },
        { name: "Aspendale", link: "/painter-aspendale" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
      ]}
      localExpertise={`We know ${suburb} well — a distinctive waterfront pocket of the City of Kingston built around a network of canals and a marina where the Patterson River meets the bay, a short drive from our Mordialloc base. The suburb's housing is dominated by larger modern brick and rendered homes, many directly on the water with balconies, jetties and extensive eaves. Waterfront living means constant salt air, humidity and reflected UV, so we specify flexible, salt-resistant exterior systems and carry out the thorough washing, priming and sealing that protect these homes properly.`}
      propertyTypes={`${suburb}'s waterfront and canal-front homes, larger modern brick and rendered residences, double-storey homes with balconies and timber detailing, and townhouses across the estate.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: `${suburb} is one of Melbourne's most distinctive waterfront communities — a canal estate in the City of Kingston with a marina, riverfront reserves and homes built to make the most of the water. Jetblack Painting provides premium interior and exterior painting suited to these properties, protecting facades, balconies and eaves against the harsh waterside environment while delivering a beautiful, lasting finish. As a local painter based nearby in Mordialloc, we know the area well, and every project comes with a clear written quote, thorough preparation and a clean, respectful approach on site.`
        },
        {
          heading: `Waterfront Protection & Interior Repaints in ${suburb}`,
          body: `Homes on the water in ${suburb} face salt air, humidity and reflected UV that punish poorly prepared paintwork. We counter that with proper washing, flexible primers and premium salt-resistant topcoats on renders, masonry and timber, so your home's finish holds up far longer than a standard repaint would in this environment. Inside, we deliver flawless interior repaints staged room by room with low-odour premium paints. All work across ${suburb} is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`
        }
      ]}
      faqs={faqs}
    />
  );
}
