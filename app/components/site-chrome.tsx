import type { ReactNode } from "react";
import {
  developerPlayUrl,
  launchEmailPlaceholder,
  studioApps,
  type StudioApp,
} from "../lib/site-data";

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    // eslint-disable-next-line @next/next/no-html-link-for-pages
    <a className={`brand${compact ? " brand--compact" : ""}`} href="/" aria-label="Traum Studio home">
      <span className="brand-mark" aria-hidden="true">T</span>
      <span className="brand-name"><strong>TRAUM</strong><span>STUDIO</span></span>
    </a>
  );
}

const navItems = [
  ["Apps", "/apps"],
  ["About", "/about"],
  ["Support", "/support"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell nav-shell">
        <Brand compact />
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="play-link desktop-play" href={developerPlayUrl} target="_blank" rel="noreferrer">
          Google Play <span aria-hidden="true">↗</span>
        </a>
        <details className="mobile-nav">
          <summary aria-label="Open navigation menu"><span /><span /><span /></summary>
          <nav aria-label="Mobile navigation">
            {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
            <a href={developerPlayUrl} target="_blank" rel="noreferrer">Google Play ↗</a>
          </nav>
        </details>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand"><Brand /><p>Apps with purpose.<br />Games made for fun.</p></div>
        <div className="footer-column">
          <h2>Apps</h2>
          {studioApps.map((app) => <a href={app.href} key={app.slug}>{app.name}</a>)}
        </div>
        <div className="footer-column">
          <h2>Studio</h2>
          <a href="/about">About</a><a href="/contact">Contact</a>
          <a href={developerPlayUrl} target="_blank" rel="noreferrer">Google Play ↗</a>
        </div>
        <div className="footer-column">
          <h2>Help</h2>
          <a href="/support">Support center</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© 2026 Traum Studio</span><span>Independent Android software studio</span></div>
    </footer>
  );
}

export function AppIcon({ app, size = "regular" }: { app: StudioApp; size?: "small" | "regular" | "large" }) {
  return (
    <div className={`app-icon app-icon--${app.theme} app-icon--${size}`} aria-hidden="true">
      {app.slug === "taproutine" && <span className="routine-glyph"><i /><i /><i /></span>}
      {app.slug === "math-alarm" && <span className="math-glyph">×</span>}
      {app.slug === "hide-and-seek" && <span className="seek-glyph"><i /><i /><b /></span>}
    </div>
  );
}

export function AppCard({ app, featured = false }: { app: StudioApp; featured?: boolean }) {
  return (
    <article className={`app-card app-card--${app.theme}${featured ? " app-card--featured" : ""}`}>
      <div className="app-card-top"><AppIcon app={app} /><span className="app-type">{app.eyebrow}</span></div>
      <div><h3>{app.name}</h3><p className="app-tagline">{app.tagline}</p><p className="app-description">{app.description}</p></div>
      <div className="chips" aria-label={`${app.name} features`}>
        {app.features.map((feature) => <span key={feature}>{feature}</span>)}
      </div>
      <div className="card-actions">
        <a className="text-link" href={app.href}>Learn more <span aria-hidden="true">→</span></a>
        <a className="icon-link" href={app.playUrl} target="_blank" rel="noreferrer" aria-label={`Find ${app.name} on Google Play`}>↗</a>
      </div>
    </article>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: ReactNode }) {
  return <section className="page-intro shell"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><div className="page-intro-copy">{children}</div></section>;
}

export function SectionHead({ eyebrow, title, copy }: { eyebrow?: string; title: string; copy?: string }) {
  return <div className="section-head">{eyebrow && <span className="eyebrow">{eyebrow}</span>}<h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}

export function PlayButton({ app, label = "Find it on Google Play" }: { app: StudioApp; label?: string }) {
  return (
    <a className="button button--light" href={app.playUrl} target="_blank" rel="noreferrer">
      <span className="play-triangle" aria-hidden="true">▶</span><span><small>GET IT ON</small>{label}</span>
    </a>
  );
}

export function DraftNotice({ children }: { children?: ReactNode }) {
  return <aside className="draft-notice"><strong>Launch note</strong><p>{children ?? <>Replace <code>{launchEmailPlaceholder}</code> and the temporary Google Play search links before publishing.</>}</p></aside>;
}

export function AppPageHero({ app, children }: { app: StudioApp; children?: ReactNode }) {
  return (
    <section className={`app-page-hero app-page-hero--${app.theme}`}>
      <div className="shell app-page-hero-grid">
        <div>
          <span className="eyebrow">{app.eyebrow} · Android</span>
          <div className="app-title-line"><AppIcon app={app} size="large" /><h1>{app.name}</h1></div>
          <p className="app-page-tagline">{app.tagline}</p><p className="app-page-description">{app.description}</p>
          <div className="hero-actions"><PlayButton app={app} /><a className="button button--ghost" href="/support">Get support</a></div>
        </div>
        <div className="app-page-visual" aria-label={`${app.name} preview`}>{children}</div>
      </div>
    </section>
  );
}
