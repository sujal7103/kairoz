# Kairoz Component Catalog

The full `.kairoz-*` class inventory, each paired with a drop-in HTML snippet. Only `colors_and_type.css` is required — zero other dependencies.

> **Ground rules:** Reach for semantic HTML first (`<button>`, `<input>`, `<a>`).
> Icons are Lucide throughout (1.5px stroke, 16px default, 18px in titlebars, 11px
> in card headers). Never transition color or opacity on icons — only `background-color`.

---

## Primitives

### Button · `.kairoz-btn`
```html
<button class="kairoz-btn kairoz-btn-primary">Primary</button>
<button class="kairoz-btn kairoz-btn-secondary">Secondary</button>
<button class="kairoz-btn kairoz-btn-ghost">Ghost</button>
<button class="kairoz-btn kairoz-btn-destructive">Delete</button>
<button class="kairoz-btn kairoz-btn-icon"><svg>…</svg></button>
<button class="kairoz-btn kairoz-btn-primary kairoz-btn-sm">Small</button>
<button class="kairoz-btn kairoz-btn-primary kairoz-btn-lg">Large</button>
```
28px height · 4px radius · primary variant draws from near-white `--accent-primary`.
**Blue is off-limits for CTAs** — it belongs exclusively to focus and selection states.

### Input · `.kairoz-input`
```html
<input class="kairoz-input" placeholder="Search…" />
<input class="kairoz-input kairoz-input-sm" placeholder="Small" />
```
24px default height, 20px for `kairoz-input-sm`. Bordered with `--border-default`, filled with `--bg-input`, focus ring via `--accent-highlight`.

### Checkbox · `.kairoz-checkbox`
```html
<label><input type="checkbox" class="kairoz-checkbox" /> Remember me</label>
```
Fills blue via `accent-color: var(--accent-highlight)` when checked.

### Radio · `.kairoz-radio`
```html
<label><input type="radio" name="g" class="kairoz-radio" /> Option</label>
```

### Switch · `.kairoz-switch`
```html
<button class="kairoz-switch is-on" role="switch" aria-checked="true"></button>
```

### Kbd · `.kairoz-kbd`
```html
<kbd class="kairoz-kbd">⌘K</kbd>
```
Tight single-character keycap rendered in JetBrains Mono.

### Link · `.kairoz-link`
```html
<a class="kairoz-link" href="#">Read more</a>
```
Underline appears in blue on hover.

---

## Surfaces

### Card · `.kairoz-card`
```html
<div class="kairoz-card">
  <div class="kairoz-card-header">
    <span class="kairoz-dot kairoz-dot-primary"></span>
    <span class="kairoz-panel-title">Card title</span>
  </div>
  <div class="kairoz-card-body">Content…</div>
</div>
```

### Panel header · `.kairoz-panel-header`
```html
<div class="kairoz-panel-header">
  <span class="kairoz-panel-title">Inspector</span>
  <button class="kairoz-btn kairoz-btn-icon"><svg>x</svg></button>
</div>
```
32px tall with an 11px uppercase title (via `--text-xs` + letter-spacing).

### Stat · `.kairoz-stat`
```html
<div class="kairoz-stat">
  <div class="kairoz-stat-label">REVENUE</div>
  <div class="kairoz-stat-value">$12,847</div>
  <div class="kairoz-stat-delta is-up">+12.4%</div>
</div>
```

### Empty · `.kairoz-empty`
```html
<div class="kairoz-empty">
  <div class="kairoz-empty-icon"><svg>…</svg></div>
  <div class="kairoz-empty-title">No results</div>
  <div class="kairoz-empty-desc">Try a different query.</div>
</div>
```

---

## Navigation

### Tabs · `.kairoz-tabbar` / `.kairoz-tab`
```html
<div class="kairoz-tabbar">
  <button class="kairoz-tab is-active">Overview</button>
  <button class="kairoz-tab">Details</button>
  <button class="kairoz-tab">History</button>
</div>
```

### Segmented · `.kairoz-segmented`
```html
<div class="kairoz-segmented">
  <button class="kairoz-segmented-item is-active">Day</button>
  <button class="kairoz-segmented-item">Week</button>
  <button class="kairoz-segmented-item">Month</button>
</div>
```

### Toggle · `.kairoz-toggle`
```html
<button class="kairoz-toggle is-on">Dark</button>
```

### Breadcrumb · `.kairoz-breadcrumb`
```html
<nav class="kairoz-breadcrumb">
  <a href="#">Projects</a>
  <span class="kairoz-breadcrumb-sep">/</span>
  <a href="#">Kairoz</a>
  <span class="kairoz-breadcrumb-sep">/</span>
  <span class="kairoz-breadcrumb-current">Overview</span>
</nav>
```

### Pagination · `.kairoz-pagination`
```html
<nav class="kairoz-pagination">
  <button class="kairoz-pagination-item">‹</button>
  <button class="kairoz-pagination-item is-active">1</button>
  <button class="kairoz-pagination-item">2</button>
  <span class="kairoz-pagination-ellipsis">…</span>
  <button class="kairoz-pagination-item">9</button>
  <button class="kairoz-pagination-item">›</button>
</nav>
```

### Stepper · `.kairoz-stepper`
```html
<ol class="kairoz-stepper">
  <li class="kairoz-stepper-step is-done">
    <span class="kairoz-stepper-dot"></span>
    <span class="kairoz-stepper-label">Account</span>
  </li>
  <li class="kairoz-stepper-sep"></li>
  <li class="kairoz-stepper-step is-active">
    <span class="kairoz-stepper-dot"></span>
    <span class="kairoz-stepper-label">Plan</span>
  </li>
</ol>
```

---

## Overlays

### Popover · `.kairoz-popover`
```html
<div class="kairoz-popover">
  <button class="kairoz-menu-item">Rename</button>
  <button class="kairoz-menu-item">Duplicate</button>
  <div class="kairoz-menu-separator"></div>
  <button class="kairoz-menu-item">Delete</button>
</div>
```

### Dialog · `.kairoz-dialog`
```html
<div class="kairoz-dialog-backdrop"></div>
<div class="kairoz-dialog">
  <div class="kairoz-dialog-header">
    <div class="kairoz-dialog-title">Confirm</div>
    <div class="kairoz-dialog-desc">This cannot be undone.</div>
  </div>
  <div class="kairoz-dialog-body">…</div>
  <div class="kairoz-dialog-footer">
    <button class="kairoz-btn kairoz-btn-ghost">Cancel</button>
    <button class="kairoz-btn kairoz-btn-primary">Confirm</button>
  </div>
</div>
```

### Command palette · `.kairoz-command`
```html
<div class="kairoz-command">
  <div class="kairoz-command-input-wrap">
    <input class="kairoz-command-input" placeholder="Type a command…" />
    <kbd class="kairoz-kbd">⌘K</kbd>
  </div>
  <div class="kairoz-command-group-label">Actions</div>
  <button class="kairoz-command-item">
    New file
    <span class="kairoz-command-item-shortcut"><kbd class="kairoz-kbd">⌘N</kbd></span>
  </button>
</div>
```

### Tooltip · `.kairoz-tooltip`
```html
<div class="kairoz-tooltip">Save · ⌘S</div>
<div class="kairoz-tooltip kairoz-tooltip-dark">Dark variant</div>
```

### Toast · `.kairoz-toast`
```html
<div class="kairoz-toast">
  Project saved.
  <div class="kairoz-toast-desc">All changes synced.</div>
  <button class="kairoz-toast-close">×</button>
</div>
```

### Alert · `.kairoz-alert`
```html
<div class="kairoz-alert kairoz-alert-info">
  <div class="kairoz-alert-icon"><svg>i</svg></div>
  <div class="kairoz-alert-title">Heads up</div>
  <div class="kairoz-alert-desc">Deploy takes ~2 min.</div>
</div>
<div class="kairoz-alert kairoz-alert-warning">…</div>
<div class="kairoz-alert kairoz-alert-error">…</div>
```

---

## Data & lists

### Table · `.kairoz-table`
```html
<table class="kairoz-table">
  <thead><tr><th>Name</th><th>Status</th><th class="num">Count</th></tr></thead>
  <tbody>
    <tr><td>kairoz-core</td><td><span class="kairoz-badge kairoz-badge-success">OK</span></td><td class="num">1,284</td></tr>
  </tbody>
</table>
```
The `.num` utility right-aligns numeric columns.

### List · `.kairoz-list`
```html
<ul class="kairoz-list">
  <li class="kairoz-list-item is-selected">main.ts</li>
  <li class="kairoz-list-item">index.tsx</li>
</ul>
```

### Badge · `.kairoz-badge`
```html
<span class="kairoz-badge">DEFAULT</span>
<span class="kairoz-badge kairoz-badge-primary">PRIMARY</span>
<span class="kairoz-badge kairoz-badge-success">OK</span>
<span class="kairoz-badge kairoz-badge-warning">DRAFT</span>
<span class="kairoz-badge kairoz-badge-error">FAIL</span>
<span class="kairoz-badge kairoz-badge-info">NEW</span>
```
10px uppercase with generous letter-spacing.

### Pill · `.kairoz-pill`
```html
<span class="kairoz-pill">North America</span>
<span class="kairoz-pill kairoz-pill-active">Selected</span>
```

### Accordion · `.kairoz-accordion`
```html
<div class="kairoz-accordion">
  <div class="kairoz-accordion-item is-open">
    <button class="kairoz-accordion-trigger">
      <span>Settings</span>
      <span class="kairoz-accordion-chev">›</span>
    </button>
    <div class="kairoz-accordion-content">Content…</div>
  </div>
</div>
```

---

## Feedback & indicators

### Progress · `.kairoz-progress`
```html
<div class="kairoz-progress"><div class="kairoz-progress-bar" style="width:42%"></div></div>
```

### Slider · `.kairoz-slider`
```html
<div class="kairoz-slider">
  <div class="kairoz-slider-track">
    <div class="kairoz-slider-range" style="width:60%"></div>
  </div>
  <div class="kairoz-slider-thumb" style="left:60%"></div>
</div>
```

### Skeleton · `.kairoz-skeleton`
```html
<div class="kairoz-skeleton" style="height:12px;width:60%"></div>
```

### Dot · `.kairoz-dot`
```html
<span class="kairoz-dot kairoz-dot-primary"></span>
<span class="kairoz-dot kairoz-dot-success"></span>
<span class="kairoz-dot kairoz-dot-warning"></span>
<span class="kairoz-dot kairoz-dot-error"></span>
<span class="kairoz-dot kairoz-dot-info"></span>
```
6px circles that mark status across titles, lists, and table cells.

---

## Identity

### Avatar · `.kairoz-avatar`
```html
<div class="kairoz-avatar">AB</div>
<div class="kairoz-avatar-group">
  <div class="kairoz-avatar">AB</div>
  <div class="kairoz-avatar">CD</div>
  <div class="kairoz-avatar">+3</div>
</div>
```

### Divider · `.kairoz-divider` / `-v`
```html
<hr class="kairoz-divider" />
<div class="kairoz-divider-v"></div>
```

---

## Layout furniture

### Titlebar · `.kairoz-titlebar`
```html
<header class="kairoz-titlebar">
  <div class="kairoz-titlebar-left">Kairoz</div>
  <div class="kairoz-titlebar-center">Kitchen sink</div>
  <div class="kairoz-titlebar-right">…</div>
</header>
```
36px tall, icons at 18px Lucide.

### Statusbar · `.kairoz-statusbar`
```html
<footer class="kairoz-statusbar">
  <div>Ready</div>
  <div>47 components</div>
  <div>v0.1.0</div>
</footer>
```
28px tall, 11px text.

---

## Preview files

Each component has a working HTML counterpart in `preview/components-*.html` — open any of them directly in a browser to see the rendered output.

---

## v0.2 — Multi-surface expansion

### Pill button · `.kairoz-btn-pill`
```html
<button class="kairoz-btn-pill kairoz-btn-pill-primary">Ship it</button>
<button class="kairoz-btn-pill kairoz-btn-pill-secondary">Cancel</button>
<button class="kairoz-btn-pill kairoz-btn-pill-ghost">Learn more</button>
<button class="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Small</button>
<button class="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-lg">Large</button>
```
Monochromatic hover via brightness shift, `scale(0.985)` on press, 9999px radius.
Designed for landing pages, hero surfaces, and prominent CTAs. `.kairoz-btn` remains the go-to choice for dense application interfaces.

### Mobile bottom tab bar · `.kairoz-tabbar-bottom`
```html
<nav class="kairoz-tabbar-bottom">
  <button class="kairoz-tabbar-bottom-item is-active">
    <svg>…</svg><span>Home</span>
  </button>
  <button class="kairoz-tabbar-bottom-item">
    <svg>…</svg><span>Inbox</span>
  </button>
  <button class="kairoz-tabbar-bottom-item">
    <svg>…</svg><span>Me</span>
  </button>
</nav>
```
56px tall with 20px icons (1.5px stroke when inactive, 2px when active) and 10px labels.
Limit to 5 slots. Pair with `.kairoz-device-mobile` when demoing in documentation.

### Device frames · `.kairoz-device-mobile` / `-tablet` / `-desktop`
```html
<div class="kairoz-device-mobile">
  <div class="kairoz-device-mobile-safe-top">
    <div class="kairoz-device-mobile-notch"></div>
  </div>
  <div class="kairoz-device-mobile-inner">
    <!-- app content -->
  </div>
  <div class="kairoz-device-mobile-safe-bottom">
    <div class="kairoz-device-mobile-indicator"></div>
  </div>
</div>

<div class="kairoz-device-desktop">
  <div class="kairoz-device-desktop-chrome">
    <span class="kairoz-device-desktop-dot is-close"></span>
    <span class="kairoz-device-desktop-dot is-min"></span>
    <span class="kairoz-device-desktop-dot is-max"></span>
    <span class="kairoz-device-desktop-url">kairoz.dev</span>
  </div>
  <div class="kairoz-device-desktop-inner"><!-- page --></div>
</div>
```
402x874 mobile, 640x860 tablet, flexible desktop. These frames present UI in context — ideal for docs, email previews, and marketing assets. Not intended as production app shells.

### Marquee · `.kairoz-marquee`
```html
<div class="kairoz-marquee">
  <div class="kairoz-marquee-track">
    <span>40+ components</span>
    <span>AMOLED black</span>
    <span>Multi-surface</span>
    <!-- duplicate content for seamless loop -->
    <span>40+ components</span>
    <span>AMOLED black</span>
    <span>Multi-surface</span>
  </div>
</div>
```
60-second infinite scroll that pauses on hover, with a soft fade mask at both edges. Duplicate the track content to keep the loop seamless.

### Dashed divider · `.kairoz-divider-dashed`
```html
<hr class="kairoz-divider-dashed" />
<span class="kairoz-divider-v-dashed"></span>
```
Place between major sections on landing pages. Lower visual weight than a solid rule.

### Filmstrip texture · `.kairoz-filmstrip`
```html
<div class="kairoz-filmstrip" style="aspect-ratio:16/9;background:#0a0a0a"></div>
```
A 16px grid-line overlay texture. Useful as a video thumbnail fallback or empty media placeholder.

### Reveal · `.kairoz-reveal`
```html
<section class="kairoz-reveal">…</section>
```
Pure-CSS scroll-triggered fade-in powered by `animation-timeline: view()`.
Falls back to `opacity: 1` in browsers that lack support. Only active when
`prefers-reduced-motion: no-preference` is set.

### Pulse dot · `.kairoz-dot.is-pulse`
```html
<span class="kairoz-dot kairoz-dot-warning is-pulse"></span>
<span class="kairoz-dot kairoz-dot-info is-pulse"></span>
```
Wraps any dot variant in a glowing halo. Use for active, processing, or live-status indicators.

### Display type · `.kairoz-display` / `.kairoz-display-lg`
```html
<h1 class="kairoz-display">Kairoz is the drop-in design system for agent UI.</h1>
<h1 class="kairoz-display-lg">The shadcn<br/>for agent UI.</h1>
<p class="kairoz-eyebrow">Design system · v0.2</p>
```
Scales responsively through `clamp()`. Deploy sparingly — one or two instances per page at most. Standard `h1`--`h4` remain the default for dense application interfaces.
