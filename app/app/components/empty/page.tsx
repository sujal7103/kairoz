import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function EmptyPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Centered column · 24px icon · 16px title · 13px description · 16px vertical gap."
          tokens={["--text-primary", "--text-secondary", "--text-tertiary"]}
          dos={["Suggest a next action when possible", "Use a neutral Lucide icon, 24px"]}
          donts={["Don't use decorative illustrations — Kairoz is terse"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-empty"
        title="Empty state"
        meta={[".kairoz-empty", ".kairoz-empty-title", ".kairoz-empty-desc", ".kairoz-empty-icon"]}
        subtitle="Centered placeholder for views with no data. Displays an icon, title, and a short description suggesting a next action."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-empty" style="padding:32px;border:1px dashed var(--border-default);border-radius:6px">
  <div class="kairoz-empty-icon"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg></div>
  <div class="kairoz-empty-title">No results</div>
  <div class="kairoz-empty-desc">Try a different query or clear filters.</div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
