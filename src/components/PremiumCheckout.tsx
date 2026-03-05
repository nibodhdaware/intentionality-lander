"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { onAuthStateChanged, type User } from "firebase/auth";
import { CheckCircle2, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { auth } from "@/lib/firebase-auth-client";

export default function PremiumCheckout() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  const isDisabled = useMemo(() => isLoading || !user, [isLoading, user]);

  const startCheckout = async () => {
    if (!user) {
      setError("Please log in first to purchase Premium.");
      return;
    }

    setError(null);
    setIsLoading(true);

    try {
      const idToken = await user.getIdToken(true);
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${idToken}`,
        },
        body: JSON.stringify({
          name: user.displayName || undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.checkoutUrl) {
        throw new Error(data.error || "Unable to start checkout.");
      }

      window.location.href = data.checkoutUrl;
    } catch (checkoutError) {
      const message =
        checkoutError instanceof Error
          ? checkoutError.message
          : "Unable to start checkout.";
      setError(message);
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {!user ? (
        <div className="rounded-2xl border border-amber-500/40 bg-amber-500/10 p-4">
          <p className="text-sm text-amber-100">
            Log in on intentionality.app before purchasing Premium.
          </p>
          <Button
            asChild
            className="mt-3 h-10 rounded-xl bg-white text-[#0f1a2a] hover:bg-slate-200"
          >
            <Link href="/extension-auth?next=%2F%23pricing">Log in to continue</Link>
          </Button>
        </div>
      ) : (
        <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          Logged in as <strong>{user.email}</strong>
        </div>
      )}

      <div className="rounded-3xl border border-sky-500/40 bg-sky-500/10 p-8">
        <p className="text-xs uppercase tracking-[0.22em] text-sky-300">Chrome Extension Premium</p>
        <p className="mt-3 text-4xl font-black text-white">$9</p>
        <p className="mt-1 text-sm text-slate-100">one-time payment</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-100">
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300" />
            Lifetime access for this extension purchase
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300" />
            Dumbness graph and trend insights
          </li>
          <li className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-sky-300" />
            Per-site prompt customization and advanced controls
          </li>
        </ul>
        <Button
          onClick={startCheckout}
          disabled={isDisabled}
          className="mt-8 h-12 w-full rounded-xl bg-white font-bold text-[#0f1a2a] hover:bg-slate-200 disabled:opacity-70"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Redirecting...
            </>
          ) : (
            "Unlock for $9"
          )}
        </Button>
      </div>

      {error && (
        <p className="rounded-xl border border-rose-500/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
          {error}
        </p>
      )}
    </div>
  );
}
