# bloo-site

Static marketing site for [Bloo](https://github.com/jasperdevs/bloo) (iOS).

Built on the AppView Next.js template, exported as static HTML and deployed
to GitHub Pages on every push to `main`.

> ⚠️ **Do not link to this site publicly yet.** Terms of Service and Privacy
> Policy are placeholders — see `app/(main)/terms/page.mdx` and
> `app/(main)/privacy/page.mdx`. The site is wired up for a future launch but
> the content is not finished.

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

- `app/(main)/page.tsx` — homepage
- `app/(main)/layout.tsx` — site chrome (navbar, footer, metadata)
- `app/(main)/terms/page.mdx` — Terms of Service (stub)
- `app/(main)/privacy/page.mdx` — Privacy Policy (stub)
- `src/constants.ts` — color palette (mirrors `Bloo/Design/BlooTheme.swift`)
- `public/app_icon.png`, `public/favicon.png` — pulled from the iOS app
- `next.config.ts` — basePath / static export config
- `.github/workflows/deploy.yml` — Pages deploy

## Deploy URL

Project pages: `https://jasperdevs.github.io/bloo-site/`
