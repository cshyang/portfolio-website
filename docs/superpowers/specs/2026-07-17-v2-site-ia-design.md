# v2 Site IA & Motion — Design

Date: 2026-07-17
Status: agreed in brainstorm; pending user review

## Purpose

The site is a **credibility hub**, not a conversion funnel: it backs up
Shyang's presence elsewhere (LinkedIn, communities). Success = a visitor
remembers **"ships across the whole stack"** a week later. Evidence base:
selected side builds + employer-side war stories. Owner will update the
site as new things ship.

## Section lineup

```
Hero → Projects (3, renovated) → Skills (AI-wrapped) → War Stories → Contact
```

Changes from current site: Projects content renovated in place, Skills
rebuilt lightweight, Journey rewritten as War Stories. No sections added
or removed.

## 1. Hero — keep

As shipped 2026-07-17 (commit a23bca3): small "I'm" lead, rotating phrase
at 6rem cap colliding with the portrait card, ink-swap knockout with paper
stroke halo, "Useful beats impressive." + summary + Selected work CTA in
the right column. Viewport-aware portrait height. **No changes.**

Motion (existing, keep): scramble/resolve phrase cycle, knockout seam,
portrait tap-swap, glyph stream drift.

## 2. Projects — renovate content, keep the pinned gallery

Format stays: 3 featured case studies in the GSAP pinned ring showcase
(stacked list on mobile / short viewports / reduced motion).

Renovations:

- **Link policy: durable targets.** Every `href` must resolve. Default to
  GitHub repos; live deploys only when they're actually up. (Current
  state: AI Companion deploy returns 500, Netflix clone deploy 404s —
  both violate the section's own "evidence over claims" heading.)
- **Slot 3 is a content decision for the owner:** replace the Netflix
  clone (tutorial-grade, off-message for a senior narrative) with the
  strongest build from the unlisted side-build pool. Until chosen, the
  section ships with the format renovated and the current third slot
  relinked to a working URL.
- **Screenshot refresh** where assets have baked-in defects (ai-companion
  image contains "Elon Misk" / "Warren Buffet" typos). Blocked for AI
  Companion until its deploy is fixed.
- Copy per project keeps the contribution / result structure already in
  `v2-data.ts`.

Motion (existing, keep): pinned ring scrub with snap; no new motion.

## 3. Skills — "wrapped in AI"

Replace the current claims-list ("Every skill here was once a gap") with
a lightweight domain grid wrapped — visually and verbally — in an AI
layer. Thesis line owns the section: **"AI didn't replace the stack. It
wrapped it."** (final copy at implementation).

- **Layout:** two-column grid of domains inside a frame that carries the
  AI-layer identity, reusing the existing ASCII glyph-stream material as
  the frame/atmosphere. List-like rows, not four identical cards.
- **Domains (~4):** Marketing & Growth · Product · Data & Analytics ·
  Engineering. Each row: domain name + one sentence of "what I actually
  do with it" + a single row of ≤5 tool marks.
- **Tool marks:** monochrome (inked in site navy) or plain text chips —
  no full-color logo wall. Tools support the sentence; they are not the
  content.
- AI tools (Claude, GPT, agents) live on the wrapper frame, not repeated
  per domain.

Motion: glyph frame drifts slowly (existing material); domain rows reveal
with one small stagger on first view. Nothing else.

## 4. War Stories — Journey rewritten

Same section slot and company logos; the resume-timeline cadence goes.
3–4 employer-side stories, each shaped **context → decision → outcome
number** (recommendation systems, analytics team build, healthcare data).
3–4 sentences each, reading-size editorial copy, alternating left/right
layout.

- **Content dependency:** owner supplies war-story raw material (numbers
  and context safe to publish). Copy drafted at implementation from that
  material.

Motion: light scroll-linked progressive reveal per story (no pinning) —
each story assembles as it enters the viewport.

## 5. Contact — keep + one line

Torn-seam section unchanged. Add the availability line where it belongs:
**"Kuala Lumpur · GMT+8 · Open to the right problem."**

## Motion inventory (whole page)

| Where | Motion | Purpose |
|---|---|---|
| Hero | scramble/resolve, knockout seam, portrait swap | performs "range"; existing |
| Projects | pinned ring scrub | existing; keep |
| Skills | glyph-frame drift + one row stagger | AI-wrapper atmosphere |
| War Stories | per-story scroll assembly | pacing, no pin |
| Contact | torn seam (static) | existing |

Rules: no scroll-fade-rise applied uniformly to every section; every
animation has a `prefers-reduced-motion` alternative (instant/crossfade);
GSAP `matchMedia` gates stay as shipped.

## Out of scope

- Fixing the AI Companion deployment (separate repo).
- The Bench / building-log format — revisit if the side-build pool grows
  and the owner wants the log format later.
- Blog/writing/talks sections (no evidence base today).

## Owner actions needed before/during implementation

1. Pick project slot 3 (replacement for Netflix clone) and provide repo URL.
2. Supply war-story raw material (3–4 stories: context, decision, number).
3. Decide AI Companion: fix deploy (then relink + fresh screenshot) or
   point at its repo.
