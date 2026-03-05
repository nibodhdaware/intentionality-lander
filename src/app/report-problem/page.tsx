import ReportProblemContent from "./ReportProblemContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report a Problem",
  description: "Encountered an issue or have a suggestion? Let us know so we can improve Intentionality.",
  alternates: {
    canonical: "/report-problem",
  },
  openGraph: {
    title: "Report a Problem | Intentionality",
    description: "Encountered an issue or have a suggestion? Let us know so we can improve Intentionality.",
    url: "https://intentionality.app/report-problem",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Report a Problem | Intentionality",
    description: "Encountered an issue or have a suggestion? Let us know so we can improve Intentionality.",
  },
};

export default function ReportProblem() {
  return <ReportProblemContent />;
}
