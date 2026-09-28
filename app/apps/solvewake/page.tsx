import type { Metadata } from "next";
import { AppPageHero, SectionHead } from "../../components/site-chrome";
import { studioApps } from "../../lib/site-data";

const app = studioApps.find((app) => app.slug === "solvewake")!;

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Solvewake — Solve to Wake Up",
  description: "Solvewake helps stop oversleeping with customizable alarms and math challenges that must be solved before dismissal.",
  alternates: { canonical: "/apps/solvewake" },
};

export default function SolvewakePage() {
  return (
    <>
      <AppPageHero app={app}>
        <div className="alarm-card">
          <div className="alarm-time"><small>SOLVEWAKE · GOOD MORNING</small><strong>07:00</strong><span>A little math. A fresh start.</span></div>
          <div className="alarm-problem"><small>SOLVE TO DISMISS</small><strong>17 × 8</strong><div><span>Your answer</span><b>?</b></div></div>
          <div className="alarm-footer"><span>Difficulty · Hard</span><i>•••</i></div>
        </div>
      </AppPageHero>

      <section className="section"><div className="shell">
        <SectionHead eyebrow="A smarter wake-up" title="Snooze has met its match." copy="Solvewake adds just enough friction to make sure your brain arrives at the morning with you." />
        <div className="feature-grid">
          {[
            ["01", "Four difficulty levels", "Start easy or choose extreme when your sleepy brain needs a serious challenge."],
            ["02", "An equation clock", "See the current time as math expressions. Choose a clock difficulty and make checking the time a small challenge."],
            ["03", "Flexible alarms", "Set one-time or daily alarms and try each one in test mode. Configure snooze limits and optionally increase the challenge after snoozing."],
            ["04", "Make it your morning", "Choose Neon, Cyberpunk, Aurora, or Daylight. Looping alarm audio and vibration bring your attention back to the challenge."],
          ].map(([number, title, copy]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div></section>

      <section className="section difficulty-section"><div className="shell difficulty-grid">
        <div><span className="eyebrow">Choose your challenge</span><h2>From “good morning” to “prove you’re awake.”</h2></div>
        <div className="difficulty-list">
          <div><span>Easy</span><strong>8 + 6</strong></div><div><span>Medium</span><strong>24 − 9</strong></div>
          <div><span>Hard</span><strong>17 × 8</strong></div><div><span>Extreme</span><strong>(36 × 7) ÷ 4</strong></div>
        </div>
      </div></section>
    </>
  );
}
