import Link from "next/link";
import { createMetadata } from "@/lib/seo";
import { docsArticles } from "@/data/demo";
import { Card } from "@/components/ui/card";

export const metadata = createMetadata({
  title: "Documentation",
  description: "HotHawk docs for monitors, incidents, alerts, status pages, and workspace settings.",
  path: "/docs",
});

export default function DocsPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-semibold">Documentation</h1>
      <p className="mt-3 text-slate-300">Quick guides to configure monitors and alerting policies.</p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {docsArticles.map((doc) => (
          <Link key={doc.slug} href={`/docs/${doc.slug}`}>
            <Card className="h-full">
              <p className="font-medium">{doc.title}</p>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}

