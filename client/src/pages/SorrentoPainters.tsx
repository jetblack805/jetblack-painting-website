import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function SorrentoPainters() {
  const suburb = "Sorrento";
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
    "description": `Jetblack Painting provides professional interior and exterior painting services across Sorrento. Specialists in coastal repaints for limestone cottages, weatherboard homes and premium holiday properties near the front and back beaches.`,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://jetblackpainting.com/painter-${suburb.toLowerCase().replace(/\s+/g, "-")}`
    }
  };

  const faqs = [
    {
      question: `Do you paint holiday homes and premium properties in ${suburb}?`,
      answer: `Yes. ${suburb} has one of the Peninsula's highest concentrations of premium holiday homes and architect-designed properties, and this work is core to what we do. Owners here expect preparation and finish that match what the house is worth. So we scope every job in detail, use premium Dulux and Taubmans systems, and work around letting calendars and caretaker access rather than treating a holiday house like a standard job.`
    },
    {
      question: `How do you protect ${suburb} homes from the coastal environment?`,
      answer: `${suburb} sits where Port Phillip Bay meets Bass Strait, so houses here take salt and weather from both the calm front beach and the exposed back beach. We wash every exterior thoroughly to strip the salt film before any coating goes on. Bare timber gets a penetrating oil-based primer. Then flexible, salt-resistant exterior systems built for this level of exposure, not a standard suburban acrylic.`
    },
    {
      question: `Do you paint limestone and heritage cottages in ${suburb}?`,
      answer: `Yes. ${suburb} has a number of original limestone cottages and heritage weatherboard buildings from the town's early history, alongside modern architect-designed homes and everything in between. Limestone and older render need their own preparation. That means testing for what is already on the wall, using breathable products, and paying attention to the pointing and the detail, rather than the system you would use on a modern rendered wall.`
    },
    {
      question: `Does every side of my ${suburb} house need the same paint system?`,
      answer: `Not always, and ${suburb} is one of the few places where it genuinely matters. A wall facing the back beach takes wind-driven spray and airborne sand. The sand abrades the coating as well as salting it. A sheltered wall on the same house is only dealing with settled salt film. So the exposed faces start chalking and losing film while the protected faces still look sound. We walk each elevation separately at the quote and note where one needs a heavier build or an extra coat. That way you are not paying ocean-grade specification on a wall that does not need it, or under-specifying the wall that does.`
    },
    {
      question: `When is the best time of year to repaint a house in ${suburb}?`,
      answer: `For exterior work, autumn and spring usually give the most workable conditions down here. Peninsula winters are wet and windy, and exterior coatings need dry surfaces and sensible temperatures to cure. High summer brings the heat and the town at its busiest. Interiors are the opposite. Winter suits them well, and an empty holiday house between bookings is an easy interior to work in. If what you are asking for would sit better in a different part of the year, we will say so at the quote rather than start work that will not cure properly.`
    },
    {
      question: `Can you work on steep blocks and narrow streets near the beach?`,
      answer: `Yes, but it gets planned rather than improvised. Plenty of ${suburb} blocks fall away steeply toward the water. The older streets near the front beach are narrow, and parking tightens a lot over summer. At the quote we work out where platforms and equipment will stand, how materials reach the site, and whether an exposed elevation needs brushing and rolling instead of spray. On a windy day near the back beach, overspray drifting onto a neighbour's property or a parked car is a real risk, not a theoretical one.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the full Mornington Peninsula and quote across ${suburb} for free, in writing, with no obligation. The full scope and the preparation are itemised up front. Call Jimmy on 0432 077 782 or ask for one online.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Sorrento Painters | Coastal & Heritage | Jetblack Painting"
      description="Coastal house painters in Sorrento — limestone cottages, weatherboard and premium holiday homes near the front and back beach. Free quotes. Call 0432 077 782."
      neighbouringSuburbs={[
        { name: "Rye", link: "/painter-rye" },
        { name: "Safety Beach", link: "/painter-safety-beach" },
        { name: "Dromana", link: "/painter-dromana" },
        { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
        { name: "Mount Martha", link: "/painter-mount-martha" }
      ]}
      localExpertise={`We cover ${suburb} as part of our Mornington Peninsula work. ${suburb} sits at the narrowest point of the Peninsula. The calm front beach on Port Phillip Bay is on one side, the exposed back beach on Bass Strait on the other. That makes it one of the most weather-exposed towns we work in. The housing is just as distinctive: original limestone cottages and heritage buildings from the town's early days, weatherboard beach houses, and a good number of premium architect-designed holiday homes. We match the preparation and the coating to that exposure and that housing, rather than running a standard suburban approach over the top of it.`}
      propertyTypes={`Limestone and heritage cottages, weatherboard beach houses, premium architect-designed holiday homes, and rendered permanent residences near both the front and back beach.`}
      faqs={faqs}
      schema={schema}
      localContent={[
        {
          heading: `House Painters Serving Sorrento`,
          body: [
            `Sorrento is one of the Mornington Peninsula's most exposed and most prestigious towns, sitting where Port Phillip Bay meets Bass Strait. The housing stock reflects that history and standing — original limestone cottages, heritage weatherboard buildings, and a concentration of premium holiday homes that's among the highest on the Peninsula. Jetblack Painting provides premium interior and exterior painting across Sorrento, with preparation and coating systems matched to both the exposure and the standard property owners here expect.`,
            `Every Sorrento project starts with a clear written quote and thorough preparation. Whether it's a full exterior repaint on a weatherboard beach house, a limestone cottage needing careful, breathable products, or an interior refresh on a premium holiday property between lettings, we deliver a finish that holds up to this coastline and a site that's left clean and respected throughout. All work is backed by our $10M public liability insurance and 5-year written workmanship guarantee.`,
          ],
        },
        {
          heading: `Coastal Exposure and Heritage Painting in Sorrento`,
          body: [
            `Sorrento's position at the tip of the Peninsula means properties face salt air and weathering from two directions — the calmer bay side and the far harsher ocean side. We treat every exterior with a thorough wash to remove salt deposits before any coating, spot-prime bare or exposed timber with a penetrating oil-based primer, and finish with flexible, salt-resistant exterior systems built for genuinely exposed coastal conditions, not a standard suburban product.`,
            `Sorrento's limestone cottages and older heritage buildings need their own approach — testing what's already on the surface, using breathable products that won't trap moisture behind the render or stonework, and taking care around original detail and pointing. For the town's premium holiday homes, we work around letting calendars and caretaker access, and use durable, low-maintenance finishes that hold their presentation between guest stays.`,
          ],
        },
        {
          heading: `Why Sorrento's Two Coastlines Need Different Specifications`,
          body: [
            `Most coastal suburbs have one aspect. Sorrento has two, and they fail differently. On the front beach side, salt arrives as a film that settles onto surfaces and sits there working on the coating. On the back beach side, it arrives driven — carried in on wind off Bass Strait along with airborne sand, which abrades the film as well as attacking it chemically. A coating on an exposed back-beach elevation is effectively being weathered and lightly blasted at the same time, and it will not last as long as the identical coating on a sheltered wall of the same house.`,
            `The practical consequence is that elevations on one property age at very different rates. It is common here to find a south-westerly face chalking and losing film while the protected side still looks close to new. We assess each elevation separately and note in the quote where one needs a heavier build or an extra coat, and on later maintenance rounds it can make sense to recoat only the faces that have actually gone rather than the whole exterior. Wind governs application too: on genuinely exposed days spray is not viable, so those elevations get brushed and rolled instead. That is slower, and it belongs in the plan rather than being discovered on the day.`,
          ],
        },
        {
          heading: `Seasons, Access and Getting a Sorrento Job Scheduled Properly`,
          body: [
            `Sorrento changes character across the year more than almost anywhere we work. The town is packed through summer and quiet for much of the rest, and that shapes when painting makes sense. Holiday-home owners generally want exterior work finished before the season rather than running through it, and permanent residents find the quiet months the easiest time to have a house wrapped in drop sheets and platforms. Weather pushes from the other direction — a wet, windy Peninsula winter is no time for exterior coatings — which is why autumn and spring tend to be the useful exterior windows and winter is the sensible time to do interiors.`,
            `Access is the other thing that gets decided before we start rather than on site. Many blocks here fall steeply away toward the water, and the older streets near the front beach are narrow with parking that gets very tight in peak season. Setting up on a sloping coastal block takes thought about where platforms stand, how materials reach the working face, and what the neighbours are living with while it happens. We work that out at the quote so the schedule we give you reflects the site you actually have.`,
          ],
        },
      ]}
    />
  );
}
