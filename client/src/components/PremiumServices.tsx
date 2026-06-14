import { motion } from "framer-motion";
import { Link } from "wouter";

const featuredServices = [
  {
    title: "Interior Painting",
    description: "Transform your living spaces with premium interior painting. We use Dulux and Taubmans paints for a flawless, long-lasting finish.",
    link: "/services/interior-painting"
  },
  {
    title: "Exterior Painting",
    description: "Protect and beautify your home's exterior with weather-resistant coatings designed for Melbourne's climate.",
    link: "/services/exterior-painting"
  },
  {
    title: "Kitchen Cabinet Resurfacing",
    description: "Luxury 2-pack kitchen cabinet finishes. Save thousands compared to a full kitchen renovation.",
    link: "/#services"
  },
  {
    title: "Roof Painting",
    description: "Restore and protect your roof with professional roof painting services. Extend the life of your roof by 10+ years.",
    link: "/services/roof-painting"
  }
];

const allServices = [
  "Interior House Painting",
  "Exterior House Painting",
  "Commercial & Office Painting",
  "Kitchen Cabinet Resurfacing (2-Pack)",
  "Roof Painting & Restoration",
  "Fence & Deck Staining",
  "Pre-Sale Property Painting",
  "Concrete & Epoxy Flooring",
  "Wallpaper Removal & Installation",
  "Colour Consultation",
  "Heritage Home Painting",
  "Strata & Body Corporate Painting"
];

const premiumSuburbs = [
  { name: "Brighton", link: "/painter-brighton" },
  { name: "Toorak", link: "/painter-toorak" },
  { name: "Kew", link: "/#contact" },
  { name: "Camberwell", link: "/painter-camberwell" },
  { name: "Malvern", link: "/painter-malvern" },
  { name: "Sandringham", link: "/#contact" },
  { name: "Mentone", link: "/#contact" },
  { name: "Mordialloc", link: "/painter-mordialloc" },
  { name: "Caulfield", link: "/painter-caulfield" },
  { name: "Bentleigh", link: "/painter-bentleigh" },
  { name: "Hampton", link: "/painter-hampton" },
  { name: "Keysborough", link: "/keysborough-painters" },
  { name: "Hawthorn", link: "/painter-hawthorn" },
  { name: "Carlton", link: "/#contact" },
];

export default function PremiumServices() {
  return (
    <section id="premium-services" className="py-24 bg-white">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-[#0D0D0D] mb-4">
            Premium Painters in Melbourne's Bayside &amp; Inner Suburbs
          </h2>
          <p className="text-xl text-[#666] mb-2">
            Interior, Exterior &amp; High-End Finishes for Luxury Homes
          </p>
          <p className="text-lg text-[#999]">
            Jet Black Painting delivers high-quality residential and commercial painting services across Melbourne's most sought-after suburbs. With 13+ years of experience and a 5-star Google rating, we are Melbourne's trusted painting professionals.
          </p>
        </motion.div>

        {/* Suburbs List - Now with Internal Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-[#F5F5F0] rounded-xl p-8 mb-16"
        >
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Serving Melbourne's Premium Suburbs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {premiumSuburbs.map((suburb) => (
              <Link key={suburb.name} href={suburb.link} className="flex items-center gap-2 hover:text-[#00AACC] transition-colors">
                <div className="w-2 h-2 rounded-full bg-[#00AACC]" />
                <span className="text-[#0D0D0D] font-medium hover:text-[#00AACC]">{suburb.name}</span>
              </Link>
            ))}
          </div>
          <p className="text-sm text-[#666] mt-4">Click on a suburb to view our local painting services in your area.</p>
        </motion.div>

        {/* Featured Services with Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {featuredServices.map((service) => (
            <Link key={service.title} href={service.link}>
              <div className="bg-white border border-gray-200 rounded-xl p-8 hover:shadow-lg hover:border-[#00AACC] transition-all cursor-pointer">
                <h3 className="text-xl font-bold text-[#0D0D0D] mb-3">{service.title}</h3>
                <p className="text-[#666] mb-4">{service.description}</p>
                <span className="text-[#00AACC] font-semibold">Learn More →</span>
              </div>
            </Link>
          ))}
        </motion.div>

        {/* All Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6 text-center">Complete Range of Painting Services</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {allServices.map((service) => (
              <div key={service} className="flex items-center gap-2 bg-gray-50 p-3 rounded-lg">
                <svg className="w-4 h-4 text-[#00AACC] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-[#0D0D0D] text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Authority Content for SEO */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-[#0D0D0D] mb-6">Why Melbourne Homeowners Choose Jetblack Painting</h3>
          <div className="prose prose-lg text-[#666] space-y-4">
            <p>
              With over 13 years of experience painting homes across Melbourne's premium suburbs, including <Link href="/painter-mordialloc" className="text-[#00AACC] hover:underline">Mordialloc</Link>, <Link href="/painter-brighton" className="text-[#00AACC] hover:underline">Brighton</Link>, <Link href="/painter-toorak" className="text-[#00AACC] hover:underline">Toorak</Link>, <Link href="/painter-camberwell" className="text-[#00AACC] hover:underline">Camberwell</Link>, and <Link href="/painter-hawthorn" className="text-[#00AACC] hover:underline">Hawthorn</Link>, Jetblack Painting has earned a reputation as Melbourne's most trusted painting specialists.
            </p>
            <p>
              We specialise in high-end residential painting, including luxury <Link href="/services/interior-painting" className="text-[#00AACC] hover:underline">interior painting</Link>, weather-resistant <Link href="/services/exterior-painting" className="text-[#00AACC] hover:underline">exterior painting</Link>, and premium 2-pack kitchen cabinet resurfacing. Our team understands the unique requirements of Melbourne's heritage homes, modern architecturally-designed properties, and coastal residences, particularly in Bayside suburbs like Mordialloc where protection against salt air and harsh weather is crucial.
            </p>
            <p>
              Every project is completed by our experienced, fully licensed team using premium Dulux and Taubmans paints. We provide a 5-year workmanship guarantee, comprehensive insurance, and a commitment to minimal disruption to your household.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
