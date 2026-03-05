import type { Metadata } from "next";
import Link from "next/link";

import { alternativePages } from "@/lib/pseo";

export const metadata: Metadata = {
  title: "Intentionality Alternatives Pages",
  description:
    "See how Intentionality compares to popular focus and anti-distraction apps.",
  alternates: {
    canonical: "/alternatives",
  },
  openGraph: {
    title: "Intentionality Alternatives Pages",
    description:
      "See how Intentionality compares to popular focus and anti-distraction apps.",
    url: "https://intentionality.app/alternatives",
    type: "website",
  },
};

export default function AlternativesHubPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Intentionality Alternatives</h1>
        <p className="mt-4 max-w-3xl text-slate-400">
          Alternative guides for users evaluating distraction blockers and mindful browsing tools.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {alternativePages.map((page) => (
            <Link
              key={page.slug}
              href={`/alternatives/${page.slug}`}
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
