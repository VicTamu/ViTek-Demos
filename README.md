# ViTek Demos

Private repo of client sales concepts (mockups) for ViTek Systems outreach.
Every page is `noindex` and unlinked — only someone with the direct URL sees it.

## Run locally

```bash
npm install
npm run dev
```

- Index of all demos: http://localhost:3000
- A specific demo: http://localhost:3000/<slug> (e.g. `/luxe`)

## Add a new prospect demo

1. Create `app/<slug>/page.tsx` and (optionally) `app/<slug>/<slug>.css`.
2. Scope all CSS under a wrapper class (e.g. `.luxe`) so demos never collide.
3. Add the prospect to the `demos` array in `app/page.tsx` so it shows on the index.

## Deploy (Vercel)

Connected to the `ViTek-Demos` GitHub repo — every push to `main` auto-deploys.
Live URL pattern: `https://<project>.vercel.app/<slug>`.

## When a prospect signs

Graduate their demo into its own dedicated repo — that becomes their real,
paid site on their own domain. Keep this repo for cold/prospect concepts only.
