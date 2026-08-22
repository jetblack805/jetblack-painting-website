/**
 * Creates an AggregateRating schema object for high-trust local SEO signals.
 * Used on LocalBusiness, Service, and review-enabled pages.
 *
 * Based on verified Jetblack Painting Google Business Profile:
 * - 5.0 star rating
 * - 17+ verified reviews
 *
 * @see https://schema.org/AggregateRating
 */
export function aggregateRatingSchema(opts?: { ratingValue?: number; reviewCount?: number }) {
  return {
    "@type": "AggregateRating",
    "ratingValue": opts?.ratingValue ?? 5.0,
    "reviewCount": opts?.reviewCount ?? 17,
    "bestRating": 5,
    "worstRating": 1,
  };
}

/**
 * Creates individual Review schema objects for rich snippet display.
 * Used to markup customer testimonials and reviews.
 *
 * @param author - Customer or reviewer name
 * @param reviewBody - The review text
 * @param ratingValue - 1-5 star rating
 * @param datePublished - ISO 8601 date (e.g., "2026-07-15")
 */
export function reviewSchema(opts: {
  author: string;
  reviewBody: string;
  ratingValue: number;
  datePublished: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": opts.author,
    },
    "reviewBody": opts.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": opts.ratingValue,
      "bestRating": 5,
      "worstRating": 1,
    },
    "datePublished": opts.datePublished,
  };
}