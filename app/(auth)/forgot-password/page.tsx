import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Forgot password",
  description: "Reset your HotHawk account password securely.",
  path: "/forgot-password",
});

export default function ForgotPasswordPage() {
  return (
    <main className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-semibold">Reset password</h1>
      <form className="mt-6 space-y-3">
        <input className="w-full rounded-md border border-slate-800 bg-slate-900 px-3 py-2" placeholder="Account ID" />
        <button className="w-full rounded-md bg-sky-500 px-4 py-2 font-medium text-slate-950">Send reset link</button>
      </form>
    </main>
  );
}

