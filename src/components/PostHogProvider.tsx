"use client";

import { useEffect, type ReactNode } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import posthog from "posthog-js";

export default function PostHogProvider({
  children,
}: {
  children: ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    if (!key) return;

    posthog.init(key, {
      api_host:
        process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com",
      capture_pageview: false,
    });
  }, []);

  useEffect(() => {
    if (!process.env.NEXT_PUBLIC_POSTHOG_KEY || !pathname) return;
    const query = searchParams?.toString();
    posthog.capture("$pageview", {
      $current_url: query ? `${pathname}?${query}` : pathname,
    });
  }, [pathname, searchParams]);

  return <>{children}</>;
}
