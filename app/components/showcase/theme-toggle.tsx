"use client";

import { useEffect, useState, useCallback } from "react";

type Mode = "light" | "dark" | "system";

function applyTheme(mode: Mode) {
  const effective =
    mode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : mode;
  document.documentElement.setAttribute("data-theme", effective);
}

export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = (localStorage.getItem("kairoz-theme") as Mode | null) ?? "system";
    setMode(saved);
    applyTheme(saved);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mode !== "system") return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => applyTheme("system");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  const pick = useCallback((next: Mode) => {
    setMode(next);
    applyTheme(next);
    localStorage.setItem("kairoz-theme", next);
  }, []);

  return (
    <div className="ks-theme-group" role="radiogroup" aria-label="Theme">
      <button
        className={`ks-theme-group-btn${mounted && mode === "light" ? " is-active" : ""}`}
        onClick={() => pick("light")}
        aria-label="Light"
        aria-checked={mode === "light"}
        role="radio"
        title="Light"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      </button>
      <button
        className={`ks-theme-group-btn${mounted && mode === "dark" ? " is-active" : ""}`}
        onClick={() => pick("dark")}
        aria-label="Dark"
        aria-checked={mode === "dark"}
        role="radio"
        title="Dark"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      </button>
      <button
        className={`ks-theme-group-btn${mounted && mode === "system" ? " is-active" : ""}`}
        onClick={() => pick("system")}
        aria-label="System"
        aria-checked={mode === "system"}
        role="radio"
        title="System"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" />
          <line x1="8" y1="21" x2="16" y2="21" />
          <line x1="12" y1="17" x2="12" y2="21" />
        </svg>
      </button>
    </div>
  );
}
