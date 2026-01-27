import DownloadsContent from "./DownloadsContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Get Intentionality on all your devices. Available for Chrome, and coming soon to Android, iOS, and Firefox.",
};

export default function DownloadsPage() {
  return <DownloadsContent />;
}