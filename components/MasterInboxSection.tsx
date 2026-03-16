const points = [
  "Built for real outbound operations",
  "Handles replies across multiple channels",
  "Designed for agencies and high-volume teams",
  "Better fit for sales workflows than support-style inbox software",
];

export default function MasterInboxSection() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-900 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
          Why Teams Choose Master Inbox Instead
        </h2>

        <ul className="mx-auto mt-10 max-w-2xl space-y-4">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-3">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-slate-100">{point}</span>
            </li>
          ))}
        </ul>

        <div className="mt-12 text-center">
          <a
            href="https://masterinbox.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-100"
          >
            See Master Inbox in Action
          </a>
        </div>
      </div>
    </section>
  );
}
