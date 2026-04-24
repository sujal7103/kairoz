# Kairoz Motion

Hover and press transitions use short durations (120ms). Overlays, drawers, and sheets use spring curves at 260--340ms. Do not use a flat `ease` keyword on modal entrances -- use the spring tokens defined below.

---

## Easing tokens

All curves live in `colors_and_type.css`. Use these and only these — never hand-author a curve.

| Token | Curve | When to use |
|---|---|---|
| `--ease-standard` | `cubic-bezier(0.4, 0, 0.2, 1)` | Subtle fades, content swaps, opacity changes |
| `--ease-out-expo` | `cubic-bezier(0.16, 1, 0.3, 1)` | Overlay fade-in (dramatic but smooth) |
| `--ease-apple` | `cubic-bezier(0.32, 0.72, 0, 1)` | Drawers, sheets, sidebars — spring-feel without overshoot |
| `--ease-spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Scale-pop for modals/dialogs/command palette (slight overshoot) |
| `--ease-emphatic` | `cubic-bezier(0.2, 0, 0, 1)` | Big macro transitions (rare) |

## Duration tokens

| Token | Value | Use for |
|---|---|---|
| `--dur-fast` | 140ms | Hover, press, small state swaps |
| `--dur-base` | 220ms | Dropdowns, tooltips, toasts |
| `--dur-slow` | 320ms | Drawers, sheets, sidebar collapse |
| `--dur-xslow` | 420ms | Page transitions, macro reveal |

## Motion inventory

| Transition | Duration | Curve | When |
|---|---|---|---|
| Hover fill | 120ms | ease-out | Background-color on button/link/row |
| Press | 120ms | ease | `transform: scale(0.985)` on active |
| Popover / tooltip open | 220ms | `--ease-standard` | Fade + tiny translate |
| **Dialog / modal open** | 340ms | `--ease-spring` | Scale 0.94 → 1 + opacity 0 → 1 |
| **Command palette open** | 340ms | `--ease-spring` | Same as dialog; backdrop uses `--ease-out-expo` (260ms) |
| Toast enter | 260ms | `--ease-apple` | Slide-in from bottom |
| **Sidebar collapse** | 340ms | `--ease-apple` | grid-template-columns + opacity |
| **Mobile sidebar overlay** | 360ms | `--ease-apple` | `translateX(-100%)` → `translateX(0)` |
| Scroll reveal | 300ms | linear (view timeline) | `.kairoz-reveal` |
| Skeleton shimmer | 1600ms | linear loop | Continuous |
| Dot pulse | 1600ms | ease-in-out loop | `.kairoz-dot.is-pulse` — opacity only |
| Marquee scroll | 60s | linear loop | `.kairoz-marquee` — paused on hover |

## Overlay backdrops: blur is mandatory

Every overlay -- command palette, mobile sidebar drawer, dialog, sheet -- requires `backdrop-filter: blur()` **combined with** a tinted background, not a flat rgba alone. The blur provides depth separation between the overlay and the content behind it.

```css
.overlay-backdrop {
  background: rgba(0, 0, 0, 0.45);
  backdrop-filter: blur(12px) saturate(150%);
  -webkit-backdrop-filter: blur(12px) saturate(150%);
  transition: opacity 260ms var(--ease-out-expo);
}
[data-theme="light"] .overlay-backdrop {
  background: rgba(220, 220, 220, 0.5);
}
```

Light mode requires a separate backdrop tint to maintain contrast. Dark mode uses lower alpha because the blur effect is more visible against dark backgrounds.

## Animating enter AND exit

Never unmount an overlay component directly. Use a two-stage mount instead:

```tsx
const [mounted, setMounted] = useState(false);
const [visible, setVisible] = useState(false);

useEffect(() => {
  if (open) {
    setMounted(true);
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setVisible(true));
    });
  } else {
    setVisible(false);
    const t = setTimeout(() => setMounted(false), 260); // match backdrop duration
    return () => clearTimeout(t);
  }
}, [open]);

if (!mounted) return null;
return <div className={`overlay ${visible ? "is-open" : ""}`}>...</div>;
```

CSS handles both directions from there:

```css
.overlay { opacity: 0; transition: opacity 260ms var(--ease-out-expo); }
.overlay.is-open { opacity: 1; }
.overlay .panel {
  opacity: 0;
  transform: translateY(-16px) scale(0.94);
  transition: opacity 260ms var(--ease-out-expo),
              transform 340ms var(--ease-spring);
}
.overlay.is-open .panel { opacity: 1; transform: translateY(0) scale(1); }
```

The double-rAF sequence is deliberate: the first frame lets React commit the mount, the second lets the browser paint the initial (hidden) style. Only after both frames does toggling `is-open` produce a genuine transition.

## Principles

1. **Overlays require blur + spring.** Apply both a blur backdrop and a spring curve on the panel. Omitting either produces a flat, unfinished result.
2. **120ms for interaction, 340ms for state changes.** Hover and press use 120ms ease. Modal/dialog open uses 340ms with `--ease-spring`.
3. **Springs stay off icons and text color.** Animate only `background-color` and `transform/opacity` on containers.
4. **Both enter and exit must animate.** Unmounting an overlay without an exit transition causes a visible flash on screen.
5. **Reduced-motion fallback is non-negotiable.** All decorative motion (reveal, pulse, marquee, overlay transforms) degrades gracefully under `@media (prefers-reduced-motion: reduce)` to a static end-state with durations at or below 0.001ms.

## Always-on vs. gated

**Always-on** (persists even under reduced-motion):
- Hover fills (120ms) -- confirms the element is interactive
- Press scale (120ms) -- confirms the press was registered
- Spinner rotations -- indicates loading state
- Popover/dialog/toast entrances -- indicates modality change (use the curve, shorten
  if reduced)

**Gated behind `prefers-reduced-motion: no-preference`**:
- `.kairoz-reveal` scroll animations
- `.kairoz-dot.is-pulse` opacity pulse
- `.kairoz-marquee` scrolling
- Hero parallax

## Reduced-motion baseline

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.001ms !important;
    transition-duration: 0.001ms !important;
  }
}
```

Include this as the last rule in every Kairoz-powered application.

## Anti-patterns

- Never apply `ease`, `ease-in`, or `ease-out` as literal keywords on modal overlays — reach for one of the tokens above.
- Never unmount an overlay without an exit animation.
- Never transition `color` or `opacity` on icons (causes jitter).
- Never animate across mixed units (`px` to `rem` to `%`).
- Never use JS-driven animation (Framer Motion, GSAP) for work CSS can handle — the platform is fast enough.
