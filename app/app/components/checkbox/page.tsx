import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function CheckboxPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="13px box · 1px border · blue fill when checked via accent-color."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Pair with a label via <label> wrapping", "Use for independent boolean options"]}
          donts={["Don't use checkbox for a single toggle — use switch instead"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-checkbox"
        title="Checkbox"
        subtitle="13px checkbox that fills blue on check via accent-color. Always paired with a wrapping label element."
        meta={[".kairoz-checkbox"]}
      />
      <Section title="Default">
        <Example html={`<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-primary);cursor:pointer"><input type="checkbox" class="kairoz-checkbox" checked/> Enable notifications</label>`} />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Unchecked", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px"><input type="checkbox" class="kairoz-checkbox"/> Option</label>` },
            { label: "Checked", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px"><input type="checkbox" class="kairoz-checkbox" checked/> Option</label>` },
            { label: "Disabled", html: `<label style="display:inline-flex;align-items:center;gap:8px;font-size:13px;color:var(--text-tertiary)"><input type="checkbox" class="kairoz-checkbox" disabled/> Disabled</label>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
