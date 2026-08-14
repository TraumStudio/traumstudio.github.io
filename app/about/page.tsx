import type { Metadata } from "next";
import { PageIntro, SectionHead } from "../components/site-chrome";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Traum Studio, an independent software studio focused on thoughtful Android apps and games.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About Traum Studio" title="Small studio. Serious care for the details.">
        <p>Traum Studio is an independent software studio focused on Android apps and games. We create products that solve everyday problems, explore interesting ideas, and occasionally exist simply because they are fun.</p>
      </PageIntro>
      <section className="section page-section"><div className="shell">
        <SectionHead eyebrow="What we build" title="Useful, focused, and made for mobile." />
        <div className="category-grid">
          <article><span>01</span><h3>Utilities</h3><p>Practical tools that make everyday Android tasks easier to manage.</p></article>
          <article><span>02</span><h3>Productivity</h3><p>Apps designed to save time, encourage useful habits, or help a day run better.</p></article>
          <article><span>03</span><h3>Games</h3><p>Small, entertaining experiences designed around the way people actually play on mobile.</p></article>
        </div>
      </div></section>
      <section className="section approach-section"><div className="shell approach-grid">
        <SectionHead eyebrow="Our approach" title="Four promises behind every release." />
        <div className="approach-list">
          {[
            ["Make it useful.", "If an app solves a problem, it should solve it well."],
            ["Keep it understandable.", "Good software should not require a manual for its everyday tasks."],
            ["Respect the user.", "Permissions, privacy, purchases, and advertising deserve plain language."],
            ["Keep improving.", "Apps should evolve through feedback and real-world use."],
          ].map(([title, copy], index) => <article key={title}><span>0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div></article>)}
        </div>
      </div></section>
    </>
  );
}
