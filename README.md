# HotHawk Frontend

Production-style frontend for **HotHawk**, a monitoring and infrastructure surveillance platform.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for production

```bash
npm run build
npm start
```

## Structure

- **Marketing site** with core pages, feature pages, use-case pages, docs/blog, pricing, status, company routes, and legal routes.
- **Frontend app shell** with overview, monitors, incidents, alerts, status pages, domains, SSL, IP checks, DNS, team, billing, and settings views.
- **Design**: dark-first, monitoring-focused, responsive, and reusable component architecture.

## Optional next steps

- Connect routes to backend APIs and auth.
- Replace placeholder legal/contact details in `lib/site-config.ts`.
- Add real charts/data sources and production analytics settings.

## Tech

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- lucide-react, Framer Motion
- Hybrid utility system with reusable UI components
