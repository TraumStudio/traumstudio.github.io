import type { Metadata } from "next";
import { AppCard, AppIcon, SectionHead } from "./components/site-chrome";
import { developerPlayUrl, studioApps } from "./lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Android Apps & Games",
  description: "Discover TapRoutine, Math Alarm, Hide & Seek, and future Android apps from independent software studio Traum Studio.",
};

export default function Home() {
  const [tapRoutine] = studioApps;

  return (
    <>
      <section className="hero" data-scroll-scene="hero">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow"><i className="status-dot" /> Independent Android studio</span>
            <h1>Apps with<br />purpose.<br /><em>Games made<br />for fun.</em></h1>
            <p>Traum Studio creates thoughtful Android experiences—from useful tools that simplify everyday tasks to games made simply to be enjoyed.</p>
            <div className="hero-actions">
              <a className="button button--accent" href="#apps">Explore our apps <span aria-hidden="true">↓</span></a>
              <a className="button button--ghost" href={developerPlayUrl} target="_blank" rel="noreferrer">Google Play <span aria-hidden="true">↗</span></a>
            </div>
            <div className="hero-proof" aria-label="Studio facts"><span><strong>3</strong> ideas to explore</span><span>Built for <strong>Android</strong></span></div>
          </div>
          <div className="hero-art" aria-label="Traum Studio app collection">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="hero-artwork" src="/studio-loop.webp" width="1254" height="1254" alt="" fetchPriority="high" />
            <div className="collection-caption"><span>THE TRAUM COLLECTION</span><span aria-hidden="true">↗</span></div>
            <div className="collection-apps">
            {studioApps.map((app, index) => (
              <a className={`floating-app floating-app--${index + 1}`} href={app.href} key={app.slug} aria-label={`Discover ${app.name}`}>
                <AppIcon app={app} size="small" /><span><small>{app.eyebrow}</small><strong>{app.name}</strong></span><b aria-hidden="true">↗</b>
              </a>
            ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section apps-section" id="apps">
        <div className="shell">
          <div className="section-topline" data-reveal>
            <SectionHead eyebrow="Our apps" title="Made for real life." copy="Three distinct Android experiences, one shared standard: useful, understandable, and carefully made." />
            <a className="text-link section-link" href="/apps">View all apps <span aria-hidden="true">→</span></a>
          </div>
          <div className="app-grid">{studioApps.map((app, index) => <AppCard app={app} featured={index === 0} key={app.slug} />)}</div>
        </div>
      </section>

      <section className="section spotlight-section" data-scroll-scene="routine">
        <div className="shell spotlight-grid">
          <div className="spotlight-copy" data-reveal>
            <span className="eyebrow">Featured · TapRoutine</span>
            <h2>Turn repetition into a routine.</h2>
            <p>Build a sequence once. Keep it ready whenever you need it. TapRoutine turns repetitive Android interactions into reusable routines with clear, deliberate controls.</p>
            <ul className="check-list"><li>Record taps and swipes</li><li>Set delays and repeat actions</li><li>Keep routines organized on-device</li></ul>
            <a className="button button--light" href={tapRoutine.href}>Discover TapRoutine <span aria-hidden="true">→</span></a>
          </div>
          <div className="routine-demo" aria-label="Illustrative TapRoutine workflow preview, not a live app">
            <span className="preview-caption">A routine, one step at a time.</span>
            <div className="routine-scroll-track" aria-hidden="true"><span /></div>
            <div className="phone-frame">
              <div className="phone-top"><span>9:41</span><i /></div>
              <div className="phone-screen-head"><AppIcon app={tapRoutine} size="small" /><span><small>Routine</small><strong>Morning setup</strong></span><b>•••</b></div>
              <div className="routine-list">
                {[
                  ["01", "Tap", "Open workspace", "#c9ff57"],
                  ["02", "Swipe", "Scroll to controls", "#9eb4ff"],
                  ["03", "Wait", "1.5 seconds", "#ffc56e"],
                  ["04", "Tap", "Start focus mode", "#c9ff57"],
                ].map(([number, action, detail, color]) => (
                  <div className="routine-step" key={number}><span>{number}</span><i style={{ background: color }} /><div><strong>{action}</strong><small>{detail}</small></div><b>⋮</b></div>
                ))}
              </div>
              <div className="run-button"><span aria-hidden="true">▶</span> Routine preview</div>
            </div>
            <span className="demo-note demo-note--top">4 actions</span><span className="demo-note demo-note--bottom">Ready to run</span>
          </div>
        </div>
      </section>

      <section className="section beliefs-section">
        <div className="shell">
          <div data-reveal><SectionHead eyebrow="How we build" title="A small studio with clear principles." /></div>
          <div className="belief-grid">
            {[
              ["01", "Simple", "We remove unnecessary complexity so every app feels clear from the first tap."],
              ["02", "Useful", "Our tools start with real everyday problems and stay focused on solving them well."],
              ["03", "Transparent", "Permissions, privacy, purchases, and advertising should always be easy to understand."],
              ["04", "Playful", "Not every good idea needs to be productive. Some apps should simply make your day more fun."],
            ].map(([number, title, copy]) => <article className="belief-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
          </div>
        </div>
      </section>

      <section className="studio-band" data-scroll-scene="band"><div className="shell studio-band-grid">
        <div><span className="big-stat">3</span><span>Apps</span></div>
        <div><span className="big-stat">1</span><span>Independent studio</span></div>
        <div><span className="big-stat big-stat--word">Android</span><span>Built mobile-first</span></div>
      </div></section>

      <section className="section final-cta"><div className="shell final-cta-inner" data-reveal>
        <span className="eyebrow">What will you try first?</span><h2>Useful tools. Small adventures.<br />All in one studio.</h2>
        <p>Explore the Traum Studio collection and find your next Android app.</p>
        <a className="button button--dark" href={developerPlayUrl} target="_blank" rel="noreferrer">Find Traum Studio on Google Play <span aria-hidden="true">↗</span></a>
      </div></section>
    </>
  );
}
