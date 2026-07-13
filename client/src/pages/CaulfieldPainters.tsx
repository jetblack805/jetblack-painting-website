import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function CaulfieldPainters() {
  return (
    <SuburbPageTemplate
      suburb="Caulfield"
      description="Expert house painters in Caulfield, Melbourne. Interior, exterior & commercial painting services. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Malvern", link: "/painter-malvern" },
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Toorak", link: "/painter-toorak" },
        { name: "Hampton", link: "/painter-hampton" },
      ]}
      localExpertise="We understand Caulfield's diverse property landscape, from Art Deco apartments to modern family homes and heritage properties. Our team delivers premium painting results that enhance the character of Caulfield's varied architecture."
      propertyTypes="Caulfield's Art Deco apartments, modern family homes, and heritage properties"
      localContent={[
        {
          heading: "Professional House Painters Serving Caulfield",
          body: [
            "Caulfield offers some of Melbourne's most varied architecture — from striking interwar Art Deco apartments and solid brick period homes to modern family residences near Caulfield Park and the racecourse. Jetblack Painting delivers premium painting across all of it, matching our preparation and finish to each home's era and materials throughout Caulfield, Caulfield North and Caulfield South.",
            "Every Caulfield project is quoted clearly with the full scope and preparation included, and carried out by a tidy, reliable team. Whether it's a heritage exterior, an Art Deco interior or a contemporary repaint, we focus on sharp detail and coatings built to last.",
          ],
        },
        {
          heading: "Art Deco and Heritage Painting in Caulfield",
          body: [
            "Caulfield's Art Deco and interwar homes have distinctive rendered façades, decorative detailing and original features worth preserving. We take care with render preparation, crack repair and period-appropriate colours so these homes keep their character, using premium coatings that protect the surface for the long term.",
            "For Caulfield's modern family homes and apartments, we deliver smooth, durable interior and exterior finishes with premium Dulux and Taubmans systems designed for Melbourne's climate. Whatever the property type, you get meticulous preparation and a professional, long-lasting result.",
          ],
        },
      ]}
    />
  );
}
