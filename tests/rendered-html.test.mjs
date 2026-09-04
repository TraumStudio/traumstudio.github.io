import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);

test("exports the Traum Studio homepage", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /Traum Studio/);
  assert.match(html.replace(/<[^>]+>/g, " "), /Apps with\s+purpose/);
  assert.match(html, /TapRoutine/);
  assert.match(html, /Math Alarm/);
  assert.match(html, /Hide &amp; Seek|Hide & Seek/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("ships the bright design, artwork, and reduced-motion support", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /studio-loop\.webp/);
  assert.match(html, /Pause motion/);
  await access(new URL("studio-loop.webp", root));
  const theme = await readFile(new URL("../app/flagship.css", import.meta.url), "utf8");
  assert.match(theme, /prefers-reduced-motion: reduce/);
  assert.match(theme, /data-motion="paused"/);
  assert.match(theme, /html, body \{ background: #fff/);
});

test("uses the confirmed public contact address", async () => {
  const html = await readFile(new URL("contact.html", root), "utf8");
  assert.match(html, /mailto:traumclatix@gmail\.com/);
  assert.doesNotMatch(html, /hello@traumstudio\.example/);
});

test("free and paid policies accurately distinguish their editions", async () => {
  const free = await readFile(new URL("privacy/taproutine.html", root), "utf8");
  const paid = await readFile(new URL("privacy/taproutine-pro.html", root), "utf8");
  for (const html of [free, paid]) {
    assert.match(html, /Privacy Policy/);
    assert.match(html, /mailto:traumclatix@gmail\.com/);
    assert.match(html, /Traum Studio/);
    assert.match(html, /device-to-device transfers/);
    assert.match(html, /Support messages and this website/);
    assert.match(html, /Legal bases and your privacy rights/);
    assert.doesNotMatch(html, /\[INSERT|\[Developer|\[Support|Launch note|product-ready policy/);
  }
  assert.match(free, /com\.traum\.taproutine<\/code>/);
  assert.match(free, /Advertising consent and privacy choices/);
  assert.match(free, /optional and off by default/);
  assert.match(paid, /com\.traum\.taproutine\.paid/);
  assert.match(paid, /does not request Android/);
  assert.match(paid, /No advertising or in-app upgrades/);
  assert.doesNotMatch(paid, /id="consent"/);
});

test("every privacy section is reachable from the contents", async () => {
  for (const page of ["privacy/taproutine.html", "privacy/taproutine-pro.html"]) {
    const html = await readFile(new URL(page, root), "utf8");
    for (const match of html.matchAll(/href="#([^"]+)"/g)) {
      assert.ok(html.includes(`id="${match[1]}"`), `${page}: missing anchor ${match[1]}`);
    }
  }
});

test("every local navigation destination and image is exported", async () => {
  const paths = await readdir(root, { recursive: true });
  const files = new Set(paths.map((path) => path.replaceAll("\\", "/")));
  for (const file of files) {
    if (!file.endsWith(".html")) continue;
    const html = await readFile(new URL(file, root), "utf8");
    for (const match of html.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
      const target = decodeURIComponent(match[1].slice(1));
      assert.ok(target === "" || files.has(target) || files.has(`${target}.html`) || files.has(`${target}/index.html`), `${file}: missing ${target}`);
    }
    assert.doesNotMatch(html, /sites\.google\.com\/d\/[^\s]+\/edit/, `${file}: must not link a private policy editor`);
  }
});

test("exports key product and trust pages", async () => {
  const pages = [
    "apps/taproutine.html",
    "apps/math-alarm.html",
    "apps/hide-and-seek.html",
    "support.html",
    "privacy.html",
    "privacy/taproutine.html",
    "privacy/taproutine-pro.html",
    "terms.html",
    "contact.html",
    "sitemap.xml",
    "robots.txt",
  ];
  await Promise.all(pages.map((page) => access(new URL(page, root))));
});
