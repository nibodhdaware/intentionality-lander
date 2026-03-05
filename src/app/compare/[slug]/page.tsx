import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { comparisonPages } from "@/lib/pseo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return comparisonPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = comparisonPages.find((item) => item.slug === slug);

  if (!page) {
    return { title: "Comparison Not Found" };
  }

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/compare/${slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `https://intentionality.app/compare/${slug}`,
      type: "article",
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const page = comparisonPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-24 text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-5xl">
        <Link href="/compare" className="text-sm text-sky-400 hover:text-sky-300">
          Back to comparisons
        </Link>
        <h1 className="mt-4 text-4xl font-bold text-white md:text-5xl">{page.title}</h1>
        <p className="mt-4 text-slate-400">{page.description}</p>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-lg font-semibold text-white">Intentionality is best for</h2>
            <p className="mt-2 text-sm text-slate-300">{page.idealForIntentionality}</p>
          </section>
          <section className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-lg font-semibold text-white">{page.competitor} is best for</h2>
            <p className="mt-2 text-sm text-slate-300">{page.idealForCompetitor}</p>
          </section>
        </div>

        <section className="mt-8 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
          <h2 className="text-xl font-semibold text-white">Feature comparison</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 text-slate-300">
                  <th className="py-2 pr-4">Feature</th>
                  <th className="py-2 pr-4">Intentionality</th>
                  <th className="py-2">{page.competitor}</th>
                </tr>
              </thead>
              <tbody>
                {page.featureRows.map((row) => (
                  <tr key={row.feature} className="border-b border-white/5 align-top">
                    <td className="py-3 pr-4 text-white">{row.feature}</td>
                    <td className="py-3 pr-4 text-slate-300">{row.intentionality}</td>
                    <td className="py-3 text-slate-300">{row.competitor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
