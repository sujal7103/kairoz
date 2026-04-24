import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function BadgePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="10px uppercase · 0.08em tracking · 2–6px padding · 3px radius · border + muted fill."
          tokens={["--text-xxs", "--radius-sm", "--status-success-muted", "--status-warning-muted", "--status-error-muted", "--status-info-muted"]}
          dos={["Keep to 1–2 words max", "Match variant to semantic meaning"]}
          donts={["Don't use badges for counts — use a number in tertiary text"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-badge"
        title="Badge"
        meta={[".kairoz-badge", ".kairoz-badge-primary", ".kairoz-badge-success", ".kairoz-badge-warning", ".kairoz-badge-error", ".kairoz-badge-info"]}
        subtitle="Terse, all-caps micro-label. Each variant maps directly to a status color, so meaning is immediate."
      />
      <Section title="Variants">
        <Variants
          items={[
            { label: "Default", html: `<span class="kairoz-badge">DEFAULT</span>` },
            { label: "Primary", html: `<span class="kairoz-badge kairoz-badge-primary">PRIMARY</span>` },
            { label: "Success", html: `<span class="kairoz-badge kairoz-badge-success">OK</span>` },
            { label: "Warning", html: `<span class="kairoz-badge kairoz-badge-warning">DRAFT</span>` },
            { label: "Error", html: `<span class="kairoz-badge kairoz-badge-error">FAIL</span>` },
            { label: "Info", html: `<span class="kairoz-badge kairoz-badge-info">NEW</span>` },
          ]}
        />
      </Section>
    </PageBody>
  );
}
