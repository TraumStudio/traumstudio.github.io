import type { Metadata } from "next";
import { AppIcon, PageIntro } from "../components/site-chrome";
import { studioApps } from "../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Support Center",
  description: "Find help, frequently asked questions, and support information for Traum Studio Android apps.",
};

const faqGroups = [
  {
    app: studioApps[0],
    items: [
      ["Why does TapRoutine need Accessibility permission?", "Android Accessibility Services allow TapRoutine to perform the taps and swipes you configure. You enable the service manually, and it should be used only for routines you choose to run."],
      ["Why won’t my routine start?", "Check that the Accessibility Service is enabled, the screen is unlocked, and the routine has at least one valid action. Battery optimization settings can also interrupt longer routines."],
      ["How do I record a swipe?", "Add a gesture action inside the routine editor, choose swipe, and define the start point, end point, and duration."],
      ["Why does a routine stop when the screen locks?", "Android restricts simulated interactions on a locked screen. Keep the screen awake and unlocked while a routine is running."],
    ],
  },
  {
    app: studioApps[1],
    items: [
      ["How do I change the math difficulty?", "Open an alarm, choose Challenge, and select Easy, Medium, Hard, or Extreme before saving."],
      ["Why didn’t my alarm sound?", "Confirm the alarm permission, notification permission, volume, and battery settings. Some Android devices add manufacturer-specific battery restrictions."],
      ["Can I use Math Alarm without snooze?", "Yes. Snooze behavior can be configured per alarm when the feature is available in the released app."],
    ],
  },
  {
    app: studioApps[2],
    items: [
      ["How do I start a new round?", "Choose a scene from the level screen, then find every listed character before the timer ends."],
      ["Will there be more maps?", "The site is designed to make room for new scenes, characters, and modes as the game develops."],
      ["How do I restore a purchase?", "Use Restore purchases in the game settings with the same Google Play account used for the original purchase."],
    ],
  },
];

export default function SupportPage() {
  return (
    <>
      <PageIntro eyebrow="Traum Studio support" title="How can we help?">
        <p>Choose an app below, browse the most common questions, or use the contact page when you need a human answer.</p>
      </PageIntro>
      <nav className="shell support-jump" aria-label="App support sections">
        {studioApps.map((app) => <a href={`#${app.slug}`} key={app.slug}><AppIcon app={app} size="small" /><span>{app.name}<small>View questions ↓</small></span></a>)}
      </nav>
      <section className="section support-section"><div className="shell support-groups">
        {faqGroups.map(({ app, items }) => (
          <article className="support-group" id={app.slug} key={app.slug}>
            <header><AppIcon app={app} /><div><span>{app.eyebrow} support</span><h2>{app.name}</h2></div></header>
            <div className="faq-list">
              {items.map(([question, answer]) => <details key={question}><summary>{question}<span>＋</span></summary><p>{answer}</p></details>)}
            </div>
          </article>
        ))}
      </div></section>
      <section className="support-cta"><div className="shell"><div><span className="eyebrow">Still need help?</span><h2>Tell us what happened.</h2></div><a className="button button--dark" href="/contact">Contact support →</a></div></section>
    </>
  );
}
