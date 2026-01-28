import { guides } from "@/lib/guides";
import GuideContent from "./GuideContent";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return guides.map((guide) => ({
    slug: guide.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    return {
      title: "Guide Not Found",
    };
  }

  return {
    title: `${guide.title} | Intentionality`,
    description: guide.description,
    keywords: guide.keywords.join(", "),
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: "article",
      url: `https://intentionality.app/guides/${slug}`,
      images: [
        {
          url: "/iconog.png",
          width: 800,
          height: 600,
          alt: guide.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: guide.title,
      description: guide.description,
      images: ["/iconog.png"],
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = guides.find((g) => g.slug === slug);

  if (!guide) {
    notFound();
  }

  return <GuideContent guide={guide} />;
}
