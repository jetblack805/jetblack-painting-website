// Builds Schema.org Service structured data for a service page.
// Deliberately omits aggregateRating — the business rating lives once in the
// LocalBusiness schema (suburb pages / homepage) to avoid Google's
// "multiple aggregate ratings" error.
export function serviceSchema(opts: {
  serviceType: string;
  name: string;
  description: string;
  canonical: string;
}) {
  return {
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
}
