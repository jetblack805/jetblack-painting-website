/*
 * Design: Bold Contrast — Contact section on light background
 * Contact info + call-to-action
 */
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { useInView } from "@/lib/useInView";

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
    value: "Mordialloc VIC 3195",
    href: "https://maps.google.com/?q=Jetblack+Painting+Mordialloc+VIC+3195",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 7am–5pm | Sat–Sun 9am–5pm",
    href: null,
  },
];

export default function Contact() {
  const left = useInView("-100px");
  const right = useInView("-100px");

  return (
    <section id="contact" className="py-24 bg-[#12100C]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div
            ref={left.ref}
            className={`reveal left ${left.visible ? "visible" : ""}`}
          >
            <span className="text-[#C49826] font-semibold text-sm tracking-widest uppercase mb-3 block">
              Get In Touch
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#EDE6D8] leading-tight mb-6"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Ready for a{" "}
              <span className="text-[#C49826]">Fresh Look?</span>
            </h2>
            <p className="text-[#B3ACA1] text-lg leading-relaxed mb-10">
              Get in touch for a free, no-obligation quote. We'll visit your property,
              discuss your needs, and provide a competitive price. No job is too big or
              too small.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0D0D0D] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#D4AB3A]" />
                  </div>
                  <div>
                    <div className="text-[#A39C90] text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#EDE6D8] font-semibold hover:text-[#C49826] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#EDE6D8] font-semibold">{item.value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: CTA Card */}
          <div
            ref={right.ref}
            className={`reveal right flex items-center ${right.visible ? "visible" : ""}`}
          >
            <div className="w-full bg-[#0D0D0D] rounded-xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C49826]/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#C49826]/5 rounded-tr-full" />

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
                  className="flex items-center justify-center gap-3 bg-[#C49826] hover:bg-[#A67F1E] text-[#0D0D0D] w-full py-5 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#D4AB3A]/30 hover:-translate-y-0.5 mb-4"
                >
                  <Phone className="w-6 h-6" />
                  0432 077 782
                </a>

                {/* Instagram CTA */}
                <a
                  href="https://www.instagram.com/jetblack_painting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-white/20 hover:border-[#D4AB3A]/50 text-white w-full py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/5"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-[#E0BE5C] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>5.0★</div>
                    <div className="text-white/60 text-xs">Google Rating</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-[#E0BE5C] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>13+</div>
                    <div className="text-white/60 text-xs">Years Experience</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-[#E0BE5C] font-bold text-lg" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>100%</div>
                    <div className="text-white/60 text-xs">Insured</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
