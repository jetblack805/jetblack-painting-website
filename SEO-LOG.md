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
