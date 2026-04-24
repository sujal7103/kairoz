import { PageHeader, Section, Example, PageBody, Inspector } from "@/components/showcase/component-page";

export default function TitlebarPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="36px height · 1px bottom border · 18px Lucide icons · brand on left, actions on right."
          tokens={["--h-titlebar", "--border-default", "--bg-base"]}
          dos={["Keep centered content to 1 line", "Use 18px icons for buttons"]}
          donts={["Don't animate the titlebar — it's furniture"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-titlebar"
        title="Titlebar"
        meta={[".kairoz-titlebar"]}
        subtitle="36px fixed header for app shells. Brand on the left, live status in the center, action buttons on the right."
      />
      <Section title="Default">
        <Example
          block
          html={`<header class="kairoz-titlebar" style="border:1px solid var(--border-default);border-radius:6px">
  <div style="display:flex;align-items:center;gap:8px;font-weight:600;font-size:13px">
    <span style="width:10px;height:10px;border-radius:2px;background:linear-gradient(135deg,var(--accent-primary),var(--accent-highlight))"></span>
    <span>Kairoz</span>
  </div>
  <div style="font-size:11px;color:var(--text-tertiary)">Production · main · v1.24.3</div>
  <div style="display:flex;align-items:center;gap:6px">
    <button class="kairoz-btn kairoz-btn-icon" aria-label="Settings"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><circle cx="12" cy="12" r="8"/></svg></button>
    <div class="kairoz-avatar" style="width:22px;height:22px;font-size:10px">AB</div>
  </div>
</header>`}
        />
      </Section>
    </PageBody>
  );
}
