import { CodeBlock } from "./code-block";
import { CopyAnatomy } from "./copy-anatomy";

export type Variant = { label: string; html: string };

export function PageHeader({
  eyebrow,
  title,
  subtitle,
  meta,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  meta?: string[];
}) {
  return (
    <div className="ks-page-header">
      {eyebrow && <div className="ks-eyebrow">{eyebrow}</div>}
      <h1 className="ks-title">{title}</h1>
      {subtitle && <p className="ks-subtitle">{subtitle}</p>}
      {meta && (
        <div className="ks-meta">
          {meta.map((m) => (
            <span key={m} className="ks-meta-chip">
              {m}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export function Section({
  title,
  desc,
  children,
}: {
  title?: string;
  desc?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="ks-section">
      {title && <h2 className="ks-section-title">{title}</h2>}
      {desc && <p className="ks-section-desc">{desc}</p>}
      {children}
    </section>
  );
}

export function LivePreview({
  html,
  block = false,
  dense = false,
  column = false,
  standalone = false,
}: {
  html: string;
  block?: boolean;
  dense?: boolean;
  column?: boolean;
  standalone?: boolean;
}) {
  const cls = [
    "ks-preview",
    block && "ks-preview-block",
    dense && "ks-preview-dense",
    column && "ks-preview-column",
    standalone && "ks-preview-standalone",
  ]
    .filter(Boolean)
    .join(" ");
  return <div className={cls} dangerouslySetInnerHTML={{ __html: html }} />;
}

export function Example({
  html,
  block = false,
  column = false,
}: {
  html: string;
  block?: boolean;
  column?: boolean;
}) {
  return (
    <>
      <LivePreview html={html} block={block} column={column} />
      <CodeBlock code={html.trim()} />
    </>
  );
}

export function Variants({ items }: { items: Variant[] }) {
  return (
    <div className="ks-variants">
      {items.map((v) => (
        <div className="ks-variant" key={v.label}>
          <div className="ks-variant-label">{v.label}</div>
          <div
            className="ks-variant-body"
            dangerouslySetInnerHTML={{ __html: v.html }}
          />
        </div>
      ))}
    </div>
  );
}

export function Inspector({
  anatomy,
  tokens,
  dos,
  donts,
}: {
  anatomy?: string;
  tokens?: string[];
  dos?: string[];
  donts?: string[];
}) {
  return (
    <aside className="ks-page-inspector">
      <div className="ks-page-inspector-toolbar">
        <span className="ks-page-inspector-title">Anatomy</span>
        <CopyAnatomy anatomy={anatomy} tokens={tokens} dos={dos} donts={donts} />
      </div>
      {anatomy && (
        <div className="ks-page-inspector-section">
          <p>{anatomy}</p>
        </div>
      )}
      {tokens && tokens.length > 0 && (
        <div className="ks-page-inspector-section">
          <h3>Tokens</h3>
          <ul>
            {tokens.map((t) => (
              <li key={t}>
                <code>{t}</code>
              </li>
            ))}
          </ul>
        </div>
      )}
      {(dos || donts) && (
        <div className="ks-page-inspector-section">
          <h3>Guidance</h3>
          <div className="ks-dos-dont">
            {dos?.map((d) => (
              <div className="ks-do" key={d}>
                <span className="ks-do-mark">i</span>
                <span>{d}</span>
              </div>
            ))}
            {donts?.map((d) => (
              <div className="ks-dont" key={d}>
                <span className="ks-dont-mark">!</span>
                <span>{d}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

export function PageBody({
  children,
  inspector,
}: {
  children: React.ReactNode;
  inspector?: React.ReactNode;
}) {
  if (!inspector) return <div className="ks-page-single">{children}</div>;
  return (
    <div className="ks-page">
      <div>{children}</div>
      {inspector}
    </div>
  );
}
