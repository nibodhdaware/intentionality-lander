/**
 * @jest-environment node
 */
import { POST } from "@/app/api/extension-auth/session/route";
import { verifyExtensionToken } from "@/lib/extensionAuth";

describe("POST /api/extension-auth/session", () => {
  const originalEnv = process.env;
  const fetchMock = jest.fn();

  beforeAll(() => {
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      EXTENSION_AUTH_SECRET: "test_extension_secret",
      FIREBASE_WEB_API_KEY: "test_firebase_key",
      NEXT_PUBLIC_APP_URL: "http://localhost:3000",
      PREMIUM_EMAIL_ALLOWLIST: "premium@example.com",
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  it("returns 400 for invalid input", async () => {
    const request = new Request("http://localhost/api/extension-auth/session", {
      method: "POST",
      body: JSON.stringify({ idToken: "x" }),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(400);
  });

  it("returns 401 when Firebase lookup fails", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: { message: "INVALID_ID_TOKEN" } }),
    });

    const request = new Request("http://localhost/api/extension-auth/session", {
      method: "POST",
      body: JSON.stringify({
        idToken: "bad-token",
        state: "abcd1234abcd1234",
      }),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(401);
  });

  it("returns redirect URL with a signed token", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        users: [
          {
            localId: "uid_123",
            email: "premium@example.com",
            displayName: "Premium User",
          },
        ],
      }),
    });

    const state = "abcd1234abcd1234";
    const request = new Request("http://localhost/api/extension-auth/session", {
      method: "POST",
      body: JSON.stringify({
        idToken: "good-token",
        state,
      }),
    });

    const response = await POST(request as never);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.success).toBe(true);
    expect(payload.redirectUrl).toContain("/extension-auth/success?");

    const redirect = new URL(payload.redirectUrl);
    expect(redirect.searchParams.get("state")).toBe(state);
    const token = redirect.searchParams.get("token");
    expect(token).toBeTruthy();

    const claims = verifyExtensionToken(
      token as string,
      process.env.EXTENSION_AUTH_SECRET as string,
    );
    expect(claims.uid).toBe("uid_123");
    expect(claims.email).toBe("premium@example.com");
    expect(claims.isPremium).toBe(true);
  });

  it("grants premium in test_mode by default", async () => {
    process.env.DODO_PAYMENTS_ENVIRONMENT = "test_mode";
    process.env.PREMIUM_EMAIL_ALLOWLIST = "";

    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: async () => ({
        users: [
          {
            localId: "uid_test",
            email: "normal@example.com",
            displayName: "Normal User",
          },
        ],
      }),
    });

    const request = new Request("http://localhost/api/extension-auth/session", {
      method: "POST",
      body: JSON.stringify({
        idToken: "good-token",
        state: "abcd1234abcd1234",
      }),
    });

    const response = await POST(request as never);
    const payload = await response.json();
    const redirect = new URL(payload.redirectUrl);
    const token = redirect.searchParams.get("token");
    const claims = verifyExtensionToken(
      token as string,
      process.env.EXTENSION_AUTH_SECRET as string,
    );

    expect(response.status).toBe(200);
    expect(claims.isPremium).toBe(true);
  });
});
