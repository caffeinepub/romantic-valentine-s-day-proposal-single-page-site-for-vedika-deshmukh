# Specification

## Summary
**Goal:** Add a new “Unlock Our Moments 💖” section with a simple photo puzzle that unlocks the two existing “Our Moments Together 💖” cards once completed.

**Planned changes:**
- Insert a new Home page section directly above “Our Moments Together 💖” with the heading text exactly: “Unlock Our Moments 💖”, without altering any existing sections (other than shifting down due to insertion).
- In the new section, show the instruction text exactly: “Solve this little puzzle to unlock our memories 💕”.
- Add a touch-friendly, mobile-optimized photo puzzle (4–6 easy pieces) using only the static asset `Snapchat-1757390130.jpg`.
- Add a locked state for the two existing cards in `frontend/src/components/VideosSection.tsx` (Card 1: “Our Best Moments 💕”, Card 2: “Memories That Mean Everything 💖”): initially blurred/disabled and not clickable; unlock both after puzzle completion, restoring their existing click behavior and preserving existing design.
- On puzzle completion, display the success message exactly: “You did it 🥰 Just like us, everything fits perfectly 💖” and play a subtle heart animation localized to the puzzle section.
- Add `Snapchat-1757390130.jpg` to the frontend public static assets and reference it by exact filename.

**User-visible outcome:** Visitors see a new “Unlock Our Moments 💖” puzzle section; solving the cute photo puzzle unlocks the two “Our Moments Together 💖” cards so they become clear and tappable, behaving exactly as before.
