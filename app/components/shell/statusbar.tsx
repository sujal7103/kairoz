import { componentCount } from "@/lib/nav";

export function Statusbar() {
  return (
    <footer className="kairoz-statusbar">
      <div className="ks-statusbar-slot">
        <span className="kairoz-dot kairoz-dot-success" />
        <span>Ready</span>
      </div>
      <div className="ks-statusbar-slot">{componentCount()} components</div>
      <div className="ks-statusbar-slot">Kairoz 0.1.0</div>
      <div style={{ flex: 1 }} />
      <div className="ks-statusbar-slot">
        <kbd className="kairoz-kbd">⌘K</kbd>
        <span>palette</span>
      </div>
    </footer>
  );
}
