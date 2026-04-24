"use client";

import { useState } from "react";

const AGENTS = [
  { id: "researcher", name: "Researcher", model: "claude-opus-4.7", status: "running", icon: "circle:11,11,8|M21 21l-4.3-4.3" },
  { id: "coder", name: "Coder", model: "claude-opus-4.7", status: "idle", icon: "polyline:16 18 22 12 16 6|polyline:8 6 2 12 8 18" },
  { id: "writer", name: "Writer", model: "claude-sonnet-4.6", status: "done", icon: "M12 20h9|M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" },
  { id: "reviewer", name: "Reviewer", model: "claude-haiku-4.5", status: "queued", icon: "M22 11.08V12a10 10 0 1 1-5.93-9.14|polyline:22 4 12 14.01 9 11.01" },
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
        if (p.startsWith("polyline:")) {
          return <polyline key={i} points={p.slice(9)} />;
        }
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

const STATUS_MAP: Record<string, { color: string; dot: string; pulse?: boolean }> = {
  running: { color: "var(--status-info)", dot: "kairoz-dot-info", pulse: true },
  idle: { color: "var(--text-tertiary)", dot: "kairoz-dot-primary" },
  done: { color: "var(--status-success)", dot: "kairoz-dot-success" },
  queued: { color: "var(--status-warning)", dot: "kairoz-dot-warning" },
};

export default function MultiAgentMockupPage() {
  const [selected, setSelected] = useState("researcher");

  return (
    <div style={{ display: "grid", gridTemplateColumns: "240px 1fr 320px", height: "calc(100vh - 52px)", background: "var(--bg-base)", color: "var(--text-primary)", fontFamily: "var(--font-ui)" }}>
      {/* Agents rail */}
      <aside style={{ borderRight: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", padding: "0 12px", display: "flex", alignItems: "center", borderBottom: "1px solid var(--border-default)" }}>
          <button className="kairoz-btn kairoz-btn-primary" style={{ width: "100%" }}>
            <Icon paths="M12 5v14M5 12h14" /> New agent
          </button>
        </div>
        <div style={{ padding: "12px 10px 6px", fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>Running · 4</div>
        <nav style={{ flex: 1, overflowY: "auto", padding: "0 6px" }}>
          {AGENTS.map((a) => {
            const s = STATUS_MAP[a.status];
            return (
              <button
                key={a.id}
                onClick={() => setSelected(a.id)}
                style={{
                  width: "100%",
                  padding: 10,
                  marginBottom: 4,
                  background: selected === a.id ? "var(--bg-selected)" : "transparent",
                  border: "1px solid",
                  borderColor: selected === a.id ? "var(--border-default)" : "transparent",
                  borderRadius: 6,
                  textAlign: "left",
                  cursor: "pointer",
                  fontFamily: "inherit",
                  color: "inherit",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 24, height: 24, borderRadius: 6, background: s.color, opacity: 0.15, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ color: s.color }}><Icon paths={a.icon} size={12} /></span>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 500 }}>{a.name}</span>
                  <span className={`kairoz-dot ${s.dot}${s.pulse ? " is-pulse" : ""}`} style={{ marginLeft: "auto" }} />
                </div>
                <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{a.model}</div>
                <div style={{ fontSize: 11, color: "var(--text-secondary)", marginTop: 4, textTransform: "capitalize" }}>{a.status} · 3 tools</div>
              </button>
            );
          })}
        </nav>
        <div style={{ height: 72, boxSizing: "border-box", padding: 12, borderTop: "1px solid var(--border-default)", flex: "none", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 6 }}>Usage · this session</div>
          <div className="kairoz-progress" style={{ marginBottom: 6 }}>
            <div className="kairoz-progress-bar" style={{ width: "58%" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>
            <span>74k / 128k tokens</span>
            <span>$0.42</span>
          </div>
        </div>
      </aside>

      {/* Thread */}
      <main style={{ display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", padding: "0 24px", borderBottom: "1px solid var(--border-default)", display: "flex", alignItems: "center", gap: 12 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: "var(--text-primary)" }}>Research Q4 infra spend anomaly</div>
            <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 2 }}>4 agents · 12 tool calls · elapsed 2m 14s</div>
          </div>
          <div style={{ flex: 1 }} />
          <span className="kairoz-badge kairoz-badge-info">LIVE</span>
          <button className="kairoz-btn kairoz-btn-secondary">Share</button>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="More"><Icon paths="circle:12,12,1|circle:19,12,1|circle:5,12,1" /></button>
        </div>

        <div style={{ flex: 1, overflowY: "auto", padding: "24px 32px" }}>
          {/* User turn */}
          <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 20 }}>
            <div style={{ maxWidth: "72%", padding: "10px 14px", background: "var(--bg-raised)", border: "1px solid var(--border-default)", borderRadius: 10, fontSize: 13, lineHeight: 1.55 }}>
              Our AWS bill spiked 34% this week in us-east-1. Break it down, find the root cause, and draft a remediation plan.
            </div>
          </div>

          {/* Researcher turn */}
          <AgentTurn name="Researcher" model="claude-opus-4.7" time="12:42:08" color="var(--status-info)" icon="circle:11,11,8|M21 21l-4.3-4.3">
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", margin: "0 0 12px" }}>Pulling cost explorer data. Fetching the weekly breakdown now.</p>

            <ToolCall name="fetch_aws_cost_explorer" args='{ "service": "ec2", "region": "us-east-1", "range": "7d" }' duration="1.2s" />

            {/* Generative UI — cost chart card */}
            <div className="kairoz-card" style={{ marginTop: 12 }}>
              <div className="kairoz-card-header">
                <span className="kairoz-dot kairoz-dot-warning" />
                <span className="kairoz-panel-title">EC2 spend · us-east-1 · 7d</span>
              </div>
              <div className="kairoz-card-body">
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 120, marginBottom: 10, padding: "8px 4px", borderBottom: "1px solid var(--border-subtle)" }}>
                  {[
                    { day: "Mon", pct: 36, value: "$1,420", over: false },
                    { day: "Tue", pct: 32, value: "$1,260", over: false },
                    { day: "Wed", pct: 34, value: "$1,340", over: false },
                    { day: "Thu", pct: 38, value: "$1,512", over: false },
                    { day: "Fri", pct: 58, value: "$2,308", over: true },
                    { day: "Sat", pct: 72, value: "$2,870", over: true },
                    { day: "Sun", pct: 88, value: "$3,498", over: true },
                  ].map((b, i) => (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 5, height: "100%", justifyContent: "flex-end" }}>
                      <span style={{ fontSize: 9, fontFamily: "var(--font-mono)", color: b.over ? "var(--status-warning)" : "var(--text-tertiary)", fontWeight: 600 }}>{b.value}</span>
                      <div
                        style={{
                          width: "100%",
                          height: `${b.pct}%`,
                          background: b.over ? "var(--status-warning)" : "var(--status-info)",
                          opacity: b.over ? 0.9 : 0.6,
                          borderRadius: "3px 3px 0 0",
                          minHeight: 6,
                        }}
                      />
                      <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", textTransform: "uppercase" }}>{b.day}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 8, fontSize: 11 }}>
                  <div><div style={{ color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 10, fontWeight: 600 }}>7d total</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 15, marginTop: 2 }}>$14,208</div></div>
                  <div><div style={{ color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 10, fontWeight: 600 }}>Delta</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 15, marginTop: 2, color: "var(--status-error)" }}>+34%</div></div>
                  <div><div style={{ color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: 10, fontWeight: 600 }}>Baseline</div><div style={{ fontFamily: "var(--font-mono)", fontWeight: 600, fontSize: 15, marginTop: 2 }}>$10,600</div></div>
                </div>
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", margin: "12px 0" }}>
              Spike began Friday. 82% of the increase traces to <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", padding: "1px 5px", borderRadius: 3, border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>c6g.8xlarge</code> instances. Handing off to Coder to scan recent infra commits.
            </p>
          </AgentTurn>

          {/* Coder turn */}
          <AgentTurn name="Coder" model="claude-opus-4.7" time="12:43:24" color="var(--status-info)" icon="polyline:16 18 22 12 16 6|polyline:8 6 2 12 8 18">
            <ToolCall name="git_log_scan" args='{ "repo": "infra", "since": "5d", "path": "terraform/ec2/" }' duration="0.6s" />

            {/* Generative UI — diff card */}
            <div className="kairoz-card" style={{ marginTop: 12 }}>
              <div className="kairoz-card-header" style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <span className="kairoz-dot kairoz-dot-error" />
                  <span className="kairoz-panel-title" style={{ fontFamily: "var(--font-mono)", fontSize: 11 }}>terraform/ec2/workers.tf</span>
                </span>
                <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>PR #842 · 3d ago</span>
              </div>
              <div className="kairoz-card-body ks-live-card-body-flush" style={{ padding: 0 }}>
                <pre style={{ margin: 0, padding: 12, fontFamily: "var(--font-mono)", fontSize: 11, lineHeight: 1.55, background: "var(--bg-input)", borderTop: "1px solid var(--border-subtle)" }}>
                  <div style={{ color: "var(--text-tertiary)" }}>  resource "aws_autoscaling_group" "workers" {'{'}</div>
                  <div style={{ color: "var(--status-error)" }}>-   min_size = 2</div>
                  <div style={{ color: "var(--status-success)" }}>+   min_size = 12</div>
                  <div style={{ color: "var(--status-error)" }}>-   max_size = 20</div>
                  <div style={{ color: "var(--status-success)" }}>+   max_size = 120</div>
                  <div style={{ color: "var(--text-tertiary)" }}>    instance_type = "c6g.8xlarge"</div>
                  <div style={{ color: "var(--text-tertiary)" }}>  {'}'}</div>
                </pre>
              </div>
            </div>

            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", margin: "12px 0" }}>
              Root cause identified. PR #842 bumped <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", padding: "1px 5px", borderRadius: 3, border: "1px solid var(--border-default)", color: "var(--text-primary)" }}>min_size</code> from 2 to 12 for a load test that was never rolled back. Over-provisioned ~10x during off-peak.
            </p>
          </AgentTurn>

          {/* Writer turn - with generative UI remediation plan */}
          <AgentTurn name="Writer" model="claude-sonnet-4.6" time="12:44:51" color="var(--status-success)" icon="M12 20h9|M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z">
            <p style={{ fontSize: 13, lineHeight: 1.6, color: "var(--text-secondary)", margin: "0 0 12px" }}>
              Remediation plan below. Three steps, sequenced to avoid disrupting the scheduled Friday load test.
            </p>

            <div className="kairoz-card">
              <div className="kairoz-card-header">
                <span className="kairoz-panel-title">Remediation plan</span>
              </div>
              <div className="kairoz-card-body" style={{ padding: 12 }}>
                <ol className="kairoz-stepper" style={{ listStyle: "none", padding: 0, margin: "0 0 12px", display: "flex", alignItems: "center", gap: 6, fontSize: 11 }}>
                  <li className="kairoz-stepper-step is-active" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Revert</span></li>
                  <li className="kairoz-stepper-sep" style={{ flex: 1, height: 1, background: "var(--border-default)" }} />
                  <li className="kairoz-stepper-step" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Guardrail</span></li>
                  <li className="kairoz-stepper-sep" style={{ flex: 1, height: 1, background: "var(--border-default)" }} />
                  <li className="kairoz-stepper-step" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Alert</span></li>
                </ol>
                <div style={{ display: "flex", flexDirection: "column", gap: 8, fontSize: 12 }}>
                  {[
                    { label: "Open revert PR for #842 (target min_size: 2)", est: "5m" },
                    { label: "Add budget alert at $12k/7d in cost-explorer", est: "10m" },
                    { label: "Wire scheduled Lambda to detect ASG drift > 20%", est: "45m" },
                  ].map((t) => (
                    <label key={t.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "6px 0" }}>
                      <input type="checkbox" className="kairoz-checkbox" />
                      <span style={{ flex: 1 }}>{t.label}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>{t.est}</span>
                    </label>
                  ))}
                </div>
                <div style={{ display: "flex", gap: 6, marginTop: 12 }}>
                  <button className="kairoz-btn kairoz-btn-primary">Open revert PR</button>
                  <button className="kairoz-btn kairoz-btn-secondary">Assign to Reviewer</button>
                </div>
              </div>
            </div>
          </AgentTurn>

          {/* Typing indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, padding: "12px 0", color: "var(--text-tertiary)", fontSize: 12 }}>
            <div style={{ width: 18, height: 18, borderRadius: 4, background: "rgba(80,227,194,0.15)", display: "inline-flex", alignItems: "center", justifyContent: "center", color: "var(--status-success)" }}>
              <Icon paths="M22 11.08V12a10 10 0 1 1-5.93-9.14|polyline:22 4 12 14.01 9 11.01" size={11} />
            </div>
            <span>Reviewer agent is generating its response…</span>
            <span className="kairoz-dot kairoz-dot-warning is-pulse" />
          </div>
        </div>

        {/* Composer */}
        <div style={{ height: 72, boxSizing: "border-box", padding: 14, borderTop: "1px solid var(--border-default)", background: "var(--bg-raised)", flex: "none", display: "flex", alignItems: "center" }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "6px 8px", background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 8, width: "100%" }}>
            <button className="kairoz-btn kairoz-btn-icon" aria-label="Attach"><Icon paths="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" /></button>
            <span className="kairoz-pill kairoz-pill-active" style={{ fontSize: 11 }}>@Researcher</span>
            <input className="kairoz-input" placeholder="Delegate to an agent…" style={{ flex: 1, background: "transparent", border: 0, padding: 0, height: 28 }} readOnly />
            <kbd className="kairoz-kbd">⌘↵</kbd>
            <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Send</button>
          </div>
        </div>
      </main>

      {/* Inspector */}
      <aside style={{ borderLeft: "1px solid var(--border-default)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
        <div style={{ height: 56, boxSizing: "border-box", borderBottom: "1px solid var(--border-default)", padding: "0 14px", display: "flex", alignItems: "center", gap: 6 }}>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Tool I/O</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-ghost kairoz-btn-pill-sm">Artifacts</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-ghost kairoz-btn-pill-sm">Citations</button>
        </div>
        <div style={{ flex: 1, overflowY: "auto", padding: 14 }}>
          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 10 }}>Recent tool calls</div>
          {[
            { name: "fetch_aws_cost_explorer", time: "12:42:08", ok: true, ms: "1.2s" },
            { name: "git_log_scan", time: "12:43:24", ok: true, ms: "0.6s" },
            { name: "run_tf_plan_dry", time: "12:44:02", ok: false, ms: "3.4s" },
            { name: "query_cloudwatch", time: "12:44:11", ok: true, ms: "0.8s" },
            { name: "draft_markdown_plan", time: "12:44:51", ok: true, ms: "1.1s" },
          ].map((t) => (
            <div key={t.time} style={{ padding: "8px 0", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 8 }}>
              <span className={`kairoz-dot kairoz-dot-${t.ok ? "success" : "error"}`} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t.name}</div>
                <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", marginTop: 2 }}>{t.time} · {t.ms}</div>
              </div>
            </div>
          ))}

          <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, margin: "20px 0 10px" }}>Artifacts</div>
          {[
            { name: "ec2-spend-chart.png", size: "34 KB" },
            { name: "remediation-plan.md", size: "2.1 KB" },
            { name: "pr-842-revert.diff", size: "0.8 KB" },
          ].map((a) => (
            <div key={a.name} style={{ padding: "8px 10px", border: "1px solid var(--border-default)", borderRadius: 4, marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
              <Icon paths="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z|polyline:14 2 14 8 20 8" size={13} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{a.name}</div>
                <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{a.size}</div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}

function AgentTurn({ name, model, time, color, icon, children }: { name: string; model: string; time: string; color: string; icon: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
        <div style={{ width: 22, height: 22, borderRadius: 6, background: color, opacity: 0.15, display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ color }}><Icon paths={icon} size={11} /></span>
        </div>
        <span style={{ fontSize: 13, fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{model}</span>
        <span style={{ fontSize: 10, color: "var(--text-ghost)", fontFamily: "var(--font-mono)", marginLeft: "auto" }}>{time}</span>
      </div>
      <div style={{ marginLeft: 30 }}>{children}</div>
    </div>
  );
}

function ToolCall({ name, args, duration }: { name: string; args: string; duration: string }) {
  return (
    <div className="kairoz-card" style={{ marginBottom: 10 }}>
      <div className="kairoz-card-header" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-info" />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-primary)" }}>{name}</span>
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>{duration}</span>
      </div>
      <div className="kairoz-card-body" style={{ padding: 10, fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", color: "var(--text-secondary)", borderTop: "1px solid var(--border-subtle)" }}>
        {args}
      </div>
    </div>
  );
}
