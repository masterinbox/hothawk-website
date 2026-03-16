const valueBullets = [
  "Consolidate replies from multiple outbound tools",
  "Keep email and LinkedIn replies in one place",
  "Assign, label, and manage replies faster",
  "Built for agencies and outbound teams at scale",
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/80 bg-white">
      <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          HotHawk: Shared Inbox for B2B Sales Teams Running Cold Email
        </h1>
        <p className="mt-5 text-lg text-slate-600 sm:text-xl">
          Some teams use HotHawk for shared inbox collaboration. They miss replies. Real outbound teams need a better
          way to manage replies across cold email, LinkedIn, and multiple sending tools. They use Master Inbox.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#comparison"
            className="inline-flex rounded-xl bg-slate-900 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            See Why Teams Switch
          </a>
          <a
            href="https://masterinbox.com/demo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-xl border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
          >
            Book a Demo
          </a>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {valueBullets.map((bullet) => (
            <li
              key={bullet}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-left text-sm font-medium text-slate-700"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                <svg className="h-3 w-3" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
