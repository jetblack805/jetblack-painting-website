import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function ArmadalePainters() {
  const suburb = "Armadale";
  const faqs = [
    {
      question: `Do you paint ${suburb}'s Victorian and Edwardian terraces?`,
      answer: `Yes. ${suburb} is full of elegant period terraces along Orrong Road, Kooyong Road and the leafy side streets, and we're experienced with what these homes require — lead-paint-safe preparation, careful restoration of timber fretwork and decorative render, and heritage-appropriate colour schemes that suit the era. These homes are valuable and the finish has to be right.`,
    },
    {
      question: `Can you do pre-sale painting in ${suburb}?`,
      answer: `Absolutely. ${suburb} is one of Melbourne's most sought-after inner suburbs and strong presentation at sale time is critical. A professional pre-sale repaint — sharp neutral palette, tight cutting-in, clean fascias and fresh interior — can make a real difference to buyer perception and auction result. We scope and complete pre-sale repaints on a timeline that fits your campaign.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding Stonnington area, with the full scope and preparation itemised up front. Call Jimmy on 0432 077 782 or submit a request online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Armadale Painters | Period Home Painting | Jetblack Painting"
      description="Heritage and period home painters in Armadale — Victorian, Edwardian terraces and renovated period homes. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`Commercial facade work on High Street, ${suburb}. A rendered heritage frontage taken from charcoal to white and worked off a scissor lift, on a main road with a bus stop against the building — so the footpath had to stay open and safe the whole way through. Also ladder work on a two-tone commercial elevation, and a period weatherboard entry in ${suburb} finished in a single off-white with the door in black.`}
      projectImages={[
        {
          // Jimmy supplied a third frame of this job — the full "before", with
          // the whole terrace still in charcoal. It is not here on purpose. That
          // frame carried the building's street number and road name painted on
          // the wall, a legible number plate on a parked car, and a member of
          // the public sitting at the bus stop, spread far enough across the
          // frame that no crop cleared all three. It is not needed either: the
          // half-painted shot below is a before and an after in one image.
          src: "/projects/project-armadale-high-st-half-painted.webp",
          small: "/projects/project-armadale-high-st-half-painted-800.webp",
          width: 1200,
          height: 1600,
          alt: `A Jetblack Painting painter on a scissor lift repainting a rendered commercial facade in ${suburb}, white meeting the original charcoal on a hard edge, with cones and bunting around a live bus stop`,
          caption:
            "White meeting the original charcoal on a hard edge, halfway through. Note the cones, the bunting and the pedestrian sign — this is a live bus stop on a main road, and the footpath stayed open the whole time.",
        },
        {
          src: "/projects/project-armadale-high-st-complete.webp",
          small: "/projects/project-armadale-high-st-complete-800.webp",
          width: 1200,
          height: 1600,
          alt: `The completed white rendered facade of a High Street ${suburb} commercial building after repainting by Jetblack Painting`,
          caption:
            "Finished. Going this light on a heritage frontage is unforgiving — every patch, every crack and every join in the render shows if the preparation underneath was rushed.",
        },
        {
          src: "/projects/project-armadale-commercial-facade.webp",
          small: "/projects/project-armadale-commercial-facade-800.webp",
          width: 1206,
          height: 2145,
          alt: `Two Jetblack Painting painters in branded workwear repainting a rendered commercial facade in ${suburb} from an elevated work platform`,
          caption:
            "Commercial render repaint worked from an elevated platform. Height access is most of what separates a commercial quote from a residential one — the painting is the same, the getting to it is not.",
        },
        {
          // Cropped from the bottom: the original frame caught the top of a
          // second person's head at the lower-left edge, masked and not
          // identifiable, but an untidy intrusion on the crop line.
          // RECT=0,0,1241,1545 removes it.
          //
          // Worth recording after the frames withheld in #258 and #259: the
          // workwear here reads JET BLACK PAINTING and is verifiably Jetblack's
          // own, which is exactly why this one is safe to caption as such.
          src: "/projects/project-armadale-ladder-two-tone.webp",
          small: "/projects/project-armadale-ladder-two-tone-800.webp",
          width: 1200,
          height: 1494,
          alt: `A Jetblack Painting painter in branded orange workwear on an extension ladder, working the upper cream section of a two-tone commercial wall in ${suburb} above a dark navy band`,
          caption:
            "Ladder work on a commercial wall. Nothing on this elevation is decorative \u2014 a flat face, a straight band where the cream meets the navy, and filler marks still showing where the wall was made good before any topcoat went near it.",
        },
        {
          // Fourth image, which fills the two-column grid as two clean rows and
          // keeps the commercial before/after pair together on the first.
          //
          // It is here because the page had an argument with no evidence: the
          // copy and every FAQ are about Victorian and Edwardian period homes,
          // while all three photographs above are the one commercial job on
          // High Street. This is the only residential period work on the page.
          //
          // 1080x1080 — under the usual 1200-1400 because that is the real size
          // of the supplied file (an Instagram-sized export, 171KB, already
          // compressed once). Published at native size rather than upscaled.
          // Same call as the Hampton facade.
          src: "/projects/project-armadale-period-entry.webp",
          small: "/projects/project-armadale-period-entry-800.webp",
          width: 1080,
          height: 1080,
          alt: `Finished entry of a period weatherboard home in ${suburb}, off-white boards and shingle course with a white turned verandah post, black front door and black coach light`,
          caption:
            "A period weatherboard entry, finished. Almost all of it is the one off-white \u2014 boards, shingle course, turned post, door surround, eaves \u2014 so the only thing giving the front any depth is the shadow each profile throws. On a scheme like this there is no contrast anywhere to hide a wandering cut.",
        },
      ]}
      neighbouringSuburbs={[
        { name: "Windsor", link: "/painter-windsor" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Hawthorn", link: "/painter-hawthorn" },
        { name: "Caulfield", link: "/painter-caulfield" },
        { name: "Stonnington", link: "/painter-stonnington" },
      ]}
      localExpertise={`We understand ${suburb}'s character — the elegant Victorian and Edwardian terraces along High Street and the quiet residential streets that make it one of Melbourne's most refined inner suburbs. Heritage preparation, period colour palettes and meticulous timber detailing are things we do on every project in this area. The finish on an Armadale terrace has to be right.`}
      propertyTypes={`${suburb}'s Victorian and Edwardian terraces, renovated period homes, architect-designed contemporary residences and the character streetscapes of High Street and Orrong Road.`}
      localContent={[
        {
          heading: `Premium House Painters Serving Armadale`,
          body: [
            `${suburb} is a refined inner-eastern suburb known for its elegant Victorian and Edwardian terraces, the antique dealers and boutiques of High Street, and quiet, prestigious residential streets. Jetblack Painting delivers the detailed, high-quality painting these homes deserve — from ornate period façades to updated family homes and architect-designed residences throughout ${suburb}.`,
            `Every ${suburb} project begins with careful preparation and a clear, honest quote. Whether you're restoring a heritage terrace or refreshing a modern interior, our team delivers sharp lines, premium coatings and a clean, professional result with respect for your home and street.`,
          ],
        },
        {
          heading: `Heritage Detail and Premium Finishes in ${suburb}`,
          body: [
            `${suburb}'s period homes carry fine detailing — decorative render, timber fretwork and cast-iron lacework — that rewards meticulous work. We handle lead-paint-safe preparation, careful restoration of original features and heritage-sympathetic colour schemes so these valuable homes keep their character intact. Done properly, the work protects both the aesthetic and the long-term value of the property.`,
            `For ${suburb}'s renovated and contemporary properties, we deliver smooth, hard-wearing modern finishes using premium Dulux and Taubmans systems built for Melbourne's climate. Whatever the era, you get considered preparation and a finish designed to last for years.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
