"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/nav";

export function Sidebar() {
  const pathname = usePathname();
  const onNavClick = () => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 768px)").matches) {
      document.documentElement.setAttribute("data-sidebar", "collapsed");
      localStorage.setItem("kairoz-sidebar", "collapsed");
    }
  };
  return (
    <nav>
      {NAV.map((group) => (
        <div className="ks-nav-group" key={group.label}>
          <div className="ks-nav-label">{group.label}</div>
          <ul className="ks-nav-list">
            {group.items.map((item) => {
              const active = pathname === item.href;
              return (
                <li className="ks-nav-item" key={item.href}>
                  <Link
                    href={item.href}
                    className={active ? "is-active" : ""}
                    onClick={onNavClick}
                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </nav>
  );
}
