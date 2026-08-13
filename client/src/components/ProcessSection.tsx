/*
 * Design: Luxury Black & Gold — cream process timeline
 * "Six steps. Zero surprises." — crawlable text for SEO/AEO.
 */
import { useInView } from "@/lib/useInView";

const steps = [
  {
    name: "Quote",
    description: "A detailed, transparent written quote after a proper on-site inspection.",
  },
  {
    name: "Preparation",
    description: "Washing, sanding, filling and priming every surface the right way.",
  },
  {
    name: "Protection",
    description: "Floors, furniture, gardens and fittings fully covered before we start.",
  },
  {
    name: "Painting",
    description: "Premium Dulux and Taubmans systems applied with precision.",
  },
  {
    name: "Inspection",
    description: "A detailed walk-through of every surface with you before sign-off.",
  },
  {
    name: "Completion",
    description: "Spotless handover backed by our 5-year written guarantee.",
  },
];

export default function ProcessSection() {
  const header = useInView("-100px");

  return (
    <section id="process" className="py-24 lg:py-28 bg-[#F5F1E8]" aria-label="Our painting process">
      <div className="container max-w-6xl">
        <div
          ref={header.ref}
          className={`reveal up ${header.visible ? "visible" : ""}`}
        >
          {/* lux-eyebrow-on-cream, not a text-[...] utility: .lux-eyebrow sets its
              own colour in index.css, which loads after Tailwind's utilities and
              therefore beats one at equal specificity. See index.css for the
              contrast rationale. The decorative timeline rule/dots below stay
              #B0863C — they're not text, so the contrast audit doesn't apply. */}
          <span className="lux-eyebrow lux-eyebrow-on-cream">Our Process</span>
          <h2 className="text-3xl lg:text-4xl text-[#1A1A1A]">
            Six steps. <span className="text-[#85622A]">Zero surprises.</span>
          </h2>
        </div>

        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-12 mt-16">
          {/* connecting rule (desktop) */}
          <div className="hidden lg:block absolute top-[5px] left-[3%] right-[3%] h-px bg-[#B0863C]/40" aria-hidden="true" />
          {steps.map((step, idx) => (
            <div key={step.name} className="relative pt-9">
              <span
                className={`absolute top-0 left-0 w-[11px] h-[11px] rounded-full border-[1.5px] border-[#B0863C] ${idx === 0 ? "bg-[#B0863C]" : "bg-[#F5F1E8]"}`}
                aria-hidden="true"
              />
              <div className="text-xs text-[#85622A] mb-2" style={{ fontFamily: "Georgia, serif" }}>
                {String(idx + 1).padStart(2, "0")}
              </div>
              <h3 className="text-[12px] font-bold tracking-[0.1em] uppercase text-[#1A1A1A] mb-2" style={{ fontFamily: "system-ui, sans-serif" }}>
                {step.name}
              </h3>
              <p className="text-[12.5px] text-[#5C5C60] leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
