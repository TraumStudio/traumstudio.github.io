import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { studioUrl } from "./lib/site-data";

export const dynamic = "force-static";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(studioUrl),
  title: { default: "Traum Studio — Android Apps & Games", template: "%s | Traum Studio" },
  description: "Traum Studio creates thoughtful Android apps, useful productivity tools, and entertaining mobile games.",
  applicationName: "Traum Studio",
  manifest: "/manifest.webmanifest",
  keywords: ["Android apps", "Android games", "TapRoutine", "Math Alarm", "Traum Studio"],
  openGraph: {
    type: "website",
    siteName: "Traum Studio",
    title: "Traum Studio — Apps with purpose. Games made for fun.",
    description: "Thoughtful Android apps, useful tools, and entertaining mobile games.",
    url: studioUrl,
    images: [{ url: "/og.png", width: 1731, height: 909, alt: "Traum Studio — Apps with purpose. Games made for fun." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traum Studio — Android Apps & Games",
    description: "Apps with purpose. Games made for fun.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
