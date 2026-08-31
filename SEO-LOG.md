# Jetblack Painting — SEO Running Log

**Purpose.** A durable record of what has been investigated, changed and ruled out, so no
optimisation is repeated and no run starts from a stale picture of the site.

⚠️ **Read this before acting on any brief.** Three separate briefs have now asked for work that
was already complete. Verify claims against the live site and this log before changing anything.

Not published — root `.md` files 404 on the live site (only `dist/public` is served).

---

## ⚠️ CURRENT LOCKED FACTS — these override any brief

The daily routine's brief carries a stale copy of these. Its own rule is that **this log wins**.
Re-verify against the live site before cementing any of them again.

| Fact | Value | Verified |
| --- | --- | --- |
| Google rating | 5.0 | 2026-08-27 |
| **Google review count** | **17** | 2026-08-27 |
| Phone | 0432 077 782 | 2026-08-27 |
| Email | jimmy@jetblackpainting.com | 2026-08-27 |
| Public liability | $10 million | — |
| Workmanship guarantee | 5 years, written | — |
| Base | Mordialloc VIC 3195 | 2026-08-27 |
| **Years experience** | **18+** | 2026-08-30 |
| Quote turnaround / enquiry response | 24–48 hours | — |

### Years experience — 18+, not 13+

**Jimmy confirmed on 2026-08-30 that 18 is correct**, and asked the site to match his Google
Business Profile, which states 18+. Every occurrence was changed across 23 source files. **Do not
revert this to 13.** An earlier version of the daily brief says 13+; that is now stale.

Three other figures were live and are all wrong or need care:

| Where | Said | Status |
| --- | --- | --- |
| Site, llms.txt, schema | 13+ | **corrected to 18+** |
| `TrustBadges.tsx` | "trusted since 2011" (implies 15) | **year claim removed** — not replaced with an invented founding year |
| Google Business Profile | 18+ | the source of truth Jimmy nominated |
| Google's record of the business opening | March 2015 (11) | **unresolved, and Google can see it** |

Phrasing throughout is deliberately "18+ years of **experience**", not "the business is 18 years
old" — that is what the Business Profile says and it is the reading that does not contradict
Google's own opening date. If the intent is business age, that conflict has to be settled at the
Business Profile end, not in the repo.

### Review count — read this before touching it

**It is 17, not 15.** The routine's brief still says "5.0 from 15 Google reviews". That figure is
stale and **a run must not "correct" 17 back down to 15** — doing so would publish a false review
count across the whole site. Confirmed two ways on 2026-08-26: every hardcoded place reads 17, and
Jimmy supplied a screenshot of his own Google knowledge panel showing `5.0 ★ (17)`.

The count is hardcoded in **eight** places, not the nine the brief lists:

1. `client/index.html` — the JSON-LD `reviewCount`
2. `client/index.html` — the prose line ("5.0-star rating from 17 Google reviews")
3. `client/src/lib/aggregateRatingSchema.ts` — the default and its comment
4. `client/src/site-config.json`
5. `client/src/pages/FAQ.tsx`
6. `client/src/pages/blog/ChoosingAPainterMelbourne.tsx`
7. `scripts/generate-static-pages.mjs` — the `AGGREGATE_RATING` const **and** its duplicate FAQ answer
8. `llms.txt` and `public/llms.txt` — byte-identical, keep them that way

**`client/src/pages/Home.tsx` is NOT one of them.** The brief lists it; the file carries only
comments and `<Reviews />`. Do not go hunting for a count there.

Two decoys, both of which must be left alone:

- `ChoosingAPainterMelbourne.tsx` contains *"a 5.0 rating with 3 reviews tells you less than a 4.8
  with 100"*. That is generic advice about judging any painter, **not** a Jetblack claim.
- The `15` / `14` matches in `Reviews.tsx` are SVG path coordinates (`14.09`, `14.97`).

The `client/index.html` prose drifted to "14" once and was fixed on 2026-08-18 — re-check it each run.

### Three smaller stale figures in the brief

- **Step 5** says the only image over 250KB is `og-image.jpg` at 281KB. There are now **zero**
  images over 250KB — `og-image.jpg` was replaced at 163KB on 2026-08-26 because the previous file
  carried a competitor's watermark.
- **Step 2/Step 3** baseline of **114** sitemap URLs reads as **115** and is correct: 117 static
  pages, minus the three noindex pages (`/privacy/`, `/review-us/`, `/terms/`), plus `/`.
- **Step 2** baselines of 114 pages / 477 FAQ questions are now **117 pages / 489 questions**.

---

## Success criterion

> Judge success by whether Jetblack Painting is becoming more visible for commercially
> valuable searches — **not** by how much code or content was produced.

A run that investigates, finds nothing worth changing, and says so is a successful run.

---

## Data access — what is actually reachable

| Source | Status | Notes |
|---|---|---|
| Google Search Console | ✅ **GSC Wizard (primary)** | Connected and verified 2026-08-27. Supermetrics `ds_id="GW"` is the fallback |
| Google Business Profile | ⚠️ Via Supermetrics MCP only | `ds_id="GMB"`, **read-only** — cannot post. GSC Wizard does NOT cover GBP |
| GA4 | ❌ Effectively broken | Connected property `545100608` has **zero data in 20 months**; site fires `G-6NC2597W9L`. GSC Wizard has a GA4 suite but it reads the same empty property — the gap is upstream, not tooling |
| **Bing Webmaster Tools** | ⚠️ **Now reachable, untested** | GSC Wizard ships a Bing suite (`get_bing_query_stats`, `get_bing_crawl_issues`, …). Never exercised — verify before quoting |
| **Apple Business Connect** | ❌ **No access** | No connector exists |
| Competitor intelligence | ❌ Largely unavailable | Semrush out of API units; Ahrefs returns "Insufficient plan" |
| Instagram | ⚠️ Read-only via Supermetrics | `ds_id="IGI"`. Cannot post |
| The site itself | ✅ Full | curl + repo. Most reliable source |

### GSC Wizard — the primary ranking-data path since 2026-08-27

Load with ToolSearch first (`select:mcp__GSC_wizard__list_sites,…`). One property:
`sc-domain:jetblackpainting.com`. These seven were exercised against it on 2026-08-27 and all
returned real data:

`list_sites` · `detect_anomalies(metric, days≥21)` · `detect_change_points(metric, days≥14)` ·
`get_ranking_changes(start/end + comparison window, dimension)` · `list_algo_updates(start,end)` ·
`get_indexing_tracker` · `score_opportunities(limit, minImpressions)`

Available but not yet exercised: `query_search_analytics`, `query_top_queries`, `query_top_pages`,
`get_page_performance`, `analyze_cannibalization`, `find_decaying_content`, `get_core_web_vitals`,
`inspect_url` / `bulk_inspect_urls`, the Bing suite, the GA4 suite.

Data lags 2–3 days; omit start/end dates and the server uses the last 28 settled days. Every
response carries a `dataSource` field (`api` or warehouse).

> ⚠️ **INTERPRETATION RULE.** Most of this property's queries carry **1–8 impressions**. At that
> volume a swing from position 96 to position 4 is ONE SERP sample, not a trend, and
> `get_ranking_changes` returns dozens in both directions — its improved and declined tables come
> back as near mirror images. Treat a mover as real only at roughly **20+ impressions**. Report
> noise as noise.

> ⚠️ **Striking distance is 8–18, not 8–12.** On 2026-08-27 the two highest-scoring queries on the
> whole property sat at **13.4** (`painters sorrento`, 116 impressions) and **16.3**
> (`painters collingwood`, 144 impressions) — outside a 8–12 band and carrying 5–10× the
> impressions of anything inside it.

**Consequence:** the daily loop's "inspect performance first" step used to be frequently impossible.
With GSC Wizard connected it usually is not — but MCP servers here connect and disconnect mid-session,
so check before assuming.
When data is unavailable, say so — do not substitute guesswork, and do not invent a rationale
for a change.

Google, Maps, googletagmanager and social platforms are blocked by the sandbox egress proxy.
Never claim to have checked them directly.

---

## Locked business facts — never invent or vary

Phone **0432 077 782** · jimmy@jetblackpainting.com · **$10M** public liability ·
**5-year** written guarantee · Mordialloc VIC 3195 · **13+ years** · **5.0 from 17 Google reviews** ·
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

### 2026-08-20 — Bing Webmaster Tools verified

Jimmy supplied a BingSiteAuth token and it is now **verified**. Bing matters beyond Bing itself:
it feeds ChatGPT search and Copilot, and there is **no Bing Webmaster connector** in the registry
(checked 2026-08-20), so this file is the only route in and all Bing work is manual.

⚠️ **The file already contained a different token** — `920FCBF9…`, added 2026-07-24 in PR #108
under Jimmy's own account, an earlier verification attempt. It was kept, not deleted.

**Gotcha worth remembering: Bing matches only the FIRST `<user>` entry.** The first attempt failed
with "Incorrect authentication key" even though the correct token was present, because the older
token was listed first. Ruled out before touching it: serves 200 `application/xml` to bingbot's
user-agent and to a plain client, no BOM, no stray whitespace, `must-revalidate` with a matching
etag so not a stale edge copy. Reordering so the issued token is first fixed it immediately.
**If a Bing token is ever rotated, put the new one at the top of the file.**

Note: `www.jetblackpainting.com` cannot be fetched from this sandbox, so the www host was never
testable as a hypothesis. It turned out not to matter.

**Next in Bing (manual, Jimmy):** submit `https://jetblackpainting.com/sitemap.xml` (114 URLs, all
verified 200 with zero redirect hops), then use Bing's URL submission — its quota is far more
generous than Google's — on the pages closest to page 1: Sorrento, Collingwood, McKinnon, Mordialloc.

### Connector audit — 2026-08-20

Checked the installed list and searched the registry. **No connector exists for Google Search
Console, Google Business Profile, Bing Webmaster Tools or Apple Business Connect.**

| Connector | State | Action |
|---|---|---|
| **Supermetrics** | Connected, working | ⚠️ **TRIAL ENDS ~2026-08-24.** Sole route to GSC and GBP data. No substitute. Renew. |
| **Local Falcon** | Installed, `enabledInChat: false`, state unknown | 37 tools incl. grid-based map-pack scans. Measures the binding constraint. Paywalled — highest-value new spend. |
| Semrush | Connected, **0 API units** | Not an auth problem. Only for competitor Backlink Gap. |
| Ahrefs | Connected, "Insufficient plan" | Overlaps Semrush. Do not pay for both. |
| Cloudflare | Connected | **No DNS tools** — DMARC must be added by hand. |
| Gmail, Resend, GitHub | Connected, working | Outreach drafts created 2026-08-20. |

**DMARC is genuinely missing** (SPF exists: `v=spf1 include:_spf.google.com ~all`). Add TXT
`_dmarc` = `v=DMARC1; p=none; rua=mailto:jimmy@jetblackpainting.com`. Start at `p=none` so it
cannot break mail; tighten later. Matters because `/api/quote` sends through Resend.

**Free and worth doing, no connector available:** Apple Business Connect (feeds Apple Maps on every
iPhone in Melbourne — relevant given the map pack is the constraint).

### 2026-08-20 — Bing URL submission: 100 of 114 done

Verified, then submitted via Bing Webmaster Tools URL Submission (100/day quota):
16 in a first batch, then 84. **30 URLs remain**, listed below, to submit when the quota resets.

⚠️ **Paste bare URLs only.** The first attempt failed because the list carried trailing
annotations (`<- tracked suburb`); Bing reads the whole line as the URL and rejects every one.
Also submit the sitemap separately under **Sitemaps** — `https://jetblackpainting.com/sitemap.xml`
covers all 114 and does **not** consume the URL quota.

**Priority order used:** homepage → the 11 tracked suburbs → 8 service pages → blog → FAQ →
remaining suburbs ranked by measured GSC impressions.

**Still to submit (30):**

```
https://jetblackpainting.com/painter-chelsea-heights/
https://jetblackpainting.com/painter-brighton-east/
https://jetblackpainting.com/painter-heatherton/
https://jetblackpainting.com/painter-edithvale/
https://jetblackpainting.com/painter-bonbeach/
https://jetblackpainting.com/painter-carrum/
https://jetblackpainting.com/painter-oakleigh/
https://jetblackpainting.com/painter-clarinda/
https://jetblackpainting.com/painter-dingley-village/
https://jetblackpainting.com/painter-chadstone/
https://jetblackpainting.com/painter-frankston/
https://jetblackpainting.com/painter-frankston-south/
https://jetblackpainting.com/painter-mornington/
https://jetblackpainting.com/painter-glen-iris/
https://jetblackpainting.com/painter-balwyn/
https://jetblackpainting.com/painter-st-kilda/
https://jetblackpainting.com/painter-port-melbourne/
https://jetblackpainting.com/painter-albert-park/
https://jetblackpainting.com/painter-richmond/
https://jetblackpainting.com/painter-south-melbourne/
https://jetblackpainting.com/painter-carnegie/
https://jetblackpainting.com/painter-braeside/
https://jetblackpainting.com/painter-waterways/
https://jetblackpainting.com/painter-safety-beach/
https://jetblackpainting.com/painter-rye/
https://jetblackpainting.com/painter-hampton-park/
https://jetblackpainting.com/painter-endeavour-hills/
https://jetblackpainting.com/painter-somerville/
https://jetblackpainting.com/painter-clyde/
https://jetblackpainting.com/painter-hastings/
```

### 2026-08-20 — IndexNow implemented

Replaces the manual Bing "Submit URLs" flow (100/day quota, dashboard required). IndexNow has no
quota and reaches Bing, Yandex, Seznam and Naver from one request.

- `public/236b45859f0cf903f27f5160088eba04.txt` — proves ownership. **Verified live**, 200
  `text/plain`, contents match the filename. The key is public by design.
- `scripts/indexnow.mjs` — takes paths, full URLs, or `--all`; `--dry` prints without sending.
- `pnpm indexnow` wired up. `generate-known-paths` picked the key file up automatically.

**Deliberately NOT wired into the build.** IndexNow treats resubmitting an unchanged site as abuse
and ignores keys that do it; a build-step ping would resubmit all 114 URLs on every deploy. Call it
with the pages a change actually touched.

⚠️ **`api.indexnow.org` is blocked by this sandbox's egress policy** (`HTTP 403 Host not in
allowlist`). The script is complete and its guards are tested, but **it cannot be executed from the
agent environment.** Options: run `pnpm indexnow /path/` from Jimmy's own machine, or add
`api.indexnow.org` to the environment's network policy.

Note for future runs: a proxy 403 and an IndexNow "key not valid" 403 look identical on the status
line. The first version of the script printed "Key not valid" for a proxy block, which would have
sent someone checking a key file that was fine. It now inspects the body, reports UNREACHABLE, and
exits **2** for network failure versus **1** for a genuine API rejection.

### 2026-08-22 — Daily audit: IndexNow postbuild hook removed (deploy-safety defect)

**Real defect found and fixed — one I introduced the day before.**

The 2026-08-20 entry below records that IndexNow was *deliberately* not wired into the build. On
2026-08-21 a `postbuild` hook was added anyway (`"postbuild": "node scripts/indexnow-on-deploy.mjs"`),
which contradicted that decision and was wrong on two counts:

1. **It could take production deploys down.** `indexnow.mjs` exits 2 when the API is unreachable and
   1 when a submission is rejected; `indexnow-on-deploy.mjs` propagated that. A non-zero `postbuild`
   fails `pnpm build`, and Cloudflare deploys every branch push by running the build — so an
   unreachable third-party API would have stopped the site shipping. Verified end-to-end with a `git`
   shim that simulates a changed page: exit **2**. It only passed at 743f450 because that commit
   touched no `public/*.html`, so the diff was empty and the hook exited 0. **The first deploy that
   touched a suburb page would have failed.**
2. **It would not have worked anyway.** Cloudflare clones shallow (`git rev-parse
   --is-shallow-repository` = true here too), so `HEAD~1` may not resolve on the build machine and
   the diff would find nothing on every deploy.

Fix: removed the `postbuild` hook; the tool is now explicit (`pnpm indexnow:changed`). Added
`--no-fail` (reports the failure, exits 0) for anyone who does want it in a pipeline, and swapped
`execSync` with an interpolated shell string for `spawnSync` with an argument array. Header comment
now states the reasoning so it does not get re-wired a third time.

Indexing is best-effort; deploying is not. **Do not put a third-party API call in the build chain.**

**Checks — all clean, no other change made.**
- Build health: 77/77 package.json deps present in pnpm-lock.yaml. (First check scripted this wrong
  and reported 77/77 *missing* — scoped names are single-quoted in the lockfile's `importers` block.
  Read the lockfile before believing a dependency alarm.)
- Three layers regenerate to **zero diffs** (static pages → markdown → known paths).
- 114 pages · 477 FAQ questions · 0 not visible as text · 0 JSON-LD parse errors · 0 aggregateRating
  in static pages · 0 missing required fields.
- Metadata: 0 duplicate titles/descriptions/H1s/canonicals · 0 missing descriptions · 0 keywords tags
  · 0 descriptions over 158 · 1 title over 60 (`/painter-hastings/` 64, accepted).
- Near-duplicate: 96 suburb pages, avg worst-twin **25.8%** (baseline 25.6%), worst **45.2%**
  chelsea-heights/dingley-village, **zero over 55%**. Mordialloc is **18.3%** — the readability
  rewrite made it *less* templated, not more.
- Site health: real pages 200; `/nope-not-a-page/`, `/nope.zip`, `/assets/nope.js`, `/assets/fake.css`
  all 404 **and** real hashed bundles still 200 with `text/javascript` / `text/css`; redirects 301;
  sitemap **114/114 all 200, zero redirect hops**.
- AEO: markdown negotiation returns `text/markdown` with `Vary: Accept` / `no-store` / `noindex`;
  normal Accept returns HTML; the Mordialloc twin body carries the rewritten copy (salt air, Main
  Street, Mordialloc Creek, Peter Scullin all present in both layers). robots.txt disallows only
  `/api/`. llms.txt `$` matches read in context: both are `$10M public liability`, **no prices**.
- Review count consistent at **15** in every location, including both prose sentences in
  `client/index.html` (the one that drifted to 14 is still correct) and both copies of llms.txt.
- Speed: TTFB 0.21–0.43s. og:image/twitter:image resolve 200.

**Ranking data (GSC via Supermetrics, 2026-05-24 → 2026-08-19, vs the 2026-08-19 baseline).**
Tracked eleven, best position: Collingwood 17.65→16.73 · Sorrento 7.13→6.75 · Murrumbeena 17.00→16.91
· Highett 17.32→16.86 · **Mordialloc 29.18→25.64** · Mentone 24.82→flat · McKinnon 11.19→11.05 ·
Donvale 16.63→16.09 · Patterson Lakes 6.83→6.75 · Dromana 19.53→flat · **Aspendale 10.00→14.00**.
Impressions **742 → 933**. Clicks **still zero on all eleven**; every click remains brand
(`jetblack painting` 123 imp / 33 clicks / pos 3.9).

Caveats, stated rather than glossed: the two windows overlap almost entirely, so these are small
shifts inside largely the same 90 days, not a fresh period. Aspendale's −4.0 is on 17 impressions —
noise. Mordialloc's +3.54 is the largest move, but the readability rewrite only went live 2026-08-20,
two days of an 88-day window — **too early to attribute, re-measure after 2026-09-20.** The query pull
truncated at 400 rows, so the lowest-impression long tail is not included. Nothing crossed into the
top 10 on a term with real volume, so **CTR remains untestable and titles/descriptions stay untouched.**

⚠️ **Supermetrics trial expires in 2 days** (the API said so on this run). It is the only working
route to GSC and GBP data — Semrush is units-zero and Ahrefs is "insufficient plan". If it lapses,
ranking measurement stops entirely.

⚠️ Production serves the **branch head**, not `main` — Cloudflare deploys branch pushes straight to
production, so `main` sat 8 commits behind what was live. Merging this PR resyncs them.

Authority work: no change this run. The brief's rule is one type of change per run, and a real
deploy-safety defect outranks a backlink task. Tier 0 (Yellow Pages / TrueLocal still pointing at the
dead Manus site) remains the cheapest open win and needs a phone call — 1800 359 321.

### 2026-08-23 — Tier 0: Yellow Pages listings updated (reported by Jimmy)

Jimmy called Yellow Pages (1800 359 321) and updated the business details. This was the longest-
standing Tier 0 item: four Yellow Pages listings still pointed at the dead Manus site.

⚠️ **Not independently verified.** `yellowpages.com.au` is blocked by this environment's egress
proxy (`EGRESS_BLOCKED`), so this entry records what Jimmy reported, not what was confirmed from
the source. A future run with network access to that host should check: how many listings now
resolve, and whether each points at `jetblackpainting.com` rather than a `manus.space` URL.

**Still outstanding: TrueLocal (2 listings).** Jimmy mentioned Yellow Pages only. TrueLocal was
always the second half of Tier 0 and is unaffected by this call — it is a separate provider with
its own listings, also still pointing at the dead site as at 2026-08-19.

**What this actually buys, stated accurately rather than optimistically.** An earlier note in this
log framed the directory cleanup as fixing "the authority problem". That was imprecise and should
not be repeated:

- **Certain gain — the leak stops.** Anyone clicking those listings was landing on a dead page.
  This matters most on **Bing**, where Yellow Pages ranks well for the brand and Google does not
  — Google demotes aggregator pages for local intent, Bing does not.
- **Certain gain — NAP consistency.** Name/address/phone agreement across directories is a local
  search and map-pack signal. Given the map pack is the binding constraint on actual leads
  (5 phone calls in 88 days), this is the more valuable half.
- **Uncertain — link equity.** Major directories commonly mark outbound links `nofollow`, in which
  case this does not move domain authority at all. Unverifiable from here for the same egress
  reason. **Do not assume the 44 links / 31 domains / authority 2 baseline improves because of
  this.** Re-measure before claiming it did.

Timing: directory edits propagate over days to weeks, and any search effect trails that. Nothing
here should be expected to show in ranking data inside the current measurement window.

### 2026-08-23 (evening) — Daily audit: all checks clean, no change made

Everything in steps 0–6 passes. No defect found, so nothing was changed. Recording the run and,
more importantly, the ways the trigger brief has gone stale.

**Checks — all clean.**
- Build health: local HEAD == origin/main; 77/77 package.json deps present in pnpm-lock.yaml;
  production serves the newest commit (the Ahrefs tag from PR #204 is live).
- Three layers regenerate to **zero diffs**.
- **115 pages · 485 FAQ questions · 0 not visible as text** · 0 JSON-LD parse errors · 0
  aggregateRating in static pages · 0 missing required fields.
- Metadata: 0 duplicate titles/descriptions/H1s/canonicals · 0 missing descriptions · 0 keywords
  tags · **0 descriptions over 158** · 1 title over 60 (`/painter-hastings/` 64, accepted).
- Near-duplicate: 96 suburb pages, avg worst-twin **25.2%** (down from the 25.6% baseline after the
  readability rewrites), zero over 55%.
- Site health both directions: real pages 200; `/nope-not-a-page/`, `/nope.zip`, `/assets/nope.js`,
  `/assets/fake.css` all 404 **and** real hashed bundles still 200 with `text/javascript` /
  `text/css`; `/painters-mordialloc` 301s; sitemap **115/115 all 200, zero redirect hops**.
- AEO: markdown negotiation returns `text/markdown` with `Vary: Accept` and `noindex`; robots
  disallows only `/api/`; llms.txt `$` matches read in context are both `$10M public liability`,
  **no prices**; llms.txt carries the correct **17 verified reviews**.
- Review count consistent at **17** across homepage JSON-LD, both homepage prose sentences and the
  FAQ page. Zero stale "15 Google reviews" anywhere live.
- Speed: TTFB 0.23–0.59s, `cf-cache-status: HIT`. og:image/twitter:image resolve 200.

**Could not measure.** Supermetrics is not connected to this session, so there is **no ranking
re-measure this run** — no GSC positions, no GBP figures. Semrush was probed once as the brief
allows and still returns units-zero. ⚠️ The Supermetrics trial expires **2026-08-25**, two days out.

**The trigger brief is now stale in six places.** The log wins, per the brief's own rule:
1. Review count is **17**, not 15. Updated everywhere and verified live (PR #198).
2. Epoxy flooring is **real and shipped**. Jimmy confirmed with job photos; `/services/epoxy-flooring/`
   is live (PRs #199, #201). The brief still says "do not add until Jimmy confirms".
3. Readability rewrite **was authorised and is done** for the tracked eleven (PR #202). The brief
   still says "do not start without Jimmy's explicit go-ahead".
4. Page count is **115**, not 114. FAQ questions **485**, not 477.
5. Sitemap is **115** URLs, not 114.
6. Tier 0 Yellow Pages is **done** (Jimmy called; logged 2026-08-23). TrueLocal's two listings remain.

**Authority work this run: reporting only, nothing to change.**
- Yellow Pages: done, unverifiable from here (`yellowpages.com.au` is egress-blocked).
- **TrueLocal: still outstanding**, two listings still pointing at the dead Manus site.
- **Dulux: route in identified.** Jimmy has a Dulux *trade account*, which is a purchasing
  arrangement, not the Accredited Painter programme that feeds dulux.com.au Find a Painter. He meets
  every published criterion — registered business, 2+ years, current public liability, track record.
  What remains is their training and a site assessment. The programme is invite-only, so the trade
  rep is the route to nomination. **No accreditation claim has been added to the site and none
  should be until it is actually granted.**

**Also shipped today, outside the audit:** Ahrefs Web Analytics (PR #204), in both head layers, 115
of 115 pages. Worth noting because it is the only traffic analytics that survives the Supermetrics
expiry — GA4 is connected but has no data.

**A GPT-authored audit PDF was reviewed.** Its strategic read agrees with the settled diagnosis
(authority, not technical). Three of its specific findings are wrong and were **not** actioned:
the homepage "missing alt text" is a deliberate `alt=""` on a decorative background image behind a
gradient, and adding descriptive alt would make screen-reader output worse; the duplicate-URL fix it
prescribes is already implemented (non-slash 301s to slash, which self-canonicalises); and the
sitemap needs no reconciling (115 URLs, all trailing-slash, zero duplicates). Its one genuinely new
find is **Clyde North — ~750 impressions at position 31, zero clicks** — unverified here for want of
GSC access, and it wants project evidence rather than word count.

---

## 2026-08-24 — Keyword review, and two orphaned service pages

**Question asked:** "What about optimising my keywords?"

**Data:** GSC via Supermetrics, 2026-05-24 → 2026-08-20 (90 days), 800 queries.

### There is no keyword-targeting gap

Every query cluster with meaningful volume already has a page pointed at it:

| Cluster | 90-day impressions | Best position | Page |
| --- | --- | --- | --- |
| Suburb + painters (top 20) | ~1,900 | 13.3 (Sorrento) | all present |
| Body corporate / strata | 74 | 49.0 | `/services/body-corporate-painting/` |
| Kitchen / cabinet resurfacing | ~74 | 74.1 | `/services/kitchen-cabinet-resurfacing/` |
| Roof painting | ~28 | 15.3 | `/services/roof-painting/` |

Only two suburbs in the top 50 queries have no dedicated page — **Brunswick East** (58 impressions
@ 47.3) and **Fitzroy North** (54 @ 36.5) — and the parent Brunswick/Fitzroy pages already serve
them. Building page 116 and 117 to land at position 40 alongside the existing hundred is not worth
doing, so it was not done.

**Clicks on non-brand queries across the full 90 days: zero.** The only queries that convert an
impression into a click are `jetblack painting` (124 impr / 33 clicks / pos 4.0) and `jet black`.
The brief's CTR re-test condition ("re-test when a page holds top-10 on a term with volume") is
still not met: the best non-brand position with real volume is `painters sorrento` at 13.26.

### Position spread is geographic, not lexical

Titles read `<Suburb> Painters` while queries read `painters <suburb>`. Word order is not a ranking
factor for this and **no title was rewritten** — the brief's "do not rewrite healthy titles" rule
holds.

What actually separates the pages is where they are:

- **Bayside / Peninsula / inner-north, pos 13–25:** Sorrento 13.3, Aspendale 14.0, McKinnon 14.4,
  Brighton East 16.0, Patterson Lakes 16.5, Collingwood 16.7, Donvale 17.1, Highett 17.8,
  Murrumbeena 18.6, Dromana 19.5, Elwood 21.6, Mordialloc 24.9.
- **Eastern affluent corridor, pos 75–99:** Kew 97.4, South Yarra 92.5, Hawthorn 91.0,
  Camberwell 90.9, Malvern 88.6, Glen Waverley 88.1, Doncaster 85.1, Chadstone 83.2, Toorak 79.2.

Same template, same title pattern, same word count — 80 positions apart. That is proximity and
competitor authority, not keywords.

Note the first list is (almost exactly) the eleven pages rewritten in PR #202. **That is selection,
not effect** — those pages were picked *because* they were already the closest to page one, and this
window closes 2026-08-20, before the rewrite shipped. The rewrite's effect is not yet measurable.

### What was actually wrong: two service pages had zero inbound internal links

Counting inbound internal links across all 115 generated pages:

```
0  /services/body-corporate-painting/   ← 74 impressions, pos 49–66
0  /services/epoxy-flooring/            ← shipped PR #199/#201, never linked
5  /services/roof-fence-painting/
96 /services/real-estate-painting/      ← the other six sit at 96–111
```

Both were reachable only from `sitemap.xml`. The homepage *names* both ("Concrete & Epoxy Flooring",
"Strata & Body Corporate Painting", "Garage Floor Coatings") in a list that was plain strings with no
links. The epoxy page was my own omission when it shipped.

**Fixed:**
1. `PremiumServices.tsx` — `allServices` converted from strings to `{name, link?}`; every entry with
   a page now links to it.
2. `Footer.tsx` — added a Services column listing all nine service pages. The footer previously
   carried a single `/#services` anchor and no service page links at all.
3. `SuburbPageTemplate.tsx` `coreServices` + the matching block in `generate-static-pages.mjs` —
   body corporate and epoxy added, so both layers agree.

Both pages went 0 → 96 inbound links.

**Left alone, flagged:** `/services/roof-fence-painting/` (5 inbound) overlaps
`/services/roof-painting/` (104 inbound). Boosting the weak one risks splitting the same intent
across two URLs. Worth deciding whether to merge them before linking either harder.

**Also worth naming:** the footer links all 100+ suburb pages from every page, so every suburb page
has exactly 114 inbound links — perfectly flat. Site-wide boilerplate links are heavily discounted,
so this gives Google no signal about which suburbs matter. Not changed here; it is a structural
decision, not a bug.

**Verification limits this run:** `pnpm check` and `pnpm build` could **not** be run —
`registry.npmjs.org` returns 403 in this environment and `node_modules` is absent. The three edited
`.tsx` files parse cleanly under Prettier's TypeScript parser, and the static generator and sitemap
script (both dependency-free) ran successfully. The React changes are deliberately small and follow
patterns already present in the same files.

**Ahrefs API is not usable on the current plan** — `management-projects`,
`keywords-explorer-*` and `subscription-info` all return `Insufficient plan`. The Ahrefs connector
is effectively read-nothing for API purposes; the Web Analytics script (PR #204) still works.

**Supermetrics trial expires 2026-08-25.** After that, GSC data has to come from the Search Console
UI directly.

### Addendum — the vendor-react chunk fix failed and was reverted

`7e7ff0e` added `react/jsx-runtime` to the `vendor-react` manual chunk, on the theory that the JSX
runtime had been assigned to `vendor-animation` and was dragging 128KB of framer-motion onto every
page. It deployed successfully. Measured against the live build:

```
vendor-animation-D3Hbm0mm.js   127.7 KB   contains framer-motion AND React core
vendor-react-6BqCyl38.js         3.5 KB   contains neither
```

`vendor-react`'s first line is `import{r as t}from"./vendor-animation-D3Hbm0mm.js"` — **it imports
React from the framer-motion chunk.** Of 140 chunks, 118 still import `vendor-animation` (down from
123). Every page still downloads the 128KB, now with an extra request for a 3.5KB stub.

The diagnosis was wrong. It is not the JSX runtime that is trapped in the animation chunk — **it is
React itself.** The object form of `manualChunks` assigns only the exact module ids listed; shared
transitive dependencies land in whichever manual chunk Rollup reaches first, which here is
`vendor-animation` via framer-motion.

Reverted to `["react", "react-dom"]`, with the finding recorded in the config so it is not retried.

A real fix needs the **function form** of `manualChunks`, matching `node_modules/react`,
`react-dom` and `scheduler` by path so assignment does not depend on traversal order. That is worth
doing — 128KB off every page is the largest single speed win available — but it cannot be verified
here (no `node_modules`, registry blocked) and Cloudflare deploys straight to production, so it
should be a deliberate, separately-watched change rather than a second blind attempt.

---

## 2026-08-24 — Privacy/Terms pages, and repo tidy

### Privacy Policy and Terms of Use

`/privacy/` and `/terms/` now exist in both rendering layers. They were the one genuinely
actionable finding in the Copilot audit — everything else it flagged was either already done or
factually wrong about the site.

**Every factual claim in the privacy page was checked against the code, not assumed:**

| Claim | Verified against |
| --- | --- |
| Form fields, which are required vs optional | `worker/quote.js` `FIELD_LIMITS` + `validate()` |
| Anti-spam signals (honeypot, fill timing) | `worker/quote.js` lines 141–152 |
| "The website does not store your enquiry" | `worker/quote.js` uses **no** Cloudflare bindings — no KV, no D1. It validates and forwards. |
| Enquiries emailed via Resend | `worker/quote.js` `sendViaResend` → `api.resend.com` |
| Google Analytics + Ahrefs Web Analytics | `client/index.html` (GA4 `G-6NC2597W9L`, `analytics.ahrefs.com`) |
| Google Maps embed sees visitors | `client/src/components/GoogleMap.tsx` — `maps.google.com` iframe |
| Social icons send nothing until clicked | `Footer.tsx` — plain `<a>` links, not embeds |
| Photos name suburbs, never customers or addresses | `Gallery.tsx` alt/location strings |
| Five-year record retention | Australian tax law record-keeping period |

**Deliberately not done: a cookie consent banner.** The audit recommended one. Australia has no
cookie-consent law, and GDPR applies to offering goods or services to people in the EU — which a
Melbourne painting business does not. A banner would cost conversions for no legal gain. What GA4's
own terms *do* require is a privacy policy disclosing cookie use, and that is now in place. If the
business ever markets into the EU or UK, this changes.

**Both pages are `noindex, follow`,** matching the reasoning already established for `/review-us/`:
nobody searches for a privacy policy, and they exist for visitors and for Google's trust evaluation,
not for rankings. They are deliberately absent from `sitemap.xml`. One-line change if that call
should be revisited — the privacy page runs 991 words, so thinness is not the constraint.

**Orphan defect caught before commit.** First pass added the legal links only to the React
`Footer.tsx`, which left `/privacy/` and `/terms/` reachable in the crawlable layer only from each
other — the identical defect just fixed for the body-corporate and epoxy service pages. The static
generator has its own footer. Legal links now emit from `pageHtml` itself, so all 116 other pages
carry them, with self-links suppressed.

### Repo tidy

**`client/src/components/Map.tsx` deleted.** 155 lines, imported by nothing, and a Manus-platform
leftover: it loaded the Google Maps API through `forge.butterfly-effect.dev`, a third-party proxy,
via a `VITE_FRONTEND_FORGE_API_KEY` that exists nowhere else in the repo. It also imported
`@/hooks/usePersistFn` — and `client/src/hooks/` **does not exist**, so the file carried a broken
import. Nothing else referenced either. The live map is `GoogleMap.tsx`, a plain Google Maps iframe,
and is unaffected.

**19 `<img>` elements given explicit `width`/`height`.** Intrinsic dimensions read from the WebP
headers, so the browser reserves the correct aspect ratio before load. Covers
`InteriorPainting` (8), `RealEstatePainting` (4), `CommercialPainting` (3), `BodyCorporatePainting`
(2), `RoofPainting` (2). Sized elements went 26 → 45 of 46.

Correction to the figure reported earlier: the count was "22 of 48 unsized". The real number was
**20 of 46** — the first pass counted type declarations in `Services.tsx` as `<img>` tags. The one
remaining unsized element is the `Gallery.tsx` lightbox, which has a dynamic `src` and sits in a
fixed overlay, so it cannot shift page layout. Correctly left alone.

**35 legacy JPEG/PNG files left in place, deliberately.** 33 are unreferenced and total ~7.1MB, but
Vite only emits imported assets, so **they add nothing to page weight** — the cost is repo size
only. Checked whether they were higher-resolution masters worth keeping: every one has a WebP pair
at *identical* dimensions, none larger. They are same-size duplicates from a one-time conversion,
not originals. Deleting them is safe and reversible from git history, but the gain is cosmetic and
they are the owner's photographs, so this is his call rather than a silent cleanup.

**Verification:** `pnpm check` / `pnpm build` still cannot run here (`registry.npmjs.org` → 403, no
`node_modules`). All four `.tsx` files parse cleanly under Prettier's TypeScript parser; the
generator, sitemap and known-paths scripts ran; 117 pages checked for broken internal links, zero
found; every new route has a `<Route>` in `App.tsx` and an entry in `worker/known-paths.js`.

**Not legal advice.** These are plain-English pages built from what the site demonstrably does. If
certainty matters, a lawyer should read them.

### Addendum 2 — the vendor-react change is confirmed inert, and an earlier figure was wrong

The PR #207 build gave a decisive measurement. That build definitely re-ran (a component was deleted
and 19 image tags changed; the entry chunk hash moved `index-DFlkDqsI` → `index-DKoErESO`), and it
contains the revert. Yet:

```
vendor-react-6BqCyl38.js    3634 bytes   identical hash, identical size
vendor-animation-D3Hbm0mm.js             identical hash
```

Byte-identical across a build that definitely re-ran. **Adding `react/jsx-runtime` to the
`manualChunks` list changed nothing, and removing it changed nothing.** The list entry has no effect
on Rollup's output whatsoever.

**Correcting an earlier claim in this log and to Jimmy:** the failure was reported as "118 of 140
chunks still import vendor-animation, down from 123", which implied the change moved the count. It
did not. The 123/146 figure came from a measurement recorded before this session; the 118/140 came
from fetching and counting live chunks. Two different methods, so it was never a sound before/after
comparison, and the change never moved anything.

Clean current numbers, measured against the deployed 34e25ec build: **120 of 142 chunks import the
127.7KB `vendor-animation`; 117 import the 3.5KB `vendor-react` stub, which itself imports React
from `vendor-animation`.**

The diagnosis is unchanged and now firmer: React core lives inside the framer-motion chunk, the
object form of `manualChunks` cannot move it, and the function form is the only fix. 128KB on every
page remains the largest single speed win available and the largest open item.

---

## 2026-08-24 — Indexing audit and the chunking fix

### Indexing: nothing broken

Crawled all 115 sitemap URLs on the live site.

| Check | Result |
| --- | --- |
| Non-200 status | **0** |
| `noindex` while in the sitemap | **0** |
| Missing canonical | **0** |
| Canonical ≠ sitemap URL | **0** |
| Missing title / description / H1 | **0** |
| Missing JSON-LD | **0** |
| Duplicate titles / descriptions / canonicals | **0** |

Redirects verified: `/painters-<suburb>` → singular, 1 hop. Non-slash → slash, 1 hop. `http://` → `https://` → slash, 2 hops (Cloudflare upgrades, the worker canonicalises) — normal and all landing 200. `robots.txt` correct, sitemap referenced, `/api/` disallowed.

Compression and caching are right: brotli everywhere, hashed assets `max-age=31536000, immutable`, HTML `max-age=0, must-revalidate` with Cloudflare cache HITs.

**GSC still shows old URL variants earning impressions** — `/painter-mornington-peninsula` without the slash (136), `/blog/kitchen-cabinet-resurfacing-vs-replacement` without the slash (47), `http://jetblackpainting.com/painter-greater-dandenong` (13, 1 click). These are all correctly 301'd now; they are historical index entries that will fade. Nothing to fix.

`/services/pre-sale-property-painting/` earns 6 impressions and **2 clicks** at position 27 and 301s to `/services/real-estate-painting/`. Working as intended.

**14 sitemap URLs had zero impressions in 90 days.** The only surprising one was `/services/interior-painting/`, which has 111 inbound internal links. Checked it directly: HTTP 200, indexable, correct canonical, 1,403 words — *more* than `/services/exterior-painting/`, which does get impressions. No defect. It is losing a very competitive term, which is the standing authority problem, not an indexing one.

**Bing could not be checked.** `www.bing.com` and `www.google.com` are both refused by this session's egress policy (403 on CONNECT), so no `site:` queries and no Bing Webmaster Tools. `api.indexnow.org` is still blocked too. Bing indexing remains unverified from here.

### Speed: CLS is fixed, and the chunking is the real problem

Measured in headless Chromium at a 390×844 mobile viewport, against a local mirror of the deployed build (Chromium cannot reach the live site through this session's proxy, so LCP/TTFB from that run are not real-world figures — but layout shift, main-thread time and payload composition are).

**CLS 0.000, down from 0.084.** Zero long tasks. The `width`/`height` work on 19 images plus the earlier reveal-animation fix removed layout shift entirely.

Real network timings from the crawl itself are healthy — a service page returns in ~0.43s.

**The payload is the problem.** A suburb page ships ~162KB of brotli-compressed JS, and **43KB of it is framer-motion**:

```
 93198 B  index-DKoErESO.js
 43073 B  vendor-animation-D3Hbm0mm.js   <- framer-motion, ~27% of the page's JS
 10327 B  SuburbPageTemplate-BQhGqPsj.js
  8498 B  vendor-utils
  5582 B  SEOHead
  3966 B  CollingwoodPainters
  1349 B  vendor-react                   <- a stub, imports React from vendor-animation
```

framer-motion is imported by **exactly 11 source files, all of them service/blog/FAQ pages**. `SuburbPageTemplate` does not import it. `Home` does not import it. Every one of the ~100 suburb pages downloads it anyway, because React core is inside that chunk.

### Why the object form failed, and what replaced it

`"vendor-react": ["react", "react-dom"]` looks like it should work. It does not, because the object form assigns only the **exact module ids listed**. `"react"` resolves to `react/index.js`, but React's implementation lives in `react/cjs/react.production.js` — a *dependency* of the listed id, not the id itself. Unlisted dependencies fall to Rollup's default assignment and land in whichever chunk reaches them first: framer-motion's.

That is also why adding `react/jsx-runtime` to the list was completely inert — it was the wrong lever.

Replaced with the **function form**, which is called for every module id including the cjs implementation files, so a path match catches them. React is matched first, before framer-motion, the form libraries or Radix can claim it.

**Verified without a build** (this repo still cannot run `pnpm build` — registry 403, no `node_modules`):
- `vite.config.ts` parses cleanly under Prettier's TypeScript parser; brace balance checked
- The function was **extracted from the real file and executed** against 25 realistic module ids — every case correct
- Critically, the traps pass: `react-hook-form`, `react-day-picker`, `react-resizable-panels`, `@radix-ui/react-dialog` and `lucide-react` are **not** captured by the React rule, and app source is never chunked
- pnpm's `.pnpm/<pkg>@<ver>/node_modules/<pkg>/` nesting is handled alongside npm's flat layout

**This is the second attempt at this target.** The first was inert. The failure mode here is a failed Cloudflare build, which stops future deploys but leaves the current site up — recoverable. Success looks like: `vendor-react` contains React core rather than a stub, `vendor-animation` is imported by ~11 chunks rather than 120, and a suburb page drops ~43KB of compressed JS. **If the deployed build does not show that, revert.**

### Verified against the deployed build — the chunking fix worked

Measured on the deploy of the function-form change.

**`vendor-react` now holds React:**

```
                    before          after
raw                 3,634 B        190,563 B
brotli              1,349 B         59,811 B
React core             no              yes
react-dom              no              yes
scheduler              no              yes
imports vendor-animation  YES            no
```

**`vendor-animation` importers: 120 of 142 → 11 of 142.** The eleven are exactly the eleven source
files that import framer-motion — Blog, BodyCorporatePainting, CommercialPainting, EpoxyFlooring,
ExteriorPainting, FAQ, InteriorPainting, KitchenCabinetResurfacing, RealEstatePainting,
RoofFencePainting, RoofPainting. Nothing else pulls it any more. The homepage no longer references
it at all.

**Per suburb page** (identical browser method both sides, brotli computed locally at quality 11 so
the two are directly comparable):

| | before | after |
| --- | --- | --- |
| JS files | 14 | 13 |
| raw | 524 KB | **404 KB** |
| brotli | 140 KB | **106 KB** |

**34KB less compressed JavaScript on every suburb page — 24% of the payload — and 120KB less to
parse.**

#### A metric that looked like a regression, and wasn't

The first single-run measurement showed suburb LCP going 88ms → 528ms and a new 84ms long task,
which would have been a serious regression. It was measurement noise. Three repeated runs against
each build, same method:

```
OLD build: LCP 508, 488, 488 ms   long tasks 0, 0, 0
NEW build: LCP 472, 452, 448 ms   long tasks 0, 0, 0
```

Same LCP element (`P.text-xl`) in both. The new build is slightly *faster*, and neither build has
long tasks. **The earlier "before LCP 88ms" figure was the unreliable one** — a single run where the
observer had not settled. Single-run LCP off a zero-latency local mirror should not be trusted; only
the repeated comparison is meaningful.

CLS is 0.000 on both homepage and suburb pages.

#### Correcting one more figure

An intermediate calculation claimed a "126 KB compressed saving" from scraping `/assets/*.js` out of
the suburb page's HTML. That was wrong: the static HTML names only the entry script, and the other
twelve chunks load at runtime from the module map. It compared an HTML scrape against a browser
measurement. The real figure is **34KB brotli**, measured the same way on both sides.

---

## 2026-08-24 (evening) — Daily audit: one real defect, found and fixed

**Defect: 118 markdown twins were stale.** Today's earlier work regenerated the static HTML but never ran
`generate-markdown.mjs`. The twins served to AI assistants via Accept negotiation were missing:

- the two service links added to 97 suburb pages (`/services/body-corporate-painting/`, `/services/epoxy-flooring/`)
- the legal footer links added to 115 pages (`/privacy/`, `/terms/`)

So for roughly nine hours, Claude, ChatGPT and Perplexity reading jetblackpainting.com got a version of
every suburb page that did not mention body corporate or epoxy flooring at all. Regenerated; the twins
now match their HTML (verified by comparing extracted service-link sets on two routes). Two new twins
created for `/privacy/` and `/terms/`.

This is exactly what the Step 2.1 three-layer check exists to catch, and it caught it.

### Everything else checked and clean

| Check | Result | Baseline |
| --- | --- | --- |
| Pages | **117** | was 114 (privacy, terms, epoxy added since) |
| FAQ questions | **485** | was 477 |
| Schema vs visible text | 0 problems | 0 |
| JSON-LD parse errors | 0 | 0 |
| BlogPosting/HowTo missing fields | 0 | 0 |
| aggregateRating in static pages | **0** | 0 — still lives only in client/index.html |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 | 0 |
| Missing descriptions · over 158 chars | 0 · 0 | 0 · 0 |
| Titles over 60 | 1 (`/painter-hastings/` 64) | 1, accepted |
| Keywords tags | 0 | 0 |
| Near-duplicate avg worst-twin | **25.7%** | 25.6% (gate 45%) |
| Near-duplicate worst single | **46.1%** chelsea-heights/dingley-village | 46.4% (gate 55%) |
| Pages over 55% | 0 | 0 |
| Lockfile vs package.json | **77/77** | 77/77 |
| Negative URLs 404 (extensionless, .zip, /assets/) | all 404 | — |
| Real hashed bundles still 200 + correct MIME | js `text/javascript`, css `text/css` | — |
| Redirects | all 301, none 307 | — |
| Markdown negotiation | `text/markdown`, `Vary: Accept`, `X-Robots-Tag: noindex` | — |
| llms.txt prices | none — all three `$` matches are the $10M public liability | clean |
| TTFB | 0.20–0.22s, cf-cache HIT | 0.15–0.40s |

**Adding identical footer text to all 117 pages did not move the near-duplicate figure** (25.6% → 25.7%).

### A false negative in my own check, worth recording

The first pass reported **0 FAQ questions** against a baseline of 477. The site was fine; my regex was
`<script type="application/ld+json">` and the real tag is
`<script type="application/ld+json" data-static-schema>`. Fixed, re-run, 485 found. Precisely the
false-FAILURE class the brief warns about — a check that reports a catastrophe should be suspected before
the site is.

### Where the brief is stale (the log wins, per the brief's own rule)

- **Review count is 17, not 15.** Updated 2026-08-23, verified today in all sources.
- **Page count 117, FAQ questions 485** — not 114/477.
- **Epoxy flooring is real and shipped.** The brief still says "do not add until Jimmy confirms".
- **The readability rewrite was authorised and done** for the tracked eleven (PR #202).
- **Yellow Pages Tier 0 is done** (Jimmy called, logged 2026-08-23). TrueLocal's two listings remain.
- **PageSpeed's "unused JS 144 KiB" is fixed.** See today's chunking work: suburb pages dropped 120KB
  raw / 34KB brotli, `vendor-animation` importers 120 → 11. CLS 0.000, down from 0.084.

### Step 1 could not run — all three data sources are gone

**Supermetrics, Semrush and Ahrefs MCP servers are all disconnected this session.** The Supermetrics
trial was due to expire today and the connector is no longer present, so **no GSC data could be pulled
and no position deltas measured against the tracked eleven.** Reporting that plainly rather than
dropping the metric. Ranking measurement now needs the Search Console UI directly.

**Bing also remains unverifiable** — `bing.com` and `google.com` are both refused by this session's
egress policy (403 on CONNECT).

### Authority work: nothing actioned

No new evidence available without ranking data. TrueLocal's two dead listings remain the cheapest
outstanding Tier 0 win. Not something this session can do — those sites block automated access.

---

## 2026-08-24 (late) — Removed invented price commitments

**Trigger:** Jimmy searched `interior house painting rates per m2 in melbourne`, saw colourway.com.au at the
top, and asked for a comparison.

**colourway.com.au could not be fetched** — refused by this session's egress policy (403 on CONNECT) via
both `curl` and `WebFetch`, and not routed around. Everything known about them comes from the screenshot.

**Their placement is a Google Ad, not an organic result.** Labelled *Sponsored Result*. Hook: "Calculate
Painting Cost Online — 60-Second Instant Estimate", sitelink "Transparent Fixed Pricing". That is what they
are buying, not how they rank.

### The real finding: the site was publishing prices that were never Jimmy's

Checking the equivalent Jetblack page turned up specific painting prices in **seven places**, some inside
`FAQPage` JSON-LD — the content Google lifts into rich results and AI Overviews. They trace to an early bulk
commit (`bbbf1ae`, "add 4 SEO blog posts"), and the per-suburb figures varied in ways with no plausible
source: Chelsea $3,500–9,000 against Cheltenham $3,500–8,500.

Jimmy's decision: **take down the risky specifics, keep broad ranges with clear caveats.**

**Removed** (firm commitments a customer could hold him to):

| Removed | Was |
| --- | --- |
| Roof painting starting price | `roof painting from $3,500` |
| Interior per-m² rate card | $20–35 / $25–45 / $35–55 per m², plus a "Typical Room Cost" column |
| Scaffolding surcharge (body **and** FAQ answer) | `scaffolding ($500-$2,000 extra)` / "typically add $500 to $2,000" |
| Cherry-picked saving claim | "a saving of up to 85%" — arithmetic on the two extremes ($3,500 vs $60,000 = 94%; $8,000 vs $15,000 = 47%) |

**Kept, each now caveated:** whole-house interior $5,000–12,000 (3-bed) and $8,000–18,000 (4-bed); exterior
by house size $4,000–8,000 / $8,000–15,000 / $15,000–30,000+; kitchen cabinet resurfacing $3,500–8,000.

Standard caveat now sits beside the figures: *"These are indicative Melbourne ranges to help you budget.
Every quote is priced after a site visit — condition, access and scope move the number more than floor area
does."*

The per-m² table was replaced with prose explaining **why** a per-m² rate quoted sight-unseen is misleading
and what actually drives interior cost. That answers the "rates per m²" intent more honestly than a
fabricated number, and the page grew 874 → 947 words in the process.

### Two consistency defects fixed in the same pass

1. **The site contradicted itself on kitchen renovation cost** — $25,000–60,000+ on the blog, $15,000–30,000+
   on the service page, and "$30,000+" in the blog's opening line. All aligned to a single stated range, and
   the figure now appears **only** on the cost-comparison blog post. The service page is qualitative, matching
   its static twin, which already said "a fraction of renovation cost" with no number.
2. **Five suburb pages carried five different invented ranges.** Replaced with one consistent Melbourne-wide
   statement drawn from the cost guide's retained figures, keeping each page's local colour (Chelsea's
   weatherboard beach houses, Beaumaris's coastal exposure) and its CTA.

### Verification

| Check | Result |
| --- | --- |
| Removed strings across HTML, markdown and source | `from $3,500`, `per m²`, `$500-$2,000`, `up to 85%` — **0 in all three layers** |
| Pages · FAQ questions | 117 · 485 |
| Schema vs visible text | **0 problems** — every edited FAQ answer still matches its rendered copy |
| JSON-LD parse errors · missing fields · aggregateRating in static | 0 · 0 · 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 |
| Near-duplicate avg · worst | **25.7% · 46.1%** — unchanged despite five pages sharing price wording (gates 45% / 55%) |
| All three generators re-run | static, **markdown**, known-paths |

`QuoteForm.tsx:381` left alone — `"e.g., $5,000 - $10,000"` is a placeholder asking the customer for *their*
budget, not a Jetblack price.

### Recommendation given, and taken: do the price work and stop

The cost queries carry almost no volume — `house painting cost toorak` 10 impressions at 93.6,
`cost to repaint exterior house` 2 at 37, `how much to paint 3 bedroom house` 2 at 95.5. The cost page
already answered the query well and sits at ~85 organically. That is the authority ceiling (44 links / 31
domains / authority 2), not a content gap. An instant-estimate calculator was declined: it needs real pricing
logic, and this session established the existing numbers were not Jimmy's.

---

## 2026-08-25 — Conversion tracking, so ad spend becomes measurable

Jimmy wants to run Google Ads the way colourway.com.au does. The blocker was not the ad account.

**The site measured nothing.** GA4 (`G-6NC2597W9L`) was installed in `client/index.html`, but a grep across
`client/src` found **zero** references to `gtag` or `dataLayer`. Nothing fired on quote-form submit, and none
of the phone links were tracked — 31 hardcoded `href="tel:0432077782"` anchors plus template-literal ones
from `siteConfig.phoneHref`, and one `mailto:`. Ads into that means paying for clicks with no idea which
became jobs, and Google's automated bidding has no conversion signal to optimise against.

### What was built

**`client/src/lib/analytics.ts`** — a single `trackEvent(name, params)`. It exists rather than calling
`window.gtag` directly because `index.html` loads gtag lazily inside `requestIdleCallback`, so **both**
`window.gtag` and `window.dataLayer` are undefined for the first moments of a visit. A visitor tapping the
sticky call bar immediately would otherwise be lost — and for a painter the phone tap is the conversion that
matters most. The fallback queues onto `dataLayer` in gtag's own array shape so it replays on init.

**`client/src/main.tsx`** — one delegated, capture-phase click listener for `a[href^="tel:"]` and
`a[href^="mailto:"]`, instead of an `onClick` on each of 21 components. Every phone action on the site is a
real anchor (verified — no `window.location = "tel:"` handlers), so one listener covers all of them and any
added later. It never calls `preventDefault`; the call has to connect.

**`client/src/components/QuoteForm.tsx`** — fires on the `confirmed` flag the submit handler already computes:

| Outcome | Event | Reasoning |
| --- | --- | --- |
| delivery confirmed | `generate_lead` | The enquiry actually reached Jimmy. **This is the only event to import into Ads.** |
| delivery failed | `quote_form_undelivered` | Visitor was dropped onto call/text/email fallbacks. Counting it as a lead would overstate conversions; tracked separately it also surfaces the delivery failure rate. |

**No PII.** The form collects name, email, phone and project description; the event sends only `suburb`,
`service_type` and `source_page`. Sending personal data to GA4 breaches Google's policy and can get a
property terminated — and suburb-plus-service is what ad targeting actually needs anyway.

### Verified in headless Chromium, both code paths

| Test | Result |
| --- | --- |
| gtag **absent** (lazy-load window) | queued to `dataLayer`: `["event","phone_call_click",{method:"phone",source_page:"/",link_text:"Call Jimmy — 0432 077 782"}]` |
| gtag **present** (normal case) | 1 `gtag()` call, **0** dataLayer fallback entries — correct path taken |
| click on a nested `<span>` inside the anchor | caught via `closest()` |
| click on a non-contact link | **no event** — exactly 2 entries from 3 clicks |
| `preventDefault` | not called; `href="tel:0432077782"` intact and the browser did navigate |
| PII in payload | none — name, email, phone, description all absent |
| generated layers | **zero diffs** — React-only change, as expected |

### ⚠️ Not verified, and Jimmy must check before spending

**I cannot confirm GA4 actually receives these events.** `google.com` and `googletagmanager.com` are both
refused by this session's egress policy (403 on CONNECT). What is proven is that the calls reach `gtag`/
`dataLayer` with the right shape and payload. **Confirm in GA4 → Admin → DebugView or Reports → Realtime
before putting money into ads.**

Then in GA4, mark `generate_lead` and `phone_call_click` as conversions and import them into Google Ads.
That is dashboard work — no account access from here.

**Known undercount:** a phone tap landing before React hydrates is not counted. The static layer ships two
`tel:` anchors per page for crawlers and those are live immediately. Hydration is quick and the sticky call
bar is React-rendered, so the gap should be small — but phone conversions will read slightly low.

### Also this session

colourway.com.au could **not** be fetched, on three attempts across two tools — the proxy logged 403 CONNECT
denials at 09:14 and 09:30. Their placement in Jimmy's screenshot is a **Sponsored Result**, i.e. a Google
Ad, not an organic ranking. No conclusions were drawn about their site beyond what the screenshot shows.

---

## 2026-08-25 — Homepage, Mordialloc, and the two under-built affluent pages

Jimmy asked for the homepage, Mordialloc, and the high-income suburbs. Flagged at the time: he moved
Toorak/Kew/Camberwell/Hawthorn/Malvern to off-page channels on 2026-08-17 because they sit at positions
79–95 and are organically unreachable, so content there is the least likely part of this to move anything.
Proceeded on his instruction, doing the pages that actually earn clicks first.

### An eighth invented price — missed yesterday

The homepage FAQ carried **"Interior painting typically starts from $1,500 for a standard room. Full
exterior painting for an average home ranges from $4,000–$10,000."** In the visible copy *and* in the
homepage `FAQPage` JSON-LD.

Yesterday's sweep sampled `public/**/index.html`. **The homepage is served from `client/index.html`, which
is not under `public/`** — so it was never scanned. The claim also contradicted the cost page, which had
just had its per-room rates removed.

Replaced in both places with an answer consistent with the corrected cost guide: whole-house interior
$5,000–12,000 for a 3-bedroom home, exterior $4,000–8,000 single-storey / $8,000–15,000 double-storey,
priced after a site visit. Every dollar figure on the homepage now matches a range that survived
yesterday's cull.

### Homepage: 584 → 892 crawler-visible words

The static homepage — what non-rendering crawlers read — ran **584 words against 1,300–1,500 on the suburb
pages**, and said almost nothing about where the business operates from. The React homepage has thirteen
sections; the thin layer was the crawlable one.

Added a **"Based in Mordialloc"** section covering the service-area model, why proximity matters on a repaint
(site visits, weather-driven scheduling, returning under the guarantee), and what thirteen years on this side
of Melbourne means for reading a property — bayside salt exposure, weatherboard needing bare-timber priming,
period trim through Glen Eira and Stonnington. This is missing information rather than padding: local
proximity is the signal that feeds Maps prominence, and **Maps is where this business's calls actually come
from** (5 phone calls from 328 GBP views in 88 days, against zero clicks on every non-brand organic query).

### Mordialloc: nothing added, deliberately

The page already opens *"Mordialloc is our home. Jetblack Painting is based here in the 3195"* and runs
1,368 words across coastal weather, the fishing-village housing stock around the pier and creek, the boat
and bowls clubs, and Main Street commercial. It was in the readability rewrite (PR #202). It sits at
position 19.05 with 2 clicks — one of the few pages earning any.

It also has **26 inbound internal links, the most of any page on the site**, and the worst position of the
tracked eleven. Adding words to it would be padding. Nothing changed.

### Kew and Malvern: a real structural gap, now closed

Not "these pages are short" — they were **built to a lesser template than their siblings**:

| | Words | FAQs | Custom sections |
| --- | --- | --- | --- |
| Kew *(before)* | 943 | **3** | **2** |
| Malvern *(before)* | 952 | **3** | **2** |
| Toorak / Hawthorn / Brighton / Mordialloc | 1,297–1,487 | 5–6 | 4 |
| Kew *(after)* | **1,457** | **5** | **4** |
| Malvern *(after)* | **1,407** | **5** | **4** |

Both pages were also generic — "prestige", "elevated expectations" — where the strong pages are concrete
about the work. The new sections follow the strong pages:

- **Kew** — access on double-storey homes on the slope toward Studley Park and the Yarra, where a house is
  two storeys from the footpath and three off the ground at the rear; and what sits under the old paint on a
  period home, including lead-based paint in pre-1970 stock (identify, contain, wet methods, no dry sanding
  or heat guns, and say so plainly when removal is specialist work rather than pressing on).
- **Malvern** — the surfaces these houses actually have (roughcast render holding dirt and drinking paint,
  timber fretwork needing to come back to a sound edge, bungalow eaves sheltering one elevation while
  another is fully exposed); and painting a home that is still occupied — staging, containment, protecting
  leadlight and fixed joinery.

Also fixed on Kew, both pre-existing: **US spelling** (`specialize`/`Specializing` → `specialise`/
`Specialising`) against the site's Australian English, and a sentence starting lowercase mid-answer.

### Gates

| Check | Result |
| --- | --- |
| Pages · FAQ questions | 117 · **489** (was 485) |
| Schema vs visible text | **0 problems** |
| JSON-LD parse errors · missing fields · aggregateRating in static | 0 · 0 · 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 |
| Descriptions over 158 | 0 |
| Near-duplicate avg · worst | **25.6% · 46.1%** — unchanged, still under 45%/55% |
| All three generators re-run | static, markdown, known-paths |

### Access — asked how to unblock the sandbox

The network policy is set per-environment in Claude Code on the web
(https://code.claude.com/docs/en/claude-code-on-the-web). Highest value first:
**`registry.npmjs.org`** — it is the reason `pnpm install` fails, which is why every change this week has
shipped without a typecheck or a local build and "Cloudflare is the real gate" keeps appearing in these
notes. Then `google.com` + `googletagmanager.com` (verify the GA4 events, check rankings), `bing.com`,
`api.indexnow.org`, and competitor domains.

---

## 2026-08-25 (evening) — Daily audit: everything clean, no change made

A run that investigates, finds nothing worth changing, and says so. Nothing was committed beyond this entry.

### Steps 0–6: all clean

| Check | Result | Baseline |
| --- | --- | --- |
| Three layers regenerate to zero diffs | **ZERO** | — |
| Lockfile vs package.json | **77/77** | 77/77 |
| Production serves current main | yes — Mordialloc section live, `$1,500` gone, Kew at 5 FAQ entities | — |
| Pages · FAQ questions | **117 · 489** | was 114 · 477 |
| Schema vs visible text | **0 problems** | 0 |
| JSON-LD parse errors · missing fields · aggregateRating in static | 0 · 0 · 0 | 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 | 0 |
| Missing descriptions · over 158 chars | 0 · 0 | 0 · 0 |
| Titles over 60 | 1 (`/painter-hastings/` 64) | 1, accepted |
| Near-duplicate avg · worst | **25.6% · 46.1%** | 25.6% · 46.4% (gates 45% / 55%) |
| Negative URLs 404 (extensionless, `.zip`, `/assets/`) | all 404 | — |
| Real bundles 200 + correct MIME | `text/javascript`, `text/css` | — |
| Redirects | all 301 | — |
| Markdown negotiation | `text/markdown`, `Vary: Accept`, `X-Robots-Tag: noindex` | — |
| llms.txt prices | none — all `$` matches read, all are the $10M public liability | clean |
| Review count across all nine locations | **17 everywhere**, no drift | — |
| TTFB | 0.23–0.41s, cf-cache HIT | 0.15–0.40s |

### Step 1 could not run — all three ranking sources are gone

- **Supermetrics**: the connector is no longer present. The trial expired 2026-08-24 as the brief predicted.
- **Semrush**: one probe, "not enough API units" (options: https://www.semrush.com/mcp-access).
- **Ahrefs**: not connected this session; previously "Insufficient plan".

**No position deltas against the tracked eleven were measured, and no backlink figure was refreshed.**
Recording that rather than dropping the metric. Ranking measurement now requires the Search Console UI
directly. **Google and Bing both remain egress-blocked** (403 on CONNECT), so no `site:` checks either.

### Step 7 authority: option 4 — nothing

With no ranking data and every site check clean, there is no evidence-backed change available. TrueLocal's
two listings still pointing at the dead Manus site remain the cheapest outstanding Tier 0 win, and that site
blocks automated access from here. Not actioned.

### The brief is now stale in eight places

Per its own rule that this log wins:

| Brief says | Reality |
| --- | --- |
| 5.0 from **15** Google reviews | **17**, verified in all nine locations today |
| **114** pages, **477** FAQ questions | **117** · **489** |
| Mordialloc 1,154w @ 29.18 | **1,368w**, and 19.05 in the last GSC pull (2026-08-24) |
| Epoxy flooring — "do not add until Jimmy confirms" | shipped, `/services/epoxy-flooring/` live |
| Readability rewrite — "do not start without go-ahead" | authorised and done (#202) |
| Yellow Pages Tier 0 outstanding | done — Jimmy called 2026-08-23 |
| PageSpeed "unused JS 144 KiB, most tractable" | **fixed** — suburb pages dropped 120KB raw / 34KB brotli; `vendor-animation` importers 120 → 11 |
| "3 long main-thread tasks", CLS | **0 long tasks, CLS 0.000** (was 0.084) |

Also worth adding to the brief's locked facts: **the site publishes indicative price ranges** on the cost
guide, five suburb pages and the homepage, each carrying a site-visit caveat. Eight invented figures were
removed 2026-08-24/25. Any future run must not reintroduce a rate card, a starting price, or a per-m² figure.

### Also shipped earlier today (already logged above, listed here for the run record)

Conversion tracking (#212) — `generate_lead`, `quote_form_undelivered`, `phone_call_click`, `email_click`,
no PII. **Unverified against GA4 itself**: googletagmanager.com is egress-blocked, so Jimmy must confirm in
DebugView before any ad spend. An eighth invented price removed from the homepage, which yesterday's sweep
missed because the homepage serves from `client/index.html`, outside `public/`. Homepage 584 → 892
crawler-visible words. Kew and Malvern brought from 3 FAQs / 2 sections to 5 / 4, matching their siblings.

---

## 2026-08-26 — AEO Pillar 3: tables in the crawlable layer, and pronoun elimination

Jimmy supplied an AEO audit playbook (four pillars). Pillars 1 and 2 were already satisfied — see the
2026-08-24 entry: all AI crawlers allowed, TTFB 0.23–0.41s, pre-rendered static HTML, markdown twins via
Accept negotiation, and a JSON-LD graph of 225 WebPage / 117 BreadcrumbList / 113 FAQPage / 105 Service /
96 LocalBusiness / 7 BlogPosting / 3 HowTo with a seven-profile `sameAs`.

**Pillar 3 was where the document earned its keep.** Two measured gaps, both now closed.

### Gap 1 — no tables reached crawlers or AI agents

`/blog/house-painting-cost-melbourne/` and `/blog/kitchen-cabinet-resurfacing-vs-replacement/` each carried
a `<table>` in their React source, but the static generator had **no table section type** — it flattened the
same figures into a paragraph. Crawlers, and every AI agent reading the markdown twins, saw prose:

> "A small single-storey home under 150m² typically costs $4,000 to $8,000 for walls, fascia and gutters…"

That was both an AEO gap (retrieval engines extract tables well and prose poorly) and a **React/static parity
violation**, which the repo's own rules forbid.

Added a `table` section type to `pageHtml` in `generate-static-pages.mjs` — real `<thead>`/`<tbody>` markup
plus CSS — and a `tableToMd` converter in `generate-markdown.mjs` emitting GitHub-flavoured tables, with
`table` added to the block walk. Cell pipes are escaped so a cell cannot break the row. The section type also
accepts trailing `paragraphs`, so the caveat and service prose still follow the table.

Both posts converted to real tables, matching their React source exactly. Markdown twins now carry 5 and 4
table rows respectively where they previously carried none.

**Drift caught in passing:** the generator's kitchen-post intro still read "a $30,000+ kitchen renovation"
— the React copy was corrected on 2026-08-25 but the generator's was missed. Now consistent.

### Gap 2 — 23 FAQ answers opened with an unresolvable pronoun

Retrieved as a standalone chunk, *"It depends on the timber and how much upkeep you want"* has lost its
subject entirely. Same for *"It can be. Homes built before 1970…"* and *"That is almost always mould and
lichen…"*. Every one now opens with the subject:

| Was | Now |
| --- | --- |
| "It depends on the timber…" | "Whether to paint, stain or oil depends on the timber…" |
| "It can be. Homes built before 1970…" | "Lead paint can be a concern on older ${suburb} homes. Homes built before 1970…" |
| "That is almost always mould and lichen…" | "Green or black growth on a shaded wall is almost always mould and lichen…" |
| "It will hide fine surface cracking…" | "The coating will hide fine surface cracking…" |

Only the leading clause changed, so answer length and the rest of the copy are untouched.

**"We" openings were deliberately left alone.** An initial scan flagged 58 answers, but "We paint all common
property…" resolves perfectly well in an isolated chunk — "we" is the business, recoverable from context.
Rewriting 35 of those would have been churn. The genuinely broken ones were **It / They / That / This**, where
the subject is the thing being asked about.

Five of the 23 live in both layers (service and blog FAQs exist in the `.tsx` **and** in the generator's
arrays); both copies were edited.

**Result: 0 of 489 answers now open with an ambiguous pronoun.**

### Deliberately not done

- **Answer length forced to 40–60 words.** 45% already sit in the band and the median is 49 — well-centred.
  Padding 137 short answers and trimming 129 long ones to hit a heuristic is word-count work in two layers,
  which the standing brief forbids.
- **Wikidata / Wikipedia / Crunchbase in `sameAs`** (Pillar 2). Both Wikidata and Wikipedia have notability
  bars a local painting business will not clear, and Crunchbase is for funded startups. Thin entries created
  to game entity linking are worse than none.
- **Pillar 4 off-page.** G2 and Capterra are software review sites — the playbook is written for SaaS. Reddit
  and Quora only count with genuine participation; manufacturing posts is astroturfing. YouTube transcripts
  are a real opportunity (@jetblackpaint exists) but need video, not code. "Co-occurrence" is the standing
  authority problem restated.

**Score against the document's own tiers: Green (70–89%) — AI-Ready.** Sapphire requires Wikidata mapping
and multi-engine citation dominance, neither appropriate here.

### Gates

| Check | Result |
| --- | --- |
| Pages · FAQ questions | 117 · 489 |
| Ambiguous pronoun openings | **0** (was 23 in source) |
| Schema vs visible text | **0 problems** |
| JSON-LD errors · missing fields · aggregateRating in static | 0 · 0 · 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 |
| Descriptions over 158 | 0 |
| Near-duplicate avg · worst | **25.5% · 45.8%** — both improved (gates 45% / 55%) |
| Parse | 17 `.tsx` files + both generators clean |

---

## 2026-08-26 (evening) — full audit, all clean, no site change made

Steps 0–6 all passed. Step 7 taken as **entity consistency**, which was verified rather than
changed. No code change this run. Four places where the **standing brief is now stale** are
recorded below — the log wins, so future runs should trust this entry over the brief.

### Step 0 — build health

| Check | Result |
| --- | --- |
| package.json deps present in pnpm-lock.yaml | **77 / 77** |
| Production serving current main | yes — `70b09ce`, confirmed by a string unique to that lineage |
| TTFB · edge cache | 0.18–0.45 s · `cf-cache-status: HIT` |

Build health was confirmed from deployment evidence rather than the check-run API: the live
site serves `glass-smooth` on `/services/interior-painting/`, a string that exists only from
`70b09ce` onward, which proves Cloudflare built and deployed that commit.

### Steps 2–6 — regressions, metadata, AEO, speed, indexing

| Check | Result | Baseline |
| --- | --- | --- |
| Three layers regenerated → git diff | **0 files** | 0 |
| Schema vs visible text | 117 pages · 489 questions · **0 problems** | 0 |
| Near-duplicate (nav included) | 25.5% avg · worst 47.0% cranbourne/narre-warren · 0 over 55% | gate 45% / 55% |
| JSON-LD parse errors · missing fields · aggregateRating in static | 0 · 0 · **0** | 0 · 0 · 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 | 0 |
| Missing descriptions · over 158 chars | 0 · 0 | 0 · 0 |
| Titles over 60 | 1 — `/painter-hastings/` (64), accepted | 1 |
| `keywords` meta tags | 0 | 0 |
| Sitemap | **115 / 115** all 200, **zero** redirect hops | see note |
| Bad URLs 404 (extensionless, `/nope.zip`, `/assets/*`) | all 404 | 404 |
| Real hashed bundles still served | `.js` 200 `text/javascript` · `.css` 200 `text/css` | 200 |
| Redirect status | `/painters-brighton` → 301 → `/painter-brighton/` | 301 |
| Markdown negotiation | `text/markdown` + `Vary: Accept` + `Cache-Control: no-store` + `X-Robots-Tag: noindex`; plain Accept → `text/html` | correct |
| robots.txt | `Disallow: /api/` only; GPTBot/ClaudeBot/PerplexityBot allowed; `Content-Signal: search=yes, ai-train=no, ai-input=yes` | correct |
| llms.txt price figures | **none** — all three `$` matches read and confirmed as the $10 million public liability figure | none |
| og:image / twitter:image | one URL, resolves 200 | 200 |

### Step 7 — entity consistency (verified, nothing changed)

Semrush probed **once** and still returns units-zero, so Backlink Gap remains unavailable.
**Supermetrics was disconnected for this session**, so there is no GSC and no GMB data — the
tracked eleven could not be re-measured and no ranking claim is made in this run.

Review count audited across every place it is hardcoded, plus both deployed layers:

| Location | Value |
| --- | --- |
| `client/index.html` JSON-LD `reviewCount` | 17 |
| `client/index.html` prose | 17 |
| `lib/aggregateRatingSchema.ts` default | 17 |
| `site-config.json` | 17 |
| `pages/FAQ.tsx` | 17 |
| `blog/ChoosingAPainterMelbourne.tsx` | 17 |
| `generate-static-pages.mjs` AGGREGATE_RATING | 17 |
| `generate-static-pages.mjs` duplicate FAQ answer | 17 |
| `llms.txt` and `public/llms.txt` (byte-identical) | 17 |

A regex sweep for any stale count (`1[0-6] … reviews`) across all `index.html` **and**
`index.md` files returned **zero hits**. NAP agrees across HTML, markdown twins and llms.txt:
`0432 077 782` · Mordialloc · 3195 · jimmy@jetblackpainting.com.

### ⚠️ Four ways the standing brief is now stale

1. **LOCKED FACTS says "5.0 from 15 Google reviews". It is 17.** Confirmed two ways: every one
   of the hardcoded places reads 17, and Jimmy sent a screenshot of his own Google knowledge
   panel today showing `5.0 ★ (17)`. **A future run must not "correct" 17 back to 15.**
2. **The nine-places list names `pages/Home.tsx`.** That file no longer carries a review count —
   only comments and `<Reviews />`. The count lives in the eight other places above.
   `ChoosingAPainterMelbourne.tsx:105` contains "a 5.0 rating with 3 reviews" — that is generic
   advice about judging any painter, not a Jetblack claim. Leave it.
3. **Step 5 says the only image over 250KB is og-image.jpg at 281KB.** As of today there are
   **zero** images over 250KB in `public/` — og-image.jpg was replaced (163KB) because the old
   one carried a competitor's watermark.
4. **The sitemap baseline of 114 reads as 115 and is correct.** 117 static pages, minus the
   three noindex pages (`/privacy/`, `/review-us/`, `/terms/`) that are rightly excluded, plus
   `/` which has no `public/*/index.html` of its own. Reconciled exactly; not a defect.

### Checked and clean, no change needed

Build health, lockfile, deployment currency, three-layer regeneration, schema-vs-visible,
near-duplicate, site health in both directions, sitemap, structured data, metadata, markdown
negotiation, robots.txt, llms.txt, entity/NAP consistency, review count, speed, og:image.

**No site change made this run.** Nothing was found that evidence supports changing, and the
brief's own standard is that such a run is a successful one.

---

## 2026-08-27 — GSC Wizard connected; first sweep run

Jimmy connected the GSC Wizard MCP server. This is the first run with real Search Console data
since 2026-08-25 — the 2026-08-26 audit had none, because Supermetrics was disconnected that
session. GSC Wizard is now the primary path; see the Data access section above.

### Anomalies · 28 days to 2026-08-24

| Signal | Date | Detail |
| --- | --- | --- |
| Impressions spike | **2026-08-22** | 645 actual vs 358 expected — **+79.9%**, modified Z 3.52, severity critical |
| Clicks step-down | **2026-08-11** | mean 3/day → **0/day**, **−87.5%**, sustained level shift |

No clicks anomalies; no impressions change points.

### Correlation with confirmed Google updates

One update in the window: **August 2026 spam update**, 2026-08-18 16:27 → 2026-08-21 08:49 UTC,
severity low (Search Status Dashboard, via `list_algo_updates`).

- **The impressions spike aligns.** It landed 2026-08-22, the day after that rollout completed.
- **The clicks drop does not.** 2026-08-11 is a week before the update began. No confirmed Google
  update accounts for it. **Open and unexplained.**

### Movers, 18–24 Aug vs 11–17 Aug — almost entirely noise

`get_ranking_changes` returned improved and declined tables that are near mirror images: the same
Clyde North / Narre Warren / Malvern East long-tail swinging 40–92 places in both directions, nearly
all on **1–8 impressions**. This is the interpretation trap recorded above; it is not movement.

The one mover with enough volume to mean something:

| Query | Impressions | Position | Prior |
| --- | --- | --- | --- |
| painter narre warren | 31 | **18.5** | 58.3 |

### Striking distance

Top opportunities by impression-weighted score, 28 days to 2026-08-24:

| Query | Position | Impressions | Est. extra clicks | Score |
| --- | --- | --- | --- | --- |
| painters sorrento | 13.4 | 116 | 29 | 93 |
| painters collingwood | 16.3 | 144 | 36 | 72 |
| painters elwood | 19.8 | 108 | 27 | 54 |
| house painters caulfield | 18.3 | 87 | 22 | 44 |
| painters murrumbeena | 18.4 | 81 | 20 | 41 |

Every one is a suburb head term with real volume and **zero clicks**. None sit in a 8–12 band.

### Indexing tracker

Created 2026-08-27 14:46 with **77 URLs**: 1 indexed, 76 pending, 0 errors, 0 warnings. No history
on day one, so "changed since yesterday" is only meaningful from 2026-08-28 onward.

### ⚠️ Two open questions raised by this data

1. **The 2026-08-11 clicks cliff.** Sustained, −87.5%, and not explained by any confirmed update.
2. **`jetblack` — position 3.4, 51 impressions, ZERO clicks.** The brand name itself, on page one,
   earning nothing — while `jetblack painting` takes 12 clicks at position 4.0. Same site, same
   page of results, opposite behaviour. Worth re-checking with fresh data before theorising.

### Not done this run — RESOLVED LATER THE SAME DAY

At the time of this entry the routine's brief still named Supermetrics as the primary GSC source;
`update_trigger` had disconnected mid-call twice. **It was updated successfully at 20:12 UTC on
2026-08-27** — see the 2026-08-27 (evening) entry below. Brief and log now agree.

---

## 2026-08-27 (evening) — full audit, all clean, no ranking data, no change made

Steps 0–6 all passed. Step 7 → **option 4: nothing**. No site change.

### Steps 0–6

| Check | Result | Baseline |
| --- | --- | --- |
| Deps in lockfile | 77 / 77 | 77 / 77 |
| Production serving current main | yes — `c86974c` | — |
| Three layers regenerated → git diff | **0 files** | 0 |
| Schema vs visible text | 117 pages · 489 questions · **0 problems** | 117 · 489 · 0 |
| Near-duplicate (nav incl.) | 25.5% avg · worst 47.0% · 0 over 55% | gate 45% / 55% |
| JSON-LD errors · missing fields · aggregateRating in static | 0 · 0 · 0 | 0 · 0 · 0 |
| Duplicate titles / descriptions / canonicals / H1s | 0 / 0 / 0 / 0 | 0 |
| Missing descriptions · over 158 chars | 0 · 0 | 0 · 0 |
| Titles over 60 | 1 — `/painter-hastings/` (64), accepted | 1 |
| `keywords` meta tags | 0 | 0 |
| Sitemap | **115 / 115** at 200, zero redirect hops | 115 |
| Bad URLs 404 (extensionless · `.zip` · `/assets/*`) | all 404 | 404 |
| Real hashed bundles | `.js` 200 `text/javascript` · `.css` 200 `text/css` | 200 |
| Redirect status | `/painters-brighton` → 301 | 301 |
| Markdown negotiation headers | 4 / 4 present | 4 |
| robots.txt | `Disallow: /api/` only | correct |
| llms.txt price figures | none — both `$` matches are the $10M public liability | none |
| Images over 250KB | **0** | 0 |
| TTFB | 0.55 s first hit, 200 | 0.15–0.45 s |

### ⚠️ NO RANKING DATA THIS RUN

**GSC Wizard, Supermetrics and Windsor.ai were all disconnected for this session.** Checked
before assuming, per the rule added to this log earlier today. That leaves no Search Console and
no GMB access, so **this run makes no ranking claim whatsoever** — no position deltas, no
striking-distance list, no indexing-tracker delta. The 2026-08-28 run should be the first able to
report an indexing-tracker change, since the tracker was created 2026-08-27 14:46.

Semrush was not re-probed; it returned units-zero on 2026-08-27 and nothing suggests that changed.

This is the second run in two days lost to connector flapping. The connectors themselves are fine
— they were all working earlier the same day — so this is environmental, not a configuration
defect. Worth Jimmy knowing that a "nothing moved" report may mean the data was unreachable
rather than that the site is static; this log entry distinguishes the two.

### ✅ Brief updated — sixth attempt, 2026-08-27 20:12 UTC

`update_trigger` failed on five separate attempts across two sessions, always because the
claude-code-remote MCP server was disconnected at the moment of the call. **The sixth attempt,
made minutes after this entry was first written, succeeded.** The brief's Step 1 now reads:

- **GSC Wizard as PRIMARY**, listing the seven tools actually exercised on 2026-08-27
- **Supermetrics as FALLBACK**, flagged as still the only source of GMB / Maps data
- the 20+ impressions interpretation rule
- striking distance corrected to **8–18**
- and, from the two runs lost to it: *"connectors flap constantly, including mid-session … if
  neither is reachable, make no ranking claim at all. 'Nothing moved' and 'I could not see' are
  different findings and must not be reported the same way."*

The 2026-08-11 clicks cliff and the zero-click `jetblack` query were carried into the brief's
standing context so the next run inherits them.

The brief and this log now agree. Where they ever diverge again, this log still wins.

### Checked and clean, no change needed

Build health, lockfile, deployment currency, three-layer regeneration, schema-vs-visible,
near-duplicate, site health in both directions, sitemap, structured data, metadata, markdown
negotiation, robots.txt, llms.txt, image weights, TTFB.

**No site change made.** Nothing was found that evidence supports changing, and no ranking data
was available to justify one.

---

## 2026-08-28 — third-party audit reviewed against live data; two real findings, three false alarms

Jimmy supplied a "Jetblack Painting — SEO & AI Search Audit" PDF (dated 30 August 2026, two days
ahead of receipt). It is genuinely well-researched — its Search Console figures are within ~4% of
what Windsor.ai returns — so its claims were checked one by one rather than accepted or dismissed.

### ✅ CONFIRMED — act on these

**1. The 96 suburb pages have no quote form.** `SuburbPageTemplate.tsx` renders Navbar, SEOHead,
MidPageCTA, Footer and icons. It does NOT render `QuoteForm` or `Contact`; the homepage renders
both. All 96 suburb page files route through that template, so **0 of 96 have a form**. The
crawler layer confirms it: `/painter-clyde-north/` has 0 `<form>` and 0 `<input>`.
Consequence beyond conversion: the `generate_lead` event added on 2026-08-25 can only ever fire
from the homepage, so lead tracking is blind on every page that carries the impressions.
(The audit's "8 phone links" is wrong — the static layer has 2 — but the substance holds.)

**2. Both URL variants really are in Google's index.** The site now redirects correctly —
`/painter-black-rock` → 301, `/painter-black-rock/` → 200, verified live — but Search Console
still carries impressions against BOTH forms, and against `http://`:

| Non-slash | Slash | http:// |
| --- | --- | --- |
| painter-black-rock 30 | painter-black-rock/ 5 | `http://` homepage 2 imp / **2 clicks** |
| painter-caulfield 21 | painter-caulfield/ 276 | `http://painter-greater-dandenong` 13 imp / **1 click** |
| painter-mount-eliza 2 | painter-mount-eliza/ 313 | |
| painter-mornington-peninsula **136** | painter-mornington-peninsula/ **165** | |
| painter-sandringham 16 | painter-sandringham/ 235 | |
| services/commercial-painting 8 | .../ 266 | |

Mornington Peninsula is a near-even split — real signal dilution. This is **legacy index data on a
correctly-configured site**, not a live redirect defect, so it should consolidate on its own. The
standing "trailing slashes are not a defect" note remains right about the *serving* behaviour and
should not be used to dismiss the *index* state.

### ❌ NOT CONFIRMED — do not act on these

**"You have no analytics installed — no gtag, no dataLayer, no googletagmanager."** False. The
live homepage HTML contains `gtag` ×5, `dataLayer` ×2, `googletagmanager` ×2 and `G-6NC2597W9L`
×2. It is lazy-loaded inside `requestIdleCallback` via `_loadGA`, which is why a checker that does
not wait reports nothing. **Their companion claim is true though** — the GA4 property returns zero
rows, which this log already records as a known upstream problem. Tag present, data not landing:
a property/stream mismatch, not a missing tag, and the fix is different.

**"Duplicate URL variants are being indexed [because the site serves both]."** Half false — see
above. The index state is real; the serving defect they imply is not.

**"Schema gaps — suburb pages only carry LocalBusiness + WebPage. Add Service, BreadcrumbList,
FAQPage."** False. `/painter-clyde-north/` already carries **BreadcrumbList, FAQPage,
LocalBusiness, Service and WebPage**, with 6 Question entries — exactly the five types recommended.

### ⚠️ COULD NOT VERIFY

**"Your GBP listing has no phone number on it"** — flagged as the single highest-value fix in the
whole audit, and it contradicts this log, which records phone and website as correct. Google and
Maps are blocked from this sandbox and Supermetrics GMB is now paywalled (below), so it could not
be checked either way. **Jimmy should confirm this on his phone before anything else in the audit.**

Their local-pack snapshot for "painters mordialloc": Unistar 358 reviews · Melbourne Painters 55 ·
One Day Paint 50 · **Jetblack 17, not shown in the pack.** That is consistent with everything this
log records about review count being the map-pack constraint.

### 🔴 BOTH PAID GSC SOURCES LAPSED — Windsor.ai is now the only one

- **GSC Wizard**: `payment_required` — "your trial has ended or you have no active subscription".
  It worked on 2026-08-27. Subscribe at tool.gscwizard.com/settings/subscription.
- **Supermetrics**: `TRIAL_EXPIRED` — expired **2026-08-25**, team "Team jetblackpainting"
  (ID 1902861). The standing brief predicted this and said to tell Jimmy; telling him.
- **Windsor.ai (`searchconsole`) WORKS** and returned full page-level data this run. It is now the
  **only** working Search Console path and should be promoted to primary in the brief.

### Ranking data (Windsor.ai, 2026-07-01 → 2026-08-25)

The brief's "tracked eleven" are **not** this site's high-impression pages. The real ones:

| Page | Impressions | Clicks | Position |
| --- | --- | --- | --- |
| /painter-clyde-north/ | **1,356** | 0 | 32.8 |
| /painter-doncaster/ | 803 | 0 | 76.7 |
| /painter-narre-warren/ | 608 | 0 | 36.6 |
| /painter-bentleigh/ | 603 | 1 | 49.4 |
| /painter-camberwell/ | 603 | 0 | 84.9 |
| /painter-malvern-east/ | 557 | 0 | 56.9 |
| / (homepage) | 510 | 35 | 15.8 |
| /painter-toorak/ | 485 | **3** | 79.3 |

⚠️ **Two standing instructions are contradicted by this.** The brief says Toorak, Kew, Camberwell,
Hawthorn and Malvern are "organically unreachable — do not re-queue for content". Camberwell has
603 impressions and Toorak has 485 impressions **and 3 clicks**. They are reachable; they are just
ranking badly. And Clyde North — the single biggest page on the site by impressions, 1,356 — is not
in the tracked eleven at all.

### Steps 0–6 — all clean

Deps 77/77 · production serving current main · three layers regenerate to a **0-file diff** ·
117 pages / 489 FAQ questions / **0** schema-vs-visible problems · near-duplicate 25.5% avg,
worst 47.0%, 0 over 55% · TTFB 0.46s.

### No site change made this run

The two confirmed findings are both real work — a form on 96 pages is a visual/component change
requiring a draft PR and Jimmy's sign-off, and the index-duplication resolves itself. Neither is a
same-run fix under the one-change-per-run rule.

---

## 2026-08-29 — Suburb page consolidation, step one: 8 noindexed, 1 merged

Jimmy supplied two documents: a 26-page **SEO & AI Search Audit** and a 9-page **Suburb Page
Merge & Cut Implementation Pack**. This entry records what was verified, what was rejected, and
the first slice of what was executed.

### The metric that overturned an earlier conclusion in this log

On 2026-08-28 this log argued the routine brief was wrong to write off Camberwell and Toorak, and
flagged Clyde North — the site's biggest page by impressions — as untracked. **The audit pulled
query-level data and that reframing is correct; total impressions were the wrong number.**

| Page | Total impressions | Head-term ("painters + suburb") | Clicks |
| --- | --- | --- | --- |
| `/painter-clyde-north/` | 1,406 | **2** | 0 |
| `/painter-mordialloc/` | 131 | **122** | some |

Clyde North's 1,406 impressions are ~540 distinct machine-generated query combinations at 1–6
impressions each ("balustrade and railing painting clyde north"). Mordialloc's 131 come from 21
real queries. **Judge suburb pages on head-term impressions, not total.**

One genuine limitation of that metric, since this log previously relied on the opposite reading:
it scores only "painters/painter/house painters + suburb". Clyde North was linked from the
commercial and body-corporate service pages precisely because it ranked 15–18 on *commercial*
queries, which the metric ignores by construction. That does not overturn the call — those
queries are Melbourne-wide and the service pages can hold them directly — but it is why both
service links were repointed rather than simply dropped.

### Verified against the live site before acting

| Audit claim | Verdict |
| --- | --- |
| GBP listing has no phone number | **Second independent source.** Still unverifiable from here — Google is sandbox-blocked. Jimmy's to fix |
| Suburb pages have no quote form | **True.** 0 `<form>` on all 95 |
| 96 suburb pages, 115 sitemap URLs | **True** (both now reduced — see below) |
| "No GA4 tag — no gtag, no dataLayer, no googletagmanager" | **FALSE.** Live homepage: `gtag` ×6, `dataLayer` ×3, `googletagmanager` ×2, `G-6NC2597W9L` ×2. Lazy-loaded in `requestIdleCallback`. **Second audit in two days to make this same error** |
| "Suburb pages only carry LocalBusiness + WebPage" | **FALSE.** Already carry BreadcrumbList, FAQPage, Service, HomeAndConstructionBusiness. `aggregateRating` genuinely is off (`manus:disable-auto-review-schema`) |
| Trailing-slash / `http://` duplicates need fixing | **Already fixed.** Verified working; what GSC shows is legacy index state |
| Hughesdale "check that URL is actually indexed" | **No defect.** 200, `index, follow`, in the sitemap |

**The implementation pack ships redirect config for Apache, Nginx, Netlify and Vercel. This site
runs on Cloudflare Workers.** None of it applies as written; the redirect map was sound and was
translated into `PATH_REDIRECTS` in `worker/index.js`.

### What was executed — §8.9's two moves only

Jimmy chose the two lowest-risk moves, not the full 54-URL programme.

**1. Casey/Cardinia corridor — 8 pages noindexed, kept live.** Clyde, Clyde North, Cranbourne,
Berwick, Hampton Park, Endeavour Hills, Dandenong, Greater Dandenong. Pages stay live per the
pack's month-1 rule (noindex first, delete only in month 2 if nothing surfaces). Narre Warren was
deliberately **not** cut — 80 real head-term impressions, the only genuine demand in that corridor.

`noindex` is a new prop on `SuburbPageTemplate`, passed to `SEOHead`, and read off the same `.tsx`
source by `scripts/generate-static-pages.mjs` so the crawler layer says the same thing. One source
of truth, not two lists.

**2. Bentleigh East merged into Bentleigh.** 301 in the worker. It produced zero head-term
impressions while sitting beside `/painter-bentleigh/` (276) and competing for the same searcher.
Checked its content for anything unique worth lifting first, per the pack's §1.3 — there was
nothing: its lead-paint FAQ, the one genuinely distinct item, already exists on the Bentleigh page.
The served-locations copy the pack supplies was also already present ("across Bentleigh and
Bentleigh East" in the heading, propertyTypes and body), so it was not duplicated.

Internal links were repointed rather than left to chain: Footer, Ormond, McKinnon and Bentleigh
itself all linked to the merged URL. `/painters-bentleigh-east` was repointed straight at
`/painter-bentleigh/` — leaving it aimed at the old singular would have made a two-hop chain, which
the pack explicitly warns against.

### Verification

- Redirect chains: **0** across all 120 `PATH_REDIRECTS` entries (every target checked against the map)
- Redirects into a 404: **0** (every target checked against `known-paths.js`)
- Sitemap: **115 → 106** URLs, and none of the 9 removed URLs still appears
- All 8 Casey static pages emit `content="noindex, follow"`; controls unaffected
- Suburb pages: 96 → **95**; static pages 117 → 116; markdown twins 117 (the extra is `public/index.md`, the homepage twin — pre-existing, not an anomaly)
- **`pnpm check` and `pnpm test` could not run** — `node_modules` is empty and the npm registry returns 403 through the proxy. The Cloudflare build is the real typecheck gate. Block comments were moved out of JSX attribute position rather than relying on an unverifiable parse.

### Expect impressions to fall

The audit predicts a 40–50% drop in total impressions if the full programme runs; this slice is
smaller but Clyde North alone was 1,406. **That is the intended outcome.** Judge it on clicks,
calls and form submissions, not impressions.

### Still outstanding, and not done here

- The remaining 30 merges and 15 cuts — not authorised in this pass
- ~~**The inner north is a decided "no"**~~ — **superseded the same day, see the addendum below. Do not execute this.**
- Casey pages remain in the sitewide footer suburb directory (94 links). `noindex, follow` keeps equity flowing, and removing them is a nav change beyond this scope
- The quote form on all 95 suburb pages — still the audit's highest-value site-side fix

### Two facts in this log are now at risk

**Review count (17).** Audit §7.5 flags that several reviews look written rather than volunteered:
near-identical keyword phrasing, two reviewers sharing Jimmy's surname, one apparently from a crew
member. Google filters exactly these patterns. **If they are removed, 17 becomes ~12 and the figure
hardcoded in eight places across the site becomes false.** Do not treat 17 as immutable; re-verify
against the live knowledge panel before any run cements it again.

**Years trading (13+).** Three different numbers are live: `llms.txt` says **13+**, a Google
Business Profile post says **18+**, and Google records the business opening as **March 2015 (11)**.
Not resolved here — Jimmy has to pick the true one before it is propagated further.


### Addendum, same day — a third PDF supersedes the inner-north decision

Jimmy then supplied `jetblackpaintingseoaudit.pdf` (11 pages). It is **the same audit, byte-identical
through §8.7**, with a new section appended: **§8.9a**. Verified by normalising both extractions and
diffing — they agree for the first 35,174 characters, then diverge.

**Nothing already shipped is affected.** The Casey corridor cut and the Bentleigh East merge both
stand; §8.9a explicitly reconfirms `/painter-hampton-park/` belongs in the cut list.

**What changed is the reasoning behind §8.2, and therefore the inner-north question.** §8.5 asked
"will you travel there?", Jimmy answered **no**, and §8.5 says a "no" means noindex those 11 pages.
§8.9a undermines the premise of that question:

> Unistar is based in **Clyde North** and ranks in the **Hampton** local pack — 55 km and an hour
> away. That single fact undercuts the assumption behind the whole geographic argument in §8.2.
> **Proximity is not what gates local pack entry. Review volume is.** Unistar has 358 reviews; you
> have 17.

The audit's own consequence: the inner north "isn't structurally closed to you. Revisit it once
reviews are past 50." So the correct action on those 11 pages is now the §8.5 *"only for a big job"*
outcome — **leave them up and unchanged** — not noindex. **A future run must not execute the
noindex that the entry above originally queued.** Jimmy's decision was sound on the information he
had; the information changed.

§8.9a also resolves two judgment calls in the invest group: **Brighton and Hampton have confirmed
commercial demand** (dedicated local packs, PAA blocks, 65 painting services listed on Airtasker for
Brighton VIC; Google resolves bare "painters brighton" to Brighton VIC 3186). They stay in invest.
The reason they don't show is the review count, not the pages.

**One small unfixed item from §8.9a.** Google conflates **Hampton 3188** with **Hampton Park 3976**
— DH Creative Painting, a Hampton Park business, ranks for "painters hampton vic". The audit asks
that `/painter-hampton/` state postcode **3188** explicitly and name neighbouring Bayside suburbs.
Checked: the Bayside neighbours are **already there** (Brighton, Brighton East, Sandringham,
Bentleigh, Cheltenham, Mordialloc, Highett, Hampton East). **The postcode is not** — 3188 appears in
`suburbsData.ts` for the map but nowhere in the page prose. Not changed here; it is a content edit
outside the scope Jimmy approved.

**The finding the audit says outranks everything else in it:** getting from 17 reviews to 60. Its
words — "The review campaign in §6 is not one task among many. It is the task." Which collides with
§7.5's warning that some existing reviews look manufactured and risk being filtered.

---

## 2026-08-29 (evening) — daily audit: all checks clean, no ranking data, no change made

Run fired 20:05 UTC, after three merges earlier the same day (#225 consolidation, #226 log
correction, #227 quote form + Hampton). **No change made this run.**

### ⚠️ The brief's baselines are now stale — these are the current numbers

Today's merges moved five figures the brief still quotes. A future run comparing against the brief
will see false regressions. Current, measured this run:

| Figure | Brief says | Actual now | Why |
| --- | --- | --- | --- |
| Sitemap URLs | 115 | **106** | 8 Casey pages noindexed + Bentleigh East merged |
| Suburb pages | 96 | **95** | Bentleigh East merged into Bentleigh |
| Static pages | 117 | **116** | same |
| FAQ questions | 489 | **485** | same |
| Pages noindexed | — | **8** | Casey/Cardinia corridor, live but out of the index |

### Steps 0–6 — all clean

- **Build health**: production serves the newest commit's content (Hampton "3188" live). Deps **77/77** in the lockfile.
- **Three layers**: generate-static-pages → generate-markdown → generate-known-paths → **0 diffs**.
- **Sitemap**: **106/106 return 200 with zero redirect hops.** None of the 9 removed URLs is listed.
- **404 behaviour, both directions**: `/nope`, `/nope.zip`, `/assets/nope.js`, `/assets/fake.css` all 404; the real hashed bundle still 200 `text/javascript`.
- **Schema**: 116 pages, 485 FAQ questions, **0 parse errors, 0 schema-vs-visible mismatches, 0 aggregateRating in static pages, 0 BlogPosting missing required fields**.
- **Metadata**: 0 duplicate titles / descriptions / H1s / canonicals · 0 missing descriptions · 0 keywords tags · 0 descriptions over 158 · 1 title over 60 (`/painter-hastings/` at 64, the known accepted one).
- **AEO**: markdown negotiation returns `text/markdown` with `Vary: Accept`, `Cache-Control: no-store`, `X-Robots-Tag: noindex`; normal Accept returns HTML. `robots.txt` disallows only `/api/`. **llms.txt carries no prices** — all three `$` matches read and are the legitimate $10M public liability.
- **Speed**: TTFB **0.146s**, `cf-cache-status: HIT`, **zero images in public/ over 250KB**.
- **Review count**: **17** in all eight hardcoded places and on the live site (`reviewCount": "17"`, "from 17 Google reviews"). Locked fact intact.

### Near-duplicate gate — read this before acting on it next run

Measured **42.3% average worst-twin, 4 pages over 55%**, which reads as a gate breach against the
brief's "25.5% avg, worst ~47%, zero over 55%". **It is not a regression — it is a different
implementation.** My first pass compared the full page text, which on a suburb page includes the
93-link suburb directory and the footer that all 95 pages share. Stripping that shared template:

| Measure | Full page | Boilerplate stripped |
| --- | --- | --- |
| Average worst-twin | 42.3% | **34.6%** |
| Pages over 55% | 4 | **2** |
| Worst pair | cranbourne~narre-warren 61.2% | cranbourne~narre-warren **55.2%** |

Both variants pass the 45% average gate. The one pair still near the line is
cranbourne~narre-warren — **already named in the brief as the known worst pair**, and neither page
was touched today. My 55.2% is still above the brief's 47%, so my script is not the one that
produced that baseline and the two numbers are not comparable. Do not "fix" this on my figure;
re-measure with the original script first.

Worth noting: **`/painter-cranbourne/` is now noindexed** as part of the Casey corridor cut, so the
worst remaining duplicate pair is an indexed page against a de-indexed one. Today's work
incidentally defused it.

### ⚠️ Step 1 — no ranking data. Nothing was measured.

**GSC Wizard, Supermetrics and Windsor.ai were all disconnected at run time.** Semrush reconnected
but the one sanctioned probe (`backlinks_research`) returned the documented units-zero response —
the subscription is active but has no API units; options at https://www.semrush.com/mcp-access.

Per the brief's own rule: **no position deltas, no striking distance, no indexing delta are claimed
this run.** "Nothing moved" and "I could not see" are different findings. This was the latter.

That also means **the impressions drop expected from today's noindex work cannot yet be observed**,
and neither can the effect of the quote form. Both need a run with ranking data.

### Step 7 — nothing done, deliberately

Authority work requires measurement to target it, and there was none. The brief's own guidance:
a run that investigates, finds nothing worth changing, and says so is a successful run.

---

## 2026-08-30 — Third-party page-structure advice checked; the real gap is evidence, not words

Jimmy supplied a further set of recommendations (buyer-intent pages, trust pages, technical SEO,
suburb-page quality). Checked claim by claim against the live site.

### ⚠️ Finding: the crawler layer carries no images at all

**All 95 suburb pages and all 9 service pages emit zero `<img>` tags in their static HTML** — only
an `og:image` meta tag. Every photo is React-only, imported as an ES module and rendered
client-side. The homepage shell is the sole page with an `<img>` in the served HTML.

Two consequences, both previously mis-attributed:

1. An earlier audit noted "almost no Google Images or Lens visibility" and put it down to generic
   photography. That is not the cause. **Google cannot see any image on those pages.**
2. The same advice set asks for "no JavaScript-only key content". Images are exactly that here.

Separately, the same **three** gallery files render on all 95 suburb pages
(`gallery-exterior-navy-weatherboard`, `gallery-commercial-comfortel-building`,
`gallery-roof-victorian-restoration`) — zero suburb-specific imagery anywhere.

Emitting the existing three into the static layer is possible without new photography, but it
would publish identical images across 95 pages, which is marginal. The valuable version needs real
per-suburb photos and is blocked on Jimmy.

### Suburb pages scored against the advice's seven criteria

| Criterion | Status |
| --- | --- |
| Original copy about the work performed there | **Met** — near-duplicate 34.3% avg, all 95 under the 45% gate |
| Links to the matching service page | **Met** — 8 service links per page |
| Direct request-a-quote CTA | **Met** as of PR #229 |
| A genuine reason clients there choose you | Partial — prose covers housing stock, not the business |
| Two or more actual local projects | **Zero, on all 95** |
| Unique before-and-after images | **Zero unique**, and none in the crawler layer |
| Testimonial with approval | **None** |

The advice warns against "50 nearly identical pages where only the suburb name changes". Measured,
these are not that — the text is genuinely distinct. **The gap is evidence, not words.** Three
independent advisers have now converged on the same missing thing: photographs and job details.
That single input blocks case studies, suburb-page proof, service-page proof and a gallery page.

### Technical checklist — verified clean

One H1 per page (0 with none, 0 with more than one, across 116) · self-referencing canonical
**116/116** · 0 duplicate titles/descriptions/H1s/canonicals · sitemap 106/106 at 200 with zero
redirect hops and no noindexed URL listed · **0 orphan pages** · `http://` → `https://` 301 ·
no image over 250KB, WebP, lazy-loaded, TTFB 0.146s · 0 JSON-LD parse errors and 0
schema-vs-visible mismatches · quote reachable in one click from every page type · conversion
events present in code (`generate_lead`, `quote_form_undelivered`, `phone_call_click`,
`email_click`).

**`www.` could not be tested** — this session's egress policy returns 403 on that host. Verified
from source instead: `worker/index.js:164` strips `www.` and forces https with a 301.

### Minor finding: phone format differs between layers

Homepage schema publishes `+61432077782`; every other page publishes `0432 077 782`. Same number,
two formats. Low severity, and the homepage's E.164 form is arguably the more correct one for
schema, so normalising should pick a direction deliberately rather than assume the homepage is
wrong. Not changed.

### Pages that genuinely do not exist

**About**, **insurance/warranty**, and **gallery/projects**. Note that `/about`, `/contact` and
`/our-work` are *not* broken pages — they are legacy hash-anchor routes that all rendered the
homepage, and `worker/index.js` 301s them to `/` deliberately because Google was treating them as
duplicates. That redirect is correct; do not "restore" those routes.

Both new pages are blocked on facts only Jimmy holds: the written guarantee's terms, exclusions and
claim process, and which years-trading figure is true (llms.txt says 13+, a GBP post says 18+,
Google records the opening as March 2015 — 11).

### Pushed back on

A separate **"House Painters Melbourne"** page. The homepage already targets that intent; a second
page would compete with it.

---

## 2026-08-30 (evening) — daily audit after the largest change day: all clean, no ranking data

Run fired 20:05 UTC after nine commits merged across PRs #229 and #230 — service-page
forms, three deepened suburb pages, 18+ years sitewide, the first project photographs, and the
GA4 fix. **No change made this run.**

### The check that mattered: the new images actually serve

Twenty files were added under `public/projects/` today, referenced from the crawler HTML of two
suburb pages. If they 404'd, both pages would show broken images to Google and to visitors.

**All 20 return 200 with `content-type: image/webp`.** Verified individually, not by spot check.

### Steps 0–6 — all clean

- **Build health**: `main` at `0daaadf`; production serving today's commits. Deps **77/77**.
- **Three layers** → **0 diffs**.
- **Sitemap**: **106/106 at 200, zero redirect hops.**
- **404s both directions**: `/nope`, `/nope.zip`, `/assets/nope.js`, `/assets/fake.css` all 404, and the current hashed bundle and stylesheet both 200 with correct content types.
- **Schema**: 116 pages, 491 FAQ questions, 0 parse errors, 0 schema-vs-visible mismatches, 0 `aggregateRating` in static pages.
- **Metadata**: 0 duplicate titles / descriptions / H1s / canonicals, 0 missing, 0 keywords tags, 0 over 158, 1 title over 60 (the known `/painter-hastings/`).
- **AEO**: markdown negotiation correct on a page that gained content today; llms.txt's three `$` matches all read and all the legitimate $10M insurance.
- **Speed**: TTFB **0.150s**, `cf-cache-status: HIT`, **0 images over 250KB** — including the 20 new ones.
- **og:image** resolves 200.

### Two false failures I generated, and what caused them

Both are method errors worth recording, because both looked like real regressions.

**"38/77 dependencies missing."** My check matched bare YAML keys only. pnpm-lock quotes scoped
names (`'@radix-ui/react-slot':`), so every scoped package read as missing. A second attempt
returned **0/77** — shell quoting mangled the regex that time. The correct check scans only the
`importers:` block (the rest of the file is the resolved tree and would produce false *passes*) and
matches quoted or bare keys: **77/77**. The version run earlier today was right; tonight's rewrite
dropped a clause.

**"Real bundle 404."** I tested `/assets/index-Bfj2cCGE.js`, a hash captured before today's
deploys. Hashes change on every build. Reading the current one off the live homepage first:
`/assets/index-DrxnzHHw.js` → 200. **Always read the hash from the live page, never from notes.**

### ⚠️ Step 1 — no ranking data

GSC Wizard, Windsor.ai and Supermetrics were all disconnected at run time. Semrush was probed
earlier today and returned its documented units-zero response; not retried, since nothing changes
within hours. **No position, striking-distance or indexing claims are made this run.**

Still unmeasured, and now accumulating: the impressions drop from the Casey noindex, any effect of
the quote forms, and whether the suburb-page depth moved anything.

### Baselines after today — the brief is stale on six figures

| Figure | Brief | Actual |
| --- | --- | --- |
| Years experience | 13+ | **18+** |
| Suburb pages | 96 | **95** |
| Static pages | 117 | **116** |
| FAQ questions | 489 | **491** |
| Sitemap URLs | 115 | **106** |
| Near-duplicate avg | 25.5% | **34.3%** (different implementation — see the 2026-08-29 entry before acting) |

Review count **17** is correct in the brief and unchanged.

---

## 2026-08-30 — SEOptimer social/local findings: one false negative, two decisions for Jimmy, no code change

Second batch of SEOptimer screenshots (Social Results + Local SEO). Every item checked against what
the site actually serves. **No change made** — nothing here was a defect I should fix unilaterally.

### "No Local Business Schema identified on the page" — FALSE NEGATIVE, do not re-investigate

The homepage **does** carry it. Parsed from the live HTML (not the source), the single JSON-LD block
is a 4-node `@graph`:

| `@id` | `@type` |
| --- | --- |
| `#website` | `WebSite` |
| `#webpage` | `WebPage` |
| `#business` | `["HomeAndConstructionBusiness", "LocalBusiness"]` |
| `#faq` | `FAQPage` |

The business node carries 23 properties including `address`, `geo`, `telephone`,
`openingHoursSpecification`, `aggregateRating`, `sameAs`, `hasOfferCatalog`.

SEOptimer misses it because the type is an **array inside an `@graph`**, which its parser does not
flatten. Google's Rich Results Test handles both. **Do not "fix" this by adding a second flat
`LocalBusiness` block** — two business entities on one page is a real problem, where this is only a
reporting artifact.

### "Phone: +1 0432077…" — also a parser artifact

Schema `telephone` is `+61432077782`, correct E.164. SEOptimer read the *visible* `0432 077 782` and
assumed +1. Displaying the local form is right for an Australian local business. No change.

### "Address & Phone Shown on Website — Missing: Address" — real, but likely correct as-is

Neither the visible page nor the schema `PostalAddress` carries a `streetAddress`. The address is
`Mordialloc / VIC / 3195 / AU`, and the visible copy says "Based in Mordialloc".

For a **service-area business** — one that works at the customer's property rather than receiving
customers at its own — Google's own guidance is to hide the street address. So the omission is
plausibly deliberate and correct.

**It is not mine to decide, because it has to match GBP.** The rule that matters is NAP consistency:
whatever Google Business Profile shows, the site must show the same. Asked Jimmy. **No address
invented** — inventing one would be a fabricated business fact.

### `sameAs` — 7 profiles declared, none verifiable from here

`instagram.com/jetblack_painting`, `facebook.com/jetblackpainting`, `youtube.com/@jetblackpaint`,
`tiktok.com/@jetblack_painting`, `patreon.com/jetblack_painting`,
`au.pinterest.com/jetblackpainting/`, plus the Google Maps place URL.

All six social URLs returned **403 CONNECT** — the session's egress policy blocks those hosts. Per
the proxy rules these are policy denials, not transient failures: **not retried, reported instead.**
A `sameAs` pointing at a dead profile is a worse trust signal than no `sameAs`, so Jimmy should
eyeball the list. The Patreon entry is the one worth a second look — unusual for a trade business.

### "X Account Linked ✗" and "LinkedIn Page Linked ✗" — not defects

No X or LinkedIn profile is known to exist. **A `sameAs` must point at a profile the business
actually controls**; adding a guessed URL would be a fabricated claim and a broken link. If either
account exists, Jimmy supplies the URL and it goes in `sameAs` and the footer. Otherwise this stays
permanently red on SEOptimer, correctly.

### "Facebook Pixel not detected" — deliberate, Jimmy's call

Only useful if Meta ads run, and it is a third-party tracker with consent implications. Not added
unilaterally. Asked.

### "YouTube Channel Activity — low subscribers (0)" — not a code issue

### Checked and deliberately left alone: 3.4KB of HTML comments in the head

Nine comments, 3,426 bytes on a 36KB page. Each explains _why_ something is the way it is — why
hreflang was removed, why the AEO meta tags went, why the static hero stays in the DOM after
hydration. They gzip to very little and they are the reason past decisions do not get silently
reversed. **Kept.**

### Method note

`SEO-LOG.md` is **not** prettier-maintained — it fails `prettier --check` on main. Running
`prettier --write` on it rewraps the whole file (535+/446- of pure noise) and buries the actual
entry. Append by hand; do not format it.

### 2026-08-30 (later) — Jimmy answered the three questions above

Superseding what the entry above says was pending:

**Address — CONFIRMED CORRECT, close this out.** GBP is set to *service area, address hidden*. The
site already matches: no `streetAddress` in the schema, "Based in Mordialloc" in the copy. NAP is
consistent. **No change made, and none should be.** SEOptimer will keep reporting "Missing:
Address" on every future run — that is the tool not modelling service-area businesses, not a
defect. Do not add a street address to satisfy it.

**Facebook Pixel — approved, built this commit.** Jimmy plans to run Meta ads.

**LinkedIn — exists, URL not yet supplied.** Still to do: add it to the `sameAs` array in the
homepage schema and to the footer, once Jimmy sends the URL. Not guessed.

**X — not raised.** Stays absent. **Patreon — not raised**; the `sameAs` entry stands unverified.

### Meta Pixel implementation notes

Mirrored into **both** heads — `client/index.html` (serves `/` only) and
`scripts/generate-static-pages.mjs` (the other 116 pages). This is the one mistake this codebase has
already made once: GA4 lived in only one of them until 2026-08-30 and so recorded nothing from every
page that carries a quote form. **Two `PIXEL_ID` literals now exist and must be changed together.**

**Currently inert.** Both literals are `""` pending the ID from Meta Events Manager → Data Sources.
With an empty ID the block returns before doing anything: no stub, no `window.fbq`, no network
request, and every `trackMetaEvent` call no-ops. Verified by executing the emitted block in a
sandbox — `window.fbq` stayed `undefined`.

**Verified with a real ID too**, since testing only the disabled state would prove nothing. Ran the
actual emitted block in headless Chromium with a test ID and `fbevents.js` stubbed at the network
layer: `fbq` installs synchronously, buffers `["init", …]` and `["track","PageView"]`, and a
`Contact` event fired *before* the library loaded was replayed correctly on load. That replay path
is the one that matters — it is the visitor who taps the sticky call bar in the first second.

**Why the stub is synchronous while the library is deferred.** The stub does no I/O, so it costs
nothing at parse time, and it gives Meta's own queue somewhere to buffer early taps. Only
`fbevents.js` waits for `requestIdleCallback`, so it cannot compete with the LCP hero image. Note
the deferral *timing* is by construction, not measured — the test fixture is trivial enough that
idle arrives almost immediately, so it confirms the queue mechanics, not the scheduling.

**No `<noscript>` tracking pixel.** Unlike the script block it cannot be gated on the ID being set,
so it would fire a third-party request on every crawler fetch of all 117 pages in exchange for the
vanishingly small share of real customers running with JavaScript off.

**Event mapping.** GA4 and Meta deliberately do not share names — Meta only optimises against its
standard vocabulary, so a GA4 name sent to Meta becomes a custom event its bidding cannot use.

| Action | GA4 | Meta |
| --- | --- | --- |
| Quote form, delivery confirmed | `generate_lead` | `Lead` |
| Quote form, delivery failed | `quote_form_undelivered` | *(none — diagnostic, not a conversion)* |
| Phone or email tap | `phone_call_click` / `email_click` | `Contact` |

**PII:** swept both call sites — no visitor name, email or phone reaches either tracker. Meta
enforces this harder than Google; repeated breaches restrict the ad account.

**Not yet verifiable end-to-end.** `connect.facebook.net` is blocked by this session's egress
policy, and the React-side calls cannot run until Cloudflare builds the bundle. Jimmy must confirm
receipt in Meta Events Manager → Test Events once the ID is in.

---

## 2026-08-31 — LinkedIn added to sameAs and the footer

Jimmy supplied `https://www.linkedin.com/company/jetblackpainting/`, closing the item left open in the
2026-08-30 SEOptimer entry. Added on his word, which is the only acceptable basis — a `sameAs` must
point at a profile the business actually controls, and it was correctly left out while unverified.

**Could not confirm the URL resolves.** `linkedin.com` returns 403 CONNECT under this session's
egress policy. Per the proxy rules that is a policy denial, not a transient failure: not retried,
reported. Jimmy should eyeball it once, since a `sameAs` pointing at a dead profile is a worse
signal than none.

### It lives in FIVE places, not the two I first said

Worth writing down, because the first sweep found only three and the count was wrong twice:

| File | What it feeds |
| --- | --- |
| `client/index.html` | the homepage's own JSON-LD — **serves `/` only** |
| `scripts/generate-static-pages.mjs` | the crawler HTML of the 95 suburb pages |
| `client/src/components/SuburbPageTemplate.tsx` | the React copy of the same, for parity |
| `client/src/lib/organizationSchema.ts` | the Organization schema |
| `client/src/components/Footer.tsx` | the visible social row |

`client/index.html` was missed by the first grep because it only covered `client/src` and
`scripts/*.mjs`. **That file is the homepage** — the single highest-value page for schema — and it
is the same blind spot that let GA4 ship to one layer on 2026-08-30. Any future `sameAs` or
business-fact edit must include it.

### The three sameAs lists have pre-existing drift — not introduced here, not fixed here

They do not agree with each other, and did not before this change:

| Entry | index.html | generator | SuburbPageTemplate | organizationSchema |
| --- | --- | --- | --- | --- |
| Patreon | yes | yes | yes | **no** |
| Pinterest | yes | yes | yes | **no** |
| Oneflare | **no** | **no** | **no** | yes |

Left alone deliberately: reconciling them means deciding which profiles are real, and Patreon is
still unverified. Do that in one pass once Jimmy confirms the list, not piecemeal.

### Verification

- 116 generated pages scanned: **0 JSON-LD parse errors**, 95 carry `sameAs`, **all 95 now carry
  LinkedIn, 0 duplicates**. The 21 without `sameAs` are service and utility pages, which never had it.
- Homepage JSON-LD re-parsed after the edit: 8 `sameAs` entries, LinkedIn present.
- Source diff is **5 lines**. Generated diff is one line per page — the schema is emitted minified.
- Markdown twins unchanged.

### Method note, second time in two days

`prettier --write` on these files produces 310 lines of churn that buries a 5-line change.
`Footer.tsx`, `SuburbPageTemplate.tsx`, `organizationSchema.ts` and `generate-static-pages.mjs` are
all **NOT prettier-clean on main** — same as `SEO-LOG.md`. Do not format them; edit by hand.

Also: the JSON-LD check regex must allow attributes. Generated pages emit
`<script type="application/ld+json" data-static-schema>`, so a pattern requiring `>` straight after
the quote silently matches **zero** blocks and reports a false all-clear.

### One thing not verified

`Linkedin` could not be confirmed as a lucide-react export — `node_modules` holds only empty
directory shells, and the npm registry is unreachable. The supporting evidence is that `Instagram`,
`Youtube` and `Facebook` are already imported from lucide-react at this same pinned version
(`^0.453.0`) and build fine, so brand icons exist in it. The Cloudflare build is the real gate; if it
fails on that import, replace it with an inline SVG the way `TikTokIcon` already is in the same file.
