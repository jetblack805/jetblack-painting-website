import { Link } from "wouter";
import { useInView } from "@/lib/useInView";

const featuredServices = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces with premium interior painting, sharp cutting-in and durable Dulux or Taubmans finishes.",
    link: "/services/interior-painting",
  },
  {
    title: "Exterior Painting",
    description: "Protect and lift your home's exterior with proper washing, preparation, priming and weather-resistant coatings.",
    link: "/services/exterior-painting",
  },
  {
    title: "Kitchen Cabinet Resurfacing",
    description: "Luxury 2-pack kitchen cabinet finishes. Save thousands compared with replacing the whole kitchen.",
    link: "/services/kitchen-cabinet-resurfacing",
  },
  {
    title: "Roof Painting",
    description: "Restore and protect your roof with professional roof painting and coating systems for Melbourne conditions.",
    link: "/services/roof-painting",
  },
];

const allServices = [
  "Interior House Painting",
  "Exterior House Painting",
  "Commercial & Office Painting",
  "Kitchen Cabinet Resurfacing (2-Pack)",
  "Roof Painting & Restoration",
  "Fence & Deck Staining",
  "Concrete & Epoxy Flooring",
  "Wallpaper Removal",
  "Colour Consultation",
  "Heritage Home Painting",
  "Strata & Body Corporate Painting",
  "Real Estate Painting",
  "Shop & Office Repaints",
  "Garage Floor Coatings",
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
    <section id="premium-services" className="py-24 bg-[#1A1713]">
      <div className="container">
        <div
          ref={header.ref}
          className={`reveal up max-w-3xl mx-auto text-center mb-16 ${header.visible ? "visible" : ""}`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#EDE6D8] mb-4">
            Premium Painters Across Melbourne, Bayside &amp; Inner Suburbs
          </h2>
          <p className="text-xl text-[#A39C90] mb-2">
            Interior, Exterior, Commercial, Roof &amp; Cabinet Painting Services
          </p>
          <p className="text-lg text-[#A39C90]">
            Wherever you are in Melbourne, Jetblack Painting has a local team that knows your area — from beachside weatherboards to heritage brick homes.
          </p>
        </div>

        <div
          ref={areas.ref}
          className={`reveal up bg-[#12100C] rounded-xl p-8 mb-16 ${areas.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-[#EDE6D8] mb-6">Service Areas for Local &amp; Map Search</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {premiumSuburbs.map((suburb) => (
              <Link key={suburb.name} href={suburb.link} className="flex items-center gap-2 hover:text-[#C49826] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#C49826]" />
                <span className="text-[#EDE6D8] font-medium hover:text-[#C49826]">Painters {suburb.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#A39C90] mt-4">
            Select your suburb to see local project details, services and quote options.
          </p>
        </div>

        <div
          ref={featured.ref}
          className={`reveal up grid md:grid-cols-2 gap-8 mb-16 ${featured.visible ? "visible" : ""}`}
        >
          {featuredServices.map((service) => (
            <Link key={service.title} href={service.link}>
              <div className="bg-[#1A1713] border border-[#2A261F] rounded-xl p-8 hover:shadow-lg hover:border-[#D4AB3A] transition-all cursor-pointer h-full">
                <h3 className="text-xl font-bold text-[#EDE6D8] mb-3">{service.title}</h3>
                <p className="text-[#A39C90] mb-4">{service.description}</p>
                <span className="text-[#C49826] font-semibold">Learn More →</span>
              </div>
            </Link>
          ))}
        </div>

        <div
          ref={allSvcs.ref}
          className={`reveal up mb-16 ${allSvcs.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-[#EDE6D8] mb-6 text-center">Complete Range of Painting Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((service) => (
              <div key={service} className="flex items-center gap-2 bg-[#17140F] p-3 rounded-lg">
                <svg className="w-4 h-4 text-[#C49826] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#EDE6D8] text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>

        <div
          ref={why.ref}
          className={`reveal up max-w-4xl mx-auto ${why.visible ? "visible" : ""}`}
        >
          <h3 className="text-2xl font-bold text-[#EDE6D8] mb-6">Why Melbourne Homeowners Choose Jetblack Painting</h3>
          <div className="prose prose-lg text-[#A39C90] space-y-4">
            <p>
              Jetblack Painting services Melbourne homeowners, landlords, real estate agents and commercial clients across <Link href="/painter-mordialloc" className="text-[#C49826] hover:underline">Mordialloc</Link>, <Link href="/painter-brighton" className="text-[#C49826] hover:underline">Brighton</Link>, <Link href="/painter-toorak" className="text-[#C49826] hover:underline">Toorak</Link>, <Link href="/painter-camberwell" className="text-[#C49826] hover:underline">Camberwell</Link>, <Link href="/painter-hawthorn" className="text-[#C49826] hover:underline">Hawthorn</Link>, <Link href="/painter-bayside" className="text-[#C49826] hover:underline">Bayside</Link>, <Link href="/painter-kingston" className="text-[#C49826] hover:underline">Kingston</Link> and <Link href="/painter-greater-dandenong" className="text-[#C49826] hover:underline">Greater Dandenong</Link>.
            </p>
            <p>
              We specialise in <Link href="/services/interior-painting" className="text-[#C49826] hover:underline">interior painting</Link>, <Link href="/services/exterior-painting" className="text-[#C49826] hover:underline">exterior painting</Link>, <Link href="/services/commercial-painting" className="text-[#C49826] hover:underline">commercial painting</Link>, <Link href="/services/roof-painting" className="text-[#C49826] hover:underline">roof painting</Link> and <Link href="/services/kitchen-cabinet-resurfacing" className="text-[#C49826] hover:underline">kitchen cabinet resurfacing</Link>.
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
