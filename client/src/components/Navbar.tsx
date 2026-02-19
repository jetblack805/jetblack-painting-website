/*
 * Design: Bold Contrast — High-Impact Modern Trade
 * Navbar: Sticky, dark background, logo left, nav links right, mobile hamburger
 * Cyan accent on hover/active states
 */
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LOGO_URL = "https://files.manuscdn.com/user_upload_by_module/session_file/310519663339742950/uutbBQWpBSMyhXzk.jpg";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[oklch(0.12_0.005_285/0.97)] shadow-lg shadow-black/20 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-18 lg:h-20">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
          className="flex items-center gap-3 shrink-0"
        >
          <img
            src={LOGO_URL}
            alt="Jetblack Painting"
            className="h-10 lg:h-12 w-auto rounded"
          />
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="text-white/80 hover:text-[oklch(0.7_0.15_220)] transition-colors duration-200 text-sm font-medium tracking-wide uppercase"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:0432077782"
            className="flex items-center gap-2 bg-[#00AACC] hover:bg-[#0099BB] text-white px-5 py-2.5 rounded font-semibold text-sm transition-colors duration-200"
          >
            <Phone className="w-4 h-4" />
            Call Now
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[oklch(0.12_0.005_285/0.98)] backdrop-blur-md border-t border-white/10 overflow-hidden"
          >
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="text-white/80 hover:text-[oklch(0.7_0.15_220)] transition-colors duration-200 text-base font-medium tracking-wide uppercase py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:+61000000000"
                className="flex items-center justify-center gap-2 bg-[oklch(0.7_0.15_220)] hover:bg-[oklch(0.6_0.15_220)] text-white px-5 py-3 rounded font-semibold text-sm transition-colors duration-200 mt-2"
              >
                <Phone className="w-4 h-4" />
                Get a Free Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
