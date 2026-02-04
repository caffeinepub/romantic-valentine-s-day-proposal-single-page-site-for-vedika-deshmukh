# Specification

## Summary
**Goal:** Clean up the main page layout by adding a single hero video with audio controls, simplifying text overlays on the background photo section, replacing the “Our Moments Together 💖” area with two clickable cards, and adding a separate gallery page that shows only uploaded photos.

**Planned changes:**
- Add a new top-of-page hero video section above the existing OpeningSection that renders exactly one uploaded romantic video with audio, does not autoplay, is not muted by default, shows visible play controls, and displays the overlay text “This video holds a piece of my heart 💖”.
- Update OurMemoriesBackgroundSection to keep a single low-opacity background photo, remove the “Our Memories 💖” title entirely, and show only “Every time I see you, my heart feels at home 💖”.
- Replace the current “Our Moments Together 💖” section content with exactly two simple clickable cards: “Our Best Moments 💕” and “Memories That Mean Everything 💖”, with no grids and no empty placeholders.
- Implement navigation so clicking either card routes to a new, separate page/screen (not an in-place expansion).
- Create the new gallery page/screen that displays only 4–5 uploaded photos (or fewer if fewer exist) in a simple romantic gallery layout with soft heart animations only, and no placeholder slots.
- Enforce a global “no placeholder media” rule: only render images/videos that actually exist in `/assets`, removing any logic that generates empty boxes/slots.

**User-visible outcome:** Users see a new hero video at the top with tap-to-play audio, a cleaner romantic text overlay on the background photo section, a simplified two-card “Our Moments Together 💖” section that navigates to a separate gallery page, and a gallery that shows only real uploaded photos without empty placeholders.
