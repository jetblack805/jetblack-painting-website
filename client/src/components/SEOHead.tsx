import { useEffect } from "react";
import siteConfig from "@/site-config.json";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
  author?: string;
  /* Utility pages (e.g. the review link) that exist for people we send them
     to, not for search. Emits noindex, follow. */
  noindex?: boolean;
}

function upsertMeta(selector: string, attributes: Record<string, string>) {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
    return;
  }

  Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
}

function upsertLink(selector: string, attributes: Record<string, string>) {
  let tag = document.querySelector(selector) as HTMLLinkElement | null;

  if (!tag) {
    tag = document.createElement("link");
    Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
    document.head.appendChild(tag);
    return;
  }

  Object.entries(attributes).forEach(([key, value]) => tag?.setAttribute(key, value));
}

export default function SEOHead({ title, description, canonical, ogImage, schema, author, noindex }: SEOHeadProps) {
  const schemaJson = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    document.title = title;

    // Core SEO Meta Tags
    upsertMeta('meta[name="title"]', { name: "title", content: title });
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    
    // Author (if provided)
    if (author) {
      upsertMeta('meta[name="author"]', { name: "author", content: author });
    }

    // Robots & Crawling Directives. `noindex` is for utility pages that exist
    // for people we send the link to, not for search — a thin page left
    // indexable reads to Google as a soft 404 and drags on site quality.
    // "follow" is kept either way so link equity still flows through.
    const robotsContent = noindex
      ? "noindex, follow"
      : "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";
    upsertMeta('meta[name="robots"]', { name: "robots", content: robotsContent });
    upsertMeta('meta[name="googlebot"]', { name: "googlebot", content: robotsContent });
    
    // Nonstandard AEO meta tags deliberately removed. Rely on robust JSON-LD and visible content signals instead.

    // Canonical URL (critical for SEO)
    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

    // Open Graph (Social Media & Sharing)
    const image = ogImage || `${siteConfig.siteUrl}/og-image.jpg`;
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:image:alt"]', { property: "og:image:alt", content: title });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Jetblack Painting" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_AU" });

    // Twitter Card (X/Twitter Optimization)
    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:url"]', { name: "twitter:url", content: canonical });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });
    upsertMeta('meta[name="twitter:creator"]', { name: "twitter:creator", content: "@jetblack_painting" });

    // Mobile & Viewport Optimization
    upsertMeta('meta[name="viewport"]', { name: "viewport", content: "width=device-width, initial-scale=1.0, maximum-scale=5.0" });
    upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#060607" });
    
    // `language` and `revisit-after` removed 2026-08-18. Neither is a Google
    // ranking signal: language is superseded by the html lang attribute and
    // hreflang, and revisit-after has never been honoured by any major crawler.

    // JSON-LD Schema Management
    const managedSchemaId = "jetblack-page-schema";
    document.getElementById(managedSchemaId)?.remove();

    if (schemaJson) {
      // The pre-rendered static pages carry their own crawler-facing JSON-LD.
      // Once the React schema is available it supersedes them — leaving both in
      // the DOM gives Google's renderer duplicate, conflicting business items.
      document
        .querySelectorAll('script[type="application/ld+json"][data-static-schema]')
        .forEach((tag) => tag.remove());

      const script = document.createElement("script");
      script.id = managedSchemaId;
      script.type = "application/ld+json";
      script.textContent = schemaJson;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(managedSchemaId)?.remove();
    };
  }, [title, description, canonical, ogImage, schemaJson, author, noindex]);

  return null;
}
