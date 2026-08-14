import type { Metadata } from "next";
import { DraftNotice } from "../components/site-chrome";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Draft terms of use structure for Traum Studio apps, games, and website.",
};

const sections = [
  ["Using our products", "Use Traum Studio apps and this website lawfully and in line with the instructions provided inside each product. Do not misuse an app to interfere with another person’s device, accounts, or services."],
  ["Purchases and subscriptions", "If an app offers paid features, Google Play processes the transaction. The product page will show the price, billing period, and included features before purchase."],
  ["Refunds", "Refund requests are handled under applicable law and the Google Play refund process. Additional support instructions may be provided for a specific app."],
  ["Advertising and third parties", "An app may rely on third-party services such as Google Play, analytics, crash reporting, or advertising. The final terms and app privacy policy will identify material providers."],
  ["Intellectual property", "Traum Studio names, artwork, app interfaces, and original content remain protected by applicable intellectual property law. Personal use of an app does not transfer ownership of that material."],
  ["Availability and liability", "We work to keep our products reliable, but software can contain defects and device behavior varies. The final terms will include limitations that are fair, lawful, and appropriate for each released product."],
  ["Changes", "Features and these terms may change as the studio grows. Material changes will be dated and, where required, communicated through the app or website."],
];

export default function TermsPage() {
  return (
    <article className="policy-page shell">
      <header><span className="eyebrow">Traum Studio · Terms</span><h1>Terms in plain language.</h1><p>A clear foundation for using the Traum Studio website, apps, and games.</p><div className="policy-meta"><span>Draft</span><span>Updated 14 August 2026</span></div></header>
      <DraftNotice>This is a structured draft, not legal advice. Review it against the final products, business location, and applicable consumer law before publication.</DraftNotice>
      <div className="policy-layout">
        <aside><strong>Terms of use</strong>{sections.map(([title], index) => <a href={`#terms-${index + 1}`} key={title}>{String(index + 1).padStart(2, "0")} · {title}</a>)}</aside>
        <div className="policy-copy">{sections.map(([title, copy], index) => <section id={`terms-${index + 1}`} key={title}><span>{String(index + 1).padStart(2, "0")}</span><h2>{title}</h2><p>{copy}</p></section>)}</div>
      </div>
    </article>
  );
}
