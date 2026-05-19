/*
 * Design: Bold Contrast — Contact section on light background
 * Contact info + call-to-action + Google Maps
 */
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0432 077 782",
    href: "tel:0432077782",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@jetblack_painting",
    href: "https://www.instagram.com/jetblack_painting",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "31 Northumberland Dr, Keysborough VIC 3173",
    href: "https://maps.google.com/?q=31+Northumberland+Dr+Keysborough+VIC+3173",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon-Fri 7am-5pm, Sat-Sun 9am-5pm",
    href: null,
  },
];

export default function Contact() {
  const handleContactClick = (label: string) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "contact_click", {
        event_category: "contact",
        event_label: label,
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#F5F5F0]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D0D0D] leading-tight mb-6"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Ready for a{" "}
              <span className="text-[#00AACC]">Fresh Look?</span>
            </h2>
            <p className="text-[#555] text-lg leading-relaxed mb-10">
              Get in touch for a free, no-obligation quote. We'll visit your property,
              discuss your needs, and provide a competitive price. No job is too big or
              too small.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D0D0D] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#00AACC]" />
                  </div>
                  <div>
                    <div className="text-[#999] text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        onClick={() => handleContactClick(item.label)}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#0D0D0D] font-semibold hover:text-[#00AACC] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#0D0D0D] font-semibold">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Google Maps */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex items-center"
          >
            <div className="w-full rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.8860472260006!2d145.1312!3d-37.9722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b5e5e5e5e5%3A0x1234567890!2s31%20Northumberland%20Dr%2C%20Keysborough%20VIC%203173!5e0!3m2!1sen!2sau!4v1234567890"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Jetblack Painting Location - 31 Northumberland Dr, Keysborough VIC 3173"
              />
            </div>
          </motion.div>
        </div>

        {/* CTA Card Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="w-full bg-[#0D0D0D] rounded-xl p-8 sm:p-10 relative overflow-hidden">
            {/* Decorative accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#00AACC]/10 rounded-bl-full" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#00AACC]/5 rounded-tr-full" />

            <div className="relative z-10">
              <h3
                className="text-2xl sm:text-3xl font-bold text-white mb-4"
                style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
              >
                Get Your Free Quote Today
              </h3>
              <p className="text-white/60 leading-relaxed mb-8">
                Call us directly or reach out on Instagram. We respond within minutes
                and can arrange a site visit at a time that suits you.
              </p>

              {/* Big Phone CTA */}
              <a
                href="tel:0432077782"
                onClick={() => handleContactClick("Big Phone CTA")}
                className="flex items-center justify-center gap-3 bg-[#00AACC] hover:bg-[#0099BB] text-white w-full py-5 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#00AACC]/30 hover:-translate-y-0.5 mb-4"
              >
                <Phone className="w-6 h-6" />
                0432 077 782
              </a>

              {/* Instagram CTA */}
              <a
                href="https://www.instagram.com/jetblack_painting"
                onClick={() => handleContactClick("Instagram CTA")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 border border-white/20 hover:border-[#00AACC]/50 text-white w-full py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/5"
              >
                <Instagram className="w-5 h-5" />
                Follow us on Instagram
              </a>

              {/* Trust signals */}
              <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10">
                <div className="text-center">
                  <div className="text-[#00AACC] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>5.0★</div>
                  <div className="text-white/40 text-xs">Google Rating</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-[#00AACC] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>13+</div>
                  <div className="text-white/40 text-xs">Years Experience</div>
                </div>
                <div className="w-px h-8 bg-white/10" />
                <div className="text-center">
                  <div className="text-[#00AACC] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>100%</div>
                  <div className="text-white/40 text-xs">Insured</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
