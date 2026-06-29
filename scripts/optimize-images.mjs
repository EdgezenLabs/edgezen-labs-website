/**
 * Converts large PNG assets in public/ to WebP.
 * Run: node scripts/optimize-images.mjs
 */
import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");

const targets = [
  { file: "expeniqo-logo.png", quality: 85 },
  { file: "cardclash.png", quality: 85 },
  { file: "gstledger-logo.png", quality: 85 },
  { file: "briktra_app_mockup.png", quality: 82 },
  { file: "edgezen-logo-cropped.png", quality: 80, width: 512 },
];

for (const { file, quality, width } of targets) {
  const input = join(publicDir, file);
  if (!existsSync(input)) {
    console.warn(`skip (missing): ${file}`);
    continue;
  }

  const output = join(publicDir, file.replace(/\.(png|jpe?g)$/i, ".webp"));
  let pipeline = sharp(input);
  if (width) {
    pipeline = pipeline.resize({ width, withoutEnlargement: true });
  }
  const before = statSync(input).size;
  await pipeline.webp({ quality, effort: 6 }).toFile(output);
  const after = statSync(output).size;
  console.log(`${file} → ${file.replace(/\.(png|jpe?g)$/i, ".webp")} (${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB)`);
}
