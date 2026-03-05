interface DodoPaymentRecord {
  status?: string;
  payment_status?: string;
  product_id?: string;
  productId?: string;
  metadata?: Record<string, unknown> | null;
  product_cart?: Array<{ product_id?: string; productId?: string }>;
}

function getPremiumEmailAllowlist(): Set<string> {
  return new Set(
    (process.env.PREMIUM_EMAIL_ALLOWLIST ?? "")
      .split(",")
      .map((value) => value.trim().toLowerCase())
      .filter(Boolean),
  );
}

function resolveDodoBaseUrl(): string {
  const environment = process.env.DODO_PAYMENTS_ENVIRONMENT ?? "live_mode";
  return environment === "test_mode"
    ? "https://test.dodopayments.com"
    : "https://live.dodopayments.com";
}

function isSuccessfulPayment(record: DodoPaymentRecord): boolean {
  const status = (record.status ?? record.payment_status ?? "").toLowerCase();
  return (
    status === "succeeded" ||
    status === "success" ||
    status === "paid" ||
    status === "captured"
  );
}

function paymentMatchesProduct(record: DodoPaymentRecord): boolean {
  const configuredProductId = process.env.DODO_CHROME_EXTENSION_PRODUCT_ID?.trim();
  if (!configuredProductId) return true;

  const directProductId = record.product_id ?? record.productId;
  if (directProductId === configuredProductId) return true;

  const cartProductIds = (record.product_cart ?? [])
    .map((item) => item.product_id ?? item.productId)
    .filter(Boolean);
  if (cartProductIds.includes(configuredProductId)) return true;

  const metadataProduct = typeof record.metadata?.product === "string"
    ? record.metadata.product
    : null;
  return metadataProduct === "chrome_extension_lifetime";
}

async function hasDodoPremiumPayment(email: string): Promise<boolean> {
  const apiKey = process.env.DODO_PAYMENTS_API_KEY?.trim();
  if (!apiKey) return false;

  const baseUrl = resolveDodoBaseUrl();
  const url = `${baseUrl}/payments?customer_email=${encodeURIComponent(email)}&status=succeeded&limit=25`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      return false;
    }

    const payload = (await response.json()) as
      | { data?: DodoPaymentRecord[]; payments?: DodoPaymentRecord[] }
      | DodoPaymentRecord[];

    const records = Array.isArray(payload)
      ? payload
      : payload.data ?? payload.payments ?? [];

    return records.some(
      (record) => isSuccessfulPayment(record) && paymentMatchesProduct(record),
    );
  } catch (error) {
    console.error("Failed to resolve premium from Dodo payments:", error);
    return false;
  }
}

export async function resolvePremiumEntitlement(email: string): Promise<boolean> {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return false;

  if (process.env.PREMIUM_ALL_USERS === "true") {
    return true;
  }

  const allowlist = getPremiumEmailAllowlist();
  if (allowlist.has(normalizedEmail)) {
    return true;
  }

  // Keep local/test workflows unblocked by default.
  if ((process.env.DODO_PAYMENTS_ENVIRONMENT ?? "live_mode") === "test_mode") {
    return process.env.PREMIUM_TEST_MODE_ALL_USERS !== "false";
  }

  return hasDodoPremiumPayment(normalizedEmail);
}
