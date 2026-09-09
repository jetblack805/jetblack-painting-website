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

**Two a week.** Tuesday and Friday.

Jimmy asked for daily. Daily is the wrong call here, and not only because of
supply — a daily reel from a two-person painting business means posting filler
five days out of seven, and filler trains the account's own audience to scroll
past it. Two strong ones a week outperform seven weak ones on reach and on the
only metric that matters, which is the phone ringing.

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

## Filming rules

Seven rules. They are all here because breaking one of them wastes the shot.

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
7. **Check the frame before sending.** House numbers, number plates, mail on a
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
- **Four to six hashtags**, weighted to location. Not thirty. A wall of tags is
  a signal of a low-effort post, and Instagram's own guidance has said so for
  years.
- **No location tag is possible via the API** — Instagram's publishing endpoints
  expose no location field, so the suburb has to live in the caption text. This
  is a real limitation, not an oversight, and it is why rule one above matters
  more here than it would on a manually posted account.

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
