# ernestodavidph.com

Personal site — Vite + React + TypeScript + Tailwind CSS, deployed to GitHub Pages.

Live: https://ernestico98.github.io

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

## Deployment

Every push to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes `dist/` to GitHub Pages. No `gh-pages` branch involved.

## Custom domain (ernestodavidph.com)

Once the domain is registered:

1. Create `public/CNAME` containing a single line: `ernestodavidph.com`
2. At the registrar's DNS, add the GitHub Pages apex records:

   | Type  | Name  | Value                   |
   | ----- | ----- | ----------------------- |
   | A     | `@`   | `185.199.108.153`       |
   | A     | `@`   | `185.199.109.153`       |
   | A     | `@`   | `185.199.110.153`       |
   | A     | `@`   | `185.199.111.153`       |
   | CNAME | `www` | `ernestico98.github.io.` |

3. Repo → Settings → Pages → Custom domain → `ernestodavidph.com`, then tick
   **Enforce HTTPS** once the certificate is issued (can take up to ~24h).
