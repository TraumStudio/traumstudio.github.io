import type { Metadata } from "next";
import { AppPageHero, SectionHead } from "../../components/site-chrome";
import { studioApps } from "../../lib/site-data";

const app = studioApps.find((app) => app.slug === "aeri")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Aeri — Touchless Gesture Control",
  description: "Meet Aeri, a touchless Android control preview. Map face gestures, hand gestures, and offline voice commands to your own shortcuts.",
};

export default function AeriPage() {
  return <>
    <AppPageHero app={app}>
      <div className="preview-panel preview-panel--violet">
        <div className="preview-panel-heading"><span>AERI</span><span>Rehearsal</span></div>
        <h2>A small gesture.<br />A useful shortcut.</h2>
        <p>When I do this → do this.</p>
        <div className="gesture-preview-row"><span>Smile</span><b aria-hidden="true">→</b><strong>Go home</strong></div>
        <div className="gesture-preview-row"><span>Hand gesture</span><b aria-hidden="true">→</b><strong>Swipe up</strong></div>
        <div className="gesture-preview-row"><span>Voice command</span><b aria-hidden="true">→</b><strong>Go back</strong></div>
        <div className="preview-summary">Illustrative mappings · Actions off</div>
      </div>
    </AppPageHero>
    <section className="section"><div className="shell">
      <SectionHead eyebrow="A different way to interact" title="Make the gesture yours." copy="Build your own shortcuts, practice with actions off, and start a session when you’re ready." />
      <div className="feature-grid">{[
        ["01", "Face and hand gestures", "Choose from smiles, winks, brow movements, and built-in hand gestures. Adjust sensitivity, hold time, and cooldown to suit your movements."],
        ["02", "Actions you choose", "Map triggers to Home, Back, swipes, taps, or a custom screen position. Keep different shortcut sets in named profiles."],
        ["03", "Voice, on your terms", "Use offline English wake and sleep phrases with assigned commands. Other command languages depend on Android’s installed on-device recognition."],
        ["04", "Practice before you start", "Check detection, calibrate gestures, and rehearse with Android actions blocked. Start deliberately and use the notification to pause or stop."],
      ].map(([number, title, copy]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="section preview-details"><div className="shell preview-details-grid">
      <article id="availability"><span className="eyebrow">Development preview</span><h2>Touchless control, taking shape.</h2><p>Aeri is an Android development preview. Gesture accuracy, voice recognition, and battery use depend on your phone, surroundings, and settings, and still need real-device validation.</p><p>There is no public download linked here yet. Contact the studio for availability and preview support.</p><a className="text-link" href="/contact">Ask about Aeri →</a></article>
      <article id="privacy"><span className="eyebrow">Permissions & control</span><h2>You start. You stop.</h2><p>Camera access supports face and hand detection; microphone access supports voice control. Android Accessibility permission performs the actions you assign. A persistent notification provides session controls.</p><p>The current preview processes detection on-device, has no network permission, and does not record camera frames or audio. Pause keeps sensors active so a resume gesture can work; Stop releases them.</p><p>This overview describes the current preview, rather than a final release privacy policy.</p><a className="text-link" href="/support#aeri">Aeri support →</a></article>
    </div></section>
  </>;
}
