# Deployment Guide — Al Qwas Al Zahabai ERP

## Requirements

- **Node.js 18+** and **npm**
- HTTPS recommended (required for PWA install)

## Option A — Vercel (recommended)

1. Upload/extract this zip or push to GitHub.
2. Import project on [vercel.com](https://vercel.com).
3. Framework: **Next.js** (auto-detected).
4. Deploy. No env vars required for local-first mode.

## Option B — VPS / Windows Server

```bash
npm install
npm run build
npm start
```

Runs on port **3000**. Use nginx/IIS as reverse proxy with SSL.

### PM2 (Linux)

```bash
npm install
npm run build
npm install -g pm2
pm2 start npm --name "aqz-erp" -- start
pm2 save
```

## Option C — Static export

This app uses **client-side IndexedDB** and must run as a Next.js server (`next start`), not static HTML-only hosting.

## After deploy

1. Open the site → **Login**: `admin@alqwas.ae` / `admin123`
2. Change demo passwords in production (update `src/lib/constants.ts` → `DEMO_USERS` or add real auth).
3. **Settings** → configure shop name, VAT TRN, phone.
4. Install as PWA on shop tablets (Add to Home Screen).

## Build output

- `.next/` — created by `npm run build` (not in zip; generated on server)
- `node_modules/` — created by `npm install` (not in zip)

## Support

Demo data seeds on first browser visit (IndexedDB). Clear site data to reset.
