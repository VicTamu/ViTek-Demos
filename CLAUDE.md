# ViTek-Demos — project instructions

Private repo of **cold-outreach prospect mockups** for ViTek Systems (a web-design
studio serving local businesses in the Austin / Round Rock area). Each page is a
free "sample site" concept built to win a prospect, then shared as a direct link.
These are sales assets, not the ViTek marketing site (that's the separate
`Portfolio` repo).

## How this repo works

- **One prospect = one route:** `app/<slug>/page.tsx`, with scoped styles in
  `app/<slug>/<slug>.css`. Scope **all** CSS under a wrapper class (e.g. `.luxe`)
  so demos never collide with each other or the base styles.
- **Register it on the index:** add the prospect to the `demos` array in
  `app/page.tsx` (the private hub at `/`).
- **Everything is `noindex`** via the root layout (`app/layout.tsx` robots). Never
  link these publicly — share the direct URL only.
- **Stack:** Next 15 (App Router) + Tailwind v3 + TypeScript. Keep deps minimal —
  demos use plain scoped CSS, no framer-motion/gsap. `declare module "*.css"` lives
  in `global.d.ts` (needed for the CSS side-effect imports to typecheck).

## Building a new prospect mockup

Ground every mockup in the prospect's real Google Business data — reviews, star
rating, services, stylist/staff names, address, phone. Specificity is what makes
the owner feel it was made *for them*.

1. Create `app/<slug>/page.tsx` (+ scoped CSS). Copy `app/luxe/` as the template.
2. Pull real details: hero with rating + a real tagline, services from review
   themes, staff names from reviews, real review quotes, address/phone, map embed.
3. Keep the footer credit line: *"Website concept designed by ViTek Systems ·
   vitecollabs@gmail.com"* so the owner knows who made it.
4. If the business already has a booking tool (Booksy, etc.), **keep it** — point
   CTAs at it. The pitch is "wrap your existing booking in a real brand," not
   "replace your system."
5. Add to the `demos` array in `app/page.tsx`.

## Verify & deploy

- Local: `npm install` then `npm run dev` → `http://localhost:3000/<slug>`.
- Typecheck/build before pushing: `npm run build`.
- Push to `main` → Vercel auto-deploys. Live URL: `https://<project>.vercel.app/<slug>`.
- Note: the Google Maps `<iframe>` keeps the network "busy", which can hang
  automated screenshot tools — verify via build + curl/snapshot instead.

## Lifecycle

Cold/prospect concepts live here. **When a prospect signs**, graduate their mockup
into its own dedicated repo → that becomes their real paid site on their own domain.
This repo stays lean, holding only active/pending pitches.

## Prospect pipeline

Business context and outreach scripts live in the Portfolio project's memory
(`in-person-visits.md`, plus the outreach work done there). Current status:

| Slug | Business | Location | Status |
|------|----------|----------|--------|
| `luxe` | The Luxe Beauty & Esthetic Room | Round Rock | **Built.** Spoke to an employee who'll pass it to the owner (no owner name/contact yet). Before sending: swap `BOOKSY_URL` for real Booksy page; add real photos. |
| — | Courtyard Salon Suites | Round Rock (2000 S I-35 #F1) | Not built. Walk-in target. Hook: suites directory — a profile + booking link per stylist. |
| — | Hair Chic'ness (inside Courtyard) | Round Rock (2000 S I-35 #F1) | Not built. Walk-in target. Hook: own the "healthy hair specialist" niche. |
| — | J Park Beauty Salon | Round Rock | Voicemail + text left. Hook: get found by new clients (5.0 but invisible). |
| — | VP | Round Rock | Cold call → hung up. Retry in person. Hook: fix the "barber shop" mislabel; it's a full family salon. |

All five have **no website** and strong reputations — the ideal setup for a
free-mockup pitch.
