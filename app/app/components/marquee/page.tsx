import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { CodeBlock } from "@/components/showcase/code-block";
import { Marquee } from "@/components/showcase/marquee";

const snippet = `<div class="kairoz-marquee">
  <div class="kairoz-marquee-track">
    <span>40+ components</span>
    <span>·</span>
    <span>AMOLED black</span>
    <span>·</span>
    <span>Multi-surface</span>
    <span>·</span>
    <!-- Duplicate content for seamless loop -->
    <span>40+ components</span>
    <span>·</span>
    <span>AMOLED black</span>
    <span>·</span>
    <span>Multi-surface</span>
    <span>·</span>
  </div>
</div>`;

export default function MarqueePage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Infinite horizontal scroll · 60s default duration · pause on hover · soft edge mask."
          dos={["Duplicate the track content so the loop is seamless", "Pair with display type on landing pages", "Keep per-item text short — marquees don't render long phrases well"]}
          donts={["Don't use on dense app UIs — it's a landing-surface flourish", "Don't speed up below 30s — becomes disorienting"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-marquee"
        title="Marquee"
        subtitle="Continuous horizontal scroll for brand messaging, feature callouts, and ambient status ribbons on landing surfaces."
        meta={[".kairoz-marquee", ".kairoz-marquee-track"]}
      />

      <Section title="In motion">
        <div className="ks-preview ks-preview-block">
          <Marquee
            items={[
              <span key="1" style={{ fontSize: 20, fontWeight: 600 }}>40+ components</span>,
              <span key="2" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="3" style={{ fontSize: 20, fontWeight: 600 }}>AMOLED black</span>,
              <span key="4" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="5" style={{ fontSize: 20, fontWeight: 600 }}>Multi-surface</span>,
              <span key="6" style={{ color: "var(--text-tertiary)" }}>·</span>,
              <span key="7" style={{ fontSize: 20, fontWeight: 600 }}>Framework-agnostic</span>,
              <span key="8" style={{ color: "var(--text-tertiary)" }}>·</span>,
            ]}
          />
        </div>
      </Section>

      <Section title="Decelerated status ribbon (120s)">
        <div className="ks-preview ks-preview-block">
          <Marquee
            duration={120}
            items={[
              <span key="a" className="kairoz-badge kairoz-badge-success">OK</span>,
              <span key="b" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>kairoz-core</span>,
              <span key="c" className="kairoz-badge kairoz-badge-warning">SLOW</span>,
              <span key="d" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>kairoz-edge</span>,
              <span key="e" className="kairoz-badge kairoz-badge-success">OK</span>,
              <span key="f" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>kairoz-api</span>,
              <span key="g" className="kairoz-badge kairoz-badge-error">FAIL</span>,
              <span key="h" style={{ fontFamily: "var(--font-mono)", fontSize: 13 }}>kairoz-docs</span>,
            ]}
          />
        </div>
      </Section>

      <Section title="HTML">
        <CodeBlock code={snippet} />
      </Section>
    </PageBody>
  );
}
