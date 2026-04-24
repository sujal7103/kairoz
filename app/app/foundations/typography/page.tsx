import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";

const scale = [
  { token: "--text-xxs", size: 10, usage: "Badges, captions" },
  { token: "--text-xs", size: 11, usage: "Panel headers, status bar" },
  { token: "--text-sm", size: 12, usage: "Tabs, buttons, inputs" },
  { token: "--text-base", size: 13, usage: "Body default" },
  { token: "--text-md", size: 14, usage: "Emphasis" },
  { token: "--text-lg", size: 16, usage: "h4" },
  { token: "--text-xl", size: 20, usage: "h3" },
  { token: "--text-2xl", size: 28, usage: "h2" },
  { token: "--text-3xl", size: 44, usage: "h1" },
];

export default function TypographyPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Inter (UI/display) and JetBrains Mono (code/metrics) loaded via @import. Base: 13px / 1.45 / -0.01em."
          tokens={["--font-ui", "--font-mono", "--font-display", "--text-base", "--text-sm", "--text-xs"]}
          dos={["Use --font-mono for numerics and code — always", "Keep base at 13px for density"]}
          donts={["Don't set body copy in mono", "Don't push base above 14px"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Typography"
        subtitle="Inter for UI, JetBrains Mono for code. Nine steps from 10px badges to 44px display. Tight line-heights, slight negative tracking."
      />

      <Section title="Scale">
        <div style={{ border: "1px solid var(--border-default)", borderRadius: 6, padding: "0 16px" }}>
          {scale.map((s) => (
            <div className="ks-type-row" key={s.token}>
              <code>{s.token}</code>
              <div className="ks-type-sample" style={{ fontSize: s.size }}>
                The quick brown fox — {s.usage}
              </div>
              <div className="ks-type-size">{s.size}px</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Headings" desc="h1 through h4 use the display face (Inter) with progressively tighter tracking.">
        <div className="ks-preview ks-preview-block">
          <h1 style={{ margin: 0, marginBottom: 8 }}>h1 · 44px · semibold · -0.03em</h1>
          <h2 style={{ margin: 0, marginBottom: 8 }}>h2 · 28px · semibold · -0.02em</h2>
          <h3 style={{ margin: 0, marginBottom: 8 }}>h3 · 20px · semibold · -0.015em</h3>
          <h4 style={{ margin: 0 }}>h4 · 16px · semibold</h4>
        </div>
      </Section>

      <Section title="Mono" desc="Code, metrics, IDs, tokens. JetBrains Mono at 12-13px.">
        <div className="ks-preview ks-preview-column">
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>
            const id = "kairoz-btn-primary"
          </code>
          <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-secondary)" }}>
            12,847 rows · 42.3 MB · 3.2s
          </code>
        </div>
      </Section>

      <Section title="Content tone" desc="Sentence case everywhere. UPPERCASE is reserved for eyebrow labels and badges, always at 0.08em tracking.">
        <div className="ks-preview ks-preview-block">
          <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 6 }}>
            Eyebrow label
          </div>
          <div style={{ fontSize: 13, color: "var(--text-primary)" }}>
            Create project — sentence case for all copy.
          </div>
        </div>
      </Section>
    </PageBody>
  );
}
