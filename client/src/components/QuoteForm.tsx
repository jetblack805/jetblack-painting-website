import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Phone, Mail, MapPin } from "lucide-react";
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

export default function QuoteForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteFormSchema),
  });

  const QUOTE_DESTINATION_EMAIL = "jimmy@jetblackpainting.com";

  const onSubmit = async (data: QuoteFormData) => {
    setIsSubmitting(true);
    try {
      const subject = `Quote request: ${data.serviceType} in ${data.suburb}`;
      const bodyLines = [
        `Name: ${data.name}`,
        `Phone: ${data.phone}`,
        data.email ? `Email: ${data.email}` : null,
        `Suburb: ${data.suburb}`,
        `Service: ${data.serviceType}`,
        data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
        data.budget ? `Budget: ${data.budget}` : null,
        data.projectDescription ? `\nProject description:\n${data.projectDescription}` : null,
      ].filter(Boolean);
      const mailtoUrl = `mailto:${QUOTE_DESTINATION_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

      window.location.href = mailtoUrl;

      toast.success("Opening your email app to send the quote request Ã¢â‚¬â€ just hit send!");
      reset();
    } catch (error) {
      toast.error("Couldn't open your email app. Please call us instead on 0432 077 782.");
      console.error("Quote submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const wrapper = useInView("-100px");
  return (
    <section id="quote" className="py-20 bg-white">
      <div className="container">
        <div
          ref={wrapper.ref}
          className={`reveal up max-w-4xl mx-auto ${wrapper.visible ? "visible" : ""}`}
        >
          <div className="text-center mb-12">
            <span className="text-[#007A99] font-semibold text-sm tracking-widest uppercase mb-3 block">
              Get Your Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D0D0D] mb-4">
              Request a Free Painting Quote
            </h2>
            <p className="text-[#666] text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll provide you with a detailed, no-obligation quote within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-[#F5F5F0] rounded-xl p-8 sm:p-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name */}
              <div>
                <label htmlFor="quote-name" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  id="quote-name"
                  {...register("name")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="quote-email" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Email Address (optional)
                </label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  id="quote-email"
                  {...register("email")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="quote-phone" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  placeholder="0432 077 782"
                  id="quote-phone"
                  {...register("phone")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                )}
              </div>

              {/* Suburb */}
              <div>
                <label htmlFor="quote-suburb" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Suburb/Area *
                </label>
                <select
                  id="quote-suburb"
                  {...register("suburb")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
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
                <label htmlFor="quote-service" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Service Type *
                </label>
                <select
                  id="quote-service"
                  {...register("serviceType")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
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
                <label htmlFor="quote-date" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Preferred Quote Date
                </label>
                <input
                  type="date"
                  id="quote-date"
                  {...register("preferredDate")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
                />
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="quote-budget" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                  Budget Range (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g., $5,000 - $10,000"
                  id="quote-budget"
                  {...register("budget")}
                  className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Project Description */}
            <div className="mb-6">
              <label htmlFor="quote-description" className="block text-sm font-semibold text-[#0D0D0D] mb-2">
                Project Description (optional)
              </label>
              <textarea
                placeholder="Tell us about your painting project. Include details like room size, current condition, color preferences, etc."
                rows={5}
                id="quote-description"
                {...register("projectDescription")}
                className="w-full px-4 py-3 rounded-lg border border-[#DDD] bg-white text-[#0D0D0D] placeholder-[#999] focus:outline-none focus:ring-2 focus:ring-[#00AACC] focus:border-transparent transition resize-none"
              />
              {errors.projectDescription && (
                <p className="text-red-500 text-sm mt-1">{errors.projectDescription.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#007A99] hover:bg-[#006B85] text-white font-bold py-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#00AACC]/30"
            >
              {isSubmitting ? "Submitting..." : "Request Free Quote"}
            </button>

            <p className="text-center text-[#999] text-sm mt-4">
              We respect your privacy. Your information will only be used to provide your quote.
            </p>
          </form>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Phone className="w-8 h-8 text-[#007A99]" />
              </div>
              <p className="text-[#0D0D0D] font-semibold">24-Hour Response</p>
              <p className="text-[#999] text-sm">We'll call you within 24 hours</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <Mail className="w-8 h-8 text-[#007A99]" />
              </div>
              <p className="text-[#0D0D0D] font-semibold">No Obligation</p>
              <p className="text-[#999] text-sm">Free quote with no hidden costs</p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-3">
                <MapPin className="w-8 h-8 text-[#007A99]" />
              </div>
              <p className="text-[#0D0D0D] font-semibold">Local Experts</p>
              <p className="text-[#999] text-sm">Serving all Melbourne suburbs</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
