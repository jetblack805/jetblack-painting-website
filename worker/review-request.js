/*
 * Post-job review request.
 *
 * WHY THIS EXISTS
 * Growing past 17 Google reviews is the top authority priority in SEO-LOG.md,
 * and the Business Profile is the binding constraint on actual leads: 90 days
 * of it produced 3 phone calls. Reviews are the lever that moves it.
 *
 * The hard part was never writing the email. It is that Jimmy finishes a job
 * with paint on his hands, and anything that needs a laptop, a login or a CRM
 * will not happen. So the whole design target is: FIFTEEN SECONDS, ON A PHONE,
 * STANDING IN SOMEONE'S DRIVEWAY. /ask/ is a single screen he keeps on his home
 * screen; this endpoint is what it posts to.
 *
 * ⚠️ GOOGLE POLICY — READ BEFORE EDITING THE COPY.
 * Two things will get a listing penalised or reviews stripped, and both are easy
 * to write by accident:
 *   1. REVIEW GATING — asking only the happy customers, or routing unhappy ones
 *      somewhere private instead of to the review form. The email below asks
 *      every customer the same way and says "good or bad" out loud. Do not add
 *      a "were you happy?" fork, a star-picker, or "if you had a problem, reply
 *      instead" — that last one reads as steering even when kindly meant.
 *   2. INCENTIVES — never offer a discount, entry into a draw, or anything else
 *      in exchange for a review. There is nothing of value offered here and
 *      nothing may be added.
 * The offer to come back and fix something is deliberately placed AFTER the
 * review link and framed as service, not as an alternative to reviewing.
 *
 * ⚠️ Only send this to people whose job is actually FINISHED. A quote enquiry is
 * not a customer. Reviews from people who never hired you are fake reviews, and
 * the quote form's contact list must never be wired into this endpoint.
 */

const BUSINESS_EMAIL = "jimmy@jetblackpainting.com";
const PHONE_DISPLAY = "0432 077 782";
const PHONE_TEL = "0432077782";

// The Google "write a review" deep link for this listing. Same one the site
// footer and /review-us/ use — keep them in step.
const REVIEW_URL = "https://g.page/r/CS0L-iKiqJlHEBM/review";

const FIELD_LIMITS = { firstName: 80, email: 200, suburb: 80, job: 200 };

function json(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json; charset=utf-8" },
  });
}

function clean(value, max) {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/*
 * Constant-time-ish comparison. A plain === on a secret leaks its length and
 * prefix through timing. This is not a high-value secret, but comparing it
 * sloppily costs nothing to avoid.
 */
function tokenMatches(supplied, expected) {
  if (typeof supplied !== "string" || typeof expected !== "string") return false;
  if (supplied.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < supplied.length; i += 1) {
    diff |= supplied.charCodeAt(i) ^ expected.charCodeAt(i);
  }
  return diff === 0;
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/*
 * The email. Short on purpose — it is read on a phone, standing up, by someone
 * who has already paid and owes you nothing. Every sentence past the link is a
 * sentence that costs replies.
 */
function buildEmail({ firstName, suburb, job }) {
  const name = firstName || "there";
  const where = suburb ? ` at ${suburb}` : "";
  const what = job ? ` The ${job} is finished` : " The job is finished";

  const text = [
    `Hi ${name},`,
    "",
    `Thanks for having us${where}.${what} and I hope it looks how you wanted.`,
    "",
    "If you have a minute, an honest Google review would genuinely help — good or bad. Most of our work comes from people finding us online, and what a customer actually says counts for more than anything I can write about myself.",
    "",
    REVIEW_URL,
    "",
    `And if anything needs looking at, call me on ${PHONE_DISPLAY} and I will come back.`,
    "",
    "Cheers,",
    "Jimmy",
    "Jetblack Painting",
  ].join("\n");

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#f6f6f7;font:16px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#1a1a1c;">
<div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:10px;padding:28px;">
<p style="margin:0 0 16px;">Hi ${escapeHtml(name)},</p>
<p style="margin:0 0 16px;">Thanks for having us${escapeHtml(where)}.${escapeHtml(what)} and I hope it looks how you wanted.</p>
<p style="margin:0 0 22px;">If you have a minute, an honest Google review would genuinely help — good or bad. Most of our work comes from people finding us online, and what a customer actually says counts for more than anything I can write about myself.</p>
<p style="margin:0 0 22px;"><a href="${REVIEW_URL}" style="display:inline-block;background:#0A0A0B;color:#ffffff;text-decoration:none;padding:13px 22px;border-radius:7px;font-weight:600;">Leave a Google review</a></p>
<p style="margin:0 0 16px;">And if anything needs looking at, call me on <a href="tel:${PHONE_TEL}" style="color:#0A0A0B;">${PHONE_DISPLAY}</a> and I will come back.</p>
<p style="margin:0;">Cheers,<br>Jimmy<br><span style="color:#6b6b70;">Jetblack Painting</span></p>
</div></body></html>`;

  return { text, html };
}

export async function handleReviewRequest(request, env) {
  if (request.method !== "POST") {
    return json({ error: "Method not allowed" }, 405);
  }

  // No token configured means the feature is off. Fail closed rather than
  // leaving an open mail relay branded as this business.
  if (!env.REVIEW_REQUEST_TOKEN) {
    return json({ error: "Not configured" }, 503);
  }
  if (!env.RESEND_API_KEY) {
    return json({ error: "Email not configured" }, 503);
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json({ error: "Invalid request" }, 400);
  }

  if (!tokenMatches(payload && payload.token, env.REVIEW_REQUEST_TOKEN)) {
    return json({ error: "Not authorised" }, 401);
  }

  const firstName = clean(payload.firstName, FIELD_LIMITS.firstName);
  const email = clean(payload.email, FIELD_LIMITS.email);
  const suburb = clean(payload.suburb, FIELD_LIMITS.suburb);
  const job = clean(payload.job, FIELD_LIMITS.job);

  // Deliberately loose: enough to catch a typo, not a full RFC 5322 parser.
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: "That email address does not look right" }, 400);
  }

  const { text, html } = buildEmail({ firstName, suburb, job });

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: env.REVIEW_FROM_EMAIL || `Jimmy — Jetblack Painting <${BUSINESS_EMAIL}>`,
      // Replies are a real outcome here: "actually, can you look at the laundry
      // door" is worth more than the review. Send them to Jimmy, not nowhere.
      reply_to: BUSINESS_EMAIL,
      to: [email],
      subject: firstName ? `How did we go, ${firstName}?` : "How did we go?",
      text,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    return json({ error: "Send failed", detail: detail.slice(0, 300) }, 502);
  }

  return json({ ok: true, sent: email });
}
