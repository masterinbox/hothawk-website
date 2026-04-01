import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { featureSlugs } from "@/data/pages";
import { Card } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Features",
  description: "Explore website, SSL, DNS, domain, IP, and alerting features in HotHawk.",
  path: "/features",
});

export default function FeaturesHub() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Monitoring Features</h1>
      <p className="mt-3 text-slate-300">Built for practical infrastructure awareness and fast issue detection.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {featureSlugs.map((slug) => (
          <Link key={slug} href={`/features/${slug}`}>
            <Card className="h-full">
              <p className="font-medium">{slug.replace(/-/g, " ")}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

