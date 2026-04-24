# Kairoz Lessons

Each rule below comes from a bug or regression found during development. Review before writing new components.

---

## 1. Button-default reset is mandatory

**What broke:** `.kairoz-*` classes applied to `<button>` elements render as browser-default pills (white fill, rounded, border-box) unless the declaration includes a full button reset. This caught `.kairoz-command-item`, `.kairoz-menu-item`, and `.kairoz-toast-close`.

**The fix:** Every class that could land on a `<button>` must include:

```css
.kairoz-whatever {
  background: transparent;
  border: 0;
  border-radius: 0;       /* unless you want a specific radius */
  padding: 0 ... ;        /* explicit padding */
  font-family: inherit;
  text-align: left;       /* or center, but explicit */
  color: var(--text-primary);  /* or the right token */
  width: 100%;            /* if it's a row element */
  cursor: pointer;
  transition: background-color 120ms ease, color 120ms ease;
}
```

**When building any new component that might be a button**: bake this reset in from the start. Never rely on `<div>` wrappers to sidestep it.

---

## 2. Shadows must differ per theme

**What broke:** Kairoz's default shadow tokens use 0.6--0.95 alpha on black. Correct for dark mode, but in light mode those alphas crush the canvas to muddy gray.

**The fix:** The light-theme block in `colors_and_type.css` overrides the shadow tokens with 0.06--0.14 alpha:

```css
[data-theme="light"], .light {
  --shadow-sm: 0 1px 2px rgba(17, 17, 17, 0.06);
  --shadow-md: 0 4px 12px rgba(17, 17, 17, 0.08);
  --shadow-lg: 0 8px 24px rgba(17, 17, 17, 0.10);
  --shadow-overlay: 0 16px 48px rgba(17, 17, 17, 0.14);
}
```

**When generating shadow-bearing components** outside plain HTML: always define both dark and light variants. Never reuse the dark values in light mode.

---

## 3. Pulse dot uses opacity, not box-shadow

**What broke:** A glowing box-shadow pulse on status dots bleeds shadow blur into adjacent list rows and card bodies. It looks like a rendering artifact even when technically correct.

**The fix:** `.kairoz-dot.is-pulse` animates opacity only (0.6 to 1), never box-shadow. This applies to every live indicator in the system.

```css
.kairoz-dot.is-pulse {
  animation: kairoz-dot-pulse 1.6s ease-in-out infinite;
}
@keyframes kairoz-dot-pulse {
  0%, 100% { opacity: 0.6; }
  50%      { opacity: 1;   }
}
```

---

## 4. Sidebar collapse needs dual transitions

**What broke:** Transitioning `grid-template-columns` alone causes nav text to wrap and reflow mid-animation. Hiding the sidebar via `display: none` collapses the nav height. Both look broken.

**The fix:** Transition `grid-template-columns` (width) AND `opacity` (content) together, with `white-space: nowrap` on nav items to prevent wrapping.

```css
.ks-shell { transition: grid-template-columns 180ms ease; }
.ks-shell-sidebar { transition: opacity 140ms ease, transform 180ms ease; }
[data-sidebar="collapsed"] .ks-shell { grid-template-columns: 0 1fr; }
[data-sidebar="collapsed"] .ks-shell-sidebar {
  opacity: 0; pointer-events: none; border-right-color: transparent;
}
.nav-item { white-space: nowrap; }
```

---

## 5. App-shell top rows must share height for aligned borders

**What broke:** Each column in a 3-pane shell (folder rail / list / reader) tends to pick its own padding, which puts bottom borders at different Y coordinates. The misalignment is visible.

**The fix:** Force every top row to use:

```css
height: 56px;               /* or chosen chrome height */
box-sizing: border-box;
padding: 0 14px;            /* internal, varies per column */
display: flex;
align-items: center;
border-bottom: 1px solid var(--border-default);
```

A working implementation is in `references/examples.md` under "Three-column top-row alignment".

---

## 6. Mobile responsive: sidebar becomes overlay

**The rule:** At viewports 768px or narrower:
- The grid collapses to `1fr` — the sidebar exits the flow.
- Sidebar switches to `position: fixed` with `transform: translateX(-100%)` by default, sliding to `translateX(0)` when expanded.
- A fixed-inset backdrop (`rgba(0,0,0,0.5)`) appears behind the sidebar; tapping it dismisses.
- Every nav item auto-closes the sidebar on click (sets `data-sidebar="collapsed"`) so the user arrives at the destination, not the menu.

On mobile viewports, the boot script should default to `collapsed` unless the user has a stored preference.

---

## 7. Horizontal scroll: hide the bar, keep the scroll

**The rule:** `overflow-x: hidden` is the wrong answer — it kills horizontal scroll entirely (bad for wide tables, mobile device frames). Do this instead:

```css
*::-webkit-scrollbar:horizontal { height: 0; display: none; }
```

Horizontal scroll through trackpad, wheel, and touch continues to function — only the scrollbar chrome disappears. Firefox cannot selectively hide one axis; accept its default behavior.

---

## 8. Device frame layout

**What broke:** `.kairoz-device-mobile` set to `display: block` with a `height: 100%` inner element consumed the full parent height, pushing the safe-bottom indicator past the overflow clip.

**The fix:**

```css
.kairoz-device-mobile {
  display: flex;
  flex-direction: column;
  /* ... width, height, border-radius ... */
  overflow: hidden;
}
.kairoz-device-mobile-safe-top    { height: 54px; flex: none; }
.kairoz-device-mobile-inner       { flex: 1; min-height: 0; overflow: hidden; }
.kairoz-device-mobile-safe-bottom { height: 34px; flex: none; }
```

---

## 9. Command palette trigger is a round icon button

Avoid rendering `[⌘K] Search` as a text+kbd chip in the titlebar — it creates noise. Use a single round search-icon button instead:

```html
<button class="ks-cmdk-trigger" aria-label="Open command palette (⌘K)">
  <svg><!-- search icon, 1.7 stroke --></svg>
</button>
```

The keyboard shortcut remains globally active; the visual trigger stays minimal.

---

## 10. Theme toggle: Light / Dark / System (System is default)

```tsx
type Mode = "light" | "dark" | "system";
```

System mode reads `prefers-color-scheme` and tracks changes through a `MediaQueryList.onchange` subscription. The boot script in `layout.tsx` resolves `system` to `dark` or `light` before first paint to eliminate flash.

---

## 11. Homepage live grid uses CSS columns, not flex/grid

A masonry-style layout that accommodates varying card heights:

```css
.ks-live-grid {
  columns: 3 320px;
  column-gap: 14px;
}
.ks-live-card {
  break-inside: avoid;
  margin-bottom: 14px;
}
```

Adapts on its own: 2 columns at 900px and below, 1 column at 620px and below. Zero JavaScript.

---

## 12. Border tokens have distinct roles

- `--border-default` (`#1e1e1e`) — **section boundaries**: card borders, table outlines, major dividers. Marks the edge between distinct regions.
- `--border-subtle` (`#141414`) — **inner separators**: row dividers inside a list or card. Lower contrast, meant for grouping within a section.
- `--border-strong` (`#3d3d3d`) — **emphasis edges**: hover states, focused inputs. Used sparingly.

Using the wrong token removes the distinction between inner and outer borders. An inner row separator set to `--border-default` has the same weight as the card's own border.

---

## 13. When tabs need more presence: pill buttons

The standard `.kairoz-tabbar` / `.kairoz-tab` renders as a quiet underline tab. When a section's tab row needs to carry more weight (e.g., an inspector panel sitting beside a loud main thread), swap in pill buttons:

```html
<div style="display: flex; gap: 6px; height: 56px; padding: 0 14px;
            border-bottom: 1px solid var(--border-default);
            align-items: center;">
  <button class="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">
    Tool I/O
  </button>
  <button class="kairoz-btn-pill kairoz-btn-pill-ghost kairoz-btn-pill-sm">
    Artifacts
  </button>
</div>
```

---

## 14. Selection color must be readable in both themes

At 12% blue, the default `::selection` tint is unreadable — selected text disappears. Use 42% in dark mode, 22% in light:

```css
::selection               { background: rgba(0, 112, 243, 0.42); color: #fff; }
[data-theme="light"] ::selection { background: rgba(0, 112, 243, 0.22); color: var(--text-primary); }
```

---

## 15. Layout stability for long-running pages

Apply the following to any panel that carries heavy or streaming content:

```css
contain: layout style paint;
```

This isolates expensive content (charts, tables, live-updating lists) and prevents cross-panel reflow. Critical in agent consoles where tool outputs land asynchronously.

---

## 16. Radius is intentionally sparse

- 3px — tight chips, small inputs
- 4px — buttons, inputs, form elements (the default)
- 6px — cards, panels, popovers (the default "container" radius)
- 9999px — pills, avatars, toggle tracks

**Do not introduce** 8, 10, 12, or 16px radii. They break the consistency of the existing set.

---

## 17. When generating for Tailwind / shadcn

- **Tailwind v4**: Place Kairoz tokens inside an `@theme` block and emit utility classes. Do not ship the reference CSS unless the user explicitly requests it.
- **shadcn/ui**: Kairoz provides a shadcn variable alias table (see `references/theming.md`). Override shadcn's `--background`, `--foreground`, `--primary`, `--ring`, etc. with Kairoz values. Preserve shadcn's component structure as-is; do not wrap or replace its components with `.kairoz-*` classes.

---

## 18. Only animate `background-color` by default

Animating `color`, `opacity`, or `transform` on icons produces jitter on common hardware. The Kairoz convention:

```css
transition: background-color 120ms ease;
```

For reveal and enter animations, gate behind `@media (prefers-reduced-motion: no-preference)` and prefer CSS `animation-timeline` (`view()`) over JS intersection observers.

---

## 19. Overlays need blur + spring curves, not opacity + ease

**What broke:** A command palette or drawer that fades in with plain opacity and a flat `ease` curve looks wrong -- perceptually slow at 100ms, yet abrupt at 300ms, because the curve is near-linear and there is no blur behind the backdrop.

**The fix:** Every overlay surface — command palette, dialog backdrop, mobile sidebar drawer — must combine **both** of:

1. **Backdrop blur**, not a flat rgba:
   ```css
   background: rgba(0, 0, 0, 0.45);
   backdrop-filter: blur(12px) saturate(150%);
   -webkit-backdrop-filter: blur(12px) saturate(150%);
   ```
   Light-mode variants use `rgba(220, 220, 220, 0.5)` to avoid washing
   into the canvas.

2. **Spring / Apple curve on the panel**, not `ease`:
   - Panel scale/pop: `340ms var(--ease-spring)` — slight overshoot
   - Backdrop fade: `260ms var(--ease-out-expo)` — smooth but dramatic
   - Drawer slide: `340ms var(--ease-apple)` — spring-without-overshoot

All `--ease-*` tokens are declared on `:root` in `colors_and_type.css`. Never hand-write `cubic-bezier(...)` — always reference the token.

**Panel entrance pattern:**
```css
.overlay .panel {
  opacity: 0;
  transform: translateY(-16px) scale(0.94);
  transition:
    opacity 260ms var(--ease-out-expo),
    transform 340ms var(--ease-spring);
}
.overlay.is-open .panel {
  opacity: 1;
  transform: translateY(0) scale(1);
}
```

## 20. Overlays animate BOTH enter and exit

**What broke:** A command palette that unmounts instantly on close disappears without an exit transition, producing a visible flash.

**The fix:** Use a two-stage mount with a transition delay before unmount:

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
    const t = setTimeout(() => setMounted(false), 260);
    return () => clearTimeout(t);
  }
}, [open]);

if (!mounted) return null;
return <div className={`overlay ${visible ? "is-open" : ""}`}>…</div>;
```

The two `requestAnimationFrame` calls are essential: React commits the mount in frame 1, the browser paints the initial (hidden) styles in frame 2 — only then does the `is-open` class flip produce a true transition instead of snapping to the end state.

The exit `setTimeout` must match the longest transition duration (e.g., 260ms for the backdrop). Do not guess — check the token.
