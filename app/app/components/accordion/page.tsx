import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function AccordionPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="32px trigger · chevron rotates on is-open · content with 12px padding."
          tokens={["--h-panel-header", "--border-subtle"]}
          dos={["Use for FAQ-style collapsed content", "Allow multiple open or single-open via is-open"]}
          donts={["Don't nest accordions more than 2 levels"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-accordion"
        title="Accordion"
        meta={[".kairoz-accordion", ".kairoz-accordion-item", ".kairoz-accordion-trigger", ".kairoz-accordion-chev", ".kairoz-accordion-content", ".is-open"]}
        subtitle="Stacked collapsible sections. Chevron rotation signals the open state at a glance."
      />
      <Section title="Default">
        <Example
          block
          html={`<div class="kairoz-accordion" style="width:480px;border:1px solid var(--border-default);border-radius:6px;overflow:hidden">
  <div class="kairoz-accordion-item is-open">
    <button class="kairoz-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Environment variables</span>
      <span class="kairoz-accordion-chev" style="transform:rotate(90deg);transition:transform 120ms">›</span>
    </button>
    <div class="kairoz-accordion-content" style="padding:12px;font-size:13px;color:var(--text-secondary);border-top:1px solid var(--border-subtle)">3 variables configured for production.</div>
  </div>
  <div class="kairoz-accordion-item" style="border-top:1px solid var(--border-subtle)">
    <button class="kairoz-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Build settings</span>
      <span class="kairoz-accordion-chev">›</span>
    </button>
  </div>
  <div class="kairoz-accordion-item" style="border-top:1px solid var(--border-subtle)">
    <button class="kairoz-accordion-trigger" style="display:flex;justify-content:space-between;align-items:center;width:100%;height:32px;padding:0 12px;background:transparent;border:0;color:var(--text-primary);font-family:inherit;font-size:13px;cursor:pointer">
      <span>Domains</span>
      <span class="kairoz-accordion-chev">›</span>
    </button>
  </div>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
