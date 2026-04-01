import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-xl px-4 py-24 text-center">
      <h1 className="text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 text-slate-300">The route you requested is missing or moved.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-sky-500 px-4 py-2 font-medium text-slate-950">
        Go to homepage
      </Link>
    </main>
  );
}

