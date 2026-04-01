import type { DocBlock, DocCalloutVariant } from "@/data/docs";

const calloutStyles: Record<DocCalloutVariant, string> = {
  tip: "border-emerald-500/40 bg-emerald-950/30 text-emerald-100/90",
  note: "border-sky-500/40 bg-sky-950/30 text-sky-100/90",
  warning: "border-amber-500/40 bg-amber-950/30 text-amber-100/90",
};

const calloutLabels: Record<DocCalloutVariant, string> = {
  tip: "Tip",
  note: "Note",
  warning: "Warning",
};

export function DocBody({ blocks }: { blocks: DocBlock[] }) {
  return (
    <div className="mt-8 space-y-8 text-slate-300">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "p":
            return (
              <p key={i} className="leading-relaxed">
                {block.text}
              </p>
            );
          case "h2":
            return (
              <h2 key={i} className="scroll-mt-24 border-b border-slate-800 pb-2 text-xl font-semibold text-slate-100">
                {block.text}
              </h2>
            );
          case "h3":
            return (
              <h3 key={i} className="scroll-mt-24 text-lg font-medium text-slate-100">
                {block.text}
              </h3>
            );
          case "steps":
            return (
              <ol key={i} className="list-decimal space-y-3 pl-5 marker:text-sky-400">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ol>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-5 marker:text-slate-500">
                {block.items.map((item, j) => (
                  <li key={j} className="leading-relaxed pl-1">
                    {item}
                  </li>
                ))}
              </ul>
            );
          case "callout": {
            const label = block.title ?? calloutLabels[block.variant];
            return (
              <aside
                key={i}
                className={`rounded-lg border px-4 py-3 text-sm leading-relaxed ${calloutStyles[block.variant]}`}
              >
                <p className="font-medium text-slate-100">{label}</p>
                <p className="mt-1 text-slate-300">{block.text}</p>
              </aside>
            );
          }
          case "code":
            return (
              <pre
                key={i}
                className="overflow-x-auto rounded-lg border border-slate-800 bg-slate-950/80 p-4 text-sm text-slate-200"
              >
                <code className="font-mono">{block.code}</code>
              </pre>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
