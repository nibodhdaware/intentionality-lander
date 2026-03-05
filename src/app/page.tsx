import HomeContent from "./HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Intentionality | Stop Mindless Scrolling & Reclaim Your Focus",
  description: "Take control of your browsing habits. Pause before you scroll. Add Intentionality for mindful, distraction-free browsing.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeContent />;
}
