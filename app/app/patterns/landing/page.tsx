import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { DeviceFrame } from "@/components/showcase/device-frame";
import { Marquee } from "@/components/showcase/marquee";

function LandingContent() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: 700 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px", borderBottom: "1px solid var(--border-default)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 14 }}>
          <span style={{ width: 12, height: 12, borderRadius: 3, background: "linear-gradient(135deg,var(--accent-primary),var(--accent-highlight))" }} />
          Kairoz
        </div>
        <nav style={{ display: "flex", alignItems: "center", gap: 24, fontSize: 13, color: "var(--text-secondary)" }}>
          <a className="kairoz-link" href="#">Docs</a>
          <a className="kairoz-link" href="#">Components</a>
          <a className="kairoz-link" href="#">Pricing</a>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Sign in</button>
        </nav>
      </div>

      <div style={{ padding: "80px 32px 56px", textAlign: "center", borderBottom: "1px dashed var(--border-default)" }}>
        <p className="kairoz-eyebrow" style={{ marginBottom: 16 }}>Design System · v0.2</p>
        <h1 className="kairoz-display-lg" style={{ maxWidth: 900, margin: "0 auto 16px" }}>
          A CSS design system for<br />dense, multi-surface UIs.
        </h1>
        <p style={{ color: "var(--text-secondary)", fontSize: 16, lineHeight: 1.55, maxWidth: 560, margin: "0 auto 24px" }}>
          Framework-agnostic tokens and 50+ component classes for dashboards, mobile views, and landing pages.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary">Get started</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-ghost">Browse components →</button>
        </div>
      </div>

      <div style={{ padding: "24px 0", borderBottom: "1px dashed var(--border-default)" }}>
        <Marquee
          duration={80}
          items={[
            <span key="a" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>AMOLED BLACK</span>,
            <span key="b" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="c" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>40+ COMPONENTS</span>,
            <span key="d" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="e" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>MULTI-SURFACE</span>,
            <span key="f" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="g" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>DARK + LIGHT</span>,
            <span key="h" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="i" style={{ fontSize: 13, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>FRAMEWORK-AGNOSTIC</span>,
            <span key="j" style={{ color: "var(--text-ghost)" }}>◆</span>,
          ]}
        />
      </div>

      <div style={{ padding: "56px 32px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24, borderBottom: "1px dashed var(--border-default)" }}>
        {[
          { label: "Dense by default", desc: "28px buttons, 13px base, 4px grid. Compact layouts without sacrificing readability." },
          { label: "Styled, not bare", desc: "Pill buttons, glass effects, understated motion. Components with visual polish built in." },
          { label: "Multi-surface", desc: "Desktop shells, mobile views, web landing pages — one set of tokens and classes." },
        ].map((f) => (
          <div key={f.label}>
            <div style={{ fontSize: 16, fontWeight: 600, marginBottom: 8, color: "var(--text-primary)" }}>{f.label}</div>
            <div style={{ fontSize: 13, color: "var(--text-secondary)", lineHeight: 1.55 }}>{f.desc}</div>
          </div>
        ))}
      </div>

      <div style={{ padding: "56px 32px", textAlign: "center" }}>
        <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 12, letterSpacing: "-0.02em" }}>Start building</h2>
        <p style={{ color: "var(--text-secondary)", fontSize: 14, marginBottom: 20 }}>
          Drop the CSS into any stack. Tailwind, React, Vue, plain HTML — it just works.
        </p>
        <div style={{ display: "inline-flex", gap: 8 }}>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary">Install plugin</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-secondary">Read docs</button>
        </div>
      </div>
    </div>
  );
}

export default function LandingPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Display hero · dashed section dividers · marquee band · pill CTAs throughout."
          tokens={[".kairoz-display-lg", ".kairoz-eyebrow", ".kairoz-btn-pill", ".kairoz-divider-dashed", ".kairoz-marquee"]}
          dos={["One sentence + subtitle in the hero — say it once", "One marquee per page — more than one becomes noise", "Dashed dividers between logical sections only"]}
          donts={["Don't stack multiple display headings on a single page", "Don't run the marquee faster than 60s — text becomes unreadable"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Landing page"
        subtitle="A marketing page layout. Display hero, dashed dividers, marquee, pill CTAs. Rendered inside a desktop frame to show how it looks as a shipped site."
      />
      <Section title="Live preview">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <DeviceFrame variant="desktop" url="kairoz-live.vercel.app">
            <LandingContent />
          </DeviceFrame>
        </div>
      </Section>
    </PageBody>
  );
}
