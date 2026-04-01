import Link from "next/link";
import { Bell, Search } from "lucide-react";

const links = [
  "/app/overview",
  "/app/monitors",
  "/app/incidents",
  "/app/alerts",
  "/app/status-pages",
  "/app/domains",
  "/app/ssl",
  "/app/ip-checks",
  "/app/dns",
  "/app/team",
  "/app/billing",
  "/app/settings/profile",
];

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[240px_1fr]">
        <aside className="hidden border-r border-slate-800 p-4 lg:block">
          <Link href="/app/overview" className="mb-6 block text-lg font-semibold">
            HotHawk
          </Link>
          <nav className="space-y-1">
            {links.map((href) => (
              <Link key={href} href={href} className="block rounded-md px-3 py-2 text-sm text-slate-300 hover:bg-slate-900">
                {href.replace("/app/", "").replace("/", " / ")}
              </Link>
            ))}
          </nav>
        </aside>
        <div>
          <div className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs text-amber-200">
            Incident advisory: Elevated latency detected in `eu-west` checks for one monitor.
          </div>
          <header className="flex items-center justify-between border-b border-slate-800 px-4 py-3">
            <div className="flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900 px-3 py-2 text-sm text-slate-400">
              <Search size={14} /> Search monitors, incidents, domains
            </div>
            <div className="flex items-center gap-3">
              <button className="rounded-md border border-slate-800 p-2 text-slate-300">
                <Bell size={16} />
              </button>
              <div className="rounded-md border border-slate-800 px-3 py-1.5 text-sm">Workspace: Production</div>
            </div>
          </header>
          <div className="flex flex-wrap gap-2 border-b border-slate-800 px-4 py-2 text-xs text-slate-400">
            <span className="rounded border border-slate-700 px-2 py-1">us-east</span>
            <span className="rounded border border-slate-700 px-2 py-1">us-west</span>
            <span className="rounded border border-slate-700 px-2 py-1">eu-west</span>
            <span className="rounded border border-slate-700 px-2 py-1">ap-south</span>
          </div>
          <main className="p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}

