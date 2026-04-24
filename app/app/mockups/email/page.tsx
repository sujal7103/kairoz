"use client";

import { useState } from "react";

type Folder = { id: string; label: string; icon: string; count?: number };

const FOLDERS: Folder[] = [
  { id: "inbox", label: "Inbox", count: 4, icon: "M22 12h-6l-2 3h-4l-2-3H2|M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" },
  { id: "starred", label: "Starred", icon: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" },
  { id: "sent", label: "Sent", icon: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z" },
  { id: "drafts", label: "Drafts", count: 2, icon: "M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|polyline:14 2 14 8 20 8" },
  { id: "archive", label: "Archive", icon: "M21 8v13H3V8|M1 3h22v5H1zM10 12h4" },
  { id: "spam", label: "Spam", icon: "circle:12,12,10|M12 8v4|M12 16h.01" },
  { id: "trash", label: "Trash", icon: "polyline:3 6 5 6 21 6|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" },
];

type Email = {
  id: string;
  from: string;
  subject: string;
  preview: string;
  time: string;
  label: string;
  unread?: boolean;
};

const EMAILS: Email[] = [
  { id: "e1", from: "Vercel", subject: "Deploy succeeded — kairoz-edge", preview: "Your production deploy finished in 1m 24s. View logs →", time: "12:42", unread: true, label: "prod" },
  { id: "e2", from: "GitHub", subject: "PR #217 needs your review", preview: "feat(cache): add tag-based invalidation. Paul requested review …", time: "11:08", unread: true, label: "code" },
  { id: "e3", from: "Linear", subject: "3 new issues assigned to you", preview: "KAIROZ-42 light-mode shadows too strong · KAIROZ-43 collapsible sidebar …", time: "09:50", unread: true, label: "triage" },
  { id: "e4", from: "Stripe", subject: "Invoice paid — $24,182.00", preview: "Receipt for November billing period attached.", time: "08:14", unread: true, label: "finance" },
  { id: "e5", from: "Raycast", subject: "Weekly digest — your top 5 commands", preview: "1. ⌘K / 2. Open recent · 3. Switch window · 4. Toggle theme …", time: "Wed", label: "digest" },
  { id: "e6", from: "Cursor", subject: "New background agent mode", preview: "Long-running tasks can now execute without an editor tab open.", time: "Wed", label: "product" },
  { id: "e7", from: "1Password", subject: "New sign-in from San Francisco", preview: "Safari on macOS · 192.168.0.229 · today at 11:04", time: "Tue", label: "security" },
  { id: "e8", from: "Figma", subject: "Sarah commented on Kairoz v0.2 tokens", preview: "\"Tweaking the spacing scale to add a 6px? I see it in the ultra-compact cases…\"", time: "Mon", label: "design" },
  { id: "e9", from: "Notion", subject: "Q4 roadmap shared with you", preview: "Q4 planning doc · 12 sections · updated 2h ago", time: "Mon", label: "doc" },
  { id: "e10", from: "AWS", subject: "Cost anomaly detected — EC2", preview: "Spend up 34% over the trailing 7-day average in us-east-1.", time: "Nov 18", label: "alert" },
];

function Icon({ paths, size = 16, stroke = 1.5 }: { paths: string; size?: number; stroke?: number }) {
  const parts = paths.split("|");
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {parts.map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",");
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        if (p.startsWith("polyline:")) {
          return <polyline key={i} points={p.slice(9)} />;
        }
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

export default function EmailMockupPage() {
  const [folder, setFolder] = useState<string>("inbox");
  const [selectedId, setSelectedId] = useState<string>("e1");
  const selected = EMAILS.find((e) => e.id === selectedId) ?? EMAILS[0];

  return (
    <div style={{ display: "grid", gridTemplateColumns: "200px 360px 1fr", height: "calc(100vh - 52px)", background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-ui)" }}>
      {/* Folder rail */}
      <aside style={{ borderRight: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", padding: "0 12px", display: "flex", alignItems: "center", borderBottom: "1px solid var(--border-default)" }}>
          <button className="kairoz-btn kairoz-btn-primary" style={{ width: "100%" }}>
            <Icon paths="M12 5v14M5 12h14" /> Compose
          </button>
        </div>
        <nav style={{ padding: "4px 6px", flex: 1, overflowY: "auto" }}>
          {FOLDERS.map((f) => (
            <button
              key={f.id}
              onClick={() => setFolder(f.id)}
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "6px 10px",
                background: folder === f.id ? "var(--bg-selected)" : "transparent",
                border: 0,
                color: folder === f.id ? "var(--text-primary)" : "var(--text-secondary)",
                fontFamily: "inherit",
                fontSize: 13,
                borderRadius: 6,
                cursor: "pointer",
                marginBottom: 1,
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                <Icon paths={f.icon} size={14} />
                {f.label}
              </span>
              {f.count && (
                <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{f.count}</span>
              )}
            </button>
          ))}
          <div style={{ padding: "14px 10px 6px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Labels</div>
          {[
            { label: "Prod alerts", color: "var(--status-error)" },
            { label: "Client work", color: "var(--status-info)" },
            { label: "Personal", color: "var(--status-success)" },
            { label: "Newsletters", color: "var(--text-tertiary)" },
          ].map((l) => (
            <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "5px 10px", fontSize: 13, color: "var(--text-secondary)" }}>
              <span style={{ width: 8, height: 8, borderRadius: 2, background: l.color }} />
              {l.label}
            </div>
          ))}
        </nav>
        <div style={{ padding: 12, borderTop: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 8 }}>
          <div className="kairoz-avatar">AD</div>
          <div style={{ flex: 1, fontSize: 12 }}>
            <div style={{ fontWeight: 500 }}>Adib</div>
            <div style={{ color: "var(--text-tertiary)" }}>admin@antarys.ai</div>
          </div>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Settings">
            <Icon paths="circle:12,12,3|M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" size={14} />
          </button>
        </div>
      </aside>

      {/* List column */}
      <section style={{ borderRight: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", padding: "0 14px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ fontSize: 15, fontWeight: 600, flex: 1, color: "var(--text-primary)" }}>{FOLDERS.find((f) => f.id === folder)?.label}</div>
          <div className="kairoz-segmented">
            <button className="kairoz-segmented-item is-active">All</button>
            <button className="kairoz-segmented-item">Unread</button>
          </div>
        </div>
        <div style={{ padding: "10px 14px", borderBottom: "1px solid var(--border-subtle)" }}>
          <input className="kairoz-input" placeholder="Search mail…" style={{ width: "100%", height: 30, fontSize: 12 }} />
        </div>
        <div style={{ flex: 1, overflowY: "auto" }}>
          {EMAILS.map((e) => (
            <button
              key={e.id}
              onClick={() => setSelectedId(e.id)}
              style={{
                width: "100%",
                padding: "10px 14px",
                background: selectedId === e.id ? "var(--bg-selected)" : "transparent",
                border: 0,
                borderBottom: "1px solid var(--border-subtle)",
                borderLeft: selectedId === e.id ? "2px solid var(--accent-highlight)" : "2px solid transparent",
                fontFamily: "inherit",
                color: "var(--text-primary)",
                textAlign: "left",
                cursor: "pointer",
                display: "flex",
                gap: 10,
              }}
            >
              {e.unread ? <span className="kairoz-dot kairoz-dot-info" style={{ marginTop: 7, flex: "none" }} /> : <span style={{ width: 6, flex: "none" }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
                  <div style={{ fontSize: 13, fontWeight: e.unread ? 600 : 500, color: e.unread ? "var(--text-primary)" : "var(--text-secondary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.from}</div>
                  <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", flex: "none" }}>{e.time}</div>
                </div>
                <div style={{ fontSize: 12, fontWeight: e.unread ? 500 : 400, color: e.unread ? "var(--text-primary)" : "var(--text-secondary)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.subject}</div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.preview}</div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Reader */}
      <section style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", padding: "0 20px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 6 }}>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Back"><Icon paths="M19 12H5M12 19l-7-7 7-7" size={14} /></button>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Archive"><Icon paths="M21 8v13H3V8|M1 3h22v5H1zM10 12h4" size={14} /></button>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Spam"><Icon paths="circle:12,12,10|M12 8v4|M12 16h.01" size={14} /></button>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Trash"><Icon paths="polyline:3 6 5 6 21 6|M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" size={14} /></button>
          <span style={{ width: 1, height: 16, background: "var(--border-default)", margin: "0 4px" }} />
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Star"><Icon paths="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" size={14} /></button>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Label"><Icon paths="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z|M7 7h.01" size={14} /></button>
          <div style={{ flex: 1 }} />
          <span className="kairoz-badge">{selected.label.toUpperCase()}</span>
          <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>1 of {EMAILS.length}</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          <div style={{ marginBottom: 16 }}>
            <h1 style={{ fontSize: 22, fontWeight: 600, letterSpacing: "-0.02em", margin: "0 0 12px" }}>{selected.subject}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div className="kairoz-avatar">{selected.from.slice(0, 2).toUpperCase()}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{selected.from} <span style={{ color: "var(--text-tertiary)", fontWeight: 400 }}>&lt;noreply@{selected.from.toLowerCase()}.com&gt;</span></div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)" }}>to me · {selected.time} · 2h ago</div>
              </div>
              <button className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm">Reply</button>
              <button className="kairoz-btn-pill kairoz-btn-pill-ghost kairoz-btn-pill-sm">Forward</button>
            </div>
          </div>

          <div style={{ borderTop: "1px solid var(--border-subtle)", paddingTop: 20, fontSize: 14, lineHeight: 1.7, color: "var(--text-secondary)", maxWidth: 720 }}>
            <p style={{ margin: "0 0 12px" }}>Hey Adib,</p>
            <p style={{ margin: "0 0 12px" }}>
              Your production deployment of <code style={{ fontFamily: "var(--font-mono)", fontSize: 13, background: "var(--bg-input)", padding: "1px 6px", borderRadius: 3, border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>kairoz-edge</code> completed successfully. Build time: <strong>1m 24s</strong>. All 247 tests passed.
            </p>
            <p style={{ margin: "0 0 16px" }}>Key changes in this deploy:</p>
            <ul style={{ paddingLeft: 20, margin: "0 0 16px", color: "var(--text-secondary)" }}>
              <li>Cache invalidation now supports tag-based clearing</li>
              <li>P95 latency down from <span style={{ fontFamily: "var(--font-mono)" }}>54ms</span> to <span style={{ fontFamily: "var(--font-mono)" }}>42ms</span></li>
              <li>Legacy Redis fallback removed — saves ~$180/mo</li>
            </ul>

            <div className="kairoz-card" style={{ marginTop: 20 }}>
              <div className="kairoz-card-header">
                <span className="kairoz-dot kairoz-dot-success" />
                <span className="kairoz-panel-title">Deploy summary</span>
              </div>
              <div className="kairoz-card-body" style={{ padding: 12 }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "6px 16px", fontSize: 12 }}>
                  <span style={{ color: "var(--text-tertiary)" }}>Build</span><span style={{ fontFamily: "var(--font-mono)" }}>a9f3b1</span>
                  <span style={{ color: "var(--text-tertiary)" }}>Duration</span><span style={{ fontFamily: "var(--font-mono)" }}>1m 24s</span>
                  <span style={{ color: "var(--text-tertiary)" }}>Region</span><span style={{ fontFamily: "var(--font-mono)" }}>iad1 · sfo1 · fra1</span>
                  <span style={{ color: "var(--text-tertiary)" }}>Tests</span><span style={{ fontFamily: "var(--font-mono)" }}>247 passed / 0 failed</span>
                </div>
              </div>
            </div>

            <div style={{ display: "flex", gap: 8, marginTop: 20 }}>
              <button className="kairoz-btn-pill kairoz-btn-pill-primary">View deploy →</button>
              <button className="kairoz-btn-pill kairoz-btn-pill-secondary">Roll back</button>
            </div>

            <p style={{ margin: "24px 0 4px", color: "var(--text-tertiary)" }}>— The Vercel team</p>
          </div>
        </div>

        {/* Reply composer */}
        <div style={{ borderTop: "1px solid var(--border-default)", padding: 16, background: "var(--bg-raised)" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "flex-start", padding: "8px 10px", background: "var(--bg-base)", border: "1px solid var(--border-default)", borderRadius: 8 }}>
            <div className="kairoz-avatar" style={{ marginTop: 2 }}>AD</div>
            <input className="kairoz-input" placeholder={`Reply to ${selected.from}…`} style={{ flex: 1, background: "transparent", border: 0, padding: "4px 0", height: 28, fontSize: 13 }} readOnly />
            <button className="kairoz-btn kairoz-btn-icon" aria-label="Attach"><Icon paths="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" size={14} /></button>
            <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}
