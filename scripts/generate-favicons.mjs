/**
 * Generates favicon assets from the icon-only EdgeZen mark.
 * Run: node scripts/generate-favicons.mjs
 */
import { join } from "node:path";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public");
const source = join(publicDir, "edgezen-logo-cropped.png");

const icon = sharp(source).trim().resize(512, 512, {
  fit: "contain",
  background: { r: 0, g: 0, b: 0, alpha: 0 },
});

const outputs = [
  { file: "favicon-16x16.png", size: 16 },
  { file: "favicon-32x32.png", size: 32 },
  { file: "apple-touch-icon.png", size: 180 },
  { file: "android-chrome-192x192.png", size: 192 },
  { file: "android-chrome-512x512.png", size: 512 },
];

for (const { file, size } of outputs) {
  await icon
    .clone()
    .resize(size, size, {
      fit: "contain",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(join(publicDir, file));
  console.log(`Wrote ${file}`);
}

// favicon.ico — 32px PNG-based (widely supported)
await icon
  .clone()
  .resize(32, 32, {
    fit: "contain",
    background: { r: 0, g: 0, b: 0, alpha: 0 },
  })
  .toFile(join(publicDir, "favicon.ico"));

console.log("Wrote favicon.ico");
