import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DividerPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="1px border · default color · horizontal or vertical via -v suffix."
          tokens={["--border-default", "--border-subtle"]}
          dos={["Use to separate sections within a panel"]}
          donts={["Don't use dividers inside a card — the card border is enough"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-divider"
        title="Divider"
        meta={[".kairoz-divider", ".kairoz-divider-v"]}
        subtitle="Single-pixel rule that draws a clean boundary between sections. Runs horizontal by default; append -v for vertical."
      />
      <Section title="Horizontal">
        <Example
          block
          html={`<div style="font-size:13px;color:var(--text-secondary);width:320px">
  Above the divider
  <hr class="kairoz-divider" style="border:0;border-top:1px solid var(--border-default);margin:12px 0" />
  Below the divider
</div>`}
        />
      </Section>
      <Section title="Vertical">
        <Example
          html={`<span style="font-size:13px;color:var(--text-secondary);display:inline-flex;align-items:center;gap:12px;height:24px">
  Left
  <span class="kairoz-divider-v" style="display:inline-block;width:1px;height:100%;background:var(--border-default)"></span>
  Right
</span>`}
        />
      </Section>
    </PageBody>
  );
}
