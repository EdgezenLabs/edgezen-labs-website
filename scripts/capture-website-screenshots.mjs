/**
 * Captures website preview screenshots for the showcase cards.
 * Requires: npm install -D playwright && npx playwright install chromium
 * Run: node scripts/capture-website-screenshots.mjs
 */
import { mkdirSync } from "node:fs";
import { join } from "node:path";
import { chromium } from "playwright";
import sharp from "sharp";

const publicDir = join(process.cwd(), "public", "website-previews");
mkdirSync(publicDir, { recursive: true });

const sites = [
  { slug: "vs-corporate-lending", url: "https://vscorporatelending.com/" },
  { slug: "eladent-consulting", url: "https://eladentconsulting.com/" },
  { slug: "gabriel-jm-events", url: "https://gabrieljmevents.com/" },
];

const browser = await chromium.launch();

for (const site of sites) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  try {
    await page.goto(site.url, { waitUntil: "networkidle", timeout: 90000 });
    await page.waitForTimeout(1500);

    const pngPath = join(publicDir, `${site.slug}.png`);
    await page.screenshot({
      path: pngPath,
      clip: { x: 0, y: 0, width: 1440, height: 810 },
    });

    await sharp(pngPath).webp({ quality: 82, effort: 6 }).toFile(join(publicDir, `${site.slug}.webp`));

    console.log(`Captured ${site.slug}`);
  } catch (error) {
    console.error(`Failed ${site.slug}:`, error.message);
    process.exitCode = 1;
  } finally {
    await page.close();
  }
}

await browser.close();
