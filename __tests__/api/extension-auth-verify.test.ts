/**
 * @jest-environment node
 */
import { POST } from "@/app/api/extension-auth/verify/route";
import { signExtensionToken } from "@/lib/extensionAuth";

describe("POST /api/extension-auth/verify", () => {
  const originalEnv = process.env;

  beforeEach(() => {
    process.env = {
      ...originalEnv,
      EXTENSION_AUTH_SECRET: "test_extension_secret",
      PREMIUM_ALL_USERS: "true",
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("returns 400 when token is missing", async () => {
    const request = new Request("http://localhost/api/extension-auth/verify", {
      method: "POST",
      body: JSON.stringify({}),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(400);
  });

  it("returns 401 for invalid token", async () => {
    const request = new Request("http://localhost/api/extension-auth/verify", {
      method: "POST",
      body: JSON.stringify({ token: "invalid.token.value" }),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(401);
  });

  it("returns user + premium state for valid token", async () => {
    const now = Math.floor(Date.now() / 1000);
    const token = signExtensionToken(
      {
        uid: "uid_abc",
        email: "user@example.com",
        name: "Test User",
        isPremium: true,
        iat: now,
        exp: now + 3600,
      },
      process.env.EXTENSION_AUTH_SECRET as string,
    );

    const request = new Request("http://localhost/api/extension-auth/verify", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    const response = await POST(request as never);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.success).toBe(true);
    expect(payload.isPremium).toBe(true);
    expect(payload.user.email).toBe("user@example.com");
  });

  it("re-resolves premium status instead of trusting token claim", async () => {
    process.env.PREMIUM_ALL_USERS = "false";
    process.env.PREMIUM_EMAIL_ALLOWLIST = "";
    process.env.DODO_PAYMENTS_ENVIRONMENT = "test_mode";

    const now = Math.floor(Date.now() / 1000);
    const token = signExtensionToken(
      {
        uid: "uid_abc",
        email: "user@example.com",
        name: "Test User",
        isPremium: false,
        iat: now,
        exp: now + 3600,
      },
      process.env.EXTENSION_AUTH_SECRET as string,
    );

    const request = new Request("http://localhost/api/extension-auth/verify", {
      method: "POST",
      body: JSON.stringify({ token }),
    });

    const response = await POST(request as never);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.isPremium).toBe(true);
  });
});
