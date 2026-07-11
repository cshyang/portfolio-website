# V2 Navigation Distillation

## Purpose

Reduce the V2 navigation's visual weight while preserving the original portfolio's strongest interaction: a compact floating navigation with one clear active state.

## Desktop

- Center one compact floating capsule near the top edge.
- Show only `Work`, `Range`, `Journey`, and `Contact`.
- Remove the `SHYANG` wordmark and availability badge from the navigation.
- Use a near-white translucent surface, mild blur, and a tight low-contrast shadow.
- Remove the reflective highlight and pronounced liquid-glass treatment.
- Keep one quiet blue-gray active pill that slides between section links.
- Preserve visible keyboard focus independently of the active pill.

## Small Screens

- At and below the existing 820px breakpoint, remove the capsule completely.
- Show one standalone `Menu` pill at the top-right.
- Keep the existing native dialog navigation, close action, backdrop dismissal, focus restoration, and overscroll containment.
- Do not show a wordmark, empty bar, or availability indicator.

## Motion and Accessibility

- Animate only the desktop active pill using transform and opacity.
- Respect `prefers-reduced-motion` by making the active-state change immediate.
- Preserve the opaque fallback for browsers without backdrop filtering.
- Preserve the reduced-transparency fallback.
- Maintain touch targets of at least 44px on the mobile Menu control.

## Visual Rule

Navigation is orientation, not artwork. It should remain quieter than the portrait, hero typography, and textured background in every state.

## Validation

- Verify desktop at widths above 820px: four links only, centered capsule, correct active section.
- Verify mobile at 820px and below: standalone Menu pill only, with no bar behind it.
- Verify keyboard focus, menu open and close behavior, reduced motion, and absence of horizontal overflow.
- Confirm the original `/` route remains unchanged.
