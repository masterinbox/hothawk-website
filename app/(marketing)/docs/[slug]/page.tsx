import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { getDocBySlug, docsArticles } from "@/data/docs";
import { DocBody } from "@/components/docs/doc-body";

export function generateStaticParams() {
  return docsArticles.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const doc = docsArticles.find((d) => d.slug === params.slug);
  if (!doc) return {};
  return createMetadata({
    title: doc.title,
    description: doc.description,
    path: `/docs/${params.slug}`,
  });
}

export default function DocDetail({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug);
  if (!doc) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16">
      <p className="text-sm text-sky-300">Documentation</p>
      <h1 className="mt-2 text-4xl font-semibold text-slate-50">{doc.title}</h1>
      <p className="mt-4 text-lg text-slate-400">{doc.description}</p>
      <DocBody blocks={doc.blocks} />
    </article>
  );
}
