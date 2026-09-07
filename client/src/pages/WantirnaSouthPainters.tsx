import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function WantirnaSouthPainters() {
  const suburb = "Wantirna South";
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Professional House Painting Services in ${suburb}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Jetblack Painting",
      telephone: "0432 077 782",
      url: "https://jetblackpainting.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Mordialloc",
        postalCode: "3195",
        addressRegion: "VIC",
        addressCountry: "AU",
      },
    },
    areaServed: {
      "@type": "City",
      name: suburb,
    },
    description: `Jetblack Painting provides interior, exterior and body corporate painting across Wantirna South, covering both the established brick-veneer homes around Knox Gardens and the townhouse developments infilling behind them.`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}/`,
    },
  };

  const faqs = [
    {
      question: `Do you do body corporate and common-area painting in ${suburb}?`,
      answer: `Yes. A lot of ${suburb} is now townhouse and dual-occupancy development, and those bodies corporate have common property that nobody owns individually — shared driveways and walls, entry structures, letterbox surrounds, fencing and garage door banks. We quote that work in the form a committee can actually put to a vote: itemised scope, staged so access is never fully blocked, and priced as one job rather than as a set of separate ones. See our body corporate painting page for how we handle approvals and scheduling.`,
    },
    {
      question: `Can you paint a townhouse in a shared-driveway development?`,
      answer: `Yes, and the planning matters more than the painting. On a battleaxe or shared-driveway site the neighbours still need to get their cars in and out every day, so we stage the work so the driveway is never closed, keep gear off the common path overnight, and let the other residents know what is happening and when. It is the difference between a job everyone tolerates and one that generates complaints to the committee.`,
    },
    {
      question: `Our home is 1970s brick veneer near Knox Gardens. What actually needs painting?`,
      answer: `On a home of that era, usually only the trim. The brick stays as it is, and the work is fascias, barge boards, eaves and soffits, gutters and downpipes, window frames and sills, the garage door and the front door. Bare or greying timber gets sanded back to a sound edge and primed before any topcoat, because that is the step that decides whether you are repainting again in five years or in twelve.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the wider City of Knox, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Wantirna South Painters | Homes and Townhouses | Jetblack Painting"
      description="House painters in Wantirna South — established brick-veneer homes and newer townhouse developments near Knox City. Free quotes, 5-year guarantee. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Rowville", link: "/painter-rowville" },
        { name: "Glen Waverley", link: "/painter-glen-waverley" },
        { name: "Wheelers Hill", link: "/painter-wheelers-hill" },
        { name: "Ringwood", link: "/painter-ringwood" },
        { name: "Croydon", link: "/painter-croydon" },
        { name: "Box Hill", link: "/painter-box-hill" },
      ]}
      localExpertise={`${suburb} is the City of Knox's commercial centre as well as a residential suburb — Knox City sits inside it, and the Burwood Highway and Stud Road corridors run through it. That has left the suburb with two distinct kinds of painting work in the same streets: the original 1970s and 80s brick-veneer homes around Knox Gardens and Lewis Park, and the townhouses and dual occupancies that have been built in behind them. We quote both, and we do not pretend they are the same job.`}
      propertyTypes={`${suburb}'s 1970s and 80s brick-veneer family homes, larger established houses on the streets toward Wantirna and Vermont South, and the townhouses, dual occupancies and small owners-corporation developments through the Burwood Highway and Stud Road corridors.`}
      localContent={[
        {
          heading: `House Painters Serving Wantirna South`,
          body: [
            `${suburb} sits in the middle of the City of Knox, wrapped around the Knox City centre and cut through by Burwood Highway and Stud Road, with Knox Gardens and Lewis Park giving the residential streets their character. Jetblack Painting works throughout the suburb — interior repaints, full exteriors, fascias and gutters, garage and entry doors, and common-property work for owners corporations.`,
            `Every job comes with a written quote that itemises scope and preparation, premium Dulux and Taubmans systems, and a 5-year written workmanship guarantee. We are fully licensed and carry $10 million in public liability insurance, which matters more here than in most suburbs because so much of the work is on shared property where somebody has to be accountable for it.`,
          ],
        },
        {
          heading: `Original Homes and New Townhouses in the Same Street`,
          body: [
            `The two housing types in ${suburb} fail in completely different ways, and treating them alike is how a repaint goes wrong. On the original brick-veneer homes the brick is inert and the timber trim carries everything — fascias, barge boards, eaves and window frames that have been weathering since the 1970s and need sanding back, priming and rebuilding rather than a coat over the top. On the newer townhouses there is almost no exposed timber at all; the facade is render and lightweight cladding with Colorbond above, and the failure mode is chalking and film breakdown on the sun-facing walls rather than rot.`,
            `The practical difference is where the money goes. On an older home most of the quote is preparation on a relatively small painted area. On a townhouse the painted area is far larger but the preparation is lighter, and the complication is access and coordination rather than substrate. We scope them separately and say plainly which one you have, so the price makes sense against the work rather than against a square-metre rate.`,
          ],
        },
      ]}
      faqs={faqs}
      schema={schema}
    />
  );
}
