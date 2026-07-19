import { Shield, Clock, Award, Users } from "lucide-react";
import { useInView } from "@/lib/useInView";
import ABOUT_IMG from "@/assets/images/about-team-at-work.webp";
import TEAM_IMG from "@/assets/images/about-jimmy-owner.webp";

const values = [
  {
    icon: Shield,
    title: "Owner on Every Job",
    description: "Jimmy personally visits every site — to scope the work, check in during the job, and sign off on the final finish.",
  },
  {
    icon: Clock,
    title: "Reliable & On Time",
    description: "We show up when we say we will and complete projects on schedule. No chasing, no excuses.",
  },
  {
    icon: Award,
    title: "Premium Materials Only",
    description: "Dulux and Taubmans premium paints, proper prep, and a 5-year written workmanship guarantee on every project.",
  },
  {
    icon: Users,
    title: "Clean & Respectful",
    description: "We treat your home like our own — drop sheets down, furniture protected, site spotless when we leave.",
  },
];

export default function About() {
  const images = useInView("-100px");
  const content = useInView("-100px");

  return (
    <section id="about" className="py-24 lg:py-28 bg-[#0A0A0A]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div
            ref={images.ref}
            className={`reveal left relative ${images.visible ? "visible" : ""}`}
          >
            <div className="relative">
              <div className="relative">
                <img loading="lazy" decoding="async"
                  src={TEAM_IMG}
                  alt="Jimmy Demirci, owner of Jetblack Painting, on the job in Melbourne"
                  className="w-full shadow-2xl"
                />
                <div className="absolute inset-3.5 border border-[#C9A227]/50 pointer-events-none" aria-hidden="true" />
              </div>
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-40 sm:w-52 overflow-hidden shadow-xl border-4 border-[#0A0A0A]">
                <img loading="lazy" decoding="async"
                  src={ABOUT_IMG}
                  alt="Jetblack Painting team on site in Melbourne"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#C9A227] text-[#0A0A0A] px-5 py-3 shadow-lg">
                <div className="text-2xl" style={{ fontFamily: "Georgia, serif" }}>13+</div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em]">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={content.ref}
            className={`reveal right ${content.visible ? "visible" : ""}`}
          >
            <span className="lux-eyebrow">Meet Jimmy</span>
            <h2 className="text-3xl sm:text-4xl lg:text-[2.9rem] text-[#F4F0E7] leading-[1.18] mb-6">
              Proudly local.{" "}
              <span className="text-[#C9A227]">Passionate about perfection.</span>
            </h2>
            <p className="text-[#EDE9E0]/75 text-lg font-light leading-[1.8] mb-5">
              I'm Jimmy Demirci, founder and owner of Jetblack Painting. I started this
              business in 2011 after seeing too many Melbourne homeowners left disappointed
              by painters who rushed prep, used cheap materials, and disappeared after being paid.
            </p>
            <p className="text-[#EDE9E0]/60 font-light leading-[1.8] mb-5">
              For over 13 years I've been painting homes across Mordialloc, Brighton, Toorak,
              Bayside, and the Mornington Peninsula. The difference with Jetblack is simple:
              I personally visit every job — to scope the work, check in during the project,
              and do the final quality walkthrough before we leave. You won't be handed off
              to a crew you've never met.
            </p>
            <p className="text-[#EDE9E0]/60 font-light leading-[1.8] mb-8">
              We use only premium Dulux and Taubmans paints, carry&nbsp;$10M public
              liability insurance, and back every project with a 5-year written workmanship
              guarantee. If it's not right, I'll fix it — that's my promise.
            </p>

            {/* Signature */}
            <div className="mb-10">
              <div className="text-[#C9A227] text-4xl lux-signature">Jimmy</div>
              <div className="text-[9.5px] tracking-[0.3em] uppercase text-[#98938B] mt-1.5">Founder &amp; Director</div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((value, idx) => (
                <ValueCard key={value.title} value={value} delay={idx * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ value, delay }: { value: (typeof values)[number]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div
      ref={ref}
      className={`reveal up flex gap-3 ${visible ? "visible" : ""}`}
      style={{ transitionDelay: visible ? `${delay}s` : "0s" }}
    >
      <div className="w-10 h-10 border border-[#C9A227]/35 flex items-center justify-center shrink-0">
        <value.icon className="w-4.5 h-4.5 text-[#C9A227]" strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="text-[#EDE9E0] text-[11px] font-bold tracking-[0.12em] uppercase mb-1.5" style={{ fontFamily: "system-ui, sans-serif" }}>{value.title}</h3>
        <p className="text-[#EDE9E0]/50 text-xs font-light leading-relaxed">{value.description}</p>
      </div>
    </div>
  );
}
