---
name: Shyang Portfolio V2
description: A sharp, warm field board for a multidisciplinary builder who ships.
colors:
  deep-indigo: "#06265f"
  vivid-blue: "#0966d6"
  signal-orange: "#f04b1d"
  vermilion: "#b7331b"
  petrol-teal: "#15576a"
  cool-canvas: "#eef3f7"
  near-white: "#fbfcfd"
  cool-surface: "#e2e9ef"
  seam: "#9ba8b5"
typography:
  display:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(3.45rem, 6.3vw, 6rem)"
    fontWeight: 760
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)"
    fontWeight: 740
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  body:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Archivo, Arial, sans-serif"
    fontSize: "0.72rem"
    fontWeight: 720
    lineHeight: 1.2
    letterSpacing: "0.02em"
rounded:
  artifact: "8px"
  surface: "10px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "88px"
components:
  button-primary:
    backgroundColor: "{colors.deep-indigo}"
    textColor: "{colors.near-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 16px"
  input:
    backgroundColor: "{colors.near-white}"
    textColor: "{colors.deep-indigo}"
    typography: "{typography.body}"
    rounded: "0px"
    padding: "12px 0"
---

# Design System: Shyang Portfolio V2

## Overview

**Creative North Star: "The Builder's Field Board"**

The system feels like a carefully composed working surface: modular, direct, personal, and connected to real output. Visible seams and asymmetric fields create order; the illustrated portrait supplies deep indigo, vivid blue, signal orange, vermilion, and petrol teal. The interface is experimental in composition, not in usability.

It rejects generic polished SaaS, developer-terminal brutalism, artsy layouts that hide evidence, youthful candy color, and pervasive faux-vintage noise. Mobile is a deliberate single-column narrative, not a miniature desktop grid.

**Key Characteristics:**

- Capability-first hierarchy with proof in the first viewport.
- Deep-indigo structure with vivid-blue, vermilion, and petrol fields.
- Visible seams, limited rounding, and physical project artifacts.
- Section-specific motion, including one slow drifting light field, with a complete reduced-motion path.
- Clean reading surfaces; grain appears only where color is the material.

## Colors

Deep indigo and a cool blue-gray canvas carry the reading experience. Vivid blue, vermilion, signal orange, and petrol teal come directly from the illustrated portrait and turn it into the palette source for the whole system. The portrait keeps its own warm paper; the interface does not imitate it.

### Primary

- **Deep Indigo:** Primary ink, footer, featured-project surface, and the dark endpoint of blue spatial gradients. It replaces black everywhere.
- **Vivid Blue:** Carries the Operating Range field and selected image-led project surfaces.

### Secondary

- **Signal Orange:** High-chroma visual signal used for small marks, image fields, and emphasis where body text does not sit directly on it.
- **Vermilion:** Accessible dark-orange field for the contact close and action states.
- **Petrol Teal:** One supporting structural field in the hero. It never becomes a competing primary color.

### Neutral

- **Cool Canvas:** Main page background, lightly biased toward the portrait's blue rather than its cream paper.
- **Near White:** Main reading modules and form surface.
- **Cool Surface:** Supporting modules and technology tags.
- **Seam:** Structural 1px divisions between modules.

**The Clean Reading Rule.** Noise and gradients are forbidden behind body copy on reading surfaces. They belong only to portrait, project-image, Operating Range, or closing fields.

**The Static Grain Rule.** The raster grain tile never animates. Light may drift underneath it; the texture itself remains still.

**The Indigo Anchor Rule.** Deep indigo replaces black and anchors every high-chroma field. Never reintroduce neutral-black section backgrounds.

## Typography

**Display Font:** Archivo (with Arial fallback)
**Body Font:** Archivo (with Arial fallback)

**Character:** One variable grotesk family provides mature clarity and controlled experimentation through weight and width. Contrast comes from scale and density, not a fashionable serif-plus-mono costume.

### Hierarchy

- **Display** (760, fluid to 6rem, 0.94): Hero statement only.
- **Headline** (740, fluid to 5.5rem, 0.98): Major section arguments.
- **Title** (700, fluid 1.6–4.5rem, 1.05): Projects, disciplines, and career roles.
- **Body** (400–620, 1rem minimum, 1.55–1.7): Narrative and evidence; maximum 70ch.
- **Label** (720, 0.72–0.78rem, 0.02em): Compact metadata and utility details. Uppercase is rare and never repeated above every heading.

**The 0.04 Rule.** Display letter spacing is never tighter than -0.04em.

**The One Family Rule.** Do not add a decorative serif or monospace family to manufacture personality.

## Elevation

The system is flat by default. Tonal layering, crop, overlap, seams, and motion create depth. Shadows appear only under project screenshots treated as physical artifacts; modules and controls do not receive decorative ambient shadows.

### Shadow Vocabulary

- **Artifact Edge** (`0 8px 0 rgba(24, 18, 16, 0.17)`): A tight structural edge under project screenshots only.

**The Structural Depth Rule.** If a module needs a wide soft shadow to feel separate, the composition is wrong. Fix the seam, tone, or spacing.

## Components

### Buttons

- **Shape:** Full pill only for compact actions (999px).
- **Primary:** Deep indigo with near-white text and compact 13px × 16px padding.
- **Hover / Focus:** Hover changes to vivid blue; focus uses a 3px indigo outline on light fields and near-white on dark fields.
- **Secondary:** Transparent with a 1px current-color border; fills deep indigo on hover.

### Chips

- **Style:** Surface fill, deep-indigo text, full pill, compact padding.
- **State:** Metadata only. Chips do not become a repeated card system or faux filter UI.

### Cards / Containers

- **Corner Style:** Mostly square modules; artifact imagery uses 8–10px corners.
- **Background:** Near-white, deep indigo, vivid blue, vermilion, or petrol teal according to narrative role.
- **Shadow Strategy:** Flat modules; Artifact Edge only for screenshots.
- **Border:** 1px seam divisions, never colored side stripes.
- **Internal Padding:** Fluid 24–88px based on viewport and narrative density.

### Inputs / Fields

- **Style:** Persistent label, near-white surface, square geometry, and deep-indigo bottom rule.
- **Focus:** Deep-indigo bottom rule plus visible focus outline.
- **Error / Disabled:** Inline status with next-step language; disabled submit state appears only after submission begins.

### Navigation

Slim sticky navigation uses Archivo labels and underline motion. Desktop keeps the full section list; mobile uses a native dialog with a clear close action, focus restoration, and contained overscroll.

### Portrait Swap

The signature portrait module shows the confident transparent portrait by default and reveals the illustrated laughing portrait on hover, focus, or tap. Reduced motion uses a near-instant dissolve. The default image remains visible without interaction.

### Animated Light Field

Operating Range uses a deep-indigo base, an oversized CSS layer of radial blue lights, and one seamless 256px raster grain tile. Only the light layer moves, using transform and opacity over an 18-second alternating cycle. Reduced-motion mode freezes the layer at its strongest composition.

## Do's and Don'ts

### Do:

- **Do** lead with capability and place proof in the first viewport.
- **Do** use deep indigo, vivid blue, signal orange, vermilion, petrol teal, and cool neutrals as the portrait-derived palette.
- **Do** keep body lines below 70ch and text contrast at WCAG AA.
- **Do** use controlled blue-to-indigo and vermilion spatial gradients in image-led fields.
- **Do** use the shared static raster grain sparingly and keep reading surfaces clean.
- **Do** animate light with transform and opacity while keeping grain stationary.
- **Do** give hover interactions equivalent keyboard and touch behavior.

### Don't:

- **Don't** build generic polished SaaS with glass cards, pastel blobs, or interchangeable feature grids.
- **Don't** use developer-terminal brutalism, monospace decoration, or dark mode as shorthand for technical credibility.
- **Don't** use artsy layouts that conceal navigation, weaken readability, or hide evidence.
- **Don't** use youthful candy palettes, pervasive faux-vintage noise, or decorative motion without meaning.
- **Don't** use gradient text, colored side-stripe borders, identical card grids, or repeated eyebrow labels.
- **Don't** pair a 1px border with a wide soft shadow or round modules beyond 12px.
