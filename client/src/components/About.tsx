import { Shield, Clock, Award, Users } from "lucide-react";
import { useInView } from "@/lib/useInView";
import ABOUT_IMG from "@/assets/images/about-team-at-work.webp";
import TEAM_IMG from "@/assets/images/about-branded-workwear.webp";

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
    <section id="about" className="py-24 bg-[#0D0D0D]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <div
            ref={images.ref}
            className={`reveal left relative ${images.visible ? "visible" : ""}`}
          >
            <div className="relative">
              <img loading="lazy" decoding="async"
                src={TEAM_IMG}
                alt="Jimmy Demirci — owner of Jetblack Painting Melbourne"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -right-4 lg:-right-8 w-40 sm:w-52 rounded-lg overflow-hidden shadow-xl border-4 border-[#0D0D0D]">
                <img loading="lazy" decoding="async"
                  src={ABOUT_IMG}
                  alt="Jetblack Painting team on site in Melbourne"
                  className="w-full h-32 sm:h-40 object-cover"
                />
              </div>
              <div className="absolute -top-4 -left-4 bg-[#007A99] text-white rounded-lg px-5 py-3 shadow-lg">
                <div className="text-2xl font-bold" style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>13+</div>
                <div className="text-xs font-medium uppercase tracking-wider">Years Exp.</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div
            ref={content.ref}
            className={`reveal right ${content.visible ? "visible" : ""}`}
          >
            <span className="text-[#00AACC] font-semibold text-sm tracking-widest uppercase mb-3 block">
              Meet the Owner
            </span>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6"
              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}
            >
              Hi, I'm Jimmy —{" "}
              <span className="text-[#00AACC]">I'm on Every Job</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed mb-5">
              I'm Jimmy Demirci, founder and owner of Jetblack Painting. I started this
              business in 2011 after seeing too many Melbourne homeowners left disappointed
              by painters who rushed prep, used cheap materials, and disappeared after being paid.
            </p>
            <p className="text-white/60 leading-relaxed mb-5">
              For over 13 years I've been painting homes across Mordialloc, Brighton, Toorak,
              Bayside, and the Mornington Peninsula. The difference with Jetblack is simple:
              I personally visit every job — to scope the work, check in during the project,
              and do the final quality walkthrough before we leave. You won't be handed off
              to a crew you've never met.
            </p>
            <p className="text-white/60 leading-relaxed mb-10">
              We use only premium Dulux and Taubmans paints, carry&nbsp;$10M public
              liability insurance, and back every project with a 5-year written workmanship
              guarantee. If it's not right, I'll fix it — that's my promise.
            </p>

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
      <div className="w-10 h-10 rounded bg-[#007A99]/10 flex items-center justify-center shrink-0">
        <value.icon className="w-5 h-5 text-[#00AACC]" />
      </div>
      <div>
        <h3 className="text-white font-semibold text-sm mb-1">{value.title}</h3>
        <p className="text-white/50 text-xs leading-relaxed">{value.description}</p>
      </div>
    </div>
  );
}
