# Nagspidey Portfolio

Nagappan S's personal portfolio — Spider-Man themed, built from his CV.

## Stack

React + JavaScript + Vite + Tailwind CSS v4 + Framer Motion.

## Development

```bash
npm install
npm run dev
```

## Production

```bash
npm run build
npm run start
```

Deployed on Railway.

## Updating the CV

Replace `public/Nagappan_S_Resume.pdf` with the new file (keep the same filename) and redeploy — the "Download CV" links throughout the site point at this path.

## Stropdeck pages

`public/stropdeck/` holds the static pages for the Stropdeck app, served at `/stropdeck`, `/stropdeck/privacy`,
`/stropdeck/terms` and `/stropdeck/delete-account`. Edit the HTML there (the source copy lives in the
hone-ai repo under `web/stropdeck/`). The start script no longer uses `serve -s`, because the single-page
fallback would send these addresses to the portfolio home page.
