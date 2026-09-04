import type { Metadata } from "next";
import { PageIntro } from "../components/site-chrome";
import { supportEmail } from "../lib/site-data";

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
          <span className="eyebrow">Let’s talk</span><h2>A direct line to the studio.</h2>
          <p>For app support, privacy questions, feedback, or business enquiries, email Traum Studio. Include the app name so we can help.</p>
          <a className="contact-email" href={`mailto:${supportEmail}`}>{supportEmail}</a>
          <p>Please don’t send passwords, payment details, or private automation scripts.</p>
        </aside>
      </div></section>
    </>
  );
}
