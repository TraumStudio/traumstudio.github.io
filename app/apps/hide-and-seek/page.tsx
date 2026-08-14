import type { Metadata } from "next";
import { AppPageHero, SectionHead } from "../../components/site-chrome";
import { studioApps } from "../../lib/site-data";

const app = studioApps[2];

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Hide & Seek — Mobile Finding Game",
  description: "Hide & Seek is a colorful mobile game of hidden characters, quick rounds, and sharp-eyed discovery.",
};

export default function HideAndSeekPage() {
  return (
    <>
      <AppPageHero app={app}>
        <div className="seek-scene">
          <span className="seek-sun" /><span className="seek-cloud seek-cloud--one" /><span className="seek-cloud seek-cloud--two" />
          <div className="seek-hill seek-hill--back" /><div className="seek-hill seek-hill--front" />
          <span className="seek-tree seek-tree--one" /><span className="seek-tree seek-tree--two" />
          <span className="seek-character seek-character--one"><i /><i /></span>
          <span className="seek-character seek-character--two"><i /><i /></span>
          <div className="seek-hud"><span><small>FOUND</small><strong>4 / 7</strong></span><span><small>TIME</small><strong>00:38</strong></span></div>
        </div>
      </AppPageHero>

      <section className="section"><div className="shell">
        <SectionHead eyebrow="Look closer" title="Hide. Search. Smile when you spot it." copy="Short rounds, playful scenes, and that satisfying moment when the last hidden character finally gives itself away." />
        <div className="feature-grid">
          {[
            ["01", "Quick rounds", "Jump into a scene whenever you have a few minutes to play."],
            ["02", "Playful worlds", "Each environment has its own colors, details, and hiding places."],
            ["03", "Hidden surprises", "Curious characters and small secrets reward careful eyes."],
            ["04", "Made for mobile", "Clear controls and compact sessions feel at home on Android."],
          ].map(([number, title, copy]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div></section>

      <section className="section game-band"><div className="shell game-band-inner">
        <span className="eyebrow">Ready?</span><h2>One more is still hiding.</h2><p>Take a breath. Scan the scene. Find them before time runs out.</p>
        <a className="button button--dark" href={app.playUrl} target="_blank" rel="noreferrer">Play on Google Play ↗</a>
      </div></section>
    </>
  );
}
