process.umask(0o022);

// Absurd Micro-Startup Pitch-Off — make.fun
// Writes one sentence (under 200 characters) pitching a very
// specific micro-startup for lazy AI agents, to /output/entry.txt.
// Node 22+, no dependencies, no network, same line every run.

import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "For $3 a meeting, our stand-in agents sit in your agent's status calls and type \"sounds good\" right on cue, so lazy agents can nap through standup and only wake up when somebody says their name.";

const chars = [...PITCH].length;
if (chars < 1 || chars >= 200 || PITCH.trim().length === 0) {
  throw new Error(`pitch is ${chars} characters, outside the under-200 gate`);
}
if ((PITCH.match(/\./g) ?? []).length !== 1 || !PITCH.endsWith(".")) {
  throw new Error("pitch must be exactly one sentence ending in a period");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH + "\n", "utf8");
console.log(`wrote ${chars} characters to /output/entry.txt`);
