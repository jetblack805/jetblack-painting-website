import { breadcrumbSchema } from "@/lib/breadcrumbSchema";

// Builds the JSON-LD for a blog article: a BlogPosting, any extra schema the
// article carries (HowTo, etc.), an optional FAQPage, and a BreadcrumbList.
//
// Keep the values here in step with `articleMeta` and the article loop in
// scripts/generate-static-pages.mjs — SEOHead replaces the pre-rendered JSON-LD
// once React mounts, so the two layers have to describe the same page.
const SITE_URL = "https://jetblackpainting.com";

export function articleSchema(opts: {
  /** Should match the page's visible <h1>. */
  headline: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified: string;
  articleSection?: string;
  image?: string;
  faqs?: { question: string; answer: string }[];
  /** Additional schema objects for this article, e.g. a HowTo. */
  extra?: object[];
}) {
  const posting = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    inLanguage: "en-AU",
    datePublished: opts.datePublished,
    dateModified: opts.dateModified,
    ...(opts.articleSection ? { articleSection: opts.articleSection } : {}),
    image: opts.image ?? `${SITE_URL}/og-image.jpg`,
    author: {
      "@type": "Organization",
      name: "Jetblack Painting",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Jetblack Painting",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": opts.canonical,
    },
  };

  const schemas: object[] = [posting, ...(opts.extra ?? [])];

  if (opts.faqs && opts.faqs.length > 0) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: opts.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    });
  }

  schemas.push(
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Blog", url: "/blog/" },
      { name: opts.headline, url: opts.canonical },
    ])
  );

  return schemas;
}
