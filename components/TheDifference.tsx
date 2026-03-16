const leftItems = [
  "General email collaboration",
  "Support-style workflows",
  "Limited outbound context",
  "Weaker multi-channel visibility",
];

const rightItems = [
  "Email + LinkedIn replies",
  "Reply categorization",
  "Team collaboration",
  "Fast follow-up workflows",
  "Built for agencies and outbound ops",
];

export default function TheDifference() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Support Inbox Software vs Real Outbound Reply Management
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Support-style inbox tools are built for general collaboration. Outbound teams have different workflows: they
          need to manage fragmented replies across campaigns, tools, mailboxes, and LinkedIn accounts — with
          speed-to-lead, AI labeling, team ownership, and unified visibility.
        </p>

        <div className="mx-auto mt-10 flex justify-center" aria-hidden>
          <svg viewBox="0 0 320 80" className="h-16 w-full max-w-sm text-slate-300" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="24" y="20" width="72" height="40" rx="8" stroke="currentColor" />
            <path d="M96 40 H128" strokeDasharray="4 2" />
            <circle cx="160" cy="40" r="20" stroke="currentColor" />
            <path d="M180 40 H212" strokeDasharray="4 2" />
            <rect x="212" y="8" width="32" height="24" rx="6" className="stroke-emerald-400" stroke="currentColor" />
            <rect x="212" y="36" width="32" height="24" rx="6" className="stroke-emerald-400" stroke="currentColor" />
            <rect x="212" y="64" width="32" height="24" rx="6" className="stroke-emerald-400" stroke="currentColor" />
            <path d="M244 20 H268 M244 48 H268 M244 76 H268" strokeWidth="1" />
            <circle cx="288" cy="40" r="18" className="stroke-emerald-600 fill-emerald-500" strokeWidth="2" />
          </svg>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">General Shared Inbox Tools</h3>
            <ul className="mt-4 space-y-3">
              {leftItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-600">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900">Master Inbox for Outbound Teams</h3>
            <ul className="mt-4 space-y-3">
              {rightItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-slate-700">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
