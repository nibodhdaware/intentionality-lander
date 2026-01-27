import HomeContent from "./HomeContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Take control of your browsing habits. Pause before you scroll. Add Intentionality for mindful, distraction-free browsing.",
};

export default function Home() {
  return <HomeContent />;
}