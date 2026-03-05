import { NextRequest, NextResponse } from "next/server";

interface CheckoutRequestBody {
  name?: string;
}

interface FirebaseLookupResponse {
  users?: Array<{
    localId: string;
    email?: string;
    displayName?: string;
  }>;
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = (await request.json()) as CheckoutRequestBody;
    const requestedName = body.name?.trim();

    const authHeader = request.headers.get("authorization") ?? "";
    const idToken = authHeader.startsWith("Bearer ")
      ? authHeader.slice("Bearer ".length).trim()
      : "";
    if (!idToken) {
      return NextResponse.json(
        { error: "You must be logged in before purchasing." },
        { status: 401 },
      );
    }

    const apiKey = process.env.DODO_PAYMENTS_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Payments are not configured." },
        { status: 500 },
      );
    }

    const productId = process.env.DODO_CHROME_EXTENSION_PRODUCT_ID;
    if (!productId) {
      return NextResponse.json(
        { error: "Missing DODO_CHROME_EXTENSION_PRODUCT_ID." },
        { status: 500 },
      );
    }

    const requestUrl = new URL(request.url);
    const appUrl =
      process.env.NEXT_PUBLIC_APP_URL ??
      `${requestUrl.protocol}//${requestUrl.host}`;
    const environment = process.env.DODO_PAYMENTS_ENVIRONMENT ?? "live_mode";
    const dodoBaseUrl =
      environment === "test_mode"
        ? "https://test.dodopayments.com"
        : "https://live.dodopayments.com";
    const firebaseApiKey =
      process.env.FIREBASE_WEB_API_KEY ??
      process.env.NEXT_PUBLIC_FIREBASE_API_KEY ??
      "AIzaSyCepAVjbZsx0z-M0sTvgp48AAt4bYBSq-U";

    const lookupResponse = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${firebaseApiKey}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ idToken }),
      },
    );
    const lookupPayload = (await lookupResponse.json()) as FirebaseLookupResponse;
    const firebaseUser = lookupPayload.users?.[0];
    const email = firebaseUser?.email?.trim().toLowerCase();
    const customerName = requestedName || firebaseUser?.displayName;
    if (!lookupResponse.ok || !firebaseUser?.localId || !email) {
      return NextResponse.json(
        { error: "Unable to validate your login session. Please sign in again." },
        { status: 401 },
      );
    }

    let dodoResponse: Response;
    try {
      dodoResponse = await fetch(`${dodoBaseUrl}/checkouts`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product_cart: [{ product_id: productId, quantity: 1 }],
          allowed_payment_method_types: ["upi_intent", "upi_collect", "credit", "debit"],
          billing_currency: "INR",
          customer: {
            email,
            ...(customerName ? { name: customerName } : {}),
          },
          metadata: {
            source: "intentionality_web",
            product: "chrome_extension_lifetime",
            firebase_uid: firebaseUser.localId,
          },
          return_url: `${appUrl}/checkout/success`,
        }),
      });
    } catch (networkError) {
      console.error("Failed to reach Dodo API:", networkError);
      return NextResponse.json(
        {
          error: "Unable to reach Dodo Payments from this environment.",
        },
        { status: 503 },
      );
    }

    const payload = (await dodoResponse.json()) as {
      checkout_url?: string;
      checkout_session_id?: string;
      message?: string;
      error?: string;
    };

    if (!dodoResponse.ok || !payload.checkout_url) {
      const message =
        payload.error ??
        payload.message ??
        "Failed to create checkout session.";
      return NextResponse.json(
        { error: message },
        { status: dodoResponse.status || 502 },
      );
    }

    return NextResponse.json({
      checkoutUrl: payload.checkout_url,
      checkoutSessionId: payload.checkout_session_id ?? null,
    });
  } catch (error) {
    console.error("Checkout creation failed:", error);
    return NextResponse.json(
      { error: "Unable to create checkout session." },
      { status: 500 },
    );
  }
}
