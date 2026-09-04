"use client";

import { useEffect, useState } from "react";
import { mountScrollMotion } from "../lib/scroll-motion.mjs";

/** Motion is progressive enhancement; content remains readable without JS. */
export function SiteMotion() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    const closeMenu = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      const menu = document.querySelector<HTMLDetailsElement>(".mobile-nav[open]");
      if (menu) {
        menu.open = false;
        menu.querySelector<HTMLElement>("summary")?.focus();
      }
    };
    document.addEventListener("keydown", closeMenu);
    return () => {
      media.removeEventListener("change", sync);
      document.removeEventListener("keydown", closeMenu);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    // Read the media query synchronously too, before the state update renders.
    const disabled = paused || reduced || window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    root.dataset.motion = disabled ? "paused" : "playing";
    if (disabled) return () => { delete root.dataset.motion; };

    const stopScroll = mountScrollMotion();
    const animations = new Set<Animation>();
    const observer = "IntersectionObserver" in window ? new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const element = entry.target as HTMLElement;
        observer?.unobserve(element);
        if (element.dataset.revealed) continue;
        element.dataset.revealed = "true";
        if (typeof element.animate !== "function") continue;
        const index = Array.from(element.parentElement?.children ?? []).indexOf(element);
        const card = element.matches("article, .privacy-card, .studio-band-grid > div");
        const animation = element.animate([
          { opacity: .3, transform: `translate3d(0, ${card ? 38 : 26}px, 0)${card ? " scale(.96) rotateX(5deg)" : ""}` },
          { opacity: 1, transform: "translate3d(0, 0, 0) scale(1) rotateX(0deg)" },
        ], { duration: card ? 850 : 1000, delay: card ? Math.min(Math.max(index, 0), 3) * 100 : 0, easing: "cubic-bezier(.16,1,.3,1)", fill: "backwards" });
        animations.add(animation);
        animation.onfinish = () => { animations.delete(animation); };
      }
    }, { threshold: .12 }) : null;
    document.querySelectorAll("[data-reveal], .feature-card, .category-grid article, .privacy-card, .contact-grid article, .belief-card, .studio-band-grid > div")
      .forEach((element) => observer?.observe(element));
    return () => {
      stopScroll();
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      delete root.dataset.motion;
    };
  }, [paused, reduced]);

  return <><div className="scroll-progress" aria-hidden="true" />{!reduced && <button type="button" className="motion-toggle" aria-pressed={paused}
    onClick={() => setPaused((value) => !value)}>
    <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
    {paused ? "Resume motion" : "Pause motion"}
  </button>}</>;
}
