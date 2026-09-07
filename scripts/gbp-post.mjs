/**
 * Weekly Google Business Profile post — selection, validation and bookkeeping.
 *
 * The publish itself is NOT done here. Posting goes through the Windsor
 * google_my_business connector's create_local_post action, which is an MCP tool
 * available to Claude, not something a shell script can call. So this script
 * owns everything deterministic — which post is next, whether it is safe to
 * publish, and recording that it went out — and the weekly session does nothing
 * but make the one call with the params printed here.
 *
 * That split is deliberate. These posts publish with no human read, so the parts
 * that could silently go wrong (posting twice, posting a dead link, posting a
 * photo that 404s, running off the end of the queue) are checked by code rather
 * than left to a model's judgement on a Monday morning.
 *
 * usage:
 *   node scripts/gbp-post.mjs --next          print the next post as JSON, or exit 3 if exhausted
 *   node scripts/gbp-post.mjs --mark <id>     record <id> as posted today
 *   node scripts/gbp-post.mjs --validate      check the whole queue, exit 1 on any problem
 *   node scripts/gbp-post.mjs --status        human summary of progress
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const QUEUE_PATH = path.join(ROOT, "social/gbp-queue.json");
const ORIGIN = "https://jetblackpainting.com";

const load = () => JSON.parse(fs.readFileSync(QUEUE_PATH, "utf8"));

function knownPaths() {
  // Reading the generated worker table rather than hitting the network: it is
  // the same source the edge uses to decide what exists, and it works offline.
  const src = fs.readFileSync(path.join(ROOT, "worker/known-paths.js"), "utf8");
  return new Set([...src.matchAll(/"(\/[^"]*)"/g)].map((m) => m[1]));
}

function validate(q) {
  const problems = [];
  const known = knownPaths();
  const seen = new Set();
  const postedIds = new Set(q.posted.map((p) => p.id));

  for (const e of q.queue) {
    const at = (m) => problems.push(`${e.id}: ${m}`);
    if (seen.has(e.id)) at("duplicate id in queue");
    seen.add(e.id);

    if (!fs.existsSync(path.join(ROOT, "public/social", e.photo)))
      at(`photo not found: public/social/${e.photo}`);
    if (!e.photo.endsWith(".jpg")) at("photo is not a .jpg — GBP rejects webp");

    const ctaPath = e.cta_url.replace(ORIGIN, "");
    if (!known.has(ctaPath) && !known.has(`${ctaPath}/`))
      at(`cta_url is not a live page: ${ctaPath}`);

    if (!e.summary) at("empty summary");
    else {
      if (e.summary.length > 1500) at(`summary is ${e.summary.length} chars, over GBP's 1500 limit`);
      // The suburb name in the text is the only "geotag" these posts get —
      // create_local_post has no location field. A summary that drops it is a
      // post that has lost its whole local-search purpose.
      if (!e.summary.includes(e.suburb)) at(`summary never names ${e.suburb}`);
      // Locked rule from SEO-LOG: no price figures anywhere in published copy.
      // "$10 million" is the public liability figure and is allowed.
      const withoutInsurance = e.summary.replace(/\$10 million/g, "");
      if (/\$\s?\d/.test(withoutInsurance)) at("contains a price figure");
    }
  }

  for (const p of q.posted)
    if (!seen.has(p.id)) problems.push(`posted id not in queue: ${p.id}`);

  return { problems, remaining: q.queue.filter((e) => !postedIds.has(e.id)) };
}

const args = process.argv.slice(2);
const q = load();
const { problems, remaining } = validate(q);

if (args.includes("--validate")) {
  problems.forEach((p) => console.error(`  FAIL ${p}`));
  console.log(
    problems.length
      ? `\n${problems.length} problem(s) in the queue`
      : `queue OK — ${q.queue.length} entries, ${q.posted.length} posted, ${remaining.length} remaining`,
  );
  process.exit(problems.length ? 1 : 0);
}

if (args.includes("--status")) {
  console.log(`Google Business Profile weekly queue`);
  console.log(`  entries   ${q.queue.length}`);
  console.log(`  posted    ${q.posted.length}`);
  console.log(`  remaining ${remaining.length}  (~${remaining.length} weeks)`);
  if (q.posted.length) {
    const last = q.posted[q.posted.length - 1];
    console.log(`  last      ${last.id} on ${last.date}`);
  }
  console.log(`  next      ${remaining[0] ? remaining[0].id : "— queue exhausted"}`);
  if (problems.length) console.log(`  ⚠ ${problems.length} validation problem(s); run --validate`);
  process.exit(0);
}

if (args.includes("--mark")) {
  const id = args[args.indexOf("--mark") + 1];
  if (!id) throw new Error("--mark needs an id");
  if (!q.queue.some((e) => e.id === id)) throw new Error(`no such id in queue: ${id}`);
  if (q.posted.some((p) => p.id === id)) throw new Error(`${id} is already marked posted`);
  q.posted.push({ id, date: new Date().toISOString().slice(0, 10) });
  fs.writeFileSync(QUEUE_PATH, `${JSON.stringify(q, null, 2)}\n`);
  console.log(`marked ${id} as posted (${q.posted.length}/${q.queue.length})`);
  process.exit(0);
}

// --next (default)
if (problems.length) {
  problems.forEach((p) => console.error(`  FAIL ${p}`));
  console.error("\nrefusing to emit a post while the queue has problems");
  process.exit(1);
}
if (!remaining.length) {
  // Deliberately does NOT wrap around. Silently republishing an eight-month-old
  // post is worse than a visible gap, and a gap is a prompt to add new photos.
  console.error("queue exhausted — every entry has been posted. Add new entries to social/gbp-queue.json.");
  process.exit(3);
}

const e = remaining[0];
console.log(
  JSON.stringify(
    {
      id: e.id,
      suburb: e.suburb,
      connector: "google_my_business",
      action: "create_local_post",
      params: {
        summary: e.summary,
        photo_url: `${q.photo_base}${e.photo}`,
        cta_type: q.cta_type,
        cta_url: e.cta_url,
      },
      week: q.posted.length + 1,
      of: q.queue.length,
    },
    null,
    2,
  ),
);
