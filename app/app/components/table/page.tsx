import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TablePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px row height · 12px text · 11px uppercase header · .num class right-aligns numbers."
          tokens={["--h-row", "--text-sm", "--border-default"]}
          dos={["Right-align numeric columns with .num", "Use mono for IDs and numbers"]}
          donts={["Don't stripe rows — use hover and selected state instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-table"
        title="Table"
        meta={[".kairoz-table", ".num"]}
        subtitle="High-density data grid. Uppercase column headers, 24px rows, monospaced numerics for instant scanning."
      />
      <Section title="Default">
        <Example
          block
          html={`<table class="kairoz-table" style="width:100%">
  <thead>
    <tr>
      <th>Name</th>
      <th>Status</th>
      <th class="num">Requests</th>
      <th class="num">Latency</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>kairoz-core</td><td><span class="kairoz-badge kairoz-badge-success">OK</span></td><td class="num">12,847</td><td class="num">42ms</td></tr>
    <tr><td>kairoz-edge</td><td><span class="kairoz-badge kairoz-badge-warning">SLOW</span></td><td class="num">3,201</td><td class="num">312ms</td></tr>
    <tr><td>kairoz-api</td><td><span class="kairoz-badge kairoz-badge-error">FAIL</span></td><td class="num">87</td><td class="num">—</td></tr>
    <tr><td>kairoz-docs</td><td><span class="kairoz-badge kairoz-badge-success">OK</span></td><td class="num">8,129</td><td class="num">38ms</td></tr>
  </tbody>
</table>`}
        />
      </Section>
    </PageBody>
  );
}
