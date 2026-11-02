// @astrojs/vercel 7.x only knows Node 18 and 20. On any other build Node (Vercel now
// builds with 22) it writes "nodejs18.x", which Vercel rejects at deploy time.
// This rewrites each function's runtime to the Node major that ran the build.
// shortcut: patches adapter output; delete once on Astro 5 + @astrojs/vercel >= 8.
import { readdirSync, readFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const dir = ".vercel/output/functions";
const runtime = `nodejs${process.versions.node.split(".")[0]}.x`;

if (!existsSync(dir)) {
  console.error(`fix-vercel-runtime: ${dir} not found. Run astro build first.`);
  process.exit(1);
}

for (const file of readdirSync(dir, { recursive: true })) {
  if (!file.endsWith(".vc-config.json")) continue;
  const path = join(dir, file);
  const config = JSON.parse(readFileSync(path, "utf8"));
  if (config.runtime === runtime || config.runtime === "edge") continue;
  console.log(`fix-vercel-runtime: ${path} ${config.runtime} -> ${runtime}`);
  config.runtime = runtime;
  writeFileSync(path, JSON.stringify(config, null, 2));
}
