"use client";

import { useEffect, useState, useCallback } from "react";

export function SidebarToggle() {
  const [collapsed, setCollapsed] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("kairoz-sidebar");
    const isCollapsed = saved === "collapsed";
    setCollapsed(isCollapsed);
    document.documentElement.setAttribute("data-sidebar", isCollapsed ? "collapsed" : "expanded");
    setMounted(true);
  }, []);

  const toggle = useCallback(() => {
    const next = !collapsed;
    setCollapsed(next);
    document.documentElement.setAttribute("data-sidebar", next ? "collapsed" : "expanded");
    localStorage.setItem("kairoz-sidebar", next ? "collapsed" : "expanded");
  }, [collapsed]);

  return (
    <button
      className="ks-sidebar-toggle"
      onClick={toggle}
      aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
      title={mounted ? (collapsed ? "Expand sidebar" : "Collapse sidebar") : "Toggle sidebar"}
    >
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <line x1="9" y1="4" x2="9" y2="20" />
      </svg>
    </button>
  );
}
