import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PillPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Fully-rounded · 12px text · 2–8px padding · sentence case (unlike badges)."
          tokens={["--radius-full", "--text-sm"]}
          dos={["Use for filters, tags, regions, and categories"]}
          donts={["Don't UPPERCASE — use sentence case; that's what separates pills from badges"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-pill"
        title="Pill"
        meta={[".kairoz-pill", ".kairoz-pill-active"]}
        subtitle="Rounded chip for categorization and filtering. Sentence case distinguishes it from the louder all-caps badge."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<span class="kairoz-pill">North America</span>` },
            { label: "Active", html: `<span class="kairoz-pill kairoz-pill-active">Production</span>` },
          ]}
        />
      </Section>
      <Section title="Inline filter set">
        <Example
          html={`<div style="display:flex;gap:6px;flex-wrap:wrap">
  <span class="kairoz-pill kairoz-pill-active">All</span>
  <span class="kairoz-pill">Active</span>
  <span class="kairoz-pill">Archived</span>
  <span class="kairoz-pill">Draft</span>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
