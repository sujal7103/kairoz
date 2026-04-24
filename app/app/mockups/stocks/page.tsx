"use client";

import { Fragment, useEffect, useMemo, useRef, useState } from "react";

type Group = "Watchlist" | "Crypto" | "Indices";
type Ticker = {
  symbol: string;
  name: string;
  group: Group;
  price: number;
  open: number;
  high: number;
  low: number;
  prevClose: number;
  volume: number;
  marketCap?: string;
  pe?: number;
  yield?: number;
  high52: number;
  low52: number;
  series: number[];
};

const RANGES = ["1D", "1W", "1M", "3M", "6M", "1Y", "5Y"] as const;
type Range = (typeof RANGES)[number];

// Seeded random walk — reproducible without randomness on first paint
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

function buildSeries(points: number, seed: number, start: number, vol: number, trend: number): number[] {
  const rand = seededRandom(seed);
  const out: number[] = [start];
  for (let i = 1; i < points; i++) {
    const delta = (rand() - 0.5) * vol + trend;
    out.push(Math.max(0.01, out[i - 1] * (1 + delta / 100)));
  }
  return out;
}

const INITIAL: Ticker[] = [
  {
    symbol: "AAPL", name: "Apple Inc.", group: "Watchlist",
    price: 232.18, open: 230.12, high: 233.45, low: 229.14, prevClose: 228.76,
    volume: 42_814_230, marketCap: "3.52T", pe: 35.2, yield: 0.41,
    high52: 242.18, low52: 164.08,
    series: buildSeries(120, 17, 228, 0.6, 0.03),
  },
  {
    symbol: "MSFT", name: "Microsoft Corp.", group: "Watchlist",
    price: 448.21, open: 446.50, high: 450.12, low: 445.60, prevClose: 445.14,
    volume: 18_402_100, marketCap: "3.33T", pe: 36.4, yield: 0.67,
    high52: 468.35, low52: 309.45,
    series: buildSeries(120, 42, 444, 0.5, 0.04),
  },
  {
    symbol: "GOOGL", name: "Alphabet Inc.", group: "Watchlist",
    price: 192.42, open: 193.10, high: 194.20, low: 191.05, prevClose: 194.55,
    volume: 21_050_800, marketCap: "2.38T", pe: 25.6, yield: 0.21,
    high52: 207.05, low52: 131.55,
    series: buildSeries(120, 71, 195, 0.6, -0.03),
  },
  {
    symbol: "NVDA", name: "NVIDIA Corp.", group: "Watchlist",
    price: 144.86, open: 141.20, high: 145.60, low: 140.90, prevClose: 141.00,
    volume: 218_300_500, marketCap: "3.55T", pe: 68.9, yield: 0.02,
    high52: 152.88, low52: 47.32,
    series: buildSeries(120, 29, 140, 0.9, 0.08),
  },
  {
    symbol: "TSLA", name: "Tesla Inc.", group: "Watchlist",
    price: 328.14, open: 335.00, high: 336.20, low: 326.90, prevClose: 336.20,
    volume: 88_120_400, marketCap: "1.04T", pe: 112.5, yield: 0,
    high52: 414.50, low52: 138.80,
    series: buildSeries(120, 55, 338, 1.1, -0.10),
  },
  {
    symbol: "AMZN", name: "Amazon.com Inc.", group: "Watchlist",
    price: 211.72, open: 210.10, high: 212.50, low: 209.40, prevClose: 210.00,
    volume: 34_800_100, marketCap: "2.22T", pe: 47.3, yield: 0,
    high52: 215.80, low52: 151.61,
    series: buildSeries(120, 83, 209, 0.5, 0.02),
  },
  {
    symbol: "META", name: "Meta Platforms Inc.", group: "Watchlist",
    price: 572.88, open: 576.00, high: 579.40, low: 571.10, prevClose: 578.20,
    volume: 12_090_400, marketCap: "1.45T", pe: 28.7, yield: 0.36,
    high52: 602.95, low52: 343.42,
    series: buildSeries(120, 102, 578, 0.6, -0.03),
  },

  {
    symbol: "BTC-USD", name: "Bitcoin", group: "Crypto",
    price: 94_218.42, open: 93_410.00, high: 94_890.00, low: 93_100.00, prevClose: 93_512.20,
    volume: 28_450_000_000, marketCap: "1.86T",
    high52: 98_404.00, low52: 38_505.00,
    series: buildSeries(120, 201, 93400, 1.2, 0.02),
  },
  {
    symbol: "ETH-USD", name: "Ethereum", group: "Crypto",
    price: 3_342.18, open: 3_385.00, high: 3_410.00, low: 3_320.00, prevClose: 3_390.50,
    volume: 14_200_000_000, marketCap: "402.3B",
    high52: 4_090.50, low52: 1_520.30,
    series: buildSeries(120, 311, 3385, 1.4, -0.04),
  },
  {
    symbol: "SOL-USD", name: "Solana", group: "Crypto",
    price: 232.44, open: 228.10, high: 234.60, low: 227.00, prevClose: 227.80,
    volume: 3_820_000_000, marketCap: "109.8B",
    high52: 258.30, low52: 82.10,
    series: buildSeries(120, 411, 227, 1.5, 0.06),
  },

  {
    symbol: "SPY", name: "S&P 500 ETF", group: "Indices",
    price: 598.12, open: 596.80, high: 599.45, low: 595.50, prevClose: 595.80,
    volume: 42_200_100,
    high52: 606.42, low52: 435.32,
    series: buildSeries(120, 505, 596, 0.3, 0.02),
  },
  {
    symbol: "QQQ", name: "Nasdaq 100 ETF", group: "Indices",
    price: 518.40, open: 515.60, high: 519.80, low: 514.10, prevClose: 514.70,
    volume: 31_108_200,
    high52: 525.00, low52: 350.42,
    series: buildSeries(120, 611, 515, 0.4, 0.03),
  },
  {
    symbol: "DIA", name: "Dow Jones ETF", group: "Indices",
    price: 442.15, open: 440.20, high: 442.80, low: 439.50, prevClose: 440.00,
    volume: 3_540_200,
    high52: 448.90, low52: 340.42,
    series: buildSeries(120, 707, 440, 0.25, 0.02),
  },
];

function fmtPrice(v: number, digits = 2) {
  return v.toLocaleString("en-US", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  });
}

function fmtVolume(v: number) {
  if (v >= 1_000_000_000) return (v / 1_000_000_000).toFixed(2) + "B";
  if (v >= 1_000_000) return (v / 1_000_000).toFixed(2) + "M";
  if (v >= 1_000) return (v / 1_000).toFixed(1) + "K";
  return v.toString();
}

function Sparkline({ data, color, width = 64, height = 20 }: { data: number[]; color: string; width?: number; height?: number }) {
  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = width / (data.length - 1);
  const pts = data.map((v, i) => [i * step, height - ((v - min) / range) * height]);
  const d = "M" + pts.map((p) => p.join(",")).join("L");
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <path d={d} fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MainChart({ data, color, flashKey }: { data: number[]; color: string; flashKey: number }) {
  const width = 800;
  const height = 260;
  const pad = { t: 14, r: 50, b: 26, l: 12 };
  const plotW = width - pad.l - pad.r;
  const plotH = height - pad.t - pad.b;

  const min = Math.min(...data);
  const max = Math.max(...data);
  const range = max - min || 1;
  const step = plotW / (data.length - 1);
  const pts = data.map((v, i) => [pad.l + i * step, pad.t + plotH - ((v - min) / range) * plotH]);
  const linePath = "M" + pts.map((p) => p.join(",")).join("L");
  const areaPath = linePath + `L${pad.l + plotW},${pad.t + plotH}L${pad.l},${pad.t + plotH}Z`;

  // y-axis ticks (5 lines)
  const ticks = 5;
  const yTicks = Array.from({ length: ticks }).map((_, i) => {
    const t = i / (ticks - 1);
    const v = max - t * range;
    const y = pad.t + t * plotH;
    return { v, y };
  });

  // x-axis ticks (6 labels)
  const xLabels = ["09:30", "10:30", "11:30", "12:30", "13:30", "14:30"];

  const currentX = pts[pts.length - 1][0];
  const currentY = pts[pts.length - 1][1];

  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="auto" style={{ display: "block" }}>
      <defs>
        <linearGradient id={`chart-fill-${flashKey}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.22" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Grid lines */}
      {yTicks.map((t, i) => (
        <g key={i}>
          <line
            x1={pad.l}
            x2={pad.l + plotW}
            y1={t.y}
            y2={t.y}
            stroke="var(--border-subtle)"
            strokeDasharray="2 3"
            strokeWidth="0.6"
          />
          <text
            x={pad.l + plotW + 6}
            y={t.y + 3}
            fontSize="9"
            fill="var(--text-tertiary)"
            fontFamily="var(--font-mono)"
          >
            {fmtPrice(t.v, t.v > 1000 ? 0 : 2)}
          </text>
        </g>
      ))}

      {/* Area fill */}
      <path d={areaPath} fill={`url(#chart-fill-${flashKey})`} />

      {/* Line */}
      <path d={linePath} fill="none" stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />

      {/* Current-price marker */}
      <circle cx={currentX} cy={currentY} r="3" fill={color} />
      <circle cx={currentX} cy={currentY} r="3" fill={color} opacity="0.3">
        <animate attributeName="r" values="3;8;3" dur="1.8s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.4;0;0.4" dur="1.8s" repeatCount="indefinite" />
      </circle>

      {/* X-axis labels */}
      {xLabels.map((lbl, i) => (
        <text
          key={lbl}
          x={pad.l + (i / (xLabels.length - 1)) * plotW}
          y={height - 8}
          fontSize="9"
          fill="var(--text-tertiary)"
          fontFamily="var(--font-mono)"
          textAnchor="middle"
        >
          {lbl}
        </text>
      ))}
    </svg>
  );
}

function VolumeBars({ data, color }: { data: number[]; color: string }) {
  // Generate fake per-bar volume from the series deltas
  const count = 40;
  const stride = Math.floor(data.length / count) || 1;
  const bars: number[] = [];
  for (let i = 0; i < count; i++) {
    const a = data[i * stride] || data[data.length - 1];
    const b = data[Math.min((i + 1) * stride, data.length - 1)];
    bars.push(Math.abs(b - a));
  }
  const max = Math.max(...bars) || 1;
  return (
    <div style={{ display: "flex", alignItems: "flex-end", gap: 2, height: 40 }}>
      {bars.map((v, i) => (
        <div
          key={i}
          style={{
            flex: 1,
            height: `${Math.max(4, (v / max) * 100)}%`,
            background: color,
            opacity: 0.45,
            borderRadius: 1,
          }}
        />
      ))}
    </div>
  );
}

export default function StocksMockupPage() {
  const [tickers, setTickers] = useState<Ticker[]>(INITIAL);
  const [selected, setSelected] = useState<string>("AAPL");
  const [range, setRange] = useState<Range>("1D");
  const [flash, setFlash] = useState<Record<string, "up" | "down" | undefined>>({});
  const [clock, setClock] = useState<string>("—");
  const [updateCount, setUpdateCount] = useState(0);

  // Clock
  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
    setClock(fmt());
    const t = setInterval(() => setClock(fmt()), 1000);
    return () => clearInterval(t);
  }, []);

  // Live price updates — tick a handful of random tickers each interval
  const tickersRef = useRef(tickers);
  tickersRef.current = tickers;

  useEffect(() => {
    const iv = setInterval(() => {
      const prev = tickersRef.current;
      const next = prev.map((t) => ({ ...t }));
      const flashes: Record<string, "up" | "down"> = {};
      const howMany = 3 + Math.floor(Math.random() * 4);
      const picked = new Set<number>();
      while (picked.size < howMany && picked.size < next.length) {
        picked.add(Math.floor(Math.random() * next.length));
      }
      picked.forEach((idx) => {
        const t = next[idx];
        const deltaPct = (Math.random() - 0.5) * 0.12;
        const newPrice = Math.max(0.01, t.price * (1 + deltaPct / 100));
        flashes[t.symbol] = newPrice >= t.price ? "up" : "down";
        next[idx] = {
          ...t,
          price: newPrice,
          high: Math.max(t.high, newPrice),
          low: Math.min(t.low, newPrice),
          series: [...t.series.slice(1), newPrice],
        };
      });
      tickersRef.current = next;
      setTickers(next);
      setFlash(flashes);
      setUpdateCount((c) => c + 1);
      setTimeout(() => setFlash({}), 700);
    }, 2200);
    return () => clearInterval(iv);
  }, []);

  const active = useMemo(() => tickers.find((t) => t.symbol === selected) || tickers[0], [tickers, selected]);
  const groups = useMemo(() => {
    const out: Record<Group, Ticker[]> = { Watchlist: [], Crypto: [], Indices: [] };
    tickers.forEach((t) => out[t.group].push(t));
    return out;
  }, [tickers]);

  const activeChange = active.price - active.prevClose;
  const activeChangePct = (activeChange / active.prevClose) * 100;
  const activeUp = activeChange >= 0;
  const activeColor = activeUp ? "var(--status-success)" : "var(--status-error)";

  return (
    <div
      className="ks-stocks-shell"
      style={{
        height: "calc(100vh - 52px)",
        background: "var(--bg-base)",
        color: "var(--text-primary)",
        fontFamily: "var(--font-ui)",
      }}
    >
      {/* Header row */}
      <header
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 20px",
          borderBottom: "1px solid var(--border-default)",
          background: "var(--bg-base)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span
            className="kairoz-dot kairoz-dot-success is-pulse"
            style={{ flex: "none" }}
          />
          <div style={{ fontSize: 14, fontWeight: 600 }}>Kairoz Markets</div>
          <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
            · Tuesday, Nov 19
          </span>
        </div>

        <div className="kairoz-segmented" style={{ marginLeft: 8 }}>
          <button className="kairoz-segmented-item is-active">US</button>
          <button className="kairoz-segmented-item">EU</button>
          <button className="kairoz-segmented-item">ASIA</button>
          <button className="kairoz-segmented-item">Crypto</button>
        </div>

        <div style={{ flex: 1 }} />

        <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>
          <span>NYSE <span style={{ color: "var(--status-success)" }}>●</span> OPEN</span>
          <span>NASDAQ <span style={{ color: "var(--status-success)" }}>●</span> OPEN</span>
          <span>CRYPTO <span style={{ color: "var(--status-success)" }}>●</span> 24/7</span>
          <span style={{ color: "var(--text-primary)" }}>{clock} EST</span>
        </div>

        <span className="kairoz-badge kairoz-badge-info" style={{ marginLeft: 6 }}>LIVE</span>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="Refresh">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="23 4 23 10 17 10" />
            <polyline points="1 20 1 14 7 14" />
            <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
          </svg>
        </button>
      </header>

      {/* Watchlist rail */}
      <aside
        style={{
          gridColumn: "1",
          gridRow: "2",
          borderRight: "1px solid var(--border-default)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "10px 14px 6px", borderBottom: "1px solid var(--border-subtle)" }}>
          <input className="kairoz-input" placeholder="Search ticker…" style={{ width: "100%", fontSize: 12, height: 28 }} readOnly />
        </div>
        {(["Watchlist", "Crypto", "Indices"] as const).map((g) => (
          <div key={g}>
            <div
              style={{
                fontSize: 10,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-tertiary)",
                fontWeight: 600,
                padding: "10px 14px 4px",
              }}
            >
              {g}
            </div>
            {groups[g].map((t) => {
              const ch = t.price - t.prevClose;
              const chPct = (ch / t.prevClose) * 100;
              const up = ch >= 0;
              const color = up ? "var(--status-success)" : "var(--status-error)";
              const isActive = t.symbol === selected;
              const f = flash[t.symbol];
              return (
                <button
                  key={t.symbol}
                  onClick={() => setSelected(t.symbol)}
                  style={{
                    width: "100%",
                    display: "grid",
                    gridTemplateColumns: "1fr 70px 72px",
                    alignItems: "center",
                    gap: 8,
                    padding: "8px 14px",
                    background: isActive ? "var(--bg-selected)" : f === "up" ? "rgba(80, 227, 194, 0.06)" : f === "down" ? "rgba(244, 71, 71, 0.06)" : "transparent",
                    border: 0,
                    borderLeft: isActive ? "2px solid var(--accent-highlight)" : "2px solid transparent",
                    fontFamily: "inherit",
                    color: "var(--text-primary)",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background-color 500ms ease",
                  }}
                >
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 600, fontFamily: "var(--font-mono)" }}>{t.symbol}</div>
                    <div style={{ fontSize: 10, color: "var(--text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                      {t.name}
                    </div>
                  </div>
                  <Sparkline data={t.series.slice(-40)} color={color} width={60} height={20} />
                  <div style={{ textAlign: "right", fontFamily: "var(--font-mono)", fontSize: 11 }}>
                    <div style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                      {fmtPrice(t.price, t.price > 1000 ? 0 : 2)}
                    </div>
                    <div style={{ color, fontSize: 10 }}>
                      {up ? "+" : ""}{chPct.toFixed(2)}%
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ))}
      </aside>

      {/* Main chart */}
      <main
        className="ks-stocks-main"
        style={{
          gridColumn: "2",
          gridRow: "2",
          overflowY: "auto",
          overflowX: "hidden",
          padding: "20px 24px",
          display: "flex",
          flexDirection: "column",
          gap: 16,
          minWidth: 0,
        }}
      >
        {/* Header: symbol, price, change */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontSize: 22, fontWeight: 700, fontFamily: "var(--font-mono)", letterSpacing: "-0.01em" }}>
                {active.symbol}
              </span>
              <span style={{ fontSize: 13, color: "var(--text-tertiary)" }}>{active.name}</span>
              <span className="kairoz-badge" style={{ fontSize: 9 }}>{active.group.toUpperCase()}</span>
            </div>
            <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
              <div
                style={{
                  fontSize: 42,
                  fontFamily: "var(--font-mono)",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                  lineHeight: 1,
                  color: "var(--text-primary)",
                }}
              >
                ${fmtPrice(active.price, active.price > 1000 ? 0 : 2)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: 16, fontFamily: "var(--font-mono)", fontWeight: 600, color: activeColor }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {activeUp ? (
                    <>
                      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                      <polyline points="17 6 23 6 23 12" />
                    </>
                  ) : (
                    <>
                      <polyline points="23 18 13.5 8.5 8.5 13.5 1 6" />
                      <polyline points="17 18 23 18 23 12" />
                    </>
                  )}
                </svg>
                {activeUp ? "+" : ""}{fmtPrice(Math.abs(activeChange), 2)} ({activeUp ? "+" : ""}{activeChangePct.toFixed(2)}%)
              </div>
              <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                vs. prev close ${fmtPrice(active.prevClose, active.prevClose > 1000 ? 0 : 2)}
              </div>
            </div>
          </div>
          <div style={{ flex: 1 }} />
          <div className="kairoz-segmented">
            {RANGES.map((r) => (
              <button
                key={r}
                className={`kairoz-segmented-item${r === range ? " is-active" : ""}`}
                onClick={() => setRange(r)}
              >
                {r}
              </button>
            ))}
          </div>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Buy</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm">Sell</button>
        </div>

        {/* Chart card */}
        <div className="kairoz-card">
          <div className="kairoz-card-body" style={{ padding: "14px 14px 6px" }}>
            <MainChart data={active.series} color={activeColor} flashKey={updateCount % 1000} />
          </div>
          <div className="kairoz-card-body" style={{ padding: "0 14px 14px", borderTop: "1px solid var(--border-subtle)" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 0 6px" }}>
              <span style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>
                Volume · {range}
              </span>
              <span style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>
                {fmtVolume(active.volume)} shares
              </span>
            </div>
            <VolumeBars data={active.series} color={activeColor} />
          </div>
        </div>

        {/* Level 2 data — Bid/Ask mock */}
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: 12 }}>
          <div className="kairoz-card">
            <div className="kairoz-card-header">
              <span className="kairoz-dot kairoz-dot-success" />
              <span className="kairoz-panel-title">Bids</span>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                top 5
              </span>
            </div>
            <div className="kairoz-card-body" style={{ padding: 0 }}>
              {[0, 1, 2, 3, 4].map((i) => {
                const p = active.price - (i + 1) * 0.04;
                const qty = 100 + Math.floor(seededRandom(active.symbol.charCodeAt(0) + i * 7)() * 5000);
                const pct = (5 - i) * 20;
                return (
                  <div key={i} style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 14px", fontSize: 11, fontFamily: "var(--font-mono)", borderTop: i === 0 ? 0 : "1px solid var(--border-subtle)" }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(80, 227, 194, 0.06)", width: `${pct}%`, pointerEvents: "none" }} />
                    <span style={{ position: "relative", color: "var(--status-success)" }}>${fmtPrice(p, 2)}</span>
                    <span style={{ position: "relative", textAlign: "right", color: "var(--text-secondary)" }}>{qty.toLocaleString()}</span>
                    <span style={{ position: "relative", textAlign: "right", color: "var(--text-tertiary)" }}>{(qty * p / 1000).toFixed(1)}k</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="kairoz-card">
            <div className="kairoz-card-header">
              <span className="kairoz-dot kairoz-dot-error" />
              <span className="kairoz-panel-title">Asks</span>
              <span style={{ marginLeft: "auto", fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                top 5
              </span>
            </div>
            <div className="kairoz-card-body" style={{ padding: 0 }}>
              {[0, 1, 2, 3, 4].map((i) => {
                const p = active.price + (i + 1) * 0.04;
                const qty = 100 + Math.floor(seededRandom(active.symbol.charCodeAt(1) + i * 11)() * 5000);
                const pct = (5 - i) * 20;
                return (
                  <div key={i} style={{ position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", padding: "6px 14px", fontSize: 11, fontFamily: "var(--font-mono)", borderTop: i === 0 ? 0 : "1px solid var(--border-subtle)" }}>
                    <div style={{ position: "absolute", inset: 0, background: "rgba(244, 71, 71, 0.06)", width: `${pct}%`, pointerEvents: "none" }} />
                    <span style={{ position: "relative", color: "var(--status-error)" }}>${fmtPrice(p, 2)}</span>
                    <span style={{ position: "relative", textAlign: "right", color: "var(--text-secondary)" }}>{qty.toLocaleString()}</span>
                    <span style={{ position: "relative", textAlign: "right", color: "var(--text-tertiary)" }}>{(qty * p / 1000).toFixed(1)}k</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>

      {/* Right rail — statistics, news, related */}
      <aside
        style={{
          gridColumn: "3",
          gridRow: "2",
          borderLeft: "1px solid var(--border-default)",
          overflowY: "auto",
        }}
      >
        {/* Statistics */}
        <section style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="kairoz-eyebrow" style={{ marginBottom: 10 }}>Statistics</div>
          <dl style={{ display: "grid", gridTemplateColumns: "auto 1fr", rowGap: 6, columnGap: 12, margin: 0, fontSize: 12 }}>
            {(
              [
                ["Open", "$" + fmtPrice(active.open, 2)],
                ["High", "$" + fmtPrice(active.high, 2)],
                ["Low", "$" + fmtPrice(active.low, 2)],
                ["Prev close", "$" + fmtPrice(active.prevClose, 2)],
                ["Volume", fmtVolume(active.volume)],
                ...(active.marketCap ? [["Mkt cap", active.marketCap]] : []),
                ...(active.pe ? [["P/E ratio", active.pe.toFixed(1)]] : []),
                ...(active.yield !== undefined ? [["Yield", active.yield.toFixed(2) + "%"]] : []),
              ] as [string, string][]
            ).map(([k, v]) => (
              <Fragment key={k}>
                <dt style={{ color: "var(--text-tertiary)" }}>{k}</dt>
                <dd style={{ margin: 0, textAlign: "right", fontFamily: "var(--font-mono)", color: "var(--text-primary)" }}>{v}</dd>
              </Fragment>
            ))}
          </dl>
        </section>

        {/* 52-week range */}
        <section style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="kairoz-eyebrow" style={{ marginBottom: 10 }}>52-week range</div>
          <div style={{ position: "relative", height: 4, background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 2, marginBottom: 8 }}>
            <div
              style={{
                position: "absolute",
                top: -3,
                width: 10,
                height: 10,
                background: activeColor,
                borderRadius: "50%",
                boxShadow: "0 0 0 2px var(--bg-base)",
                left: `${Math.max(0, Math.min(100, ((active.price - active.low52) / (active.high52 - active.low52)) * 100)) - 5}%`,
              }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>
            <span>${fmtPrice(active.low52, active.low52 > 1000 ? 0 : 2)}</span>
            <span>${fmtPrice(active.high52, active.high52 > 1000 ? 0 : 2)}</span>
          </div>
        </section>

        {/* News */}
        <section style={{ padding: "14px 16px", borderBottom: "1px solid var(--border-subtle)" }}>
          <div className="kairoz-eyebrow" style={{ marginBottom: 10 }}>Latest news</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {[
              { time: "12m", src: "Bloomberg", title: `${active.symbol} closes lunch session with strong momentum` },
              { time: "1h", src: "Reuters", title: `Analysts upgrade ${active.name} price target` },
              { time: "3h", src: "CNBC", title: `Sector rotation lifts ${active.group.toLowerCase()} group` },
              { time: "Wed", src: "WSJ", title: `Institutional flow tilts bullish on ${active.symbol}` },
            ].map((n, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <div style={{ fontSize: 12, color: "var(--text-primary)", lineHeight: 1.35, fontWeight: 500 }}>{n.title}</div>
                <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
                  {n.src} · {n.time} ago
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Related */}
        <section style={{ padding: "14px 16px" }}>
          <div className="kairoz-eyebrow" style={{ marginBottom: 10 }}>Related</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {tickers
              .filter((t) => t.group === active.group && t.symbol !== active.symbol)
              .slice(0, 6)
              .map((t) => (
                <button
                  key={t.symbol}
                  onClick={() => setSelected(t.symbol)}
                  className="kairoz-pill"
                  style={{ cursor: "pointer", border: 0, fontFamily: "var(--font-mono)" }}
                >
                  {t.symbol}
                </button>
              ))}
          </div>
        </section>
      </aside>

      {/* Footer status bar */}
      <footer
        style={{
          gridColumn: "1 / -1",
          display: "flex",
          alignItems: "center",
          gap: 16,
          padding: "0 16px",
          borderTop: "1px solid var(--border-default)",
          fontSize: 11,
          color: "var(--text-tertiary)",
          fontFamily: "var(--font-mono)",
          background: "var(--bg-base)",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-success is-pulse" />
          Live · delayed 0s
        </span>
        <span>Updates: {updateCount}</span>
        <span>13 instruments</span>
        <span style={{ flex: 1 }} />
        <span>S&P 500 <span style={{ color: "var(--status-success)" }}>+0.39%</span></span>
        <span>NASDAQ <span style={{ color: "var(--status-success)" }}>+0.54%</span></span>
        <span>BTC <span style={{ color: "var(--status-success)" }}>+0.88%</span></span>
        <span>DXY <span style={{ color: "var(--status-error)" }}>-0.12%</span></span>
      </footer>
    </div>
  );
}
