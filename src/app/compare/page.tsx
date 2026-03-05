import type { Metadata } from "next";
import Link from "next/link";

import { comparisonPages } from "@/lib/pseo";

export const metadata: Metadata = {
  title: "Intentionality Comparisons",
  description:
    "Compare Intentionality with popular distraction blockers to find the right focus strategy for your workflow.",
  alternates: {
    canonical: "/compare",
  },
  openGraph: {
    title: "Intentionality Comparisons",
    description:
      "Compare Intentionality with popular distraction blockers to find the right focus strategy for your workflow.",
    url: "https://intentionality.app/compare",
    type: "website",
  },
};

export default function CompareHubPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Intentionality Comparisons
        </h1>
        <p className="mt-4 max-w-3xl text-slate-400">
          Side-by-side breakdowns of Intentionality and other focus tools.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {comparisonPages.map((page) => (
            <Link
              key={page.slug}
              href={`/compare/${page.slug}`}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:border-sky-500/40 hover:bg-white/[0.06]"
            >
              <h2 className="text-xl font-semibold text-white">{page.title}</h2>
              <p className="mt-2 text-sm text-slate-400">{page.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
