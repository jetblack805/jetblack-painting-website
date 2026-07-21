/*
 * Design: Bold Contrast — Footer on jet black background
 */
import { Phone, Instagram, MapPin, Youtube, Facebook } from "lucide-react";
import LOGO_URL from "@/assets/images/logo.webp";

// lucide-react has no TikTok glyph, so provide one inline.
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.79 4.79 0 0 1-3.24-1.48z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/jetblack_painting", Icon: Instagram },
  { label: "YouTube",   href: "https://www.youtube.com/@jetblackpaint",       Icon: Youtube },
  { label: "Facebook",  href: "https://www.facebook.com/jetblackpainting",    Icon: Facebook },
  { label: "TikTok",    href: "https://www.tiktok.com/@jetblack_painting",    Icon: TikTokIcon },
];

const SERVICE_AREAS = [
  { name: "Armadale",            href: "/painter-armadale/" },
  { name: "Aspendale",           href: "/painter-aspendale/" },
  { name: "Bayside",             href: "/painter-bayside/" },
  { name: "Bentleigh",           href: "/painter-bentleigh/" },
  { name: "Berwick",             href: "/painter-berwick/" },
  { name: "Box Hill",            href: "/painter-box-hill/" },
  { name: "Brighton",            href: "/painter-brighton/" },
  { name: "Camberwell",          href: "/painter-camberwell/" },
  { name: "Carlton",             href: "/painter-carlton/" },
  { name: "Caulfield",           href: "/painter-caulfield/" },
  { name: "Chelsea",             href: "/painter-chelsea/" },
  { name: "Cheltenham",          href: "/painter-cheltenham/" },
  { name: "Croydon",             href: "/painter-croydon/" },
  { name: "Dandenong",           href: "/painter-dandenong/" },
  { name: "Doncaster",           href: "/painter-doncaster/" },
  { name: "Donvale",             href: "/painter-donvale/" },
  { name: "Glen Waverley",       href: "/painter-glen-waverley/" },
  { name: "Greater Dandenong",   href: "/painter-greater-dandenong/" },
  { name: "Hampton",             href: "/painter-hampton/" },
  { name: "Hawthorn",            href: "/painter-hawthorn/" },
  { name: "Keysborough",         href: "/keysborough-painters/" },
  { name: "Kew",                 href: "/painter-kew/" },
  { name: "Kingston",            href: "/painter-kingston/" },
  { name: "Malvern",             href: "/painter-malvern/" },
  { name: "McKinnon",            href: "/painter-mckinnon/" },
  { name: "Mentone",             href: "/painter-mentone/" },
  { name: "Moorabbin",           href: "/painter-moorabbin/" },
  { name: "Mordialloc",          href: "/painter-mordialloc/" },
  { name: "Mornington Peninsula", href: "/painter-mornington-peninsula/" },
  { name: "Murrumbeena",         href: "/painter-murrumbeena/" },
  { name: "Ormond",              href: "/painter-ormond/" },
  { name: "Parkdale",            href: "/painter-parkdale/" },
  { name: "Ringwood",            href: "/painter-ringwood/" },
  { name: "Sandringham",         href: "/painter-sandringham/" },
  { name: "South Yarra",         href: "/painter-south-yarra/" },
  { name: "Stonnington",         href: "/painter-stonnington/" },
  { name: "Templestowe",         href: "/painter-templestowe/" },
  { name: "Toorak",              href: "/painter-toorak/" },
  { name: "Wheelers Hill",       href: "/painter-wheelers-hill/" },
];

export default function Footer() {
  return (
    <footer className="bg-[#030304] border-t border-white/[0.06]">
      <div className="container py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Jetblack Painting"
              className="h-12 w-48 rounded object-cover object-center mb-5"
            />
            <div className="w-44 h-px bg-[#D0A050]/60 mb-4" aria-hidden="true" />
            <p className="text-[#D0A050] text-[11px] font-bold tracking-[0.3em] uppercase mb-4">Quality. Precision. Integrity.</p>
            <p className="text-white/50 text-sm font-light leading-relaxed max-w-xs mb-6">
              Melbourne's trusted painting specialists. Commercial and residential
              repaints delivered with superior workmanship.
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Jetblack Painting on ${label}`}
                  className="flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-white/50 hover:text-[#0A0A0B] hover:bg-[#D0A050] hover:border-[#D0A050] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2
              className="text-[#98989D] font-bold mb-5 text-[9.5px] uppercase tracking-[0.3em]"
            >
              Quick Links
            </h2>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home",     href: "/" },
                { label: "Services", href: "/#services" },
                { label: "Our Work", href: "/#gallery" },
                { label: "About",    href: "/#about" },
                { label: "Contact",  href: "/#contact" },
                { label: "Blog",     href: "/blog/" },
                { label: "FAQ",      href: "/faq/" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white/50 hover:text-[#D0A050] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="text-[#98989D] font-bold mb-5 text-[9.5px] uppercase tracking-[0.3em]"
            >
              Contact Us
            </h2>
            <div className="space-y-3">
              <a
                href="tel:0432077782"
                className="flex items-center gap-2 text-white/50 hover:text-[#D0A050] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0432 077 782
              </a>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <MapPin className="w-4 h-4" />
                All Melbourne Suburbs, VIC
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-10 pt-10 border-t border-white/5">
          <h2
            className="text-[#98989D] font-bold mb-5 text-[9.5px] uppercase tracking-[0.3em]"
          >
            Service Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-2">
            {SERVICE_AREAS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="text-white/60 hover:text-[#D0A050] transition-colors text-xs"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-xs">
            &copy; {new Date().getFullYear()} Jetblack Painting. All rights reserved. ABN 50 548 669 474.
          </p>
          <p className="text-[#98989D] text-[10px] tracking-[0.24em] uppercase">
            Quality. Precision. Integrity.
          </p>
        </div>
      </div>
    </footer>
  );
}
