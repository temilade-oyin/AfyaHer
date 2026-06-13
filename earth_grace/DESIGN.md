# Design System Document: Editorial Vitality

## 1. Overview & Creative North Star
**Creative North Star: The Nurturing Curator**

This design system rejects the clinical, cold sterility of traditional health platforms in favor of a "Nurturing Curator" aesthetic. We are building a digital sanctuary that feels like an editorial journal—sophisticated, warm, and deeply human. By moving away from "App-like" rigid grids and embracing intentional asymmetry and tonal depth, we create a space where African women feel seen, respected, and calm.

The system breaks the "template" look through:
*   **Intentional Asymmetry:** Hero sections and image galleries should use offset layouts to mimic high-end editorial spreads.
*   **Breathing Room:** We prioritize whitespace as a functional element, not a void. It represents the "calm" in the brand personality.
*   **Organic Layering:** Elements do not sit *on* the page; they float within a coordinated ecosystem of earthy tones.

---

## 2. Colors: Tonal Depth & The "No-Line" Rule
The palette is rooted in the earth: Terracotta (`primary_color_hex`: #B35C44), a revised warm Gray (`secondary_color_hex`: #8c8279), and Ocre (`tertiary_color_hex`: #D9A066), set against a parchment-like canvas (`neutral_color_hex`: #F5F1EA).

### The "No-Line" Rule
**Explicit Instruction:** 1px solid borders are strictly prohibited for sectioning or containment. Boundaries must be defined solely through background color shifts.
*   **Transitioning:** Use a `surface-container-low` section sitting against a `surface` background to define a change in content.
*   **Tonal Transitions:** Instead of a line, use a 24px vertical padding increase to signal a new thematic block.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine, handmade paper.
*   **Level 0 (The Base):** `surface` (#fdf9f2) or `background` (#fdf9f2).
*   **Level 1 (The Section):** `surface-container-low` (#f7f3ec) for large content blocks.
*   **Level 2 (The Component):** `surface-container-highest` (#e6e2db) for interactive elements or emphasized cards.

### The "Glass & Signature Texture" Rule
To elevate the experience beyond flat design:
*   **Glassmorphism:** For floating navigation or modals, use `surface` at 80% opacity with a `backdrop-filter: blur(12px)`. This allows the earthy "terracotta" or "sage" tones to bleed through softly.
*   **Signature Gradients:** For primary CTAs, use a subtle linear gradient from `primary` (#94442e) to `primary_container` (#b35c44) at a 135-degree angle. This adds a "soulful" glow that flat color lacks.

---

## 3. Typography: Editorial Authority
We pair the trustworthy, graceful **Newsreader** serif with the highly legible, modern **Manrope** sans-serif.

*   **Display & Headlines (Newsreader):** Used for storytelling and emotional resonance. The high x-height and elegant terminals convey "Honesty" and "Grace."
    *   *Scale:* `display-lg` (3.5rem) down to `headline-sm` (1.5rem).
*   **Titles & Body (Manrope):** Used for functional clarity and instructional text.
    *   *Scale:* `title-lg` (1.375rem) for sub-headers; `body-lg` (1rem) for standard reading.
*   **Hierarchy Strategy:** Always lead with a Newsreader headline. It establishes the "Editorial" voice. Follow immediately with Manrope body text to provide the "Healthcare" clarity.

---

## 4. Elevation & Depth: Tonal Layering
We do not use shadows to create "pop." We use tonal layering to create "presence."

*   **The Layering Principle:** Place a `surface_container_lowest` (#ffffff) card on a `surface_container_low` (#f7f3ec) section. This creates a soft, natural lift that mimics paper on a desk.
*   **Ambient Shadows:** If a floating element (like a FAB or Popover) requires a shadow, it must be: `box-shadow: 0 12px 32px rgba(85, 67, 62, 0.06)`. Note the use of `on_surface_variant` (#55433e) as the shadow tint rather than pure black.
*   **The "Ghost Border":** If accessibility requires a stroke (e.g., in high-contrast modes), use `outline_variant` at 20% opacity. Never use 100% opaque borders.

---

## 5. Components: Softness & Intent

### Buttons
*   **Primary:** `primary` (#94442e) background with `on_primary` text. Shape: `rounded-full` (pill) to emphasize softness.
*   **Secondary:** `secondary_container` (#d2e5cf) background with `on_secondary_container` (#566756) text. No border.
*   **Tertiary:** Text-only in `primary`, with a `body-md` bold weight.

### Input Fields
*   **Style:** Minimalist. Use `surface_container_high` (#ece8e1) as the fill. 
*   **Shape:** `md` (0.75rem) corner radius. The `roundedness` is `2` (Moderate).
*   **Interactions:** On focus, the field should transition to a `ghost border` using the `primary` color at 40% opacity.

### Cards & Lists
*   **Constraint:** Forbid the use of divider lines.
*   **Separation:** Use `xl` (1.5rem) spacing or a background shift to `surface_container`.
*   **Content:** Images should always have a `lg` (1rem) or `xl` (1.5rem) corner radius to align with the "Nurturing" personality.

### Signature Component: The "Community Insight" Card
A specialized card for AfyaHer that uses `tertiary_container` (#9b6a35) with a glassmorphic overlay for the quote text. This combines the earthy palette with the high-end editorial feel.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** use asymmetrical margins. For example, a headline might be indented 15% more than the body text to create an editorial rhythm.
*   **Do** use diverse, authentic imagery of African women. Ensure photos have a warm, natural temperature to match the `background` (#fdf9f2).
*   **Do** prioritize `body-lg` for health information to ensure maximum accessibility for all age groups.

### Don’t:
*   **Don’t** use "Alert Red" for everything. Use the `error` (#ba1a1a) token sparingly; try to frame guidance as "thoughtful corrections" rather than "failures."
*   **Don’t** use pure black (#000000). Always use `on_surface` (#1c1c18) to maintain the soft, earthy contrast.
*   **Don’t** crowd the screen. If a screen feels full, increase the page height and add more whitespace between sections. The user should never feel "rushed."

---

## 7. Spacing Scale
Utilize a soft-grid approach based on 8px increments, reflecting a `spacing` value of `2` (Normal). We prioritize the following for "Breathing Room":
*   **Section Gap:** 80px - 120px (To define major narrative shifts).
*   **Component Gap:** 24px - 32px (To group related health data).
*   **Text Leading:** Increase standard leading by 10% to enhance the "Calm" reading experience.