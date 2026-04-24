# Kairoz Composition Examples

Tested layout snippets from the app demo. When building new UI, adapt one of these before writing a layout from scratch.

Every example expects `colors_and_type.css` to be loaded. In a Tailwind/shadcn stack, translate `.kairoz-*` classes to your target idiom while keeping the visual rules intact.

---

## Agent turn (chat thread)

The standard "assistant speaks" block for agent interfaces.

```html
<div style="margin-bottom: 24px;">
  <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
    <div style="width: 22px; height: 22px; border-radius: 6px;
                background: var(--accent-highlight-muted);
                color: var(--accent-highlight);
                display: inline-flex; align-items: center; justify-content: center;
                font-size: 10px; font-weight: 600;">A</div>
    <span style="font-size: 13px; font-weight: 500;">Kairoz</span>
    <span style="font-size: 10px; color: var(--text-tertiary);
                 font-family: var(--font-mono); margin-left: auto;">12:42:08</span>
  </div>
  <div style="margin-left: 30px; font-size: 13px; line-height: 1.6;
              color: var(--text-secondary);">
    The failure is at
    <code style="font-family: var(--font-mono); font-size: 12px;
                 background: var(--bg-input); padding: 1px 6px;
                 border-radius: 3px; border: 1px solid var(--border-default);
                 color: var(--text-primary);">build.sh:42</code>
    — a missing env var. Handing off to Coder.
  </div>
</div>
```

**Key details:**
- Avatar: 22px tinted square, not a circle.
- Timestamp: monospace, 10px, tertiary color.
- Body text: `--text-secondary`, with `--text-primary` for emphasized code spans.
- 30px left indent on the body, aligned with the avatar's right edge.

---

## Tool-call card

A structured tool invocation result, presented as a Kairoz card.

```html
<div class="kairoz-card">
  <div class="kairoz-card-header" style="display: flex; align-items: center; justify-content: space-between;">
    <span style="display: flex; align-items: center; gap: 6px;">
      <span class="kairoz-dot kairoz-dot-info"></span>
      <span class="kairoz-panel-title"
            style="font-family: var(--font-mono); font-size: 11px;">
        tool_call · fetch_deploy_logs
      </span>
    </span>
    <span style="font-family: var(--font-mono); font-size: 10px;
                 color: var(--text-tertiary);">0.8s</span>
  </div>
  <div class="kairoz-card-body" style="padding: 10px; font-family: var(--font-mono);
                                      font-size: 11px; background: var(--bg-input);
                                      color: var(--text-secondary);
                                      border-top: 1px solid var(--border-subtle);">
    { "deploy_id": "a9f3b1", "env": "prod", "lines": 2048 }
  </div>
</div>
```

**Key details:**
- Card header renders the tool name in monospace.
- Status dot color tracks the invocation state (success/info/warning/error).
- Duration sits right-aligned in mono tertiary.
- Body uses `--bg-input` background to separate raw output from the header.

---

## Stat grid (metric tiles)

A four-cell dashboard grid. Each cell is bordered, not wrapped in a card.

```html
<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 8px;">
  <!-- Repeat per stat -->
  <div style="border: 1px solid var(--border-default); border-radius: 6px;
              padding: 10px; background: var(--bg-raised);">
    <div style="font-size: 10px; letter-spacing: 0.1em; text-transform: uppercase;
                color: var(--text-tertiary); font-weight: 600;">REQUESTS</div>
    <div style="font-size: 20px; font-family: var(--font-mono); font-weight: 600;
                margin-top: 4px;">12,847</div>
    <div class="kairoz-stat-delta is-up" style="font-size: 11px; margin-top: 2px;">
      +4.2%
    </div>
  </div>
  <!-- ... more cells -->
</div>
```

**Key details:**
- Label: uppercase 10px, 0.1em tracking, `--text-tertiary` color, 600 weight.
- Value: monospace at 20px.
- Delta: uses `.kairoz-stat-delta.is-up/is-down` -- do not hardcode the colors.

---

## 3-pane app shell (desktop)

Titlebar, sidebar, and main area. A skeleton built to be forked.

```html
<div style="display: grid;
            grid-template-columns: 260px 1fr;
            grid-template-rows: 52px 1fr;
            height: 100vh;
            background: var(--bg-base); color: var(--text-primary);">
  <header style="grid-column: 1 / -1; grid-row: 1;">
    <header class="kairoz-titlebar" style="height: 52px; padding: 0 16px;">
      <!-- brand, center slot, actions -->
    </header>
  </header>
  <aside style="grid-column: 1; grid-row: 2;
                border-right: 1px solid var(--border-default);
                overflow-y: auto; overflow-x: hidden;">
    <!-- nav groups -->
  </aside>
  <main style="grid-column: 2; grid-row: 2; overflow-y: auto; min-width: 0;">
    <!-- page content -->
  </main>
</div>
```

**Key details:**
- Full viewport height via `100vh`.
- Sidebar: `overflow-y: auto`, `overflow-x: hidden` to clip horizontal overflow.
- Main panel: `min-width: 0` prevents long content from breaking the grid.

---

## Three-column top-row alignment

In a three-column layout (folder rail / list / reader), every top row must share the same chrome height so bottom borders land at the same Y coordinate.

```html
<!-- Column 1 -->
<div style="height: 56px; box-sizing: border-box; padding: 0 12px;
            display: flex; align-items: center;
            border-bottom: 1px solid var(--border-default);">
  <!-- compose button or title -->
</div>

<!-- Column 2 -->
<div style="height: 56px; box-sizing: border-box; padding: 0 14px;
            display: flex; align-items: center; gap: 8px;
            border-bottom: 1px solid var(--border-default);">
  <div style="font-size: 15px; font-weight: 600; flex: 1;">Inbox</div>
  <div class="kairoz-segmented">
    <button class="kairoz-segmented-item is-active">All</button>
    <button class="kairoz-segmented-item">Unread</button>
  </div>
</div>

<!-- Column 3 -->
<div style="height: 56px; box-sizing: border-box; padding: 0 20px;
            border-bottom: 1px solid var(--border-default);
            display: flex; align-items: center; gap: 6px;">
  <!-- reader toolbar buttons -->
</div>
```

**Key details:**
- Every top row: `height: 56px; box-sizing: border-box`.
- Every top row shares the same border-bottom color.
- Padding can vary per column; height must not.

---

## Email row (list item with read/unread states)

```html
<button style="width: 100%; padding: 10px 14px; background: transparent;
               border: 0; border-bottom: 1px solid var(--border-subtle);
               border-left: 2px solid transparent;
               font-family: inherit; color: var(--text-primary);
               text-align: left; cursor: pointer; display: flex; gap: 10px;">
  <span class="kairoz-dot kairoz-dot-info" style="margin-top: 7px; flex: none;"></span>
  <div style="flex: 1; min-width: 0;">
    <div style="display: flex; justify-content: space-between; gap: 8px;">
      <div style="font-size: 13px; font-weight: 600; color: var(--text-primary);
                  white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
        Vercel
      </div>
      <div style="font-size: 10px; color: var(--text-tertiary);
                  font-family: var(--font-mono); flex: none;">12:42</div>
    </div>
    <div style="font-size: 12px; font-weight: 500; color: var(--text-primary);
                margin-top: 2px; white-space: nowrap; overflow: hidden;
                text-overflow: ellipsis;">Deploy succeeded — kairoz-edge</div>
    <div style="font-size: 11px; color: var(--text-tertiary); margin-top: 2px;
                white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
      Your production deploy finished in 1m 24s…
    </div>
  </div>
</button>
```

**Key details:**
- **Explicit color on the `<button>`** (`color: var(--text-primary)`) -- browser button defaults override inherited color without it.
- Unread: 600 weight + `--text-primary`.
- Read: 400/500 weight + `--text-secondary`.
- Left border: a 2px transparent gutter that becomes `--accent-highlight` on selection.
- Every text line uses `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;` for narrow columns.

---

## Generative UI chart (bar graph inside an agent thread)

```html
<div class="kairoz-card">
  <div class="kairoz-card-header">
    <span class="kairoz-dot kairoz-dot-warning"></span>
    <span class="kairoz-panel-title">EC2 spend · 7d</span>
  </div>
  <div class="kairoz-card-body">
    <div style="display: flex; align-items: flex-end; gap: 8px; height: 120px;
                padding: 8px 4px; border-bottom: 1px solid var(--border-subtle);">
      <!-- Repeat per bar -->
      <div style="flex: 1; display: flex; flex-direction: column;
                  align-items: center; gap: 5px; height: 100%;
                  justify-content: flex-end;">
        <span style="font-size: 9px; font-family: var(--font-mono);
                     color: var(--status-warning); font-weight: 600;">$3,498</span>
        <div style="width: 100%; height: 88%; background: var(--status-warning);
                    opacity: 0.9; border-radius: 3px 3px 0 0; min-height: 6px;"></div>
        <span style="font-size: 10px; color: var(--text-tertiary);
                     font-family: var(--font-mono);
                     text-transform: uppercase;">SUN</span>
      </div>
    </div>
  </div>
</div>
```

**Key details:**
- Bars: `--status-info` when below threshold, `--status-warning` when over.
- `min-height: 6px` on each bar so zero-value bars remain visible.
- Value label sits above (6--9px mono), day label below.
- The card wrapper clips the chart fill so it does not extend into surrounding content.

---

## Landing hero (display type, pill CTAs, and marquee)

```html
<section style="padding: 48px 0 32px; text-align: center;">
  <p class="kairoz-eyebrow" style="margin-bottom: 16px;">Kairoz · v0.2</p>
  <h1 class="kairoz-display" style="max-width: 820px; margin: 0 auto 16px;">
    The shadcn for AI tooling.
  </h1>
  <p style="font-size: 15px; color: var(--text-secondary); line-height: 1.55;
            max-width: 560px; margin: 0 auto 24px;">
    Framework-agnostic tokens, multi-surface components, one system.
  </p>
  <div style="display: flex; gap: 8px; justify-content: center;">
    <a class="kairoz-btn-pill kairoz-btn-pill-primary">See agent chat</a>
    <a class="kairoz-btn-pill kairoz-btn-pill-secondary">Browse components</a>
  </div>
</section>

<div style="border-top: 1px dashed var(--border-default);
            border-bottom: 1px dashed var(--border-default);
            padding: 14px 0; margin-bottom: 32px;">
  <div class="kairoz-marquee">
    <div class="kairoz-marquee-track">
      <!-- duplicate items for seamless loop -->
    </div>
  </div>
</div>
```

**Key details:**
- `.kairoz-display` scales the hero headline responsively through `clamp()`.
- Use pill buttons on landing and marketing surfaces; use `.kairoz-btn` on app surfaces.
- Dashed dividers above and below separate the marquee section.

---

## Checklist with progress (remediation plan)

```html
<div class="kairoz-card">
  <div class="kairoz-card-header">
    <span class="kairoz-panel-title">Remediation plan</span>
  </div>
  <div class="kairoz-card-body" style="padding: 12px;">
    <ol class="kairoz-stepper" style="list-style: none; padding: 0; margin: 0 0 12px;
                                    display: flex; align-items: center; gap: 6px;
                                    font-size: 11px;">
      <li class="kairoz-stepper-step is-active"
          style="display: flex; align-items: center; gap: 6px;">
        <span class="kairoz-stepper-dot"></span>
        <span class="kairoz-stepper-label">Revert</span>
      </li>
      <li class="kairoz-stepper-sep"
          style="flex: 1; height: 1px; background: var(--border-default);"></li>
      <!-- more steps -->
    </ol>
    <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12px;">
      <label style="display: flex; align-items: center; gap: 10px; padding: 6px 0;">
        <input type="checkbox" class="kairoz-checkbox" />
        <span style="flex: 1;">Open revert PR for #842</span>
        <span style="font-family: var(--font-mono); font-size: 11px;
                     color: var(--text-tertiary);">5m</span>
      </label>
    </div>
  </div>
</div>
```

**Key details:**
- The stepper tracks overall progress. The checklist shows individual tasks within the active step.
- Time estimates are right-aligned in mono tertiary.

---

## Quota progress with warning threshold

```html
<div>
  <div style="display: flex; justify-content: space-between;
              margin-bottom: 6px; font-size: 12px;">
    <span style="color: var(--text-secondary);">Agent hours</span>
    <span style="font-family: var(--font-mono); color: var(--status-warning);">
      182 <span style="color: var(--text-tertiary);">hours</span>
    </span>
  </div>
  <div class="kairoz-progress" style="height: 4px;">
    <div class="kairoz-progress-bar"
         style="width: 91%; background: var(--status-warning);"></div>
  </div>
</div>
```

**Key details:**
- Switch the progress-bar fill from `--accent-primary` to `--status-warning` when usage exceeds a threshold (e.g., >85%). Apply the same color to the numeric label.

---

## Starting-point guide

| You're building | Start from | Scale |
|---|---|---|
| Dense app shell | 3-pane app shell | Full page |
| Agent console | Agent turn + tool-call card + composer | Thread |
| Dashboard | Stat grid + table + pulsing live dot | Full page |
| Landing page | Hero + marquee + pill CTAs | Full page |
| Mobile screen | Device frame + bottom tab bar + content | Full page |
| Email / inbox | 3-column top-row + email row | Full page |
| Settings page | Card + switch rows + destructive zone | Section |
| Generative UI | Card wrapping chart/diff/checklist | Inside message |

**Start from these building blocks.** Each one accounts for known problems (button resets, border alignment, pulse artifacts).
