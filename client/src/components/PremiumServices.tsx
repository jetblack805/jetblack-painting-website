import { Link } from "wouter";
import { useInView } from "@/lib/useInView";

const featuredServices = [
  {
    title: "Interior Painting",
    description: "Walls, ceilings, trim and doors. Filled, sanded and primed before a brush touches them, then cut in by hand.",
    link: "/services/interior-painting",
  },
  {
    title: "Exterior Painting",
    description: "Weatherboard, render and brick. Washed back, made good and primed, then coated for Melbourne sun and salt air.",
    link: "/services/exterior-painting",
  },
  {
    title: "Kitchen Cabinet Resurfacing",
    description: "Doors and panels sprayed in 2-pack for a factory-flat finish, at a fraction of what a new kitchen costs.",
    link: "/services/kitchen-cabinet-resurfacing",
  },
  {
    title: "Roof Painting",
    description: "Broken tiles replaced and ridge capping repointed before the coating goes on. Restoration first, paint second.",
    link: "/services/roof-painting",
  },
];

// Named services that have a page of their own carry a link to it. This list
// used to be plain strings, which left /services/body-corporate-painting and
// /services/epoxy-flooring with zero inbound internal links anywhere on the
// site — reachable only from the sitemap — while the homepage named both of
// them in text. Anything added here that has a page should be linked.
const allServices: { name: string; link?: string }[] = [
  { name: "Interior House Painting", link: "/services/interior-painting" },
  { name: "Exterior House Painting", link: "/services/exterior-painting" },
  { name: "Commercial & Office Painting", link: "/services/commercial-painting" },
  { name: "Kitchen Cabinet Resurfacing (2-Pack)", link: "/services/kitchen-cabinet-resurfacing" },
  { name: "Roof Painting & Restoration", link: "/services/roof-painting" },
  { name: "Fence & Deck Staining", link: "/services/roof-fence-painting" },
  { name: "Concrete & Epoxy Flooring", link: "/services/epoxy-flooring" },
  { name: "Wallpaper Removal" },
  { name: "Colour Consultation" },
  { name: "Heritage Home Painting" },
  { name: "Strata & Body Corporate Painting", link: "/services/body-corporate-painting" },
  { name: "Real Estate Painting", link: "/services/real-estate-painting" },
  { name: "Shop & Office Repaints", link: "/services/commercial-painting" },
  { name: "Garage Floor Coatings", link: "/services/epoxy-flooring" },
];

const premiumSuburbs = [
  { name: "Brighton", link: "/painter-brighton" },
  { name: "Toorak", link: "/painter-toorak" },
  { name: "Kew", link: "/painter-kew" },
  { name: "Camberwell", link: "/painter-camberwell" },
  { name: "Malvern", link: "/painter-malvern" },
  { name: "Sandringham", link: "/painter-sandringham" },
  { name: "Mentone", link: "/painter-mentone" },
  { name: "Mordialloc", link: "/painter-mordialloc" },
  { name: "Caulfield", link: "/painter-caulfield" },
  { name: "Bentleigh", link: "/painter-bentleigh" },
  { name: "Hampton", link: "/painter-hampton" },
  { name: "Hawthorn", link: "/painter-hawthorn" },
  { name: "Carlton", link: "/painter-carlton" },
  { name: "Mornington Peninsula", link: "/painter-mornington-peninsula" },
  { name: "Bayside", link: "/painter-bayside" },
  { name: "Kingston", link: "/painter-kingston" },
  { name: "Greater Dandenong", link: "/painter-greater-dandenong" },
];

export default function PremiumServices() {
  const header = useInView("-100px");
  const areas = useInView("-100px");
  const featured = useInView("-100px");
  const allSvcs = useInView("-100px");
  const why = useInView("-100px");

  return (
    <section id="premium-services" className="py-24 bg-[#131316]">
      <div className="container">
        <div
          ref={header.ref}
          className={`reveal up max-w-3xl mx-auto text-center mb-16 ${header.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl sm:text-5xl text-[#EDEDEF] mb-4">
            Premium Painters Across Melbourne, Bayside &amp; Inner Suburbs
          </h2>
          <p className="text-xl text-[#A3A3A8] mb-2">
            Interior, Exterior, Commercial, Roof &amp; Cabinet Painting Services
          </p>
          <p className="text-lg text-[#A3A3A8]">
            Working out of Mordialloc across Bayside, Kingston, Stonnington and the inner east — from beachside weatherboards to period brick homes.
          </p>
        </div>

        <div
          ref={areas.ref}
          className={`reveal up bg-[#060607] rounded-xl p-8 mb-16 ${areas.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl text-[#EDEDEF] mb-6">Where We Work</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {premiumSuburbs.map((suburb) => (
              <Link key={suburb.name} href={suburb.link} className="flex items-center gap-2 hover:text-[#D0A050] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#D0A050]" />
                <span className="text-[#EDEDEF] font-medium hover:text-[#D0A050]">Painters {suburb.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#A3A3A8] mt-4">
            Select your suburb to see local project details, services and quote options.
          </p>
        </div>

        <div
          ref={featured.ref}
          className={`reveal up grid md:grid-cols-2 gap-8 mb-16 ${featured.visible ? "visible" : ""}`}
        >
          {featuredServices.map((service) => (
            <Link key={service.title} href={service.link}>
              <div className="bg-[#131316] border border-[#222227] rounded-xl p-8 hover:shadow-lg hover:border-[#E9BE6C] transition-all cursor-pointer h-full">
                <h3 className="text-xl text-[#EDEDEF] mb-3">{service.title}</h3>
                <p className="text-[#A3A3A8] mb-4">{service.description}</p>
                <span className="text-[#D0A050] font-semibold">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div
          ref={allSvcs.ref}
          className={`reveal up mb-16 ${allSvcs.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl text-[#EDEDEF] mb-6 text-center">Complete Range of Painting Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((service) => {
              const tick = (
                <svg className="w-4 h-4 text-[#D0A050] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              );
              const cell = "flex items-center gap-2 bg-[#101013] p-3 rounded-lg";
              return service.link ? (
                <Link
                  key={service.name}
                  href={service.link}
                  className={`${cell} hover:bg-[#17171b] transition-colors`}
                >
                  {tick}
                  <span className="text-[#EDEDEF] text-sm font-medium">{service.name}</span>
                </Link>
              ) : (
                <div key={service.name} className={cell}>
                  {tick}
                  <span className="text-[#EDEDEF] text-sm font-medium">{service.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        <div
          ref={why.ref}
          className={`reveal up max-w-4xl mx-auto ${why.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl text-[#EDEDEF] mb-6">Why Melbourne Homeowners Choose Jetblack Painting</h3>
          <div className="prose prose-lg text-[#A3A3A8] space-y-4">
            <p>
              Jetblack Painting services Melbourne homeowners, landlords, real estate agents and commercial clients across <Link href="/painter-mordialloc" className="text-[#D0A050] hover:underline">Mordialloc</Link>, <Link href="/painter-brighton" className="text-[#D0A050] hover:underline">Brighton</Link>, <Link href="/painter-toorak" className="text-[#D0A050] hover:underline">Toorak</Link>, <Link href="/painter-camberwell" className="text-[#D0A050] hover:underline">Camberwell</Link>, <Link href="/painter-hawthorn" className="text-[#D0A050] hover:underline">Hawthorn</Link>, <Link href="/painter-bayside" className="text-[#D0A050] hover:underline">Bayside</Link>, <Link href="/painter-kingston" className="text-[#D0A050] hover:underline">Kingston</Link> and <Link href="/painter-greater-dandenong" className="text-[#D0A050] hover:underline">Greater Dandenong</Link>.
            </p>
            <p>
              We specialise in <Link href="/services/interior-painting" className="text-[#D0A050] hover:underline">interior painting</Link>, <Link href="/services/exterior-painting" className="text-[#D0A050] hover:underline">exterior painting</Link>, <Link href="/services/commercial-painting" className="text-[#D0A050] hover:underline">commercial painting</Link>, <Link href="/services/roof-painting" className="text-[#D0A050] hover:underline">roof painting</Link> and <Link href="/services/kitchen-cabinet-resurfacing" className="text-[#D0A050] hover:underline">kitchen cabinet resurfacing</Link>.
            </p>
            <p>
              Every job is backed by a 5-year workmanship guarantee, $10M public liability insurance and a 5-star Google rating from verified reviews.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
