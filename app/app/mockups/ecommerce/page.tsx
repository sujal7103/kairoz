"use client";

import { useState } from "react";

const PRODUCTS = [
  { id: "p1", name: "Aperture 02 Speakers", tag: "Audio", price: 849, oldPrice: 999, tone: "#3a3a3a", pct: 15 },
  { id: "p2", name: "Horizon Lounge Chair", tag: "Seating", price: 1240, tone: "#5a4a3a" },
  { id: "p3", name: "Orbit Desk Lamp", tag: "Lighting", price: 189, tone: "#2a2a2a" },
  { id: "p4", name: "Meridian Pendant", tag: "Lighting", price: 420, tone: "#4a3a2a" },
  { id: "p5", name: "Solstice Rug · 8×10", tag: "Textile", price: 780, oldPrice: 920, tone: "#3a2a2a", pct: 15 },
  { id: "p6", name: "Kairoz Side Table", tag: "Surfaces", price: 310, tone: "#2a2a3a", badge: "NEW" },
  { id: "p7", name: "Parallax Bookcase", tag: "Storage", price: 1680, tone: "#3a3a2a" },
  { id: "p8", name: "Nomad Throw", tag: "Textile", price: 140, tone: "#4a2a2a" },
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

function ProductTile({ p }: { p: (typeof PRODUCTS)[number] }) {
  return (
    <div style={{ border: "1px solid var(--border-default)", borderRadius: 8, overflow: "hidden", background: "var(--bg-raised)", display: "flex", flexDirection: "column" }}>
      <div
        className="kairoz-filmstrip"
        style={{
          aspectRatio: "4/3",
          background: `linear-gradient(135deg, ${p.tone} 0%, #0a0a0a 100%)`,
          position: "relative",
        }}
      >
        {p.badge && <span style={{ position: "absolute", top: 10, left: 10 }} className="kairoz-badge kairoz-badge-info">{p.badge}</span>}
        {p.pct && <span style={{ position: "absolute", top: 10, left: 10 }} className="kairoz-badge kairoz-badge-warning">-{p.pct}%</span>}
        <button className="kairoz-btn kairoz-btn-icon" style={{ position: "absolute", top: 10, right: 10, background: "rgba(10,10,10,0.6)", border: "1px solid rgba(255,255,255,0.08)" }} aria-label="Favorite">
          <Icon paths="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </button>
      </div>
      <div style={{ padding: 14 }}>
        <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 4 }}>{p.tag}</div>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 6, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 12 }}>
          <div style={{ fontSize: 16, fontWeight: 600, fontFamily: "var(--font-mono)" }}>${p.price.toLocaleString()}</div>
          {p.oldPrice && <div style={{ fontSize: 12, color: "var(--text-tertiary)", textDecoration: "line-through", fontFamily: "var(--font-mono)" }}>${p.oldPrice.toLocaleString()}</div>}
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm" style={{ flex: 1 }}>Add to cart</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm">View</button>
        </div>
      </div>
    </div>
  );
}

export default function EcommerceMockupPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <div style={{ background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-ui)", minHeight: "calc(100vh - 52px)" }}>
      {/* Top nav */}
      <header style={{ display: "flex", alignItems: "center", gap: 24, padding: "14px 32px", borderBottom: "1px solid var(--border-default)", position: "sticky", top: 0, background: "var(--bg-base)", zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontWeight: 600 }}>
          <span style={{ width: 12, height: 12, borderRadius: "50%", background: "var(--text-primary)" }} />
          Kairoz Home
        </div>
        <nav style={{ display: "flex", gap: 18, fontSize: 13, color: "var(--text-secondary)" }}>
          {["Seating", "Lighting", "Textile", "Storage", "Sale"].map((c, i) => (
            <a key={c} href="#" style={{ color: i === 4 ? "var(--status-error)" : "inherit" }}>{c}</a>
          ))}
        </nav>
        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <div style={{ width: "min(440px, 60%)", position: "relative" }}>
            <input className="kairoz-input" placeholder="Search products…" style={{ width: "100%", paddingLeft: 30 }} />
            <span style={{ position: "absolute", left: 9, top: "50%", transform: "translateY(-50%)", color: "var(--text-tertiary)" }}>
              <Icon paths="circle:11,11,8|M21 21l-4.3-4.3" />
            </span>
          </div>
        </div>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="Account"><Icon paths="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|circle:12,7,4" /></button>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="Favorites"><Icon paths="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></button>
        <button onClick={() => setCartOpen(!cartOpen)} className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm" style={{ gap: 6 }}>
          <Icon paths="circle:9,21,1|circle:20,21,1|M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
          Cart · 3
        </button>
      </header>

      {/* Hero */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", padding: "32px 32px 24px", gap: 24, alignItems: "stretch" }}>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <p className="kairoz-eyebrow" style={{ marginBottom: 14 }}>Winter collection · '26</p>
          <h1 className="kairoz-display" style={{ fontSize: 48, letterSpacing: "-0.03em", margin: "0 0 14px", maxWidth: 14 + "ch" }}>
            New arrivals for every room.
          </h1>
          <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.55, maxWidth: 540, margin: "0 0 20px" }}>
            Eight new pieces in solid oak, anodized aluminum, and woven wool.
            Durable materials, simple forms, ready to ship.
          </p>
          <div style={{ display: "flex", gap: 8 }}>
            <button className="kairoz-btn-pill kairoz-btn-pill-primary">Shop the collection</button>
            <button className="kairoz-btn-pill kairoz-btn-pill-ghost">Lookbook →</button>
          </div>
          <div style={{ display: "flex", gap: 20, marginTop: 28, fontSize: 12, color: "var(--text-tertiary)" }}>
            <span>✓ Free shipping over $250</span>
            <span>✓ 30-day returns</span>
            <span>✓ 10-year warranty</span>
          </div>
        </div>
        <div
          className="kairoz-filmstrip"
          style={{
            borderRadius: 10,
            background: "linear-gradient(135deg, #2a2a2a 0%, #0a0a0a 100%)",
            aspectRatio: "4/3",
            position: "relative",
          }}
        >
          <div style={{ position: "absolute", bottom: 16, left: 16, background: "rgba(10,10,10,0.75)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8, padding: "10px 14px", backdropFilter: "blur(4px)" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Featured</div>
            <div style={{ fontSize: 14, fontWeight: 500, marginTop: 2 }}>Horizon Lounge Chair</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", marginTop: 2, fontFamily: "var(--font-mono)" }}>$1,240</div>
          </div>
        </div>
      </section>

      <div style={{ borderTop: "1px solid var(--border-default)", display: "grid", gridTemplateColumns: "240px 1fr", padding: "0 32px 48px" }}>
        {/* Filter sidebar */}
        <aside style={{ position: "sticky", top: 80, alignSelf: "start", display: "flex", flexDirection: "column", gap: 18, borderRight: "1px solid var(--border-default)", padding: "24px 24px 24px 0", marginRight: 24 }}>
          <div>
            <div className="kairoz-eyebrow" style={{ marginBottom: 8 }}>Category</div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {[
                { label: "All", count: 42, active: true },
                { label: "Seating", count: 9 },
                { label: "Lighting", count: 12 },
                { label: "Textile", count: 8 },
                { label: "Surfaces", count: 7 },
                { label: "Storage", count: 6 },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", justifyContent: "space-between", padding: "4px 6px", fontSize: 13, color: c.active ? "var(--text-primary)" : "var(--text-secondary)", cursor: "pointer", background: c.active ? "var(--bg-selected)" : "transparent", borderRadius: 4 }}>
                  <span>{c.label}</span>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>{c.count}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="kairoz-eyebrow" style={{ marginBottom: 8 }}>Price</div>
            <div style={{ padding: "10px 6px" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 10 }}>
                <input className="kairoz-input kairoz-input-sm" placeholder="Min" defaultValue="$100" style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 11 }} />
                <input className="kairoz-input kairoz-input-sm" placeholder="Max" defaultValue="$2,000" style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 11 }} />
              </div>
              <div style={{ height: 4, background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 2, position: "relative" }}>
                <div style={{ position: "absolute", left: "12%", right: "20%", height: "100%", background: "var(--accent-highlight)", borderRadius: 2 }} />
              </div>
            </div>
          </div>
          <div>
            <div className="kairoz-eyebrow" style={{ marginBottom: 8 }}>Material</div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
              {["Oak", "Aluminum", "Linen", "Brass", "Wool", "Glass"].map((m, i) => (
                <span key={m} className={`kairoz-pill${i < 2 ? " kairoz-pill-active" : ""}`}>{m}</span>
              ))}
            </div>
          </div>
          <div>
            <div className="kairoz-eyebrow" style={{ marginBottom: 8 }}>In stock</div>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
              <input type="checkbox" className="kairoz-checkbox" defaultChecked /> Ready to ship
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginTop: 6 }}>
              <input type="checkbox" className="kairoz-checkbox" /> Made to order
            </label>
          </div>
          <button className="kairoz-btn kairoz-btn-ghost" style={{ justifyContent: "flex-start" }}>Clear filters</button>
        </aside>

        {/* Grid */}
        <div style={{ paddingTop: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 0 14px", borderBottom: "1px solid var(--border-default)", marginBottom: 18 }}>
            <div style={{ fontSize: 13, color: "var(--text-secondary)" }}>
              <span style={{ fontWeight: 500, color: "var(--text-primary)" }}>42 products</span> · Showing 8
            </div>
            <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
              <span style={{ fontSize: 12, color: "var(--text-tertiary)" }}>Sort</span>
              <div className="kairoz-segmented">
                <button className="kairoz-segmented-item is-active">Newest</button>
                <button className="kairoz-segmented-item">Price</button>
                <button className="kairoz-segmented-item">Popular</button>
              </div>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 14 }}>
            {PRODUCTS.map((p) => (
              <ProductTile key={p.id} p={p} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
            <nav className="kairoz-pagination">
              <button className="kairoz-pagination-item">‹</button>
              <button className="kairoz-pagination-item is-active">1</button>
              <button className="kairoz-pagination-item">2</button>
              <button className="kairoz-pagination-item">3</button>
              <button className="kairoz-pagination-item">4</button>
              <span className="kairoz-pagination-ellipsis">…</span>
              <button className="kairoz-pagination-item">8</button>
              <button className="kairoz-pagination-item">›</button>
            </nav>
          </div>
        </div>
      </div>

      {/* Cart drawer */}
      {cartOpen && (
        <div onClick={() => setCartOpen(false)} style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 40 }}>
          <aside onClick={(e) => e.stopPropagation()} style={{ position: "fixed", top: 0, right: 0, bottom: 0, width: 380, background: "var(--bg-base)", borderLeft: "1px solid var(--border-default)", display: "flex", flexDirection: "column", zIndex: 50 }}>
            <div style={{ padding: "16px 20px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ fontSize: 16, fontWeight: 600 }}>Your cart · 3</div>
              <button className="kairoz-btn kairoz-btn-icon" onClick={() => setCartOpen(false)} aria-label="Close"><Icon paths="M18 6 6 18M6 6l12 12" /></button>
            </div>
            <div style={{ flex: 1, overflowY: "auto", padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
              {PRODUCTS.slice(0, 3).map((p) => (
                <div key={p.id} style={{ display: "flex", gap: 10, padding: 10, border: "1px solid var(--border-default)", borderRadius: 6 }}>
                  <div className="kairoz-filmstrip" style={{ width: 54, height: 54, borderRadius: 4, background: `linear-gradient(135deg, ${p.tone} 0%, #0a0a0a 100%)`, flex: "none" }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.name}</div>
                    <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{p.tag}</div>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 6 }}>
                      <div className="kairoz-segmented" style={{ height: 22 }}>
                        <button className="kairoz-segmented-item" style={{ padding: "0 6px" }}>−</button>
                        <button className="kairoz-segmented-item is-active" style={{ padding: "0 8px" }}>1</button>
                        <button className="kairoz-segmented-item" style={{ padding: "0 6px" }}>+</button>
                      </div>
                      <div style={{ fontSize: 13, fontWeight: 500, fontFamily: "var(--font-mono)" }}>${p.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ padding: 16, borderTop: "1px solid var(--border-default)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)" }}>
                <span>Subtotal</span>
                <span style={{ fontFamily: "var(--font-mono)" }}>$2,278.00</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "var(--text-secondary)" }}>
                <span>Shipping</span>
                <span style={{ fontFamily: "var(--font-mono)" }}>Free</span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 15, fontWeight: 600 }}>
                <span>Total</span>
                <span style={{ fontFamily: "var(--font-mono)" }}>$2,278.00</span>
              </div>
              <button className="kairoz-btn-pill kairoz-btn-pill-primary">Checkout →</button>
            </div>
          </aside>
        </div>
      )}
    </div>
  );
}
