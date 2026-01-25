# Agent Instructions - Intentionality Lander

This document outlines the standing orders for AI agents working on this repository. Adherence to these rules is mandatory for maintaining consistency and documentation.

## 1. Changelog Maintenance
- **Rule:** Every time a significant feature, fix, or UI change is implemented, you MUST update `src/app/changelog/page.tsx`.
- **Versioning:** 
  - Version 2.0 represents the Next.js migration.
  - Increment minor versions (2.1, 2.2) for feature updates.
  - Increment patches (2.0.1) for small fixes.
- **Content:** Include a high-level summary and bullet points for Features, Improvements, and Fixes.

## 2. API Documentation
- **Rule:** If an API route is added or modified in `src/app/api/`, you MUST update `API.md`.
- **Requirements:** Document the endpoint URL, method, request body schema, and example responses.

## 3. Design Language
- **Theme:** Dark Mode by default (`#0f1a2a` background).
- **Icons:** Use monochrome silhouettes (monograms). Icons should be `currentColor` and use masks where necessary to maintain transparency in negative spaces (like the Firefox globe or Android eyes).
- **Components:** Use **shadcn/ui** and **Framer Motion** for animations. Avoid intrusive scroll animations; prefer fade-ins and subtle slide-ups.

## 4. Testing
- **Rule:** Always run `npm test` before concluding a task to ensure no regressions in the UI or API routes.
- **New Features:** Write corresponding tests in the `__tests__` directory for any new logic or pages.
