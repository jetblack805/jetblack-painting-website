/*
 * Tests for the post-job review request endpoint.
 *
 * Plain node, not vitest, deliberately: the repo's vitest config needs
 * node_modules, which cannot be installed in the agent sandbox (npm registry is
 * blocked). This file runs anywhere node runs:
 *
 *     node worker/review-request.test.mjs
 *
 * `fetch` is stubbed, so running it never sends an email.
 *
 * The last three assertions are the ones that matter most. They check the email
 * copy against Google's review policy — no gating, no incentive — because that
 * copy is the kind of thing a well-meaning edit quietly breaks, and the penalty
 * is the listing, not a failing build.
 */
import { handleReviewRequest } from "./review-request.js";

function req(body, method = "POST") {
  return new Request("https://x/api/review-request", {
    method,
    headers: { "Content-Type": "application/json" },
    body: method === "POST" ? JSON.stringify(body) : undefined,
  });
}

const TOKEN = "correct-horse-battery";
const ENV = { REVIEW_REQUEST_TOKEN: TOKEN, RESEND_API_KEY: "re_test" };

let pass = 0;
let fail = 0;
function check(name, got, want) {
  const ok = got === want;
  console.log(`  ${ok ? "PASS" : "FAIL"}  ${name}${ok ? "" : `  (got ${got}, want ${want})`}`);
  if (ok) pass += 1;
  else fail += 1;
}

async function run() {
  check("GET is rejected", (await handleReviewRequest(req({}, "GET"), ENV)).status, 405);
  check("off when no token configured", (await handleReviewRequest(req({}), { RESEND_API_KEY: "x" })).status, 503);
  check("off when no Resend key", (await handleReviewRequest(req({}), { REVIEW_REQUEST_TOKEN: TOKEN })).status, 503);
  check("wrong token rejected", (await handleReviewRequest(req({ token: "nope" }), ENV)).status, 401);
  // Same length as the real token, one character different: catches a compare
  // that only checks length, which an "optimisation" could easily introduce.
  check("same-length wrong token rejected", (await handleReviewRequest(req({ token: "correct-horse-batterZ" }), ENV)).status, 401);
  check("malformed email rejected", (await handleReviewRequest(req({ token: TOKEN, email: "not-an-email" }), ENV)).status, 400);
  check("empty email rejected", (await handleReviewRequest(req({ token: TOKEN, email: "" }), ENV)).status, 400);

  let captured = null;
  globalThis.fetch = async (url, init) => {
    captured = { url, body: JSON.parse(init.body) };
    return new Response("{}", { status: 200 });
  };

  const res = await handleReviewRequest(
    req({ token: TOKEN, firstName: "Danni", email: "danni@example.com", suburb: "Mordialloc", job: "exterior repaint" }),
    ENV,
  );
  check("valid request sends", res.status, 200);
  check("posts to Resend", captured.url, "https://api.resend.com/emails");
  check("addressed to the customer", captured.body.to[0], "danni@example.com");
  check("subject is personalised", captured.body.subject, "How did we go, Danni?");
  check("replies reach Jimmy", captured.body.reply_to, "jimmy@jetblackpainting.com");
  check("review link present", /g\.page\/r\/CS0L-iKiqJlHEBM\/review/.test(captured.body.text), true);

  const copy = captured.body.text + captured.body.html;
  check(
    "no review-gating language",
    /(were you happy|if you were happy|5[- ]star|five star|only if|reply instead|instead of leaving)/i.test(copy),
    false,
  );
  check("no incentive offered", /(discount|voucher|prize|draw|gift card)/i.test(copy), false);
  check("invites honest reviews either way", /good or bad/i.test(copy), true);

  console.log(`\n${fail === 0 ? "ALL PASS" : `${fail} FAILED`} (${pass} passed)`);
  if (fail > 0) process.exit(1);
}

run();
