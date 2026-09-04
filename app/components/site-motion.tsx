"use client";

import { useEffect, useState } from "react";

/** Motion is progressive enhancement; content remains readable without JS. */
export function SiteMotion() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
              observer?.unobserve(entry.target);
            }
          }
        }, { threshold: 0.08 })
      : null;
    document.querySelectorAll("[data-reveal], .feature-card, .category-grid article, .privacy-card, .contact-grid article")
      .forEach((element) => observer?.observe(element));

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
      observer?.disconnect();
      document.removeEventListener("keydown", closeMenu);
    };
  }, []);

  useEffect(() => {
    document.documentElement.dataset.motion = paused || reduced ? "paused" : "playing";
    return () => { delete document.documentElement.dataset.motion; };
  }, [paused, reduced]);

  if (reduced) return null;
  return <button type="button" className="motion-toggle" aria-pressed={paused}
    onClick={() => setPaused((value) => !value)}>
    <span aria-hidden="true">{paused ? "▶" : "Ⅱ"}</span>
    {paused ? "Resume motion" : "Pause motion"}
  </button>;
}
