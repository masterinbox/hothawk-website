import { notFound } from "next/navigation";
import { createMetadata } from "@/lib/seo";
import { compareSlugs } from "@/data/pages";
import { MarketingHero, GenericSection, RelatedLinks } from "@/components/marketing/page-templates";

export async function generateStaticParams() {
  return compareSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  if (!compareSlugs.includes(params.slug)) return {};
  return createMetadata({
    title: `${params.slug.replace(/-/g, " ")} comparison`,
    description: `A monitoring-focused comparison page for ${params.slug.replace(/-/g, " ")} search intent.`,
    path: `/compare/${params.slug}`,
  });
}

export default function ComparePage({ params }: { params: { slug: string } }) {
  if (!compareSlugs.includes(params.slug)) notFound();
  const product = params.slug.replace("-alternative", "").replace(/-/g, " ");
  return (
    <>
      <MarketingHero title={`HotHawk alternative to ${product}`} description="A lightweight monitoring workflow without bulky setup." />
      <GenericSection
        title="Where teams switch"
        bullets={["Faster setup", "Unified website + DNS + SSL visibility", "Simple status and incident communication"]}
      />
      <RelatedLinks links={[{ href: "/features", label: "See features" }, { href: "/pricing", label: "Pricing" }]} />
    </>
  );
}

