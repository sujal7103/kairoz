export type NavItem = { title: string; href: string; klass?: string };
export type NavGroup = { label: string; items: NavItem[] };

export const NAV: NavGroup[] = [
  {
    label: "Overview",
    items: [
      { title: "Introduction", href: "/" },
      { title: "Get started", href: "/get-started" },
    ],
  },
  {
    label: "Foundations",
    items: [
      { title: "Colors", href: "/foundations/colors" },
      { title: "Typography", href: "/foundations/typography" },
      { title: "Spacing", href: "/foundations/spacing" },
      { title: "Radius", href: "/foundations/radius" },
      { title: "Shadows", href: "/foundations/shadows" },
      { title: "Motion", href: "/foundations/motion" },
      { title: "Icons", href: "/foundations/icons" },
    ],
  },
  {
    label: "Primitives",
    items: [
      { title: "Button", href: "/components/button", klass: ".kairoz-btn" },
      { title: "Button pill", href: "/components/button-pill", klass: ".kairoz-btn-pill" },
      { title: "Input", href: "/components/input", klass: ".kairoz-input" },
      { title: "Checkbox", href: "/components/checkbox", klass: ".kairoz-checkbox" },
      { title: "Radio", href: "/components/radio", klass: ".kairoz-radio" },
      { title: "Switch", href: "/components/switch", klass: ".kairoz-switch" },
      { title: "Kbd", href: "/components/kbd", klass: ".kairoz-kbd" },
      { title: "Link", href: "/components/link", klass: ".kairoz-link" },
      { title: "Marquee", href: "/components/marquee", klass: ".kairoz-marquee" },
    ],
  },
  {
    label: "Surfaces",
    items: [
      { title: "Card", href: "/components/card", klass: ".kairoz-card" },
      { title: "Panel header", href: "/components/panel-header", klass: ".kairoz-panel-header" },
      { title: "Stat", href: "/components/stat", klass: ".kairoz-stat" },
      { title: "Empty", href: "/components/empty", klass: ".kairoz-empty" },
    ],
  },
  {
    label: "Navigation",
    items: [
      { title: "Tabs", href: "/components/tabbar", klass: ".kairoz-tabbar" },
      { title: "Bottom tab bar", href: "/components/tabbar-bottom", klass: ".kairoz-tabbar-bottom" },
      { title: "Segmented", href: "/components/segmented", klass: ".kairoz-segmented" },
      { title: "Toggle", href: "/components/toggle", klass: ".kairoz-toggle" },
      { title: "Breadcrumb", href: "/components/breadcrumb", klass: ".kairoz-breadcrumb" },
      { title: "Pagination", href: "/components/pagination", klass: ".kairoz-pagination" },
      { title: "Stepper", href: "/components/stepper", klass: ".kairoz-stepper" },
    ],
  },
  {
    label: "Overlays",
    items: [
      { title: "Popover", href: "/components/popover", klass: ".kairoz-popover" },
      { title: "Dialog", href: "/components/dialog", klass: ".kairoz-dialog" },
      { title: "Command", href: "/components/command", klass: ".kairoz-command" },
      { title: "Tooltip", href: "/components/tooltip", klass: ".kairoz-tooltip" },
      { title: "Toast", href: "/components/toast", klass: ".kairoz-toast" },
      { title: "Alert", href: "/components/alert", klass: ".kairoz-alert" },
    ],
  },
  {
    label: "Data",
    items: [
      { title: "Table", href: "/components/table", klass: ".kairoz-table" },
      { title: "List", href: "/components/list", klass: ".kairoz-list" },
      { title: "Badge", href: "/components/badge", klass: ".kairoz-badge" },
      { title: "Pill", href: "/components/pill", klass: ".kairoz-pill" },
      { title: "Accordion", href: "/components/accordion", klass: ".kairoz-accordion" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { title: "Progress", href: "/components/progress", klass: ".kairoz-progress" },
      { title: "Slider", href: "/components/slider", klass: ".kairoz-slider" },
      { title: "Skeleton", href: "/components/skeleton", klass: ".kairoz-skeleton" },
      { title: "Dot", href: "/components/dot", klass: ".kairoz-dot" },
    ],
  },
  {
    label: "Identity",
    items: [
      { title: "Avatar", href: "/components/avatar", klass: ".kairoz-avatar" },
      { title: "Divider", href: "/components/divider", klass: ".kairoz-divider" },
      { title: "Divider dashed", href: "/components/divider-dashed", klass: ".kairoz-divider-dashed" },
    ],
  },
  {
    label: "Layout",
    items: [
      { title: "Titlebar", href: "/components/titlebar", klass: ".kairoz-titlebar" },
      { title: "Statusbar", href: "/components/statusbar", klass: ".kairoz-statusbar" },
    ],
  },
  {
    label: "Patterns",
    items: [
      { title: "Landing", href: "/patterns/landing" },
      { title: "Agent chat", href: "/patterns/agent-chat" },
      { title: "Mobile app", href: "/patterns/mobile-app" },
      { title: "3-pane shell", href: "/patterns/three-pane-shell" },
      { title: "Dashboard", href: "/patterns/dashboard" },
      { title: "Settings", href: "/patterns/settings" },
    ],
  },
  {
    label: "Mockups",
    items: [
      { title: "Email", href: "/mockups/email" },
      { title: "E-commerce", href: "/mockups/ecommerce" },
      { title: "Multi-agent", href: "/mockups/multi-agent" },
      { title: "News & polls", href: "/mockups/news" },
      { title: "Stocks", href: "/mockups/stocks" },
    ],
  },
];

export function allItems(): NavItem[] {
  return NAV.flatMap((g) => g.items);
}

export function componentCount(): number {
  return NAV.filter((g) => ["Primitives", "Surfaces", "Navigation", "Overlays", "Data", "Feedback", "Identity", "Layout"].includes(g.label)).reduce((n, g) => n + g.items.length, 0);
}
