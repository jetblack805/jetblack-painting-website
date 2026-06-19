import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  schema?: object | object[];
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

export default function SEOHead({ title, description, canonical, ogImage, schema }: SEOHeadProps) {
  const schemaJson = schema ? JSON.stringify(schema) : "";

  useEffect(() => {
    document.title = title;

    upsertMeta('meta[name="title"]', { name: "title", content: title });
    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[name="robots"]', {
      name: "robots",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    });
    upsertMeta('meta[name="googlebot"]', {
      name: "googlebot",
      content: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
    });

    upsertLink('link[rel="canonical"]', { rel: "canonical", href: canonical });

    const image = ogImage || "https://jetblackpainting.manus.space/og-image.jpg";
    upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: title });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonical });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: image });
    upsertMeta('meta[property="og:site_name"]', { property: "og:site_name", content: "Jetblack Painting" });
    upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_AU" });

    upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:url"]', { name: "twitter:url", content: canonical });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: image });

    const managedSchemaId = "jetblack-page-schema";
    document.getElementById(managedSchemaId)?.remove();

    if (schemaJson) {
      const script = document.createElement("script");
      script.id = managedSchemaId;
      script.type = "application/ld+json";
      script.textContent = schemaJson;
      document.head.appendChild(script);
    }

    return () => {
      document.getElementById(managedSchemaId)?.remove();
    };
  }, [title, description, canonical, ogImage, schemaJson]);

  return null;
}
