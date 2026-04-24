# Generic App Shell

Reference application built with the Kairoz design system. Deliberately content-free — generic labels, placeholder rows — so you can fork it without tearing out product specifics.

## Layout

```
┌─────────────────────────────────────────────────────────┐
│ Titlebar (36)                                           │
├─────────────┬───────────────────────────┬───────────────┤
│             │ Tabs (34)                 │               │
│ Sidebar     ├───────────────────────────┤ Inspector     │
│ (220)       │                           │ (280)         │
│             │ Main Panel                │               │
│             │                           │               │
├─────────────┴───────────────────────────┴───────────────┤
│ Status Bar (28)                                         │
└─────────────────────────────────────────────────────────┘
```

Three resizable regions: sidebar (left nav / tree), main panel (content with tabs), inspector (context details). Status bar at bottom. All surfaces sit on `#000`.
