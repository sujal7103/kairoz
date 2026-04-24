export type ScaleItem = { token: string; size: number; max?: number };

export function ScaleGrid({ items, unit = "px" }: { items: ScaleItem[]; unit?: string }) {
  const max = Math.max(...items.map((i) => i.max ?? i.size));
  return (
    <div className="ks-scale-grid">
      {items.map((s) => (
        <div className="ks-scale-row" key={s.token}>
          <code>{s.token}</code>
          <div className="ks-scale-bar">
            <div
              className="ks-scale-bar-inner"
              style={{ width: `${(s.size / max) * 100}%` }}
            />
          </div>
          <div className="ks-scale-size">
            {s.size}
            {unit}
          </div>
        </div>
      ))}
    </div>
  );
}

export function RadiusGrid({ items }: { items: { token: string; value: string; radius: number }[] }) {
  return (
    <div className="ks-swatch-grid">
      {items.map((r) => (
        <div className="ks-swatch" key={r.token}>
          <div
            className="ks-swatch-chip"
            style={{ background: "var(--bg-raised)", borderRadius: r.radius > 100 ? "9999px" : `${r.radius}px` }}
          >
            <div
              className="ks-swatch-chip-inner"
              style={{
                background: "var(--accent-highlight-muted)",
                borderRadius: r.radius > 100 ? "9999px" : `${r.radius}px`,
                border: "1px solid var(--accent-highlight)",
              }}
            />
          </div>
          <div className="ks-swatch-meta">
            <div className="ks-swatch-name">{r.token}</div>
            <div className="ks-swatch-value">{r.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export function ShadowGrid({ items }: { items: { token: string; value: string }[] }) {
  return (
    <div className="ks-swatch-grid">
      {items.map((sh) => (
        <div className="ks-swatch" key={sh.token} style={{ background: "var(--bg-raised)" }}>
          <div
            className="ks-swatch-chip"
            style={{
              background: "var(--bg-raised)",
              boxShadow: `var(${sh.token})`,
              margin: 16,
              height: 56,
              borderRadius: 6,
            }}
          />
          <div className="ks-swatch-meta">
            <div className="ks-swatch-name">{sh.token}</div>
            <div className="ks-swatch-value">{sh.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
