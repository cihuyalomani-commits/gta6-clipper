# Creative decision — Windah 90s clip (Jason & Cal), gta6-clipper-01, session 2026-11-21

## Source — GAMEPLAY #1 (NOT Bigfoot, NOT the shoe store)
- Windah Basudara, "GTA VI SIAP TAMAT 100%.... GAMEPLAY #1"
- VOD URL: https://www.youtube.com/watch?v=45r3OyaxvFE
- Video ID: 45r3OyaxvFE, channel: Windah Basudara, upload date 2026-11-18, was_live
- Duration 14631s (4:03:51), 12,899,255 views (yt-dlp probe, 2026-11-21)
- Downloaded in this session with yt-dlp to windah-vod1-360p.webm
  (AV1 640x360 30fps + Opus, 706 MB). Note: the first download was
  interrupted by a runtime restart at ~409 MB; yt-dlp was gone after the
  restart (system reinstall wiped it) and had to be reinstalled with
  `pip install --break-system-packages yt-dlp` (2026.10.26), then the
  download was resumed with --continue and completed.

## Shoe-store note — verified ABSENT from GAMEPLAY #1
The brief's recommended shoe-store moment ("MOMEN WINDAH KE TOKO SEPATU",
shop "THREADS SHED FLIP FLOP HOUSE", green helmet, sneakers, "good
citizen") does NOT appear in this VOD. I surveyed the whole VOD with
frames every 60s (244 frames, 0:00–4:03, windah1_frames/ +
windah1_sheets/sheet_01–13): no shoe store, no sneaker display, no
motorcycle-to-shoe-store sequence anywhere. The shop interiors found
were a fishing tackle shop (~1:16–1:20), a clothing/gun shop (~1:38–1:39),
a convenience store (~2:38) and a souvenir shop (~2:49) — none of them
the shoe store. The circulating shoe-store reel is therefore NOT from
GAMEPLAY #1 (and the earlier build already verified it is not in
GAMEPLAY #3 either). If the shoe-store moment is still wanted, the
source would have to be another stream (e.g. GAMEPLAY #2, not surveyed)
— do not claim a shoe-store timestamp in #1, there is none.

## Moment chosen — Jason sleeps over at Cal Hampton's (the misunderstanding)
This is the moment MAD.tv called the funniest of the first stream:
Jason spends the evening at his friend Cal Hampton's place, they play
games and drink on the couch, fall asleep, and Jason wakes up in bed
next to Cal — then has to make an awkward shirtless morning phone call
in his underwear. Full arc verified frame-by-frame from the VOD itself
(5s-interval frames, cal_frames/ + cal_sheets/sheet_01–06):
- 3:46:00–3:48:20: Jason & Cal on the couch playing the in-game arcade
  game "Street Trash III: Dezombifier" (top-down zombie shooter).
- 3:48:25–3:49:15: back on the couch, drinking, chatting, laughing.
- 3:49:20–3:50:15: still on the couch, getting sleepy, lying down together.
- 3:50:20–3:50:55: Windah opens the Settings menu (NOT used — dead time).
- 3:51:00–3:51:15: dark room, Jason smoking (NOT used — slow/dark).
- 3:51:20–3:51:35: THE BED SCENE — Jason and Cal wake up in bed
  together, Cal's arm on Jason's chest; Jason gets up in his underwear.
- 3:51:40–3:52:03: morning after — Jason shirtless in his underwear,
  on the phone, walking around Cal's house.
- 3:52:20–3:55:55 (NOT used): Jason finds a floor stash, changes
  clothes, makes coffee, climbs up to fix the roof.

Why it works for 90s: it is one self-contained little story with a
clear beginning (evening on the couch), middle (falling asleep) and
punchline (waking up in bed together + the awkward morning phone call),
Windah's facecam reaction is in frame throughout, and it reads without
needing mission context. It is NOT the Bigfoot moment and NOT any of the
three moments already entered by other accounts (seaplane "Gone Fishing"
— the seaplane does appear in this VOD ~0:42–0:43, not used; 1 HP WASTED
warehouse — not used; "Windah Perfect landing" — not used).

## Edit structure — two segments, one hard jump cut
The 83s of action is NOT one continuous trim: the Settings menu
(3:50:20–3:50:55) and the dark room (3:51:00–3:51:15) sit between the
couch scene and the bed scene, so the clip jumps from the couch
straight to the morning, bridged by the "KEESOKAN PAGI" caption.
Segment 1: VOD 3:48:30–3:49:10 (13710–13750s), 40.0s — Jason & Cal on
  the couch, drinking, chatting, laughing.
Segment 2: VOD 3:51:20–3:52:03 (13880–13923s), 43.0s — waking up in bed
  together, Jason in his underwear, morning phone call.
Total action 83.0s + pitch 7.0s = 90.0s.

CORRECTION NOTE (for the record): the first render used -ss 13940 for
segment 2, which is 3:52:20, not 3:51:20 — an arithmetic slip (3:51:20
is 13880s). That render missed the bed scene entirely. It was caught
in frame verification (clip 50s showed the wardrobe, not the bed) and
both stages were re-rendered with the correct -ss 13880. The final
files below are the corrected render; the wrong first render was
overwritten and no longer exists.

## Creative
- Format: vertical 1080x1920, 90.0s total. Source is 640x360 16:9,
  so blur-fill: full frame scaled to 1080 wide, centred, over a blurred
  enlarged copy filling the vertical frame (same layout as the 30s clip).
- Meme style (same as windah-clip-30s-meme.mp4, built on top of the
  plain 90s render, which is kept as windah-clip-90s-plain.mp4):
  * Title bar (whole action, 0–83s): white strip across the top,
    y=0–230, bold black all-caps DejaVuSans-Bold 62px centred:
    "JASON TIDUR BARENG CAL?!". It also covers the old hook text.
  * Punch-in zooms (crop + scale back to 1080x1920, hard cuts):
    - 49.5–51.5s: 1.35x on the bed scene, centre ~(540,960)
    - 51.5–53.5s: 1.7x on Windah's facecam reaction, centre ~(950,1190)
    - 60.0–63.0s: 1.3x on Jason on the phone in his underwear,
      centre ~(540,960)
  * Meme captions (DejaVuSans-Bold 92px, white with 5px black outline,
    centred at y=1420 in the blurred lower band — never covering the
    facecam or the gameplay):
    - "MAIN BARENG CAL" 2.0–5.0s (couch, controllers)
    - "KEESOKAN PAGI" 40.5–43.0s (the jump cut / time skip)
    - "TIDUR BARENG?!" 49.5–52.0s (bed reveal)
    - "SALAH PAHAM!" 60.0–63.0s (morning phone call in underwear)
- Pitch 83.0–90.0s, text on screen, black background, same wording/
  layout as the earlier clips:
  "Make clips like this"
  "with AI and earn money"
  "on make.fun"
  "make.fun/bounty/gta6-clipper-01" (yellow)
- Audio: VOD audio kept through the action (Windah's Indonesian
  commentary + game audio), pitch bed is VOD audio 3:52:03–3:52:10
  dropped to 0.3, faded out at the end.

## Render
Two stages, ffmpeg in this session.
Stage 1 (plain): three -ss inputs from windah-vod1-360p.webm
(seg1 13710–13750, seg2 13880–13923, pitch audio 13923–13930),
blur-fill to 1080x1920, hook text "JASON TIDUR BARENG CAL?!" on the
action, pitch card, libx264 crf 20.
Filter script: windah_render_filter_90s.txt.
Output: windah-clip-90s-plain.mp4, 1080x1920, 90.0s, ~27 MB, h264 + aac.
Stage 2 (meme): meme overlays on top of the plain render, audio copied
as-is. Filter script: windah_render_filter_90s_meme.txt.
Output: windah-clip-90s-meme.mp4, 1080x1920, 90.0s, 27,138,064 bytes,
h264 + aac. This meme version is the version to upload.

## Verification (frames from the finished meme file, meme90_verify/)
- ~2s (mv_2.jpg): white title bar legible, caption "MAIN BARENG CAL"
  legible, Cal on the couch with a controller, Windah facecam visible.
- ~30s (mv_30.jpg): title bar legible, Jason & Cal on the couch
  talking, Windah facecam visible.
- ~41s (mv_41.jpg): jump cut landed — caption "KEESOKAN PAGI"
  legible, Jason & Cal lying together in the dark room, Windah reacting.
- ~50s (mv_50.jpg): bed scene zoom — Cal's arm on Jason's chest,
  both in bed, caption "TIDUR BARENG?!" legible. (Facecam mostly out
  of frame during this 2s zoom only, same as the Bigfoot meme build.)
- ~52s (mv_52.jpg): facecam zoom — Windah's reaction large,
  Jason in bed, caption legible.
- ~61s (mv_61.jpg): phone zoom — Jason shirtless in underwear on the
  phone, caption "SALAH PAHAM!" legible, facecam visible.
- ~86s (mv_86.jpg): pitch card — "Make clips like this with AI and
  earn money on make.fun" (white) and
  "make.fun/bounty/gta6-clipper-01" (yellow), all legible on black.

## Backup candidate (verified, NOT used)
GAMEPLAY #4 — "JASON DAN LUCIA DI FITNAH DEG DEGAN BANGET....
GAMEPLAY #4", video ID 03qhcshfeMY,
https://www.youtube.com/watch?v=03qhcshfeMY — verified with yt-dlp:
duration 13944s (3:52:24), upload date 20261120, channel Windah
Basudara, was_live, 3,697,824 views. This is the 20 Nov 2026 live
(the "live semalam" the user mentioned). It was NOT downloaded or
surveyed, because #1 produced a good moment; it remains the backup
source if another clip is wanted.

## Upload — title and description for @kliperdedi
Title: "Windah Basudara: Jason Tidur Bareng Cal?! 😱 #GTA6 #Shorts"

Description (exact bounty line + play code):
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: makefun-chestnut-adobe-axle
#GTA6 #Shorts

Upload: user uploads windah-clip-90s-meme.mp4 (90s meme version;
plain windah-clip-90s-plain.mp4 is kept as a fallback) to YouTube
@kliperdedi as a public video, description as above, kept public
until results are out.
Do NOT edit VIDEO.json and do NOT push to GitHub yet — the parent agent
handles VIDEO.json and submission after the user sends the published
link. NOTE: this is a SECOND, different clip from the Bigfoot 30s meme
clip (windah-clip-30s-meme.mp4) — the parent must decide which one is
the entry (or check the kit rules on a second entry) before submitting.
