import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Create account",
  description: "Start monitoring websites, SSL, DNS, and IP health with HotHawk.",
  path: "/signup",
});

export default function SignUpPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-semibold">Start Free</h1>
      <form className="mt-6 space-y-3">
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Work account" />
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Workspace name" />
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" type="password" placeholder="Password" />
        <button className="w-full rounded-md bg-sky-500 px-4 py-2 font-medium text-slate-950">Create account</button>
      </form>
    </main>
  );
}

