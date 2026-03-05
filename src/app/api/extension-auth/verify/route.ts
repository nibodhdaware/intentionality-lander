import { NextRequest, NextResponse } from "next/server";

import { verifyExtensionToken } from "@/lib/extensionAuth";
import { resolvePremiumEntitlement } from "@/lib/premiumEntitlement";

interface VerifyRequestBody {
  token?: string;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as VerifyRequestBody;
    const token = body.token?.trim();
    if (!token) {
      return NextResponse.json({ error: "Missing token." }, { status: 400 });
    }

    const tokenSecret = process.env.EXTENSION_AUTH_SECRET;
    if (!tokenSecret) {
      return NextResponse.json(
        { error: "Missing EXTENSION_AUTH_SECRET." },
        { status: 500 },
      );
    }

    const claims = verifyExtensionToken(token, tokenSecret);
    const resolvedPremium = await resolvePremiumEntitlement(claims.email);
    return NextResponse.json({
      success: true,
      isPremium: resolvedPremium,
      expiresAt: claims.exp * 1000,
      user: {
        uid: claims.uid,
        email: claims.email,
        name: claims.name ?? null,
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Invalid or expired token." },
      { status: 401 },
    );
  }
}
