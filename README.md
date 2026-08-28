# Epiq x SpaceXAI

Passworded customer leave-behind with three illustrative Grok Bot workflows for Epiq GTM.

## Stack

- Next.js 15.5
- React 19
- Geist
- vGPU
- App Router under `src/`

## Run locally

```bash
cp .env.example .env.local
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The local example password is `land2expand`. Production requires `SITE_PASSWORD`.

## Deploy

Deploy the production site to the `jasonwiker` Vercel scope and set `SITE_PASSWORD` in the project environment.
