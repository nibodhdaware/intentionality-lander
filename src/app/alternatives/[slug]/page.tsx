import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { alternativePages } from "@/lib/pseo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return alternativePages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = alternativePages.find((item) => item.slug === slug);

  if (!page) {
    return { title: "Alternative Not Found" };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/alternatives/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://intentionality.app/alternatives/${slug}`,
      type: "article",
    },
  };
}

export default async function AlternativePage({ params }: PageProps) {
  const { slug } = await params;
  const page = alternativePages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <div className="mx-auto max-w-5xl">
        <Link href="/alternatives" className="text-sm text-sky-400 hover:text-sky-300">
          Back to alternatives
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-slate-400">{page.description}</p>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">Why users switch from {page.tool}</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {page.reasonsToSwitch.map((reason) => (
              <li key={reason}>{reason}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">What you gain with Intentionality</h2>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-300">
            {page.whatYouGain.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">FAQs</h2>
          <div className="mt-4 space-y-4">
            {page.faqs.map((faq) => (
              <div key={faq.question}>
                <h3 className="font-medium text-white">{faq.question}</h3>
                <p className="mt-1 text-sm text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/downloads"
            className="inline-flex rounded-full bg-sky-500 px-6 py-3 font-semibold text-white transition hover:bg-sky-600"
          >
            Install Intentionality
          </Link>
        </div>
      </div>
    </main>
  );
}
