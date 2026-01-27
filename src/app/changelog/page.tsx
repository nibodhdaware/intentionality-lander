import ChangelogContent from "./ChangelogContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Track the evolution of the Intentionality Chrome Extension as we build the future of mindful browsing.",
};

export default function ChangelogPage() {
  return <ChangelogContent />;
}
