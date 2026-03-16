const features = [
  "Unified inbox across tools",
  "LinkedIn + email reply visibility",
  "AI labeling and categorization",
  "Team assignment and ownership",
  "Faster speed-to-lead",
  "Agency-friendly workflows",
  "Better visibility across campaigns",
  "CRM-friendly operations",
];

export default function FeatureSection() {
  return (
    <section id="features" className="border-b border-slate-200/80 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          What Teams Need for Outbound Reply Management
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          General shared inbox tools were not built with outbound infrastructure in mind. These capabilities are
          essential for agencies at scale.
        </p>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-5 shadow-sm transition hover:border-slate-300 hover:shadow"
            >
              <span className="font-medium text-slate-800">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
