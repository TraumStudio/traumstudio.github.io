import type { Metadata } from "next";
import { AppCard, PageIntro, SectionHead } from "../components/site-chrome";
import { studioApps } from "../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Android Apps",
  description: "Explore Android utilities, productivity tools, and mobile games from Traum Studio.",
};

export default function AppsPage() {
  return (
    <>
      <PageIntro eyebrow="Traum Studio collection" title="One studio. Different reasons to tap.">
        <p>Automation, passwords, touchless shortcuts, thoughtful alarms, and playful games. Every Traum Studio app starts with one clear idea.</p>
      </PageIntro>
      <section className="section page-section page-section--tight"><div className="shell">
        <div className="app-grid app-grid--page">{studioApps.map((app) => <AppCard app={app} key={app.slug} />)}</div>
      </div></section>
      <section className="section future-section"><div className="shell future-grid">
        <SectionHead eyebrow="Designed to grow" title="The next idea has a place here." copy="Traum Studio is built as a real product family. Future utilities, productivity tools, and games can join the collection without losing what makes each one distinct." />
        <div className="future-slots" aria-label="Future app slots">{[1, 2, 3].map((offset) => <span key={offset}>{String(studioApps.length + offset).padStart(2, "0")}</span>)}</div>
      </div></section>
    </>
  );
}
