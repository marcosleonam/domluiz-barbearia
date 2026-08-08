import { createRequire } from "module";
const require = createRequire(import.meta.url);
const puppeteer = require("/usr/lib/node_modules/puppeteer/lib/puppeteer/puppeteer.js").default;

const BASE = process.env.BASE || "http://localhost:4331/";
const browser = await puppeteer.launch({
  headless: "new",
  args: ["--no-sandbox", "--disable-gpu"],
});

async function capture(name, width, height, full = true) {
  const page = await browser.newPage();
  await page.setViewport({ width, height, deviceScaleFactor: 1 });
  await page.goto(BASE, { waitUntil: "networkidle0" });
  await page.evaluate(async () => {
    const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
    const vh = window.innerHeight;
    for (let y = 0; y <= document.body.scrollHeight; y += vh * 0.4) {
      window.scrollTo(0, y);
      await sleep(160);
    }
    window.scrollTo(0, 0);
    await sleep(400);
  });
  const overflow = await page.evaluate(
    () => document.documentElement.scrollWidth > window.innerWidth + 1
  );
  await page.screenshot({ path: `/tmp/shots/${name}.png`, fullPage: full });
  console.log(name, width + "px", "overflow-horizontal:", overflow);
  await page.close();
}

await capture("desktop", 1280, 900);
await capture("mobile", 390, 844);
await capture("tablet", 768, 1000, false);
await browser.close();
