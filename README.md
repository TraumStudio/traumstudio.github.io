# Traum Studio website

A fast, accessible, static website for Traum Studio and its Android apps. It includes the studio homepage, individual app pages, support, app-specific privacy drafts, terms, contact, SEO metadata, and a branded 404 page.

## Before publishing

1. Replace the temporary Google Play search URLs in `app/lib/site-data.ts` with the final developer and app URLs.
2. Replace `hello@traumstudio.example` with a verified public inbox.
3. Replace the CSS-built app previews with real icons and screenshots when they are ready.
4. Review the privacy and terms drafts against the released apps and obtain legal advice where appropriate.

## Publish with GitHub Pages

1. Create a public repository named `traumstudio.github.io` on GitHub.
2. Push this project to the repository’s `main` branch.
3. Open **Settings → Pages** and choose **GitHub Actions** as the source.
4. The included workflow builds and publishes the static site automatically after every push to `main`.

The live address will be `https://traumstudio.github.io`.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Create the production export with:

```bash
npm run build
```

The GitHub Pages-ready files are written to `dist/client`.

