import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { DeviceFrame } from "@/components/showcase/device-frame";

function AgentChatMock() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "260px 1fr", height: 620, background: "var(--bg-base)", color: "var(--text-primary)" }}>
      {/* Left rail — conversation history */}
      <aside style={{ borderRight: "1px solid var(--border-default)", display: "flex", flexDirection: "column" }}>
        <div style={{ padding: "12px 12px", borderBottom: "1px solid var(--border-default)" }}>
          <button className="kairoz-btn kairoz-btn-primary" style={{ width: "100%" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 5v14M5 12h14" />
            </svg>
            New chat
          </button>
        </div>
        <div style={{ padding: "12px 8px", overflowY: "auto", flex: 1 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, padding: "4px 8px" }}>Today</div>
          {[
            { title: "Debug prod deploy failure", active: true },
            { title: "Refactor agent router" },
            { title: "Generate test fixtures" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "8px 10px", borderRadius: 4, background: c.active ? "var(--bg-selected)" : "transparent", fontSize: 13, color: c.active ? "var(--text-primary)" : "var(--text-secondary)", marginBottom: 2, cursor: "pointer" }}>
              {c.title}
            </div>
          ))}
          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, padding: "16px 8px 4px" }}>Yesterday</div>
          {[
            { title: "Parse CSV from S3" },
            { title: "OpenAPI → zod schemas" },
            { title: "Fix CORS on edge route" },
          ].map((c, i) => (
            <div key={i} style={{ padding: "8px 10px", fontSize: 13, color: "var(--text-secondary)", cursor: "pointer" }}>{c.title}</div>
          ))}
        </div>
        <div style={{ padding: 12, borderTop: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 8 }}>
          <div className="kairoz-avatar">AD</div>
          <div style={{ flex: 1, fontSize: 12 }}>
            <div style={{ fontWeight: 500 }}>Adib</div>
            <div style={{ color: "var(--text-tertiary)", fontSize: 11 }}>Pro plan</div>
          </div>
        </div>
      </aside>

      {/* Main chat thread */}
      <main style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div className="kairoz-titlebar" style={{ borderBottom: "1px solid var(--border-default)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span className="kairoz-dot kairoz-dot-success is-pulse" />
            <span style={{ fontSize: 13, fontWeight: 500 }}>Debug prod deploy failure</span>
          </div>
          <div style={{ flex: 1 }} />
          <div style={{ display: "flex", gap: 6 }}>
            <span className="kairoz-badge kairoz-badge-info">claude-opus-4.7</span>
            <button className="kairoz-btn kairoz-btn-icon" aria-label="Settings">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24" />
              </svg>
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px" }}>
          {/* User turn */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 16 }}>
            <div style={{ maxWidth: "70%", padding: "10px 14px", background: "var(--bg-raised)", border: "1px solid var(--border-default)", borderRadius: 10, fontSize: 13, lineHeight: 1.55 }}>
              Prod deploy just failed — pull the logs and tell me what broke.
            </div>
          </div>

          {/* Assistant turn */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
              <div className="kairoz-avatar" style={{ background: "var(--accent-highlight-muted)", color: "var(--accent-highlight)", width: 22, height: 22, fontSize: 10 }}>A</div>
              <span style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>KAIROZ · 12:42:08</span>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>
              Pulling deployment logs now.
            </div>

            {/* Tool call card */}
            <div className="kairoz-card" style={{ marginBottom: 12 }}>
              <div className="kairoz-card-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="kairoz-dot kairoz-dot-info" />
                  <span className="kairoz-panel-title">tool_call · fetch_deploy_logs</span>
                </span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>0.8s</span>
              </div>
              <div className="kairoz-card-body" style={{ padding: 10, fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", color: "var(--text-secondary)" }}>
                {"{ deploy_id: \"a9f3b1\", env: \"prod\", lines: 2048 }"}
              </div>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", marginBottom: 12 }}>
              Failure traced to <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, background: "var(--bg-input)", padding: "1px 6px", borderRadius: 3, color: "var(--text-primary)", border: "1px solid var(--border-default)" }}>build.sh:42</code> — a missing env var <code style={{ fontFamily: "var(--font-mono)", fontSize: 12, background: "var(--bg-input)", padding: "1px 6px", borderRadius: 3, color: "var(--text-primary)", border: "1px solid var(--border-default)" }}>DATABASE_URL</code>.
              Per <a href="#" className="kairoz-link">the platform dashboard <sup style={{ color: "var(--accent-highlight)" }}>[1]</sup></a>, it was removed 4 minutes ago during staging cleanup.
            </div>

            <div className="kairoz-alert kairoz-alert-warning" style={{ marginBottom: 12 }}>
              <div className="kairoz-alert-icon">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z" />
                  <path d="M12 9v4m0 4h.01" />
                </svg>
              </div>
              <div className="kairoz-alert-title">Shared env var</div>
              <div className="kairoz-alert-desc">
                <code style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>DATABASE_URL</code> is referenced by 3 other services. Restoring it will re-enable <code style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>payment-api</code> and <code style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>inbox-worker</code>.
              </div>
            </div>

            <div style={{ display: "flex", gap: 6, marginTop: 8 }}>
              <button className="kairoz-btn kairoz-btn-primary">Restore env var</button>
              <button className="kairoz-btn kairoz-btn-secondary">Show full stacktrace</button>
              <button className="kairoz-btn kairoz-btn-ghost">Dismiss</button>
            </div>
          </div>

          {/* Citation footer */}
          <div style={{ marginTop: 32, paddingTop: 12, borderTop: "1px dashed var(--border-default)", display: "flex", gap: 8, fontSize: 11, color: "var(--text-tertiary)" }}>
            <span style={{ fontFamily: "var(--font-mono)", letterSpacing: "0.05em" }}>[1]</span>
            <a href="#" className="kairoz-link" style={{ fontSize: 11 }}>platform.example.com/env-vars</a>
          </div>
        </div>

        {/* Composer */}
        <div style={{ padding: 14, borderTop: "1px solid var(--border-default)", background: "var(--bg-base)" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "6px 8px", background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 8 }}>
            <button className="kairoz-btn kairoz-btn-icon" aria-label="Attach">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
              </svg>
            </button>
            <input
              className="kairoz-input"
              placeholder="Ask the agent…"
              style={{ flex: 1, background: "transparent", border: 0, padding: 0, height: 28 }}
              readOnly
            />
            <kbd className="kairoz-kbd">⌘↵</kbd>
            <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Send</button>
          </div>
          <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 6, display: "flex", gap: 10 }}>
            <span>3 tools available</span>
            <span>·</span>
            <span style={{ fontFamily: "var(--font-mono)" }}>7,824 ctx · 128k</span>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function AgentChatPatternPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="260px conversation rail · main thread · tool-call cards · citation footer · composer pinned to bottom."
          tokens={[".kairoz-card", ".kairoz-alert", ".kairoz-badge", ".kairoz-dot.is-pulse", ".kairoz-btn-pill"]}
          dos={[
            "Render tool calls as cards with a header and body, not raw JSON",
            "Surface the model name as a badge, not buried in metadata",
            "Cite sources inline with superscript + footer",
            "Pulse the status dot only while the agent is working",
          ]}
          donts={[
            "Don't render raw JSON without the card wrapper",
            "Don't use blue outside citations, focus, and the model badge",
            "Don't animate message arrival — render messages immediately",
          ]}
        />
      }
    >
      <PageHeader
        eyebrow="Patterns"
        title="Agent chat"
        subtitle="An agent console layout: conversation rail, user + assistant turns, tool-call cards, inline citations, composer with token meter. Shows how these components combine into a complete chat interface."
      />
      <Section title="Live preview" desc="Rendered inside .kairoz-device-desktop to show it as a full product view.">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <DeviceFrame variant="desktop" url="kairoz-live.vercel.app/chat">
            <AgentChatMock />
          </DeviceFrame>
        </div>
      </Section>
    </PageBody>
  );
}
