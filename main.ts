import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Advice I wish I had heard: the warning first, then why it matters.
const warning =
  "Don't send that message at 2 a.m. — you'll regret it by breakfast, and screenshots don't forget.";
const reason =
  "It mattered because one careless night cost me a friendship, and now I sleep on every angry draft.";

function buildEntry(lines: string[]): string {
  return lines.join("\n");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";
const entry = buildEntry([warning, reason]);

if (entry.length < 1 || entry.length > 280) {
  throw new Error(`entry must be 1-280 characters, got ${entry.length}`);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
console.log(`wrote ${entry.length} characters to ${join(outDir, "entry.txt")}`);
