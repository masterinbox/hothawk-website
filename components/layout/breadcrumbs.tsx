import Link from "next/link";

export function Breadcrumbs({ items }: { items: { href: string; label: string }[] }) {
  return (
    <nav className="mb-4 text-sm text-slate-400">
      {items.map((item, idx) => (
        <span key={item.href}>
          {idx > 0 ? " / " : ""}
          <Link href={item.href} className="hover:text-slate-200">
            {item.label}
          </Link>
        </span>
      ))}
    </nav>
  );
}

