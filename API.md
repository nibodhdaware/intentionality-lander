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
