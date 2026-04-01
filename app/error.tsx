"use client";

export default function GlobalError({ reset }: { reset: () => void }) {
  return (
    <html>
      <body className="bg-slate-950 text-slate-100">
        <main className="mx-auto max-w-xl px-4 py-24 text-center">
          <h1 className="text-4xl font-semibold">Something went wrong</h1>
          <p className="mt-3 text-slate-300">An unexpected error occurred while loading this page.</p>
          <button onClick={reset} className="mt-6 rounded-md bg-sky-500 px-4 py-2 font-medium text-slate-950">
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}

