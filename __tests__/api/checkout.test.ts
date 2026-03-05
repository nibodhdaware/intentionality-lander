/**
 * @jest-environment node
 */
import { POST } from "@/app/api/checkout/route";

describe("POST /api/checkout", () => {
  const originalEnv = process.env;
  const fetchMock = jest.fn();

  beforeAll(() => {
    global.fetch = fetchMock as unknown as typeof fetch;
  });

  beforeEach(() => {
    jest.clearAllMocks();
    process.env = {
      ...originalEnv,
      DODO_PAYMENTS_API_KEY: "test_key",
      DODO_CHROME_EXTENSION_PRODUCT_ID: "prod_chrome_extension",
      NEXT_PUBLIC_APP_URL: "https://intentionality.app",
      DODO_PAYMENTS_ENVIRONMENT: "test_mode",
      FIREBASE_WEB_API_KEY: "firebase_test_key",
    };
  });

  afterAll(() => {
    process.env = originalEnv;
  });

  function buildRequest(body: Record<string, unknown> = {}) {
    return new Request("http://localhost/api/checkout", {
      method: "POST",
      headers: {
        Authorization: "Bearer firebase_id_token",
      },
      body: JSON.stringify(body),
    });
  }

  it("returns 401 when auth token is missing", async () => {
    const request = new Request("http://localhost/api/checkout", {
      method: "POST",
      body: JSON.stringify({}),
    });

    const response = await POST(request as never);
    expect(response.status).toBe(401);
  });

  it("returns 500 when API key is missing", async () => {
    delete process.env.DODO_PAYMENTS_API_KEY;

    const response = await POST(buildRequest({}) as never);
    expect(response.status).toBe(500);
  });

  it("returns 500 when product id is missing", async () => {
    delete process.env.DODO_CHROME_EXTENSION_PRODUCT_ID;

    const response = await POST(buildRequest({}) as never);
    expect(response.status).toBe(500);
  });

  it("returns 401 when Firebase lookup fails", async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: async () => ({ error: { message: "INVALID_ID_TOKEN" } }),
    });

    const response = await POST(buildRequest({}) as never);
    expect(response.status).toBe(401);
  });

  it("returns checkout URL when Dodo responds successfully", async () => {
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          users: [
            {
              localId: "uid_123",
              email: "person@example.com",
              displayName: "Person",
            },
          ],
        }),
      })
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          checkout_url: "https://checkout.dodopayments.com/test",
          checkout_session_id: "chk_123",
        }),
      });

    const response = await POST(buildRequest({}) as never);
    const payload = await response.json();

    expect(response.status).toBe(200);
    expect(payload.checkoutUrl).toBe("https://checkout.dodopayments.com/test");
    expect(payload.checkoutSessionId).toBe("chk_123");
    expect(fetchMock).toHaveBeenCalledTimes(2);
  });

  it("returns upstream errors from Dodo", async () => {
    fetchMock
      .mockResolvedValueOnce({
        ok: true,
        json: async () => ({
          users: [{ localId: "uid_123", email: "person@example.com" }],
        }),
      })
      .mockResolvedValueOnce({
        ok: false,
        status: 422,
        json: async () => ({
          error: "Invalid product",
        }),
      });

    const response = await POST(buildRequest({}) as never);
    const payload = await response.json();

    expect(response.status).toBe(422);
    expect(payload.error).toBe("Invalid product");
  });
});
