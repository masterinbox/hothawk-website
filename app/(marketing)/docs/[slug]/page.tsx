import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { docsArticles } from "@/data/demo";

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = docsArticles.find((d) => d.slug === params.slug);
  if (!doc) return {};
  return createMetadata({
    title: doc.title,
    description: `${doc.title} guide for HotHawk monitoring workflows.`,
    path: `/docs/${params.slug}`,
  });
}

export default function DocDetail({ params }: { params: { slug: string } }) {
  const doc = docsArticles.find((d) => d.slug === params.slug);
  if (!doc) notFound();
  return (
    <article className="mx-auto max-w-4xl px-4 py-16">
      <p className="text-sm text-sky-300">Docs</p>
      <h1 className="mt-2 text-4xl font-semibold">{doc.title}</h1>
      <p className="mt-4 text-slate-300">
        This page documents {doc.title.toLowerCase()} in HotHawk. Replace with backend-connected docs content later.
      </p>
    </article>
  );
}

