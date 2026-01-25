"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Send } from "lucide-react";
import Link from "next/link";
import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ReportProblem() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    try {
      await addDoc(collection(db, "issues"), {
        title,
        description,
        timestamp: serverTimestamp(),
        userAgent: navigator.userAgent,
      });
      setStatus("Issue submitted successfully!");
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error submitting issue:", error);
      setStatus("Failed to submit issue. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#18344a] flex items-center justify-center p-4">
      <Card className="w-full max-w-lg bg-white dark:bg-slate-900 border-none shadow-2xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold text-[#18344A] dark:text-slate-100">
            Report a Problem
          </CardTitle>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            If you encounter any issues or have suggestions, please let us know.
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Issue Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="dark:bg-slate-800 dark:border-slate-700"
            />
            <textarea
              className="w-full min-h-[120px] p-3 rounded-md border border-input bg-background text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-slate-800 dark:border-slate-700"
              placeholder="Describe the issue or suggestion..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-[#18344A] hover:bg-[#295B7A] text-white"
            >
              <Send className="mr-2 h-4 w-4" />
              {loading ? "Submitting..." : "Submit Issue"}
            </Button>
            <Button asChild variant="outline" className="w-full">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
            {status && (
              <p className={`text-center font-semibold mt-4 ${status.includes("successfully") ? "text-green-600 dark:text-green-400" : "text-red-600"}`}>
                {status}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </main>
  );
}
