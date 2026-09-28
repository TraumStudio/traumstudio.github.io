import type { Metadata } from "next";
import { AppPageHero, SectionHead } from "../../components/site-chrome";
import { studioApps } from "../../lib/site-data";

const app = studioApps.find((app) => app.slug === "luma")!;
export const dynamic = "force-static";
export const metadata: Metadata = {
  title: "Luma — Password Manager",
  description: "Meet Luma, an encrypted password-manager preview for Android and Windows with authenticator codes, organized vaults, and verified backups.",
};

export default function LumaPage() {
  return <>
    <AppPageHero app={app}>
      <div className="preview-panel preview-panel--mint">
        <div className="preview-panel-heading"><span>LUMA VAULT</span><span>Demo</span></div>
        <h2>A little more peace of mind.</h2>
        <p>Your everyday essentials, together.</p>
        <div className="preview-tabs"><span>All items</span><span>Favorites</span><span>Collections</span></div>
        <div className="vault-preview-row"><b>M</b><div><strong>My email</strong><small>Personal · Login</small></div><span>••••••</span></div>
        <div className="vault-preview-row"><b>W</b><div><strong>Workspace</strong><small>Work · Login</small></div><span>••••••</span></div>
        <div className="vault-preview-row"><b>N</b><div><strong>Travel notes</strong><small>Personal · Secure note</small></div></div>
        <div className="preview-summary">Encrypted vault · Organized your way</div>
      </div>
    </AppPageHero>
    <section className="section"><div className="shell">
      <SectionHead eyebrow="One place for the essentials" title="Less searching. More living." copy="Luma brings your logins, notes, and verification codes into a quiet, organized space." />
      <div className="feature-grid">{[
        ["01", "An encrypted home", "Keep an offline vault on Android or Windows, protected by a master password. Supported Android devices also offer biometric unlock."],
        ["02", "Order that feels natural", "Use collections, tags, favorites, and search. Review duplicate entries before choosing what to combine."],
        ["03", "Passwords and codes", "Generate passwords and passphrases, and keep time-based authenticator codes close to the logins they belong to."],
        ["04", "Backups you can check", "Create a separate encrypted backup and verify it with its backup password. Optional encrypted sync connects your devices through Google Drive or a compatible folder provider."],
      ].map(([number, title, copy]) => <article className="feature-card" key={number}><span>{number}</span><h3>{title}</h3><p>{copy}</p></article>)}</div>
    </div></section>
    <section className="section preview-details"><div className="shell preview-details-grid">
      <article id="availability"><span className="eyebrow">Development preview</span><h2>Meet Luma as it grows.</h2><p>Luma Vault is currently a development preview for Android 9 or later and Windows. It has not had an independent security audit; use test credentials while evaluating it.</p><p>There is no public download linked here yet. Contact the studio for availability and preview support.</p><a className="text-link" href="/contact">Ask about Luma →</a></article>
      <article id="privacy"><span className="eyebrow">Privacy overview</span><h2>Your vault. Your choices.</h2><p>Vault contents are encrypted locally. Connecting a cloud provider is optional and stores encrypted workspace copies with that provider. Keep independent, password-verified backups.</p><p>Camera access is used when you choose to scan authenticator codes. Android autofill and passkeys require explicit setup and have compatibility limits in this preview.</p><p>This overview describes the current preview, rather than a final release privacy policy. Never send vault files, passwords, or recovery keys to support.</p><a className="text-link" href="/support#luma">Luma support →</a></article>
    </div></section>
  </>;
}
