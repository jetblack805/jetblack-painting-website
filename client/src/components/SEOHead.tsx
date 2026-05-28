import { useEffect } from "react";

interface SEOHeadProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

export default function SEOHead({ title, description, canonical, ogImage }: SEOHeadProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", description);
    } else {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      metaDesc.setAttribute("content", description);
      document.head.appendChild(metaDesc);
    }

    // Update or create canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute("href", canonical);
    } else {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      canonicalLink.setAttribute("href", canonical);
      document.head.appendChild(canonicalLink);
    }

    // Update OG tags
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: canonical },
      { property: "og:image", content: ogImage || "https://jetblackpainting.manus.space/og-image.jpg" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (tag) {
        tag.setAttribute("content", content);
      } else {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        tag.setAttribute("content", content);
        document.head.appendChild(tag);
      }
    });

    // Cleanup on unmount - restore defaults
    return () => {
      document.title = "House Painters Melbourne | Interior & Exterior Painting Experts | Jetblack Painting";
      const desc = document.querySelector('meta[name="description"]');
      if (desc) {
        desc.setAttribute("content", "Premium house painters in Melbourne. 5-star rated, fully insured, interior & exterior painting specialists. Servicing all Melbourne suburbs. Free quotes - Call 0432 077 782.");
      }
      const can = document.querySelector('link[rel="canonical"]');
      if (can) {
        can.setAttribute("href", "https://jetblackpainting.manus.space");
      }
    };
  }, [title, description, canonical, ogImage]);

  return null;
}
