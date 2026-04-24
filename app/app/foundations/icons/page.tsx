import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";

export default function IconsPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Lucide icons, 1.5px stroke, color inherited. 16px default, 18px titlebar, 11px card header."
          dos={["Lucide only (npm: lucide-react, or CDN)", "1.5px stroke, color inherited from parent text"]}
          donts={["No emoji, ever", "No unicode symbols (no stars, arrows, checkmarks)", "Don't animate icons"]}
        />
      }
    >
      <PageHeader
        eyebrow="Foundations"
        title="Icons"
        subtitle="All icons use Lucide at 1.5px stroke weight. Color inherits from the parent element. No emoji, no unicode symbols."
      />
      <Section title="Sizing" desc="Icon size varies by context. Smaller in card headers, larger in titlebars.">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
          <SizeCell size={11} label="Card header" />
          <SizeCell size={14} label="Inline text" />
          <SizeCell size={16} label="Default" />
          <SizeCell size={18} label="Titlebar" />
        </div>
      </Section>
      <Section title="Installation">
        <div className="ks-preview ks-preview-block">
          <div style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-secondary)" }}>
            # React<br />
            npm install lucide-react<br />
            {`import { Search } from 'lucide-react';`}<br /><br />
            # Vanilla HTML<br />
            &lt;script src=&quot;https://unpkg.com/lucide@latest&quot;&gt;&lt;/script&gt;
          </div>
        </div>
      </Section>
    </PageBody>
  );
}

function SizeCell({ size, label }: { size: number; label: string }) {
  return (
    <div className="ks-variant" style={{ alignItems: "center", justifyContent: "center" }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ color: "var(--text-primary)" }}
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <div className="ks-variant-label">{size}px · {label}</div>
    </div>
  );
}
