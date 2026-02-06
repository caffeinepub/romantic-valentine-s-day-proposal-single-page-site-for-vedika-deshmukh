# Specification

## Summary
**Goal:** Replace the current frontend with a standalone, mobile-first Rose Day “unlock” experience: lock-screen intro → 3 typed questions → Rose Day reveal, plus a hidden owner/admin view that can review submitted answers stored in the backend.

**Planned changes:**
- Build a new lock-screen opening view with the exact intro text and CTA that transitions into the question flow.
- Implement a 3-step question wizard (one question at a time) requiring a non-empty typed answer before moving forward, in strict order (Q1 → Q2 → Q3).
- Persist the three typed answers and submit them to the backend as a single record on completion of Question 3; show a retryable error if submission fails.
- Add backend (single Motoko actor) storage + APIs to create and list submissions (q1/q2/q3 + created-at), persisted via stable storage.
- Add a hidden-but-discoverable admin/owner frontend view (e.g., URL hash/query toggle) to fetch and display the full submissions list with answers shown verbatim.
- Implement the Rose Day reveal page shown after successful submission, with the provided romantic message and exact footer line, plus a reveal button that opens a popup with the exact text.
- Apply rose-themed styling (soft red/pink/white), smooth transitions, and an elegant floating rose-petals animation overlay that does not block interaction.
- Add optional romantic background music with a user-initiated on/off toggle (no autoplay) and graceful behavior if the audio asset is missing.

**User-visible outcome:** On mobile, users see a Rose Day lock screen and can unlock a romantic reveal by typing answers to 3 questions; after submission, they see the reveal message and interactive popup. The creator can open a hidden admin view to review exactly what answers were submitted.
