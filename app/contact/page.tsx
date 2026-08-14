import type { Metadata } from "next";
import { DraftNotice, PageIntro } from "../components/site-chrome";
import { launchEmailPlaceholder } from "../lib/site-data";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Traum Studio about app support, privacy, business enquiries, or general questions.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact Traum Studio" title="Let’s point your message in the right direction.">
        <p>For a faster answer, choose the subject that best fits your message and include the app name, Android version, and a short description when reporting an issue.</p>
      </PageIntro>
      <section className="section page-section page-section--tight"><div className="shell contact-layout">
        <div className="contact-grid">
          {[
            ["01", "General enquiries", "Questions about Traum Studio, upcoming releases, or the website."],
            ["02", "App support", "Troubleshooting, purchases, feedback, and help with a Traum Studio app."],
            ["03", "Privacy enquiries", "Questions about permissions, data handling, or privacy policies."],
            ["04", "Business enquiries", "Partnerships, licensing, press, and other professional messages."],
          ].map(([number, title, copy]) => <article key={number}><span>{number}</span><h2>{title}</h2><p>{copy}</p></article>)}
        </div>
        <aside className="contact-panel">
          <span className="eyebrow">Email</span><h2>One address for now.</h2>
          <p>The public inbox is intentionally left as a safe placeholder until a real studio address is ready.</p>
          <code>{launchEmailPlaceholder}</code>
          <DraftNotice>Add a verified inbox before launch, then update it once in <code>app/lib/site-data.ts</code>.</DraftNotice>
        </aside>
      </div></section>
    </>
  );
}
