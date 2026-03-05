# API Documentation

This document provides details for the Intentionality API. External clients (Chrome Extension, Mobile App) should use these endpoints to sync data anonymously.

## Base URL
`https://intentionality.app/api` (Production)
`http://localhost:3000/api` (Local Development)

---

## 1. Anonymous Data Sync
Syncs browsing or app usage intentions to the global database for anonymous analytics.

### `POST /sync`

**Endpoint:** `/api/sync`  
**Method:** `POST`  
**Auth:** None (Anonymous)

#### Request Body
The API accepts any JSON object. To ensure consistency with existing logic, the following schema is recommended:

| Field | Type | Description |
| :--- | :--- | :--- |
| `title` | `string` | Name of the site or app (e.g., "facebook.com", "Instagram") |
| `description` | `string` | The user's stated intention or reason. |
| `rating` | `number` | Intentionality score (1-5). |
| `userAgent` | `string` | Client device/browser information. |
| `packageName` | `string` | (Mobile only) Android package identifier. |

**Example Request:**
```json
{
  "title": "youtube.com",
  "description": "Educational research for project",
  "rating": 1,
  "userAgent": "Mozilla/5.0... Chrome/120.0.0.0"
}
```

#### Response
**Success (200 OK):**
```json
{
  "success": true,
  "id": "firestore-document-id"
}
```

**Error (400 Bad Request):**
```json
{
  "error": "Invalid data"
}
```

**Error (500 Internal Server Error):**
```json
{
  "error": "Detailed error message"
}
```

---

## 2. Issues & Feedback
Client applications can report bugs directly to the developer's Firestore collection via the landing page form or by mimicking the logic in `src/app/report-problem/page.tsx` using the Firebase SDK directly.

---

## 3. Premium Checkout Session
Creates a Dodo Payments hosted checkout session for the single Chrome extension product.

### `POST /checkout`

**Endpoint:** `/api/checkout`  
**Method:** `POST`  
**Auth:** Required (`Authorization: Bearer <Firebase ID token>`)

#### Environment Variables
- `DODO_PAYMENTS_API_KEY` (required)
- `DODO_CHROME_EXTENSION_PRODUCT_ID` (required)
- `DODO_PAYMENTS_ENVIRONMENT` (optional, defaults to `live_mode`)
- `NEXT_PUBLIC_APP_URL` (optional fallback for return URL)

#### Request Body

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `name` | `string` | No | Optional customer name override; fallback is Firebase display name |

**Example Request:**
```json
{
  "name": "Alex"
}
```

#### Response
**Success (200 OK):**
```json
{
  "checkoutUrl": "https://checkout.dodopayments.com/...",
  "checkoutSessionId": "chk_xxxxx"
}
```

**Error (401 Unauthorized):**
```json
{
  "error": "You must be logged in before purchasing."
}
```

**Error (500 Internal Server Error):**
```json
{
  "error": "Payments are not configured."
}
```

---

## 4. Extension Auth Session
Exchanges a Firebase ID token for a short-lived, signed extension token and returns a callback URL.

### `POST /extension-auth/session`

**Endpoint:** `/api/extension-auth/session`  
**Method:** `POST`  
**Auth:** Firebase ID token in request body

#### Environment Variables
- `EXTENSION_AUTH_SECRET` (required)
- `FIREBASE_WEB_API_KEY` (optional, falls back to `NEXT_PUBLIC_FIREBASE_API_KEY`)
- `NEXT_PUBLIC_APP_URL` (optional fallback for callback URL)
- `PREMIUM_EMAIL_ALLOWLIST` (optional, comma-separated emails)
- `PREMIUM_ALL_USERS` (optional, `true` enables premium for all authenticated users)
- `DODO_PAYMENTS_API_KEY` (optional for live entitlement lookups)
- `DODO_PAYMENTS_ENVIRONMENT` (optional, `live_mode` or `test_mode`)
- `DODO_CHROME_EXTENSION_PRODUCT_ID` (optional, used to filter paid product lookups)
- `PREMIUM_TEST_MODE_ALL_USERS` (optional, defaults to `true`; set `false` to disable automatic test-mode premium)

#### Request Body

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `idToken` | `string` | Yes | Firebase Authentication ID token |
| `state` | `string` | Yes | Extension-generated CSRF/state token |

**Example Request:**
```json
{
  "idToken": "eyJhbGciOiJSUzI1NiIs...",
  "state": "4c7fef6a6f4f4f139f9e12ab761c8f9d"
}
```

**Success (200 OK):**
```json
{
  "success": true,
  "redirectUrl": "http://localhost:3000/extension-auth/success?state=...&token=..."
}
```

#### Entitlement Resolution Rules
Premium is resolved server-side in this order:
1. `PREMIUM_ALL_USERS=true`
2. email in `PREMIUM_EMAIL_ALLOWLIST`
3. `DODO_PAYMENTS_ENVIRONMENT=test_mode` and `PREMIUM_TEST_MODE_ALL_USERS` is not `false`
4. successful Dodo payment lookup (live mode only)

---

## 5. Extension Auth Verify
Validates signed extension token and returns account + premium status.

### `POST /extension-auth/verify`

**Endpoint:** `/api/extension-auth/verify`  
**Method:** `POST`  
**Auth:** Signed extension token in request body

#### Request Body

| Field | Type | Required | Description |
| :--- | :--- | :--- | :--- |
| `token` | `string` | Yes | Signed extension auth token |

**Example Request:**
```json
{
  "token": "v1.eyJ1aWQiOiIuLi4ifQ.xxxxxx"
}
```

**Success (200 OK):**
```json
{
  "success": true,
  "isPremium": true,
  "expiresAt": 1760000000000,
  "user": {
    "uid": "firebase_uid",
    "email": "user@example.com",
    "name": "User Name"
  }
}
```
