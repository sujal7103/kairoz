import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function StatusbarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="28px height · 11px text · 1px top border · left status, right meta."
          tokens={["--h-statusbar", "--text-xs", "--border-default"]}
          dos={["Slots separated by thin dividers", "Include branch, environment, version info"]}
          donts={["Don't use for clickable nav — that belongs in the sidebar"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-statusbar"
        title="Statusbar"
        meta={[".kairoz-statusbar"]}
        subtitle="28px footer rail carrying build health, branch, and version info. Read-only by design -- no interactions."
      />
      <Section title="Default">
        <Example
          block
          html={`<footer class="kairoz-statusbar" style="border:1px solid var(--border-default);border-radius:6px">
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--text-tertiary)">
    <span class="kairoz-dot kairoz-dot-success"></span>
    <span>Build OK</span>
  </div>
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--text-tertiary)">main</div>
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--text-tertiary)">42ms</div>
  <div style="flex:1"></div>
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;color:var(--text-tertiary)">v1.24.3</div>
</footer>`}
        />
      </Section>
    </PageBody>
  );
}
