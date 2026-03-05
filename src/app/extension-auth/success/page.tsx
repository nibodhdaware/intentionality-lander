import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function ExtensionAuthSuccessPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-emerald-400">
          Connected
        </p>
        <h1 className="mt-3 text-2xl font-bold text-white">
          Extension authentication complete
        </h1>
        <p className="mt-3 text-sm text-slate-300">
          You can close this tab and return to the extension popup.
        </p>
        <div className="mt-6">
          <Button asChild className="bg-sky-500 text-white hover:bg-sky-600">
            <Link href="/">Back to intentionality.app</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
