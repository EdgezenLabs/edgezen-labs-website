/**
 * Validates every registered image path exists in public/ (and dist/ after build).
 * Run: node scripts/audit-assets.mjs
 */
import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const root = process.cwd();
const publicDir = join(root, "public");

const checkDist = process.argv.includes("--dist");

/** Parse exported paths from src/lib/assets.ts */
function loadAssetPaths() {
  const assetsFile = readFileSync(join(root, "src/lib/assets.ts"), "utf8");
  const paths = new Set();

  for (const match of assetsFile.matchAll(/src:\s*"([^"]+)"/g)) {
    paths.add(match[1]);
  }
  for (const match of assetsFile.matchAll(/webp:\s*"([^"]+)"/g)) {
    paths.add(match[1]);
  }
  for (const match of assetsFile.matchAll(/logo:\s*"([^"]+\.(?:png|jpe?g|webp|svg|ico))"/g)) {
    paths.add(match[1]);
  }
  for (const match of assetsFile.matchAll(/icon:\s*"([^"]+\.(?:png|jpe?g|webp|svg|ico))"/g)) {
    paths.add(match[1]);
  }

  return [...paths].sort();
}

/** Scan src for hardcoded /public image paths not in assets manifest */
function scanHardcodedPaths() {
  const srcDir = join(root, "src");
  const paths = new Set();
  const pattern = /["'`]\/([a-zA-Z0-9_./-]+\.(?:png|jpe?g|webp|svg|ico))["'`]/g;

  function walk(dir) {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
        continue;
      }
      if (!/\.(tsx?|jsx?)$/.test(entry.name)) continue;

      const content = readFileSync(full, "utf8");
      for (const match of content.matchAll(pattern)) {
        paths.add(`/${match[1]}`);
      }
    }
  }

  walk(srcDir);
  return [...paths].sort();
}

const manifestPaths = loadAssetPaths();
const hardcodedPaths = scanHardcodedPaths();
const missing = [];
const orphanHardcoded = [];

for (const assetPath of manifestPaths) {
  const file = join(publicDir, assetPath.replace(/^\//, ""));
  if (!existsSync(file)) {
    missing.push({ path: assetPath, file: relative(root, file) });
  }
}

const manifestSet = new Set(manifestPaths);
for (const path of hardcodedPaths) {
  if (!manifestSet.has(path)) {
    orphanHardcoded.push(path);
  }
}

let failed = false;

if (missing.length) {
  failed = true;
  console.error("\n❌ Missing files in public/:");
  for (const item of missing) {
    console.error(`  ${item.path} → ${item.file}`);
  }
}

if (orphanHardcoded.length) {
  failed = true;
  console.error("\n❌ Hardcoded image paths in src/ not in assets manifest:");
  for (const path of orphanHardcoded) {
    console.error(`  ${path}`);
  }
}

if (checkDist && existsSync(join(root, "dist"))) {
  const distMissing = manifestPaths.filter((p) => !existsSync(join(root, "dist", p.replace(/^\//, ""))));
  if (distMissing.length) {
    failed = true;
    console.error("\n❌ Missing files in dist/ after build:");
    for (const path of distMissing) {
      console.error(`  ${path}`);
    }
  }
}

const publicSize = manifestPaths.reduce((sum, p) => {
  const file = join(publicDir, p.replace(/^\//, ""));
  return sum + (existsSync(file) ? statSync(file).size : 0);
}, 0);

console.log(`\n✓ Audited ${manifestPaths.length} registered assets (${Math.round(publicSize / 1024)} KB total)`);
console.log(`✓ Scanned ${hardcodedPaths.length} hardcoded paths in src/`);

if (failed) {
  process.exit(1);
}

console.log("✓ All image assets present\n");
