# Jetblack Painting — SEO Running Log

**Purpose.** A durable record of what has been investigated, changed and ruled out, so no
optimisation is repeated and no run starts from a stale picture of the site.

⚠️ **Read this before acting on any brief.** Three separate briefs have now asked for work that
was already complete. Verify claims against the live site and this log before changing anything.

Not published — root `.md` files 404 on the live site (only `dist/public` is served).

---

## Success criterion

> Judge success by whether Jetblack Painting is becoming more visible for commercially
> valuable searches — **not** by how much code or content was produced.

A run that investigates, finds nothing worth changing, and says so is a successful run.

---

## Data access — what is actually reachable

| Source | Status | Notes |
|---|---|---|
| Google Search Console | ⚠️ Via Supermetrics MCP only | Connector flaps constantly; often unavailable mid-run. `ds_id="GW"` |
| Google Business Profile | ⚠️ Via Supermetrics MCP only | `ds_id="GMB"`, **read-only** — cannot post |
| GA4 | ❌ Effectively broken | Connected property `545100608` has **zero data in 20 months**; site fires `G-6NC2597W9L`. Unresolved — needs GA4 Admin |
| **Bing Webmaster Tools** | ❌ **No access** | No connector exists. Cannot inspect Bing data |
| **Apple Business Connect** | ❌ **No access** | No connector exists |
| Competitor intelligence | ❌ Largely unavailable | Semrush out of API units; Ahrefs returns "Insufficient plan" |
| Instagram | ⚠️ Read-only via Supermetrics | `ds_id="IGI"`. Cannot post |
| The site itself | ✅ Full | curl + repo. Most reliable source |

**Consequence:** the daily loop's "inspect performance first" step is frequently impossible.
When data is unavailable, say so — do not substitute guesswork, and do not invent a rationale
for a change.

Google, Maps, googletagmanager and social platforms are blocked by the sandbox egress proxy.
Never claim to have checked them directly.

---

## Locked business facts — never invent or vary

Phone **0432 077 782** · jimmy@jetblackpainting.com · **$10M** public liability ·
**5-year** written guarantee · Mordialloc VIC 3195 · **13+ years** · **5.0 from 15 Google reviews** ·
quote turnaround and enquiry response both **24–48 hours**.

Review count is hardcoded in nine places — see `CLAUDE.md`. The "15"/"14" matches in
`Reviews.tsx` are SVG path coordinates; leave them.

⚠️ `llms.txt` must never carry price figures. A `$` grep false-positives on the legitimate
"$10 million public liability" — read matches before reporting.

---

## Standing gates

- **Three layers, not two.** `generate-static-pages` → `generate-markdown` → `generate-known-paths`,
  then `git status` must be clean. Markdown twins drift independently and have been missed before.
- **Similarity gate.** Revert if average worst-twin > 45% or any page > 55%. Current: **23.1%**, 0 over 55%.
- **Schema vs visible text.** Every FAQPage Q and A must appear as visible text. Current: **474 questions, 0 problems**.
- **Orphan check.** No suburb page may reach zero inbound links. Current: **0 orphans**.
- ⚠️ **Cloudflare deploys on every branch push.** A draft PR gates nothing. Pushing *is* deploying.
- `pnpm check` / `pnpm build` **cannot run locally**: pnpm is a corepack shim that 403s fetching
  itself, `node_modules` is absent, and **there is no `tsconfig.json`** so `tsc --noEmit` compiles
  nothing regardless. Cloudflare is the only real build.

---

## Current baseline — GSC, refreshed 2026-08-17

**Trajectory (daily series):** effectively zero impressions through May–June; first sustained
traffic 5 July; then 12/day → 131 → 350+, average position ~85 → **38–42**. Best day 13 Aug at 38.28.

**28-day comparison** (2026-07-18→08-14 vs prior 28), same method both periods:

| | Prior | Latest |
|---|---|---|
| Impressions | 661 | **7,503** (11.3×) |
| Clicks | 23 | **31** |
| Avg position | 76.3 | **53.1** |

Clicks stay low because position ~40 is page 4. **The next real threshold is top 10–20.**

**Winnable set (positions 11–20)** — all near Mordialloc, which is the pattern that governs here:
McKinnon 11.3 · Aspendale 14.0 · Sorrento 14.5 · Patterson Lakes 16.5 · Murrumbeena 17.2 ·
Collingwood 17.3 · Mentone 17.5 · Highett 17.5 · Donvale 18.3 · Dromana 19.4 ·
Mount Eliza & Clyde North 15–18 **on commercial queries**.

**Regressions to watch:** painters mordialloc 19.7 → 29.2 · commercial facade painting clyde north
15.6 → 29.5 · house painters murrumbeena 17.5 → 22.6.

**Do not chase:** Toorak 79.2 · Kew 97 · Camberwell 89.6 · Hawthorn 88.9 · Malvern 88.8 ·
Glen Waverley 86.9. Jimmy moved these to off-page channels on 2026-08-17. Not a content problem.

---

## GBP / Maps — the binding constraint on actual leads

Single live listing `116052022854905862269_3960754871142365330`: Open, phone and website correct,
category "Painter and Decorator", **service-area business with hidden address**. No config defect.
The duplicate listing is deleted and confirmed gone — `accounts_discovery` still lists it from a
stale cache; that is expected, do not re-raise.

**88 days:** 328 total views · 87 Maps · 22 website visits · **5 phone calls** · 1 directions.

**Maps search terms (3 months):** `jetblack` 98 impressions. Nothing else clears Google's
reporting threshold. Effectively only people who already know the name find the profile.

**Strategic read:** the website is climbing fast while the map pack produces almost no calls.
For a local painting business the map pack is where the phone rings. GBP prominence — reviews,
posts, citations, activity — is the highest-leverage lever, and it is **not a website lever**.

## Instagram

585 followers, **320 in Melbourne** (a genuinely good local ratio), profile well configured with
bio, location, CTA and website link. But **4 posts in 3 months** and **zero business actions**
(no calls, bio-link clicks or direction requests) in the quarter. The account isn't misconfigured
— it's dormant. 12 ready-to-post captions with photo briefs delivered 2026-08-18.

---

## Completed work — do not repeat

| Date | PR | What | Result |
|---|---|---|---|
| 08-13 | #176/#177 | Suburb-directory nav, `/assets/` soft-404 | Fixed; do not revert nav to a `<p>` |
| 08-15 | #184 | Linked 17 orphaned suburb pages from real neighbours | Orphans 17 → 0 |
| 08-16 | #185 | Depth: Brighton, Toorak, Hawthorn, Camberwell | ~650w → 1,012–1,202w |
| 08-16 | #186 | Internal link rebalance toward winnable suburbs | Geography-checked; Camberwell left alone, no honest option |
| 08-16 | #187 | Depth: Murrumbeena, Mentone, Mordialloc | ~700w → ~1,100w |
| 08-16 | #188 | llms.txt: payment, colour consultation, access Q&A | Sourced from existing site facts |
| 08-17 | #189 | Blog index BlogPosting missing dates/image/author | 14 missing fields → 0 |
| 08-17 | #190 | **Homepage declared aggregateRating twice** | Shell + React both declared same `@id`. Now exactly one site-wide |
| 08-17 | #191 | **Cache regex was inert — every JS/CSS served `max-age=0`** | Vite emits `name-HASH.ext`; regex expected `name.hash.ext`. Now `immutable` |
| 08-17 | #192 | Depth: Donvale, Aspendale, Clyde North | ~700–750w → ~1,185–1,223w |
| 08-18 | #193 | **Service→suburb and blog→service links were wrong** | 40 links into unreachable suburbs → 0; 8/8 service pages now distinct; blog posts now link to the service they discuss |
| 08-18 | `e85f073` | Invented AI meta tags, keyword-stuffed schema, fake streetAddress, hreflang, low-value meta | **Committed, not yet pushed** |

### Suburb depth already done — check word count before touching
McKinnon 1,396 · Collingwood 1,444 · Highett 1,344 · Aspendale 1,223 · Brighton 1,202 ·
Donvale 1,185 · Clyde North 1,185 · Hawthorn 1,165 · Toorak 1,107 · Mentone 1,102 ·
Mordialloc 1,100 · Murrumbeena 1,062 · Camberwell 1,012 (all exclude the shared nav)

### Remaining content queue
Patterson Lakes 807w · Dromana 841w · Mount Eliza 899w · Sorrento 964w.
⚠️ All approaching ~1,000w. Once a page is over that, **stop padding** and recommend GBP/off-page
work instead — that is the honest answer, not more words.

---

## Settled questions — do not re-litigate

- **Trailing slashes are not a defect.** Investigated fully 08-15. Non-slash URLs 301 correctly;
  sitemap, canonicals, schema and markdown twins all slash-correct; zero non-slash internal links
  in generated HTML. The ~875 non-slash React paths cost a redirect hop for JS-rendering crawlers —
  crawl hygiene, not signal splitting. **Do not mass-rewrite:** `KNOWN_LANDING_PATHS` holds 97
  non-slash entries and filters neighbour links, so adding slashes would silently delete every
  neighbour link on all 96 suburb pages with a green build.
- **GSC "Page with redirect" is not fixable.** Every URL in the 61-URL export is a redirect by
  design, each one clean 301 → 200. "Failed" validation means Google re-checked and correctly
  found the redirect still there.
- **Do not build a suburb × service matrix** (96 × 6 ≈ 576 pages). Doorway pattern, already undone
  by hand once.
- **Cloudflare "Robots.txt configuration" must stay OFF.** Enabling it prepends managed Disallow
  rules for AI crawlers ahead of ours, sabotaging the AEO strategy.
- Authority, not content volume, is the binding off-site constraint. Backlinks 08-13: 44 links /
  31 domains / authority 2. Thirteen referring domains share one Moldovan IP — **do not disavow**,
  Google ignores this class of junk.

---

## Open items

**Needs Jimmy:**
1. **GA4** — which property `G-6NC2597W9L` reports into. The connected one is empty.
2. **Search Console** — re-run validation on the duplicate-rating fix now it is live.
3. **Push `e85f073`?** — Batch 1 held pending approval.
4. **Canva cards** — four groups, four options each, awaiting selection.
5. **GBP + Instagram posting** — captions delivered; publishing is manual.

**Available work:**
- Batch 2 of the Next Priorities brief: commercial-intent cost content (items 6) and contextual
  in-body internal links (item 7).
- Missing `tsconfig.json` — `pnpm check` prints help text instead of type-checking. Small fix,
  would restore a real gate.
- Readability is genuinely poor site-wide (Flesch 16–42, university level, for homeowners choosing
  a painter). Open opportunity; a copy rewrite, needs a go-ahead.
- Unused JS ~144 KiB, 3 long main-thread tasks (PageSpeed 08-13).

---

## Run log

### 2026-08-18 — Batch 1, Next Priorities brief
**Investigated:** all 10 items against the code. **Found:** items 1, 2, 3, 8, 9 all genuinely
present. **Changed:** removed 4 invented AI meta tags (shell had been contradicting SEOHead, which
dropped them long ago); removed "Best Painters Melbourne" from `alternateName` (a keyword asserted
as a trading name); replaced promotional schema description with a factual one; removed a
235-char keyword string; removed `streetAddress: "Mordialloc"` (the suburb duplicated into the
street field, and wrong for a hidden-address service-area business — verified against real GBP
data); removed `language`, `revisit-after`, and both self-pointing hreflang alternates.
**Not changed:** items 4/5 already the standing queue; 6/7 deferred to Batch 2; 10 left alone as
instructed. **Risk:** low — metadata and schema only, no URLs, no content, no visual change.
**Monitor:** that removing hreflang and the AI tags causes no impression change (neither was a
consumed signal, so none expected).

### 2026-08-18 (run 2) — GSC review, opportunity identified: **Sorrento**
**Investigated:** GSC query data 2026-07-22 → 08-15, 500 rows, ranked by the brief's priority
order (page-2→page-1 first, then position 4–10, then high-impression/low-CTR).

**Data — suburb clusters in the 11–20 band:**

| Suburb | Impressions | Best position | Depth | Verdict |
|---|---|---|---|---|
| Collingwood | 100 | 17.50 | **1,444w** | Content is NOT the lever — deepest page on the site |
| **Sorrento** | **87** | **7.29** | **964w** | **Shortest gap to page 1 + genuine room** |
| Highett | 80 | 17.38 | 1,344w | Already deepened |
| Murrumbeena | 59 | 17.07 | 1,062w | Already deepened |
| Elwood | 57 | 21.42 | 952w | Thin, but furthest from page 1 |
| Chelsea | 33 | 20.18 | 860w | Thinnest overall, lowest volume |

**Opportunity found:** Sorrento. `painters sorrento` sits at **14.33 with 57 impressions** — only
4.3 positions off page 1, the shortest gap of any high-volume term. The cluster totals 87
impressions across 5 variants, and one (`painters sorrento bay`) is **already at 7.29**, proving
the page can reach page 1. At 964w it is the thinnest of the high-volume set, so there is
legitimate room rather than padding.

⚠️ **This contradicts the standing content queue**, which ranked Sorrento 7th and last
("already deepest of the remaining set, lowest priority"). The fresh data says it should be
first. Queue updated — priority now follows gap-to-page-1 × impressions, not word count.

**Explicitly rejected — Collingwood.** Highest raw impressions (100) but the page is already
1,444 words, the deepest on the site. Per the brief, do not blindly add words when links, CTR or
authority are the actual problem. Adding content there would be activity, not progress.

**Secondary observation (not yet actioned):** Sorrento has only **5 inbound internal links**
outside the nav (exterior-painting, roof-painting, Dromana, Rosebud, Rye) against Mentone 16,
Highett 15, Aspendale 13, McKinnon 10. Links may be as much the lever as content. Worth testing
before assuming depth is the answer.

**Changed:** nothing on the site this run — analysis only, plus this log created.
**Next task:** deepen Sorrento on genuinely new angles (seasonal holiday-town scheduling, Bass
Strait wind exposure on the back beach vs the calmer bay side, heritage/limestone overlay
specifics). Do not repeat the coastal-salt paragraph pattern used across a dozen bayside pages.

### 2026-08-18 (run 3) — Sorrento actioned: depth + Peninsula link cluster repaired

Both levers identified last run were pulled, because investigating the link side turned up a
genuine defect rather than a marginal gain.

**Lever 1 — depth. Sorrento 972w → 1,750w, 4 FAQs → 7.**
Two new sections, deliberately on angles no other bayside page uses (the coastal-salt paragraph
pattern was not repeated):

- *Why Sorrento's Two Coastlines Need Different Specifications* — front beach salt settles as a
  film; back beach salt arrives wind-driven off Bass Strait carrying sand, which abrades as well
  as attacks. Consequence: elevations on one house age at very different rates, so they are
  assessed separately and noted in the quote, and exposed faces often have to be brushed and
  rolled rather than sprayed because overspray carries.
- *Seasons, Access and Getting a Sorrento Job Scheduled Properly* — a holiday town's population
  swing versus the weather window (autumn/spring for exteriors, winter for interiors), plus steep
  blocks falling to the water and narrow front-beach streets with summer parking pressure.

New FAQs: whether every elevation needs the same system, best time of year to repaint, access on
steep/narrow blocks. No prices, timeframes, reviews, awards or capabilities were invented.
"Autumn and spring" is stated as workable conditions, not a promised schedule.

**Lever 2 — internal links. Sorrento 5 → 8 inbound (excluding the shared nav).**
The investigation found the cause, and it was a real error, not a shortage:

| Page | Was linking to | Problem |
|---|---|---|
| `/painter-mornington-peninsula/` | Berwick, Dandenong, Greater Dandenong, Kingston, Moorabbin | **None of these are on the Mornington Peninsula.** The regional hub page linked to no Peninsula town at all, while naming Sorrento, Portsea and Blairgowrie in its own prose |
| `/painter-mount-martha/` | …Berwick | ~55 km inland, across a different region |

Corrected to the actual bay-side run: Peninsula hub now links to Sorrento, Rye, Rosebud, Dromana,
Safety Beach, Mount Martha, Mornington, Mount Eliza, Frankston. Mount Martha drops Berwick and
picks up Safety Beach, Dromana, Rosebud, Sorrento. Safety Beach adds Rye, Sorrento and the hub.
This is an accuracy fix that happens to flow authority into the whole Peninsula cluster —
Dromana 9, Peninsula hub 9, Sorrento 8, Mount Martha 7 inbound.

**Also fixed — `scripts/generate-sitemap.mjs` was stamping `today` onto all 114 `lastmod` values
on every run.** Editing one suburb page told Google the entire site had been rewritten. The
script now carries forward each URL's existing `lastmod` and bumps only routes named on the
command line (`node scripts/generate-sitemap.mjs /painter-sorrento/ …`); new routes still get
today. This run's sitemap diff is 4 lines, not 99.

**Gates:** similarity 23.0% avg, 0 pages >55% (unchanged/marginally better); schema-vs-visible
477 FAQ questions, 0 problems; 0 broken links; 0 orphans; three-layer regeneration touched only
the expected files; React ↔ static neighbouring-link parity matches on all 4 pages.

⚠️ `pnpm check` / `pnpm build` still cannot run here — the registry 403s pnpm's own self-install,
`node_modules` is absent, and **there is still no `tsconfig.json` in the repo**, so `pnpm check`
would not typecheck anything even with deps installed. Cloudflare's build remains the real gate.

**Next task:** measure before adding. Sorrento's depth and links both changed on the same day;
give it 2–3 weeks in GSC before touching it again. Meanwhile the untested question is whether
Collingwood (100 impressions, position 17.5, already 1,444w) moves on links alone — it has no
Peninsula-style cluster defect, so it needs a different diagnosis, not more words.

### 2026-08-18 (run 4) — Mordialloc flagship brief: audit, then Batch 1

Brief received: make Mordialloc the flagship local-authority location. It asks for an audit of the
page, schema, internal links and supporting service pages, with the highest-value gaps identified
**before** changes. That audit follows; it found the biggest problem was not Mordialloc-specific.

**Audit of `/painter-mordialloc/`**

| Signal | State | Verdict |
|---|---|---|
| Inbound internal links | **26** (vs Mentone 16, Highett 15) | Strongest on the site — **not** the gap |
| Word count | 1,107 | Mid-pack, not thin |
| "We are based here" signalling | 6 explicit statements, incl. "Mordialloc is our home", "based right here in the 3195" | Already strong |
| Schema | LocalBusiness + Service + FAQPage + Breadcrumb + speakable | Sound |
| Outbound service links | **2 of 8** | **Gap** |
| Roof / kitchen cabinet / fence / body corporate | **0 mentions each** | **Gap** — 4 of the brief's 10 named intents |
| Meta description | *"…contemporary bayside residences and ensuring a flawless."* | **Broken sentence fragment** |
| GSC | `painters mordialloc` **regressed 19.7 → 29.2** | The term the brief is about is going backwards |

**Root cause found — and it is site-wide, not Mordialloc-specific.**
`SuburbPageTemplate.tsx` renders a `coreServices` grid of **six** service links ("Painting Services
in {suburb}"). The static generator never emitted it — suburb pages carried only the two footer
links, interior and exterior. So **crawlers saw 2 service links per suburb page where users saw 6**,
across all 96 suburb pages. Commercial painting, kitchen cabinet resurfacing, roof painting and
real estate painting had **zero** crawlable inbound links from any suburb page. That is also why
the Mordialloc page mentions roof, cabinets, fence and body corporate zero times — the section
carrying them was absent from the crawler layer entirely.

**Batch 1 — two defect fixes, no invented content**

1. Generator now emits the six-service block, matching the React grid, with anchor text
   `"<Service> <Suburb>"` — the exact intent phrasing the brief lists. **+384 crawler-visible
   internal links** into the four commercially strongest service pages (96 each).
2. Mordialloc meta description rewritten. The old one was a broken fragment on the flagship page,
   serving the SERP snippet for the one term that regressed.

**Gates:** similarity 23.0% → **25.6% avg**, worst twin 44.0% → 46.4%, **0 pages over 55%** —
inside the gate (revert only above 45% avg or 55% any page). The rise is expected and paid for:
an identical block on 96 pages, in exchange for 384 links into the money pages. Schema-vs-visible
477 questions / 0 problems. 0 broken links. Sitemap bumped for the 96 pages that genuinely changed.

**Not done, deliberately.** *Epoxy flooring Mordialloc* appears in the brief's target list but
Jetblack has no epoxy flooring service page and no evidence of offering it. Adding it would be
inventing a capability, which the standing rules forbid — **Jimmy to confirm whether this is a real
service** before it goes anywhere near the site.

**Next task (Batch 2, not started):** Mordialloc-specific body content for the four uncovered
intents — roof, kitchen cabinets, fence/deck, body corporate — written from real local property
stock, not padded. Also two other broken meta descriptions found in the sweep: Murrumbeena
("…and interwar") and Kingston ("…and coating selection").

**Deploy verified live 2026-08-18 20:12 UTC** (Cloudflare Workers Builds: success, PR #194).
Confirmed against the production apex, not just the build status:

- Mordialloc, Sorrento, Mentone, Highett, Mornington Peninsula each now serve **6 distinct service
  links** to crawlers (was 2).
- Mordialloc meta description is the corrected one.
- Sorrento's two new sections are live.
- The Peninsula hub links to Sorrento.

This also closes the standing "cannot verify the build" caveat for these commits — `pnpm build`
could not run in the agent environment, but Cloudflare ran it and it passed.

### 2026-08-18 (run 5) — daily audit: two real metadata defects found and fixed

Steps 0–6 run in order. Two real problems, so no content work this run (Step 7 skipped by rule).

**Defect 1 — Mordialloc meta description was 168 chars**, breaking the "0 descriptions over 158"
baseline. Self-inflicted: introduced by run 4 earlier today. Trimmed to 155 by dropping one
adjective; the intent terms (interior, exterior, roof, commercial) all survive.

**Defect 2 — locked-fact violation on the homepage.** `client/index.html` stated **"14 verified
Google reviews"** and **"14 Google reviews"** in prose while its own JSON-LD said
`reviewCount: "15"`, and site-config.json, FAQ.tsx, the generator and llms.txt all said 15. The
homepage was telling humans 14 and telling Google 15. Corrected both to the locked value of 15.
The drift had also reached `public/index.md` — the homepage markdown twin served to AI agents —
so AI assistants were being given the wrong review count. Regeneration propagated the fix.
(Checked and left alone: the 14/15 matches in `Reviews.tsx` are SVG path coordinates —
14.09, 14.97 — exactly as the brief warns.)

**Everything else checked, all clean, no change needed:**

| Step | Check | Result |
|---|---|---|
| 0 | pnpm-lock completeness | **77/77** deps present |
| 0 | Production serves current code | Verified — new service block live |
| 2 | Three-layer regeneration | **0 diffs** |
| 2 | Schema vs visible text | 114 pages, **477 questions, 0 problems** |
| 2 | Near-duplicate (96 pages incl. Keysborough) | 25.6% avg, worst 46.4%, **0 over 55%** |
| 2 | Bad URLs 404 | `/nope.zip`, `/assets/nope.js`, `/assets/fake.css` all 404 |
| 2 | Real hashed bundles still 200 | `text/javascript` / `text/css` — both directions verified |
| 2 | Redirects | 301 not 307; `/painters-toorak` and `/au/` correct |
| 2 | Sitemap | **114/114 return 200 with zero redirect hops** |
| 2 | Structured data | 0 parse errors, 0 required-field gaps, **0 aggregateRating in static pages** |
| 3 | Metadata | 0 duplicate titles/descriptions/H1s; 1 title >60 (`/painter-hastings/` 64 — baseline, unchanged) |
| 4 | Markdown negotiation | `text/markdown`, `Vary: Accept`, `X-Robots-Tag: noindex`; HTML on normal Accept |
| 4 | Markdown body parity | 95.9–97.1% across 5 sampled pages — in the 92–99% band |
| 4 | llms.txt prices | 3 `$` matches, **all read**: all are "$10 million public liability". No prices. |
| 4 | robots.txt | Disallows only `/api/` |
| 5 | TTFB | 0.18–0.26s, `cf-cache-status: HIT` |
| 6 | og:image | 200 `image/jpeg` |

⚠️ **Step 1 (GSC ranking data) could not be measured this run — the Supermetrics connector is not
available in this chat.** Its tools are absent from the session, so no GSC, GMB, GA4, PSI or
Trends data was pulled. Position figures in this log remain those of 2026-08-17; nothing here
updates them. Semrush is connected but returns units-zero on every call, as the brief predicts.

---

## 2026-08-19 — Phase change: authority acquisition. PR #194 merged as baseline.

PR #194 merged (squash `e33710e`); branch recreated from main. Standing instruction from Jimmy:
**stop broad internal-link changes.** Next phase is authority, Maps prominence, and measured
page-2 → page-1 movement. Diagnose the limiting factor before changing anything.

### Diagnosis of the 11 tracked suburbs — GSC, 2026-05-21 → 2026-08-16 (90 days)

| Suburb | Impressions | Best position | Clicks |
|---|---|---|---|
| Collingwood | 129 | 17.65 | **0** |
| Sorrento | 100 | **7.13** | **0** |
| Murrumbeena | 86 | 17.00 | **0** |
| Highett | 85 | 17.32 | **0** |
| Mordialloc | 77 | 29.18 | **0** |
| Mentone | 61 | 24.82 | **0** |
| McKinnon | 57 | 11.19 | **0** |
| Donvale | 49 | 16.63 | **0** |
| Patterson Lakes | 39 | **6.83** | **0** |
| Dromana | 38 | 19.53 | **0** |
| Aspendale | 21 | 10.00 | **0** |

~742 impressions across the eleven, **zero clicks**. Every click the site earns is brand:
`jetblack painting` 123 imp / 33 clicks / pos 3.9.

**The limiting factor is off-page authority. Ruled out, with evidence:**

- **Not content.** These pages run 700–1,750 words and six have already been deepened. Adding
  words to a page sitting at position 17 does not move it to position 8.
- **Not internal links.** This is the decisive test. **Mordialloc has 26 inbound internal links —
  more than any other page on the site — and the worst position of the eleven (29.18).** Sorrento
  has 8 and sits at 7.13. Internal links are not what separates them. PR #194 also just added 384
  crawler-visible service links, so this lever is now spent.
- **Not CTR.** Nothing is on page 1 to have a CTR. Positions run 7–29. Three queries do sit at
  3–7 (`house painter clarinda` 3.6, `bedroom painting patterson lakes` 6.8, `painters sorrento
  bay` 7.1) with zero clicks — but each has only 5–8 impressions, far too little to read a CTR
  signal from. **Do not treat this as a title/description problem.** Re-test when a page holds
  the top 10 on a term with real volume.
- **Is authority.** 44 links / 31 domains / authority 2 (measured 2026-08-13). The head terms
  are exactly the ones stuck at 15–30.

**Trajectory is healthy — the ceiling is the problem, not the slope.** Period-over-period
(2026-07-19→08-16 vs prior 28d), queries that existed in both windows improved enormously:
`house painting mount eliza` 97 → 24.5 · `house painting mount martha` 91 → 24.3 ·
`house painters caulfield` 84.8 → 31.8 · `painters bentleigh` 89 → 45.0 ·
`house painters bentleigh` 90.9 → 43.3 · `painters park dale` 66.5 → 30.2.
Most of the eleven tracked suburbs show **null** prior impressions — they had zero impressions in
the prior window and only started ranking in the latest one. Their positions are
first-appearance positions, not stalled ones.

### Backlink targets — researched and verified 2026-08-19

⚠️ **Semrush Backlink Gap could not be run.** Every Semrush report returns units-zero; Ahrefs
returns "Insufficient plan". So this list is *not* a competitor gap analysis — it is researched
industry-standard targets, each verified to exist. The competitor-gap step still needs Semrush
units: https://www.semrush.com/mcp-access

**Tier 0 — fix before adding anything new.** Existing citations point at the dead Manus site:
Yellow Pages AU (4 listings), TrueLocal (2). These are live links pointing somewhere broken.
Repairing them is the cheapest legitimate win available and requires no new relationships.
Yellow Pages duplicate merge: 1800 359 321. **Edit the existing entries — do not create new ones.**

**Tier 1 — trade accreditation. Highest topical relevance available in Australia.**

| Target | Notes |
|---|---|
| **Master Painters Association of Victoria** — `mpav.com.au/find-a-master-painter/` | The painting trade body for this state. Membership-gated directory. 03 9813 5922, Dandenong South. Highest-relevance Australian link there is for this business. |
| **Dulux Accredited Painter** — `duluxtrade.com.au` + `dulux.com.au/services/find-a-painter/` | **Invite-only**; requires sufficient public liability, which Jetblack has ($10M). Two of the strongest painting domains in the country, plus consumer leads. Enquire on 13 25 25. |
| **Haymes Paint Trade Applicator** — `applicators.haymespaint.com.au` | Australian-owned, 350+ stockists. Sign-up is open, not invite-only. |
| **Taubmans Trade** — `taubmans.com.au/for-painters` | PPG trade program. |

**Tier 2 — genuine local authority. Also feeds Maps prominence, which is the real lead constraint.**
Kingston City Council business support (`kingston.vic.gov.au/services/business`) · local chamber of
commerce · sponsorship of a Mordialloc club (football, bowls, boat) — genuine local ties, and the
Mordialloc page already speaks to foreshore club work · Kingston/Bayside community press.

**Tier 3 — relationship-based, slowest, highest value.** Real-estate agency preferred-trades pages
(matches the real-estate-painting service page) · body corporate and owners-corporation managers
(matches the body-corporate page) · builders and renovators, via HIA or Master Builders Victoria.

**Not recommended, per standing rules:** mass directory submission, PBNs, paid links.

### Recommendation on where effort goes

The website is doing its job — 11.3× impressions, average position 76 → 53, and broad 30–70 place
gains on every query old enough to compare. What it cannot do is manufacture authority. With
**5 phone calls in 88 days** from GBP and only `jetblack` clearing the Maps reporting threshold,
the binding constraint on actual leads remains GBP prominence and reviews, not the site.
Tier 0 and Tier 1 above are the highest-leverage work available, and none of it is a code change.

### 2026-08-19 (run 6) — daily audit: everything clean, no change made

First run under the authority phase. Steps 0–6 all clean, so by rule no fix was needed; Step 7
content work was **not** done, for two independent reasons given below.

| Step | Check | Result |
|---|---|---|
| 0 | Latest main | `e33710e` (PR #194 squash), merged 14:02 UTC |
| 0 | pnpm-lock completeness | **77/77** deps present |
| 0 | Production serves current main | Verified two ways — service block live on Mordialloc, homepage reads "15 Google reviews" |
| 2.1 | Three-layer regeneration | **0 diffs** |
| 2.2 | Schema vs visible text | 114 pages, **477 questions, 0 problems** |
| 2.3 | Near-duplicate, 96 pages | 25.6% avg, worst 46.4% (cranbourne/narre-warren), **0 over 55%** |
| 2.4 | Bad URLs 404 | `/nope.zip`, `/assets/nope.js`, `/assets/fake.css` — all 404 |
| 2.4 | Real hashed bundles | 200 `text/css` / `text/javascript` — both directions verified |
| 2.4 | Redirects | 301 on `/painter-toorak`, `/painters-toorak`, `/au/` |
| 2.4 | Sitemap | **114/114 at 200 with zero redirect hops** |
| 2.5 | Structured data | 0 parse errors, 0 required-field gaps, **0 aggregateRating in static pages** |
| 3 | Metadata | 0 dup titles/descriptions/H1s/canonicals, 0 missing descriptions, 0 keywords tags; 1 title >60 (`/painter-hastings/` 64 — baseline) |
| 4 | Markdown negotiation | `text/markdown`, `Vary: Accept`, `X-Robots-Tag: noindex`; HTML on normal Accept |
| 4 | robots.txt | Disallows only `/api/` |
| 4 | llms.txt prices | 3 `$` matches, **all read**: all "$10 million/\$10M public liability". No prices. |
| 5 | TTFB | 0.154–0.196s, `cf-cache-status: HIT` |
| 6 | og:image · /review-us/ | 200 `image/jpeg` · noindex and correctly absent from sitemap |

**⚠️ The daily brief's Step 7 queue is stale on 4 of 7 entries.** Measured live, excluding nav:

| Suburb | Brief says | Actual | |
|---|---|---|---|
| Donvale | 702w | **1,236w** | stale |
| Aspendale | 738w | **1,274w** | stale |
| Clyde North | 752w | **1,245w** | stale |
| Sorrento | 964w | **1,794w** | stale |
| Patterson Lakes | 807w | 865w | current |
| Dromana | 841w | 892w | current |
| Mount Eliza | 899w | 959w | current |

This is the failure mode the brief itself warns about. Four queue entries were deepened by PRs
#192 and #194 and would have been re-deepened by a run that trusted the figures.

**No content work, for two independent reasons.** Jimmy's standing phase instruction
(2026-08-19) says stop broad internal-link changes, do not add content merely to increase word
count, and diagnose the limiting factor before changing anything. That diagnosis was done earlier
today: the constraint on the tracked suburbs is **off-page authority**, not content. Separately,
the brief's own guard says to recommend GBP/off-page work rather than pad a page — and Patterson
Lakes, the strongest remaining candidate, already ranks at position **6.83** on
`bedroom painting patterson lakes`. A page that close to the top is not short of words.

**Could not be measured:** nothing this run — Supermetrics was available and GSC data was pulled
earlier today. Semrush remains units-zero and Ahrefs "Insufficient plan", so competitor backlink
gap analysis is still blocked.
