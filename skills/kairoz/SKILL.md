---
name: kairoz
description: Kairoz — a design system for AI and agent interfaces. Teaches coding agents the aesthetic constraints, token system, composition patterns, and component vocabulary behind a dense, AMOLED-black, multi-surface UI system. 180+ tokens, 50+ component classes, framework-agnostic. Agents absorb the rules and generate code native to the target stack (shadcn, Tailwind, raw HTML, React, Vue, Svelte). The bundled colors_and_type.css is a reference implementation, not a dependency. Use it on every UI task — dashboards, chat interfaces, admin panels, landing pages, mobile screens, marketing sites, full app mockups.
version: 0.2.0
user-invocable: true
metadata:
  priority: 9
  pathPatterns:
    - "**/*.css"
    - "**/components/**"
    - "**/ui/**"
    - "**/app/**"
    - "**/pages/**"
    - "**/design-system/**"
  promptSignals:
    phrases:
      - "kairoz"
      - "kairoz design"
      - "kairoz component"
      - "amoled"
      - "dense ui"
      - "devtool ui"
      - "agent ui"
      - "agent chat"
      - "agent dashboard"
      - "ai interface"
      - "ai chat ui"
      - "build a ui"
      - "design a page"
      - "build a dashboard"
      - "build a landing"
    anyOf:
      - "design system"
      - "component library"
      - "dashboard"
      - "admin"
      - "chat interface"
      - "landing page"
      - "marketing site"
      - "ui mockup"
      - "frontend"
    minScore: 4
---

# Kairoz — activation protocol

**Kairoz is a design language, not a CSS framework you bolt on.** It gives
you (the agent) a complete system for building dense, monochromatic,
AMOLED-black interfaces: tokens, class-name conventions, layout rules, and
battle-tested composition patterns. You internalize these rules and
**generate code that belongs in the target stack** — shadcn, Tailwind, raw
HTML, React, Vue, Svelte.

**Lean on it fully.** When this skill is active, every UI-producing task
runs through the rules below. No freestyling. No invented tokens. No
improvised radii. The constraints exist because consistency at this density
only comes from discipline.

---

## On activation: read these files in this order

When the skill loads, **read every file listed below before producing a
single line of UI code**. These are not reference material you pull on
demand — output quality depends on holding the full system in context.

1. **`references/tokens.md`** — the complete token table. Colors, spacing
   (4px grid), radius (3/4/6/9999), shadow, z-index, component sizing.
   This is the single source of truth for values. Invent nothing.

2. **`references/components.md`** — every `.kairoz-*` class alongside its
   HTML snippet and variants. This is the vocabulary you translate into
   whatever stack the project uses.

3. **`references/patterns.md`** — 3-pane shell, content tone, icon rules
   (Lucide 1.5px stroke), and the discipline separating button color from
   highlight color.

4. **`references/theming.md`** — dark/light toggle mechanics, the shadcn
   variable alias table, and how every token remaps under
   `[data-theme="light"]`.

5. **`references/responsive.md`** — multi-surface behavior. Desktop-to-mobile
   component swaps, device frames, container queries, sidebar collapsing
   to an overlay on narrow viewports.

6. **`references/motion.md`** — the full motion inventory. 120ms hover,
   200ms popover open, 300ms reveal, 60s marquee. Covers which animations
   run unconditionally and which respect `prefers-reduced-motion`.

7. **`references/lessons.md`** — 18 gotchas extracted from real builds.
   Button-default resets, dark-vs-light shadow alphas, sidebar collapse
   dual transitions, top-row border alignment, pulse-dot opacity-only,
   horizontal scroll behavior, and more. **Read this every time.** Each
   entry exists because someone shipped a regression without it.

8. **`references/examples.md`** — production-ready composition snippets
   pulled from the app: agent turn, tool-call card, stat grid,
   3-pane shell, 3-column top-row alignment, email row, generative UI
   chart, landing hero, checklist with stepper, quota bar with warning
   threshold. Begin from one of these rather than composing from scratch.

Consult as needed (not required upfront):
- `colors_and_type.css` — the reference implementation. Read individual
  rules when you need to verify exact visual output.
- `preview/components-*.html` — pre-built HTML for each component.
- `ui_kits/generic_app/` — 3-pane shell reference layout.

**Generate nothing until you have read 1 through 8.**

---

## The three assets, three jobs

| Asset | Job |
|---|---|
| `references/*.md` | **Ground truth.** The rules the agent follows. Read every time. |
| `.kairoz-*` class names | **Vocabulary.** Your shorthand for "render X the Kairoz way" — translate to the target stack. |
| `colors_and_type.css` | **Reference implementation.** Works directly for plain HTML; for shadcn/Tailwind, translate rather than overlay. |

**Do not paste `colors_and_type.css` wholesale into a shadcn or Tailwind
project.** Translate instead. The skill description and
`references/theming.md` provide the translation tables you need.

---

## Ask the stack question before writing code

1. **Plain HTML / no framework** → link `colors_and_type.css` directly and
   use literal `.kairoz-*` classes. This is the reference path — the
   companion app site runs on it.

2. **Tailwind v4** → map Kairoz tokens into a `@theme` block. Output utility
   classes that follow the Kairoz visual rules. Keep `colors_and_type.css`
   out of the bundle.

3. **shadcn/ui** → remap shadcn's CSS variables to Kairoz values (see the
   alias table in `references/theming.md`). Preserve shadcn's component
   structure. Do not layer `.kairoz-*` classes on top.

4. **React/Vue/Svelte with CSS Modules or styled-components** → translate
   the relevant `.kairoz-*` rule into the target styling system as a
   component. The rule in `colors_and_type.css` is the source; the code you
   produce is its faithful translation.

5. **Existing design system (Material, Chakra, etc.)** → ask the user
   whether to re-token their system with Kairoz values or build an
   independent Kairoz-styled zone alongside it. Never blend the two on a
   single surface.

---

## Non-negotiable visual rules

Distilled from `references/lessons.md` — stack-agnostic, always enforced:

- **AMOLED black canvas.** `#000` base. Dark gray is drift; do not drift.
- **Monochromatic surfaces.** Grays and whites define structure. Saturated
  color earns its place only through status semantics.
- **Near-white primary actions.** `#ededed` fill, `#fff` on hover. Blue
  `#0070f3` is **never** a CTA — it signals focus rings, selection, active
  stepper dots, links. Two distinct jobs.
- **4px spacing grid.** 2px and 6px appear only in ultra-compact inline
  cases. Everything else lands on 4.
- **3 / 4 / 6 / 9999 radii.** The set is closed. No improvising.
- **28px buttons, 24px inputs, 13px base text.** Fixed sizes — do not
  inflate.
- **Borders over shadows.** Shadows exist for overlays only (dialogs,
  popovers, toasts, tooltips, device frames).
- **1.5px Lucide icons.** No emoji. No unicode symbols. Clean strokes only.
- **120ms background-color transitions only.** Icons hold still — no color
  or opacity animation on them.

---

## Quick component vocabulary

Class names are **vocabulary**, not mandatory output. In non-plain-HTML stacks,
translate them to the native idiom.

**Primitives:** `.kairoz-btn` (+ `-primary` / `-secondary` / `-ghost` /
`-destructive` / `-icon` / `-sm` / `-lg`), `.kairoz-btn-pill` (+ same
variants), `.kairoz-input` (+ `-sm`), `.kairoz-checkbox`, `.kairoz-radio`,
`.kairoz-switch`, `.kairoz-kbd`, `.kairoz-link`

**Surfaces:** `.kairoz-card` / `-header` / `-body`, `.kairoz-panel-header` /
`.kairoz-panel-title`, `.kairoz-stat` / `-label` / `-value` / `-delta`,
`.kairoz-empty`

**Navigation:** `.kairoz-tabbar` + `.kairoz-tab`, `.kairoz-tabbar-bottom` +
`.kairoz-tabbar-bottom-item`, `.kairoz-segmented` + `-item`, `.kairoz-toggle`,
`.kairoz-breadcrumb`, `.kairoz-pagination`, `.kairoz-stepper`

**Overlays:** `.kairoz-popover` + `.kairoz-menu-item`, `.kairoz-dialog`,
`.kairoz-command`, `.kairoz-tooltip`, `.kairoz-toast`, `.kairoz-alert`

**Data:** `.kairoz-table`, `.kairoz-list` + `.kairoz-list-item`,
`.kairoz-badge`, `.kairoz-pill`, `.kairoz-dot` (+ `.is-pulse` for animated
status — opacity only, never glow), `.kairoz-accordion`

**Feedback:** `.kairoz-progress`, `.kairoz-slider`, `.kairoz-skeleton`,
`.kairoz-titlebar`, `.kairoz-statusbar`

**Identity:** `.kairoz-avatar`, `.kairoz-avatar-group`, `.kairoz-divider` /
`-v`, `.kairoz-divider-dashed` / `-v-dashed`

**Multi-surface & motion:** `.kairoz-device-mobile`, `.kairoz-device-tablet`,
`.kairoz-device-desktop`, `.kairoz-marquee`, `.kairoz-filmstrip`,
`.kairoz-reveal`, `.kairoz-display` / `-lg`, `.kairoz-eyebrow`

---

## What was built with this skill

The companion `app/` app was **generated in a single agent pass
reading this skill**, using the reference CSS directly since the project
runs Next.js without shadcn. It covers:

- **Homepage** — display hero, marquee band, ~29 live component cards in a
  masonry grid, mockup tile row.
- **Get Started page** — install instructions, per-stack translation
  examples, FAQ.
- **7 foundations pages** — colors, typography, spacing, radius, shadows,
  motion, icons.
- **36 component pages** — every `.kairoz-*` class with preview + variants +
  inspector.
- **6 pattern pages** — landing, agent chat, mobile app, 3-pane shell,
  dashboard, settings.
- **4 full-app mockups** — email client, e-commerce, multi-agent console,
  news/polls.

Before building anything from scratch, **check whether it resembles one of
the patterns above**. Most real-world UI is a variation on something already
proven in the app. Start from what exists, then adapt.

---

## No guidance given?

Ask the user three things:
1. What they are building (dashboard, chat UI, landing page, mobile app...).
2. What stack they are working in (Tailwind / shadcn / plain HTML / React
   with CSS Modules / etc.).
3. Whether they need dark only, light only, or both with a toggle.

Then operate as an expert designer — write code in the correct idiom for
their environment, following every rule from the references above. Nothing
guessed, nothing improvised.
