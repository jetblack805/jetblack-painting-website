import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KeysboroughPainters() {
  const suburb = "Keysborough";
  const faqs = [
    {
      question: `Are you based near ${suburb}?`,
      answer: `Yes. Jetblack Painting is based just nearby in Mordialloc, so we're a genuinely local painter for ${suburb}. That means fast quotes, easy site visits and a team that knows the area's homes and estates well — we're not a call centre dispatching from the other side of Melbourne.`,
    },
    {
      question: `Do you paint new estate homes in ${suburb}?`,
      answer: `Definitely. Many ${suburb} homes are modern estate builds with rendered façades and large open interiors that need crisp, seamless finishes. We use premium Dulux and Taubmans systems and take extra care with preparation on rendered surfaces so the topcoat sits cleanly and holds up through Melbourne's climate.`,
    },
    {
      question: `Do you offer free quotes in ${suburb}?`,
      answer: `Yes. We provide free, no-obligation written quotes across ${suburb} and the surrounding Greater Dandenong area, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 or request a quote online.`,
    },
  ];

  return (
    <SuburbPageTemplate
      suburb={suburb}
      title="Keysborough Painters | Premium Painting | Jetblack Painting"
      description="Premium house painters in Keysborough — established brick family homes and commercial buildings. Free quotes, 5-year guarantee. Call 0432 077 782."
      projectSummary={`Three ${suburb} jobs on the same principle: the brick is never painted. On an established brick home that meant the roof, fascia, gutter, window frames, front door and porch slab all changed while the brickwork stayed exactly as it was. On the newer estate homes it means the render and one feature element carry the colour and the brick sits against them untouched. Nothing structural moves, and the place still reads as a different house from the footpath.`}
      projectImages={[
        {
          // Cropped in from the left. The original frame carried the house
          // number in cursive lettering on the brick, and street numbers do not
          // go on this site — one was deliberately blurred on 2026-08-02, and
          // fence photos were declined in #256 for republishing an address that
          // had already been removed. RECT=504,605,2520,3360 puts the number
          // outside the frame rather than blurring it.
          //
          // 1200x1600 at quality 0.74: brick texture and grass, which webp
          // handles badly. At the default this was over the 250KB ceiling that
          // the speed baseline sets for anything in public/.
          src: "/projects/project-keysborough-entry-door-repaint.webp",
          small: "/projects/project-keysborough-entry-door-repaint-800.webp",
          width: 1200,
          height: 1600,
          alt: `Entry of a ${suburb} brick home after an exterior repaint, with a navy front door, dark grey fascia and gutter, a black tile roof and a repainted porch slab`,
          caption: `A ${suburb} entry after repainting. Navy on the door, dark grey through the fascia and gutter, the tile roof brought back to black and the porch slab recoated — the brick itself untouched.`,
        },
        {
          // 1200x1600 at QUALITY=0.68. Lower than the 0.74 used on the entry
          // door above, and for the same reason pushed further: this frame is
          // mostly foliage, mown grass and flat overcast sky, all of which webp
          // spends bits on badly. At the 0.82 default it came out at 339KB,
          // over the 250KB ceiling the speed baseline sets for anything in
          // public/. 0.72 still landed at 253KB; 0.68 gets it to 242KB with no
          // visible loss on the render faces, which are what the photo is of.
          src: "/projects/project-keysborough-render-two-storey.webp",
          small: "/projects/project-keysborough-render-two-storey-800.webp",
          width: 1200,
          height: 1600,
          alt: `Two-storey brick and render home in ${suburb} after painting, with pale grey render, a deep red-brown clad box beneath the upper balcony, charcoal window frames and the brickwork left unpainted`,
          caption: `A ${suburb} estate home where the render and the balcony box do all the work. Pale grey runs across every rendered face, the box under the upper window is carried in a deep red-brown, and the brick to the right is untouched — so the colour reads as a deliberate choice against the brick rather than a coat over everything.`,
        },
        {
          // 1200x1600 at QUALITY=0.72 → 248KB, just under the ceiling. Kept a
          // notch higher than the frame above because the saturated red render
          // is the subject here and blocks up first when webp is pushed.
          src: "/projects/project-keysborough-entry-feature-wall.webp",
          small: "/projects/project-keysborough-entry-feature-wall-800.webp",
          width: 1200,
          height: 1600,
          alt: `Entry of a single-storey ${suburb} home after painting, with an off-white rendered portico column beside a deep terracotta-red feature wall and unpainted brick to either side`,
          caption: `The entry return on a single-storey ${suburb} home, in a deep terracotta red against an off-white column. A feature wall this saturated only works if the cutting-in is clean — every edge here runs to brick, to a window reveal or to a corner, and there is nowhere for a wobble to hide.`,
        },
      ]}
      neighbouringSuburbs={[
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Dandenong", link: "/painter-dandenong" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
      ]}
      localExpertise={`Jetblack Painting is based in nearby Mordialloc and regularly works across ${suburb}. We know the area's growing mix of modern estate homes, established family homes and commercial properties well — and because we're genuinely local, we can be on site quickly and deliver the kind of personal service that larger outfits can't.`}
      propertyTypes={`${suburb}'s modern estate homes with rendered façades, established brick family homes, commercial buildings and the growing townhouse and unit stock across the Greater Dandenong area.`}
      localContent={[
        {
          heading: `Local House Painters Serving Keysborough`,
          body: [
            `${suburb} is a growing family suburb in the City of Greater Dandenong, known for its modern estates, established family homes and the popular Parkmore shopping precinct. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter — not a franchise or call centre — providing premium interior and exterior work across ${suburb} with careful preparation and a clean, durable finish.`,
            `Every ${suburb} project comes with a clear written quote and thorough preparation from a reliable team that turns up when it says it will. Whether it's a full exterior repaint, a modern interior scheme, cabinetry or a commercial repaint, we deliver sharp lines, premium coatings and a professional result with minimal disruption.`,
          ],
        },
        {
          heading: `Estate and Family Home Painting in ${suburb}`,
          body: [
            `${suburb}'s newer estate homes typically feature rendered façades, feature walls and large open-plan interiors. We deliver the crisp, seamless finishes these homes are built around — using premium Dulux and Taubmans systems with proper priming on render so the topcoat sits perfectly and the result holds up for years.`,
            `For ${suburb}'s established family homes, we bring thorough preparation and premium coatings that refresh the look, protect the surface and add years of life to the paintwork. Commercial painting across the Keysborough area — warehouses, offices, shopfronts — is also something we handle regularly, scoped clearly and completed efficiently.`,
          ],
        },
      ]}
      faqs={faqs}
    />
  );
}
