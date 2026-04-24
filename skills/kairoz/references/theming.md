# Kairoz Theming

Two modes, zero class changes. The components stay the same; only the tokens remap.

## Activation

```html
<!-- dark (default) -->
<html data-theme="dark">

<!-- light -->
<html data-theme="light">

<!-- or via class -->
<body class="light">
```

Switch modes by swapping the attribute or class at runtime. Persist the choice in `localStorage` and apply it via `document.documentElement.setAttribute('data-theme', saved)` before first paint to prevent a flash.

## Dark (default)

- Canvas: pure `#000`
- Text: `#fff` primary, `#aaa` secondary
- Accent primary: `#ededed` (near-white)
- Highlight: `#0070f3` (Vercel blue)

## Light

- Canvas: `#fff`
- Text: near-black primary, `#555` secondary
- Accent primary: near-black (inverted)
- Highlight: `#0070f3` (same blue — mode-invariant)

**The blue highlight is mode-invariant by design.** Focus rings, selected rows, checkbox fills, and active stepper dots remain `#0070f3` in both modes — one color signal users learn once.

## shadcn integration

Kairoz maps its tokens to the full shadcn variable set (`--background`, `--foreground`, `--primary`, `--ring`, etc.). Drop any shadcn component into a Kairoz-loaded project and it inherits the aesthetic with zero extra configuration.

Setup for shadcn + Tailwind 4:

1. Import `colors_and_type.css` before `@import "tailwindcss"` so shadcn variables
   are resolved when Tailwind's `@theme` consumes them.
2. Optionally disable Tailwind's preflight if it clashes with Kairoz base styles.
3. Use shadcn components normally — they will pick up Kairoz colors, radius, and
   spacing automatically.

## Building theme-aware components

Always reference tokens by name — never hardcode hex values:

```css
/* YES */
.my-panel { background: var(--bg-raised); color: var(--text-primary); }

/* NO — breaks theme switching */
.my-panel { background: #0f0f0f; color: #fff; }
```

Several effects (rgba overlays, for instance) are already theme-aware through tokens like `--bg-hover`. Prefer those over raw `rgba(255,255,255,...)` when working on neutral surfaces.
