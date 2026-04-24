import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

const shellHtml = `<div style="display:grid;grid-template-columns:180px 1fr 220px;grid-template-rows:36px 1fr 28px;height:400px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden;background:var(--bg-base)">
  <header class="kairoz-titlebar" style="grid-column:1/-1;grid-row:1;border-bottom:1px solid var(--border-default)">
    <div style="display:flex;align-items:center;gap:6px;font-size:13px;font-weight:600"><span style="width:8px;height:8px;border-radius:2px;background:linear-gradient(135deg,var(--accent-primary),var(--accent-highlight))"></span>kairoz</div>
    <div style="font-size:11px;color:var(--text-tertiary)">main</div>
    <div style="display:flex;gap:4px"><button class="kairoz-btn kairoz-btn-icon" style="width:22px;height:22px">⚙</button></div>
  </header>
  <aside style="grid-column:1;grid-row:2;border-right:1px solid var(--border-default);padding:8px;overflow:auto">
    <div style="font-size:10px;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-tertiary);padding:6px 8px;font-weight:600">Nav</div>
    <ul class="kairoz-list" style="list-style:none;padding:0;margin:0;font-size:12px">
      <li class="kairoz-list-item is-selected" style="padding:2px 8px;height:22px">Overview</li>
      <li class="kairoz-list-item" style="padding:2px 8px;height:22px">Deployments</li>
      <li class="kairoz-list-item" style="padding:2px 8px;height:22px">Logs</li>
      <li class="kairoz-list-item" style="padding:2px 8px;height:22px">Settings</li>
    </ul>
  </aside>
  <main style="grid-column:2;grid-row:2;overflow:auto;display:flex;flex-direction:column">
    <div class="kairoz-tabbar" style="border-bottom:1px solid var(--border-default)">
      <button class="kairoz-tab is-active" style="font-size:11px">Overview</button>
      <button class="kairoz-tab" style="font-size:11px">Metrics</button>
      <button class="kairoz-tab" style="font-size:11px">Logs</button>
    </div>
    <div style="padding:16px;flex:1">
      <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:8px">
        <div class="kairoz-card"><div class="kairoz-card-body"><div class="kairoz-stat"><div class="kairoz-stat-label">REQ</div><div class="kairoz-stat-value" style="font-size:20px">12,847</div><div class="kairoz-stat-delta is-up" style="font-size:10px">+4.2%</div></div></div></div>
        <div class="kairoz-card"><div class="kairoz-card-body"><div class="kairoz-stat"><div class="kairoz-stat-label">LATENCY</div><div class="kairoz-stat-value" style="font-size:20px">42ms</div><div class="kairoz-stat-delta is-down" style="font-size:10px">-12ms</div></div></div></div>
      </div>
    </div>
  </main>
  <aside style="grid-column:3;grid-row:2;border-left:1px solid var(--border-default);padding:8px;overflow:auto">
    <div class="kairoz-panel-header" style="padding:0 6px;height:28px"><span class="kairoz-panel-title" style="font-size:10px">Inspector</span></div>
    <dl style="display:grid;grid-template-columns:auto 1fr;gap:2px 8px;font-size:11px;margin:8px 6px">
      <dt style="color:var(--text-tertiary)">Env</dt><dd style="margin:0">prod</dd>
      <dt style="color:var(--text-tertiary)">Region</dt><dd style="margin:0">iad1</dd>
      <dt style="color:var(--text-tertiary)">Build</dt><dd style="margin:0">a9f3b1</dd>
    </dl>
  </aside>
  <footer class="kairoz-statusbar" style="grid-column:1/-1;grid-row:3;border-top:1px solid var(--border-default);font-size:11px">
    <span style="display:inline-flex;align-items:center;gap:6px;color:var(--text-tertiary)"><span class="kairoz-dot kairoz-dot-success"></span>OK</span>
    <span style="flex:1"></span>
    <span style="color:var(--text-tertiary)">v1.24.3</span>
  </footer>
</div>`;

export default function ThreePaneShellPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Titlebar (36px) · sidebar (180-240px) · main · inspector (220-320px) · statusbar (28px). CSS grid."
          tokens={["--h-titlebar", "--h-statusbar", "--border-default"]}
          dos={["Apply contain: layout style paint to each panel for performance", "Use react-resizable-panels for drag resizing"]}
          donts={["Don't shrink panels below 180px — navigation breaks down"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="3-pane app shell"
        subtitle="The base app layout. Titlebar, sidebar, main content, inspector, and statusbar in a CSS grid. Use as a starting point for tool UIs."
      />
      <Section title="Live preview">
        <Example block html={shellHtml} />
      </Section>
    </PageBody>
  );
}
