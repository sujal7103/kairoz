import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DividerDashedPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="1px dashed border · uses --border-default · 16px vertical margin by default."
          tokens={["--border-default"]}
          dos={["Use between major sections on landing pages", "Pair with generous vertical space"]}
          donts={["Don't use inside cards — cards already carry borders", "Don't mix dashed + solid dividers in the same section"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-divider-dashed"
        title="Dashed divider"
        subtitle="1px dashed rule for separating major sections on landing pages and long-form layouts. Lighter visual weight than the solid divider."
        meta={[".kairoz-divider-dashed", ".kairoz-divider-v-dashed"]}
      />
      <Section title="Horizontal">
        <Example
          block
          html={`<div style="font-size:13px;color:var(--text-secondary);max-width:420px">
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Principles</div>
  AMOLED black base. Monochromatic surfaces.
  <hr class="kairoz-divider-dashed" />
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Density</div>
  28px buttons, 4px grid, 13px base text.
  <hr class="kairoz-divider-dashed" />
  <div style="padding-bottom:12px;color:var(--text-primary);font-size:16px;font-weight:600">Motion</div>
  Borders over shadows. 120ms transitions.
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Solid", html: `<div style="width:200px"><hr class="kairoz-divider" /></div>` },
            { label: "Dashed", html: `<div style="width:200px"><hr class="kairoz-divider-dashed" /></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
