/**
 * Visual Comparator — opens all sites in one browser window (one tab each)
 * and takes full-page screenshots at 16-inch laptop resolution.
 *
 * Sites compared:
 *   1. Your local site       → localhost:3000
 *   2. Eveningsidelabs       → https://www.eveningsidelabs.com/
 *   3. Krishaweb             → https://www.krishaweb.com/
 *   4. Bacancy Technology    → https://www.bacancytechnology.com/
 *
 * Usage:
 *   npm run compare                        — screenshots + open all tabs
 *   npm run compare -- --screenshots-only  — only take screenshots, no browser stays open
 *   npm run compare -- --url /about        — append a route to your local site
 */

import { chromium } from 'playwright';
import { mkdirSync } from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

// 16-inch laptop viewport (MacBook Pro 16" scaled resolution)
const VIEWPORT = { width: 1728, height: 1080 };

const args = process.argv.slice(2);
const screenshotsOnly = args.includes('--screenshots-only');
const routeFlag = args.indexOf('--url');
const route = routeFlag !== -1 ? args[routeFlag + 1] : '/';
const LOCAL_URL = (process.env.LOCAL_URL || 'http://localhost:3000').replace(/\/$/, '') + route;

const SITES = [
  { label: 'Your Site',        url: LOCAL_URL,                              file: '1-your-site.png' },
  { label: 'Eveningsidelabs',  url: 'https://www.eveningsidelabs.com/',     file: '2-eveningsidelabs.png' },
  { label: 'Krishaweb',        url: 'https://www.krishaweb.com/',           file: '3-krishaweb.png' },
  { label: 'Bacancy',          url: 'https://www.bacancytechnology.com/',   file: '4-bacancy.png' },
];

const SCREENSHOTS_DIR = resolve(__dirname, '../screenshots');

(async () => {
  mkdirSync(SCREENSHOTS_DIR, { recursive: true });

  console.log('\n🎭  Playwright Visual Comparator');
  console.log('════════════════════════════════════════════');
  console.log(`  Viewport : ${VIEWPORT.width} × ${VIEWPORT.height} (16-inch laptop)`);
  console.log(`  Output   : screenshots/`);
  console.log('════════════════════════════════════════════\n');

  const browser = await chromium.launch({ headless: false });

  // One persistent context — all tabs share the same window
  const context = await browser.newContext({ viewport: VIEWPORT });

  const pages = [];

  for (const site of SITES) {
    const page = site === SITES[0]
      ? await context.newPage()         // first tab already exists
      : await context.newPage();

    pages.push({ page, site });

    process.stdout.write(`  → Opening ${site.label.padEnd(20)} ${site.url} ... `);

    try {
      await page.goto(site.url, { waitUntil: 'networkidle', timeout: 30000 });
      process.stdout.write('loaded\n');
    } catch {
      process.stdout.write('⚠  timeout / unreachable\n');
    }

    // Take full-page screenshot at the exact viewport width
    const screenshotPath = resolve(SCREENSHOTS_DIR, site.file);
    await page.screenshot({
      path: screenshotPath,
      fullPage: true,
    });
    console.log(`     📸 Saved → screenshots/${site.file}`);
  }

  console.log('\n════════════════════════════════════════════');
  console.log('  All screenshots saved to screenshots/');
  console.log('  Switch between tabs in the browser to compare live.');
  console.log('  Close the browser window to exit.\n');

  if (screenshotsOnly) {
    await browser.close();
    console.log('👋 Done.\n');
    return;
  }

  // Wait until the user closes the browser
  await Promise.race(
    pages.map(({ page }) => page.waitForEvent('close', { timeout: 0 }))
  ).catch(() => {});

  await browser.close();
  console.log('👋 Comparator closed.\n');
})();
