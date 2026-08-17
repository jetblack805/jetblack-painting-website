import { breadcrumbSchema } from "@/lib/breadcrumbSchema";

// Builds Schema.org structured data for a service page.
// Deliberately omits aggregateRating — the business rating is declared exactly
// once site-wide, in client/index.html's "#business" @graph node, to avoid
// Google's "multiple aggregate ratings" error.
//
// Always returns an array: the Service schema, a FAQPage schema when `faqs` are
// supplied (so the page is eligible for FAQ rich results), and a BreadcrumbList
// matching the one the static generator emits for the same route.
export function serviceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
  canonical: string;
  faqs?: { question: string; answer: string }[];
}) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.serviceType,
    name: opts.name,
    description: opts.description,
    url: opts.canonical,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://jetblackpainting.com/#business",
      name: "Jetblack Painting",
      telephone: "+61432077782",
      url: "https://jetblackpainting.com",
    },
    areaServed: {
      "@type": "State",
      name: "Victoria",
    },
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: "+61432077782",
      serviceUrl: "https://jetblackpainting.com",
    },
  };

  const breadcrumb = breadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/#services" },
    { name: opts.serviceType, url: opts.canonical },
  ]);

  if (!opts.faqs || opts.faqs.length === 0) return [service, breadcrumb];

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [service, faqPage, breadcrumb];
}
