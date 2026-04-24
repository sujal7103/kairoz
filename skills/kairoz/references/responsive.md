# Kairoz Responsive & Multi-surface

Three surface modes, one token set. Most classes work identically across all three surfaces; a handful of primitives swap at defined breakpoints.

## Surfaces

| Surface | Viewport | Primary classes |
|---|---|---|
| Mobile | 360–480px | `.kairoz-device-mobile` wrapper, `.kairoz-tabbar-bottom` |
| Tablet | 600–900px | `.kairoz-device-tablet` wrapper, mixed desktop/mobile |
| Desktop | 1000px+ | `.kairoz-device-desktop` chrome frame, `.kairoz-titlebar` |

## Device frames

The `.kairoz-device-*` classes wrap content in realistic viewport chrome. Intended uses:

- **Documentation** — presenting components in their native context.
- **Marketing assets** — rendering UI for emails and screenshots.
- **Multi-surface previews** — placing mobile and desktop side by side on one page.

These are presentational only. For production app shells, use `.kairoz-titlebar` and its siblings directly.

## Container queries first

Kairoz favors `@container` when a layout decision depends on the component's own width rather than the viewport:

```css
.my-panel { container: panel / inline-size; }
@container panel (min-width: 640px) {
  .my-grid { grid-template-columns: repeat(3, 1fr); }
}
```

Media queries still handle global font scaling (`.kairoz-display` uses `clamp()` internally), reduced-motion gating, and toggling between top and bottom navigation at mobile thresholds.

## Component substitutions by surface

| Role | Mobile | Desktop |
|---|---|---|
| Primary nav | `.kairoz-tabbar-bottom` | `.kairoz-sidebar` / nav tree |
| Page header | `.kairoz-topbar` (custom, 48–56px) | `.kairoz-titlebar` (36px) |
| Secondary nav | bottom sheet | `.kairoz-tabbar` (top tabs) |
| Modal | full-screen (no backdrop) | `.kairoz-dialog` + backdrop |
| Menu | action sheet (bottom) | `.kairoz-popover` |

## Safe areas on mobile

The `.kairoz-device-mobile` wrapper carves out 54px at the top and 34px at the bottom for safe areas. For actual mobile web deployments, use:

```css
padding-top: env(safe-area-inset-top);
padding-bottom: env(safe-area-inset-bottom);
```

## Typography scaling

- **Compact (default)**: `--text-base` holds at 13px. Built for app-density interfaces.
- **Responsive display**: `.kairoz-display` scales via `clamp(32px, 6vw, 72px)` for
  landing-page heroes. Limit to one or two instances per page.

## Motion on mobile

Reduce motion distances and durations on mobile. Scroll-driven reveals (`animation-timeline: view()`) fall back to `opacity: 1`. Keep the 120ms hover/press transitions -- they work well on touch targets.
