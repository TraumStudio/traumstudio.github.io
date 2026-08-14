import { DraftNotice } from "../components/site-chrome";
import type { StudioApp } from "../lib/site-data";

type PolicyProps = {
  app: StudioApp;
  summary: string;
  permissions: string[];
  data: string[];
};

export function PrivacyPolicy({ app, summary, permissions, data }: PolicyProps) {
  return (
    <article className="policy-page shell">
      <header><span className="eyebrow">{app.name} · Privacy policy</span><h1>Privacy, explained clearly.</h1><p>{summary}</p><div className="policy-meta"><span>Draft</span><span>Updated 14 August 2026</span></div></header>
      <DraftNotice>This is a product-ready policy structure, not legal advice. Review the final app behavior, SDKs, contact email, and store requirements before publication.</DraftNotice>
      <div className="policy-layout">
        <aside><strong>On this page</strong><a href="#overview">Overview</a><a href="#permissions">Permissions</a><a href="#data">Data handling</a><a href="#rights">Your choices</a><a href="#contact-policy">Contact</a></aside>
        <div className="policy-copy">
          <section id="overview"><span>01</span><h2>Overview</h2><p>Traum Studio intends to keep {app.name} focused on its core function and to be transparent about any information or device capability the released app uses. The final policy will reflect the exact production build distributed through Google Play.</p></section>
          <section id="permissions"><span>02</span><h2>Permissions and device access</h2><p>The app may request the following capabilities only when they support an app feature:</p><ul>{permissions.map((item) => <li key={item}>{item}</li>)}</ul></section>
          <section id="data"><span>03</span><h2>Data handling</h2><ul>{data.map((item) => <li key={item}>{item}</li>)}</ul><p>If third-party analytics, advertising, crash reporting, cloud storage, or purchases are added, the final policy will name the providers and link to their terms.</p></section>
          <section id="rights"><span>04</span><h2>Your choices</h2><p>You can deny optional permissions, remove app data through Android settings, or uninstall the app. Some core features may not function when a required permission is disabled.</p></section>
          <section id="contact-policy"><span>05</span><h2>Contact</h2><p>A verified Traum Studio privacy email will be added here before this policy is published.</p></section>
        </div>
      </div>
    </article>
  );
}

