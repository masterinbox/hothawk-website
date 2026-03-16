const rows = [
  { feature: "Shared team inbox", hotHawk: "Yes", masterInbox: "Yes" },
  { feature: "Email reply management", hotHawk: "Yes", masterInbox: "Yes" },
  { feature: "LinkedIn reply visibility", hotHawk: "No", masterInbox: "Yes" },
  { feature: "Built for outbound teams", hotHawk: "No", masterInbox: "Yes" },
  { feature: "Agency workflows", hotHawk: "Limited", masterInbox: "Focused on" },
  { feature: "AI categorization", hotHawk: "—", masterInbox: "Yes" },
  { feature: "Multi-tool visibility", hotHawk: "—", masterInbox: "Yes" },
  { feature: "Speed-to-lead optimization", hotHawk: "—", masterInbox: "Yes" },
];

export default function ComparisonSection() {
  return (
    <section id="comparison" className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          HotHawk vs Master Inbox
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Both help teams collaborate on email — but they are designed for different workflows. Wording uses
          &quot;Designed for,&quot; &quot;Focused on,&quot; and &quot;Better suited for&quot; to stay factual.
        </p>

        <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="px-4 py-3 text-sm font-semibold text-slate-900 sm:px-6">Capability</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-900 sm:px-6">HotHawk</th>
                <th className="px-4 py-3 text-sm font-semibold text-slate-900 sm:px-6">Master Inbox</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.feature}
                  className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}
                >
                  <td className="px-4 py-3 text-sm font-medium text-slate-800 sm:px-6">{row.feature}</td>
                  <td className="px-4 py-3 text-sm text-slate-600 sm:px-6">{row.hotHawk}</td>
                  <td className="px-4 py-3 text-sm font-medium text-slate-900 sm:px-6">{row.masterInbox}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
