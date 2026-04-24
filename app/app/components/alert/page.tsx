import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function AlertPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Inline banner · 1px border · 12px padding · icon + title + desc · status-tinted fill."
          tokens={["--status-info-muted", "--status-warning-muted", "--status-error-muted"]}
          dos={["Use for persistent in-page context (not transient events)", "Lead with a one-sentence title"]}
          donts={["Don't stack more than 2 alerts on the same surface"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-alert"
        title="Alert"
        meta={[".kairoz-alert", ".kairoz-alert-info", ".kairoz-alert-warning", ".kairoz-alert-error"]}
        subtitle="Persistent inline banner for ongoing conditions. Three severity tiers drawn from the status palette."
      />
      <Section title="Variants">
        <Variants
          items={[
            {
              label: "Info",
              html: `<div class="kairoz-alert kairoz-alert-info"><div class="kairoz-alert-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4m0 4h.01"/></svg></div><div class="kairoz-alert-title">Heads up</div><div class="kairoz-alert-desc">Deploy takes ~2 min.</div></div>`,
            },
            {
              label: "Warning",
              html: `<div class="kairoz-alert kairoz-alert-warning"><div class="kairoz-alert-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4m0 4h.01"/></svg></div><div class="kairoz-alert-title">Low disk space</div><div class="kairoz-alert-desc">12% remaining.</div></div>`,
            },
            {
              label: "Error",
              html: `<div class="kairoz-alert kairoz-alert-error"><div class="kairoz-alert-icon"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6M9 9l6 6"/></svg></div><div class="kairoz-alert-title">Build failed</div><div class="kairoz-alert-desc">TypeError at line 42 of main.ts.</div></div>`,
            },
          ]}
        />
      </Section>
    </PageBody>
  );
}
