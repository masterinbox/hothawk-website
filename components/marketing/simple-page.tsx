import { createMetadata } from "@/lib/seo";
import { MarketingHero, GenericSection, RelatedLinks } from "@/components/marketing/page-templates";
import { CtaStrip } from "@/components/marketing/cta-strip";

export function simpleMetadata(title: string, description: string, path: string) {
  return createMetadata({ title, description, path });
}

export function SimpleMarketingPage({
  title,
  description,
  bullets,
}: {
  title: string;
  description: string;
  bullets: string[];
}) {
  return (
    <>
      <MarketingHero title={title} description={description} />
      <GenericSection title="Highlights" bullets={bullets} />
      <RelatedLinks
        links={[
          { href: "/features", label: "Explore features" },
          { href: "/pricing", label: "View pricing" },
          { href: "/docs", label: "Read docs" },
        ]}
      />
      <CtaStrip />
    </>
  );
}

