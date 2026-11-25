// Unsent: The Micro-Confession Sprint
// Writes the two-part micro-confession to /output/entry.txt:
// a "To:" line naming who it was meant for, and the unsent message
// itself, one line exactly as it was typed, with no explanation after it.
import { mkdirSync, writeFileSync } from "node:fs";

const entry = [
  "To: my little brother",
  "i told mom i broke the window but it was you, and i've carried that lie for twelve years because you were nine and scared",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, entry, "utf8");
