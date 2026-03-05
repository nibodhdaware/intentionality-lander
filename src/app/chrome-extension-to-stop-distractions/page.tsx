import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chrome Extension to Stop Distractions",
  description:
    "Looking for a Chrome extension to stop distractions? Intentionality adds a mindful pause before distracting sites so you stay focused without hard lockouts.",
  keywords: [
    "chrome extension to stop distractions",
    "website blocker that asks why",
    "website blocker extension",
    "anti doomscrolling app",
  ],
  alternates: {
    canonical: "/chrome-extension-to-stop-distractions",
  },
  openGraph: {
    title: "Chrome Extension to Stop Distractions | Intentionality",
    description:
      "Intentionality is a Chrome extension to stop distractions with prompt-based friction and mindful browsing.",
    url: "https://intentionality.app/chrome-extension-to-stop-distractions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chrome Extension to Stop Distractions | Intentionality",
    description:
      "Use prompt-based friction to break distraction loops and browse intentionally.",
  },
};

export default function ChromeExtensionStopDistractionsPage() {
  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Chrome Extension to Stop Distractions
        </h1>
        <p className="mt-4 text-slate-400">
          Intentionality helps you stop distractions by asking why you are visiting a
          distracting site before it opens. This simple pause breaks automatic
          scrolling loops and helps you make intentional choices.
        </p>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold text-white">Why it works</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-300">
            <li>Interrupts impulsive tab opens with a clear prompt</li>
            <li>Builds long-term focus habits instead of only hard blocking</li>
            <li>Supports mindful browsing with privacy-first defaults</li>
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-2xl font-semibold text-white">Start now</h2>
          <p className="mt-3 text-slate-300">
            Install Intentionality from Chrome Web Store or compare all platform options.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://chromewebstore.google.com/detail/intentionality/bgmlmjomgakcgkgngpeimmkofpicpbfn"
              className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
            >
              Add to Chrome
            </a>
            <Link
              href="/downloads"
              className="inline-flex rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Download options
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
