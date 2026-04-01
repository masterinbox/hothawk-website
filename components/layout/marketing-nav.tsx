"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

export function MarketingNav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-semibold text-slate-100">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-slate-300 hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button href="/login" variant="ghost">
            Sign In
          </Button>
          <Button href="/signup">Start Free</Button>
        </div>
        <button className="md:hidden text-slate-300" onClick={() => setOpen((v) => !v)} aria-label="Toggle nav">
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-800 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-sm text-slate-300">
                {item.label}
              </Link>
            ))}
            <Link href="/login" className="text-sm text-slate-300">
              Sign In
            </Link>
            <Link href="/signup" className="text-sm text-sky-300">
              Start Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

