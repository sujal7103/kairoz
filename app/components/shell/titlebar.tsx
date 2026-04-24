import { ThemeToggle } from "@/components/showcase/theme-toggle";
import { CommandTrigger } from "@/components/command-palette";
import { SidebarToggle } from "@/components/shell/sidebar-toggle";

export function Titlebar() {
  return (
    <header className="kairoz-titlebar">
      <div className="ks-titlebar-brand">
        <SidebarToggle />
        <span className="ks-titlebar-brand-dot" />
        <span>Kairoz</span>
      </div>
      <div style={{ margin: "auto" }}></div>
      <div className="ks-titlebar-right">
        <a
          href="https://github.com/sujal7103/kairoz"
          target="_blank"
          rel="noopener noreferrer"
          className="ks-social-link"
          aria-label="GitHub"
          title="github.com/sujal7103/kairoz"
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.11.79-.25.79-.55v-1.94c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.27-1.68-1.27-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.76 2.69 1.25 3.35.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.07 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.77 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.6.23 2.78.12 3.07.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.55A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </a>
        <a
          href="https://mailto:patilsujal101@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="ks-social-link"
          aria-label="Discord"
          title="Join our Discord"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M19.27 5.33A18.83 18.83 0 0 0 14.6 4l-.2.36a16.74 16.74 0 0 1 4.06 1.9 15.16 15.16 0 0 0-5.67-1.1 15.18 15.18 0 0 0-5.77 1.12 16.64 16.64 0 0 1 4.14-1.93L10.95 4a18.92 18.92 0 0 0-4.66 1.34A19.95 19.95 0 0 0 3 15.58a18.84 18.84 0 0 0 5.69 2.85l.4-.55c-1-.36-2-.87-2.9-1.5.25.18.56.35.84.5a12.47 12.47 0 0 0 9.94 0c.28-.15.59-.32.84-.5a9.92 9.92 0 0 1-2.9 1.5l.4.55A18.78 18.78 0 0 0 21 15.58a19.87 19.87 0 0 0-1.73-10.25Zm-9.66 8.4c-.92 0-1.67-.84-1.67-1.88s.73-1.89 1.67-1.89 1.69.85 1.68 1.89c0 1.04-.74 1.88-1.68 1.88Zm4.8 0c-.92 0-1.67-.84-1.67-1.88s.73-1.89 1.67-1.89 1.68.85 1.67 1.89c0 1.04-.74 1.88-1.67 1.88Z" />
          </svg>
        </a>
        <span className="ks-titlebar-sep" aria-hidden="true" />
        <CommandTrigger />
        <ThemeToggle />
      </div>
    </header>
  );
}
