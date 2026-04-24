"use client";

import { useState } from "react";

const CATEGORIES = ["Top", "Politics", "Tech", "Business", "Science", "Culture", "Opinion"];

const STORIES = [
  { id: "s1", headline: "Federal Reserve holds rates steady, signals one more cut by year-end", author: "Reuters", time: "14m ago", cat: "Business", tone: "#2a2a3a", lead: true, summary: "The Federal Open Market Committee voted 10–2 to keep the target range unchanged at 4.50–4.75%, citing persistent services inflation offsetting a softening labor market." },
  { id: "s2", headline: "Largest open-source AI model yet released under Apache 2.0", author: "TechCrunch", time: "1h ago", cat: "Tech", tone: "#2a3a2a" },
  { id: "s3", headline: "Europe's grid interconnect project clears final regulatory hurdle", author: "Bloomberg", time: "2h ago", cat: "Business", tone: "#3a2a2a" },
  { id: "s4", headline: "Marine biologists discover 47 new deep-sea species near Mariana Trench", author: "Nature", time: "3h ago", cat: "Science", tone: "#2a3a3a" },
  { id: "s5", headline: "Dollar slides against yen as BOJ hints at faster tightening", author: "Financial Times", time: "4h ago", cat: "Business", tone: "#3a3a2a" },
  { id: "s6", headline: "Chip-equipment export rules tightened again, Tokyo response expected", author: "Nikkei Asia", time: "5h ago", cat: "Politics", tone: "#3a2a3a" },
  { id: "s7", headline: "New urbanist movement reshaping mid-size European cities", author: "The Guardian", time: "7h ago", cat: "Culture", tone: "#2a2a3a" },
  { id: "s8", headline: "Quantum error correction milestone passed by academic consortium", author: "Science Magazine", time: "9h ago", cat: "Science", tone: "#3a3a3a" },
];

function Icon({ paths, size = 14, stroke = 1.5 }: { paths: string; size?: number; stroke?: number }) {
  const parts = paths.split("|");
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {parts.map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",");
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

function Poll({ question, total, options }: { question: string; total: string; options: { label: string; pct: number; leading?: boolean }[] }) {
  return (
    <div className="kairoz-card">
      <div className="kairoz-card-header" style={{ display: "flex", justifyContent: "space-between" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-info is-pulse" />
          <span className="kairoz-panel-title">Live poll</span>
        </span>
        <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{total} votes</span>
      </div>
      <div className="kairoz-card-body" style={{ padding: 14 }}>
        <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 12, lineHeight: 1.45 }}>{question}</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {options.map((o) => (
            <div key={o.label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, marginBottom: 4 }}>
                <span style={{ color: o.leading ? "var(--text-primary)" : "var(--text-secondary)", fontWeight: o.leading ? 500 : 400 }}>{o.label}</span>
                <span style={{ fontFamily: "var(--font-mono)", color: o.leading ? "var(--accent-highlight)" : "var(--text-tertiary)" }}>{o.pct}%</span>
              </div>
              <div style={{ height: 6, background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 3 }}>
                <div style={{ width: `${o.pct}%`, height: "100%", background: o.leading ? "var(--accent-highlight)" : "var(--text-tertiary)", borderRadius: 3, transition: "width 180ms ease" }} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="kairoz-card-body" style={{ padding: 10, borderTop: "1px solid var(--border-subtle)", display: "flex", gap: 6, alignItems: "center" }}>
        <button className="kairoz-btn kairoz-btn-primary kairoz-btn-sm" style={{ flex: 1 }}>Vote now</button>
        <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">Skip</button>
      </div>
    </div>
  );
}

export default function NewsMockupPage() {
  const [cat, setCat] = useState("Top");
  const [lead, ...rest] = STORIES;

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-ui)", minHeight: "calc(100vh - 52px)" }}>
      {/* Breaking banner */}
      <div style={{ background: "var(--status-error-muted)", borderBottom: "1px solid var(--status-error)", padding: "8px 24px", display: "flex", alignItems: "center", gap: 10 }}>
        <span className="kairoz-badge kairoz-badge-error">BREAKING</span>
        <span style={{ fontSize: 13, color: "var(--text-primary)", flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          Senate passes bipartisan AI safety framework 84–15 · Rules take effect Q2 · Federal enforcement begins 2027
        </span>
        <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>Updated 4m ago</span>
      </div>

      {/* Masthead */}
      <header style={{ padding: "18px 32px 14px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--text-primary)" }} />
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>Kairoz Press</div>
            <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginTop: -2 }}>
              Tuesday · November 18 · 2026
            </div>
          </div>
        </div>
        <nav style={{ flex: 1, display: "flex", justifyContent: "center", gap: 4 }}>
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              style={{
                padding: "6px 12px",
                fontSize: 13,
                background: cat === c ? "var(--bg-selected)" : "transparent",
                border: 0,
                borderRadius: 6,
                color: cat === c ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "inherit",
                cursor: "pointer",
                fontWeight: cat === c ? 500 : 400,
              }}
            >
              {c}
            </button>
          ))}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Search"><Icon paths="circle:11,11,8|M21 21l-4.3-4.3" /></button>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Subscribe</button>
        </div>
      </header>

      {/* Body grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: 32, padding: "24px 32px 48px" }}>
        {/* Main feed */}
        <div>
          {/* Lead story */}
          <article style={{ marginBottom: 28, paddingBottom: 28, borderBottom: "1px dashed var(--border-default)" }}>
            <div
              className="kairoz-filmstrip"
              style={{
                aspectRatio: "16/7",
                borderRadius: 8,
                background: `linear-gradient(135deg, ${lead.tone} 0%, #0a0a0a 100%)`,
                marginBottom: 18,
                position: "relative",
              }}
            >
              <div style={{ position: "absolute", top: 14, left: 14, display: "flex", gap: 6 }}>
                <span className="kairoz-badge kairoz-badge-error">LIVE</span>
                <span className="kairoz-badge">{lead.cat.toUpperCase()}</span>
              </div>
            </div>
            <h1 className="kairoz-display" style={{ fontSize: 36, letterSpacing: "-0.025em", lineHeight: 1.1, fontWeight: 600, margin: "0 0 14px", maxWidth: 820 }}>
              {lead.headline}
            </h1>
            <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.6, margin: "0 0 16px", maxWidth: 780 }}>
              {lead.summary}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 12, color: "var(--text-tertiary)" }}>
              <div className="kairoz-avatar" style={{ width: 22, height: 22, fontSize: 10 }}>{lead.author.slice(0, 2).toUpperCase()}</div>
              <span>{lead.author}</span>
              <span>·</span>
              <span>{lead.time}</span>
              <span>·</span>
              <span>7 min read</span>
              <div style={{ flex: 1 }} />
              <button className="kairoz-btn kairoz-btn-icon" aria-label="Save"><Icon paths="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></button>
              <button className="kairoz-btn kairoz-btn-icon" aria-label="Share"><Icon paths="circle:18,5,3|circle:6,12,3|circle:18,19,3" /></button>
            </div>
          </article>

          {/* Secondary stories grid */}
          <section style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div className="kairoz-eyebrow">Top stories</div>
              <a href="#" className="kairoz-link" style={{ fontSize: 12 }}>See all →</a>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
              {rest.slice(0, 4).map((s) => (
                <article key={s.id} style={{ display: "flex", flexDirection: "column" }}>
                  <div
                    className="kairoz-filmstrip"
                    style={{
                      aspectRatio: "16/10",
                      borderRadius: 6,
                      background: `linear-gradient(135deg, ${s.tone} 0%, #0a0a0a 100%)`,
                      marginBottom: 10,
                    }}
                  />
                  <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 4 }}>{s.cat}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 600, margin: "0 0 6px", lineHeight: 1.3 }}>{s.headline}</h3>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{s.author} · {s.time}</div>
                </article>
              ))}
            </div>
          </section>

          {/* List stories */}
          <section>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 14 }}>
              <div className="kairoz-eyebrow">More from today</div>
              <a href="#" className="kairoz-link" style={{ fontSize: 12 }}>Catch up →</a>
            </div>
            {rest.slice(4).map((s) => (
              <article key={s.id} style={{ display: "grid", gridTemplateColumns: "140px 1fr auto", gap: 16, padding: "14px 0", borderTop: "1px solid var(--border-subtle)", alignItems: "center" }}>
                <div
                  className="kairoz-filmstrip"
                  style={{
                    aspectRatio: "16/10",
                    borderRadius: 4,
                    background: `linear-gradient(135deg, ${s.tone} 0%, #0a0a0a 100%)`,
                  }}
                />
                <div>
                  <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 4 }}>{s.cat}</div>
                  <h3 style={{ fontSize: 15, fontWeight: 500, margin: "0 0 4px", lineHeight: 1.35 }}>{s.headline}</h3>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{s.author} · {s.time}</div>
                </div>
                <button className="kairoz-btn kairoz-btn-icon" aria-label="Save"><Icon paths="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /></button>
              </article>
            ))}
          </section>
        </div>

        {/* Sidebar */}
        <aside style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          {/* Weather / Markets strip */}
          <div className="kairoz-card">
            <div className="kairoz-card-header">
              <span className="kairoz-panel-title">Markets · 16:04 EST</span>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--status-success)", fontFamily: "var(--font-mono)" }}>● OPEN</span>
            </div>
            <div className="kairoz-card-body" style={{ padding: 0 }}>
              {[
                { name: "S&P 500", value: "5,842.12", delta: "+0.42%", up: true },
                { name: "NASDAQ", value: "18,212.88", delta: "+0.68%", up: true },
                { name: "BTC", value: "$94,210", delta: "-1.24%", up: false },
                { name: "10Y Yield", value: "4.18%", delta: "+3 bp", up: true },
              ].map((r) => (
                <div key={r.name} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 14px", borderTop: "1px solid var(--border-subtle)", fontSize: 12 }}>
                  <span style={{ color: "var(--text-secondary)" }}>{r.name}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 500 }}>{r.value}</span>
                  <span style={{ fontFamily: "var(--font-mono)", color: r.up ? "var(--status-success)" : "var(--status-error)", fontSize: 11 }}>{r.delta}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Poll 1 */}
          <Poll
            question="Should the Fed cut rates once more before year-end?"
            total="12,482"
            options={[
              { label: "Yes — labor market needs it", pct: 48, leading: true },
              { label: "No — inflation still sticky", pct: 38 },
              { label: "Unsure", pct: 14 },
            ]}
          />

          {/* Poll 2 */}
          <Poll
            question="Which tech story matters most this quarter?"
            total="8,217"
            options={[
              { label: "AI safety framework passing", pct: 42, leading: true },
              { label: "Chip export rules", pct: 31 },
              { label: "Open-source model release", pct: 19 },
              { label: "Quantum error correction", pct: 8 },
            ]}
          />

          {/* Newsletter */}
          <div className="kairoz-card">
            <div className="kairoz-card-body" style={{ padding: 18 }}>
              <div className="kairoz-eyebrow" style={{ marginBottom: 10 }}>Newsletter</div>
              <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 6 }}>The Kairoz Briefing</div>
              <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5, marginBottom: 12 }}>
                Five stories. Five minutes. In your inbox at 6 AM Eastern, every weekday.
              </div>
              <input className="kairoz-input" placeholder="you@domain.com" style={{ width: "100%", marginBottom: 8 }} />
              <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm" style={{ width: "100%" }}>Subscribe →</button>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", marginTop: 8, textAlign: "center" }}>No spam · Unsubscribe anytime</div>
            </div>
          </div>

          {/* Most read */}
          <div className="kairoz-card">
            <div className="kairoz-card-header">
              <span className="kairoz-panel-title">Most read · today</span>
            </div>
            <div className="kairoz-card-body" style={{ padding: 0 }}>
              {[
                "Fed holds rates, signals cut",
                "New deep-sea species discovered",
                "Open-source AI model released",
                "Chip-equipment rules tighten",
                "Urbanist movement in Europe",
              ].map((h, i) => (
                <div key={h} style={{ display: "flex", gap: 12, padding: "10px 14px", borderTop: "1px solid var(--border-subtle)", fontSize: 12, alignItems: "flex-start" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontWeight: 600, color: "var(--text-tertiary)", fontSize: 11, width: 16, flex: "none" }}>0{i + 1}</span>
                  <span style={{ color: "var(--text-primary)", lineHeight: 1.4 }}>{h}</span>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
