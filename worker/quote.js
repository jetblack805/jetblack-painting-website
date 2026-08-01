// POST /api/quote — receives quote requests from the website form.
//
// Deliberately uses NO Cloudflare bindings. A binding that names a resource
// which has not been provisioned yet (a KV namespace, an email binding without
// Email Routing configured) fails the Worker deploy, and this Worker serves the
// whole site — a bad binding takes jetblackpainting.com offline. Everything
// here is either plain fetch() or an optional secret, so the deploy succeeds
// whether or not delivery has been configured yet.
//
// Delivery is intentionally honest about failure: if no channel is configured,
// or the send fails, the endpoint reports delivered:false and the form falls
// back to showing the visitor call/text/email options. It never tells someone
// their enquiry was sent when it was not — that is exactly how leads were being
// lost before.

const BUSINESS_EMAIL = "jimmy@jetblackpainting.com";

// Requests faster than this are almost certainly bots — a human cannot read the
// form, fill seven fields and submit inside three seconds.
const MIN_FILL_MS = 3000;

const FIELD_LIMITS = {
  name: 120,
  email: 200,
  phone: 40,
  suburb: 80,
  serviceType: 80,
  preferredDate: 40,
  budget: 80,
  projectDescription: 4000,
};

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  // Strip control characters (header-injection guard) and clamp length.
  return value.replace(/[\x00-\x1F\x7F]/g, " ").trim().slice(0, max);
}

function validate(payload) {
  const data = {};
  for (const [field, max] of Object.entries(FIELD_LIMITS)) {
    data[field] = clean(payload[field], max);
  }

  const errors = [];
  if (data.name.length < 2) errors.push("name");
  // Deliberately loose: real phone numbers arrive with spaces, +61, brackets
  // and dashes, and rejecting a valid customer is worse than accepting noise.
  if (data.phone.replace(/\D/g, "").length < 8) errors.push("phone");
  if (!data.suburb) errors.push("suburb");
  if (!data.serviceType) errors.push("serviceType");
  if (data.email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(data.email)) errors.push("email");

  return { data, errors };
}

function formatMessage(data, meta) {
  const lines = [
    `New quote request from jetblackpainting.com`,
    ``,
    `Name:     ${data.name}`,
    `Phone:    ${data.phone}`,
    data.email ? `Email:    ${data.email}` : null,
    `Suburb:   ${data.suburb}`,
    `Service:  ${data.serviceType}`,
    data.preferredDate ? `Preferred date: ${data.preferredDate}` : null,
    data.budget ? `Budget:   ${data.budget}` : null,
    data.projectDescription ? `\nProject description:\n${data.projectDescription}` : null,
    ``,
    `---`,
    `Received: ${meta.receivedAt}`,
    meta.page ? `From page: ${meta.page}` : null,
  ];
  return lines.filter((line) => line !== null).join("\n");
}

// Sends via the Resend HTTP API. Chosen over Cloudflare's send_email binding
// because it needs no binding and no change to the zone's MX records — enabling
// Email Routing on a domain whose mail is hosted elsewhere can break the real
// inbox, which is not a risk worth taking for a contact form.
async function sendViaResend(env, subject, text, replyTo) {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      // Falls back to Resend's shared sender, which works before a domain is
      // verified but can only deliver to the account holder's own address —
      // which is exactly who this goes to.
      from: env.QUOTE_FROM_EMAIL || "Jetblack Painting <onboarding@resend.dev>",
      to: [env.QUOTE_TO_EMAIL || BUSINESS_EMAIL],
      subject,
      text,
      ...(replyTo ? { reply_to: [replyTo] } : {}),
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(`Resend responded ${response.status}: ${detail.slice(0, 200)}`);
  }
}

// Generic webhook escape hatch — lets a quote be routed to Zapier, Make, a
// phone-notification service or anything else without another code change.
async function sendViaWebhook(env, data, meta) {
  const response = await fetch(env.QUOTE_WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, ...meta }),
  });
  if (!response.ok) {
    throw new Error(`Webhook responded ${response.status}`);
  }
}

export async function handleQuoteRequest(request, env) {
  if (request.method !== "POST") {
    return json({ ok: false, error: "method_not_allowed" }, 405);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ ok: false, error: "invalid_json" }, 400);
  }

  // Honeypot: a field hidden from humans by CSS. Anything that fills it in is
  // a bot. Answered with a plain 200 so the bot has no signal to adapt to.
  if (typeof payload.company === "string" && payload.company.trim() !== "") {
    return json({ ok: true, delivered: true });
  }

  // Timing check — see MIN_FILL_MS. Guarded so a missing or bogus value never
  // rejects a real person.
  const elapsed = Number(payload.elapsedMs);
  if (Number.isFinite(elapsed) && elapsed >= 0 && elapsed < MIN_FILL_MS) {
    return json({ ok: true, delivered: true });
  }

  const { data, errors } = validate(payload);
  if (errors.length > 0) {
    return json({ ok: false, error: "validation_failed", fields: errors }, 400);
  }

  const meta = {
    receivedAt: new Date().toISOString(),
    page: clean(payload.page, 200),
  };
  const subject = `Quote request: ${data.serviceType} in ${data.suburb} — ${data.name}`;
  const text = formatMessage(data, meta);

  // Try each configured channel. delivered:false is a truthful answer, not a
  // failure to hide — the form shows call/text/email fallbacks when it sees it.
  const attempts = [];
  if (env.RESEND_API_KEY) {
    attempts.push(sendViaResend(env, subject, text, data.email || null));
  }
  if (env.QUOTE_WEBHOOK_URL) {
    attempts.push(sendViaWebhook(env, data, meta));
  }

  if (attempts.length === 0) {
    return json({ ok: true, delivered: false, reason: "no_channel_configured" });
  }

  const results = await Promise.allSettled(attempts);
  const delivered = results.some((r) => r.status === "fulfilled");

  if (!delivered) {
    for (const r of results) {
      if (r.status === "rejected") console.error("quote delivery failed:", r.reason?.message ?? r.reason);
    }
    return json({ ok: true, delivered: false, reason: "delivery_failed" });
  }

  return json({ ok: true, delivered: true });
}
