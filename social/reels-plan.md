# Instagram Reels — standing plan

Jimmy asked me to design the reels and choose the content. This is that brief.
The per-reel detail lives in `social/reels-queue.json`; this file is the _why_,
so the queue can be extended later without re-deciding everything.

Account at time of writing: 583 followers, 100 posts. Small. Reels are the only
surface on Instagram with meaningful non-follower reach, which is the whole
reason to bother with them.

---

## The one design decision everything else follows from

**Every reel is a single continuous phone clip. No multi-clip edits, no
slideshows of stills.**

Two reasons, and the second is the important one:

1. Still-photo slideshows with a pan and a trending song are the format every
   trade account posts and the format the ranking system has learned to bury.
   Real motion — hands, tools, a surface changing — is what gets pushed to
   people who don't follow the account.
2. A single clip needs **no editing**. Film ten seconds, trim the ends in
   Instagram, add one line of text, post. That is a job Jimmy can finish in the
   ute before he drives off. Any plan that needs an editing session is a plan
   that quietly stops happening in week three.

The cost of this decision is that reels cannot be built from the existing
library — those 42 photos are stills. So the queue below is mostly **shot
lists to film on jobs already booked**, not a backlog ready to publish. That is
the honest position and it is why the plan is built around what Jimmy is
already standing in front of every day.

## Cadence

**Three reels a week — Tuesday, Thursday, Saturday. Plus two carousels a week.**

This was two reels a week until Jimmy sent through Instagram's own Best
Practices page, which states that the accounts with the greatest follower
growth publish **ten or more reels a month**. Two a week is eight or nine, just
under the line. Three a week is thirteen, which clears it with margin.

Worth being straight about what that claim is: a correlation Instagram has
published, not proof that the eleventh reel causes growth. But it is the
platform describing its own ranking behaviour, and there is no competing source
with better standing. Taking it at face value costs one extra ten-second clip a
week.

Daily is still the wrong call. The earlier argument against it was a supply
argument about the photo library, and that argument genuinely weakens once the
content is filmed rather than assembled — so it is not the reason. The reason is
that a daily reel from a two-person painting business means filler five days out
of seven, and filler teaches the account's own audience to scroll past it.
Thirteen a month is the ceiling worth aiming at.

## The carousel track

Instagram's guidance also notes that **carousels out-reach single photo posts**.
That reopens something the reels decision closed off: the 42-photo library.

Those photos cannot become reels — that part of the argument stands, a video
slideshow of stills is still the weak format. But a carousel is not a reel. It
is a native photo post, it is the format Instagram is explicitly recommending,
and it needs no filming at all. Ruling the library out entirely was an
overcorrection.

So there is a second track running alongside: **two carousels a week**, built
from photos that already exist, queued in `social/carousel-queue.json`. Seven
sets are ready now.

Two mechanical constraints that shape those sets:

- Instagram's publishing API takes JPEG only, at most 8MB, aspect ratio between
  4:5 and 1.91:1. Most of the library is 3:4, just outside that floor, so
  `scripts/make-instagram-jpegs.mjs` builds compliant twins into
  `public/social/ig/`. A photo already inside the window is not cropped.
- **Every slide displays at the first slide's aspect ratio**, so a set cannot mix
  portrait and landscape. The queue keeps each set to one shape and the build
  validates it.

Instagram suggests text on the first slide to set context. Each set carries a
`slide1_text` line for that — added in-app when posting by hand. Published
through the API there is no overlay, and the caption's first line does that job.

## The four formats, in rotation

Run them in this order and repeat. The rotation exists so the account doesn't
become all satisfying-process and no reason to hire him.

### A — The cut

Before and after, hard cut, same camera position. 7–12s.
The whole trick is that the two shots are framed identically; that is what makes
the change land. It requires deciding to film the "before" _before_ starting,
which is the single habit that makes this format work and the reason most
tradies' before/afters are weak.

### B — Satisfying process

Close, tight, no talking, no explanation. 8–15s.
Masking tape pulling off a crisp line. First roller pass across a patchy wall.
Cutting in a straight edge freehand. A spray gun passing over a cabinet door.
This is the format that reaches people who have never heard of Jetblack. It
does not sell directly and it is not supposed to.

### C — One thing I'd tell you

Jimmy to camera, on site, one specific piece of advice. 15–25s.
Lowest reach of the four, highest intent. Someone who watches a painter explain
why a surface needs to be dulled before it takes paint is someone deciding who
to call. Roughly one in four.

### D — The bit you're paying for

Prep work: filling, sanding, caulking, masking. 10–15s.
This is the answer to the cheaper quote, and it is worth showing precisely
because prep is invisible in the finished job. Nobody photographs it, which is
why it is worth posting.

## The first three seconds

Instagram's guidance is that the first three seconds decide whether anyone
stays. That sharpens one of the shot lists rather than changing it: **film with
a lead-in, then trim so the published reel opens on the action.**

Roll before the tape pull starts — you cannot add that footage later. But the
version that gets posted must begin with the tape already moving. A reel that
opens on three seconds of a hand approaching a wall has spent its whole budget
before anything happens.

## Audio

Do not post silent. Instagram pushes reels with audio and the guidance says so
directly.

- **Format B keeps its natural sound.** The tape, the roller, the gun. That noise
  is the appeal — muting it and dropping a pop song over the top removes the
  reason the clip works. Add a trending track underneath at low volume if one
  fits; keep the real sound on top.
- **Format C is voice only.** No music under a talking clip, or the advice stops
  being audible on a phone speaker.
- **Formats A and D take a trending track** at normal volume. There is nothing
  worth hearing in a filling knife.

## Filming rules

Eight rules. They are all here because breaking one of them wastes the shot.

1. **Vertical.** Horizontal footage cannot be used. Lock the phone into portrait
   and leave it there.
2. **Wipe the lens.** On a work phone this is the single biggest reason footage
   looks cheap, and it costs two seconds on a shirt.
3. **Brace.** Lean the hand against a wall, a ladder, a knee. If the camera has
   to travel, move slowly and in one direction. Drifting handheld footage reads
   as amateur before anyone processes what's in it.
4. **Film ten seconds, not three.** Length can be trimmed later; it cannot be
   added. Start rolling before the action and stop after it.
5. **For a before/after, mark the spot.** Tape an X on the floor, note where the
   frame edge sits, stand in the same place at the end. Same height, same
   distance.
6. **Kill the compressor before speaking.** A format C reel with a compressor
   cycling under it is unwatchable and cannot be fixed afterwards.
7. **720p and 30fps minimum, and do not send it through WhatsApp.** Any current
   iPhone clears the resolution and frame rate on default settings. WhatsApp is
   the trap — it recompresses video hard enough to visibly wreck it, and the
   damage cannot be undone at the other end. Send the original file.
8. **Check the frame before sending.** House numbers, number plates, mail on a
   bench, the client's photos, a legible shopfront through a window. Three
   separate identifying details turned up in one week of photos in September;
   assume there is one in every shot until it has been looked for.

## Captions

- **First line carries the suburb and the hook.** It is the only line visible
  before "more", and it is what makes a Melbourne reel read as local rather
  than as generic content.
- Two or three short lines of actual substance underneath. What was done, why
  it was done that way. Not adjectives.
- One call to action, plainly worded.
- **Ask something real.** Instagram's guidance is to give people a reason to
  join in, and a genuine question outperforms a closing statement. Not "thoughts?"
  — something a homeowner actually has an opinion about, like which of two
  surfaces is harder to repaint.
- **Four to six hashtags**, weighted to location. Not thirty. A wall of tags is
  a signal of a low-effort post, and Instagram's own guidance has said so for
  years.
- **Add the location when posting by hand.** Instagram's guidance says a location
  helps reach people interested in that area, which for a suburb-by-suburb
  business is the whole game. This corrects something stated too broadly
  earlier: the _API_ exposes no location field, so anything published through
  Windsor genuinely cannot carry one — but that limit does not apply to Jimmy
  posting from his phone, and he should tag the suburb every time. The suburb
  belongs in the caption's first line either way, since that is the only version
  that survives an API post.

## Suburb weighting

Reels do not rank in Google, so this is about reaching the right people, not
about search. Weight the suburbs named in captions toward the priority set:

**Stonnington** — Malvern, Malvern East, Armadale, Toorak, Prahran, Windsor,
Glen Iris. **Boroondara** — Kew, Camberwell, Hawthorn.

Name the suburb the job is actually in. Never name a suburb the job was not in.

## What I can and cannot do from here

- **Can:** choose the content, write every caption, publish to Instagram once a
  video file exists (Windsor's `create_video_post` — MP4 or MOV, 3s–15min).
- **Cannot:** produce a video file. This environment has no usable encoder — the
  only ffmpeg present is Playwright's, built `--disable-everything` with just
  MJPEG decode and VP8/WebM out, and Instagram accepts neither. Adobe's video
  tools need an upload to `at.adobe.com`, which the network policy refuses.
- **Cannot:** watch footage that is sent to me. Same missing decoder — H.264 is
  not decodable here, so a clip cannot be checked before it goes out. Anything I
  publish, I am publishing unseen, which is why rule 7 sits with Jimmy.
