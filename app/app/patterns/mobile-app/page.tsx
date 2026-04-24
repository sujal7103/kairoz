"use client";

import { useState } from "react";
import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { DeviceFrame } from "@/components/showcase/device-frame";

const TABS = [
  { id: "home", label: "Home", icon: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" },
  { id: "inbox", label: "Inbox", icon: "M22 12h-6l-2 3h-4l-2-3H2|M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" },
  { id: "stats", label: "Stats", icon: "M18 20V10M12 20V4M6 20v-6" },
  { id: "me", label: "Me", icon: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|circle:12,7,4" },
] as const;

type TabId = typeof TABS[number]["id"];

function TabIcon({ paths, stroke }: { paths: string; stroke: number }) {
  const parts = paths.split("|");
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
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

function MobileAppMock() {
  const [tab, setTab] = useState<TabId>("home");

  return (
    <>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 10px", borderBottom: "1px solid var(--border-default)", flex: "none" }}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>{TABS.find((t) => t.id === tab)?.label}</div>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="New">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {tab === "home" && (
          <div style={{ padding: "16px 16px 24px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
              <span className="kairoz-dot kairoz-dot-info is-pulse" />
              <span style={{ fontSize: 12, color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600 }}>Live · 3 agents</span>
            </div>
            {[
              { title: "deploy-watcher", status: "Ready", dot: "success", meta: "2m ago" },
              { title: "scraper-v3", status: "Running", dot: "warning", meta: "12s" },
              { title: "inbox-sync", status: "Ready", dot: "success", meta: "6m ago" },
              { title: "report-gen", status: "Failed", dot: "error", meta: "1h ago" },
            ].map((p) => (
              <div key={p.title} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", marginTop: 2 }}>{p.meta}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className={`kairoz-dot kairoz-dot-${p.dot}${p.dot === "warning" ? " is-pulse" : ""}`} />
                  <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{p.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "inbox" && (
          <div style={{ padding: "16px 16px 24px" }}>
            {[
              { title: "Deploy succeeded — kairoz-edge", time: "12:42", unread: true },
              { title: "Build failed — main@cc02ae", time: "11:08", unread: true },
              { title: "PR review requested", time: "09:22", unread: false },
            ].map((n) => (
              <div key={n.title} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
                  <div style={{ fontSize: 14, fontWeight: n.unread ? 600 : 400 }}>{n.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", flex: "none" }}>{n.time}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === "stats" && (
          <div style={{ padding: "16px 16px 24px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 10 }}>
              {[
                { label: "DEPLOYS", value: "1,284", delta: "+12%" },
                { label: "P95", value: "42ms", delta: "-3ms" },
                { label: "AGENTS", value: "7", delta: "+2" },
                { label: "UPTIME", value: "99.97%", delta: "stable" },
              ].map((s) => (
                <div key={s.label} style={{ border: "1px solid var(--border-default)", borderRadius: 6, padding: 12 }}>
                  <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>{s.label}</div>
                  <div style={{ fontSize: 22, fontFamily: "var(--font-mono)", fontWeight: 600, marginTop: 4 }}>{s.value}</div>
                  <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 2 }}>{s.delta}</div>
                </div>
              ))}
            </div>
            <div className="kairoz-filmstrip" style={{ height: 120, borderRadius: 6, border: "1px solid var(--border-default)", position: "relative" }}>
              <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-tertiary)", fontSize: 11 }}>Traffic · 24h</div>
            </div>
          </div>
        )}
        {tab === "me" && (
          <div style={{ padding: "24px 16px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
              <div className="kairoz-avatar" style={{ width: 48, height: 48, fontSize: 16 }}>AD</div>
              <div>
                <div style={{ fontSize: 16, fontWeight: 600 }}>Adib</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>admin@antarys.ai</div>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {["Appearance", "Notifications", "Connected accounts", "Billing", "Sign out"].map((l) => (
                <div key={l} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 14, display: "flex", justifyContent: "space-between" }}>
                  <span>{l}</span>
                  <span style={{ color: "var(--text-tertiary)" }}>›</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom tab bar */}
      <nav className="kairoz-tabbar-bottom">
        {TABS.map((t) => (
          <button
            key={t.id}
            className={`kairoz-tabbar-bottom-item${tab === t.id ? " is-active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            <TabIcon paths={t.icon} stroke={tab === t.id ? 2 : 1.5} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

export default function MobileAppPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="Top bar (48px) · scrollable content (flex: 1) · bottom tab bar (56px)."
          tokens={[".kairoz-tabbar-bottom", ".kairoz-btn-icon", ".kairoz-dot.is-pulse", ".kairoz-filmstrip"]}
          dos={["Use glass pills for floating controls over content", "Pulse dots only for live or in-progress status", "Tap tabs to switch — state is local, no routing"]}
          donts={["Don't hide the tab bar on scroll — keep orientation stable", "Don't nest more than one level of navigation"]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Mobile app"
        subtitle="Four mobile screens for agent monitoring. Bottom tabs, pulsing status dots, filmstrip chart placeholders. Tap to switch tabs -- all state is local, no routing."
      />
      <Section title="Live preview" desc="Rendered inside .kairoz-device-mobile at 75% scale to fit alongside the documentation.">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <div style={{ transform: "scale(0.75)", transformOrigin: "top center", marginBottom: -220 }}>
            <DeviceFrame variant="mobile">
              <MobileAppMock />
            </DeviceFrame>
          </div>
        </div>
      </Section>
    </PageBody>
  );
}
