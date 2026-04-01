import { AnnouncementBar } from "@/components/layout/announcement-bar";
import { MarketingNav } from "@/components/layout/marketing-nav";
import { SiteFooter } from "@/components/layout/site-footer";

export default function MarketingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AnnouncementBar />
      <MarketingNav />
      <div className="min-h-[70vh]">{children}</div>
      <SiteFooter />
    </>
  );
}

