import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function RadioPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="13px circle · 1px border · blue fill when selected."
          tokens={["--accent-highlight", "--border-default"]}
          dos={["Use for exclusive options where all choices are visible"]}
          donts={["Don't use radio for 6+ options — use a dropdown"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-radio"
        title="Radio"
        meta={[".kairoz-radio"]}
        subtitle="One choice at a time. Blue fill marks the active selection with zero ambiguity."
      />
      <Section title="Group">
        <Example
          html={`<div style="display:flex;flex-direction:column;gap:8px;font-size:13px">
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="kairoz-radio" checked/> Production</label>
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="kairoz-radio"/> Preview</label>
  <label style="display:inline-flex;align-items:center;gap:8px"><input type="radio" name="env" class="kairoz-radio"/> Development</label>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
