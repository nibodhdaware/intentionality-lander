import crypto from "crypto";

export interface ExtensionAuthClaims {
  uid: string;
  email: string;
  name?: string;
  isPremium: boolean;
  iat: number;
  exp: number;
}

function base64url(input: Buffer | string): string {
  return Buffer.from(input)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/g, "");
}

function fromBase64url(input: string): Buffer {
  const padded = input.replace(/-/g, "+").replace(/_/g, "/");
  const missing = (4 - (padded.length % 4)) % 4;
  return Buffer.from(padded + "=".repeat(missing), "base64");
}

function safeEqualString(a: string, b: string): boolean {
  const aBuffer = Buffer.from(a);
  const bBuffer = Buffer.from(b);
  if (aBuffer.length !== bBuffer.length) return false;
  return crypto.timingSafeEqual(aBuffer, bBuffer);
}

export function signExtensionToken(
  claims: ExtensionAuthClaims,
  secret: string,
): string {
  const payload = base64url(JSON.stringify(claims));
  const signature = base64url(
    crypto.createHmac("sha256", secret).update(payload).digest(),
  );
  return `v1.${payload}.${signature}`;
}

export function verifyExtensionToken(
  token: string,
  secret: string,
): ExtensionAuthClaims {
  const parts = token.split(".");
  if (parts.length !== 3 || parts[0] !== "v1") {
    throw new Error("Invalid extension auth token format.");
  }

  const payload = parts[1];
  const signature = parts[2];
  const expectedSignature = base64url(
    crypto.createHmac("sha256", secret).update(payload).digest(),
  );

  if (!safeEqualString(signature, expectedSignature)) {
    throw new Error("Invalid extension auth token signature.");
  }

  const claims = JSON.parse(
    fromBase64url(payload).toString("utf8"),
  ) as ExtensionAuthClaims;
  if (!claims.exp || Date.now() >= claims.exp * 1000) {
    throw new Error("Extension auth token expired.");
  }

  return claims;
}
