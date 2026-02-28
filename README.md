# monis.rent Workspace Builder (Next.js + TypeScript + Tailwind CSS)

An interactive, visual configurator for digital nomads/startups in Bali to build and rent an office setup.

## Stack
- Next.js App Router (latest major)
- React + TypeScript
- Tailwind CSS

## Features
- Select **desk** from 2+ options.
- Select **chair** from 2+ options.
- Add accessories (**monitor**, **lamp**, **plant**) with quantity cycling (0–3).
- Live visual workspace preview updates instantly.
- Checkout summary with selected setup and monthly total.
- Rent CTA with confirmation feedback.

## Maintainable structure
```text
app/
  page.tsx                     # Route entrypoint
src/
  components/workspace-builder # Small focused UI components
  data/catalog.ts              # Static product catalog + constants
  lib/workspace-builder.ts     # Pure helper functions
  types/workspace.ts           # Shared TypeScript types
```

## Run locally
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Production
```bash
npm run build
npm run start
```

## Deployment options
- Vercel
- Netlify
- GitHub Pages (with static export setup if needed)
