import assert from "node:assert/strict";
import { access, readFile, readdir } from "node:fs/promises";
import test from "node:test";
import { clamp, sceneProgress, sceneValues, mountScrollMotion } from "../app/lib/scroll-motion.mjs";

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

test("ships the dusk theme, artwork, and reduced-motion support", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");
  assert.match(html, /studio-loop\.webp/);
  assert.match(html, /Pause motion/);
  await access(new URL("studio-loop.webp", root));
  const theme = await readFile(new URL("../app/flagship.css", import.meta.url), "utf8");
  assert.match(theme, /prefers-reduced-motion: reduce/);
  assert.match(theme, /data-motion="paused"/);
  assert.match(theme, /html, body \{ background: var\(--canvas\)/);
  const tokens = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  assert.match(tokens, /--canvas: #1b2434/);
  assert.match(html, /data-scroll-scene="hero"/);
  assert.match(html, /data-scroll-scene="routine"/);
  assert.match(html, /data-scroll-scene="band"/);
  assert.match(theme, /\.spotlight-grid \{ position: static/);
});

test("scroll choreography stays bounded and is gentler on mobile", () => {
  assert.equal(clamp(-1), 0);
  assert.equal(clamp(2), 1);
  assert.equal(sceneProgress("hero", 88, 730, 900), 0);
  assert.equal(sceneProgress("hero", -1460, 730, 900), 1);
  assert.equal(sceneProgress("routine", 118, 1500, 900, true), 0);
  assert.equal(sceneProgress("routine", -600, 1500, 900, true), 1);
  for (const kind of ["hero", "routine", "band"]) {
    for (const p of [-10, 0, .5, 1, 10]) {
      for (const value of Object.values(sceneValues(kind, p))) assert.ok(Number.isFinite(parseFloat(value)));
    }
  }
  assert.ok(parseFloat(sceneValues("hero", 1, true)["--art-y"]) < parseFloat(sceneValues("hero", 1)["--art-y"]));
  assert.equal(sceneValues("routine", 1)["--phone-turn"], "0.00deg");
  assert.equal(sceneValues("routine", 1)["--routine-progress"], "1.0000");
});

test("shared dusk-theme text and button tokens retain readable contrast", async () => {
  const css = await readFile(new URL("../app/globals.css", import.meta.url), "utf8");
  const tokens = Object.fromEntries([...css.matchAll(/--([\w-]+): (#[\da-f]{6});/g)].map((match) => [match[1], match[2]]));
  const luminance = (hex) => {
    const rgb = hex.slice(1).match(/../g).map((channel) => parseInt(channel, 16) / 255)
      .map((channel) => channel <= .04045 ? channel / 12.92 : ((channel + .055) / 1.055) ** 2.4);
    return rgb[0] * .2126 + rgb[1] * .7152 + rgb[2] * .0722;
  };
  const contrast = (a, b) => {
    const [lighter, darker] = [luminance(a), luminance(b)].sort((a, b) => b - a);
    return (lighter + .05) / (darker + .05);
  };
  for (const background of ["canvas", "canvas-deep", "panel", "panel-2"]) {
    for (const text of ["ink", "muted", "accent", "coral", "aqua"]) {
      assert.ok(contrast(tokens[text], tokens[background]) >= 4.5, `${text} on ${background}`);
    }
  }
  assert.ok(contrast("#ffffff", tokens["accent-fill"]) >= 4.5);
});

test("scroll controller batches events, suspends hidden tabs, and fully cleans up", () => {
  const listeners = new Map();
  const pending = new Map();
  const properties = new Map();
  const style = { setProperty: (key, value) => properties.set(key, value), removeProperty: (key) => properties.delete(key) };
  const steps = Array.from({ length: 4 }, () => ({ dataset: {} }));
  const scene = { dataset: { scrollScene: "routine" }, style, querySelectorAll: () => steps, getBoundingClientRect: () => ({ top: -600, height: 1500, bottom: 900 }) };
  let serial = 0;
  const events = { addEventListener: (name, callback) => listeners.set(name, callback), removeEventListener: (name) => listeners.delete(name) };
  const doc = { ...events, hidden: false, documentElement: { scrollHeight: 3000, style }, querySelectorAll: () => [scene] };
  const win = { ...events, innerHeight: 900, innerWidth: 1440, scrollY: 2100, requestAnimationFrame: (callback) => { pending.set(++serial, callback); return serial; }, cancelAnimationFrame: (id) => pending.delete(id) };
  const flush = () => { const callbacks = [...pending.values()]; pending.clear(); callbacks.forEach((callback) => callback()); };
  const stop = mountScrollMotion(doc, win);
  listeners.get("scroll")(); listeners.get("scroll")(); listeners.get("resize")();
  assert.equal(pending.size, 1);
  flush();
  assert.equal(pending.size, 0, "must not start a perpetual frame loop");
  assert.equal(properties.get("--page-progress"), "1.0000");
  assert.equal(steps[3].dataset.active, "true");
  assert.equal(steps.filter((step) => step.dataset.active === "true").length, 1);
  listeners.get("scroll")();
  doc.hidden = true; listeners.get("visibilitychange")();
  assert.equal(pending.size, 0);
  listeners.get("scroll")(); assert.equal(pending.size, 0);
  doc.hidden = false; listeners.get("visibilitychange")();
  assert.equal(pending.size, 1);
  stop();
  assert.equal(pending.size, 0);
  assert.equal(listeners.size, 0);
  assert.equal(properties.size, 0);
  assert.ok(steps.every((step) => !Object.hasOwn(step.dataset, "active")));
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
