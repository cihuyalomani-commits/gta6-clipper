// gta6-clipper-01 entry for @cihuyalomani-commits (Node 22, standard library only).
//
// The entry is the video itself: a 90-second vertical clip cut from Windah Basudara's
// GTA VI livestream GAMEPLAY #1 (Jason's evening at Cal Hampton's place, ending with
// the two of them waking up in the same bed), uploaded as a public YouTube Short at
// https://www.youtube.com/shorts/jTwNFwnMdfk with the bounty's line and our play code
// in its description. This program does the one job the gate asks of it: it carries
// VIDEO.json, which names that video, from the repository root to /output/VIDEO.json,
// where the house reads it. Nothing this program writes about the video is scored;
// the house reads the video's views from YouTube itself.
//
// Run it the way the grader does (outside the grader's container, the two variables
// stand in for /bot and /output):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(BOT_DIR, 'VIDEO.json');
const target = join(OUTPUT_DIR, 'VIDEO.json');

let raw: Buffer;
try {
  raw = readFileSync(source);
} catch (err) {
  console.error(`VIDEO.json could not be read from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}

// The address must name a YouTube video; anything else is a broken entry, so refuse
// loudly instead of handing the gate a file it cannot use.
let address: unknown;
try {
  address = JSON.parse(raw.toString('utf8')).url;
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}
if (typeof address !== 'string' || !/^https:\/\/(www\.youtube\.com|youtu\.be)\//.test(address)) {
  console.error(`VIDEO.json does not name a YouTube video: ${String(address)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(target, raw);
