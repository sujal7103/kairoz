import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function KbdPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="18–20px height · JetBrains Mono · 3px radius · subtle border."
          tokens={["--font-mono", "--border-default", "--bg-input"]}
          dos={["Use ⌘ ⌃ ⇧ ⌥ symbols for Mac shortcuts", "Pair with action labels"]}
          donts={["Don't use for anything other than keys"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-kbd"
        title="Kbd"
        meta={[".kairoz-kbd"]}
        subtitle="Physical key rendered in JetBrains Mono. Wraps a single keystroke or modifier combination, nothing else."
      />
      <Section title="Default">
        <Example html={`<kbd class="kairoz-kbd">⌘K</kbd> <kbd class="kairoz-kbd">⇧</kbd> <kbd class="kairoz-kbd">A</kbd> <kbd class="kairoz-kbd">Esc</kbd>`} />
      </Section>
      <Section title="Paired with an action label">
        <Example
          html={`<div style="display:flex;align-items:center;justify-content:space-between;padding:6px 10px;border:1px solid var(--border-default);border-radius:4px;background:var(--bg-raised);font-size:13px;width:320px">
  <span>Open command palette</span>
  <span><kbd class="kairoz-kbd">⌘K</kbd></span>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
