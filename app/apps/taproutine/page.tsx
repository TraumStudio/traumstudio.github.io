import type { Metadata } from "next";
import { AppIcon, AppPageHero, SectionHead } from "../../components/site-chrome";
import { studioApps } from "../../lib/site-data";

const app = studioApps[0];

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "TapRoutine — Android Tap & Gesture Automation",
  description: "TapRoutine is an Android automation tool for creating reusable tap, swipe, delay, and gesture routines.",
};

export default function TapRoutinePage() {
  return (
    <>
      <AppPageHero app={app}>
        <div className="product-phone product-phone--tap">
          <div className="product-phone-bar"><span>9:41</span><i /></div>
          <div className="product-phone-title"><AppIcon app={app} size="small" /><span><small>YOUR ROUTINES</small><strong>Ready when you are.</strong></span></div>
          <div className="mini-routine mini-routine--active"><span>01</span><div><strong>Morning setup</strong><small>4 actions · 18 sec</small></div><b>▶</b></div>
          <div className="mini-routine"><span>02</span><div><strong>Daily check-in</strong><small>7 actions · 42 sec</small></div><b>▶</b></div>
          <div className="mini-routine"><span>03</span><div><strong>Quick scroll</strong><small>3 actions · 12 sec</small></div><b>▶</b></div>
          <button type="button" tabIndex={-1}>＋ New routine</button>
        </div>
      </AppPageHero>

      <section className="section"><div className="shell">
        <SectionHead eyebrow="Features" title="Powerful where it matters. Clear everywhere else." />
        <div className="feature-grid feature-grid--five">
          {[
            ["01", "Record gestures", "Capture taps, swipes, and the interactions your routine needs."],
            ["02", "Build routines", "Combine actions in a clear sequence you can inspect and adjust."],
            ["03", "Loop actions", "Repeat selected steps when a task calls for the same motion again."],
            ["04", "Save scripts", "Keep frequently used routines organized and ready for later."],
            ["05", "Fine controls", "Add pauses and tune each action without turning the app into a puzzle."],
          ].map(([number, title, copy]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}
        </div>
      </div></section>

      <section className="section steps-section"><div className="shell">
        <SectionHead eyebrow="How it works" title="Create. Configure. Run." copy="A straightforward flow that keeps you in control of every action." />
        <ol className="steps-list">
          <li><span>1</span><div><h3>Create</h3><p>Start a new routine and give it a name you will recognize.</p></div></li>
          <li><span>2</span><div><h3>Configure</h3><p>Add taps, swipes, delays, and repeats in the order you need.</p></div></li>
          <li><span>3</span><div><h3>Run</h3><p>Review the sequence, then start it only when you choose.</p></div></li>
        </ol>
      </div></section>

      <section className="section permission-section"><div className="shell permission-grid">
        <div><span className="eyebrow">Permission transparency</span><h2>Why TapRoutine needs Accessibility permission.</h2></div>
        <div className="permission-copy">
          <p>TapRoutine uses Android Accessibility Services solely to perform user-configured actions such as taps and swipes. The permission is essential because Android does not otherwise allow an app to carry out these interactions.</p>
          <ul>
            <li>You enable the service manually in Android settings.</li>
            <li>Routines run only when you choose to start them.</li>
            <li>The service is not intended to bypass security controls.</li>
            <li>Final data-handling details will be documented in the app’s privacy policy before release.</li>
          </ul>
          <a className="text-link" href="/privacy/taproutine">Read the TapRoutine privacy draft <span>→</span></a>
        </div>
      </div></section>
    </>
  );
}
