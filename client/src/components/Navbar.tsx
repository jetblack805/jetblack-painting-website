/*
 * Design: Bold Contrast — High-Impact Modern Trade
 * Navbar: Sticky, dark background, logo left, nav links right, mobile hamburger
 * Cyan accent on hover/active states
 */
import { useState, useEffect, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import LOGO_URL from "@/assets/images/logo.webp";
import { useLocation } from "wouter";

const SUBURBS = [
  { name: "Armadale",           href: "/painter-armadale/" },
  { name: "Aspendale",          href: "/painter-aspendale/" },
  { name: "Bayside",            href: "/painter-bayside/" },
  { name: "Beaumaris",          href: "/painter-beaumaris/" },
  { name: "Bentleigh",          href: "/painter-bentleigh/" },
  { name: "Berwick",            href: "/painter-berwick/" },
  { name: "Black Rock",         href: "/painter-black-rock/" },
  { name: "Bonbeach",           href: "/painter-bonbeach/" },
  { name: "Box Hill",           href: "/painter-box-hill/" },
  { name: "Brighton",           href: "/painter-brighton/" },
  { name: "Brighton East",      href: "/painter-brighton-east/" },
  { name: "Camberwell",         href: "/painter-camberwell/" },
  { name: "Carlton",            href: "/painter-carlton/" },
  { name: "Carrum",             href: "/painter-carrum/" },
  { name: "Caulfield",          href: "/painter-caulfield/" },
  { name: "Chadstone",          href: "/painter-chadstone/" },
  { name: "Chelsea",            href: "/painter-chelsea/" },
  { name: "Cheltenham",         href: "/painter-cheltenham/" },
  { name: "Clarinda",           href: "/painter-clarinda/" },
  { name: "Croydon",            href: "/painter-croydon/" },
  { name: "Dandenong",          href: "/painter-dandenong/" },
  { name: "Doncaster",          href: "/painter-doncaster/" },
  { name: "Donvale",            href: "/painter-donvale/" },
  { name: "Edithvale",          href: "/painter-edithvale/" },
  { name: "Elsternwick",        href: "/painter-elsternwick/" },
  { name: "Glen Waverley",      href: "/painter-glen-waverley/" },
  { name: "Greater Dandenong",  href: "/painter-greater-dandenong/" },
  { name: "Hampton",            href: "/painter-hampton/" },
  { name: "Hawthorn",           href: "/painter-hawthorn/" },
  { name: "Heatherton",         href: "/painter-heatherton/" },
  { name: "Highett",            href: "/painter-highett/" },
  { name: "Keysborough",        href: "/keysborough-painters/" },
  { name: "Kew",                href: "/painter-kew/" },
  { name: "Kingston",           href: "/painter-kingston/" },
  { name: "Malvern",            href: "/painter-malvern/" },
  { name: "McKinnon",           href: "/painter-mckinnon/" },
  { name: "Mentone",            href: "/painter-mentone/" },
  { name: "Moorabbin",          href: "/painter-moorabbin/" },
  { name: "Mordialloc",         href: "/painter-mordialloc/" },
  { name: "Mornington Peninsula", href: "/painter-mornington-peninsula/" },
  { name: "Murrumbeena",        href: "/painter-murrumbeena/" },
  { name: "Oakleigh",           href: "/painter-oakleigh/" },
  { name: "Ormond",             href: "/painter-ormond/" },
  { name: "Parkdale",           href: "/painter-parkdale/" },
  { name: "Ringwood",           href: "/painter-ringwood/" },
  { name: "Sandringham",        href: "/painter-sandringham/" },
  { name: "South Yarra",        href: "/painter-south-yarra/" },
  { name: "Stonnington",        href: "/painter-stonnington/" },
  { name: "Templestowe",        href: "/painter-templestowe/" },
  { name: "Toorak",             href: "/painter-toorak/" },
  { name: "Wheelers Hill",      href: "/painter-wheelers-hill/" },
];

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Our Work", href: "/#gallery" },
  { label: "About",    href: "/#about" },
  { label: "Contact",  href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen]             = useState(false);
  const [scrolled, setScrolled]         = useState(false);
  const [areasOpen, setAreasOpen]       = useState(false);
  const [mobileAreas, setMobileAreas]   = useState(false);
  const [location]                      = useLocation();
  const dropdownRef                     = useRef<HTMLDivElement>(null);

  const isHomepage = location === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAreasOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setAreasOpen(false);
  }, [location]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    // On homepage, intercept hash links and smooth-scroll instead of navigating
    if (isHomepage && href.includes("#")) {
      e.preventDefault();
      const hash = "#" + href.split("#")[1];
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#060607]/95 shadow-lg shadow-black/30 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-[#060607]/90 backdrop-blur-md border-b border-white/[0.06]"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 shrink-0">
          <img
            src={LOGO_URL}
            alt="Jetblack Painting"
            className="h-10 w-40 lg:h-12 lg:w-48 rounded object-cover object-center"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-[#EDEDEF]/75 hover:text-[#D0A050] transition-colors duration-200 text-[10.5px] font-semibold tracking-[0.2em] uppercase"
            >
              {link.label}
            </a>
          ))}

          {/* Service Areas dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setAreasOpen((v) => !v)}
              className="flex items-center gap-1 text-[#EDEDEF]/75 hover:text-[#D0A050] transition-colors duration-200 text-[10.5px] font-semibold tracking-[0.2em] uppercase"
            >
              Service Areas
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${areasOpen ? "rotate-180" : ""}`}
              />
            </button>

            <div
              className={`absolute right-0 top-full mt-3 w-[560px] bg-[#060607]/[0.98] border border-white/10 rounded-lg shadow-2xl shadow-black/40 backdrop-blur-md overflow-hidden transition-all duration-200 origin-top ${
                areasOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-95 pointer-events-none"
              }`}
            >
                  <div className="px-5 py-4 border-b border-white/10">
                    <p className="text-white/60 text-xs uppercase tracking-widest">Melbourne suburbs we serve</p>
                  </div>
                  <div className="p-4 grid grid-cols-3 gap-1">
                    {SUBURBS.map((s) => (
                      <a
                        key={s.href}
                        href={s.href}
                        onClick={() => setAreasOpen(false)}
                        className="text-white/70 hover:text-[#D0A050] hover:bg-white/5 text-sm px-3 py-1.5 rounded transition-colors duration-150"
                      >
                        {s.name}
                      </a>
                    ))}
                  </div>
            </div>
          </div>

          <a
            href="tel:0432077782"
            className="flex items-center gap-2 border border-[#D0A050] text-[#D0A050] hover:bg-[#D0A050] hover:text-[#060607] px-5 py-2.5 text-[10.5px] font-bold tracking-[0.18em] uppercase transition-colors duration-200"
          >
            <Phone className="w-3.5 h-3.5" />
            Request a Quote
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-[#060607]/[0.98] backdrop-blur-md border-t border-white/10 overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[100vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
            <div className="container py-6 flex flex-col gap-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-[#EDEDEF]/80 hover:text-[#D0A050] transition-colors duration-200 text-sm font-semibold tracking-[0.18em] uppercase py-2"
                >
                  {link.label}
                </a>
              ))}

              {/* Mobile Service Areas toggle */}
              <button
                onClick={() => setMobileAreas((v) => !v)}
                className="flex items-center justify-between text-[#EDEDEF]/80 hover:text-[#D0A050] transition-colors duration-200 text-sm font-semibold tracking-[0.18em] uppercase py-2 w-full"
              >
                Service Areas
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${mobileAreas ? "rotate-180" : ""}`}
                />
              </button>

              <div
                className={`overflow-hidden -mt-2 transition-all duration-200 ${
                  mobileAreas ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                    <div className="grid grid-cols-2 gap-1 pt-2 pl-2 border-l border-white/10">
                      {SUBURBS.map((s) => (
                        <a
                          key={s.href}
                          href={s.href}
                          onClick={() => setIsOpen(false)}
                          className="text-white/60 hover:text-[#D0A050] text-sm py-1.5 px-2 rounded transition-colors"
                        >
                          {s.name}
                        </a>
                      ))}
                    </div>
              </div>

              <a
                href="tel:0432077782"
                className="flex items-center justify-center gap-2 bg-[#D0A050] hover:bg-[#E9BE6C] text-[#060607] px-5 py-3.5 text-[11px] font-bold tracking-[0.18em] uppercase transition-colors duration-200 mt-2"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
      </div>
    </nav>
  );
}
