"use client";

import { FormEvent, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { Button } from "@/components/ui/button";
import { auth, googleProvider } from "@/lib/firebase-auth-client";

type Mode = "login" | "register";

export default function ExtensionAuthPage() {
  const searchParams = useSearchParams();
  const state = searchParams.get("state") ?? "";
  const nextPath = searchParams.get("next") ?? "/#pricing";
  const isExtensionFlow = state.length >= 8;

  const [mode, setMode] = useState<Mode>("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const canSubmit = useMemo(() => {
    return (
      email.trim().length > 3 &&
      password.length >= 6 &&
      !isLoading
    );
  }, [email, password, isLoading]);

  const completeExtensionAuth = async (idToken: string) => {
    const response = await fetch("/api/extension-auth/session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idToken,
        state,
      }),
    });
    const payload = await response.json();
    if (!response.ok || !payload.redirectUrl) {
      throw new Error(payload.error ?? "Unable to connect extension.");
    }

    window.location.href = payload.redirectUrl;
  };

  const handleGoogle = async () => {
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      const idToken = await result.user.getIdToken(true);
      if (isExtensionFlow) {
        await completeExtensionAuth(idToken);
      } else {
        window.location.href = nextPath;
      }
    } catch (authError) {
      const message =
        authError instanceof Error
          ? authError.message
          : "Google sign-in failed.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailPassword = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setSuccess(null);
    setIsLoading(true);

    try {
      if (mode === "register") {
        await createUserWithEmailAndPassword(auth, email.trim(), password);
      } else {
        await signInWithEmailAndPassword(auth, email.trim(), password);
      }

      const idToken = await auth.currentUser?.getIdToken(true);
      if (!idToken) {
        throw new Error("Unable to create session token.");
      }

      if (isExtensionFlow) {
        await completeExtensionAuth(idToken);
      } else {
        window.location.href = nextPath;
      }
    } catch (authError) {
      const message =
        authError instanceof Error
          ? authError.message
          : "Authentication failed.";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#0f1a2a] px-6 py-20 text-slate-200">
      <div className="mx-auto max-w-md rounded-3xl border border-white/10 bg-white/[0.04] p-8">
        <p className="text-xs uppercase tracking-[0.2em] text-sky-400">
          {isExtensionFlow ? "Chrome Extension Login" : "Account Login"}
        </p>
        <h1 className="mt-3 text-2xl font-bold text-white">
          {isExtensionFlow
            ? "Connect your Intentionality account"
            : "Sign in to Intentionality"}
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          {isExtensionFlow
            ? "Sign in with Google or email/password to unlock account-based Premium access in the extension."
            : "Sign in with Google or email/password before purchasing Premium."}
        </p>

        <Button
          type="button"
          onClick={handleGoogle}
          disabled={isLoading}
          className="mt-6 h-11 w-full bg-white text-[#0f1a2a] hover:bg-slate-100"
        >
          {isLoading ? "Please wait..." : "Continue with Google"}
        </Button>

        <div className="my-6 h-px bg-white/10" />

        <form onSubmit={handleEmailPassword} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Email"
            className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-sky-500/60 focus:outline-none"
          />
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Password (min 6 chars)"
            className="h-11 w-full rounded-xl border border-white/15 bg-white/5 px-4 text-sm text-white placeholder:text-slate-500 focus:border-sky-500/60 focus:outline-none"
          />
          <Button
            type="submit"
            disabled={!canSubmit}
            className="h-11 w-full bg-sky-500 text-white hover:bg-sky-600"
          >
            {isLoading
              ? "Connecting..."
              : mode === "register"
                ? isExtensionFlow
                  ? "Create account & connect"
                  : "Create account"
                : isExtensionFlow
                  ? "Sign in & connect"
                  : "Sign in"}
          </Button>
        </form>

        <button
          type="button"
          onClick={() => {
            setError(null);
            setSuccess(null);
            setMode(mode === "login" ? "register" : "login");
          }}
          className="mt-4 text-sm text-sky-400 hover:text-sky-300"
        >
          {mode === "login"
            ? "Need an account? Create one"
            : "Already have an account? Sign in"}
        </button>

        {error && (
          <p className="mt-4 rounded-xl border border-rose-500/40 bg-rose-500/10 px-3 py-2 text-sm text-rose-200">
            {error}
          </p>
        )}
        {success && (
          <p className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-200">
            {success}
          </p>
        )}
      </div>
    </main>
  );
}
