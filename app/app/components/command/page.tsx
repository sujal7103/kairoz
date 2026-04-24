import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function CommandPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="560–640px wide · 1px border · shadow-lg · 40px input · grouped items."
          tokens={["--shadow-lg", "--z-modal", "--bg-overlay"]}
          dos={["Open on ⌘K / Ctrl+K", "Group by source (pages, actions, files)"]}
          donts={["Don't use for single-action menus — use popover"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-command"
        title="Command palette"
        meta={[".kairoz-command", ".kairoz-command-input", ".kairoz-command-group-label", ".kairoz-command-item"]}
        subtitle="Keyboard-driven search and action launcher. Type to filter, arrow keys to navigate, enter to execute. Results are grouped by category."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-command" style="width:520px">
  <div class="kairoz-command-input-wrap">
    <input class="kairoz-command-input" placeholder="Type a command or search…" />
    <kbd class="kairoz-kbd">ESC</kbd>
  </div>
  <div class="kairoz-command-group-label">Actions</div>
  <button class="kairoz-command-item" style="background:var(--bg-selected)">New project<span class="kairoz-command-item-shortcut"><kbd class="kairoz-kbd">⌘N</kbd></span></button>
  <button class="kairoz-command-item">Open settings<span class="kairoz-command-item-shortcut"><kbd class="kairoz-kbd">⌘,</kbd></span></button>
  <div class="kairoz-command-group-label">Navigate</div>
  <button class="kairoz-command-item">Overview</button>
  <button class="kairoz-command-item">Deployments</button>
  <button class="kairoz-command-item">Logs</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
