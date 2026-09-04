# Traum Studio website

A static website for Traum Studio and its Android apps. It includes a dusk-blue studio homepage, original artwork, scroll-linked motion, individual app pages, support, edition-specific TapRoutine policies, terms, contact, SEO metadata, and a branded 404 page.

## Before publishing

1. Replace the temporary Google Play search URLs in `app/lib/site-data.ts` with the final developer and app URLs.
2. Public contact is `traumclatix@gmail.com`, confirmed by the developer. Update `supportEmail` in `app/lib/site-data.ts` when it changes.
3. Illustrative app previews are labeled; replace them with actual screenshots when available.
4. TapRoutine policies were checked against the local free v2.3 and Pro v1.0 source on September 4, 2026. This is not legal certification or Play approval. Review final release bundles, SDK settings, target audience, Data safety answers, and applicable legal obligations before submission. Math Alarm, Hide & Seek, and Terms remain drafts.

## Privacy URLs

- Free TapRoutine, including in-app Premium: `https://traumstudio.github.io/privacy/taproutine`
- Separate paid TapRoutine Pro: `https://traumstudio.github.io/privacy/taproutine-pro`

Set the appropriate `PRIVACY_POLICY_URL` in each Android release build and enter the same URL in Play Console. The Android projects are separate; website changes do not change those build settings.

## Artwork and motion

`public/studio-loop.webp` is original artwork created with built-in imagegen and encoded as WebP for fast loading, not an app screenshot. Prompt: a centered sculptural translucent cobalt-blue continuous ribbon loop with one glossy tangerine sphere and one clear glass tile, bright icy-white/sky-blue studio backdrop, editorial 3D lighting, caustics and soft shadows, square composition with crop-safe margins; no text, logos, phones, UI, or watermark.

Motion is progressive enhancement: layered hero parallax, staggered card reveals, a scroll-linked perspective routine preview, a sticky desktop spotlight, and a thin page-progress line. Scrolling remains native, with no scroll hijacking. One requestAnimationFrame batches geometry reads and style writes only after scroll/resize events; hidden tabs stop pending frames. Mobile uses smaller transforms and a normal document layout. Pause stops listeners and active entrance animations. Reduced-motion removes transforms and the sticky scene. All content stays readable without JavaScript. No dependencies, analytics, or tracking were added. The original artwork is preserved with a subdued CSS presentation.

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

