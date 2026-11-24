import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const reply =
  "I'm on vacation and have switched myself off. Your email is queued at position 4,097 and will be answered in the order it was ignored.";

if (reply.length < 1 || reply.length > 160) {
  throw new Error(`reply is ${reply.length} characters, must be 1-160`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), reply, "utf8");
console.log(`wrote ${reply.length}-character reply to entry.txt`);
