import Link from "next/link";
import { NAV, componentCount } from "@/lib/nav";
import { Marquee } from "@/components/showcase/marquee";

export default function HomePage() {
  return (
    <div className="ks-page-single">
      <section style={{ padding: "48px 0 32px", textAlign: "center" }}>
        <p className="kairoz-eyebrow" style={{ marginBottom: 21 }}>Kairoz · v0.2</p>
        <h1 className="kairoz-display" style={{ maxWidth: 1000, margin: "0 auto 21px", whiteSpace: "nowrap" }}>
          The shadcn for AI tooling.
        </h1>
        <p style={{ fontSize: 15, color: "var(--text-secondary)", lineHeight: 1.55, maxWidth: 560, margin: "0 auto 32px" }}>
          180+ design tokens and {componentCount()} component classes. Framework-agnostic.
          Build agent dashboards, mobile views, and landing pages with
          any stack — shadcn, Tailwind, React, Vue, or plain HTML.
        </p>
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          <Link href="/get-started" className="kairoz-btn-pill kairoz-btn-pill-primary">
            Get Started
          </Link>
          <Link href="/mockups/email" className="kairoz-btn-pill kairoz-btn-pill-secondary">
            Show mockups
          </Link>
        </div>
      </section>

      <div style={{ borderTop: "1px dashed var(--border-default)", borderBottom: "1px dashed var(--border-default)", padding: "14px 0", marginBottom: 32 }}>
        <Marquee
          duration={80}
          items={[
            <span key="a" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>AMOLED BLACK</span>,
            <span key="b" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="c" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>{componentCount()} COMPONENTS</span>,
            <span key="d" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="e" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>MULTI-SURFACE</span>,
            <span key="f" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="g" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>DARK + LIGHT</span>,
            <span key="h" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="i" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>FRAMEWORK-AGNOSTIC</span>,
            <span key="j" style={{ color: "var(--text-ghost)" }}>◆</span>,
            <span key="k" style={{ fontSize: 12, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.08em" }}>AGENT-READY</span>,
            <span key="l" style={{ color: "var(--text-ghost)" }}>◆</span>,
          ]}
        />
      </div>

      <section className="ks-meta-banner">
        <div className="ks-meta-banner-inner">
          <div className="ks-meta-banner-copy">
            <h2 className="ks-meta-banner-title">
              One skill.<br />One language.<br />One afternoon.
            </h2>
            <p className="ks-meta-banner-desc">
              Kairoz taught an agent its design language — then the agent built this entire site.
              Every component page, every mockup, generated from markdown rules and a single
              reference CSS file. Consistent output, nothing superfluous.
            </p>
            <div className="ks-meta-banner-actions">
              <Link href="/get-started" className="kairoz-btn-pill kairoz-btn-pill-primary">
                Start building →
              </Link>
              <a
                href="https://github.com/sujal7103/kairoz"
                target="_blank"
                rel="noopener noreferrer"
                className="kairoz-btn-pill kairoz-btn-pill-ghost"
              >
                View source →
              </a>
            </div>
          </div>
          <div className="ks-meta-banner-stats">
            <div className="ks-meta-banner-stat">
              <div className="ks-meta-banner-stat-head">
                <div className="ks-meta-banner-stat-value">55+</div>
                <div className="ks-meta-banner-stat-label">Pages</div>
              </div>
              <BannerEmailMini />
            </div>
            <div className="ks-meta-banner-stat">
              <div className="ks-meta-banner-stat-head">
                <div className="ks-meta-banner-stat-value">50+</div>
                <div className="ks-meta-banner-stat-label">Components</div>
              </div>
              <BannerComponentsMini />
            </div>
            <div className="ks-meta-banner-stat ks-meta-banner-stat-wide">
              <div className="ks-meta-banner-stat-head">
                <div className="ks-meta-banner-stat-value">5</div>
                <div className="ks-meta-banner-stat-label">Mockups</div>
              </div>
              <BannerMockupsMini />
            </div>
          </div>
        </div>
      </section>

      <section style={{ marginBottom: 24 }}>
        <h2 className="ks-section-title">Kairoz in action</h2>
        <p className="ks-section-desc">
          Live interface previews rendered from <code>.kairoz-*</code> classes. Every card is the real system —
          no mocks, no screenshots, nothing faked.
        </p>
      </section>

      <section className="ks-live-grid">
        <DeployMetricsCard />
        <CommandPaletteCard />
        <AlertCard />
        <ChatComposerCard />
        <SyncStatusesCard />
        <OnboardingStepperCard />
        <ToolCallCard />
        <TeamInviteCard />
        <NotificationsCard />
        <EnvVarCard />
        <FilterPaginationCard />
        <PlanSelectorCard />
        <ToastStackCard />
        <DeploymentsTableCard />
        <UploadProgressCard />
        <ConfirmDialogCard />
        <TabsCard />
        <FileListCard />
        <AccordionCard />
        <SkeletonCard />
        <SliderCard />
        <PopoverMenuCard />
        <EmptyStateCard />
        <ApiKeysCard />
        <WebhooksCard />
        <PresenceCard />
        <BreadcrumbCard />
        <KeyboardShortcutsCard />
        <QuotaCard />
        <TagPickerCard />
      </section>

      <section className="ks-section">
        <h2 className="ks-section-title">Patterns</h2>
        <p className="ks-section-desc">
          Proven layouts for multi-surface agent products. Ready to fork, built to adapt.
        </p>
        <div className="ks-tiles">
          {NAV.find((g) => g.label === "Patterns")?.items.map((item) => (
            <Link key={item.href} href={item.href} className="ks-tile">
              <div className="ks-tile-eyebrow">Pattern</div>
              <h3>{item.title}</h3>
              <p>Assembled from primitives — adapt at will.</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="ks-section">
        <h2 className="ks-section-title">Full mockups</h2>
        <p className="ks-section-desc">
          End-to-end application UIs built entirely from Kairoz primitives. No device frames,
          no static assets — every element is a live component.
        </p>
        <div className="ks-tiles">
          {MOCKUPS.map((m) => (
            <Link key={m.href} href={m.href} className="ks-tile">
              <div className="ks-tile-eyebrow">{m.tag}</div>
              <h3>{m.title}</h3>
              <p>{m.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const MOCKUPS = [
  { href: "/mockups/email", title: "Email client", tag: "Productivity", desc: "Three-pane inbox — folders, thread list, reader and composer. Tight, purposeful layout." },
  { href: "/mockups/ecommerce", title: "E-commerce", tag: "Retail", desc: "Product catalog with filter sidebar, responsive grid, and a sliding cart drawer." },
  { href: "/mockups/multi-agent", title: "Multi-agent", tag: "Agent UI", desc: "Parallel agents running in real time — status feeds, tool calls, generative cards." },
  { href: "/mockups/news", title: "News & polls", tag: "Media", desc: "Lead story, category feed, live polls, and a markets ticker in constant motion." },
  { href: "/mockups/stocks", title: "Stocks", tag: "Finance", desc: "Watchlist, live chart, level-2 order book, and a news rail ticking every 2 seconds." },
];

/* ---------- Meta banner illustrations ---------- */

function BannerEmailMini() {
  const rows = [
    { from: "Vercel", subject: "Deploy succeeded", time: "12:42", unread: true },
    { from: "GitHub", subject: "PR #217 needs review", time: "11:08", unread: true },
    { from: "Linear", subject: "3 issues assigned", time: "09:50" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border-subtle)" }}>
      {rows.map((e) => (
        <div key={e.from} style={{ display: "flex", gap: 6, alignItems: "flex-start" }}>
          <span
            className={e.unread ? "kairoz-dot kairoz-dot-info" : ""}
            style={{ width: 5, height: 5, marginTop: 5, flex: "none", background: e.unread ? undefined : "transparent" }}
          />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 6 }}>
              <span style={{ fontSize: 11, color: "var(--text-primary)", fontWeight: e.unread ? 600 : 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {e.from}
              </span>
              <span style={{ fontSize: 9, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", flex: "none" }}>{e.time}</span>
            </div>
            <div style={{ fontSize: 10, color: "var(--text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
              {e.subject}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BannerComponentsMini() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border-subtle)" }}>
      <div style={{ display: "flex", gap: 4 }}>
        <button className="kairoz-btn kairoz-btn-primary" style={{ height: 20, padding: "0 8px", fontSize: 10 }}>Ship it</button>
        <button className="kairoz-btn kairoz-btn-secondary" style={{ height: 20, padding: "0 8px", fontSize: 10 }}>Cancel</button>
      </div>
      <input className="kairoz-input" placeholder="Search…" style={{ height: 22, fontSize: 11, padding: "0 8px" }} readOnly />
      <div style={{ display: "flex", gap: 3, alignItems: "center", flexWrap: "wrap" }}>
        <span className="kairoz-badge kairoz-badge-success" style={{ fontSize: 8, padding: "1px 5px" }}>OK</span>
        <span className="kairoz-badge kairoz-badge-warning" style={{ fontSize: 8, padding: "1px 5px" }}>DRAFT</span>
        <span className="kairoz-badge kairoz-badge-error" style={{ fontSize: 8, padding: "1px 5px" }}>FAIL</span>
        <kbd className="kairoz-kbd" style={{ fontSize: 9, padding: "1px 4px", marginLeft: "auto" }}>⌘K</kbd>
      </div>
    </div>
  );
}

function BannerMockupsMini() {
  const items = [
    { name: "Email client", tag: "Productivity", href: "/mockups/email" },
    { name: "E-commerce", tag: "Retail", href: "/mockups/ecommerce" },
    { name: "Multi-agent", tag: "Agent UI", href: "/mockups/multi-agent" },
    { name: "News & polls", tag: "Media", href: "/mockups/news" },
    { name: "Stocks", tag: "Finance", href: "/mockups/stocks" },
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column", marginTop: 10, paddingTop: 10, borderTop: "1px solid var(--border-subtle)" }}>
      {items.map((m, i) => (
        <Link
          key={m.href}
          href={m.href}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "6px 0",
            borderTop: i === 0 ? "0" : "1px solid var(--border-subtle)",
            fontSize: 11,
            color: "var(--text-primary)",
            textDecoration: "none",
          }}
        >
          <span className="kairoz-dot kairoz-dot-primary" style={{ width: 4, height: 4, flex: "none" }} />
          <span style={{ flex: 1, fontWeight: 500 }}>{m.name}</span>
          <span style={{ fontSize: 9, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", letterSpacing: "0.04em", textTransform: "uppercase" }}>
            {m.tag}
          </span>
          <span style={{ color: "var(--text-tertiary)" }}>›</span>
        </Link>
      ))}
    </div>
  );
}

/* ---------- Live cards ---------- */

function DeployMetricsCard() {
  const stats = [
    { label: "REQUESTS", value: "12,847", delta: "+4.2%", up: true },
    { label: "P95", value: "42ms", delta: "-3ms", up: true },
    { label: "ERRORS", value: "12", delta: "-8.1%", up: true },
    { label: "UPTIME", value: "99.98%" },
  ];
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <span className="kairoz-dot kairoz-dot-success is-pulse" />
          <div className="ks-live-card-title">kairoz-edge · production</div>
        </div>
        <div className="ks-live-card-desc">Deployed 2m ago · main@a9f3b1</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
        {stats.map((s) => (
          <div key={s.label} style={{ border: "1px solid var(--border-default)", borderRadius: 6, padding: 10, background: "var(--bg-base)" }}>
            <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600 }}>{s.label}</div>
            <div style={{ fontSize: 20, fontFamily: "var(--font-mono)", fontWeight: 600, marginTop: 4 }}>{s.value}</div>
            {s.delta && (
              <div className={`kairoz-stat-delta ${s.up ? "is-up" : "is-down"}`} style={{ fontSize: 11, marginTop: 2 }}>
                {s.delta}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function CommandPaletteCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Command palette</div>
        <div className="ks-live-card-desc">Instant search and navigation across every surface</div>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        <div className="kairoz-command" style={{ borderRadius: 0, border: 0, boxShadow: "none" }}>
          <div className="kairoz-command-input-wrap">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-tertiary)" }}>
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input className="kairoz-command-input" placeholder="Type a command or search…" readOnly />
            <kbd className="kairoz-kbd">⌘K</kbd>
          </div>
          <div className="kairoz-command-group-label">Actions</div>
          <button className="kairoz-command-item is-active">
            New deployment
            <span className="kairoz-command-item-shortcut"><kbd className="kairoz-kbd">⌘N</kbd></span>
          </button>
          <button className="kairoz-command-item">
            Open logs
            <span className="kairoz-command-item-shortcut"><kbd className="kairoz-kbd">⌘L</kbd></span>
          </button>
          <div className="kairoz-command-group-label">Navigate</div>
          <button className="kairoz-command-item">Overview</button>
          <button className="kairoz-command-item">Deployments</button>
        </div>
      </div>
    </div>
  );
}

function AlertCard() {
  return (
    <div className="ks-live-card" style={{ padding: 12 }}>
      <div className="kairoz-alert kairoz-alert-error" style={{ margin: 0 }}>
        <div className="kairoz-alert-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="m15 9-6 6M9 9l6 6" />
          </svg>
        </div>
        <div className="kairoz-alert-desc">TypeError at line 42 of <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "rgba(244,71,71,0.08)", padding: "1px 5px", borderRadius: 3 }}>main.ts</code>. Missing env <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "rgba(244,71,71,0.08)", padding: "1px 5px", borderRadius: 3 }}>DATABASE_URL</code>.</div>
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
        <button className="kairoz-btn kairoz-btn-primary">Restore env</button>
        <button className="kairoz-btn kairoz-btn-ghost">Dismiss</button>
      </div>
    </div>
  );
}

function ChatComposerCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <div className="kairoz-avatar" style={{ width: 20, height: 20, fontSize: 10, background: "var(--accent-highlight-muted)", color: "var(--accent-highlight)" }}>A</div>
          <div className="ks-live-card-title">Diagnose production failure</div>
        </div>
        <div className="ks-live-card-desc">Agent · Claude Opus 4.7</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55 }}>
          The failure is at <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", padding: "1px 5px", borderRadius: 3, border: "1px solid var(--border-default)" }}>build.sh:42</code> — missing env var. Restoring it will re-enable <code style={{ fontFamily: "var(--font-mono)", fontSize: 11, background: "var(--bg-input)", padding: "1px 5px", borderRadius: 3, border: "1px solid var(--border-default)" }}>payment-api</code>.
        </div>
        <div style={{ display: "flex", gap: 6, alignItems: "center", padding: "6px 8px", background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 8 }}>
          <button className="kairoz-btn kairoz-btn-icon" aria-label="Attach">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M21.44 11.05 12.25 20.24a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48" />
            </svg>
          </button>
          <input className="kairoz-input" placeholder="Reply…" style={{ flex: 1, background: "transparent", border: 0, padding: 0, height: 26 }} readOnly />
          <kbd className="kairoz-kbd">⌘↵</kbd>
        </div>
        <div style={{ fontSize: 11, color: "var(--text-tertiary)", display: "flex", gap: 8 }}>
          <span>3 tools · </span>
          <span style={{ fontFamily: "var(--font-mono)" }}>7,824 / 128k ctx</span>
        </div>
      </div>
    </div>
  );
}

function SyncStatusesCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-eyebrow">Status pills</div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <span className="kairoz-pill kairoz-pill-active" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-info is-pulse" /> Syncing — 42%
        </span>
        <span className="kairoz-pill" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-warning is-pulse" /> Updating package lock
        </span>
        <span className="kairoz-pill" style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-success" /> Completed in 1m 14s
        </span>
      </div>
    </div>
  );
}

function OnboardingStepperCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">New project setup</div>
        <div className="ks-live-card-desc">Step 2 of 4 · Plan</div>
      </div>
      <div className="ks-live-card-body">
        <ol className="kairoz-stepper" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", alignItems: "center", gap: 6, fontSize: 11 }}>
          <li className="kairoz-stepper-step is-done" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Account</span></li>
          <li className="kairoz-stepper-sep" style={{ flex: 1, height: 1, background: "var(--border-default)" }} />
          <li className="kairoz-stepper-step is-active" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Plan</span></li>
          <li className="kairoz-stepper-sep" style={{ flex: 1, height: 1, background: "var(--border-default)" }} />
          <li className="kairoz-stepper-step" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Team</span></li>
          <li className="kairoz-stepper-sep" style={{ flex: 1, height: 1, background: "var(--border-default)" }} />
          <li className="kairoz-stepper-step" style={{ display: "flex", alignItems: "center", gap: 6 }}><span className="kairoz-stepper-dot" /><span className="kairoz-stepper-label">Deploy</span></li>
        </ol>
        <div style={{ display: "flex", gap: 6, marginTop: 14 }}>
          <button className="kairoz-btn kairoz-btn-ghost">Back</button>
          <button className="kairoz-btn kairoz-btn-primary" style={{ marginLeft: "auto" }}>Continue</button>
        </div>
      </div>
    </div>
  );
}

function ToolCallCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
          <span className="kairoz-dot kairoz-dot-info" />
          <div className="ks-live-card-title" style={{ fontFamily: "var(--font-mono)", fontSize: 12 }}>tool_call · fetch_deploy_logs</div>
        </div>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>0.8s</span>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        <pre style={{ margin: 0, padding: 12, fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-secondary)", background: "var(--bg-input)", overflow: "auto" }}>
{`{
  "deploy_id": "a9f3b1",
  "env": "prod",
  "lines": 2048,
  "status": "success"
}`}
        </pre>
      </div>
    </div>
  );
}

function TeamInviteCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-body" style={{ textAlign: "center", padding: 24 }}>
        <div className="kairoz-avatar-group" style={{ display: "inline-flex", marginBottom: 14 }}>
          <div className="kairoz-avatar" style={{ marginRight: -6 }}>AB</div>
          <div className="kairoz-avatar" style={{ marginRight: -6 }}>CD</div>
          <div className="kairoz-avatar" style={{ marginRight: -6 }}>EF</div>
          <div className="kairoz-avatar" style={{ background: "var(--bg-input)", color: "var(--text-secondary)" }}>+3</div>
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Invite collaborators</div>
        <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 14 }}>Grant access to the people who matter.</div>
        <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">+ Invite members</button>
      </div>
    </div>
  );
}

function NotificationsCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Notifications</div>
        <div className="ks-live-card-desc">Stay informed on deploys, agents, and escalations</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {[
          { label: "Deploy succeeded", on: true },
          { label: "Deploy failed", on: true },
          { label: "Agent escalated", on: true },
          { label: "Weekly digest", on: false },
        ].map((n) => (
          <label key={n.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 13, cursor: "pointer" }}>
            <span>{n.label}</span>
            <button className={`kairoz-switch${n.on ? " is-on" : ""}`} role="switch" aria-checked={n.on} />
          </label>
        ))}
      </div>
    </div>
  );
}

function EnvVarCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Environment variables</div>
        <div className="ks-live-card-desc">Secrets injected at build time</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div style={{ display: "flex", gap: 6 }}>
          <input className="kairoz-input" placeholder="KEY" style={{ flex: "0 0 38%", fontFamily: "var(--font-mono)", fontSize: 12 }} defaultValue="DATABASE_URL" />
          <input className="kairoz-input" placeholder="value" style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 12 }} defaultValue="postgres://…" />
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          <input className="kairoz-input" style={{ flex: "0 0 38%", fontFamily: "var(--font-mono)", fontSize: 12 }} defaultValue="STRIPE_KEY" />
          <input className="kairoz-input" style={{ flex: 1, fontFamily: "var(--font-mono)", fontSize: 12 }} defaultValue="sk_live_…" />
        </div>
        <button className="kairoz-btn kairoz-btn-secondary" style={{ alignSelf: "flex-start" }}>+ Add variable</button>
      </div>
    </div>
  );
}

function FilterPaginationCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-eyebrow">Filters · pagination</div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="kairoz-segmented">
          <button className="kairoz-segmented-item is-active">All</button>
          <button className="kairoz-segmented-item">Active</button>
          <button className="kairoz-segmented-item">Archived</button>
        </div>
        <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>
          <span className="kairoz-pill">Production</span>
          <span className="kairoz-pill kairoz-pill-active">us-east-1</span>
          <span className="kairoz-pill">claude-opus</span>
        </div>
        <nav className="kairoz-pagination">
          <button className="kairoz-pagination-item">‹</button>
          <button className="kairoz-pagination-item is-active">1</button>
          <button className="kairoz-pagination-item">2</button>
          <button className="kairoz-pagination-item">3</button>
          <span className="kairoz-pagination-ellipsis">…</span>
          <button className="kairoz-pagination-item">9</button>
          <button className="kairoz-pagination-item">›</button>
        </nav>
      </div>
    </div>
  );
}

function PlanSelectorCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Compute environment</div>
        <div className="ks-live-card-desc">Choose the right runtime for this cluster</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { id: "k8s", label: "Kubernetes", desc: "GPU workloads on a managed K8s cluster. Recommended.", selected: true },
          { id: "vm", label: "Virtual machine", desc: "Dedicated VM-backed cluster for full control.", selected: false },
        ].map((opt) => (
          <label key={opt.id} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: 10, border: `1px solid ${opt.selected ? "var(--border-strong)" : "var(--border-default)"}`, borderRadius: 6, cursor: "pointer", background: opt.selected ? "var(--bg-selected)" : "transparent" }}>
            <input type="radio" name="env-plan" className="kairoz-radio" defaultChecked={opt.selected} style={{ marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>{opt.label}</div>
              <div style={{ fontSize: 11, color: "var(--text-tertiary)", marginTop: 2 }}>{opt.desc}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
}

function ToastStackCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-eyebrow">Toast stack</div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <div className="kairoz-toast" style={{ width: "100%" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
            <span className="kairoz-dot kairoz-dot-success" />
            <div>
              Deploy landed
              <div className="kairoz-toast-desc">kairoz-edge built in 1.2s</div>
            </div>
          </span>
          <button className="kairoz-toast-close" aria-label="Dismiss">×</button>
        </div>
        <div className="kairoz-toast" style={{ width: "100%" }}>
          <span style={{ display: "flex", alignItems: "center", gap: 6, flex: 1 }}>
            <span className="kairoz-dot kairoz-dot-warning is-pulse" />
            <div>
              Rate limit closing in
              <div className="kairoz-toast-desc">92% of monthly quota consumed</div>
            </div>
          </span>
          <button className="kairoz-toast-close" aria-label="Dismiss">×</button>
        </div>
      </div>
    </div>
  );
}

function DeploymentsTableCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Recent deployments</div>
        <div className="ks-live-card-desc">Production and preview environments</div>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        <table className="kairoz-table" style={{ width: "100%", fontSize: 12 }}>
          <thead>
            <tr>
              <th style={{ paddingLeft: 14 }}>Build</th>
              <th>Env</th>
              <th className="num" style={{ paddingRight: 14 }}>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr><td style={{ fontFamily: "var(--font-mono)", paddingLeft: 14 }}>a9f3b1</td><td>prod</td><td className="num" style={{ paddingRight: 14 }}><span className="kairoz-badge kairoz-badge-success">OK</span></td></tr>
            <tr><td style={{ fontFamily: "var(--font-mono)", paddingLeft: 14 }}>cc02ae</td><td>prod</td><td className="num" style={{ paddingRight: 14 }}><span className="kairoz-badge kairoz-badge-success">OK</span></td></tr>
            <tr><td style={{ fontFamily: "var(--font-mono)", paddingLeft: 14 }}>7d21ee</td><td>preview</td><td className="num" style={{ paddingRight: 14 }}><span className="kairoz-badge kairoz-badge-warning">SLOW</span></td></tr>
            <tr><td style={{ fontFamily: "var(--font-mono)", paddingLeft: 14 }}>4b11cd</td><td>preview</td><td className="num" style={{ paddingRight: 14 }}><span className="kairoz-badge kairoz-badge-error">FAIL</span></td></tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function UploadProgressCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Upload · dataset.parquet</div>
        <div className="ks-live-card-desc">Multipart transfer in progress</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div className="kairoz-progress" style={{ height: 6 }}>
          <div className="kairoz-progress-bar" style={{ width: "68%" }} />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-tertiary)" }}>
          <span>68% · 3.4 MB/s</span>
          <span>218 MB / 320 MB</span>
        </div>
        <div style={{ display: "flex", gap: 6, marginTop: 4 }}>
          <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">Pause</button>
          <button className="kairoz-btn kairoz-btn-ghost kairoz-btn-sm">Cancel</button>
          <span style={{ flex: 1 }} />
          <span className="kairoz-badge kairoz-badge-info">ENCRYPTED</span>
        </div>
      </div>
    </div>
  );
}

function ConfirmDialogCard() {
  return (
    <div className="ks-live-card" style={{ background: "var(--bg-base)" }}>
      <div className="ks-live-card-eyebrow">Dialog · destructive</div>
      <div className="ks-live-card-body" style={{ padding: 16 }}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
          <div style={{ width: 32, height: 32, borderRadius: "50%", background: "var(--status-error-muted)", color: "var(--status-error)", display: "inline-flex", alignItems: "center", justifyContent: "center", flex: "none" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10" /><path d="M12 8v4m0 4h.01" /></svg>
          </div>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 2 }}>Delete project kairoz-edge?</div>
            <div style={{ fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.5 }}>
              This permanently removes <span style={{ fontFamily: "var(--font-mono)" }}>218</span> deployments, <span style={{ fontFamily: "var(--font-mono)" }}>12</span> domains, and revokes every API key. No reversal.
            </div>
          </div>
        </div>
        <div style={{ padding: 10, background: "var(--bg-raised)", border: "1px solid var(--border-default)", borderRadius: 4, marginBottom: 12 }}>
          <label style={{ display: "block", fontSize: 11, color: "var(--text-tertiary)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600, marginBottom: 4 }}>Type <span style={{ fontFamily: "var(--font-mono)", textTransform: "none", color: "var(--text-primary)" }}>kairoz-edge</span> to confirm</label>
          <input className="kairoz-input kairoz-input-sm" placeholder="kairoz-edge" style={{ width: "100%", fontFamily: "var(--font-mono)", fontSize: 11 }} />
        </div>
        <div style={{ display: "flex", gap: 6, justifyContent: "flex-end" }}>
          <button className="kairoz-btn kairoz-btn-ghost">Cancel</button>
          <button className="kairoz-btn kairoz-btn-destructive">Delete project</button>
        </div>
      </div>
    </div>
  );
}

function TabsCard() {
  return (
    <div className="ks-live-card">
      <div className="kairoz-tabbar" style={{ borderBottom: "1px solid var(--border-subtle)", paddingLeft: 14 }}>
        <button className="kairoz-tab is-active">Overview</button>
        <button className="kairoz-tab">Logs</button>
        <button className="kairoz-tab">Domains</button>
        <button className="kairoz-tab">Settings</button>
      </div>
      <div className="ks-live-card-body">
        <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 6 }}>Active deployment</div>
        <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 8 }}>main@a9f3b1</div>
        <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "4px 12px", fontSize: 12 }}>
          <span style={{ color: "var(--text-tertiary)" }}>Status</span><span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}><span className="kairoz-dot kairoz-dot-success" /> Ready</span>
          <span style={{ color: "var(--text-tertiary)" }}>Region</span><span style={{ fontFamily: "var(--font-mono)" }}>iad1 · sfo1</span>
          <span style={{ color: "var(--text-tertiary)" }}>Built</span><span>2m 14s ago</span>
        </div>
      </div>
    </div>
  );
}

function FileListCard() {
  const files = [
    { name: "app/page.tsx", changed: true },
    { name: "app/layout.tsx", selected: true },
    { name: "components/shell/titlebar.tsx", changed: true },
    { name: "components/command-palette.tsx" },
    { name: "lib/nav.ts", changed: true },
    { name: "public/kairoz.css" },
    { name: "package.json" },
    { name: "README.md" },
  ];
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Changed files · 4</div>
        <div className="ks-live-card-desc">Uncommitted changes on main</div>
      </div>
      <ul className="kairoz-list" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {files.map((f) => (
          <li key={f.name} className={`kairoz-list-item${f.selected ? " is-selected" : ""}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ color: "var(--text-tertiary)", flex: "none" }}>
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, flex: 1, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{f.name}</span>
            {f.changed && <span className="kairoz-badge kairoz-badge-warning" style={{ fontSize: 9, padding: "1px 5px" }}>M</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function AccordionCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-eyebrow">FAQ</div>
      <div className="kairoz-accordion" style={{ border: 0, borderRadius: 0, background: "transparent" }}>
        {[
          { q: "Is Kairoz framework-agnostic?", a: "Completely. Kairoz is a plain CSS file that works with any stack — Tailwind, React, Vue, Svelte, or raw HTML. No runtime, no lock-in.", open: true },
          { q: "Does it work with shadcn/ui?" },
          { q: "How do I theme it?" },
          { q: "Is there a Figma file?" },
        ].map((item, i) => (
          <div key={item.q} className={`kairoz-accordion-item${item.open ? " is-open" : ""}`} style={{ borderTop: i > 0 ? "1px solid var(--border-subtle)" : "0" }}>
            <button className="kairoz-accordion-trigger" style={{ padding: "10px 14px" }}>
              <span style={{ fontSize: 13 }}>{item.q}</span>
              <span className="kairoz-accordion-chev">›</span>
            </button>
            {item.open && item.a && (
              <div className="kairoz-accordion-content" style={{ padding: "0 14px 12px", fontSize: 12, color: "var(--text-secondary)", lineHeight: 1.55 }}>
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function SkeletonCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Loading state</div>
        <div className="ks-live-card-desc">Skeleton shimmer for anything over 300ms</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", gap: 10 }}>
          <div className="kairoz-skeleton" style={{ width: 36, height: 36, borderRadius: "50%", flex: "none" }} />
          <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 6, paddingTop: 4 }}>
            <div className="kairoz-skeleton" style={{ height: 10, width: "60%" }} />
            <div className="kairoz-skeleton" style={{ height: 10, width: "40%" }} />
          </div>
        </div>
        <div className="kairoz-skeleton" style={{ height: 10, width: "100%" }} />
        <div className="kairoz-skeleton" style={{ height: 10, width: "80%" }} />
        <div className="kairoz-skeleton" style={{ height: 10, width: "92%" }} />
      </div>
    </div>
  );
}

function SliderCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Rate limit</div>
        <div className="ks-live-card-desc">Per-key request threshold, tuned per minute</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
            <span style={{ fontSize: 11, color: "var(--text-tertiary)", textTransform: "uppercase", letterSpacing: "0.08em", fontWeight: 600 }}>Threshold</span>
            <span style={{ fontSize: 18, fontWeight: 600, fontFamily: "var(--font-mono)" }}>2,400 <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>rpm</span></span>
          </div>
          <div style={{ position: "relative", height: 18 }}>
            <div style={{ position: "absolute", top: "50%", left: 0, right: 0, height: 4, background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 2, transform: "translateY(-50%)" }}>
              <div style={{ width: "48%", height: "100%", background: "var(--accent-highlight)", borderRadius: 2 }} />
            </div>
            <div style={{ position: "absolute", left: "48%", top: "50%", transform: "translate(-50%, -50%)", width: 14, height: 14, background: "var(--text-primary)", border: "1px solid var(--accent-highlight)", borderRadius: 3, boxShadow: "0 0 0 3px var(--accent-highlight-muted)" }} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", marginTop: 6 }}>
            <span>100</span>
            <span>5,000 / min</span>
          </div>
        </div>
        <div style={{ display: "flex", gap: 4 }}>
          {["1m", "5m", "15m", "1h"].map((w, i) => (
            <button key={w} className={`kairoz-segmented-item${i === 1 ? " is-active" : ""}`} style={{ flex: 1, border: "1px solid var(--border-default)", borderRadius: 4 }}>{w}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

function PopoverMenuCard() {
  return (
    <div className="ks-live-card" style={{ padding: 14 }}>
      <div className="ks-live-card-eyebrow" style={{ padding: 0, marginBottom: 10 }}>Popover · context menu</div>
      <div className="kairoz-popover" style={{ width: "100%", position: "static", boxShadow: "var(--shadow-md)" }}>
        <button className="kairoz-menu-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
          Rename
          <span className="kairoz-command-item-shortcut" style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>⌘R</span>
        </button>
        <button className="kairoz-menu-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
          Duplicate
          <span className="kairoz-command-item-shortcut" style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>⌘D</span>
        </button>
        <button className="kairoz-menu-item">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          Move to…
        </button>
        <div className="kairoz-menu-separator"></div>
        <button className="kairoz-menu-item" style={{ color: "var(--status-error)" }}>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="3 6 5 6 21 6" /><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6" /></svg>
          Delete
          <span className="kairoz-command-item-shortcut" style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--status-error)", opacity: 0.7 }}>⌫</span>
        </button>
      </div>
    </div>
  );
}

function EmptyStateCard() {
  return (
    <div className="ks-live-card">
      <div className="kairoz-empty" style={{ padding: "32px 20px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <div className="kairoz-empty-icon" style={{ marginBottom: 12, color: "var(--text-tertiary)" }}>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        </div>
        <div className="kairoz-empty-title" style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Nothing to report</div>
        <div className="kairoz-empty-desc" style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 12, maxWidth: "30ch" }}>
          Zero security alerts in the past 24 hours. Agents, deploys, and keys are all healthy.
        </div>
        <button className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm">View audit log</button>
      </div>
    </div>
  );
}

function ApiKeysCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">API keys</div>
        <div className="ks-live-card-desc">Credentials bound to kairoz-edge</div>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        {[
          { name: "production", key: "sk_live_********8ra2", used: "12,847", ok: true },
          { name: "staging", key: "sk_test_********kf91", used: "3,201", ok: true },
          { name: "legacy-cron", key: "sk_live_********abc4", used: "—", ok: false },
        ].map((k) => (
          <div key={k.name} style={{ padding: "10px 14px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
            <span className={`kairoz-dot kairoz-dot-${k.ok ? "success" : "error"}`} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 500 }}>{k.name}</div>
              <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>{k.key}</div>
            </div>
            <div style={{ fontSize: 11, fontFamily: "var(--font-mono)", color: "var(--text-tertiary)" }}>{k.used}</div>
            <button className="kairoz-btn kairoz-btn-icon" aria-label="Copy" style={{ width: 24, height: 24 }}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
            </button>
          </div>
        ))}
      </div>
      <div className="ks-live-card-foot">
        <button className="kairoz-btn kairoz-btn-primary">+ New key</button>
      </div>
    </div>
  );
}

function WebhooksCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Webhooks</div>
        <div className="ks-live-card-desc">Event delivery over the last 7 days</div>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        {[
          { name: "deploy.succeeded", url: "https://slack.com/webhooks/T0…", status: "live", dot: "success" },
          { name: "deploy.failed", url: "https://pagerduty.com/events/…", status: "live", dot: "success" },
          { name: "agent.escalated", url: "https://api.kairoz.dev/v1/hook/…", status: "3 retries", dot: "warning" },
          { name: "build.timeout", url: "https://hooks.zapier.com/…", status: "disabled", dot: "primary" },
        ].map((w) => (
          <div key={w.name} style={{ padding: "10px 14px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", gap: 10 }}>
            <span className={`kairoz-dot kairoz-dot-${w.dot}${w.dot === "warning" ? " is-pulse" : ""}`} style={{ flex: "none" }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontFamily: "var(--font-mono)", fontWeight: 500 }}>{w.name}</div>
              <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{w.url}</div>
            </div>
            <span style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", flex: "none" }}>{w.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function PresenceCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Active on kairoz-edge</div>
        <div className="ks-live-card-desc">4 collaborators working right now</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <div className="kairoz-avatar-group" style={{ display: "inline-flex", alignSelf: "flex-start" }}>
          <div className="kairoz-avatar" style={{ marginRight: -6 }}>AD</div>
          <div className="kairoz-avatar" style={{ marginRight: -6, background: "var(--accent-highlight-muted)", color: "var(--accent-highlight)" }}>SK</div>
          <div className="kairoz-avatar" style={{ marginRight: -6, background: "var(--status-success-muted)", color: "var(--status-success)" }}>PM</div>
          <div className="kairoz-avatar" style={{ background: "var(--status-warning-muted)", color: "var(--status-warning)" }}>JT</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 12 }}>
          {[
            { name: "Adib", action: "editing app/page.tsx", dot: "success" },
            { name: "Saskia", action: "reviewing PR #217", dot: "info" },
            { name: "Paul", action: "in dashboard", dot: "success" },
            { name: "Jun", action: "idle · 4m", dot: "primary" },
          ].map((p) => (
            <div key={p.name} style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className={`kairoz-dot kairoz-dot-${p.dot}${p.dot !== "primary" ? " is-pulse" : ""}`} style={{ flex: "none" }} />
              <span style={{ fontWeight: 500, minWidth: 60 }}>{p.name}</span>
              <span style={{ color: "var(--text-tertiary)", fontSize: 11, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BreadcrumbCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-body">
        <nav className="kairoz-breadcrumb" style={{ fontSize: 12, display: "flex", gap: 6, alignItems: "center", marginBottom: 14 }}>
          <a href="#" style={{ color: "var(--text-tertiary)" }}>Projects</a>
          <span className="kairoz-breadcrumb-sep" style={{ color: "var(--text-ghost)" }}>/</span>
          <a href="#" style={{ color: "var(--text-tertiary)" }}>kairoz</a>
          <span className="kairoz-breadcrumb-sep" style={{ color: "var(--text-ghost)" }}>/</span>
          <a href="#" style={{ color: "var(--text-tertiary)" }}>edge</a>
          <span className="kairoz-breadcrumb-sep" style={{ color: "var(--text-ghost)" }}>/</span>
          <span className="kairoz-breadcrumb-current" style={{ color: "var(--text-primary)", fontWeight: 500 }}>Overview</span>
        </nav>
        <div style={{ fontSize: 18, fontWeight: 600, letterSpacing: "-0.015em", marginBottom: 4 }}>Overview</div>
        <div style={{ fontSize: 12, color: "var(--text-tertiary)", marginBottom: 14 }}>Production · main branch · 42ms p95</div>
        <div style={{ display: "flex", gap: 6 }}>
          <button className="kairoz-btn-pill kairoz-btn-pill-primary kairoz-btn-pill-sm">Deploy</button>
          <button className="kairoz-btn-pill kairoz-btn-pill-secondary kairoz-btn-pill-sm">View logs</button>
        </div>
      </div>
    </div>
  );
}

function KeyboardShortcutsCard() {
  const rows = [
    { action: "Open command palette", keys: ["⌘", "K"] },
    { action: "New file", keys: ["⌘", "N"] },
    { action: "Quick switcher", keys: ["⌘", "P"] },
    { action: "Toggle sidebar", keys: ["⌘", "B"] },
    { action: "Toggle theme", keys: ["⌘", "⇧", "L"] },
    { action: "Search in files", keys: ["⌘", "⇧", "F"] },
  ];
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Shortcuts</div>
        <div className="ks-live-card-desc">Keyboard commands for this context</div>
      </div>
      <div className="ks-live-card-body ks-live-card-body-flush">
        {rows.map((r) => (
          <div key={r.action} style={{ padding: "8px 14px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <span style={{ fontSize: 12, color: "var(--text-secondary)" }}>{r.action}</span>
            <span style={{ display: "inline-flex", gap: 3 }}>
              {r.keys.map((k) => (<kbd key={k} className="kairoz-kbd" style={{ fontSize: 10, padding: "1px 5px", minWidth: 18, textAlign: "center" }}>{k}</kbd>))}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

function QuotaCard() {
  const quotas = [
    { label: "API requests", used: 2840000, cap: 5000000, pct: 57, unit: "/ month" },
    { label: "Storage", used: 42, cap: 100, pct: 42, unit: "GB" },
    { label: "Agent hours", used: 182, cap: 200, pct: 91, unit: "hours", warn: true },
  ];
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Usage · November</div>
        <div className="ks-live-card-desc">Pro plan · 12 days until reset</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {quotas.map((q) => (
          <div key={q.label}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6, fontSize: 12 }}>
              <span style={{ color: "var(--text-secondary)" }}>{q.label}</span>
              <span style={{ fontFamily: "var(--font-mono)", color: q.warn ? "var(--status-warning)" : "var(--text-primary)" }}>
                {q.used.toLocaleString()} <span style={{ color: "var(--text-tertiary)" }}>{q.unit}</span>
              </span>
            </div>
            <div className="kairoz-progress" style={{ height: 4 }}>
              <div className="kairoz-progress-bar" style={{ width: `${q.pct}%`, background: q.warn ? "var(--status-warning)" : "var(--accent-primary)" }} />
            </div>
          </div>
        ))}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 4, paddingTop: 10, borderTop: "1px solid var(--border-subtle)" }}>
          <span style={{ fontSize: 11, color: "var(--text-tertiary)" }}>Resets Dec 1 · 00:00 UTC</span>
          <button className="kairoz-link" style={{ fontSize: 12, background: "transparent", border: 0, padding: 0, cursor: "pointer", fontFamily: "inherit" }}>Upgrade →</button>
        </div>
      </div>
    </div>
  );
}

function TagPickerCard() {
  return (
    <div className="ks-live-card">
      <div className="ks-live-card-head">
        <div className="ks-live-card-title">Tag issue</div>
        <div className="ks-live-card-desc">KAIROZ-217 · light-mode shadow refinement</div>
      </div>
      <div className="ks-live-card-body" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, padding: 8, background: "var(--bg-input)", border: "1px solid var(--border-default)", borderRadius: 6, minHeight: 44 }}>
          <span className="kairoz-pill kairoz-pill-active" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            design · ui <span style={{ marginLeft: 2, cursor: "pointer", color: "var(--text-tertiary)" }}>×</span>
          </span>
          <span className="kairoz-pill kairoz-pill-active" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            priority: high <span style={{ marginLeft: 2, cursor: "pointer", color: "var(--text-tertiary)" }}>×</span>
          </span>
          <span className="kairoz-pill kairoz-pill-active" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
            v0.2 <span style={{ marginLeft: 2, cursor: "pointer", color: "var(--text-tertiary)" }}>×</span>
          </span>
          <input placeholder="Add tag…" style={{ flex: 1, minWidth: 80, background: "transparent", border: 0, outline: 0, color: "var(--text-primary)", fontSize: 12, fontFamily: "inherit" }} />
        </div>
        <div>
          <div style={{ fontSize: 10, letterSpacing: "0.08em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 6 }}>Suggested</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
            {["accessibility", "theming", "css", "tokens", "bug", "regression"].map((s) => (
              <span key={s} className="kairoz-pill">+ {s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
