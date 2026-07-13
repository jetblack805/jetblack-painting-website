// Builds Schema.org structured data for a service page.
// Deliberately omits aggregateRating — the business rating lives once in the
// LocalBusiness schema (suburb pages / homepage) to avoid Google's
// "multiple aggregate ratings" error.
//
// When `faqs` are supplied, a FAQPage schema is returned alongside the Service
// schema (as an array) so the page is eligible for FAQ rich results.
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

  if (!opts.faqs || opts.faqs.length === 0) return service;

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: opts.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return [service, faqPage];
}
