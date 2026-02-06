# Specification

## Summary
**Goal:** Redeploy the existing application to a fresh live instance without any code, asset, configuration, or content changes.

**Planned changes:**
- Create a new live deployment (fresh instance) using the exact same build, configuration, and content as the current app.
- If deployment fails after a successful build, retry deployment using the current build artifacts without rebuilding.
- If the retry fails with the same error, redeploy the last known successful build artifacts exactly as-is (no rebuild).
- If deployment still fails, capture and report the failure details (error message and the step where it occurred) without making any code changes.

**User-visible outcome:** The app is reachable via a new live URL and behaves identically to the prior live deployment (no functional or copy changes).
