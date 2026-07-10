---
name: Shyang Portfolio V2
description: A sharp, warm field board for a multidisciplinary builder who ships.
colors:
  graphite: "#191210"
  neutral-white: "#fafafa"
  neutral-paper: "#f3f3f3"
  neutral-surface: "#eae5e3"
  seam: "#b2a8a5"
  ember: "#ae3819"
  oxide: "#681308"
  pale-ember: "#fad4ca"
  focus-blue: "#0045b0"
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
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.neutral-white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "13px 16px"
  input:
    backgroundColor: "{colors.neutral-white}"
    textColor: "{colors.graphite}"
    typography: "{typography.body}"
    rounded: "0px"
    padding: "12px 0"
---

# Design System: Shyang Portfolio V2

## Overview

**Creative North Star: "The Builder's Field Board"**

The system feels like a carefully composed working surface: modular, direct, personal, and connected to real output. Visible seams and asymmetric fields create order; portraiture, ember color, and responsive behavior supply warmth. The interface is experimental in composition, not in usability.

It rejects generic polished SaaS, developer-terminal brutalism, artsy layouts that hide evidence, youthful candy color, and pervasive faux-vintage noise. Mobile is a deliberate single-column narrative, not a miniature desktop grid.

**Key Characteristics:**

- Capability-first hierarchy with proof in the first viewport.
- Graphite reading structure and committed ember fields.
- Visible seams, limited rounding, and physical project artifacts.
- Section-specific motion with a complete reduced-motion path.
- Clean reading surfaces; grain appears only where color is the material.

## Colors

Graphite and neutral-white carry the reading experience. Ember is a committed identity color, with oxide for depth and pale ember for image-led tonal range.

### Primary

- **Fired Ember:** The main identity field, availability signal, and high-emphasis section color. White body text on ember must maintain at least 4.5:1 contrast.
- **Oxide:** The dark endpoint for spatial gradients, hover states, and deep image fields.

### Secondary

- **Focus Blue:** Reserved for keyboard focus and functional interaction state. It is not a decorative brand accent.
- **Pale Ember:** Used behind imagery where no body text sits directly on the surface.

### Neutral

- **Graphite:** Primary ink and the dark operating-range surface.
- **Neutral White:** Main reading modules and form surface.
- **Neutral Paper:** Page background.
- **Neutral Surface:** Supporting modules and technology tags.
- **Seam:** Structural 1px divisions between modules.

**The Clean Reading Rule.** Noise and gradients are forbidden behind body copy. They belong only to portrait, project-image, or closing fields.

**The Functional Blue Rule.** Focus blue is never used decoratively; its rarity makes keyboard focus unmistakable.

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
- **Primary:** Graphite with neutral-white text and compact 13px × 16px padding.
- **Hover / Focus:** Hover increases contrast or changes to oxide; focus uses a 3px blue outline with 4px offset.
- **Secondary:** Transparent with a 1px current-color border; fills graphite on hover.

### Chips

- **Style:** Neutral-surface fill, graphite text, full pill, compact padding.
- **State:** Metadata only. Chips do not become a repeated card system or faux filter UI.

### Cards / Containers

- **Corner Style:** Mostly square modules; artifact imagery uses 8–10px corners.
- **Background:** Neutral-white, graphite, or committed ember according to narrative role.
- **Shadow Strategy:** Flat modules; Artifact Edge only for screenshots.
- **Border:** 1px seam divisions, never colored side stripes.
- **Internal Padding:** Fluid 24–88px based on viewport and narrative density.

### Inputs / Fields

- **Style:** Persistent label, neutral-white surface, square geometry, and graphite bottom rule.
- **Focus:** Blue bottom rule plus visible focus outline.
- **Error / Disabled:** Inline status with next-step language; disabled submit state appears only after submission begins.

### Navigation

Slim sticky navigation uses Archivo labels and underline motion. Desktop keeps the full section list; mobile uses a native dialog with a clear close action, focus restoration, and contained overscroll.

### Portrait Swap

The signature portrait module shows the confident transparent portrait by default and reveals the illustrated laughing portrait on hover, focus, or tap. Reduced motion uses a near-instant dissolve. The default image remains visible without interaction.

## Do's and Don'ts

### Do:

- **Do** lead with capability and place proof in the first viewport.
- **Do** use graphite, neutral-white, ember, and oxide as committed surfaces.
- **Do** keep body lines below 70ch and text contrast at WCAG AA.
- **Do** use one controlled ember-to-oxide spatial gradient in image-led fields.
- **Do** use static raster-like grain sparingly and keep reading surfaces clean.
- **Do** give hover interactions equivalent keyboard and touch behavior.

### Don't:

- **Don't** build generic polished SaaS with glass cards, pastel blobs, or interchangeable feature grids.
- **Don't** use developer-terminal brutalism, monospace decoration, or dark mode as shorthand for technical credibility.
- **Don't** use artsy layouts that conceal navigation, weaken readability, or hide evidence.
- **Don't** use youthful candy palettes, pervasive faux-vintage noise, or decorative motion without meaning.
- **Don't** use gradient text, colored side-stripe borders, identical card grids, or repeated eyebrow labels.
- **Don't** pair a 1px border with a wide soft shadow or round modules beyond 12px.
