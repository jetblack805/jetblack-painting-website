import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function DromanaPainters() {
  const suburb = "Dromana";
  const faqs = [
    {
      question: `Do you paint beach houses and holiday homes in ${suburb}?`,
      answer: `Yes. ${suburb} is a bayside peninsula town with a mix of permanent homes, beach houses and holiday properties, and they are core to our work here. Weatherboard and fibro beach homes near the foreshore need coastal-grade care. Salt washing, flexible primers, salt-resistant topcoats. That is what holds up against salt air, UV and damp.`
    },
    {
      question: `Can you paint homes on the sloping blocks below Arthurs Seat?`,
      answer: `Yes. A lot of ${suburb} sits on the rise between the foreshore and Arthurs Seat, and a sloping block changes how a job is set up. A single-storey house can still be two storeys of working height at the downhill end. We assess access at the quote and price in the right scaffold or elevated equipment, rather than discovering it on day one.`
    },
    {
      question: `How do you handle older fibro sheeting on ${suburb} beach houses?`,
      answer: `Carefully. Fibro sheeting on older beach houses here can date from the era when asbestos cement was in common use. So we never dry-sand or power-sand fibro of unknown age. It is washed down and hand-prepared using low-disturbance methods. Where there is any doubt about the material, we recommend having it tested before work starts.`
    },
    {
      question: `Can you work around a holiday-rental booking schedule?`,
      answer: `Yes. Plenty of properties here are holiday lets, so we are used to working to a fixed window between bookings, or through the quieter months. Send us your booking calendar with the quote and we will stage the work to fit it. You should not lose peak-season nights to a repaint.`
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We service the Mornington Peninsula and quote across ${suburb} for free, in writing. The coastal preparation, primers and topcoats are itemised, so you can see exactly what the salt-air protection involves. Call Jimmy on 0432 077 782.`
    }
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Dromana Painters | Coastal Painting | Jetblack Painting"
      description="Coastal house painters in Dromana — weatherboard, fibro beach houses and rendered permanent homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`A ${suburb} kitchen resurface and built-in joinery repaint, shown at prep stage — floor protection down and cabinet doors open ready for coating.`}
      projectImages={[
        {
          // Prep-stage shot: floor sheeting and painter's tape are down but the
          // splashback tile, appliances and cabinetry are all still in place
          // and uncoated. No identifying detail in frame — a diffuser, a
          // kettle and a cutlery tray, nothing with a name or address on it.
          src: "/projects/project-dromana-kitchen-before-splashback.webp",
          small: "/projects/project-dromana-kitchen-before-splashback-800.webp",
          width: 1400,
          height: 1867,
          alt: `Kitchen in a ${suburb} home before cabinet resurfacing, with a retro blue and gold tile splashback, timber benchtop and white cabinetry, floor sheeted for protection`,
          caption: `Before the cabinets come off. Every appliance and fitting gets moved and the floor is sheeted and taped off first, because a 2-pack resurface throws overspray and dust well beyond the cabinet carcass itself.`,
        },
        {
          // Same kitchen, wider angle, same prep stage.
          src: "/projects/project-dromana-kitchen-before-wide.webp",
          small: "/projects/project-dromana-kitchen-before-wide-800.webp",
          width: 1400,
          height: 1867,
          alt: `Wider view of a ${suburb} kitchen before resurfacing, showing a leadlight window, blue and gold tile splashback and white cabinetry along two benches`,
          caption: `The same kitchen from the sink end. Leadlight windows and patterned tile like this are original to the house and are staying exactly as they are — the job is the cabinetry, not a gut renovation, so everything around it is masked and protected rather than removed.`,
        },
        {
          // Built-in wall shelving/joinery, different room, same property and
          // job. Cabinet doors open, paint tin and drop sheet visible mid-prep.
          // No identifying detail in the room.
          src: "/projects/project-dromana-builtin-joinery-during.webp",
          small: "/projects/project-dromana-builtin-joinery-during-800.webp",
          width: 1400,
          height: 1867,
          alt: `Long run of built-in wall shelving and cabinetry in a ${suburb} home mid-repaint, with cabinet doors open and a paint tin and drop sheet on the floor`,
          caption: `The same visit covered a full run of built-in shelving in another room. Doors come off their hinges to be coated flat rather than upright, which is the only way to get an even finish without a run or a sag catching the light along an edge this long.`,
        },
      ]}
      neighbouringSuburbs={[
        { name: "Sorrento", link: "/painter-sorrento" },
        { name: "Mount Martha", link: "/painter-mount-martha" },
        { name: "Mornington", link: "/painter-mornington" },
        { name: "Mount Eliza", link: "/painter-mount-eliza" },
        { name: "Frankston", link: "/painter-frankston" },
      ]}
      localExpertise={`We know ${suburb} well. It is a relaxed bayside town on the Mornington Peninsula, sitting between the foreshore and the slopes of Arthurs Seat. The housing is mixed: permanent brick and weatherboard homes, older fibro and weatherboard beach houses near the water, and modern rebuilds. Homes here take salt air, strong coastal UV and damp. So we use coastal-grade preparation and weather-resistant coatings. Salt washing, flexible primers, and premium salt-resistant topcoats.`}
      propertyTypes={`Weatherboard and fibro beach houses, brick and rendered permanent homes, holiday properties, and modern coastal rebuilds near the foreshore.`}
      localContent={[
        {
          heading: `House Painters Serving ${suburb}`,
          body: [
            `${suburb} is a popular bayside town on the Mornington Peninsula. Beach houses, permanent homes and holiday properties sit close to the foreshore, beneath Arthurs Seat.`,
            `We paint inside and out, in a way that suits this setting. That means protecting the house against salt air and sun, and leaving a finish that looks right. We know the area, and every job comes with a written quote, thorough preparation, and a tidy site.`,
          ],
        },
        {
          heading: `Coastal Protection and Weatherboard Expertise in ${suburb}`,
          body: [
            `Homes near the bay take constant salt air, UV and damp. All three punish paintwork that was not prepared properly. We counter that with a proper salt wash, flexible exterior primers, and premium salt-resistant topcoats. The finish then holds up far longer than a standard repaint would here.`,
            `Weatherboard and fibro beach houses need care with the timber. Bare wood gets primed, gaps get filled, and the caulking goes on tight to keep moisture out. Original beach cottage, permanent brick home, or a modern rebuild, we match the system to the surface. Everything carries $10 million public liability insurance and a 5-year written workmanship guarantee.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
