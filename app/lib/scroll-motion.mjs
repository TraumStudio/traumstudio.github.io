export const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));

/** Bounded transforms: no scroll interception, timers, or perpetual frame loop. */
export function sceneProgress(kind, top, height, viewport, cinematic = false) {
  if (kind === "hero") return clamp(-top / Math.max(height, 1));
  if (kind === "routine" && cinematic) {
    return clamp((118 - top) / Math.max(height - viewport + 118, 1));
  }
  return clamp((viewport * .85 - top) / Math.max(height + viewport * .35, 1));
}

export function sceneValues(kind, progress, compact = false) {
  const p = clamp(progress);
  const strength = compact ? .45 : 1;
  if (kind === "hero") return {
    "--art-y": `${(p * 64 * strength).toFixed(2)}px`,
    "--art-scale": (1.06 + p * .09 * strength).toFixed(4),
    "--collection-y": `${(-p * 28 * strength).toFixed(2)}px`,
  };
  if (kind === "routine") return {
    "--phone-y": `${((.5 - p) * 30 * strength).toFixed(2)}px`,
    "--phone-turn": `${((1 - p) * -12 * strength).toFixed(2)}deg`,
    "--phone-tilt": `${((1 - p) * 7 * strength).toFixed(2)}deg`,
    "--phone-scale": (.94 + p * .06).toFixed(4),
    "--note-y": `${((.5 - p) * -42 * strength).toFixed(2)}px`,
    "--routine-progress": p.toFixed(4),
  };
  return { "--band-x": `${((.5 - p) * 36 * strength).toFixed(2)}px` };
}

export function mountScrollMotion(doc = document, win = window) {
  const scenes = [...doc.querySelectorAll("[data-scroll-scene]")].map((element) => ({
    element,
    kind: element.dataset.scrollScene,
    steps: [...element.querySelectorAll(".routine-step")],
  }));
  const root = doc.documentElement;
  let frame = 0;
  let stopped = false;

  const update = () => {
    frame = 0;
    if (stopped || doc.hidden) return;
    const viewport = win.innerHeight;
    const compact = win.innerWidth <= 850;
    const cinematic = win.innerWidth > 1050 && viewport >= 820;
    // Read all geometry before writing styles, to avoid layout thrashing.
    const measurements = scenes.map((scene) => ({ ...scene, rect: scene.element.getBoundingClientRect() }));
    const range = Math.max(root.scrollHeight - viewport, 1);
    root.style.setProperty("--page-progress", clamp(win.scrollY / range).toFixed(4));
    for (const { element, kind, steps, rect } of measurements) {
      if (rect.bottom < -viewport || rect.top > viewport * 2) continue;
      const progress = sceneProgress(kind, rect.top, rect.height, viewport, cinematic);
      for (const [name, value] of Object.entries(sceneValues(kind, progress, compact))) {
        element.style.setProperty(name, value);
      }
      const active = Math.min(steps.length - 1, Math.floor(progress * steps.length));
      steps.forEach((step, index) => { step.dataset.active = String(index === active); });
    }
  };
  const schedule = () => {
    if (!stopped && !doc.hidden && !frame) frame = win.requestAnimationFrame(update);
  };
  const visibility = () => {
    if (doc.hidden && frame) { win.cancelAnimationFrame(frame); frame = 0; }
    else schedule();
  };
  win.addEventListener("scroll", schedule, { passive: true });
  win.addEventListener("resize", schedule);
  doc.addEventListener("visibilitychange", visibility);
  const observer = typeof ResizeObserver === "undefined" ? null : new ResizeObserver(schedule);
  observer?.observe(doc.body);
  schedule();

  return () => {
    stopped = true;
    if (frame) win.cancelAnimationFrame(frame);
    win.removeEventListener("scroll", schedule);
    win.removeEventListener("resize", schedule);
    doc.removeEventListener("visibilitychange", visibility);
    observer?.disconnect();
    root.style.removeProperty("--page-progress");
    for (const { element, kind, steps } of scenes) {
      Object.keys(sceneValues(kind, 0)).forEach((name) => element.style.removeProperty(name));
      steps.forEach((step) => { delete step.dataset.active; });
    }
  };
}
