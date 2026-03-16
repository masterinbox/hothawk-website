const sendingTools = ["Instantly", "Smartlead", "HeyReach", "Aimfox", "EmailBison"];
const infrastructure = ["CheapInboxes", "Hypertide", "ScailedMail"];
const replyManagement = ["Master Inbox"];

export default function ModernStack() {
  return (
    <section id="use-cases" className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What Modern Outbound Teams Actually Use
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Sending, infrastructure, and reply handling are now separate layers. Most outbound agencies operate a stack
          that includes all three.
        </p>

        <div className="mx-auto mt-10 flex justify-center" aria-hidden>
          <svg viewBox="0 0 280 56" className="h-14 w-full max-w-xs text-slate-400" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="20" y="8" width="72" height="28" rx="6" />
            <rect x="100" y="8" width="72" height="28" rx="6" />
            <rect x="180" y="8" width="72" height="28" rx="6" className="stroke-slate-800 stroke-2" />
            <path d="M92 22 L98 22 M172 22 L178 22" strokeDasharray="3 2" />
          </svg>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Outbound Tools</h3>
            <ul className="mt-4 space-y-2">
              {sendingTools.map((name) => (
                <li key={name} className="font-medium text-slate-800">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">Sending and campaign automation</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">Infrastructure</h3>
            <ul className="mt-4 space-y-2">
              {infrastructure.map((name) => (
                <li key={name} className="font-medium text-slate-800">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">Domains and mailboxes for campaigns</p>
          </div>
          <div className="rounded-2xl border-2 border-slate-900 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Reply Management</h3>
            <ul className="mt-4 space-y-2">
              {replyManagement.map((name) => (
                <li key={name} className="font-semibold text-slate-900">
                  {name}
                </li>
              ))}
            </ul>
            <p className="mt-3 text-sm text-slate-600">Centralize and manage responses</p>
          </div>
        </div>
      </div>
    </section>
  );
}
