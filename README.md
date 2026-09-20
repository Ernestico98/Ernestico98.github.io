# ernestodavidph.com

Personal site — Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages.

Live: https://ernestodavidph.com

## Development

```bash
npm install
npm run dev     # local dev server
npm run build   # typecheck + production build into dist/
npm run preview # serve the production build locally
```

## Editing content

All content lives in [`src/data/cv.ts`](src/data/cv.ts) — profile, experience,
education, awards, stack and projects. The components in `src/sections/` only
render it, so updating the CV means editing that one file.

## Company logos

`public/logos/` holds the marks shown on the experience cards:

| File | Source |
| ---- | ------ |
| `invofox.svg` | invofox.com favicon |
| `encord.svg` | encord.com favicon |
| `docet.svg` | docet.ai, recovered from the Wayback Machine (the site is offline) |
| `uo.svg` | [Wikimedia Commons](https://commons.wikimedia.org/wiki/File:Escudo_de_la_Universidad_de_Oriente_(Santiago_de_Cuba).svg), CC BY-SA 4.0 by FiroGV |

Companies without a file fall back to an initial-letter monogram.

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. No `gh-pages` branch involved.

## Custom domain

The site is served from **ernestodavidph.com**. `public/CNAME` carries the
domain into the published artifact, and the DNS lives in Cloudflare:

| Type  | Name  | Value                   | Proxy    |
| ----- | ----- | ----------------------- | -------- |
| A     | `@`   | `185.199.108.153`       | DNS only |
| A     | `@`   | `185.199.109.153`       | DNS only |
| A     | `@`   | `185.199.110.153`       | DNS only |
| A     | `@`   | `185.199.111.153`       | DNS only |
| CNAME | `www` | `ernestico98.github.io` | DNS only |

The records must stay **DNS only** (grey cloud). Proxied through Cloudflare,
GitHub cannot reach the domain to validate it, so it never issues the
certificate and Enforce HTTPS stays disabled.
