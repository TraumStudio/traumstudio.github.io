import type { Metadata } from "next";
import { AppIcon, PageIntro } from "../components/site-chrome";
import { studioApps } from "../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Privacy Center",
  description: "Privacy information and app-specific privacy policy drafts for Traum Studio Android apps.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy at Traum Studio" title="Clear explanations, app by app.">
        <p>Different apps need different permissions. Our privacy center keeps each policy focused so you can understand what an app accesses, why it needs access, and how information is handled.</p>
      </PageIntro>
      <section className="section page-section page-section--tight"><div className="shell privacy-cards">
        {studioApps.map((app) => <a href={`/privacy/${app.slug}`} className={`privacy-card privacy-card--${app.theme}`} key={app.slug}><AppIcon app={app} /><span><small>Privacy policy draft</small><strong>{app.name}</strong><em>Read policy →</em></span></a>)}
      </div></section>
      <section className="section privacy-principles"><div className="shell privacy-principles-grid">
        <h2>Our privacy principles.</h2>
        <div><p><strong>Ask only when needed.</strong> Permissions should have a clear product purpose.</p><p><strong>Explain in plain language.</strong> People should not need legal training to understand the basics.</p><p><strong>Design for restraint.</strong> Collect less, retain less, and avoid surprises.</p></div>
      </div></section>
    </>
  );
}
