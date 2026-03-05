import DownloadsContent from "./DownloadsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Download Intentionality Extension",
  description: "Download Intentionality extension for Chrome and Firefox to stop distractions with mindful prompts. Install now and browse with intention.",
  keywords: [
    "download intentionality extension",
    "chrome extension to stop distractions",
    "website blocker extension",
    "mindful browsing extension",
  ],
  alternates: {
    canonical: "/downloads",
  },
  openGraph: {
    title: "Download Intentionality Extension | Intentionality",
    description: "Download Intentionality extension for Chrome and Firefox to stop distractions with mindful prompts. Install now and browse with intention.",
    url: "https://intentionality.app/downloads",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Download Intentionality Extension | Intentionality",
    description: "Download Intentionality extension for Chrome and Firefox to stop distractions with mindful prompts. Install now and browse with intention.",
  },
};

export default function DownloadsPage() {
  return <DownloadsContent />;
}
