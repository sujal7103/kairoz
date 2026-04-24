export type SwatchItem = { name: string; value: string; display?: string };

export function SwatchGrid({ items }: { items: SwatchItem[] }) {
  return (
    <div className="ks-swatch-grid">
      {items.map((s) => (
        <div className="ks-swatch" key={s.name}>
          <div className="ks-swatch-chip">
            <div
              className="ks-swatch-chip-inner"
              style={{ background: s.display ?? `var(${s.name})` }}
            />
          </div>
          <div className="ks-swatch-meta">
            <div className="ks-swatch-name">{s.name}</div>
            <div className="ks-swatch-value">{s.value}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
