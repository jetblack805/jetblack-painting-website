/**
 * Creates an Organization schema for Jetblack Painting.
 * Typically used in the footer or site-wide to establish brand identity
 * and provide consistent business information for crawlers.
 *
 * @see https://schema.org/Organization
 */
export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://jetblackpainting.com/#organization",
    "name": "Jetblack Painting",
    "alternateName": [
      "Jet Black Painting",
      "Jetblack Painting Melbourne",
      "Jimmy Demirci Painting"
    ],
    "url": "https://jetblackpainting.com",
    "telephone": "+61432077782",
    "email": "jimmy@jetblackpainting.com",
    // ImageObject rather than a bare URL string: Google resolves a brand
    // logo more confidently when the dimensions and caption are declared, and
    // a bare string leaves it to guess. Jimmy reported Search still showing an
    // old gold monogram on 2026-09-05 — the favicon files were already correct,
    // so this tightens the other half of the brand-image signal.
    "logo": {
      "@type": "ImageObject",
      "url": "https://jetblackpainting.com/logo.jpg",
      "width": 1080,
      "height": 1080,
      "caption": "Jetblack Painting",
    },
    "image": "https://jetblackpainting.com/og-image.jpg",
    "description": "Melbourne's top-rated residential and commercial painting company with 18+ years experience",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mordialloc",
      "addressRegion": "VIC",
      "postalCode": "3195",
      "addressCountry": "AU",
      "streetAddress": "Mordialloc, Victoria"
    },
    "foundingDate": "2011",
    "areaServed": {
      "@type": "State",
      "name": "Victoria, Australia"
    },
    "sameAs": [
      "https://www.instagram.com/jetblack_painting",
      "https://www.facebook.com/jetblackpainting",
      "https://www.youtube.com/@jetblackpaint",
      "https://www.tiktok.com/@jetblack_painting",
      "https://www.linkedin.com/in/jetblackpainting",
      "https://maps.google.com/maps?cid=5159340262454594349",
      "https://www.oneflare.com.au/painter/vic/mordialloc/jetblack-painting"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "Customer Service",
      "telephone": "+61432077782",
      "email": "jimmy@jetblackpainting.com",
      "url": "https://jetblackpainting.com"
    }
  };
}