"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { NAV, allItems } from "@/lib/nav";

export function CommandTrigger() {
  const open = () => {
    window.dispatchEvent(new CustomEvent("ks-cmdk:open"));
  };
  return (
    <button
      className="ks-cmdk-trigger"
      onClick={open}
      aria-label="Open command palette (⌘K)"
      title="Search · ⌘K"
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
    </button>
  );
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);

  // Two-stage mount: mount first (opacity 0), then flip to visible next frame for CSS transition.
  // On close, flip visible off → wait for transition → unmount.
  useEffect(() => {
    if (open) {
      setMounted(true);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setMounted(false), 260);
      return () => clearTimeout(timer);
    }
  }, [open]);

  const items = useMemo(() => allItems(), []);
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.title.toLowerCase().includes(q) ||
        (i.klass && i.klass.toLowerCase().includes(q)),
    );
  }, [query, items]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setCursor(0);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape") {
        setOpen((o) => {
          if (o) {
            setQuery("");
            setCursor(0);
            return false;
          }
          return o;
        });
      }
    };
    const openHandler = () => setOpen(true);
    window.addEventListener("keydown", handler);
    window.addEventListener("ks-cmdk:open", openHandler);
    return () => {
      window.removeEventListener("keydown", handler);
      window.removeEventListener("ks-cmdk:open", openHandler);
    };
  }, []);

  useEffect(() => {
    setCursor(0);
  }, [query]);

  if (!mounted) return null;

  const go = (i: number) => {
    const item = filtered[i];
    if (!item) return;
    router.push(item.href);
    close();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => Math.min(c + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) => Math.max(c - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      go(cursor);
    }
  };

  return (
    <div className={`ks-cmdk-backdrop${visible ? " is-open" : ""}`} onClick={close}>
      <div
        className="kairoz-command"
        style={{ width: 560 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="kairoz-command-input-wrap">
          <input
            className="kairoz-command-input"
            placeholder="Search or run a command…"
            value={query}
            autoFocus
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onKeyDown}
          />
          <kbd className="kairoz-kbd">ESC</kbd>
        </div>
        {renderGroups(filtered, cursor, go, query)}
      </div>
    </div>
  );
}

function renderGroups(
  filtered: ReturnType<typeof allItems>,
  cursor: number,
  go: (i: number) => void,
  query: string,
) {
  if (filtered.length === 0) {
    return (
      <div style={{ padding: 16, color: "var(--text-tertiary)", fontSize: 12 }}>
        Nothing found.
      </div>
    );
  }
  if (query.trim()) {
    return (
      <>
        <div className="kairoz-command-group-label">Results</div>
        {filtered.map((item, i) => (
          <button
            key={item.href}
            className="kairoz-command-item"
            style={
              i === cursor
                ? { background: "var(--bg-selected)", color: "var(--text-primary)" }
                : undefined
            }
            onMouseEnter={() => {}}
            onClick={() => go(i)}
          >
            <span>{item.title}</span>
            {item.klass && (
              <span className="kairoz-command-item-shortcut">
                <code style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{item.klass}</code>
              </span>
            )}
          </button>
        ))}
      </>
    );
  }
  let index = 0;
  return (
    <>
      {NAV.map((group) => (
        <div key={group.label}>
          <div className="kairoz-command-group-label">{group.label}</div>
          {group.items.map((item) => {
            const isActive = index === cursor;
            const i = index++;
            return (
              <button
                key={item.href}
                className="kairoz-command-item"
                style={
                  isActive
                    ? { background: "var(--bg-selected)", color: "var(--text-primary)" }
                    : undefined
                }
                onClick={() => go(i)}
              >
                <span>{item.title}</span>
                {item.klass && (
                  <span className="kairoz-command-item-shortcut">
                    <code style={{ fontSize: 11, color: "var(--text-tertiary)" }}>{item.klass}</code>
                  </span>
                )}
              </button>
            );
          })}
        </div>
      ))}
    </>
  );
}
