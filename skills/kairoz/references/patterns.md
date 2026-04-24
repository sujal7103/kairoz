# Kairoz Composition Patterns

Tested layouts that combine components for common app structures. Each pattern has shipped in production.

## 3-pane app shell

The foundational Kairoz layout: titlebar, sidebar, main panel, inspector, and status bar. Complete source lives in `ui_kits/generic_app/`.

```
┌──────────────────────────────────────────────────────┐
│ .kairoz-titlebar (36px)                               │
├──────────┬────────────────────────────┬──────────────┤
│ Sidebar  │ Main panel                 │ Inspector    │
│ 220px    │   ├── .kairoz-tabbar (34px) │ 280px        │
│          │   └── content              │              │
├──────────┴────────────────────────────┴──────────────┤
│ .kairoz-statusbar (28px)                              │
└──────────────────────────────────────────────────────┘
```

How it works:
- Build with `display: grid` — columns `220px 1fr 280px`, rows
  `var(--h-titlebar) 1fr var(--h-statusbar)`.
- Apply `contain: layout style paint` to every panel for scroll isolation.
- Reach for `react-resizable-panels` when resizing is needed; otherwise, keep widths fixed.

## Card density

Cards use small radii and no drop shadows.

- Header: 32px (`--h-panel-header`), 11px uppercase title, 8px gap between dot and title.
- Body: 12px padding for dense contexts, 16px when you have room.
- Border: `1px solid var(--border-default)`. Never combine a border with a shadow.

## Icon dimensions

| Context | Size | Stroke |
|---|---|---|
| Titlebar | 18px | 1.5 |
| Button / standalone | 16px | 1.5 |
| Card header | 11px | 1.5 |
| Inline with text | matches font size | 1.5 |
| Empty state | 24px | 1.5 |

Source every icon from Lucide (`lucide` npm or CDN `https://unpkg.com/lucide@latest`). **No emoji, no unicode glyphs** (no ★ → ✓) — always a proper icon.

## Writing voice

- **Sentence case everywhere.** `Create project`, not `Create Project`.
- **UPPERCASE + tracking 0.08em+** is reserved for eyebrow labels, badges, and section dividers.
- **Quantify, don't qualify.** `12,847 rows` over "many rows."
- **No emoji.** No ★, →, ✓ — Lucide icons only.
- **Tone: short and factual.** Terse, declarative. Describe what the UI does, not how it feels.

## Motion constraints

- Animate `background-color` only (120--150ms).
- Never animate `color` or `opacity` on icons — it produces jitter.
- No bounce, no spring. Stick to `ease-out` or linear.
- Skip entry/exit animations on content — the interface should feel instantaneous.

## Blue vs. near-white: the split

| Need | Color |
|---|---|
| Primary CTA button | **Near-white** `--accent-primary` |
| Focus ring | **Blue** `--accent-highlight` |
| Selected row | **Blue** left border + muted blue fill |
| Link | **Blue** (underline on hover) |
| Active stepper dot | **Blue** |
| Checkbox/radio fill when checked | **Blue** |
| Destructive CTA | Red `--status-error` (not blue, not near-white) |

**Near-white is for actions (buttons, CTAs). Blue is for state (focus, selection, checked).**

## Layout spacing

- **4px grid, universally.** Use `--space-1` through `--space-10`. `--space-0h` (2px)
  and `--space-1h` (6px) exist only for ultra-compact inline cases.
- **Panel padding:** 12px for tight contexts, 16px standard, 24px when breathing room matters.
- **Stack gap:** 4px between closely related items, 8px between distinct siblings,
  16px between sections.
