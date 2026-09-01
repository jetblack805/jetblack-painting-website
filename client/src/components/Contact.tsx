/*
 * Design: Bold Contrast — Contact section on light background
 * Contact info + call-to-action
 */
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { useInView } from "@/lib/useInView";

import siteConfig from "@/site-config.json";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: siteConfig.phoneDisplay || "0432 077 782",
    href: `tel:${siteConfig.phoneHref || "0432077782"}`,
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
    href: "https://maps.google.com/maps?cid=5159340262454594349",
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
    <section id="contact" className="py-24 bg-[#060607]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <div
            ref={left.ref}
            className={`reveal left ${left.visible ? "visible" : ""}`}
          >
            <span className="lux-eyebrow">
              Get In Touch
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl text-[#EDEDEF] leading-tight mb-6"
            >
              Ready for a{" "}
              <span className="text-[#D0A050]">Fresh Look?</span>
            </h2>
            <p className="text-[#B4B4B8] text-lg leading-relaxed mb-10">
              Get in touch for a free, no-obligation quote. We'll visit your property,
              discuss your needs, and provide a competitive price. No job is too big or
              too small.
            </p>

            {/* Contact Details */}
            <div className="space-y-5">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-[#0A0A0B] flex items-center justify-center shrink-0">
                    <item.icon className="w-5 h-5 text-[#E9BE6C]" />
                  </div>
                  <div>
                    <div className="text-[#A3A3A8] text-xs uppercase tracking-wider mb-0.5">{item.label}</div>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-[#EDEDEF] font-semibold hover:text-[#D0A050] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-[#EDEDEF] font-semibold">{item.value}</span>
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
            <div className="w-full bg-[#0A0A0B] rounded-xl p-8 sm:p-10 relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D0A050]/10 rounded-bl-full" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#D0A050]/5 rounded-tr-full" />

              <div className="relative z-10">
                <h3
                  className="text-2xl sm:text-3xl text-white mb-4"
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
                  className="flex items-center justify-center gap-3 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] w-full py-5 rounded-lg font-bold text-lg transition-all duration-200 hover:shadow-lg hover:shadow-[#E9BE6C]/30 hover:-translate-y-0.5 mb-4"
                >
                  <Phone className="w-6 h-6" />
                  0432 077 782
                </a>

                {/* Instagram CTA */}
                <a
                  href="https://www.instagram.com/jetblack_painting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 border border-white/20 hover:border-[#E9BE6C]/50 text-white w-full py-4 rounded-lg font-semibold transition-all duration-200 hover:bg-white/5"
                >
                  <Instagram className="w-5 h-5" />
                  Follow us on Instagram
                </a>

                {/* Trust signals */}
                <div className="flex items-center justify-center gap-6 mt-8 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-[#E9BE6C] font-bold text-lg" >5.0★</div>
                    <div className="text-white/60 text-xs">Google Rating</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-[#E9BE6C] font-bold text-lg" >18+</div>
                    <div className="text-white/60 text-xs">Years Experience</div>
                  </div>
                  <div className="w-px h-8 bg-white/10" />
                  <div className="text-center">
                    <div className="text-[#E9BE6C] font-bold text-lg" >100%</div>
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
