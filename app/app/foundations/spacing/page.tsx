import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { ScaleGrid } from "@/components/showcase/scale-row";

const scale = [
  { token: "--space-0", size: 0 },
  { token: "--space-px", size: 1 },
  { token: "--space-0h", size: 2 },
  { token: "--space-1", size: 4 },
  { token: "--space-1h", size: 6 },
  { token: "--space-2", size: 8 },
  { token: "--space-3", size: 12 },
  { token: "--space-4", size: 16 },
  { token: "--space-5", size: 20 },
  { token: "--space-6", size: 24 },
  { token: "--space-8", size: 32 },
  { token: "--space-10", size: 40 },
];

export default function SpacingPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Strict 4px grid. 2px and 6px exist only for ultra-compact inline spacing."
          dos={["Stay on the 4px grid — multiples of 4, no exceptions", "12 / 16 / 24 handle the vast majority of gaps"]}
          donts={["Don't invent values (10px, 18px) — pick from the scale", "Don't mix 6 and 8 in the same layout"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Spacing"
        subtitle="Strict 4px grid. Twelve tokens handle every gap, margin, and padding. Defaults are compact to support data-heavy layouts."
      />
      <Section title="Scale">
        <ScaleGrid items={scale} />
      </Section>
      <Section title="Density guidance" desc="Recommended values for common density decisions.">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div className="ks-variant">
            <div className="ks-variant-label">Stack gap</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Tight: <code>4px</code><br />
              Standard: <code>8px</code><br />
              Section: <code>16px</code><br />
              Area: <code>24–32px</code>
            </div>
          </div>
          <div className="ks-variant">
            <div className="ks-variant-label">Panel padding</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.6 }}>
              Tight cards: <code>12px</code><br />
              Standard panels: <code>16px</code><br />
              Hero / landing: <code>24px</code>
            </div>
          </div>
        </div>
      </Section>
    </PageBody>
  );
}
