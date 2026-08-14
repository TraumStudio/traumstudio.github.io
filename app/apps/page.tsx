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
        <p>From everyday automation to alarms that make you think and games that invite you to look closer—every Traum Studio app starts with one clear idea.</p>
      </PageIntro>
      <section className="section page-section page-section--tight"><div className="shell">
        <div className="app-grid app-grid--page">{studioApps.map((app) => <AppCard app={app} key={app.slug} />)}</div>
      </div></section>
      <section className="section future-section"><div className="shell future-grid">
        <SectionHead eyebrow="Designed to grow" title="The next idea has a place here." copy="Traum Studio is built as a real product family. Future utilities, productivity tools, and games can join the collection without losing what makes each one distinct." />
        <div className="future-slots" aria-label="Future app slots"><span>04</span><span>05</span><span>06</span></div>
      </div></section>
    </>
  );
}
