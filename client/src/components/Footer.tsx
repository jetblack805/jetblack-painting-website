/*
 * Design: Bold Contrast — Footer on jet black background
 */
import { Phone, Instagram, MapPin } from "lucide-react";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/uutbBQWpBSMyhXzk.jpg";

export default function Footer() {
  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-white/5">
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img
              src={LOGO_URL}
              alt="Jetblack Painting"
              className="h-12 w-auto rounded mb-4"
            />
            <p className="text-white/50 text-sm leading-relaxed max-w-xs">
              Melbourne's trusted painting specialists. Commercial and residential
              repaints delivered with superior workmanship.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Quick Links
            </h4>
            <nav className="flex flex-col gap-2.5">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "Our Work", href: "#gallery" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="text-white/50 hover:text-[#00AACC] transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white font-semibold mb-4 text-sm uppercase tracking-wider"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Contact Us
            </h4>
            <div className="space-y-3">
              <a
                href="tel:0432077782"
                className="flex items-center gap-2 text-white/50 hover:text-[#00AACC] transition-colors text-sm"
              >
                <Phone className="w-4 h-4" />
                0432 077 782
              </a>
              <a
                href="https://www.instagram.com/jetblack_painting"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/50 hover:text-[#00AACC] transition-colors text-sm"
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

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Jetblack Painting. All rights reserved. ABN 50 548 669 474.
          </p>
          <p className="text-white/30 text-xs">
            Serving all Melbourne suburbs since 2012
          </p>
        </div>
      </div>
    </footer>
  );
}
