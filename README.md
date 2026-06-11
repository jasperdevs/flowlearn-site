# flowlearn-site

Marketing site for [FlowLearn](https://flowlearn.app) — an iOS app for learning
anything in short, focused, AI-built lessons.

Built on the AppView Next.js template, exported as static HTML and deployed to
GitHub Pages (custom domain **flowlearn.app**) on every push to `main`.

## Local dev

```sh
npm install
npm run dev
```

## Build

```sh
GITHUB_PAGES=true npx next build
```

Static output lands in `out/`. CI does this automatically on push to `main`.

## Where things live

- `app/(main)/page.tsx` — homepage (hero + feature grid)
- `app/(main)/layout.tsx` — site chrome (navbar, footer, metadata)
- `app/(main)/help/page.mdx` — Help & FAQ
- `app/(main)/terms/page.mdx` — Terms of Service
- `app/(main)/privacy/page.mdx` — Privacy Policy
- `app/(main)/not-found.tsx` → `src/components/deep_link_landing` — invite/QR deep
  links. Becomes `out/404.html`; resolves `/join/<code>` and
  `/profile-share/<handle>` client-side, matching the URLs the iOS app generates
  (`FlowLearn/Services/FlowLearnLinks.swift`).
- `src/constants.ts` — palette (mirrors `FlowLearn/Design/FlowLearnColor.swift`)
  and `APP_ID` (set to the real App Store ID before launch)
- `public/app_icon.png`, `public/favicon.png`, `public/og-preview.png` — generated
  from the app's FlowLearn mark/wordmark
- `public/CNAME` — custom domain (`flowlearn.app`)
- `next.config.ts` — static export config (basePath empty for apex domain)
- `.github/workflows/deploy.yml` — Pages deploy

## Deploy URL

Custom domain: `https://flowlearn.app/` (point the domain's DNS at GitHub Pages).
Project pages fallback: `https://jasperdevs.github.io/flowlearn-site/`.

## Before launch

- Set `APP_ID` in `src/constants.ts` to the real App Store numeric ID so the
  "Get FlowLearn" buttons link to the listing.
- Have the Terms and Privacy copy reviewed.
