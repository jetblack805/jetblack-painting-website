import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { useInView } from "@/lib/useInView";
import { toast } from "sonner";

// Validation schema
const quoteFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address").optional().or(z.literal("")),
  phone: z.string().regex(/^[\d\s\-\+\(\)]+$/, "Invalid phone number"),
  suburb: z.string().min(1, "Please select a suburb"),
  serviceType: z.string().min(1, "Please select a service type"),
  projectDescription: z.string().optional(),
  preferredDate: z.string().optional(),
  budget: z.string().optional(),
});

type QuoteFormData = z.infer<typeof quoteFormSchema>;

const suburbs = [
  "Keysborough",
  "Brighton",
  "Mordialloc",
  "Hawthorn",
  "Mentone",
  "Sandringham",
  "Mornington Peninsula",
  "Bayside",
  "Kingston",
  "Greater Dandenong",
  "Toorak",
  "Malvern",
  "Camberwell",
  "Bentleigh",
  "Caulfield",
  "Hampton",
];

const serviceTypes = [
  "Interior Painting",
  "Exterior Painting",
  "Commercial Painting",
  "Roof Painting",
  "Fence Painting",
  "Kitchen Cabinet Resurfacing",
  "Other",
];

import siteConfig from "@/site-config.json";

const QUOTE_DESTINATION_EMAIL = siteConfig.email || "jimmy@jetblackpainting.com";
const PHONE_DISPLAY = siteConfig.phoneDisplay || "0432 077 782";
const PHONE_TEL = siteConfig.phoneHref || "0432077782";
// International form for the SMS link
const PHONE_SMS = siteConfig.phoneSms || "+61432077782";

function summariseRequest(data: QuoteFormData) {
  return [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    `Suburb: ${data.suburb}`,
    `Service: ${data.serviceType}`,
    data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
    data.budget ? `Budget: ${data.budget}` : null,
    data.projectDescription ? `\nProject description:\n${data.projectDescription}` : null,
  ]
    .filter(Boolean)
    .join("\n");
}

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Holds the completed request so the details stay on screen after submitting.
  // This form used to call reset() and fire a mailto: immediately, which meant
  // anyone without a configured mail client -- most phones, most work machines,
  // anyone on webmail -- saw nothing happen AND lost everything they had typed.
  // Those enquiries were silently gone, and Jimmy never knew they existed. The
  // details now stay on screen with call / text / email options, so there is
  // always a way through even when mailto: does nothing.
  const [submitted, setSubmitted] = useState<QuoteFormData | null>(null);
  const [delivered, setDelivered] = useState(false);
  const [copied, setCopied] = useState(false);
  // Honeypot: hidden from real users, so anything that fills it is a bot.
  const [honeypot, setHoneypot] = useState("");
  // Used to reject submissions that arrive impossibly fast (bots).
  const startedAt = useRef(Date.now());
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    setCopied(false);

    // Post to the endpoint first. If it confirms delivery, the visitor is done
    // and needs no further action. If it cannot deliver — no channel configured
    // yet, provider outage, or the request never made it — we say so plainly
    // and fall back to call/text/email rather than claiming it was sent.
    let confirmed = false;
    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          company: honeypot,
          elapsedMs: Date.now() - startedAt.current,
          page: typeof window !== "undefined" ? window.location.pathname : "",
        }),
      });
      if (response.ok) {
        const result = (await response.json()) as { delivered?: boolean };
        confirmed = result.delivered === true;
      }
    } catch {
      // Offline, blocked, or the request failed — fall through to the manual
      // options, which is the whole point of keeping them.
    }

    setDelivered(confirmed);
    setSubmitted(data);
    setIsSubmitting(false);
  };

  const startOver = () => {
    setSubmitted(null);
    setDelivered(false);
    setCopied(false);
    setHoneypot("");
    startedAt.current = Date.now();
    reset();
  };

  const copyDetails = async (summary: string) => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      toast.success("Details copied.");
    } catch {
      // Clipboard access is blocked in some mobile browsers and in any non-HTTPS
      // context; the details are already on screen to copy by hand.
      toast.error("Couldn't copy automatically - select the text above instead.");
    }
  };

  const wrapper = useInView("-100px");
  return (
    <section id="quote" className="py-20 bg-[#131316]">
      <div className="container">
        <div
          ref={wrapper.ref}
          className={`reveal up max-w-4xl mx-auto ${wrapper.visible ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <span className="lux-eyebrow">
              Get Your Quote
            </span>
            <h2 className="text-3xl sm:text-4xl text-[#EDEDEF] mb-4">
              Request a Free Painting Quote
            </h2>
            <p className="text-[#A3A3A8] text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll provide you with a detailed, no-obligation quote within 24–48 hours.
            </p>
          </div>

          {submitted ? (
            (() => {
              const summary = summariseRequest(submitted);
              const subject = `Quote request: ${submitted.serviceType} in ${submitted.suburb}`;
              return (
                <div className="bg-[#060607] rounded-xl p-8 sm:p-12">
                  <h3 className="text-2xl text-[#EDEDEF] mb-3">
                    {delivered
                      ? `Thanks ${submitted.name.split(" ")[0]} — we've got your request`
                      : `Almost there, ${submitted.name.split(" ")[0]} — send it through`}
                  </h3>
                  <p className="text-[#A3A3A8] mb-8">
                    {delivered
                      ? "Jimmy will be in touch within 24–48 hours. If you'd rather not wait, call or text and you'll usually get an answer on the spot."
                      : "Pick whichever suits you. Calling gets the fastest answer — Jimmy usually picks up, and you can have a rough idea on the spot."}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                    <a
                      href={`tel:${PHONE_TEL}`}
                      className="flex items-center justify-center gap-2 bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] font-bold py-4 px-4 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      Call {PHONE_DISPLAY}
                    </a>
                    <a
                      href={`sms:${PHONE_SMS}?body=${encodeURIComponent(summary)}`}
                      className="flex items-center justify-center gap-2 border border-[#D0A050] text-[#D0A050] hover:bg-[#D0A050] hover:text-[#0A0A0B] font-bold py-4 px-4 rounded-lg transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      Text the details
                    </a>
                    <a
                      href={`mailto:${QUOTE_DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summary)}`}
                      className="flex items-center justify-center gap-2 border border-[#2A2A30] text-[#EDEDEF] hover:border-[#D0A050] hover:text-[#D0A050] font-bold py-4 px-4 rounded-lg transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Email instead
                    </a>
                  </div>

                  <div className="border border-[#2A2A30] rounded-lg p-5 bg-[#131316]">
                    <div className="flex items-center justify-between mb-3 gap-4">
                      <p className="text-sm font-semibold text-[#EDEDEF]">Your request</p>
                      <button
                        type="button"
                        onClick={() => copyDetails(summary)}
                        className="text-sm text-[#D0A050] hover:underline shrink-0"
                      >
                        {copied ? "Copied" : "Copy details"}
                      </button>
                    </div>
                    <pre className="text-[#A3A3A8] text-sm whitespace-pre-wrap font-sans m-0">
                      {summary}
                    </pre>
                  </div>

                  <button
                    type="button"
                    onClick={startOver}
                    className="mt-6 text-sm text-[#A3A3A8] hover:text-[#D0A050] transition-colors"
                  >
                    Start a new request
                  </button>
                </div>
              );
            })()
          ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#060607] rounded-xl p-8 sm:p-12">
            {/*
              Honeypot. Hidden from people (and from screen readers via
              aria-hidden + tabIndex -1) but visible to naive bots, which fill
              every field they find. Anything arriving with this set is dropped
              server-side. Cheaper and less hostile to real customers than a
              CAPTCHA.
            */}
            <div className="absolute w-px h-px -m-px overflow-hidden" aria-hidden="true">
              <label htmlFor="quote-company">Company (leave blank)</label>
              <input
                type="text"
                id="quote-company"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="quote-name" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  id="quote-name"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] placeholder-[#8B8B90] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="quote-email" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Email Address (optional)
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  id="quote-email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] placeholder-[#8B8B90] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="0432 077 782"
                  id="quote-phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] placeholder-[#8B8B90] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Suburb */}
              <div>
                <label htmlFor="quote-suburb" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Suburb/Area *
                </label>
                <select
                  id="quote-suburb"
                  {...register("suburb")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                >
                  <option value="">Select a suburb</option>
                  {suburbs.map((suburb) => (
                    <option key={suburb} value={suburb}>
                      {suburb}
                    </option>
                  ))}
                  <option value="Other">Other (Melbourne metro)</option>
                </select>
                {errors.suburb && (
                  <p className="text-red-500 text-sm mt-1">{errors.suburb.message}</p>
                )}
              </div>

              {/* Service Type */}
              <div>
                <label htmlFor="quote-service" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Service Type *
                </label>
                <select
                  id="quote-service"
                  {...register("serviceType")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                >
                  <option value="">Select a service</option>
                  {serviceTypes.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
                {errors.serviceType && (
                  <p className="text-red-500 text-sm mt-1">{errors.serviceType.message}</p>
                )}
              </div>

              {/* Preferred Date */}
              <div>
                <label htmlFor="quote-date" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Preferred Quote Date
                </label>
                <input
                  type="date"
                  id="quote-date"
                  {...register("preferredDate")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="quote-budget" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., $5,000 - $10,000"
                  id="quote-budget"
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] placeholder-[#8B8B90] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <label htmlFor="quote-description" className="block text-sm font-semibold text-[#EDEDEF] mb-2">
                Project Description (optional)
              </label>
              <textarea
                placeholder="Tell us about your painting project. Include details like room size, current condition, color preferences, etc."
                rows={5}
                id="quote-description"
                {...register("projectDescription")}
                className="w-full px-4 py-3 rounded-lg border border-[#2A2A30] bg-[#131316] text-[#EDEDEF] placeholder-[#8B8B90] focus:outline-none focus:ring-2 focus:ring-[#E9BE6C] focus:border-transparent transition resize-none"
              />
              {errors.projectDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#D0A050] hover:bg-[#B0863C] text-[#0A0A0B] font-bold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#E9BE6C]/30"
            >
              {isSubmitting ? "Submitting..." : "Request Free Quote"}
            </button>

            <p className="text-center text-[#A3A3A8] text-sm mt-4">
              Prefer to talk? Call Jimmy on{" "}
              <a href={`tel:${PHONE_TEL}`} className="text-[#D0A050] hover:underline font-semibold">
                {PHONE_DISPLAY}
              </a>
              . We respect your privacy — your information is only used to provide your quote.
            </p>
          </form>
          )}

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Phone className="w-8 h-8 text-[#D0A050]" />
              </div>
              <p className="text-[#EDEDEF] font-semibold">24–48 Hour Response</p>
              <p className="text-[#A3A3A8] text-sm">We'll call you within 24–48 hours</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Mail className="w-8 h-8 text-[#D0A050]" />
              </div>
              <p className="text-[#EDEDEF] font-semibold">No Obligation</p>
              <p className="text-[#A3A3A8] text-sm">Free quote with no hidden costs</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-[#D0A050]" />
              </div>
              <p className="text-[#EDEDEF] font-semibold">Local Experts</p>
              <p className="text-[#A3A3A8] text-sm">Serving all Melbourne suburbs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
