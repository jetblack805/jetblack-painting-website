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

/*
 * Meta (Facebook) Pixel — standard events.
 *
 * Separate from trackEvent above because the two platforms do not share an
 * event vocabulary. GA4 takes free-form names (generate_lead); Meta wants its
 * own standard names (Lead, Contact) or they do not become optimisable
 * conversions. Sending a GA4 name to Meta produces a custom event that its
 * bidding cannot use, which is the failure mode this split exists to avoid.
 *
 * No bespoke queue here. The inline snippet in the page head installs Meta's
 * own fbq stub synchronously — that costs no network request — and only defers
 * fetching fbevents.js to requestIdleCallback. So window.fbq exists from the
 * first moment, buffers into fbq.queue, and the library replays it on load.
 * That is the same reasoning as the GA4 helper, solved by Meta's own stub
 * rather than by us.
 *
 * If META_PIXEL_ID is unset the snippet installs nothing, window.fbq stays
 * undefined, and every call here is a no-op. Nothing breaks, nothing is sent.
 *
 * ⚠️ Same PII rule as above, and Meta enforces it harder than Google: never
 * pass a name, email address or phone number. Meta's automated filtering will
 * reject the event and repeated breaches restrict the ad account.
 */

interface FbqWindow extends Window {
  fbq?: (
    command: "track" | "trackCustom",
    eventName: string,
    params?: EventParams,
  ) => void;
}

export function trackMetaEvent(name: string, params: EventParams = {}): void {
  if (typeof window === "undefined") return;
  const w = window as FbqWindow;

  try {
    if (typeof w.fbq !== "function") return;
    w.fbq("track", name, params);
  } catch {
    // Never let a tracker break the page or block a phone call.
  }
}
