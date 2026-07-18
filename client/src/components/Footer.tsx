/*
 * Design: Bold Contrast — Footer on jet black background
 */
import { Phone, Instagram, MapPin } from "lucide-react";
import LOGO_URL from "@/assets/images/logo.webp";

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
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Jetblack Painting"
              className="h-12 w-48 rounded object-cover object-center mb-4 bg-[#1A1713] p-1"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Melbourne's trusted painting specialists. Commercial and residential
              repaints delivered with superior workmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
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
                  className="text-white/50 hover:text-[#D4AB3A] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Contact Us
            </h2>
            <div className="space-y-3">
              <a
                href="tel:0432077782"
                className="flex items-center gap-2 text-white/50 hover:text-[#D4AB3A] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0432 077 782
              </a>
              <a
                href="https://www.instagram.com/jetblack_painting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#D4AB3A] transition-colors text-sm"
              >
                <Instagram className="w-4 h-4" />
                @jetblack_painting
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
            className="text-white font-semibold mb-5 text-sm uppercase tracking-wider"
            style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
          >
            Service Areas
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-x-4 gap-y-2">
            {SERVICE_AREAS.map((s) => (
              <a
                key={s.href}
                href={s.href}
                className="text-white/60 hover:text-[#D4AB3A] transition-colors text-xs"
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
          <p className="text-white/60 text-xs">
            Serving all Melbourne suburbs since 2012
          </p>
        </div>
      </div>
    </footer>
  );
}
