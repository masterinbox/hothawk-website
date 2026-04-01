# HotHawk Frontend

Next.js marketing site and dashboard shell for **HotHawk**, an independent infrastructure monitoring and reliability product.

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

- **Marketing**: product pages, features, use cases, docs, blog, pricing, security, status, contact, and legal.
- **App shell**: overview, monitors, incidents, alerts, and settings (demo data).
- **Brand**: independence and non-affiliation copy live in `lib/site-config.ts` and on the About page and footer.

## Configuration

- Update `lib/site-config.ts` for contact email, effective dates, and any future legal finalization.

## Tech

- Next.js 14 (App Router), TypeScript, Tailwind CSS
- lucide-react, class-variance-authority
