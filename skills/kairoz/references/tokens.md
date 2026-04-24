# Kairoz Token System

All design tokens are declared as CSS custom properties on `:root` in `colors_and_type.css`. When the theme switches to `[data-theme="light"]`, tokens remap themselves — component classes remain untouched.

---

## Backgrounds

| Token | Dark | Purpose |
|---|---|---|
| `--bg-base` | `#000` | Canvas, sidebar, main surface |
| `--bg-sidebar` | `#000` | Left nav |
| `--bg-surface` | `#000` | Generic surface |
| `--bg-raised` | `#0f0f0f` | Cards, popovers, elevated surfaces |
| `--bg-overlay` | `#0f0f0f` | Dialog/popover backgrounds |
| `--bg-input` | `#0a0a0a` | Input / textarea fills |
| `--bg-tab-active` | `#171717` | Active tab fill |
| `--bg-tab-inactive` | `transparent` | Inactive tab fill |
| `--bg-hover` | `rgba(255,255,255,0.04)` | Row/button hover |
| `--bg-selected` | `rgba(255,255,255,0.06)` | Selected row |
| `--bg-active` | `rgba(255,255,255,0.08)` | Pressed / active |
| `--bg-elevated` | `#0f0f0f` | Floating panels |

## Text

| Token | Dark | Purpose |
|---|---|---|
| `--text-primary` | `#fff` | Body, headings |
| `--text-secondary` | `#aaa` | Secondary copy |
| `--text-tertiary` | `#777` | Labels, captions |
| `--text-ghost` | `#333` | Placeholder, disabled |
| `--text-inverse` | `#000` | Text on light accent surfaces |
| `--text-muted` | `#585858` | De-emphasized |
| `--text-accent` | `#ffff00` | Rare — highlighted marker text |

## Borders

| Token | Dark | Purpose |
|---|---|---|
| `--border-default` | `#1e1e1e` | Standard separator |
| `--border-subtle` | `#141414` | Inner/subtle rule |
| `--border-strong` | `#3d3d3d` | Focus, emphasized edge |
| `--border-focus` | `#0070f3` | Focus ring (blue) |
| `--border-variant` | `#141414` | Alt separator |

## Accent

- `--accent-primary: #ededed` — **near-white primary** (buttons/CTAs/surfaces)
- `--accent-primary-hover: #fff`
- `--accent-primary-muted: rgba(237,237,237,0.06)`
- `--accent-secondary: #a1a1a1`
- `--accent-highlight: #0070f3` — **Vercel blue**, used for focus, links, selected rows, active dots, checkbox/radio fills. **Never for CTAs.**
- `--accent-highlight-hover: #3291ff`
- `--accent-highlight-muted: rgba(0,112,243,0.12)`

## Status

| Token | Color | Use |
|---|---|---|
| `--status-success` | `#4d4d4d` (dark) / green (light) | Success dot, success badge |
| `--status-warning` | `#CD9731` | Warning amber |
| `--status-error` | `#F44747` | Error red |
| `--status-info` | `#6796E6` | Info blue |

Every status token ships with a companion `-muted` variant at 12% alpha.

## shadcn aliases

These aliases bridge Kairoz tokens into the shadcn variable namespace. Any shadcn component dropped into a Kairoz project inherits the system automatically:
`--background`, `--foreground`, `--card`, `--card-foreground`, `--popover`,
`--popover-foreground`, `--primary`, `--primary-foreground`, `--secondary`,
`--secondary-foreground`, `--muted`, `--muted-foreground`, `--accent`,
`--accent-foreground`, `--destructive`, `--destructive-foreground`,
`--border`, `--input`, `--ring`.

---

## Typography

**Typefaces:**
- `--font-ui` — Inter (400/500/600/700)
- `--font-mono` — JetBrains Mono (400/500/600)
- `--font-display` — Inter (same face, sized up for hero use)

Both families load through `@import` from Google Fonts — no separate `<link>` tags required.

**Scale:**
| Token | Size | Usage |
|---|---|---|
| `--text-xxs` | 10px | Badges, captions |
| `--text-xs` | 11px | Panel headers, status bar |
| `--text-sm` | 12px | Tabs, buttons, inputs, list items |
| `--text-base` | 13px | Body default |
| `--text-md` | 14px | Emphasis |
| `--text-lg` | 16px | h4, section titles |
| `--text-xl` | 20px | h3, page titles |
| `--text-2xl` | 28px | h2 |
| `--text-3xl` | 44px | h1 |

Base: `13px / 1.45 / -0.01em`, antialiased.

---

## Spacing (4px grid, no exceptions)

`--space-0` 0 · `--space-px` 1 · `--space-0h` 2 · `--space-1` 4 · `--space-1h` 6
· `--space-2` 8 · `--space-3` 12 · `--space-4` 16 · `--space-5` 20
· `--space-6` 24 · `--space-8` 32 · `--space-10` 40

The 2px and 6px values serve ultra-compact inline scenarios only. Everything else locks to the 4px grid.

---

## Radius

`--radius-sm` 3px · `--radius-md` 4px · `--radius-lg` 6px · `--radius-full` 9999px (pills)
· `--radius` `0.375rem` (6px default)

There are no oversized radii. Pills get `--radius-full`. Every other surface stays within 3/4/6.

---

## Shadows (reserved for floating layers)

`--shadow-sm: 0 1px 2px rgba(0,0,0,0.6)`
`--shadow-md: 0 4px 12px rgba(0,0,0,0.8)`
`--shadow-lg: 0 8px 24px rgba(0,0,0,0.9)`
`--shadow-overlay: 0 16px 48px rgba(0,0,0,0.95)`

Shadows exist to lift *floating* content — dialogs, popovers, tooltips, toasts — off the canvas. Never apply them to cards or inline panels.

---

## Z-index

`--z-dropdown: 50` · `--z-sticky: 60` · `--z-overlay: 100` · `--z-modal: 200`
· `--z-toast: 300` · `--z-tooltip: 400` · `--z-max: 9999`

---

## Component sizing

| Token | Value | What |
|---|---|---|
| `--h-titlebar` | 36px | App title bar |
| `--h-tabbar` | 34px | Tab strip |
| `--h-panel-header` | 32px | Panel / card header |
| `--h-statusbar` | 28px | Bottom status bar |
| `--h-button` | 28px | Default button |
| `--h-icon-button` | 28px | Square icon button |
| `--h-input` | 24px | Input / select |
| `--h-input-sm` | 20px | Compact input |
| `--h-row` | 24px | List row |
