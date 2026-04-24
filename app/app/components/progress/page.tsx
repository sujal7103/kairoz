import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ProgressPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="4px tall track · 1px radius · near-white fill · minimal border."
          tokens={["--accent-primary", "--bg-raised"]}
          dos={["Use for determinate progress (uploads, builds)", "Pair with a percentage or label"]}
          donts={["Don't use for indeterminate states — use skeleton"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-progress"
        title="Progress"
        meta={[".kairoz-progress", ".kairoz-progress-bar"]}
        subtitle="Minimal 4px track for determinate progress. Set the bar width inline and the fill does the rest."
      />
      <Section title="Default">
        <Example
          block
          html={`<div style="width:320px">
  <div class="kairoz-progress"><div class="kairoz-progress-bar" style="width:42%"></div></div>
  <div style="margin-top:6px;font-size:11px;color:var(--text-tertiary);font-family:var(--font-mono)">42% · uploading…</div>
</div>`}
        />
      </Section>
      <Section title="Variants">
        <Variants
          items={[
            { label: "10%", html: `<div class="kairoz-progress" style="width:200px"><div class="kairoz-progress-bar" style="width:10%"></div></div>` },
            { label: "50%", html: `<div class="kairoz-progress" style="width:200px"><div class="kairoz-progress-bar" style="width:50%"></div></div>` },
            { label: "85%", html: `<div class="kairoz-progress" style="width:200px"><div class="kairoz-progress-bar" style="width:85%"></div></div>` },
            { label: "100%", html: `<div class="kairoz-progress" style="width:200px"><div class="kairoz-progress-bar" style="width:100%"></div></div>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
