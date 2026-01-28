import ReportProblemContent from "./ReportProblemContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Report a Problem",
  description: "Encountered an issue or have a suggestion? Let us know so we can improve Intentionality.",
};

export default function ReportProblem() {
  return <ReportProblemContent />;
}