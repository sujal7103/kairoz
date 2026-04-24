import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function PopoverPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="160–220px wide · 1px border · shadow-md · 4px padding · menu items 24px tall."
          tokens={["--shadow-md", "--bg-overlay", "--border-default", "--z-dropdown"]}
          dos={["Use for dropdown menus and context actions", "Include .kairoz-menu-separator between groups"]}
          donts={["Don't nest popovers more than one level"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-popover"
        title="Popover"
        meta={[".kairoz-popover", ".kairoz-menu-item", ".kairoz-menu-separator"]}
        subtitle="Shadow-lifted floating surface for dropdowns, context menus, and stacked action lists."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-popover" style="width:200px;position:relative">
  <button class="kairoz-menu-item">Rename</button>
  <button class="kairoz-menu-item">Duplicate</button>
  <button class="kairoz-menu-item">Move to…</button>
  <div class="kairoz-menu-separator"></div>
  <button class="kairoz-menu-item" style="color:var(--status-error)">Delete</button>
</div>`}
        />
      </Section>
      <Section title="Shortcut-annotated">
        <Example
          block
          html={`<div class="kairoz-popover" style="width:240px;position:relative">
  <button class="kairoz-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>New file</span><kbd class="kairoz-kbd">⌘N</kbd></button>
  <button class="kairoz-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>Open</span><kbd class="kairoz-kbd">⌘O</kbd></button>
  <button class="kairoz-menu-item" style="display:flex;justify-content:space-between;align-items:center"><span>Save</span><kbd class="kairoz-kbd">⌘S</kbd></button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
