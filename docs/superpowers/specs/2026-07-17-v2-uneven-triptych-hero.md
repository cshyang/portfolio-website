# V2 Uneven Triptych Hero

## Goal

Give the V2 hero more personality through composition while preserving clarity, warmth, and the existing portrait interactions.

## Approved Direction

Use an uneven three-part composition with an invisible scaffold:

- **Statement:** The headline occupies the largest field and sits lower in the viewport. Its final line may cross slightly into the portrait field.
- **Portrait:** The portrait is the visual hinge: tall, minimally rounded, positioned higher than the text, and extended lower than the adjacent content.
- **Context:** A narrow open field holds the summary and the Selected Work link, aligned lower than the portrait. It has no card, border, or background container.

The three fields must begin and end at different vertical positions. The layout may use CSS Grid internally, but visitors must not see boxed columns, seams, or a repeated card system.

## Interaction

Keep the rotating identity phrase, portrait swap, floating navigation, and subtle microtext movement. Do not add another animation system. Replace the bordered hero CTA with a simple typographic link.

## Responsive Behavior

On narrow screens, use a linear reading order: headline, offset portrait, then summary and link. The portrait may extend slightly wider than the text measure, but content must not overflow the viewport.

## Guardrails

- Preserve the existing blue-gray, vermilion, and portrait-derived palette.
- Do not add cards, dividers, badges, or decorative borders.
- Maintain visible focus states and equivalent hover, keyboard, and touch portrait behavior.
- Preserve reduced-motion behavior.
- Keep the original `/` route unchanged.

## Acceptance Criteria

- The desktop hero no longer reads as a balanced two-column résumé header.
- Headline, portrait, and context form a clear diagonal reading path.
- The first viewport still communicates capability and provides a route to selected work.
- The layout remains legible and overflow-free on desktop and mobile.
