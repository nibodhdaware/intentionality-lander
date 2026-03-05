import { NextRequest, NextResponse } from "next/server";

import {
  signExtensionToken,
  type ExtensionAuthClaims,
} from "@/lib/extensionAuth";
import { resolvePremiumEntitlement } from "@/lib/premiumEntitlement";

interface FirebaseLookupResponse {
  users?: Array<{
    localId: string;
    email?: string;
    displayName?: string;
  }>;
  error?: {
    message?: string;
  };
}

interface ExtensionAuthSessionRequest {
  idToken?: string;
  state?: string;
}

function resolveAppUrl(request: NextRequest): string {
  const requestUrl = new URL(request.url);
  return (
    process.env.NEXT_PUBLIC_APP_URL ??
    `${requestUrl.protocol}//${requestUrl.host}`
  );
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as ExtensionAuthSessionRequest;
    const idToken = body.idToken?.trim();
    const state = body.state?.trim();

    if (!idToken || !state || state.length < 8 || state.length > 200) {
      return NextResponse.json(
        { error: "Missing or invalid idToken/state." },
        { status: 400 },
      );
    }

    const firebaseApiKey =
      process.env.FIREBASE_WEB_API_KEY ??
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
      "AIzaSyCepAVjbZsx0z-M0sTvgp48AAt4bYBSq-U";

    const lookupResponse = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ idToken }),
      },
    );

    const lookupPayload = (await lookupResponse.json()) as FirebaseLookupResponse;
    const user = lookupPayload.users?.[0];

    if (!lookupResponse.ok || !user?.localId || !user?.email) {
      return NextResponse.json(
        { error: "Unable to validate Firebase user identity." },
        { status: 401 },
      );
    }

    const tokenSecret = process.env.EXTENSION_AUTH_SECRET;
    if (!tokenSecret) {
      return NextResponse.json(
        { error: "Missing EXTENSION_AUTH_SECRET." },
        { status: 500 },
      );
    }

    const email = user.email.toLowerCase();
    const isPremium = await resolvePremiumEntitlement(email);

    const now = Math.floor(Date.now() / 1000);
    const claims: ExtensionAuthClaims = {
      uid: user.localId,
      email,
      name: user.displayName,
      isPremium,
      iat: now,
      exp: now + 60 * 60 * 24 * 7,
    };

    const extensionToken = signExtensionToken(claims, tokenSecret);
    const appUrl = resolveAppUrl(request);
    const redirectUrl = `${appUrl}/extension-auth/success?state=${encodeURIComponent(state)}&token=${encodeURIComponent(extensionToken)}`;

    return NextResponse.json({
      success: true,
      redirectUrl,
    });
  } catch (error) {
    console.error("Failed to create extension auth session:", error);
    return NextResponse.json(
      { error: "Unable to create extension auth session." },
      { status: 500 },
    );
  }
}
