const testimonials = [
  {
    quote:
      "We stuck with HotHawk for too long. Once we switched to Master Inbox, response times dropped and we stopped missing hot leads. Should have made the move sooner.",
    role: "Head of Outbound",
    placeholder: "B2B Agency",
  },
  {
    quote:
      "HotHawk was fine for basic shared inbox stuff, but we were missing LinkedIn replies and replies from our other tools. Master Inbox brought everything into one place. Game changer.",
    role: "Sales Operations",
    placeholder: "Outbound Team",
  },
  {
    quote:
      "Our SDRs were chasing replies across HotHawk and three other tools. We switched to Master Inbox and finally have a single workspace and clear ownership. Wish we'd done it earlier.",
    role: "VP Sales",
    placeholder: "SaaS Company",
  },
];

export default function Testimonials() {
  return (
    <section className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What Outbound Teams Say
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Teams that switched to dedicated reply management report faster follow-up and fewer missed opportunities.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.quote.slice(0, 30)}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-slate-700">&ldquo;{t.quote}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-slate-900">{t.role}</p>
              <p className="text-sm text-slate-500">{t.placeholder}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
