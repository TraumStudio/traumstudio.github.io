import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../dist/client/", import.meta.url);

test("exports the Traum Studio homepage", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /Traum Studio/);
  assert.match(html, /Apps with purpose/);
  assert.match(html, /TapRoutine/);
  assert.match(html, /Math Alarm/);
  assert.match(html, /Hide &amp; Seek|Hide & Seek/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/);
});

test("exports key product and trust pages", async () => {
  const pages = [
    "apps/taproutine.html",
    "apps/math-alarm.html",
    "apps/hide-and-seek.html",
    "support.html",
    "privacy.html",
    "terms.html",
    "contact.html",
    "sitemap.xml",
    "robots.txt",
  ];
  await Promise.all(pages.map((page) => access(new URL(page, root))));
});
