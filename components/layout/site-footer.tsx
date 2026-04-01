import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const columns = {
  Product: ["/features", "/pricing", "/status", "/integrations", "/app/overview"],
  "Use Cases": [
    "/use-cases/indie-hackers",
    "/use-cases/agencies",
    "/use-cases/devops-teams",
    "/use-cases/ecommerce",
    "/use-cases/saas-companies",
    "/use-cases/client-reporting",
  ],
  Resources: ["/docs", "/blog", "/changelog", "/customers", "/compare/uptimerobot-alternative"],
  Company: ["/about", "/careers", "/partners", "/contact"],
  Legal: [
    "/legal/privacy-policy",
    "/legal/terms",
    "/legal/cookie-policy",
    "/legal/security-disclosure",
    "/legal/subprocessors",
  ],
};

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 md:grid-cols-6">
        <div>
          <h3 className="mb-3 text-sm font-semibold text-slate-100">HotHawk</h3>
          <p className="text-sm text-slate-400">
            Monitor what matters. Keep watch on uptime, SSL, DNS, and IP health.
          </p>
          <div className="mt-4 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-xs text-slate-300">
            System Status: Operational
          </div>
        </div>
        {Object.entries(columns).map(([title, links]) => (
          <div key={title}>
            <h3 className="mb-3 text-sm font-semibold text-slate-100">{title}</h3>
            <ul className="space-y-2">
              {links.map((href) => (
                <li key={href}>
                  <Link href={href} className="text-sm text-slate-400 hover:text-slate-100">
                    {href.replace("/", "").replace(/-/g, " ")}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 md:flex-row md:justify-between">
          <p>{siteConfig.legal.companyName}</p>
          <p>{siteConfig.legal.address}</p>
        </div>
      </div>
    </footer>
  );
}

