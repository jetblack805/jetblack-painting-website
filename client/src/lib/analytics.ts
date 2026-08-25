/*
 * GA4 event helper.
 *
 * Why this exists rather than calling window.gtag directly: client/index.html
 * loads gtag.js lazily inside requestIdleCallback (see the _loadGA block), so
 * BOTH window.gtag and window.dataLayer are undefined for the first moments of
 * a visit. A visitor who taps the sticky call bar straight away would otherwise
 * be lost — and for a painter, the phone tap is the conversion that matters
 * most. The fallback below pushes the call onto dataLayer in the same array
 * shape gtag's own queue uses, so gtag replays it once the library initialises.
 *
 * ⚠️ NEVER pass personal information through here. Sending a visitor's name,
 * email address or phone number to GA4 breaches Google's policy on PII in
 * Analytics and can get the property terminated. Suburb, service type and page
 * path are safe, and they are what ad targeting actually needs anyway.
 */

type EventParams = Record<string, string | number | boolean | undefined>;

interface GtagWindow extends Window {
  gtag?: (command: "event", eventName: string, params?: EventParams) => void;
  dataLayer?: unknown[];
}

export function trackEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as GtagWindow;

  try {
    if (typeof w.gtag === "function") {
      w.gtag("event", name, params);
      return;
    }
    // gtag has not initialised yet. Queue it the way gtag itself does.
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push(["event", name, params]);
  } catch {
    // Analytics must never break the page and must never stop a phone call
    // connecting. A dropped event is strictly better than a thrown error.
  }
}
