# Al Qwas Al Zahabai — Premium UAE Mobile Shop ERP + PWA

Luxury Dubai mobile retail ERP: cyber UI, IMEI-secured inventory, ultra-fast billing, analytics, multi-branch, offline PWA.

## Quick start

```bash
npm install
npm run dev
```

Open **http://localhost:3000**

| Role | Email | Password |
|------|-------|----------|
| **Admin** | admin@alqwas.ae | admin123 |
| **Staff** | staff@alqwas.ae | staff123 |
| **View** | view@alqwas.ae | view123 |

> First visit seeds demo data (2 branches, 4 phones, 3 sales). Clear IndexedDB (`AlQwasERP`) in DevTools to re-seed.

## Features (complete)

- **Dashboard** — 8 KPIs, daily sales, profit, brands, branches, expenses
- **Sales** — IMEI/model search, VAT billing, PDF + print, WhatsApp share, returns
- **Stock** — IMEI validation, filters, branch transfers, restock returns
- **Customers / Suppliers / Expenses** — Full CRUD
- **Reports** — Charts, P&L, sales log, CSV export
- **Branches** — Multi-branch, active branch, default branch
- **Settings** — Shop profile, UAE taxes, JSON backup/restore, cloud sync toggle
- **Auth** — Role-based routes (Admin / Staff / Employee)
- **PWA** — Install prompt, service worker, offline pages

## Architecture

```
Browser PWA → Dexie (IndexedDB) → Sync queue → Optional cloud
```

## WhatsApp invoices

After sale or from invoice history: **WhatsApp** sends formatted invoice text; uses customer phone when provided. **WhatsApp + PDF** uses native share on supported devices.

## Production build

```bash
npm run build
npm start
```

Deploy to Vercel/Netlify; ensure HTTPS for PWA install.

## Tech

Next.js 15 · React 19 · Tailwind · Framer Motion · React Query · Zustand · Dexie · Recharts · jsPDF · Zod · React Hook Form

---

**Al Qwas Al Zahabai** © 2026 — Built for UAE electronics retail.
