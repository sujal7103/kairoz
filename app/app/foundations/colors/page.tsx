import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { SwatchGrid } from "@/components/showcase/swatch";

const backgrounds = [
  { name: "--bg-base", value: "#000000" },
  { name: "--bg-raised", value: "#0f0f0f" },
  { name: "--bg-input", value: "#0a0a0a" },
  { name: "--bg-tab-active", value: "#171717" },
  { name: "--bg-elevated", value: "#0f0f0f" },
  { name: "--bg-overlay", value: "#0f0f0f" },
];
const text = [
  { name: "--text-primary", value: "#ffffff" },
  { name: "--text-secondary", value: "#aaaaaa" },
  { name: "--text-tertiary", value: "#777777" },
  { name: "--text-muted", value: "#585858" },
  { name: "--text-ghost", value: "#333333" },
  { name: "--text-inverse", value: "#000000" },
];
const borders = [
  { name: "--border-subtle", value: "#141414" },
  { name: "--border-default", value: "#1e1e1e" },
  { name: "--border-strong", value: "#3d3d3d" },
  { name: "--border-focus", value: "#0070f3" },
];
const accent = [
  { name: "--accent-primary", value: "#ededed" },
  { name: "--accent-primary-hover", value: "#ffffff" },
  { name: "--accent-secondary", value: "#a1a1a1" },
  { name: "--accent-highlight", value: "#0070f3" },
  { name: "--accent-highlight-hover", value: "#3291ff" },
];
const status = [
  { name: "--status-success", value: "#4d4d4d → green" },
  { name: "--status-warning", value: "#CD9731" },
  { name: "--status-error", value: "#F44747" },
  { name: "--status-info", value: "#6796E6" },
];

export default function ColorsPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Colors are CSS custom properties on :root. They remap automatically under [data-theme='light']."
          dos={[
            "Use semantic tokens (--bg-raised, --text-primary), never raw hex",
            "Reserve saturated color for status semantics (warning, error, info)",
            "Blue #0070f3 is for focus and selection only — never a CTA",
          ]}
          donts={[
            "Don't use mid-range grays for backgrounds — the base is pure #000",
            "Don't use blue for primary buttons",
          ]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Colors"
        subtitle="Grays and whites define the structure. Saturated color is used only for status indicators (success, warning, error, info) and the blue highlight."
      />

      <Section title="Backgrounds" desc="Surface layers from #000 through #0a, #0f, to #171717. Each step adds depth while staying near black.">
        <SwatchGrid items={backgrounds} />
      </Section>

      <Section title="Text" desc="Six tokens cover all text levels. Use higher contrast for important content, lower for secondary.">
        <SwatchGrid items={text} />
      </Section>

      <Section title="Borders" desc="Components use borders instead of shadows. Default is 1px #1e1e1e; focus ring uses blue.">
        <SwatchGrid items={borders} />
      </Section>

      <Section title="Accent" desc="Near-white drives primary actions. Blue is strictly for focus and selection.">
        <SwatchGrid items={accent} />
      </Section>

      <Section title="Status" desc="Amber warns. Red alerts. Blue (distinct from highlight) informs.">
        <SwatchGrid items={status} />
      </Section>
    </PageBody>
  );
}
