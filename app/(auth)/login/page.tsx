import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Login",
  description: "Sign in to your HotHawk workspace.",
  path: "/login",
});

export default function LoginPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-semibold">Sign In</h1>
      <form className="mt-6 space-y-3">
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Account ID" />
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" type="password" placeholder="Password" />
        <button className="w-full rounded-md bg-sky-500 px-4 py-2 font-medium text-slate-950">Sign In</button>
      </form>
    </main>
  );
}

