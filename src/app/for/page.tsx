import type { Metadata } from "next";
import Link from "next/link";

import { personaPages } from "@/lib/pseo";

export const metadata: Metadata = {
  title: "Intentionality for Different Workflows",
  description:
    "Persona-based pages showing how Intentionality supports students and remote workers with mindful browsing.",
  alternates: {
    canonical: "/for",
  },
  openGraph: {
    title: "Intentionality for Different Workflows",
    description:
      "Persona-based pages showing how Intentionality supports students and remote workers with mindful browsing.",
    url: "https://intentionality.app/for",
    type: "website",
  },
};

export default function PersonaHubPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">Intentionality for You</h1>
        <p className="mt-4 max-w-3xl text-slate-400">
          Role-specific guides for reducing distraction and building intentional browsing habits.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {personaPages.map((page) => (
            <Link
              key={page.slug}
              href={`/for/${page.slug}`}
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
