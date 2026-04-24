import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function DialogPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="480px default · 6px radius · shadow-lg · header / body / footer zones."
          tokens={["--shadow-lg", "--z-modal", "--bg-overlay"]}
          dos={["Include a title, description, and at most 2 footer buttons", "Esc closes the dialog"]}
          donts={["Don't use dialogs for non-blocking info — use toast or alert"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-dialog"
        title="Dialog"
        meta={[".kairoz-dialog", ".kairoz-dialog-header", ".kairoz-dialog-title", ".kairoz-dialog-desc", ".kairoz-dialog-body", ".kairoz-dialog-footer", ".kairoz-dialog-backdrop"]}
        subtitle="Focus-trapping modal with three zones: header, body, and footer. Ghost cancel button on the left, primary action on the right."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-dialog" style="position:relative;width:440px;box-shadow:var(--shadow-lg)">
  <div class="kairoz-dialog-header">
    <div class="kairoz-dialog-title">Delete project</div>
    <div class="kairoz-dialog-desc">This will permanently delete kairoz and all of its deployments. This cannot be undone.</div>
  </div>
  <div class="kairoz-dialog-body" style="font-size:13px;color:var(--text-secondary)">Type <code style="font-family:var(--font-mono);color:var(--text-primary)">kairoz</code> to confirm.</div>
  <div class="kairoz-dialog-footer" style="display:flex;justify-content:flex-end;gap:8px">
    <button class="kairoz-btn kairoz-btn-ghost">Cancel</button>
    <button class="kairoz-btn kairoz-btn-destructive">Delete project</button>
  </div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
