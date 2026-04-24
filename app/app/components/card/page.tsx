import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function CardPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="1px border · 6px radius · #0f0f0f fill · 32px header · 12–16px body padding."
          tokens={["--bg-raised", "--border-default", "--radius-lg", "--h-panel-header"]}
          dos={["Pair header dot + title for section identification", "Use consistent 16px padding inside body"]}
          donts={["Never add shadow to a card — borders only", "Don't nest cards more than one level"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-card"
        title="Card"
        meta={[".kairoz-card", ".kairoz-card-header", ".kairoz-card-body"]}
        subtitle="A bordered surface with a 32px header zone and open body. Elevation is implied through edges, never shadows."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-card" style="width:320px">
  <div class="kairoz-card-header">
    <span class="kairoz-dot kairoz-dot-primary"></span>
    <span class="kairoz-panel-title">Deployments</span>
  </div>
  <div class="kairoz-card-body">
    <div style="font-size:13px;color:var(--text-secondary);line-height:1.55">
      3 active · last deploy 2m ago
    </div>
  </div>
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            {
              label: "With stat",
              html: `<div class="kairoz-card" style="width:240px"><div class="kairoz-card-header"><span class="kairoz-panel-title">Latency</span></div><div class="kairoz-card-body"><div class="kairoz-stat"><div class="kairoz-stat-value">42ms</div><div class="kairoz-stat-delta is-up">+3.1%</div></div></div></div>`,
            },
            {
              label: "With dot + menu",
              html: `<div class="kairoz-card" style="width:240px"><div class="kairoz-card-header" style="justify-content:space-between;display:flex;align-items:center"><span style="display:flex;align-items:center;gap:6px"><span class="kairoz-dot kairoz-dot-warning"></span><span class="kairoz-panel-title">Queue</span></span><span style="color:var(--text-tertiary);font-family:var(--font-mono);font-size:11px">12</span></div><div class="kairoz-card-body" style="font-size:13px;color:var(--text-secondary)">3 pending, 9 running.</div></div>`,
            },
          ]}
        />
      </Section>
    </PageBody>
  );
}
