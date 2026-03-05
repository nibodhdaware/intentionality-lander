import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CheckoutSuccessPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/[0.04] p-10 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
          <CheckCircle2 className="h-8 w-8 text-emerald-400" />
        </div>
        <h1 className="text-3xl font-bold text-white">Payment successful</h1>
        <p className="mt-4 text-slate-300">
          Your Premium access is being activated. You can now continue from the
          extension and unlock paid features.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild className="bg-sky-500 text-white hover:bg-sky-600">
            <Link href="/">Back to home</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="border-white/20 bg-white/5 text-white hover:bg-white/10"
          >
            <Link href="/downloads">Open downloads</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
