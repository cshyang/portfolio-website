# Portfolio V2 Implementation Plan

## Goal

Build the approved Signal Print redesign at `/v2` while preserving `/` for direct comparison.

## 1. Protect the Legacy Shell

Files:

- Add `src/components/SiteShell.tsx`.
- Update `src/app/layout.tsx`.

Work:

- Move route-sensitive chrome selection into a small client shell.
- Keep the current header, footer, theme switch, providers, and body treatment unchanged for `/`.
- Render `/v2` without legacy chrome or decorative background blobs.
- Keep analytics and global providers shared.
- Confirm that the server-rendered page content remains available before hydration.

## 2. Add V2 Assets and Content Model

Files:

- Add `public/images/avatars/shyang-confident.png`.
- Add `public/images/avatars/shyang-laughing.png`.
- Add `src/lib/v2-data.ts`.

Work:

- Preserve and copy the supplied portrait sources under stable names.
- Define V2 project evidence, discipline connections, and career descriptions separately from the legacy data when the new narrative requires fields the legacy page does not have.
- Keep external URLs and image paths centralized.

## 3. Build the V2 Visual Foundation

Files:

- Add `src/app/v2/layout.tsx`.
- Add `src/app/v2/page.tsx`.
- Add `src/app/v2/v2.css`.

Work:

- Load Archivo only for the V2 route.
- Define semantic color, spacing, radius, z-index, and motion tokens.
- Build the responsive modular grid, cool-neutral reading surfaces, portrait-derived color fields, visible seams, focus styles, and reduced-motion rules.
- Use controlled orange-to-vermilion and blue-to-indigo spatial gradients; keep text solid.
- Add one reusable seamless raster grain tile and keep it static above the animated light layer.
- Avoid global selectors that could alter `/`.

## 4. Build V2 Navigation and Hero

Files:

- Add `src/components/v2/V2Header.tsx`.
- Add `src/components/v2/V2Hero.tsx`.
- Add `src/components/v2/PortraitSwap.tsx`.

Work:

- Add a compact quiet-island navigation with visible active/focus states, a standalone mobile Menu pill, and a reduced-transparency fallback.
- Use a native dialog for mobile navigation and restore focus on close.
- Build the capability-first modular hero with one featured project, location, and availability.
- Support portrait hover, keyboard focus, and tap.
- Keep the default portrait visible if client behavior fails.
- Use a quick dissolve under reduced motion.

## 5. Build Selected Work and Operating Range

Files:

- Add `src/components/v2/SelectedWork.tsx`.
- Add `src/components/v2/ProjectStory.tsx`.
- Add `src/components/v2/OperatingRange.tsx`.

Work:

- Present each project as a wide story with distinct art direction rather than an identical card.
- Include problem, contribution, shipped result, technologies, and descriptive external links.
- Merge About and Skills into discipline-to-evidence connections.
- Use section-specific motion that enhances visible content.

## 6. Build Journey and Contact

Files:

- Add `src/components/v2/Journey.tsx`.
- Add `src/components/v2/V2Contact.tsx`.
- Add `src/components/v2/V2Footer.tsx`.

Work:

- Replace the third-party visual timeline on V2 with a semantic first-party progression.
- Reuse existing experience logos and data where accurate.
- Reuse the existing email server action.
- Add persistent labels, field-level validation, an accessible status region, duplicate-submit protection, and visible error/success states.
- End with LinkedIn, GitHub, and CV actions in the vermilion closing field.

## 7. Verification and Audit

Checks:

- Install the locked dependencies.
- Run production build and available lint/type checks.
- Compare `/` and `/v2` at mobile, tablet, and desktop widths.
- Verify no legacy-route visual regressions.
- Verify portrait pointer, keyboard, touch, and reduced-motion behavior.
- Verify menu focus management, form labels, validation, submission state, and status announcements.
- Measure color contrast and touch targets.
- Fetch the current Vercel Web Interface Guidelines, audit all changed UI files, and resolve actionable findings.
- Generate `DESIGN.md` from the implemented V2 system after the tokens and components are real.

## Stop Conditions

- Do not redirect `/` to `/v2`.
- Do not rewrite email delivery, analytics, or unrelated legacy components.
- Do not add a CMS, animation library, or design-system dependency unless an approved interaction cannot be built with existing tools.
