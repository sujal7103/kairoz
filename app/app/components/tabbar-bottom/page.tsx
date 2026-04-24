"use client";

import { useState } from "react";
import { PageHeader, Section, PageBody, Inspector } from "@/components/showcase/component-page";
import { CodeBlock } from "@/components/showcase/code-block";
import { DeviceFrame } from "@/components/showcase/device-frame";

const ICONS = {
  inbox: "M22 12h-6l-2 3h-4l-2-3H2",
  inbox2: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
  star: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",
  send: "M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z",
  archive: "M21 8v13H3V8|M1 3h22v5H1zM10 12h4",
  user: "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2|circle:12,7,4",
  home: "M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
  heart: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",
  play: "polygon:5,3 19,12 5,21",
  disc: "circle:12,12,10|circle:12,12,3",
  search: "circle:11,11,8|M21 21l-4.3-4.3",
  chart: "M18 20V10M12 20V4M6 20v-6",
};

function Icon({ paths, stroke = 1.5 }: { paths: string; stroke?: number }) {
  const parts = paths.split("|");
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round">
      {parts.map((p, i) => {
        if (p.startsWith("circle:")) {
          const [cx, cy, r] = p.slice(7).split(",");
          return <circle key={i} cx={cx} cy={cy} r={r} />;
        }
        if (p.startsWith("polygon:")) {
          return <polygon key={i} points={p.slice(8)} />;
        }
        return <path key={i} d={p} />;
      })}
    </svg>
  );
}

function EmailApp() {
  const [tab, setTab] = useState<string>("inbox");
  const tabs = [
    { id: "inbox", label: "Inbox", icon: `${ICONS.inbox}|${ICONS.inbox2}`, count: 3 },
    { id: "starred", label: "Starred", icon: ICONS.star },
    { id: "sent", label: "Sent", icon: ICONS.send },
    { id: "archive", label: "Archive", icon: ICONS.archive },
    { id: "me", label: "Me", icon: ICONS.user },
  ];

  const emails = [
    { from: "Vercel", subject: "Your deployment completed", preview: "kairoz-edge finished building in 1m 24s …", time: "12:42", unread: true },
    { from: "GitHub", subject: "PR #217 needs review", preview: "feat(cache): add tag-based invalidation …", time: "11:08", unread: true },
    { from: "Linear", subject: "3 new issues assigned", preview: "KAIROZ-42 · AMOLED light-mode shadows too strong", time: "09:50", unread: true },
    { from: "Stripe", subject: "Invoice paid — $24,182.00", preview: "Receipt for November billing period …", time: "08:14" },
    { from: "Raycast", subject: "Weekly digest", preview: "Your top 5 commands this week …", time: "Wed" },
    { from: "Cursor", subject: "New agent mode available", preview: "Background agents can now run longer tasks", time: "Tue" },
  ];

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 10px", borderBottom: "1px solid var(--border-default)", flex: "none" }}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>{tabs.find((t) => t.id === tab)?.label}</div>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="Compose">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {tab === "inbox" &&
          emails.map((e) => (
            <div key={e.subject} style={{ padding: "12px 16px", borderBottom: "1px solid var(--border-subtle)", display: "flex", gap: 12, alignItems: "flex-start" }}>
              {e.unread && <span className="kairoz-dot kairoz-dot-info" style={{ marginTop: 6, flex: "none" }} />}
              {!e.unread && <span style={{ width: 6, flex: "none" }} />}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 2 }}>
                  <div style={{ fontSize: 13, fontWeight: e.unread ? 600 : 500, color: "var(--text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.from}</div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", flex: "none" }}>{e.time}</div>
                </div>
                <div style={{ fontSize: 13, fontWeight: e.unread ? 500 : 400, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.subject}</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{e.preview}</div>
              </div>
            </div>
          ))}
        {tab === "starred" && (
          <div className="kairoz-empty" style={{ padding: 48 }}>
            <div className="kairoz-empty-icon">
              <Icon paths={ICONS.star} />
            </div>
            <div className="kairoz-empty-title">Nothing starred yet</div>
            <div className="kairoz-empty-desc">Tap the star on any email to pin it here.</div>
          </div>
        )}
        {tab === "sent" && (
          <div style={{ padding: 16, fontSize: 13, color: "var(--text-secondary)" }}>Sent mail…</div>
        )}
        {tab === "archive" && (
          <div style={{ padding: 16, fontSize: 13, color: "var(--text-secondary)" }}>Archived mail…</div>
        )}
        {tab === "me" && (
          <div style={{ padding: "24px 16px", display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className="kairoz-avatar" style={{ width: 44, height: 44, fontSize: 16 }}>AD</div>
              <div>
                <div style={{ fontSize: 15, fontWeight: 600 }}>Adib</div>
                <div style={{ fontSize: 12, color: "var(--text-tertiary)" }}>admin@antarys.ai</div>
              </div>
            </div>
            {["Notifications", "Signature", "Connected accounts", "Sign out"].map((x) => (
              <div key={x} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 14, display: "flex", justifyContent: "space-between" }}>
                <span>{x}</span>
                <span style={{ color: "var(--text-tertiary)" }}>›</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <nav className="kairoz-tabbar-bottom">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`kairoz-tabbar-bottom-item${tab === t.id ? " is-active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            <Icon paths={t.icon} stroke={tab === t.id ? 2 : 1.5} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

function MusicApp() {
  const [tab, setTab] = useState<string>("listen");
  const tabs = [
    { id: "listen", label: "Listen", icon: ICONS.home },
    { id: "search", label: "Search", icon: ICONS.search },
    { id: "library", label: "Library", icon: ICONS.disc },
    { id: "liked", label: "Liked", icon: ICONS.heart },
  ];

  const playlists = [
    { title: "Deep Focus", meta: "42 tracks · 2h 18m" },
    { title: "Late Night Drive", meta: "28 tracks · 1h 44m" },
    { title: "Ambient Mornings", meta: "61 tracks · 3h 22m" },
    { title: "Terminal Sounds", meta: "19 tracks · 58m" },
  ];

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px 10px", borderBottom: "1px solid var(--border-default)", flex: "none" }}>
        <div style={{ fontSize: 18, fontWeight: 600 }}>{tabs.find((t) => t.id === tab)?.label}</div>
        <button className="kairoz-btn kairoz-btn-icon" aria-label="Profile">
          <Icon paths={ICONS.user} />
        </button>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {tab === "listen" && (
          <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 10 }}>Now playing</div>
              <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <div className="kairoz-filmstrip" style={{ width: 64, height: 64, borderRadius: 6, background: "linear-gradient(135deg,#262626 0%,#0a0a0a 100%)", flex: "none" }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 14, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Weightless</div>
                  <div style={{ fontSize: 12, color: "var(--text-tertiary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>Marconi Union</div>
                  <div style={{ marginTop: 8 }}>
                    <div className="kairoz-progress" style={{ height: 3 }}>
                      <div className="kairoz-progress-bar" style={{ width: "34%" }} />
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 10, color: "var(--text-tertiary)" }}>
                      <span>2:42</span>
                      <span>8:10</span>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ display: "flex", justifyContent: "center", gap: 10, marginTop: 14 }}>
                <button className="kairoz-btn kairoz-btn-icon" aria-label="Previous">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20L9 12l10-8v16zM5 19V5h2v14H5z" /></svg>
                </button>
                <button className="kairoz-btn kairoz-btn-primary" style={{ borderRadius: 9999, width: 40, height: 40, padding: 0 }} aria-label="Pause">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z" /></svg>
                </button>
                <button className="kairoz-btn kairoz-btn-icon" aria-label="Next">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M5 4l10 8-10 8V4zm12 0h2v16h-2V4z" /></svg>
                </button>
              </div>
            </div>

            <div>
              <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, marginBottom: 10 }}>Made for you</div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
                {playlists.map((p) => (
                  <div key={p.title} style={{ padding: 10, border: "1px solid var(--border-default)", borderRadius: 6, background: "var(--bg-raised)" }}>
                    <div className="kairoz-filmstrip" style={{ aspectRatio: "1 / 1", borderRadius: 4, marginBottom: 8, background: "linear-gradient(135deg,#262626 0%,#0a0a0a 100%)" }} />
                    <div style={{ fontSize: 12, fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{p.title}</div>
                    <div style={{ fontSize: 10, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)", marginTop: 2 }}>{p.meta}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
        {tab === "search" && (
          <div style={{ padding: 16 }}>
            <input className="kairoz-input" placeholder="Artists, songs, albums…" style={{ width: "100%", height: 36, fontSize: 13 }} />
            <div style={{ fontSize: 10, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-tertiary)", fontWeight: 600, margin: "18px 0 10px" }}>Recent</div>
            {["Brian Eno", "Weightless", "Ambient 1", "Nujabes"].map((r) => (
              <div key={r} style={{ padding: "10px 0", borderBottom: "1px solid var(--border-subtle)", fontSize: 13 }}>{r}</div>
            ))}
          </div>
        )}
        {tab === "library" && (
          <div style={{ padding: 16 }}>
            {playlists.map((p) => (
              <div key={p.title} style={{ padding: "12px 0", borderBottom: "1px solid var(--border-subtle)", display: "flex", gap: 12, alignItems: "center" }}>
                <div className="kairoz-filmstrip" style={{ width: 44, height: 44, borderRadius: 4, background: "linear-gradient(135deg,#262626,#0a0a0a)", flex: "none" }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{p.title}</div>
                  <div style={{ fontSize: 11, color: "var(--text-tertiary)", fontFamily: "var(--font-mono)" }}>{p.meta}</div>
                </div>
                <span style={{ color: "var(--text-tertiary)" }}>›</span>
              </div>
            ))}
          </div>
        )}
        {tab === "liked" && (
          <div className="kairoz-empty" style={{ padding: 48 }}>
            <div className="kairoz-empty-icon"><Icon paths={ICONS.heart} /></div>
            <div className="kairoz-empty-title">No likes yet</div>
            <div className="kairoz-empty-desc">Hit the heart on any song to save it.</div>
          </div>
        )}
      </div>

      <nav className="kairoz-tabbar-bottom">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`kairoz-tabbar-bottom-item${tab === t.id ? " is-active" : ""}`}
            onClick={() => setTab(t.id)}
          >
            <Icon paths={t.icon} stroke={tab === t.id ? 2 : 1.5} />
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </>
  );
}

const snippet = `<nav class="kairoz-tabbar-bottom">
  <button class="kairoz-tabbar-bottom-item is-active">
    <svg>…</svg><span>Home</span>
  </button>
  <button class="kairoz-tabbar-bottom-item">
    <svg>…</svg><span>Inbox</span>
  </button>
  <button class="kairoz-tabbar-bottom-item">
    <svg>…</svg><span>Me</span>
  </button>
</nav>`;

export default function TabbarBottomPage() {
  return (
    <PageBody
      inspector={
        <Inspector
          anatomy="56px tall · 5-slot · 20px icons (1.5px stroke, 2px on active) · 10px labels · sticky bottom."
          tokens={["--bg-base", "--border-default", "--text-primary", "--text-tertiary"]}
          dos={["Keep to 5 tabs max", "Label every tab — icons alone aren't enough", "Preserve tab order across releases"]}
          donts={["Don't use on desktop — use .kairoz-sidebar nav", "Don't hide the tab bar on scroll"]}
        />
      }
    >
      <PageHeader
        eyebrow=".kairoz-tabbar-bottom"
        title="Mobile bottom tab bar"
        subtitle="56px bottom navigation bar for mobile layouts. Five slots with 20px icons and 10px labels. Active tab uses brighter fill and heavier stroke weight."
        meta={[".kairoz-tabbar-bottom", ".kairoz-tabbar-bottom-item", ".is-active"]}
      />

      <Section title="Isolated" desc="The bar at actual size, outside a device frame, so every pixel of the design is visible.">
        <div className="ks-preview ks-preview-block" style={{ padding: 0 }}>
          <div style={{ width: "100%", maxWidth: 440, margin: "0 auto" }}>
            <nav className="kairoz-tabbar-bottom" style={{ borderTop: "1px solid var(--border-default)", borderBottom: "1px solid var(--border-default)" }}>
              <button className="kairoz-tabbar-bottom-item is-active">
                <Icon paths={ICONS.home} stroke={2} />
                <span>Home</span>
              </button>
              <button className="kairoz-tabbar-bottom-item">
                <Icon paths={`${ICONS.inbox}|${ICONS.inbox2}`} />
                <span>Inbox</span>
              </button>
              <button className="kairoz-tabbar-bottom-item">
                <Icon paths={ICONS.search} />
                <span>Search</span>
              </button>
              <button className="kairoz-tabbar-bottom-item">
                <Icon paths={ICONS.chart} />
                <span>Stats</span>
              </button>
              <button className="kairoz-tabbar-bottom-item">
                <Icon paths={ICONS.user} />
                <span>Me</span>
              </button>
            </nav>
          </div>
        </div>
        <CodeBlock code={snippet} />
      </Section>

      <Section title="Live -- Email client" desc="Five-tab mail app: Inbox, Starred, Sent, Archive, Me. Tap to switch. The tab bar anchors the bottom while a compose button sits in the header.">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <div style={{ transform: "scale(0.72)", transformOrigin: "top center", marginBottom: -260 }}>
            <DeviceFrame variant="mobile">
              <EmailApp />
            </DeviceFrame>
          </div>
        </div>
      </Section>

      <Section title="Live -- Music player" desc="Four-tab audio app: Listen, Search, Library, Liked. A now-playing row with progress and transport controls shows how the tab bar coexists with rich, layered content.">
        <div style={{ display: "flex", justifyContent: "center", padding: "24px 0" }}>
          <div style={{ transform: "scale(0.72)", transformOrigin: "top center", marginBottom: -260 }}>
            <DeviceFrame variant="mobile">
              <MusicApp />
            </DeviceFrame>
          </div>
        </div>
      </Section>
    </PageBody>
  );
}
