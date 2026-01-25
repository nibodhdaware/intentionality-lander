import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function Changelog() {
  return (
    <main className="min-h-screen bg-[#18344a] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 dark:bg-slate-900 dark:text-slate-100">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-[#18344A] mb-2 dark:text-slate-100">
              Changelog
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Track the evolution of Intentionality
            </p>
          </div>

          {/* Version 1.2 */}
          <div className="bg-[#4A90A4]/10 rounded-lg p-6 mb-6 dark:bg-[#4A90A4]/20 transition-transform hover:translate-y-[-2px] hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#18344A] dark:text-slate-100">
                Version 1.2
              </h2>
              <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-yellow-900 dark:text-yellow-300">
                In Review
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Status: In Review - Expected Release: January 20, 2025
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#18344A] dark:text-slate-100 mb-2">
                  ✨ New Features
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Automatic blocking system - websites in blocklist are blocked immediately</li>
                  <li>Simplified permission model - uses only essential permissions</li>
                  <li>Enhanced activity tracking with automatic logging</li>
                  <li>Improved error handling and CSP compliance</li>
                  <li>Uninstall feedback collection system</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Version 1.1 */}
          <div className="bg-[#4A90A4]/10 rounded-lg p-6 mb-6 dark:bg-[#4A90A4]/20 transition-transform hover:translate-y-[-2px] hover:shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-[#18344A] dark:text-slate-100">
                Version 1.1
              </h2>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                Previous
              </span>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Released: June 29, 2025
            </p>

            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-[#18344A] dark:text-slate-100 mb-2">
                  ✨ New Features
                </h3>
                <ul className="list-disc list-inside space-y-1 text-gray-700 dark:text-gray-300">
                  <li>Dark mode support for all landing pages</li>
                  <li>Enhanced user feedback system</li>
                  <li>Improved browser compatibility</li>
                  <li>Added comprehensive changelog page</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center mt-8">
            <Button asChild variant="outline" className="gap-2">
              <Link href="/">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
