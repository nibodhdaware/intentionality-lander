import ChangelogContent from "./ChangelogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog",
  description: "Track the evolution of the Intentionality Chrome Extension as we build the future of mindful browsing.",
  alternates: {
    canonical: "/changelog",
  },
  openGraph: {
    title: "Changelog | Intentionality",
    description: "Track the evolution of the Intentionality Chrome Extension as we build the future of mindful browsing.",
    url: "https://intentionality.app/changelog",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Changelog | Intentionality",
    description: "Track the evolution of the Intentionality Chrome Extension as we build the future of mindful browsing.",
  },
};

export default function ChangelogPage() {
  return <ChangelogContent />;
}
