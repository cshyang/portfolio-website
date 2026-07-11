# Portfolio V2 Redesign Specification

## Objective

Create an isolated portfolio redesign at `/v2` that presents Shyang as a multidisciplinary builder who ships across data, AI, product, and code. Preserve the existing `/` experience for direct comparison until the new direction proves itself.

## Success Criteria

- A first-time visitor understands the multidisciplinary-builder positioning within the first viewport.
- Selected work appears as evidence, not as a generic project-card gallery.
- The interface feels sharp, experimental, warm, and mature without becoming difficult to navigate.
- The original `/` route remains visually and behaviorally unchanged.
- The redesign meets WCAG AA, supports keyboard and touch input, and provides reduced-motion behavior.
- Desktop and mobile layouts feel deliberately composed rather than scaled versions of one another.

## Audience

The page serves three audiences without splitting into three sites:

- Hiring leaders evaluating senior AI, data, and product capability.
- Consulting clients looking for someone who can frame and ship ambiguous work.
- Technical collaborators looking for credible evidence of hands-on building.

The unifying promise is “multidisciplinary builder who ships.” Audience-specific proof appears in projects, career progression, and contact options.

## Creative Direction

### North Star: The Layered Working Surface

The page should feel like a well-composed working surface: direct, personal, and visibly connected to real output. Its underlying alignment is disciplined, but most structure remains invisible. Controlled overlap is limited to the hero portrait and first featured artifact.

The composition uses open space, asymmetric image placement, project imagery, and small utility details. Warmth comes from portraiture, print-derived color, plain language, and responsive behavior—not pastel decoration.

### Palette

- Deep indigo: primary ink, footer, featured-project surface, and dark gradient endpoint.
- Cool blue-gray canvas and near-white modules: primary reading surfaces that balance the portrait's saturated blue without repeating its cream paper.
- Vivid blue: committed color for the Operating Range field and selected image surfaces.
- Signal orange and vermilion: visual signal, portrait field, and accessible closing surface.
- Petrol teal: one restrained supporting accent.

Use controlled orange-to-vermilion and blue-to-indigo spatial gradients in image-led surfaces. Do not use gradient text. A shared seamless raster grain tile may appear on a few large color fields only. Reading surfaces remain clean.

### Typography

Use Archivo as a single variable family. Width and weight variation create the contrast between display, body, and utility text. This keeps the voice sharp and mature without the now-generic serif-plus-mono portfolio treatment.

- Display: bold, slightly condensed, fluid size with a maximum of 6rem and letter spacing no tighter than -0.04em.
- Section headings: bold with clear scale changes rather than repeated eyebrow labels.
- Body: regular or medium, 1rem minimum, 1.55–1.7 line height, maximum 70ch.
- Utility labels: short, compact, and sparingly uppercase; never used as body copy or above every heading.

### Geometry and Elevation

- Hairline rules appear only where they clarify a transition or sequence.
- Corners use 8–12px radii where a contained surface needs separation.
- Full pills are limited to actions and compact status controls.
- Depth comes from tonal layering, overlap, crop, and movement.
- Shadows are reserved for physical artifacts such as tilted project screenshots and never paired decoratively with a full border and wide blur.

## Information Architecture

### 1. Hero: Identity and Proof

A near-viewport open composition contains:

- One capability-first positioning statement.
- A portrait module.
- Location and availability.
- Primary action to selected work.
- Compact navigation.

The default portrait is `Chau Shyang-Photoroom.png`. Hover, keyboard focus, or tap reveals the supplied illustrated laughing portrait. The change uses a restrained crossfade and crop adjustment. Reduced-motion mode uses a quick dissolve. The base portrait and essential hero content render without JavaScript-dependent visibility.

### 2. Selected Work: Evidence

Show the three existing projects as distinct, wide project stories rather than identical cards. Each story includes:

- Product screenshot.
- Concise problem statement.
- Shyang's role or contribution.
- What was built or shipped.
- Relevant technologies as secondary metadata.
- Clear external link behavior.

Each project receives a composition suited to its image and content, but all share typography, seams, spacing, and link behavior. Motion varies by story rather than repeating one reveal effect.

### 3. Operating Range: Multidisciplinary Practice

Merge the current About and Skills sections. Connect four disciplines—Data, AI, Product, and Code—to concrete project or career evidence. Avoid a badge cloud and avoid presenting equal-weight cards. The section should explain how the disciplines reinforce each other rather than merely list tools.

### 4. Journey: Progression

Replace the boxed third-party timeline with a continuous, first-party layout. Company marks, roles, dates, and concise lessons align to a progressing path. The path advances with scroll position; reduced-motion mode renders the completed path immediately.

### 5. Contact: Decisive Close

End with a vermilion-drenched field containing:

- A plain statement of the work Shyang wants.
- Existing email form behavior.
- LinkedIn and GitHub links.
- CV download.

Form fields use persistent labels, visible focus states, inline validation, an accessible submission state, and clear success or error feedback. Toasts may supplement but must not be the only feedback.

## Navigation and Responsive Behavior

- Desktop uses one centered, quiet translucent capsule with four section links and a restrained active indicator. Mobile uses only a standalone Menu pill.
- Active-section state remains visible but does not animate a decorative blob behind every item.
- Mobile uses a compact header and native dialog or popover menu when needed.
- Desktop grids collapse into a deliberate single-column narrative on small screens.
- No essential interaction depends only on hover.
- Heading sizes and long words are tested at intermediate widths to prevent overflow.

## Motion System

Motion is section-specific but shares exponential ease-out timing.

- Hero: orchestrated module reveal and portrait swap.
- Projects: image movement matched to each artifact's composition.
- Operating range: an oversized layer of blue radial lights drifts slowly beneath static raster grain; connective paths resolve as evidence enters view.
- Journey: one progressing path rather than per-card fades.
- Contact: vermilion field expands into the final section.

Content remains visible by default. Motion enhances the rendered page and never gates it. Every animation has a `prefers-reduced-motion` alternative.

The grain texture never animates. The Operating Range light field moves only through compositor-friendly transform and opacity over an 18-second alternating cycle. Reduced-motion mode freezes it.

## Technical Boundary

### Route Isolation

- Keep `/` as the legacy experience.
- Add `/v2` as the redesign.
- Add route-aware shared chrome so the old header, footer, and theme switch remain on `/` but do not render on `/v2`.
- Keep root analytics and providers available to both routes.
- Verify the route-aware shell does not change the old route's rendered output or interactions.

### Component Boundaries

Create a focused V2 component set rather than adding variants to every legacy component:

- `V2Header`: navigation and mobile menu.
- `V2Hero`: modular hero composition.
- `PortraitSwap`: pointer, keyboard, touch, and reduced-motion portrait behavior.
- `SelectedWork`: section wrapper and project sequencing.
- `ProjectStory`: semantic project presentation with composition variants driven by data.
- `OperatingRange`: discipline-to-evidence mapping.
- `Journey`: first-party career path.
- `V2Contact`: redesigned form surface reusing the existing email action.
- `V2Footer`: minimal closing utility row.

Keep content data separate from presentation. Reuse `projectsData` and `experiencesData` where their fields are sufficient; extend the shared data model only for real V2 content needs such as role, problem, or outcome.

### Assets

- Copy both supplied portraits into `public/images/avatars/` with stable descriptive filenames.
- Preserve original source files.
- Reuse current project screenshots and company marks.
- Optimize portrait delivery with responsive image sizing; preload the default portrait and ensure the hover portrait is available before interaction.

## State and Error Handling

- Portrait swap: default portrait is always available; enhanced state must fail safely to the default.
- Contact form: preserve server-side submission, validate required fields, disable duplicate submissions, and announce success or failure in an accessible status region.
- External projects: use descriptive accessible names and safe new-tab attributes.
- Mobile menu: restore focus to its trigger after closing and prevent clipped overlays.
- Missing optional project details: omit the row rather than rendering placeholder labels.

## Verification

### Automated

- Production build and TypeScript validation.
- Existing lint checks where supported by the current Next.js setup.
- Targeted component or interaction tests only where they protect real behavior: portrait input modes, route shell isolation, and contact submission state.

### Browser QA

- Compare `/` and `/v2` at desktop, tablet, and mobile widths.
- Confirm `/` has no visual or behavioral regressions.
- Test keyboard order, focus visibility, mobile menu focus management, and form labels.
- Test portrait hover, focus, tap, and reduced-motion behavior.
- Check heading overflow, project image crops, and touch target sizes.
- Verify WCAG AA contrast on every text/background pairing.
- Run the current Web Interface Guidelines review against changed UI files and resolve actionable findings.

## Non-goals

- Rewriting the portfolio's backend or email delivery.
- Replacing analytics providers.
- Building a CMS or project-detail system before the V2 page proves the direction.
- Removing or redirecting the original route.
- Reproducing the supplied reference site's design, typography, blue palette, or tile grid.

## Rollout

Ship `/v2` privately alongside `/`. Review it with real content and real devices. Promote it to `/` only after the comparison demonstrates a stronger first impression, clearer work evidence, and no accessibility or interaction regressions.
