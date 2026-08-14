import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page Not Found" };

export default function NotFound() {
  return (
    <section className="not-found shell">
      <span className="not-found-number">404</span>
      <div>
        <span className="eyebrow">Still hiding</span>
        <h1>We looked everywhere.</h1>
        <p>This page is better at Hide & Seek than we expected.</p>
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
        <a className="button button--accent" href="/">Go back home →</a>
      </div>
    </section>
  );
}
