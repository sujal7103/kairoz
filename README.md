# Kairoz

> **The shadcn for AI tooling.**
> A framework-agnostic design system for AI and agent interfaces — dense,
> AMOLED-black, multi-surface. 180+ tokens, 50+ component classes. Dashboards,
> chat surfaces, autonomous workflows, landing pages, mobile apps. One skill
> teaches agents the system. One CSS file lets humans build with it directly.

<p>
  <a href="https://kairoz-live.vercel.app"><strong>kairoz-live.vercel.app</strong></a>
  &nbsp;·&nbsp;
  <a href="https://kairoz-live.vercel.app/get-started">Get started</a>
  &nbsp;·&nbsp;
  <a href="https://kairoz-live.vercel.app/components/button">Components</a>
  &nbsp;·&nbsp;
  <a href="https://kairoz-live.vercel.app/foundations/colors">Foundations</a>
  &nbsp;·&nbsp;
  <a href="https://kairoz-live.vercel.app/patterns/landing">Patterns</a>
  &nbsp;·&nbsp;
  <a href="https://kairoz-live.vercel.app/mockups/email">Mockups</a>
  &nbsp;·&nbsp;
  <a href="mailto:patilsujal101@gmail.com">Contact</a>
</p>

```html
<link rel="stylesheet" href="colors_and_type.css" />
<button class="kairoz-btn kairoz-btn-primary">Ship it</button>
```

---

## What Kairoz actually is

**Kairoz is a design *language* — not another CSS framework you wire up and hope for the best.** It breaks down into three pieces:

1. A **Claude Code skill** (`skills/kairoz/`) — markdown rules and a reference CSS
   file that give any coding agent a complete understanding of the Kairoz
   aesthetic: tokens, vocabulary, composition patterns, and the reasoning behind
   each constraint.
2. A **reference CSS implementation** (`colors_and_type.css`) — 180+ tokens and
   50+ `.kairoz-*` classes. Drop it into plain HTML and it works. Translate it
   to any other stack and it still holds.
3. A **live app site** at **[kairoz-live.vercel.app](https://kairoz-live.vercel.app)** — 55+ pages covering every
   component, pattern, and four complete app mockups. The entire site was
   generated in a single pass by an agent reading the skill.

> The agent absorbs the rules and produces code native to **your** stack —
> shadcn, Tailwind, raw HTML, React with CSS Modules, Vue, Svelte. The reference
> CSS is there if you want it, never required.

---

## Live site

Every page is live and browsable at **[kairoz-live.vercel.app](https://kairoz-live.vercel.app)**:

| Section | What's there |
|---|---|
| [**Get started**](https://kairoz-live.vercel.app/get-started) | Install, per-stack translation examples, FAQ |
| [**Foundations**](https://kairoz-live.vercel.app/foundations/colors) | Colors, typography, spacing, radius, shadows, motion, icons |
| [**Components**](https://kairoz-live.vercel.app/components/button) | 36 component pages — buttons, inputs, cards, dialogs, tabs, tables, stepper, toast, command palette, etc. |
| [**Patterns**](https://kairoz-live.vercel.app/patterns/landing) | Landing, agent chat, mobile app, 3-pane shell, dashboard, settings |
| [**Mockups**](https://kairoz-live.vercel.app/mockups/email) | Full-app UIs — [Email](https://kairoz-live.vercel.app/mockups/email), [E-commerce](https://kairoz-live.vercel.app/mockups/ecommerce), [Multi-agent](https://kairoz-live.vercel.app/mockups/multi-agent), [News & polls](https://kairoz-live.vercel.app/mockups/news) |

Each component page includes a **"Copy rules"** button in the inspector. One
click captures the full markdown spec — anatomy, tokens, dos/donts, and Kairoz
core rules — ready to paste into any agent conversation for precise output.

---

## Install

### 1. As a Claude Code skill (recommended)

```bash
# 1. Register this repo as a marketplace
/plugin marketplace add sujal7103/kairoz

# 2. Install the kairoz plugin from it
/plugin install kairoz@kairoz-ui
```

From here on, every UI task triggers the Kairoz skill. The agent reads the
system, then generates code matched to your stack. Here is what gets loaded:

```
skills/kairoz/
├── SKILL.md                    # entry rules + activation protocol
├── colors_and_type.css         # reference implementation (not a dependency)
└── references/
    ├── tokens.md               # every CSS variable
    ├── components.md           # every .kairoz-* class + HTML snippet
    ├── theming.md              # dark/light + shadcn alias table
    ├── patterns.md             # 3-pane shell, content tone, icon rules
    ├── responsive.md           # multi-surface, device frames, container queries
    ├── motion.md               # easing tokens, durations, overlay rules
    ├── lessons.md              # 20 gotchas from real builds (button resets,
    │                           #  shadow-per-theme, pulse-only-opacity, etc.)
    └── examples.md             # 10 copy-ready composition snippets
```

### 2. With any other coding agent (Cursor, Windsurf, Cody, Aider…)

The skill is plain markdown and one CSS file — nothing proprietary. Point your
agent at `skills/kairoz/` in this repo. Tell it to start with `SKILL.md`.
That is the entire setup.

```bash
# Clone and reference from your project
git clone https://github.com/sujal7103/kairoz.git .kairoz-skill
# Then in your agent chat:
# "Read .kairoz-skill/skills/kairoz/SKILL.md and generate a deploy dashboard."
```

### 3. As a raw stylesheet (no agent, plain HTML)

```bash
curl -o kairoz.css https://raw.githubusercontent.com/sujal7103/kairoz/main/skills/kairoz/colors_and_type.css
```

Then:

```html
<link rel="stylesheet" href="kairoz.css" />
<button class="kairoz-btn kairoz-btn-primary">Ship it</button>
```

Inter and JetBrains Mono load from Google Fonts automatically. Zero build
steps. Zero configuration.

---

## Usage examples by stack

### Plain HTML

```html
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <link rel="stylesheet" href="/kairoz.css" />
  </head>
  <body>
    <header class="kairoz-titlebar">
      <span class="kairoz-panel-title">Kairoz — Production</span>
    </header>

    <main style="padding: 24px;">
      <div class="kairoz-card" style="width: 320px;">
        <div class="kairoz-card-header">
          <span class="kairoz-dot kairoz-dot-success"></span>
          <span class="kairoz-panel-title">Deploy</span>
        </div>
        <div class="kairoz-card-body">
          Production · main@a9f3b1 · 42ms p95
        </div>
      </div>

      <div style="margin-top: 12px; display: flex; gap: 8px;">
        <button class="kairoz-btn kairoz-btn-primary">Deploy</button>
        <button class="kairoz-btn kairoz-btn-secondary">Preview</button>
        <button class="kairoz-btn kairoz-btn-ghost">Logs</button>
      </div>
    </main>
  </body>
</html>
```

### React / Next.js (App Router)

```tsx
// app/layout.tsx
import "./kairoz.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>{children}</body>
    </html>
  );
}

// app/page.tsx
export default function Home() {
  return (
    <div style={{ padding: 24 }}>
      <button className="kairoz-btn kairoz-btn-primary">Ship it</button>
      <span className="kairoz-badge kairoz-badge-success">OK</span>
    </div>
  );
}
```

### Tailwind v4 (translate tokens, don't overlay)

The agent maps Kairoz tokens into a `@theme` block and outputs utility classes.
**Leave `kairoz.css` out of the bundle** — Tailwind handles the utility layer.

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  --color-bg-base: #000000;
  --color-bg-raised: #0f0f0f;
  --color-text-primary: #ffffff;
  --color-text-secondary: #aaaaaa;
  --color-accent-primary: #ededed;
  --color-accent-highlight: #0070f3;
  --color-status-error: #F44747;
  --color-status-warning: #CD9731;
  --color-status-success: #4d4d4d;

  --radius-sm: 3px;
  --radius-md: 4px;
  --radius-lg: 6px;

  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", ui-monospace, monospace;
}
```

Then write utility classes that follow the Kairoz constraints (28px buttons,
4px grid, 1px borders):

```tsx
<button className="inline-flex items-center h-7 px-3 bg-accent-primary
                   text-black rounded-md text-sm font-medium hover:brightness-95
                   transition-colors">
  Ship it
</button>
```

### shadcn/ui (override CSS variables)

shadcn already runs on CSS variables. **Do not layer `.kairoz-*` classes on
top.** Override shadcn's own variables with Kairoz values and let shadcn's
component structure stay exactly where it is.

```css
/* app/globals.css */
:root {
  --background: 0 0% 0%;                 /* Kairoz --bg-base */
  --foreground: 0 0% 100%;                /* Kairoz --text-primary */
  --card: 0 0% 6%;                        /* Kairoz --bg-raised */
  --card-foreground: 0 0% 100%;
  --popover: 0 0% 6%;
  --popover-foreground: 0 0% 100%;
  --primary: 0 0% 93%;                    /* Kairoz --accent-primary (#ededed) */
  --primary-foreground: 0 0% 0%;
  --secondary: 0 0% 9%;
  --secondary-foreground: 0 0% 67%;
  --muted: 0 0% 9%;
  --muted-foreground: 0 0% 35%;
  --accent: 0 0% 9%;
  --accent-foreground: 0 0% 100%;
  --destructive: 0 87% 62%;               /* Kairoz --status-error (#F44747) */
  --destructive-foreground: 0 0% 100%;
  --border: 0 0% 12%;
  --input: 0 0% 12%;
  --ring: 212 100% 48%;                   /* Kairoz --accent-highlight (#0070f3) */
  --radius: 0.25rem;                      /* 4px */
}
```

Then use shadcn the way you always would:

```tsx
import { Button } from "@/components/ui/button";
<Button variant="default">Ship it</Button>
```

The button renders with Kairoz aesthetics. Your markup remains pure shadcn.

### Vue 3

```ts
// main.ts
import { createApp } from "vue";
import "./kairoz.css";
import App from "./App.vue";

createApp(App).mount("#app");
```

```vue
<!-- components/DeployButton.vue -->
<template>
  <button class="kairoz-btn kairoz-btn-primary" @click="$emit('deploy')">
    <slot>Deploy</slot>
  </button>
</template>
```

### Svelte / SvelteKit

```svelte
<!-- +layout.svelte -->
<script>
  import "./kairoz.css";
</script>

<slot />
```

```svelte
<!-- DeployButton.svelte -->
<button class="kairoz-btn kairoz-btn-primary" on:click>
  <slot>Deploy</slot>
</button>
```

### CSS Modules / styled-components

Lift the relevant `.kairoz-*` rule into your styling system. The CSS file holds
the *visual truth*; what you write is the faithful translation.

```css
/* Button.module.css — port of .kairoz-btn rules */
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  font: 500 12px "Inter", system-ui;
  cursor: pointer;
  transition: background-color 120ms ease;
}
.primary { background: #ededed; color: #000; }
.primary:hover { background: #fff; }
```

---

## Principles (non-negotiable)

1. **AMOLED black.** Pure `#000` base. Dark gray is compromise; Kairoz does not compromise.
2. **Monochromatic.** Grays and whites carry the structure. Saturated color
   appears only when it means something — status, not decoration.
3. **Compact.** Strict 4px grid. 13px base text. 28px buttons. 24px inputs.
   Density is a feature, not a side effect.
4. **Border-defined surfaces.** Every edge is deliberate. Shadows exist only
   for overlays (dialog, popover, toast, tooltip, device frame).
5. **Near-white primary, blue highlight.** `#ededed` drives action.
   `#0070f3` is **never a CTA** — it marks focus rings, selection, links,
   active stepper dots. Two roles, never confused.
6. **Radii are 3 / 4 / 6 / 9999.** The set is closed. No improvising 8, 10, 12, 16.
7. **Lucide icons, 1.5px stroke.** No emoji. No unicode symbols. Clean line work only.
8. **Only animate `background-color` by default.** Icons stay still — no color
   or opacity transitions on them.
9. **Overlays get `backdrop-filter: blur()` + spring curves.** Flat `ease`
   on a modal entrance is a dead giveaway of carelessness.
10. **Dark-first with a real light theme.** All tokens remap under
    `[data-theme="light"]`. Component structure does not change — only the palette shifts.

---

## Component vocabulary

50+ `.kairoz-*` classes covering every surface you will need. Full HTML
snippets live at [`/components`](https://kairoz-live.vercel.app/components/button) on the site.

**Primitives:** `.kairoz-btn` (+ `-primary` / `-secondary` / `-ghost` /
`-destructive` / `-icon` / `-sm` / `-lg`), `.kairoz-btn-pill` (same variants),
`.kairoz-input` (+ `-sm`), `.kairoz-checkbox`, `.kairoz-radio`, `.kairoz-switch`,
`.kairoz-kbd`, `.kairoz-link`

**Surfaces:** `.kairoz-card` / `-header` / `-body`, `.kairoz-panel-header` /
`.kairoz-panel-title`, `.kairoz-stat` / `-label` / `-value` / `-delta`,
`.kairoz-empty`

**Navigation:** `.kairoz-tabbar` + `.kairoz-tab`, `.kairoz-tabbar-bottom` +
`.kairoz-tabbar-bottom-item`, `.kairoz-segmented` + `-item`, `.kairoz-toggle`,
`.kairoz-breadcrumb`, `.kairoz-pagination`, `.kairoz-stepper`

**Overlays:** `.kairoz-popover` + `.kairoz-menu-item`, `.kairoz-dialog`,
`.kairoz-command`, `.kairoz-tooltip`, `.kairoz-toast`, `.kairoz-alert`

**Data:** `.kairoz-table`, `.kairoz-list` + `.kairoz-list-item`, `.kairoz-badge`,
`.kairoz-pill`, `.kairoz-dot` (+ `.is-pulse`), `.kairoz-accordion`

**Feedback:** `.kairoz-progress`, `.kairoz-slider`, `.kairoz-skeleton`,
`.kairoz-titlebar`, `.kairoz-statusbar`

**Identity:** `.kairoz-avatar`, `.kairoz-avatar-group`, `.kairoz-divider` / `-v`,
`.kairoz-divider-dashed` / `-v-dashed`

**Multi-surface:** `.kairoz-device-mobile`, `.kairoz-device-tablet`,
`.kairoz-device-desktop`, `.kairoz-marquee`, `.kairoz-filmstrip`, `.kairoz-reveal`,
`.kairoz-display` / `-lg`, `.kairoz-eyebrow`

---

## Local development

Clone the repo and run the app site on your machine:

```bash
git clone https://github.com/sujal7103/kairoz.git
cd ui/app
bun install       # or: npm install, pnpm install
bun run dev       # starts on http://localhost:3000
```

The dev server picks up changes in `app/app/**` and any edits to
`skills/kairoz/colors_and_type.css` (copy it into `app/public/kairoz.css`
to see results). Hot reload is instant — it is a standard Next.js 16 app under
the hood.

---

## Repo layout

```
ui/
├── .claude-plugin/
│   ├── marketplace.json           ← registers the repo as a Claude Code marketplace
│   └── plugin.json                ← Claude Code plugin manifest (served by the marketplace)
├── skills/
│   └── kairoz/                     ← For agents
│       ├── SKILL.md               ←   entry point (read first)
│       ├── colors_and_type.css    ←   reference implementation
│       ├── references/            ←   tokens, components, theming,
│       │                          ←   patterns, responsive, motion,
│       │                          ←   lessons, examples
│       ├── preview/               ←   HTML previews per component
│       └── ui_kits/generic_app/   ←   3-pane shell reference
├── app/                  ← For humans (Next.js 16)
│   ├── app/                       ←   55+ pages
│   │   ├── get-started/
│   │   ├── foundations/
│   │   ├── components/
│   │   ├── patterns/
│   │   └── mockups/
│   ├── components/                ←   site chrome + showcase primitives
│   ├── lib/                       ←   nav registry
│   └── public/
│       └── kairoz.css              ←   synced from skills/kairoz/
├── README.md                      ← you are here
└── LICENSE                        ← MIT
```

---

## Ecosystem (works alongside)

- **[Radix UI](https://www.radix-ui.com/)** — dropdown, popover, dialog, context menu primitives
- **[Lucide](https://lucide.dev/)** — 1.5px stroke icons, color inherited from parent
- **[react-resizable-panels](https://react-resizable-panels.vercel.app/)** — for 3-pane layouts
- **[shadcn/ui](https://ui.shadcn.com/)** — variable-aliased for automatic Kairoz inheritance
- **[Tailwind CSS v4](https://tailwindcss.com/)** — optional; Kairoz tokens translate to `@theme`
- **[Next.js](https://nextjs.org/)** — the app uses 16 + Turbopack

---

## FAQ

**Does it work with shadcn?** Seamlessly — because it does not fight shadcn's
architecture. The agent reads the variable alias table in `references/theming.md`
and remaps shadcn's CSS variables to Kairoz values. shadcn components stay
shadcn; they just look right.

**Does it conflict with Tailwind?** Not at all. The agent translates Kairoz
tokens into Tailwind's `@theme` block and writes utility classes. `kairoz.css`
stays out of the Tailwind bundle unless you deliberately include it.

**When do I use `colors_and_type.css` directly?** Whenever there is no
framework in the way: plain HTML, static-site generators, greenfield projects
without a component library. The CSS is production-grade — the entire
app site runs on it. For everything else, translate.

**Is the reference CSS complete?** 180+ tokens, 50+ class rules, dark + light
theme, responsive helpers, device frames, easing tokens, motion primitives —
all documented. It ships no JavaScript. Interactions (dialogs, dropdowns,
toasts) are styling only; wire behavior through your stack's own state layer.

**How was this site built?** A single agent pass reading this skill. Hero,
meta banner, 29+ live component cards, 7 foundations, 36 components, 6
patterns, and 4 full-app mockups ([email](https://kairoz-live.vercel.app/mockups/email),
[e-commerce](https://kairoz-live.vercel.app/mockups/ecommerce), [multi-agent](https://kairoz-live.vercel.app/mockups/multi-agent),
[news](https://kairoz-live.vercel.app/mockups/news)) — every page generated from the markdown rules alone.

---

## Contributing

Pull requests are welcome. For anything structural — new tokens, new component
classes, renames — open an issue first so the intent is clear.

- **Bug reports / feature requests**: [github.com/sujal7103/kairoz/issues](https://github.com/sujal7103/kairoz/issues)
- **Contact**: [patilsujal101@gmail.com](mailto:patilsujal101@gmail.com)

Ground rules for skill contributions:
1. Keep `skills/kairoz/colors_and_type.css` and
   `app/public/kairoz.css` identical (one is a copy of the other).
2. Every new CSS class needs a matching snippet in
   `skills/kairoz/references/components.md` and a showcase page under
   `app/app/components/`.
3. Hard-won lessons belong in
   `skills/kairoz/references/lessons.md` — if you hit a gotcha, write it down.

---

## License

MIT © [sujal7103](https://github.com/sujal7103)
