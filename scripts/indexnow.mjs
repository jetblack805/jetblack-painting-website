#!/usr/bin/env node
/**
 * IndexNow submitter.
 *
 * IndexNow tells Bing (and Yandex, Seznam, Naver — they share submissions)
 * that a URL has changed, without a per-day quota and without opening the
 * Webmaster Tools dashboard. It replaces the manual "Submit URLs" flow.
 *
 *   node scripts/indexnow.mjs /painter-sorrento/ /services/roof-painting/
 *   node scripts/indexnow.mjs --all          # every URL in public/sitemap.xml
 *   node scripts/indexnow.mjs --dry /foo/    # print the payload, send nothing
 *
 * Paths may be given with or without the leading slash, or as full URLs.
 *
 * ⚠️ Submit only URLs that actually CHANGED. IndexNow's guidance is explicit
 * that resubmitting an unchanged site is abuse, and repeated offenders get
 * their key ignored. Do not wire this into every build — call it with the
 * pages a change actually touched.
 *
 * The key is public by design: ownership is proven by serving the same string
 * at https://jetblackpainting.com/<key>.txt, which is why the file lives in
 * public/ and must stay deployed.
 */
import fs from "node:fs";
import path from "node:path";

const HOST = "jetblackpainting.com";
const ORIGIN = `https://${HOST}`;
const ENDPOINT = "https://api.indexnow.org/indexnow";

// Discover the key from the file that proves ownership, so the two can never
// drift apart. Renaming or editing that file is all it takes to rotate.
const publicDir = path.resolve("public");
const keyFiles = fs
  .readdirSync(publicDir)
  .filter((f) => /^[0-9a-f]{8,128}\.txt$/i.test(f));

if (keyFiles.length !== 1) {
  console.error(
    keyFiles.length === 0
      ? "No IndexNow key file found in public/ (expected <key>.txt)."
      : `Expected exactly one IndexNow key file in public/, found ${keyFiles.length}: ${keyFiles.join(", ")}`
  );
  process.exit(1);
}
const key = path.basename(keyFiles[0], ".txt");
const keyLocation = `${ORIGIN}/${keyFiles[0]}`;
const fileContents = fs.readFileSync(path.join(publicDir, keyFiles[0]), "utf-8").trim();
if (fileContents !== key) {
  console.error(`Key file ${keyFiles[0]} must contain exactly "${key}" (found "${fileContents}").`);
  process.exit(1);
}

const args = process.argv.slice(2);
const dry = args.includes("--dry");
const all = args.includes("--all");
const rest = args.filter((a) => !a.startsWith("--"));

let urlList;
if (all) {
  const xml = fs.readFileSync(path.join(publicDir, "sitemap.xml"), "utf-8");
  urlList = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
} else {
  if (rest.length === 0) {
    console.error("Nothing to submit. Pass one or more paths, or --all.");
    process.exit(1);
  }
  urlList = rest.map((a) =>
    a.startsWith("http") ? a : `${ORIGIN}/${a.replace(/^\/+/, "")}`
  );
}

// IndexNow rejects the whole batch if any URL is off-host, so fail loudly
// rather than have one typo silently discard the submission.
const offHost = urlList.filter((u) => !u.startsWith(`${ORIGIN}/`) && u !== ORIGIN);
if (offHost.length) {
  console.error(`These are not on ${HOST}:\n  ${offHost.join("\n  ")}`);
  process.exit(1);
}
if (urlList.length > 10000) {
  console.error(`IndexNow accepts at most 10,000 URLs per request (got ${urlList.length}).`);
  process.exit(1);
}

const payload = { host: HOST, key, keyLocation, urlList };

console.log(`IndexNow -> ${ENDPOINT}`);
console.log(`  key      : ${key}`);
console.log(`  keyFile  : ${keyLocation}`);
console.log(`  urls     : ${urlList.length}`);
urlList.slice(0, 10).forEach((u) => console.log(`    ${u}`));
if (urlList.length > 10) console.log(`    … and ${urlList.length - 10} more`);

if (dry) {
  console.log("\n--dry: nothing sent.");
  process.exit(0);
}

let res, body;
try {
  res = await fetch(ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(payload),
  });
  body = await res.text();
} catch (err) {
  console.log(`\nUNREACHABLE  ${err.message}`);
  console.log(
    "Could not reach the IndexNow endpoint at all. This is a network problem," +
      "\nnot a problem with the key or the payload. Run this from a machine with" +
      "\noutbound access to api.indexnow.org."
  );
  process.exit(2);
}

// A sandboxed or corporate egress proxy also answers 403, and its body says so.
// Reporting that as "key not valid" would send someone off checking a key file
// that is perfectly fine, so separate the two before printing a diagnosis.
const proxyBlocked =
  res.status === 403 && /not in allowlist|egress|proxy|blocked/i.test(body || "");

// 200 accepted; 202 accepted but the key is still being validated — both fine.
const ok = res.status === 200 || res.status === 202;

if (proxyBlocked) {
  console.log(`\nUNREACHABLE  HTTP 403 from a network proxy — ${body.slice(0, 200)}`);
  console.log(
    "This is the local network refusing the request, NOT IndexNow rejecting the key." +
      "\nThe key and payload were never seen by IndexNow. Either allow" +
      "\napi.indexnow.org through egress, or run this from an unrestricted machine."
  );
  process.exit(2);
}

console.log(`\n${ok ? "OK" : "FAILED"}  HTTP ${res.status}${body ? ` — ${body.slice(0, 300)}` : ""}`);
if (!ok) {
  console.log(
    {
      400: "Bad request — malformed payload.",
      403: "Key not valid: the key file could not be fetched, or does not match. Check it is deployed.",
      422: "URLs do not belong to the host, or the key does not match the host.",
      429: "Too many requests — treated as spam. Submit only changed URLs.",
    }[res.status] || "Unexpected response."
  );
  process.exit(1);
}
