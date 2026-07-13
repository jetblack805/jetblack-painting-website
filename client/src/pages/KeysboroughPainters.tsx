import SuburbPageTemplate from "@/components/SuburbPageTemplate";

export default function KeysboroughPainters() {
  return (
    <SuburbPageTemplate
      suburb="Keysborough"
      description="Local house painters in Keysborough, Melbourne. Servicing Keysborough daily from our nearby Mordialloc base. Interior, exterior & commercial painting. 5-star rated, fully licensed. Free quotes."
      neighbouringSuburbs={[
        { name: "Bentleigh", link: "/painter-bentleigh" },
        { name: "Mordialloc", link: "/painter-mordialloc" },
        { name: "Hampton", link: "/painter-hampton" },
        { name: "Brighton", link: "/painter-brighton" },
        { name: "Caulfield", link: "/painter-caulfield" },
      ]}
      localExpertise="Jetblack Painting is based in nearby Mordialloc and has been painting Keysborough homes for 13+ years. As your local painters, we offer fast response times, personalised service, and expert knowledge of every street in Keysborough."
      propertyTypes="Keysborough's modern family homes, townhouses, and established residences"
      localContent={[{"heading":"Local House Painters Serving Keysborough","body":["Keysborough is a growing family suburb in the City of Greater Dandenong, known for its modern estates, established family homes and the popular Parkmore shopping precinct. Based nearby in Mordialloc, Jetblack Painting is a genuinely local painter providing premium interior and exterior work across Keysborough with careful preparation and a clean, durable finish.","Every Keysborough project comes with a clear written quote and thorough preparation from a reliable local team. Whether it's a full exterior repaint, a modern interior scheme or cabinetry, we deliver sharp lines, premium coatings and a professional result with minimal disruption to your family."]},{"heading":"Estate and Family Home Painting in Keysborough","body":["Keysborough's newer estate homes typically feature rendered façades, feature walls and large open interiors. We deliver the crisp, seamless finishes these homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors suited to the south-east.","For Keysborough's established family homes, we bring careful preparation and premium coatings that refresh the look and protect the surface. Whatever the property, you get considered preparation and a finish designed to handle Melbourne's climate and last for years."]}]}
      faqs={[{"question":"Are you based near Keysborough?","answer":"Yes. Jetblack Painting is based just nearby in Mordialloc, so we're a genuinely local painter for Keysborough. That means fast quotes, easy site visits and a team that knows the area's homes and estates well."},{"question":"Do you paint new estate homes in Keysborough?","answer":"Definitely. Many Keysborough homes are modern estate builds with rendered façades and large open interiors. We deliver the crisp, seamless finishes these homes are built around, using premium Dulux and Taubmans systems for durable interiors and weather-resistant exteriors."},{"question":"Do you offer free quotes in Keysborough?","answer":"Yes. We provide free, no-obligation written quotes across Keysborough, with the full scope and preparation included up front. Call Jimmy on 0432 077 782 to arrange a visit."}]}
    />
  );
}
