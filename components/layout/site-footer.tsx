import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const sections: { title: string; links: { href: string; label: string }[] }[] = [
  {
    title: "Product",
    links: [
      { href: "/features", label: "Features" },
      { href: "/pricing", label: "Pricing" },
      { href: "/security", label: "Security" },
      { href: "/status", label: "Status" },
      { href: "/app/overview", label: "Dashboard preview" },
      { href: "/integrations", label: "Integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/docs", label: "Docs" },
      { href: "/blog", label: "Blog" },
      { href: "/changelog", label: "Changelog" },
      { href: "/customers", label: "Customers" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/contact", label: "Contact" },
      { href: "/book-demo", label: "Book a demo" },
      { href: "/careers", label: "Careers" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Legal",
    links: [
      { href: "/legal/privacy-policy", label: "Privacy" },
      { href: "/legal/terms", label: "Terms" },
      { href: "/legal/cookie-policy", label: "Cookies" },
      { href: "/legal/data-processing", label: "Data processing" },
      { href: "/legal/acceptable-use", label: "Acceptable use" },
      { href: "/legal/security-disclosure", label: "Security disclosure" },
      { href: "/legal/subprocessors", label: "Subprocessors" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-[1.2fr_repeat(4,minmax(0,1fr))]">
        <div>
          <h3 className="text-sm font-semibold text-slate-100">{siteConfig.name}</h3>
          <p className="mt-3 text-sm text-slate-400">{siteConfig.description}</p>
          <p className="mt-4 text-sm text-slate-300">
            <a href={`mailto:${siteConfig.contactEmail}`} className="text-sky-400 hover:underline">
              {siteConfig.contactEmail}
            </a>
          </p>
          <div className="mt-4 rounded-lg border border-slate-800 bg-slate-900/80 px-3 py-2 text-xs text-slate-400">
            All systems operational — see <Link href="/status" className="text-sky-400 hover:underline">status</Link>
          </div>
        </div>
        {sections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-slate-100">{section.title}</h3>
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 hover:text-slate-100">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-slate-800 bg-slate-950/80">
        <div className="mx-auto max-w-7xl space-y-3 px-4 py-6 text-xs leading-relaxed text-slate-500">
          <p>{siteConfig.footerIndependenceNote}</p>
          <p>{siteConfig.independenceLegalLine}</p>
        </div>
      </div>
    </footer>
  );
}
