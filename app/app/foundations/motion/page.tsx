import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";

export default function MotionPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Minimal motion: 120-150ms transitions on background-color only. No springs, no bounces."
          dos={["Transition background-color on hover/press", "Ease-out or linear — nothing else"]}
          donts={["Don't animate color or opacity on icons — causes jitter", "Don't use springs or bounces", "Don't add entry/exit animations to content"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Motion"
        subtitle="Transitions are limited to 120-150ms background-color fades. Everything else is immediate. No springs, no bounces."
      />
      <Section title="Interactive states" desc="Hover any button to see the transition in action.">
        <div className="ks-preview">
          <button className="kairoz-btn kairoz-btn-primary">Hover me</button>
          <button className="kairoz-btn kairoz-btn-secondary">Secondary</button>
          <button className="kairoz-btn kairoz-btn-ghost">Ghost</button>
        </div>
      </Section>
      <Section title="Rules">
        <div style={{ display: "grid", gap: 8, fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
          <div><strong style={{ color: "var(--text-primary)" }}>120ms ease-out</strong> — hover and press default.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>150ms ease-out</strong> — popover open, toast enter.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>Never animate</strong> <code>color</code> or <code>opacity</code> on icons — visible jitter.</div>
          <div><strong style={{ color: "var(--text-primary)" }}>No springs</strong>, no bounces, no overshoot. Ease-out or linear, nothing else.</div>
        </div>
      </Section>
    </PageBody>
  );
}
