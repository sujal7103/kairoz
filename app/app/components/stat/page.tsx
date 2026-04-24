import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function StatPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="10px uppercase label · 28px mono value · 11px delta (green up, red down)."
          tokens={["--font-mono", "--text-2xl", "--status-success", "--status-error"]}
          dos={["Use mono for numbers", "Include delta for trending data"]}
          donts={["Don't wrap a stat in a decorative border — put it inside a card"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-stat"
        title="Stat"
        meta={[".kairoz-stat", ".kairoz-stat-label", ".kairoz-stat-value", ".kairoz-stat-delta"]}
        subtitle="Numeric display with uppercase label, large monospaced value, and optional delta indicator. Use inside cards or dashboards for key metrics."
      />
      <Section title="Default">
        <Example
          html={`<div class="kairoz-stat">
  <div class="kairoz-stat-label">REVENUE</div>
  <div class="kairoz-stat-value">$12,847</div>
  <div class="kairoz-stat-delta is-up">+12.4%</div>
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Up", html: `<div class="kairoz-stat"><div class="kairoz-stat-label">USERS</div><div class="kairoz-stat-value">8,129</div><div class="kairoz-stat-delta is-up">+4.2%</div></div>` },
            { label: "Down", html: `<div class="kairoz-stat"><div class="kairoz-stat-label">ERRORS</div><div class="kairoz-stat-value">42</div><div class="kairoz-stat-delta is-down">-8.1%</div></div>` },
            { label: "No delta", html: `<div class="kairoz-stat"><div class="kairoz-stat-label">UPTIME</div><div class="kairoz-stat-value">99.98%</div></div>` },
            { label: "In card", html: `<div class="kairoz-card" style="width:220px"><div class="kairoz-card-header"><span class="kairoz-panel-title">Latency</span></div><div class="kairoz-card-body"><div class="kairoz-stat"><div class="kairoz-stat-value">187ms</div><div class="kairoz-stat-delta is-down">-12ms</div></div></div></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
