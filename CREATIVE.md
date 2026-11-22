# Creative decision — Windah Ketemu UFO (30s), gta6-clipper-01, swap 2026-11-22

This entry replaces the 90-second Jason & Cal clip (submitted 2026-11-21,
submission 01a1fcee-cc9c-71ea-9ef5-9addf7a71a63). The user approved the swap
2026-11-22 ~20:12 WIB ("Ya, swap ke UFO"). The UFO clip was already the
channel's top video (489 views as of ~19:30 WIB 2026-11-22, still climbing)
against the submitted 90s entry's 20 views, so it is the final entry.

## Source — GAMEPLAY #5 (NOT Bigfoot, NOT the shoe store)
- Windah Basudara, "AKU KETEMU BAYI ALIEN DAN UFO.... Grand Theft Auto VI GAMEPLAY #5"
- VOD URL: https://www.youtube.com/watch?v=lF_QYSm2T-Q
- Video ID: lF_QYSm2T-Q, channel: Windah Basudara, upload date 2026-11-21
- Duration 17835s (~4:57), downloaded with yt-dlp to windah-vod5-360p.mp4
  (640x360, 30fps).

## Moment chosen — Lucia meets a UFO in the dark forest
Lucia walks through a dark forest at night and finds a strange light
between the trees. It turns out to be a real flying saucer hovering
with a beam of light down to the ground. Lucia stands in the middle of
the beam, Windah gasps (mouth open, hand over mouth), photographs the
UFO with the in-game photo mode, then a small figure floats up inside
the beam. Punchline: Lucia "What... the fuck?" at the end.

VOD 3:27:55–3:28:40 (45s continuous), cut to 23s of action + 7s pitch:
- 3:27:55–3:28:05 (clip 0–8s): dark forest, light in the distance,
  the UFO saucer appears + beam comes down, Windah gasps, photo mode
- 3:28:14–3:28:20 (clip 8–13s): Lucia silhouetted standing in the beam
- 3:28:28–3:28:40 (clip 13–23s): small figure floats up in the beam,
  punchline "What... the fuck?"
- Clip 23–30s: make.fun pitch card (black background, "Make clips like
  this with AI and earn money on make.fun / make.fun/bounty/gta6-clipper-01",
  silent audio)

Cut out: the 8–19s pause (UFO hovering + Windah's reaction) and the
phone-photo beat at 30–33s + the start of the floating figure at 33–35s.
Cut points were verified from frames: new second 8 = Lucia floating in
the beam, new second 13 = UFO + beam + small figure in the beam, new
second 22 = Lucia under the saucer (punchline intact), new second 26 =
pitch card fully legible. Every required beat (hook, UFO + beam, Lucia
in the beam, floating figure, punchline) is kept — 30s total without
cutting the punchline.

Why it works for 30s: one self-contained little story with a clear
hook (strange light in the dark), a visual payoff that needs no mission
context (a real UFO saucer + beam + a floating figure), and a spoken
punchline. It is NOT the Bigfoot moment and NOT any of the three moments
already entered by other accounts (seaplane "Gone Fishing", 1 HP WASTED
warehouse, "Windah Perfect landing").

## Edit structure — three segments, jump cuts
The 23s of action is a jump cut of the 45s VOD moment (the phone beat
and pauses are cut), bridged by the meme captions.
Segment A: VOD 3:27:55–3:28:05 (original clip 0–8s), 8.0s — hook,
  UFO appears + beam, Windah gasps.
Segment B: VOD 3:28:14–3:28:20 (original clip 19–24s), 5.0s — Lucia
  in the beam.
Segment C: VOD 3:28:28–3:28:40 (original clip 35–45s), 10.0s —
  floating figure + punchline.
Total action 23.0s + pitch 7.0s = 30.0s.

## Creative
- Format: vertical 1080x1920, 30.0s total. Source is 640x360 16:9,
  so blur-fill: full frame scaled to 1080 wide, centred, over a blurred
  enlarged copy filling the vertical frame.
- Meme style (built on top of the plain 45s render, cut to 30s):
  * Title bar (whole action, 0–23s): white strip across the top,
    y=0–230, bold black all-caps DejaVuSans-Bold 62px centred:
    "WINDAH KETEMU UFO".
  * Punch-in zooms (crop + scale back to 1080x1920, hard cuts):
    - 2–6s: 1.35x on the UFO saucer appearing
    - 8–13s: 1.35x on Lucia in the beam
    - 13–18s: 1.35x on the floating figure in the beam
  * Meme captions (DejaVuSans-Bold 92px, white with 5px black outline,
    centred at y=1420 in the blurred lower band — never covering the
    facecam or the gameplay):
    - "ADA CAHAYA?!" 0–3s (dark forest, light in the distance)
    - "UFO BENERAN" 3–8s (saucer + beam)
    - "LUCIA KENA SOROT" 8–13s (Lucia in the beam)
    - "MELAYANG?!" 13–18s (figure floating up)
    - "APAAN TUH?!" 18–23s (punchline)
- Pitch 23.0–30.0s, text on screen, black background, same wording/
  layout as the earlier clips:
  "Make clips like this"
  "with AI and earn money"
  "on make.fun"
  "make.fun/bounty/gta6-clipper-01" (yellow)
- Audio: VOD audio kept through the action (Windah's Indonesian
  commentary + game audio), plus 4 real SUFIS soundboard effects
  (from the user's SUFIS compilation video, sfx/user/sufis-100-sfx.m4a),
  mixed with a 0.95 limiter and measured against the surrounding audio:
  * "omaga hell nah" 3.0s — UFO appears (+9.3 dB)
  * "anime wow" 8.0s — Lucia in the beam (+4.3 dB)
  * "basic beam" 13.0s — figure floating in the beam (+10.1 dB)
  * "boy what the hell" 18.0s — reaction before the punchline (+5.3 dB)
  No effect sits on top of the punchline dialogue (22–23s is clean).
  The pitch card is silent.

## Render
Two stages, ffmpeg.
Stage 1 (plain): three -ss inputs from windah-vod5-360p.mp4
(segments A/B/C), blur-fill to 1080x1920, pitch card, libx264 crf 20.
Stage 2 (meme): meme overlays on top of the plain render, SFX mixed
into the audio. Filter scripts kept with the build files.
Output: windah-clip-30s-nonbounty4-meme-pitch-sfx.mp4, 1080x1920,
30.000s, 8,275,591 bytes, h264 + aac. This is the version uploaded.
The 45s version (windah-clip-45s-nonbounty4-meme-sfx.mp4) is kept as
a fallback and was NOT overwritten.

## Verification (frames from the finished file)
- 1s: white title bar legible, caption "ADA CAHAYA?!" legible,
  dark forest + beam of light.
- 4s: UFO saucer + beam, caption "UFO BENERAN" legible.
- 8s: Lucia silhouetted in the beam, caption "LUCIA KENA SOROT".
- 13s: small figure floating in the beam, caption "MELAYANG?!".
- 22s: Lucia under the saucer, punchline intact.
- 26s: pitch card — "Make clips like this with AI and earn money
  on make.fun" (white) and "make.fun/bounty/gta6-clipper-01" (yellow),
  all legible on black.
- ffprobe: 1080x1920, 30.000s, h264 + AAC. SFX levels measured per
  window (see table above).

## Candidates surveyed but not chosen (GAMEPLAY #5)
- Alien dream 4:24:40–4:25:20 (Lucia falls in a void, "Where the hell
  am I?") — rejected: first 5s still show Lucia in bed.
- Lab baby alien 4:43:00–4:44:24 (scientist voiceover "taste for
  milk... Raw. Cow's milk", "cattle abductions") — rejected: visuals
  almost static for 45s (Lucia standing still in a dark lab).
- Baby alien held 4:49:00–4:49:45 (Lucia holding the alien baby, the
  stream's title moment) — rejected: first 25s almost totally black
  (running in a dark bunker).
- Cow in the dream 4:32:35–4:33:20 (cow appears in the void, Windah
  laughs) — backup, weaker than the UFO.

## Upload — title and description for @kliperdedi
Title (user's own): "Windah Ketemu UFO di GTA 6! #GTA6 #Shorts #windahbasudara"
URL: https://www.youtube.com/shorts/UeuDGbOaYsI
Duration: 30s (verified with yt-dlp 2026-11-22 ~19:30 WIB), public.
Views: 489 as of ~19:30 WIB 2026-11-22 (316 at ~16:23 WIB), still
climbing — the channel's top video, ahead of the submitted 90s entry
(20 views) and the Bigfoot 30s clip (36 views).

Description (exact bounty line + play code, verified on the video):
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
Play code: makefun-chestnut-adobe-axle
#GTA6 #Shorts

The video stays public until the results are out. This submission
replaces the 90s Jason & Cal entry (submission
01a1fcee-cc9c-71ea-9ef5-9addf7a71a63) — per the bounty rules, the last
submission before the deadline (2026-11-23 08:00 WIB) is the final entry.
