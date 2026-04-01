import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500",
  {
    variants: {
      variant: {
        primary: "bg-sky-500 text-slate-950 hover:bg-sky-400",
        secondary: "bg-slate-800 text-slate-100 hover:bg-slate-700",
        ghost: "text-slate-300 hover:bg-slate-800",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);

type Props = VariantProps<typeof buttonVariants> & {
  href?: string;
  className?: string;
  children: React.ReactNode;
};

export function Button({ href, className, variant, children }: Props) {
  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant }), className)}>
        {children}
      </Link>
    );
  }
  return <button className={cn(buttonVariants({ variant }), className)}>{children}</button>;
}

