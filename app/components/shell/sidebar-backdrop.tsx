"use client";

export function SidebarBackdrop() {
  const close = () => {
    document.documentElement.setAttribute("data-sidebar", "collapsed");
    localStorage.setItem("kairoz-sidebar", "collapsed");
  };
  return <div className="ks-sidebar-backdrop" onClick={close} aria-hidden="true" />;
}
