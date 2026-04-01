import { siteConfig } from "@/lib/site-config";

export function IndependenceNoticeShort({ className = "" }: { className?: string }) {
  return (
    <p className={`text-xs leading-relaxed text-slate-400 ${className}`}>{siteConfig.independenceShort}</p>
  );
}

export function IndependenceNoticeFull({ className = "" }: { className?: string }) {
  return (
    <div className={`space-y-4 text-sm leading-relaxed text-slate-300 ${className}`}>
      {siteConfig.independenceFull.split("\n\n").map((para, i) => (
        <p key={i}>{para}</p>
      ))}
    </div>
  );
}
