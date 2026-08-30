import { createRoot } from "react-dom/client";
import App from "./App";
import { trackEvent, trackMetaEvent } from "./lib/analytics";
import "./index.css";

/*
 * Phone and email taps — one delegated listener rather than an onClick on each
 * anchor.
 *
 * The phone number appears across 21 components: 31 hardcoded
 * href="tel:0432077782" anchors plus template-literal ones built from
 * siteConfig.phoneHref. Every phone action on the site is a real <a> — there
 * are no `window.location = "tel:"` handlers — so a single delegated listener
 * catches all of them, and catches any anchor added later without needing to
 * remember to wire it up.
 *
 * capture:true so this runs before anything downstream can stop propagation.
 * It deliberately never calls preventDefault: the call has to connect.
 *
 * Known gap: a tap that lands before React hydrates is not counted. The static
 * layer ships a couple of tel: anchors per page for crawlers and those are live
 * HTML immediately. Hydration is quick and the sticky call bar is React, so the
 * undercount should be small — but phone conversions will read slightly low.
 */
document.addEventListener(
  "click",
  (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;

    const link = target.closest('a[href^="tel:"], a[href^="mailto:"]');
    if (!link) return;

    const href = link.getAttribute("href") ?? "";
    const isPhone = href.startsWith("tel:");

    trackEvent(isPhone ? "phone_call_click" : "email_click", {
      method: isPhone ? "phone" : "email",
      source_page: window.location.pathname,
      // Which CTA was tapped — the sticky bar, the footer, a suburb page hero.
      // This is Jetblack's own contact detail, never the visitor's.
      link_text: (link.textContent ?? "").trim().slice(0, 60) || undefined,
    });

    // Meta's standard event for "reached out". Same tap, same rules: never
    // preventDefault, never any of the visitor's own details -- the phone
    // number involved is Jetblack's, not theirs.
    trackMetaEvent("Contact", {
      content_category: isPhone ? "phone" : "email",
    });
  },
  { capture: true },
);

createRoot(document.getElementById("root")!).render(<App />);
// #hero-static stays in the DOM intentionally — removing it causes the browser to
// discard its LCP entry and seek a new candidate (the React Hero img at ~5 s),
// which resets LCP. The element is visually hidden behind #root (z-index:1).
