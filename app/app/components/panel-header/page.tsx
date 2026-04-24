import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PanelHeaderPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="32px height · 11px uppercase title · 8px padding · 1px bottom border."
          tokens={["--h-panel-header", "--text-xs", "--border-default"]}
          dos={["Pair dot + title for section identity", "Right-align controls with flex justify-between"]}
          donts={["Don't use for hero headers — use ks-title instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-panel-header"
        title="Panel header"
        meta={[".kairoz-panel-header", ".kairoz-panel-title"]}
        subtitle="Fixed 32px header strip for panel and card titles with inline actions. 11px uppercase tracked title for section identification."
      />
      <Section title="Default">
        <Example
          block
          html={`<div style="width:400px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="kairoz-panel-header">
    <span class="kairoz-panel-title">Inspector</span>
  </div>
  <div style="padding:12px;font-size:13px;color:var(--text-secondary)">Panel body content</div>
</div>`}
        />
      </Section>
      <Section title="With inline controls">
        <Example
          block
          html={`<div style="width:400px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="kairoz-panel-header" style="display:flex;align-items:center;justify-content:space-between">
    <span style="display:flex;align-items:center;gap:6px"><span class="kairoz-dot kairoz-dot-info"></span><span class="kairoz-panel-title">Build log</span></span>
    <button class="kairoz-btn kairoz-btn-icon" aria-label="Close"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 6 6 18M6 6l12 12"/></svg></button>
  </div>
  <div style="padding:12px;font-size:13px;color:var(--text-secondary)">Contents…</div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
