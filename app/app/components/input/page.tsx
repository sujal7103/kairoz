import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function InputPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="24px default height · 20px sm · 4px radius · #0a0a0a fill · blue focus ring."
          tokens={["--bg-input", "--border-default", "--border-focus", "--h-input", "--h-input-sm"]}
          dos={["Pair with a label above the input", "Use -sm inside dense tables or inline filters"]}
          donts={["Don't inflate height past 28px", "Don't remove the focus ring"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-input"
        title="Input"
        subtitle="24px text field with dark fill, 1px border, and blue focus ring. Use the -sm variant at 20px for dense table and filter contexts."
        meta={[".kairoz-input", ".kairoz-input-sm"]}
      />
      <Section title="Default">
        <Example html={`<input class="kairoz-input" placeholder="Search projects…" />`} />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<input class="kairoz-input" placeholder="Your name" />` },
            { label: "Small", html: `<input class="kairoz-input kairoz-input-sm" placeholder="Filter" />` },
            { label: "Filled", html: `<input class="kairoz-input" value="kairoz-btn-primary" readonly />` },
            { label: "Disabled", html: `<input class="kairoz-input" placeholder="Disabled" disabled />` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
