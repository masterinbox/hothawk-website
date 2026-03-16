const painPoints = [
  "Replies scattered across tools",
  "Missed hot leads",
  "Slow response times",
  "No unified reply view",
  "Hard to manage multiple SDRs",
  "LinkedIn replies disconnected from email workflows",
];

export default function ProblemSection() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Why Outbound Teams Outgrow Basic Shared Inboxes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Without centralized reply management, leads get missed, response times slow down, and meetings are lost.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {painPoints.map((point) => (
            <div
              key={point}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-100 text-amber-600">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </span>
              <span className="font-medium text-slate-800">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
