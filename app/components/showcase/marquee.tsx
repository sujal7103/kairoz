export function Marquee({
  items,
  duration = 60,
}: {
  items: React.ReactNode[];
  duration?: number;
}) {
  return (
    <div className="kairoz-marquee">
      <div
        className="kairoz-marquee-track"
        style={{ animationDuration: `${duration}s` }}
      >
        {[...items, ...items].map((item, i) => (
          <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
