import { PageHeader, Section, Example, Variants, PageBody, Inspector } from "@/components/showcase/component-page";

export default function ButtonPillPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Same 28px height as .kairoz-btn · 9999px radius · brightness hover · scale(0.985) press."
          tokens={["--accent-primary", "--h-button", "--text-sm"]}
          dos={[
            "Use for landing pages, hero CTAs, and marketing surfaces",
            "Pair with .kairoz-display for hero type",
            "Keep the square .kairoz-btn for dense in-app UIs",
          ]}
          donts={[
            "Don't mix square and pill buttons in the same cluster",
            "Don't use blue variant — pills stay monochromatic",
          ]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-btn-pill"
        title="Pill button"
        subtitle="Fully rounded button variant for landing pages and marketing surfaces. Monochromatic, same height as .kairoz-btn, with 9999px border-radius."
        meta={[".kairoz-btn-pill", ".kairoz-btn-pill-primary", ".kairoz-btn-pill-secondary", ".kairoz-btn-pill-ghost", ".kairoz-btn-pill-sm", ".kairoz-btn-pill-lg"]}
      />

      <Section title="Primary">
        <Example html={`<button class="kairoz-btn-pill kairoz-btn-pill-primary">Get started</button>`} />
      </Section>

      <Section title="Variants">
        <Variants
          items={[
            { label: "Primary", html: `<button class="kairoz-btn-pill kairoz-btn-pill-primary">Ship it</button>` },
            { label: "Secondary", html: `<button class="kairoz-btn-pill kairoz-btn-pill-secondary">Cancel</button>` },
            { label: "Ghost", html: `<button class="kairoz-btn-pill kairoz-btn-pill-ghost">Learn more</button>` },
            { label: "Small", html: `<button class="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Small</button>` },
            { label: "Large", html: `<button class="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-lg">Large</button>` },
            { label: "With icon", html: `<button class="kairoz-btn-pill kairoz-btn-pill-primary"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 5l7 7-7 7"/></svg> Continue</button>` },
          ]}
        />
      </Section>

      <Section title="Squared vs rounded" desc="Use squared buttons in dense app UIs and pill buttons on landing pages and outward-facing surfaces.">
        <Example
          html={`<div style="display:flex;gap:12px;align-items:center">
  <button class="kairoz-btn kairoz-btn-primary">.kairoz-btn</button>
  <button class="kairoz-btn-pill kairoz-btn-pill-primary">.kairoz-btn-pill</button>
</div>`}
        />
      </Section>
    </PageBody>
  );
}
